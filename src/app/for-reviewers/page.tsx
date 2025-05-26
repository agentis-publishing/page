import { Button } from '@/components/neo/Button'

export default function ForReviewers() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <section className="py-20 px-4 bg-purple-400 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-display-lg font-bold mb-6">
            FOR REVIEWERS
          </h1>
          <p className="text-2xl mb-8">
            Join our community of expert reviewers and help advance scientific knowledge
          </p>
          <Button size="lg" variant="secondary" href="/reviewer-signup">
            BECOME A REVIEWER
          </Button>
        </div>
      </section>

      {/* Why Review */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-4 border-purple-400 pb-4 inline-block w-full">
            WHY REVIEW FOR AGENTIS?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-8 text-center shadow-neo-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-display text-xl font-bold mb-4">IMPACT SCIENCE</h3>
              <p className="leading-relaxed">
                Help shape the future of scientific publishing by reviewing cutting-edge research
                across biology, data science, and interdisciplinary fields.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 text-center shadow-neo-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-display text-xl font-bold mb-4">EXPERT COMMUNITY</h3>
              <p className="leading-relaxed">
                Join a network of leading researchers and contribute to maintaining the highest
                standards of scientific rigor and integrity.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 text-center shadow-neo-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-display text-xl font-bold mb-4">RECOGNITION</h3>
              <p className="leading-relaxed">
                Receive recognition for your contributions through ORCID integration and
                public acknowledgment of your peer review service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="py-16 px-4 bg-white border-y-4 border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center">
            OUR REVIEW PROCESS
          </h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-purple-400 text-white font-display font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">INVITATION</h3>
                <p className="leading-relaxed">
                  Receive invitations to review manuscripts that match your expertise.
                  You can accept or decline based on your availability and interest.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-400 text-white font-display font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">REVIEW</h3>
                <p className="leading-relaxed">
                  Conduct thorough, constructive reviews focusing on scientific rigor,
                  methodology, and contribution to the field. Typical review time is 2-3 weeks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-400 text-white font-display font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">DECISION</h3>
                <p className="leading-relaxed">
                  Your review contributes to the editorial decision. Authors receive
                  constructive feedback to improve their work, regardless of the outcome.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-400 text-white font-display font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">RECOGNITION</h3>
                <p className="leading-relaxed">
                  Your contribution is recorded in your ORCID profile, and you may choose
                  to have your review published alongside accepted articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Guidelines */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-4 border-purple-400 pb-4 inline-block w-full">
            REVIEW GUIDELINES
          </h2>

          <div className="bg-white border-4 border-black p-8 shadow-neo-lg">
            <h3 className="font-display text-xl font-bold mb-4">What to Evaluate</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Scientific rigor and methodology</li>
              <li>Novelty and significance of findings</li>
              <li>Clarity of presentation and writing</li>
              <li>Appropriate use of statistics and data analysis</li>
              <li>Ethical considerations and compliance</li>
              <li>Reproducibility and data availability</li>
            </ul>

            <h3 className="font-display text-xl font-bold mb-4">Review Standards</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Provide constructive, specific feedback</li>
              <li>Maintain confidentiality throughout the process</li>
              <li>Declare any conflicts of interest</li>
              <li>Complete reviews within the agreed timeframe</li>
              <li>Focus on scientific merit, not personal opinions</li>
              <li>Suggest improvements where appropriate</li>
            </ul>

            <h3 className="font-display text-xl font-bold mb-4">Conflict of Interest</h3>
            <p className="mb-4 leading-relaxed">
              You should decline to review if you have:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal or professional relationships with the authors</li>
              <li>Financial interests in the research outcomes</li>
              <li>Recent collaborations with the authors</li>
              <li>Institutional conflicts that could bias your review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-purple-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-8">
            READY TO CONTRIBUTE?
          </h2>
          <p className="text-xl mb-12">
            Join our community of expert reviewers and help maintain the highest standards
            of scientific publishing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/reviewer-signup">
              SIGN UP AS REVIEWER
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-400" href="/contact">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
