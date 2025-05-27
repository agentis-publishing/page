import Auth from '@/components/Auth'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cyber-yellow via-hot-pink to-electric-blue">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-display-sm font-black text-white mb-4">
            AGENTIS SCIENCE
          </h1>
          <p className="text-white">
            Access your author dashboard and submit papers
          </p>
        </div>

        <Auth />

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