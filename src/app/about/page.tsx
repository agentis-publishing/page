import { Button } from "@/components/neo/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/neo/Card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-light-gray border-b-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-display-lg font-bold mb-6">
            About Agentis Publishing
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A grassroots open-access journal reimagining peer review through artificial intelligence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 border-b-3 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-md font-bold mb-6 border-b-3 border-accent pb-2 inline-block">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Agentis, the flagship AI-reviewed journal, publishes original reports and review articles that advance fundamental knowledge, in the broadest sense, about science. Agentis Biology focuses on proteins, nucleic acids, complex molecules, and the rich genomic landscapes uncovered through microbial genomics and environmental DNA (eDNA) studies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The journal welcomes experimental, computational, or theoretical investigations into protein function, including analyses of mechanism, structure, folding, design, and evolution, and genome-scale explorations that elucidate microbial diversity, metabolic potential, and ecological interactions captured via eDNA.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Additionally, we invite papers discussing the practical applications of macromolecular and genomic science, spanning therapeutics, protein-based biomaterials, bionanotechnology, synthetic biology, bioelectronics, and field-deployable eDNA workflows that accelerate biodiversity monitoring and ecosystem management.
              </p>
              <Button href="/submit-paper">
                Submit Your Research
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent border-3 border-black shadow-neo-lg flex items-center justify-center">
                <div className="text-white font-display font-bold text-6xl">🧬</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-light-gray border-b-3 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-64 h-64 bg-dark border-3 border-black shadow-neo-lg flex items-center justify-center">
                <div className="text-white font-display font-bold text-6xl">🤖</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-display-md font-bold mb-6 border-b-3 border-accent pb-2 inline-block">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We envision a future where:
              </p>
              <ul className="text-lg text-gray-700 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Scientific publishing is open, accessible, and equitable
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Peer review is rigorous yet efficient, supported by AI tools that enhance human expertise
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Research is evaluated on its merits, not the prestige of authors or institutions
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  The scientific community actively participates in governance and decision-making
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-3">•</span>
                  Technology serves to advance scientific communication and collaboration
                </li>
              </ul>
              <Button variant="outline" href="/browse-issues">
                Explore Our Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 border-b-3 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-3 border-accent pb-2 inline-block">
            Our Approach
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Agentis Biology combines traditional scientific publishing values with innovative AI technologies:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
                <CardTitle>Multi-agent Reviewer Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our autonomous AI reviewers run a battery of checks for methods integrity,
                  statistical soundness, and citation completeness, within minutes. Human co-review
                  is available during the pilot for those who want it, but the agents alone already
                  deliver a faster, transparent, and fully traceable review.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-dark border-3 border-black flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">🏛️</span>
                </div>
                <CardTitle>Community Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Agentis Biology is governed by a diverse board of scientists, ensuring that
                  decisions reflect the needs and values of the research community. We maintain
                  transparency in our processes and regularly solicit feedback from authors,
                  reviewers, and readers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">🔓</span>
                </div>
                <CardTitle>Open Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  All articles published in Agentis Biology are freely available to read,
                  download, and share. We believe that removing paywalls accelerates scientific
                  progress and ensures that research can benefit society at large.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-16 h-16 bg-dark border-3 border-black flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">💡</span>
                </div>
                <CardTitle>Innovative Publishing Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We operate on a cost-recovery model, with minimal fees to cover operational
                  expenses. Our focus is on disseminating quality research, not generating profit.
                  We&apos;re constantly exploring new ways to make publishing more efficient and accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-light-gray border-b-3 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-3 border-accent pb-2 inline-block">
            Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            Agentis Biology was founded by a team of scientists, technologists, and publishing experts
            committed to improving scientific communication. Our editorial board includes researchers
            from diverse backgrounds, disciplines, and career stages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-20 h-20 bg-accent border-3 border-black flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-2xl">FS</span>
                </div>
                <CardTitle className="text-center">Frederik Schulz, PhD</CardTitle>
                <p className="text-center text-accent font-bold">Founder & Editorial Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Computational biologist with expertise in AI applications for scientific research.
                  Experienced journal editor and 10+ years experience in scientific publishing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-20 h-20 bg-dark border-3 border-black flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-2xl">SJ</span>
                </div>
                <CardTitle className="text-center">Sean Jungbluth, PhD</CardTitle>
                <p className="text-center text-accent font-bold">Founder & Research Director</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  SFSU, Knowledgegraph expert, AI-bioinformatics, ex-Berkeley Lab, ex-NOAA.
                  Experienced journal editor and 10+ years experience in scientific publishing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block">
              <CardHeader>
                <div className="w-16 h-16 bg-accent border-3 border-black flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">+</span>
                </div>
                <CardTitle>Join Our Team</CardTitle>
                <p className="text-accent font-bold">Various Positions</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We&apos;re looking for passionate individuals to help transform scientific publishing.
                </p>
                <Button size="sm">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-accent text-white border-b-3 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-12">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="font-display text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-lg opacity-90">
                We believe in open processes, clear communication, and accountability in all aspects of our operation.
              </p>
            </div>

            <div className="text-left">
              <h3 className="font-display text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-lg opacity-90">
                We continuously explore new technologies and approaches to improve scientific publishing.
              </p>
            </div>

            <div className="text-left">
              <h3 className="font-display text-2xl font-bold mb-4">Inclusivity</h3>
              <p className="text-lg opacity-90">
                We strive to create a platform that welcomes diverse perspectives, backgrounds, and ideas.
              </p>
            </div>

            <div className="text-left">
              <h3 className="font-display text-2xl font-bold mb-4">Scientific Integrity</h3>
              <p className="text-lg opacity-90">
                We uphold the highest standards of scientific rigor, ethics, and quality in all published work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-6">
            Join Us
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We invite researchers, reviewers, and readers to join our community and help shape the future of scientific publishing. There are many ways to get involved:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 border-3 border-black bg-light-gray">
              <p className="font-bold">Submit your research for publication</p>
            </div>
            <div className="p-4 border-3 border-black bg-light-gray">
              <p className="font-bold">Become a reviewer and contribute your expertise</p>
            </div>
            <div className="p-4 border-3 border-black bg-light-gray">
              <p className="font-bold">Provide feedback on our platform and processes</p>
            </div>
            <div className="p-4 border-3 border-black bg-light-gray">
              <p className="font-bold">Spread the word about open access and AI-enhanced peer review</p>
            </div>
            <div className="p-4 border-3 border-black bg-light-gray">
              <p className="font-bold">Contact us with ideas, questions, or suggestions</p>
            </div>
            <div className="p-4 border-3 border-black bg-accent text-white">
              <p className="font-bold">Apply now</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" href="/submit-paper">
              Submit Research
            </Button>
            <Button size="lg" variant="outline" href="/for-reviewers">
              Become a Reviewer
            </Button>
            <Button size="lg" variant="ghost" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}