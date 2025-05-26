import Link from 'next/link'
import { Button } from '@/components/neo/Button'

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <section className="py-16 px-4 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-display-lg font-bold mb-6">
            ARTICLE NOT FOUND
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The article you&apos;re looking for is not available yet.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black p-8 shadow-neo-lg text-center">
            <div className="text-6xl mb-6">📄</div>
            <h2 className="font-display text-2xl font-bold mb-4">
              COMING SOON
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Our article database is currently being populated. Articles may be:
            </p>
            <ul className="text-left list-disc list-inside mb-8 space-y-2 max-w-md mx-auto">
              <li>Still under review</li>
              <li>Recently accepted and being processed</li>
              <li>Part of our upcoming publication schedule</li>
            </ul>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" href="/browse">
                BROWSE AVAILABLE ARTICLES
              </Button>
              <Button size="lg" variant="outline" href="/">
                RETURN HOME
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Suggestions */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center">
            EXPLORE OUR JOURNALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/agentis-biology" className="block">
              <div className="p-8 border-4 border-black bg-blue-400 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 cursor-pointer">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="font-display text-xl font-bold mb-4 text-black">AGENTIS BIOLOGY</h3>
                <p className="text-black text-sm mb-6 leading-relaxed">
                  Proteins, nucleic acids, and microbial genomics.
                </p>
                <div className="inline-block px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-wider">
                  EXPLORE →
                </div>
              </div>
            </Link>

            <Link href="/agentis-datasets" className="block">
              <div className="p-8 border-4 border-black bg-orange-400 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 cursor-pointer">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-display text-xl font-bold mb-4 text-black">AGENTIS SCIENCE DATA</h3>
                <p className="text-black text-sm mb-6 leading-relaxed">
                  Open datasets for computational biology.
                </p>
                <div className="inline-block px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-wider">
                  EXPLORE →
                </div>
              </div>
            </Link>

            <Link href="/agentis-coming-soon" className="block">
              <div className="p-8 border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 cursor-pointer">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-display text-xl font-bold mb-4 text-black">AGENTIS</h3>
                <p className="text-black text-sm mb-6 leading-relaxed">
                  General scientific research across all disciplines.
                </p>
                <div className="inline-block px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-wider">
                  LEARN MORE →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
