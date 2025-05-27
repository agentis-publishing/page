import { createClient } from '@supabase/supabase-js';

// Use environment variables with fallback values for static builds
// These environment variables are available client-side through Next.js config
// They're different from the server-side SERVICE_ROLE_KEY used in Cloudflare Functions
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a safer client that handles static builds
const createSafeClient = () => {
  // If we're in a build environment or missing env vars, return a mock client
  if (typeof window === 'undefined' || !supabaseUrl || !supabaseAnonKey) {
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        signInWithPassword: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
        signUp: () => Promise.resolve({ data: { user: null, session: null }, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        resetPasswordForEmail: () => Promise.resolve({ error: null }),
        updateUser: () => Promise.resolve({ data: { user: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
        insert: () => Promise.resolve({ data: null, error: null }),
        update: () => Promise.resolve({ data: null, error: null }),
        upsert: () => Promise.resolve({ data: null, error: null }),
      }),
      functions: {
        invoke: () => Promise.resolve({ data: null, error: null }),
      },
    } as unknown as ReturnType<typeof createClient>;
  }
  
  // Enhanced debugging for environment variables (only in browser console)
  if (typeof window !== 'undefined') {
    console.log('Supabase Client Init:', { 
      hasUrl: !!supabaseUrl, 
      hasKey: !!supabaseAnonKey,
      env: process.env.NODE_ENV,
      url: supabaseUrl.substring(0, 8) + '...' // Log just the beginning for security
    });
  }
  
  // Get current site URL for redirects
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  // Only log in browser to avoid build-time console output
  if (typeof window !== 'undefined' && siteUrl) {
    console.log('Using site URL for auth redirects:', siteUrl);
  }
  
  // Create the real client for runtime
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce'
    },
    global: {
      fetch: (...args) => {
        return fetch(...args).catch(err => {
          console.error('Supabase fetch error:', err);
          throw err;
        });
      }
    }
  });
}

// Export the client instance
export const supabase = createSafeClient();

// Helper functions
export const isClient = typeof window !== 'undefined';