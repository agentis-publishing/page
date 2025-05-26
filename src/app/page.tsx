import { Button } from "@/components/neo/Button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated with improved spacing */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-none">
                AGENTIS
                <span className="block text-accent">SCIENCE</span>
                <span className="text-4xl md:text-5xl text-gray-600">.</span>
              </h1>

              <p className="text-xl font-medium mb-8 text-gray-700 max-w-2xl">
                A peer-reviewed, AI-assisted, open-access publishing platform
                democratizing scientific research across multiple disciplines.
              </p>

              <div className="inline-block p-6 border-4 border-black bg-white shadow-[4px_4px_0px_#000] mb-12">
                <span className="font-mono text-sm font-bold">MULTIAGENT REVIEWER STACK</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 border-4 border-black bg-accent shadow-[8px_8px_0px_#000] flex items-center justify-center rotating">
                <div className="text-white font-display font-bold text-4xl">AS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Journal Tiles Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              CHOOSE YOUR JOURNAL
            </h2>
            <p className="text-gray-600 text-lg">Select the journal that best fits your research needs</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agentis Main Card */}
            <Link href="/about" className="block">
              <div className="p-8 border-4 border-black bg-yellow-400 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 cursor-pointer">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-display text-xl font-bold mb-4 text-black">AGENTIS</h3>
                <p className="text-black text-sm mb-6 leading-relaxed">
                  General scientific research across all disciplines.
                </p>
                <div className="inline-block px-4 py-2 bg-black text-white font-bold text-xs uppercase tracking-wider">
                  EXPLORE →
                </div>
              </div>
            </Link>

            {/* Agentis Biology Card */}
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

            {/* Agentis Science Data Card */}
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
        </div>
      </section>

      {/* About Section with Cards */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Card */}
            <div className="p-10 border-4 border-black bg-light-gray shadow-[6px_6px_0px_#000]">
              <h2 className="font-display text-3xl font-bold mb-8">
                ABOUT AGENTIS
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-accent">Agentis Science</strong> is revolutionizing scientific publishing through
                  AI-assisted peer review and open-access principles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our platform combines traditional peer review with cutting-edge AI technology
                  to provide faster, more comprehensive manuscript evaluation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From breakthrough biological discoveries to comprehensive datasets,
                  Agentis Science is your gateway to the future of scientific communication.
                </p>
              </div>
              <div className="flex gap-4 mt-10">
                <Button size="md" href="/about">
                  LEARN MORE
                </Button>
                <Button size="md" variant="outline" href="/submit-paper">
                  SUBMIT RESEARCH
                </Button>
              </div>
            </div>

            {/* Multiagent Stack Card */}
            <div className="p-10 border-4 border-black bg-accent text-white shadow-[6px_6px_0px_#000]">
              <h3 className="font-display text-2xl font-bold mb-8">MULTIAGENT REVIEWER STACK</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-white bg-white text-accent flex items-center justify-center font-bold text-lg">
                    AI
                  </div>
                  <span className="font-bold">AI-Assisted Review</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-white bg-white text-accent flex items-center justify-center font-bold text-lg">
                    OS
                  </div>
                  <span className="font-bold">Open Science</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-white bg-white text-accent flex items-center justify-center font-bold text-lg">
                    PR
                  </div>
                  <span className="font-bold">Peer Review</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-white bg-white text-accent flex items-center justify-center font-bold text-lg">
                    SC
                  </div>
                  <span className="font-bold">Scientific Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-16">
            WHY CHOOSE AGENTIS?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border-4 border-black bg-white shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 text-center">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="font-display text-xl font-bold mb-4">FAST REVIEW</h3>
              <p className="text-gray-700">
                AI-assisted peer review reduces time to publication while maintaining quality
              </p>
            </div>

            <div className="p-10 border-4 border-black bg-white shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 text-center">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="font-display text-xl font-bold mb-4">OPEN ACCESS</h3>
              <p className="text-gray-700">
                All research freely available to the global scientific community
              </p>
            </div>

            <div className="p-10 border-4 border-black bg-white shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-150 text-center">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="font-display text-xl font-bold mb-4">AI ENHANCED</h3>
              <p className="text-gray-700">
                Cutting-edge AI tools support both authors and reviewers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Cards */}
      <section className="py-20 px-6 md:px-8 bg-dark text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-16 text-center">
            JOURNAL STATISTICS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-8 border-4 border-white bg-accent text-center shadow-[4px_4px_0px_#fff]">
              <div className="font-display font-black text-4xl mb-2">342</div>
              <div className="font-bold text-sm uppercase tracking-wider">Published Papers</div>
            </div>
            <div className="p-8 border-4 border-white bg-white text-black text-center shadow-[4px_4px_0px_#fff]">
              <div className="font-display font-black text-4xl mb-2">1,247</div>
              <div className="font-bold text-sm uppercase tracking-wider">Authors</div>
            </div>
            <div className="p-8 border-4 border-white bg-orange-dark text-center shadow-[4px_4px_0px_#fff]">
              <div className="font-display font-black text-4xl mb-2">89%</div>
              <div className="font-bold text-sm uppercase tracking-wider">Acceptance Rate</div>
            </div>
            <div className="p-8 border-4 border-white bg-white text-black text-center shadow-[4px_4px_0px_#fff]">
              <div className="font-display font-black text-4xl mb-2">14</div>
              <div className="font-bold text-sm uppercase tracking-wider">Days to Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Card */}
      <section className="py-20 px-6 md:px-8 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 border-4 border-white bg-accent shadow-[6px_6px_0px_#fff]">
            <h2 className="font-display text-4xl font-bold mb-8">
              JOIN THE FUTURE OF SCIENCE
            </h2>
            <p className="text-xl mb-12 text-white/90">
              Ready to publish your research or explore cutting-edge discoveries?
              Choose your path and join the Agentis Science community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" href="/submit-paper">
                SUBMIT YOUR RESEARCH
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent" href="/contact">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
