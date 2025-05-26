'use client'

import { useState } from 'react'
import { Button } from '@/components/neo/Button'
import { Input } from '@/components/neo/Input'
import { PaperCard } from '@/components/ui/PaperCard'


// Mock data for demonstration
const allPapers = [
  {
    id: '1',
    title: 'Novel Protein Folding Mechanisms in Extremophile Bacteria',
    abstract: 'This study investigates the unique protein folding pathways observed in thermophilic bacteria, revealing novel mechanisms that could revolutionize our understanding of protein stability under extreme conditions.',
    authors: [
      { name: 'Dr. Sarah Chen' },
      { name: 'Prof. Michael Rodriguez' },
      { name: 'Dr. Yuki Tanaka' }
    ],
    status: 'published' as const,
    created_at: '2024-01-15',
    views: 1247,
    downloads: 89,
    citations: 12,
    keywords: ['protein folding', 'extremophiles', 'thermophiles', 'structural biology']
  },
  {
    id: '2',
    title: 'CRISPR-Cas9 Applications in Microbial Genome Engineering',
    abstract: 'A comprehensive review of recent advances in CRISPR-Cas9 technology for precise genome editing in microbial systems, with implications for biotechnology and synthetic biology.',
    authors: [
      { name: 'Dr. Emma Thompson' },
      { name: 'Dr. James Liu' }
    ],
    status: 'published' as const,
    created_at: '2024-01-10',
    views: 892,
    downloads: 156,
    citations: 8,
    keywords: ['CRISPR', 'genome editing', 'microbiology', 'synthetic biology']
  },
  {
    id: '3',
    title: 'RNA-Protein Interactions in Viral Replication Complexes',
    abstract: 'Detailed analysis of RNA-protein interactions within viral replication complexes, providing insights into potential therapeutic targets for antiviral drug development.',
    authors: [
      { name: 'Dr. Maria Gonzalez' },
      { name: 'Prof. David Kim' },
      { name: 'Dr. Alex Petrov' }
    ],
    status: 'under_review' as const,
    created_at: '2024-01-08',
    keywords: ['RNA', 'viral replication', 'protein interactions', 'drug targets']
  },
  {
    id: '4',
    title: 'Metabolic Engineering of E. coli for Enhanced Biofuel Production',
    abstract: 'Engineering metabolic pathways in Escherichia coli to optimize the production of sustainable biofuels through synthetic biology approaches.',
    authors: [
      { name: 'Dr. Robert Zhang' },
      { name: 'Prof. Lisa Anderson' }
    ],
    status: 'accepted' as const,
    created_at: '2024-01-05',
    keywords: ['metabolic engineering', 'biofuels', 'E. coli', 'synthetic biology']
  },
  {
    id: '5',
    title: 'Structural Analysis of Novel Antimicrobial Peptides',
    abstract: 'Comprehensive structural characterization of newly discovered antimicrobial peptides and their mechanisms of action against drug-resistant bacteria.',
    authors: [
      { name: 'Dr. Jennifer Park' },
      { name: 'Dr. Thomas Wilson' },
      { name: 'Prof. Anna Kowalski' }
    ],
    status: 'revision' as const,
    created_at: '2024-01-03',
    keywords: ['antimicrobial peptides', 'structural biology', 'drug resistance', 'peptide design']
  },
  {
    id: '6',
    title: 'Genomic Diversity in Marine Microorganisms',
    abstract: 'Large-scale genomic analysis revealing unprecedented diversity in marine microbial communities and their ecological roles.',
    authors: [
      { name: 'Dr. Carlos Martinez' },
      { name: 'Prof. Helen Chang' }
    ],
    status: 'published' as const,
    created_at: '2024-01-01',
    views: 654,
    downloads: 78,
    citations: 5,
    keywords: ['marine microbiology', 'genomics', 'biodiversity', 'ecology']
  }
]

