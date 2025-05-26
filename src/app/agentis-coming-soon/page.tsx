import Link from 'next/link'
import { Button } from '@/components/neo/Button'

export default function AgentisComingSoon() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-8 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 border-4 border-black bg-yellow-400 shadow-[8px_8px_0px_#000]">
            <div className="text-6xl mb-8">🔬</div>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6 text-black">
              AGENTIS
            </h1>
            <div className="inline-block px-6 py-3 bg-red-500 text-white font-bold text-lg uppercase tracking-wider mb-8 border-2 border-black">
              COMING SOON
            </div>
            <p className="text-xl md:text-2xl text-black font-bold mb-8">
              The Flagship Journal of Agentis Science
            </p>
            <p className="text-lg text-black/80 leading-relaxed max-w-2xl mx-auto">
              Our premier publication for groundbreaking scientific research across all disciplines.
              From physics and chemistry to biology and beyond, Agentis will be your gateway to
              the most innovative discoveries in science.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-16 text-center">
            WHAT TO EXPECT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border-4 border-black bg-light-gray shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-display text-xl font-bold mb-4">PREMIER RESEARCH</h3>
              <p className="text-gray-700 leading-relaxed">
                High-impact research across all scientific disciplines, from fundamental discoveries to applied innovations.
              </p>
            </div>

            <div className="p-8 border-4 border-black bg-light-gray shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-display text-xl font-bold mb-4">FAST PUBLICATION</h3>
              <p className="text-gray-700 leading-relaxed">
                AI-enhanced peer review process ensuring rapid publication without compromising quality.
              </p>
            </div>

            <div className="p-8 border-4 border-black bg-light-gray shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-display text-xl font-bold mb-4">GLOBAL REACH</h3>
              <p className="text-gray-700 leading-relaxed">
                Open access publication ensuring your research reaches scientists worldwide.
              </p>
            </div>

            <div className="p-8 border-4 border-black bg-light-gray shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-display text-xl font-bold mb-4">AI-ENHANCED</h3>
              <p className="text-gray-700 leading-relaxed">
                Cutting-edge AI tools to support manuscript preparation, review, and discovery.
              </p>
            </div>

            <div className="p-8 border-4 border-black bg-light-gray shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-display text-xl font-bold mb-4">EXCELLENCE</h3>
              <p className="text-gray-700 leading-relaxed">
                Rigorous standards ensuring only the highest quality research reaches publication.
              </p>
            </div>

            <div className="p-8 border-4 border-black bg-light-gray shadow-[4px_4px_0px_#000]">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-display text-xl font-bold mb-4">INTERDISCIPLINARY</h3>
              <p className="text-gray-700 leading-relaxed">
                Bridging disciplines to foster collaboration and breakthrough discoveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 md:px-8 bg-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-16">
            LAUNCH TIMELINE
          </h2>

          <div className="p-10 border-4 border-white bg-accent shadow-[6px_6px_0px_#fff]">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="font-display text-2xl font-bold mb-6">LAUNCHING 2024</h3>
            <p className="text-lg leading-relaxed mb-8">
              We&apos;re putting the finishing touches on our flagship journal.
              Agentis will launch with a comprehensive platform for submitting,
              reviewing, and publishing groundbreaking scientific research.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="font-bold">Platform Development Complete</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <span className="font-bold">Editorial Board Assembly</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-4 h-4 bg-white/50 rounded-full"></div>
                <span className="text-white/70">Beta Testing Phase</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                <span className="text-white/50">Official Launch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-20 px-6 md:px-8 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_#000]">
            <h2 className="font-display text-4xl font-bold mb-8 text-black">
              STAY UPDATED
            </h2>
            <p className="text-xl text-black mb-12">
              Want to be notified when Agentis launches?
              Follow our progress and be among the first to submit your research.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" href="/contact">
                GET NOTIFIED
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400" href="/">
                EXPLORE OTHER JOURNALS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Meanwhile Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-16 text-center">
            MEANWHILE, EXPLORE OUR ACTIVE JOURNALS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>
    </div>
  )
}
