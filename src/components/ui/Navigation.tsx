'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/neo/Button'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="border-b-3 border-black bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold py-4 text-black hover:text-accent transition-colors">
            Agentis Biology
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
            <Button variant="ghost" size="sm" href="/login">
              Sign In
            </Button>
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
                <Button variant="outline" size="sm" href="/login" className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}