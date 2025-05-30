'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/neo/Button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { User } from '@supabase/supabase-js'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }

    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const getUserInitials = (email: string) => {
    // Try to extract name from email (before @)
    const name = email.split('@')[0]
    // Take first two characters or first and last if has separator
    if (name.includes('.')) {
      const parts = name.split('.')
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    } else if (name.includes('_')) {
      const parts = name.split('_')
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    } else {
      return name.substring(0, 2).toUpperCase()
    }
  }

  return (
    <nav className="border-b-3 border-black bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold py-4 text-black hover:text-accent transition-colors">
            Agentis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0">
            <Link
              href="/"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              About
            </Link>
            <Link
              href="/agentis-biology"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              Biology
            </Link>
            <Link
              href="/agentis-datasets"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              Datasets
            </Link>
            <Link
              href="/browse-issues"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              Browse
            </Link>
            <Link
              href="/submit-paper"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              Submit
            </Link>
            <Link
              href="/contact"
              className="px-4 py-4 border-l-3 border-black font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="w-10 h-10 border-3 border-black bg-electric-blue text-white font-bold flex items-center justify-center hover:shadow-neo transition-shadow"
                  title={user.email}
                >
                  {getUserInitials(user.email || '')}
                </Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="sm" href="/login">
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 border-3 border-black bg-white hover:bg-accent hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all mt-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-3 border-black bg-white">
            <div className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/agentis-biology"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Biology
              </Link>
              <Link
                href="/agentis-datasets"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Datasets
              </Link>
              <Link
                href="/browse-issues"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link
                href="/submit-paper"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 font-bold text-sm uppercase tracking-wider text-black hover:bg-accent hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-2">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 border-3 border-black bg-electric-blue text-white font-bold hover:shadow-neo transition-shadow"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="w-8 h-8 border-2 border-white bg-white text-electric-blue flex items-center justify-center">
                        {getUserInitials(user.email || '')}
                      </span>
                      <span className="text-sm">Dashboard</span>
                    </Link>
                    <Button variant="outline" size="sm" onClick={handleSignOut} className="w-full">
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" href="/login" className="w-full">
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}