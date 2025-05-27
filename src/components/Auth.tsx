'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
import { Button } from '@/components/neo/Button';
import { Input } from '@/components/neo/Input';

type AuthMode = 'signin' | 'signup' | 'forgot';

export default function Auth() {
  const router = useRouter();
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<AuthMode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [institution, setInstitution] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setInstitution('');
    setMessage(null);
    setError(null);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
      setMessage('Success! Redirecting...');
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      setError((err as Error).message || 'An error occurred during sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (!firstName || !lastName || !institution) {
      setError('Please fill out all fields');
      setLoading(false);
      return;
    }

    try {
      const { error } = await signUp(
        email, 
        password, 
        {
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          institution: institution.trim()
        }
      );

      if (error) throw error;
      
      setMessage('Success! Check your email for the confirmation link.');
      resetForm();
    } catch (err) {
      const errMsg = (err as Error).message;
      if (errMsg.includes('row-level security')) {
        setError('Registration issue: Profile creation failed due to permissions. Please contact support.');
      } else if (errMsg.includes('already registered')) {
        setError('This email is already registered. Try signing in instead.');
      } else {
        setError(errMsg || 'An error occurred during sign up');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { error } = await resetPassword(email);
      if (error) throw error;
      
      setMessage('Check your email for the password reset link!');
      resetForm();
    } catch (err) {
      setError((err as Error).message || 'An error occurred during password reset');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-8">
        {message && (
          <div className="bg-green-100 border-2 border-green-400 p-4 mb-6">
            <p className="text-green-800 font-medium">{message}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-2 border-red-400 p-4 mb-6">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        <div className="flex border-b-2 border-black mb-6">
          <button
            onClick={() => { setMode('signin'); resetForm(); }}
            className={`py-2 px-4 font-bold transition-colors ${
              mode === 'signin'
                ? 'border-b-4 border-accent text-accent'
                : 'text-gray-600 hover:text-accent'
            }`}
          >
            SIGN IN
          </button>
          <button
            onClick={() => { setMode('signup'); resetForm(); }}
            className={`py-2 px-4 font-bold transition-colors ${
              mode === 'signup'
                ? 'border-b-4 border-accent text-accent'
                : 'text-gray-600 hover:text-accent'
            }`}
          >
            SIGN UP
          </button>
          <button
            onClick={() => { setMode('forgot'); resetForm(); }}
            className={`py-2 px-4 font-bold transition-colors ${
              mode === 'forgot'
                ? 'border-b-4 border-accent text-accent'
                : 'text-gray-600 hover:text-accent'
            }`}
          >
            FORGOT PASSWORD
          </button>
        </div>

        {mode === 'signin' && (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                EMAIL
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-bold mb-2">
                PASSWORD
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </Button>
          </form>
        )}

        {mode === 'signup' && (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-bold mb-2">
                  FIRST NAME
                </label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-bold mb-2">
                  LAST NAME
                </label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="institution" className="block font-bold mb-2">
                INSTITUTION
              </label>
              <Input
                id="institution"
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="signupEmail" className="block font-bold mb-2">
                EMAIL
              </label>
              <Input
                id="signupEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="signupPassword" className="block font-bold mb-2">
                PASSWORD
              </label>
              <Input
                id="signupPassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'SIGNING UP...' : 'SIGN UP'}
            </Button>
          </form>
        )}

        {mode === 'forgot' && (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div>
              <label htmlFor="resetEmail" className="block font-bold mb-2">
                EMAIL
              </label>
              <Input
                id="resetEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'SENDING...' : 'SEND RESET LINK'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}