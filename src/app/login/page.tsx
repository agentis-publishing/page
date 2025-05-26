'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/neo/Button'
import { Input } from '@/components/neo/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/neo/Card'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // TODO: Implement Supabase authentication
    console.log('Email sign in:', { email, password })
    
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  const signInWithProvider = async (provider: string) => {
    setIsLoading(true)
    
    // TODO: Implement OAuth providers
    console.log('OAuth sign in:', provider)
    
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cyber-yellow via-hot-pink to-electric-blue">
      <div className="w-full max-w-md">
        <Card className="p-8">
          <CardHeader className="text-center pb-8">
            <CardTitle className="font-display text-display-sm font-black mb-4">
              SIGN IN
            </CardTitle>
            <p className="text-gray-600">
              Access your author dashboard and submit papers
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* OAuth Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => signInWithProvider('orcid')}
                disabled={isLoading}
                className="w-full p-4 bg-white border-4 border-black font-bold text-sm uppercase tracking-wider
                         hover:bg-gray-100 transition-colors flex items-center justify-center gap-3
                         disabled:opacity-50 disabled:cursor-not-allowed
                         shadow-neo hover:shadow-neo-hover active:shadow-none
                         active:translate-x-1 active:translate-y-1"
              >
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-xs font-bold">
                  O
                </div>
                SIGN IN WITH ORCID
              </button>
              
              <button
                onClick={() => signInWithProvider('github')}
                disabled={isLoading}
                className="w-full p-4 bg-black text-white border-4 border-black font-bold text-sm uppercase tracking-wider
                         hover:bg-gray-900 transition-colors flex items-center justify-center gap-3
                         disabled:opacity-50 disabled:cursor-not-allowed
                         shadow-neo hover:shadow-neo-hover active:shadow-none
                         active:translate-x-1 active:translate-y-1"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
                  G
                </div>
                SIGN IN WITH GITHUB
              </button>
              
              <button
                onClick={() => signInWithProvider('google')}
                disabled={isLoading}
                className="w-full p-4 bg-white border-4 border-black font-bold text-sm uppercase tracking-wider
                         hover:bg-gray-100 transition-colors flex items-center justify-center gap-3
                         disabled:opacity-50 disabled:cursor-not-allowed
                         shadow-neo hover:shadow-neo-hover active:shadow-none
                         active:translate-x-1 active:translate-y-1"
              >
                <div className="w-6 h-6 bg-hot-pink rounded-full flex items-center justify-center text-white text-xs font-bold">
                  G
                </div>
                SIGN IN WITH GOOGLE
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-4 border-black"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white font-bold text-xl">OR</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div>
                <label htmlFor="email" className="block font-bold text-sm uppercase tracking-wider mb-2">
                  EMAIL ADDRESS
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block font-bold text-sm uppercase tracking-wider mb-2">
                  PASSWORD
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
              </Button>
            </form>

            {/* Links */}
            <div className="text-center space-y-2 pt-4">
              <p className="text-sm">
                <Link href="/forgot-password" className="font-bold underline hover:text-electric-blue">
                  Forgot your password?
                </Link>
              </p>
              <p className="text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="font-bold underline hover:text-electric-blue">
                  CREATE ONE
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white font-bold hover:text-cyber-yellow transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  )
} 