'use client'

import { Button } from "@/components/neo/Button"
import { PaperCard } from "@/components/ui/PaperCard"

// Mock data for latest publications
const latestPublications = [
  {
    id: "bio-1",
    title: "CRISPR-Cas9 Optimization for Therapeutic Applications",
    abstract: "Advanced engineering of CRISPR-Cas9 systems for enhanced specificity and reduced off-target effects in clinical gene therapy applications.",
    authors: [{ name: "Dr. Sarah Chen" }, { name: "Prof. Michael Rodriguez" }],
    keywords: ["CRISPR", "gene therapy", "biotechnology"],
    status: "published" as const,
    created_at: "2023-11-15",
    views: 2341,
    downloads: 456,
    citations: 23
  },
  {
    id: "bio-2",
    title: "Protein Structure Prediction Using Deep Learning",
    abstract: "Novel neural network architectures for accurate protein folding prediction with applications in drug discovery and enzyme design.",
    authors: [{ name: "Dr. Alex Kim" }, { name: "Dr. Lisa Wang" }],
    keywords: ["protein folding", "deep learning", "structural biology"],
    status: "published" as const,
    created_at: "2023-11-08",
    views: 1876,
    downloads: 234,
    citations: 18
  },
  {
    id: "bio-3",
    title: "Microbial Resistance Mechanisms in Extreme Environments",
    abstract: "Comprehensive analysis of antimicrobial resistance genes in extremophile bacteria and their potential biotechnological applications.",
    authors: [{ name: "Dr. James Thompson" }],
    keywords: ["extremophiles", "antimicrobial resistance", "biotechnology"],
    status: "published" as const,
    created_at: "2023-10-28",
    views: 1234,
    downloads: 189,
    citations: 12
  }
]

const editorialBoard = [
  {
    name: "Prof. Dr. Elena Vasquez",
    role: "Editor-in-Chief",
    affiliation: "Stanford University",
    expertise: "Molecular Biology, CRISPR Technology"
  },
  {
    name: "Dr. Raj Patel",
    role: "Associate Editor",
    affiliation: "MIT",
    expertise: "Computational Biology, Protein Engineering"
  },
  {
    name: "Prof. Dr. Maria Santos",
    role: "Associate Editor",
    affiliation: "University of Cambridge",
    expertise: "Microbial Genomics, Extremophiles"
  }
]

export default function AgentisBiologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-blue-400 text-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-8xl mb-8">🧬</div>
          <h1 className="font-display text-display-xl font-bold mb-6">
            AGENTIS BIOLOGY
          </h1>
          <p className="text-2xl font-medium max-w-4xl mx-auto mb-8 text-white/90">
            Advancing the frontiers of biological research through peer-reviewed publications
            on proteins, nucleic acids, and microbial genomics.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/submit-paper">
              SUBMIT TO BIOLOGY
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-400">
              BROWSE BIOLOGY PAPERS
            </Button>
          </div>
        </div>
      </section>

      {/* Journal Focus Areas */}
      <section className="py-20 px-4 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-4 border-blue-400 pb-4 inline-block w-full">
            RESEARCH FOCUS AREAS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-gray border-4 border-black p-8 text-center hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-neo-lg hover:shadow-neo-lg-hover">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="font-display text-2xl font-bold mb-4">PROTEIN RESEARCH</h3>
              <p className="text-lg">
                Protein structure, function, engineering, and therapeutic applications
              </p>
            </div>

            <div className="bg-light-gray border-4 border-black p-8 text-center hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-neo-lg hover:shadow-neo-lg-hover">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="font-display text-2xl font-bold mb-4">NUCLEIC ACIDS</h3>
              <p className="text-lg">
                DNA, RNA research, gene editing, and genomic technologies
              </p>
            </div>

            <div className="bg-light-gray border-4 border-black p-8 text-center hover:bg-blue-400 hover:text-white transition-all duration-200 transform hover:scale-105 shadow-neo-lg hover:shadow-neo-lg-hover">
              <div className="text-5xl mb-4">🦠</div>
              <h3 className="font-display text-2xl font-bold mb-4">MICROBIAL GENOMICS</h3>
              <p className="text-lg">
                Microbial diversity, evolution, and biotechnological applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-20 px-4 bg-light-gray border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-display-md font-bold border-b-4 border-blue-400 pb-2 inline-block">
              LATEST PUBLICATIONS
            </h2>
            <Button variant="ghost" href="/browse-issues?journal=biology">
              VIEW ALL BIOLOGY PAPERS →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPublications.map(paper => (
              <PaperCard key={paper.id} paper={paper} showMetrics={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Board */}
      <section className="py-20 px-4 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-4 border-blue-400 pb-4 inline-block w-full">
            EDITORIAL BOARD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editorialBoard.map((member, index) => (
              <div key={index} className="bg-light-gray border-4 border-black p-8 text-center shadow-neo-lg hover:shadow-neo-lg-hover transition-all duration-200">
                <div className="w-24 h-24 bg-blue-400 border-4 border-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{member.name}</h3>
                <div className="bg-blue-400 text-white px-3 py-1 text-sm font-bold uppercase tracking-wider mb-3 inline-block">
                  {member.role}
                </div>
                <p className="font-medium text-gray-700 mb-2">{member.affiliation}</p>
                <p className="text-sm text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Stats */}
      <section className="py-20 px-4 bg-dark text-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center text-white">
            BIOLOGY JOURNAL METRICS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 border-4 border-white text-center bg-blue-400">
              <div className="font-display font-black text-4xl md:text-5xl mb-2 text-white">156</div>
              <div className="font-bold text-sm uppercase tracking-wider text-white/90">Published Papers</div>
            </div>
            <div className="p-8 border-4 border-white text-center bg-white text-black">
              <div className="font-display font-black text-4xl md:text-5xl mb-2">2.8</div>
              <div className="font-bold text-sm uppercase tracking-wider opacity-90">Impact Factor</div>
            </div>
            <div className="p-8 border-4 border-white text-center bg-blue-600">
              <div className="font-display font-black text-4xl md:text-5xl mb-2 text-white">92%</div>
              <div className="font-bold text-sm uppercase tracking-wider text-white/90">Acceptance Rate</div>
            </div>
            <div className="p-8 border-4 border-white text-center bg-white text-black">
              <div className="font-display font-black text-4xl md:text-5xl mb-2">12</div>
              <div className="font-bold text-sm uppercase tracking-wider opacity-90">Days to Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-400 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-6">
            PUBLISH WITH AGENTIS BIOLOGY
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the leading researchers advancing biological sciences. Submit your groundbreaking
            research to Agentis Biology and reach a global audience of scientists and practitioners.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/submit-paper">
              SUBMIT YOUR RESEARCH
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-400" href="/for-authors">
              AUTHOR GUIDELINES
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}