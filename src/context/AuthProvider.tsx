'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { UserProfile } from '@/types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, userData: Partial<UserProfile>) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  updatePassword: (password: string) => Promise<{ error: Error | null }>;
  updateProfile: (data: Partial<UserProfile>) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initial session check and subscription to auth changes
  useEffect(() => {
    async function getInitialSession() {
      try {
        setIsLoading(true);
        
        // Check for existing session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          setIsLoading(false);
          return;
        }
        
        if (session) {
          console.log('Session found:', session.user.email);
          setSession(session);
          setUser(session.user);
          
          // Fetch user profile
          await fetchUserProfile(session.user.id);
        } else {
          console.log('No session found');
          setSession(null);
          setUser(null);
          setProfile(null);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setSession(null);
        setUser(null);
        setProfile(null);
      } finally {
        setIsLoading(false);
      }
    }

    getInitialSession();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: Session | null) => {
        console.log(`Auth event: ${event}`);
        
        // Always update the session and user state immediately
        setSession(session);
        setUser(session?.user || null);
        
        if (session?.user) {
          // Trigger profile fetch for any auth event with a user
          await fetchUserProfile(session.user.id);
        } else {
          setProfile(null);
        }
        
        setIsLoading(false);
        
        // Force redirect for auth changes instead of just refreshing
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          router.push('/dashboard');
        }
        if (event === 'SIGNED_OUT') {
          router.push('/');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  // Fetch user profile data
  const fetchUserProfile = async (userId: string) => {
    try {
      console.log('Fetching user profile for user:', userId);
      
      // Get user profile
      const { data, error } = await supabase
        .from('users_profile')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
        
        // If the error is that no rows were returned, create a new profile
        if (error.code === 'PGRST116') {
          console.log('No profile found, creating one...');
          
          // Try to create a basic profile
          const userData = await supabase.auth.getUser();
          const userMeta = userData.data?.user?.user_metadata;
          
          const { error: createError } = await supabase
            .from('users_profile')
            .insert({
              id: userId,
              first_name: userMeta?.first_name || '',
              last_name: userMeta?.last_name || '',
              institution: userMeta?.institution || ''
            });
            
          if (createError) {
            console.error('Failed to create profile:', createError);
            return;
          }
          
          // Fetch the newly created profile
          const { data: newProfileData, error: newProfileError } = await supabase
            .from('users_profile')
            .select('*')
            .eq('id', userId)
            .single();
            
          if (newProfileError) {
            console.error('Error fetching new profile:', newProfileError);
            return;
          }
          
          console.log('New profile created and loaded:', newProfileData);
          setProfile(newProfileData as UserProfile);
          return;
        }
        
        return;
      }
      
      console.log('Profile loaded successfully:', data);
      setProfile(data as UserProfile);
    } catch (error) {
      console.error('Profile fetch error:', error);
    }
  };

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: error as Error };
    }
  };

  // Sign up with email and password
  const signUp = async (email: string, password: string, userData: Partial<UserProfile>) => {
    try {
      console.log('Signing up user with data:', {
        email: email,
        firstName: userData.first_name,
        lastName: userData.last_name,
        hasInstitution: !!userData.institution
      });
      
      // Get the current domain for redirects
      const origin = window.location.origin;
      const redirectUrl = `${origin}/dashboard`;
      console.log('Using redirect URL for signup:', redirectUrl);
      
      // Create auth user with more detailed options
      const { data, error: signUpError } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: {
            first_name: userData.first_name,
            last_name: userData.last_name,
            institution: userData.institution
          },
          emailRedirectTo: redirectUrl
        }
      });
      
      if (signUpError) {
        console.error('Sign up auth error:', signUpError);
        return { error: signUpError };
      }
      
      // Check if email confirmation was sent
      const identities = data?.user?.identities as { length: number }[] | undefined;
      if (identities?.length === 0) {
        console.error('User already exists but is not confirmed');
        return { error: new Error('This email is already registered but not confirmed. Please check your email for the confirmation link or try resetting your password.') };
      }
      
      // Check response for debugging
      console.log('Signup response:', {
        hasUser: !!data?.user,
        userId: data?.user?.id,
        userEmail: data?.user?.email,
        hasIdentities: data?.user?.identities ? data.user.identities.length > 0 : false,
        confirmationSent: data?.user?.confirmation_sent_at
      });
      
      // Successfully created auth user
      console.log('Auth user created, creating profile...', {
        userId: data?.user?.id
      });
      
      // Create profile record if signup was successful
      if (data?.user?.id) {
        try {
          const { error: profileError } = await supabase
            .from('users_profile')
            .insert({
              id: data.user.id,
              first_name: userData.first_name,
              last_name: userData.last_name,
              institution: userData.institution
            });
            
          if (profileError) {
            console.error('Failed to create profile:', profileError);
          }
        } catch (profileError) {
          console.error('Profile creation error:', profileError);
        }
      }
      
      return { error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: error as Error };
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      return { error };
    } catch (error) {
      console.error('Password reset error:', error);
      return { error: error as Error };
    }
  };
  
  // Update password
  const updatePassword = async (password: string) => {
    try {
      const { error } = await supabase.auth.updateUser({ password });
      return { error };
    } catch (error) {
      console.error('Password update error:', error);
      return { error: error as Error };
    }
  };

  // Sign out
  const signOut = async () => {
    console.log('Signing out...');
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Sign out timeout')), 3000));
    try {
      const result = await Promise.race([supabase.auth.signOut(), timeout]);
      const error = result instanceof Error ? result : (result as { error: Error | null }).error;
      if (error) {
        console.error('Supabase sign out error:', error);
      } else {
        console.log('Sign out successful');
        // Check if cookies are cleared
        const cookies = document.cookie.split(';');
        console.log('Cookies after sign out:', cookies);
        // Check session state
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Session state after sign out:', session);
        router.push('/');
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  // Update user profile
  const updateProfile = async (data: Partial<UserProfile>) => {
    if (!user) return { error: new Error('Not authenticated') };
    
    try {
      const { error } = await supabase
        .from('users_profile')
        .update(data)
        .eq('id', user.id);
      
      if (!error && profile) {
        setProfile({ ...profile, ...data });
      }
      
      return { error };
    } catch (error) {
      console.error('Profile update error:', error);
      return { error: error as Error };
    }
  };

  const value = {
    user,
    session,
    profile,
    isLoading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};