const statusFilters = [
  { value: 'all', label: 'ALL PAPERS', count: allPapers.length },
  { value: 'published', label: 'PUBLISHED', count: allPapers.filter(p => p.status === 'published').length },
  { value: 'accepted', label: 'ACCEPTED', count: allPapers.filter(p => p.status === 'accepted').length },
  { value: 'under_review', label: 'UNDER REVIEW', count: allPapers.filter(p => p.status === 'under_review').length },
  { value: 'revision', label: 'REVISION', count: allPapers.filter(p => p.status === 'revision').length }
]

export default function BrowseIssuesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const filteredPapers = allPapers
    .filter(paper => {
      const matchesSearch = searchTerm === '' || 
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.authors.some(author => author.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        paper.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesStatus = statusFilter === 'all' || paper.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        case 'citations':
          return (b.citations || 0) - (a.citations || 0)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-display-md font-black mb-6">
            BROWSE PAPERS
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of peer-reviewed research papers in biology, 
            genomics, and related fields. All papers are open access and freely available.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <label className="block font-bold text-sm uppercase tracking-wider mb-2">
              SEARCH PAPERS
            </label>
            <Input
              type="search"
              placeholder="Search by title, author, keywords, or abstract..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg py-4"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {statusFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setStatusFilter(filter.value)}
                className={`
                  px-6 py-3 font-bold text-sm uppercase tracking-wider
                  border-4 border-black transition-all duration-150
                  ${statusFilter === filter.value
                    ? 'bg-electric-blue text-white shadow-neo'
                    : 'bg-white text-black hover:bg-gray-100 shadow-neo-hover'
                  }
                `}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="font-bold text-sm uppercase tracking-wider">
              SORT BY:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-4 border-black bg-white font-bold text-sm uppercase tracking-wider
                       focus:outline-none focus:shadow-neo transition-shadow duration-150"
            >
              <option value="newest">NEWEST FIRST</option>
              <option value="oldest">OLDEST FIRST</option>
              <option value="title">TITLE A-Z</option>
              <option value="citations">MOST CITED</option>
            </select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-bold text-lg">
              {filteredPapers.length} PAPER{filteredPapers.length !== 1 ? 'S' : ''} FOUND
            </p>
            
            {searchTerm && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Searching for:</span>
                <span className="px-3 py-1 bg-cyber-yellow border-2 border-black font-bold text-sm">
                  &quot;{searchTerm}&quot;
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchTerm('')}
                >
                  CLEAR
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} showMetrics />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="font-display text-2xl font-bold mb-4">
              NO PAPERS FOUND
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find more papers.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setStatusFilter('all')
              }}
            >
              CLEAR ALL FILTERS
            </Button>
          </div>
        )}

        {/* Load More (for future pagination) */}
        {filteredPapers.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              LOAD MORE PAPERS
            </Button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 pt-16 border-t-4 border-black">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white border-4 border-black">
              <div className="font-display font-black text-3xl text-electric-blue mb-2">
                {allPapers.filter(p => p.status === 'published').length}
              </div>
              <div className="font-bold text-sm uppercase tracking-wider">
                PUBLISHED
              </div>
            </div>
            
            <div className="p-6 bg-white border-4 border-black">
              <div className="font-display font-black text-3xl text-hot-pink mb-2">
                {allPapers.filter(p => p.status === 'under_review').length}
              </div>
              <div className="font-bold text-sm uppercase tracking-wider">
                UNDER REVIEW
              </div>
            </div>
            
            <div className="p-6 bg-white border-4 border-black">
              <div className="font-display font-black text-3xl text-success mb-2">
                {allPapers.filter(p => p.status === 'accepted').length}
              </div>
              <div className="font-bold text-sm uppercase tracking-wider">
                ACCEPTED
              </div>
            </div>
            
            <div className="p-6 bg-white border-4 border-black">
              <div className="font-display font-black text-3xl text-deep-purple mb-2">
                {allPapers.reduce((sum, p) => sum + (p.citations || 0), 0)}
              </div>
              <div className="font-bold text-sm uppercase tracking-wider">
                TOTAL CITATIONS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 