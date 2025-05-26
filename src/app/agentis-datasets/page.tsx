'use client'

import { Button } from "@/components/neo/Button"
import Link from "next/link"

// Mock data for featured datasets
const featuredDatasets = [
  {
    id: "ds-1",
    title: "Human Protein Atlas v23",
    description: "Comprehensive protein expression data across human tissues and cell types with spatial resolution.",
    size: "2.4 TB",
    format: "HDF5, CSV, JSON",
    downloads: 15420,
    citations: 234,
    license: "CC BY 4.0",
    category: "Proteomics",
    lastUpdated: "2023-11-15"
  },
  {
    id: "ds-2", 
    title: "Marine Microbiome Metagenomes",
    description: "Metagenomic sequences from 500+ marine samples across global ocean environments.",
    size: "890 GB",
    format: "FASTQ, FASTA",
    downloads: 8934,
    citations: 156,
    license: "CC0",
    category: "Metagenomics",
    lastUpdated: "2023-11-08"
  },
  {
    id: "ds-3",
    title: "CRISPR Guide RNA Efficiency Database",
    description: "Experimentally validated guide RNA efficiency scores for 50,000+ targets across multiple species.",
    size: "45 GB",
    format: "TSV, JSON",
    downloads: 12567,
    citations: 89,
    license: "MIT",
    category: "Gene Editing",
    lastUpdated: "2023-10-28"
  }
]

const datasetCategories = [
  {
    name: "GENOMICS",
    icon: "🧬",
    count: 156,
    description: "Genome sequences, annotations, and variant data"
  },
  {
    name: "PROTEOMICS", 
    icon: "🧪",
    count: 89,
    description: "Protein expression, structure, and interaction data"
  },
  {
    name: "METAGENOMICS",
    icon: "🦠",
    count: 234,
    description: "Environmental and microbiome sequencing data"
  },
  {
    name: "TRANSCRIPTOMICS",
    icon: "📊",
    count: 178,
    description: "RNA-seq and gene expression datasets"
  }
]

export default function AgentisDatasetsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-orange-dark text-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-8xl mb-8">📊</div>
          <h1 className="font-display text-display-xl font-bold mb-6">
            AGENTIS DATASETS
          </h1>
          <p className="text-2xl font-medium max-w-4xl mx-auto mb-8 text-white/90">
            Open datasets for computational biology and bioinformatics research. 
            Accelerating discovery through accessible, high-quality biological data.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/browse-datasets">
              BROWSE DATASETS
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-dark">
              SUBMIT DATASET
            </Button>
          </div>
        </div>
      </section>

      {/* Dataset Categories */}
      <section className="py-20 px-4 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-4 border-orange-dark pb-4 inline-block w-full">
            DATASET CATEGORIES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {datasetCategories.map((category, index) => (
              <Link key={index} href={`/browse-datasets?category=${category.name.toLowerCase()}`} className="group">
                <div className="bg-light-gray border-4 border-black p-8 text-center hover:bg-orange-dark hover:text-white transition-all duration-200 transform hover:scale-105 shadow-neo-lg hover:shadow-neo-lg-hover">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{category.name}</h3>
                  <div className="bg-orange-dark text-white px-3 py-1 text-sm font-bold uppercase tracking-wider mb-3 inline-block group-hover:bg-white group-hover:text-orange-dark">
                    {category.count} DATASETS
                  </div>
                  <p className="text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Datasets */}
      <section className="py-20 px-4 bg-light-gray border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-display-md font-bold border-b-4 border-orange-dark pb-2 inline-block">
              FEATURED DATASETS
            </h2>
            <Button variant="ghost" href="/browse-datasets">
              VIEW ALL DATASETS →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDatasets.map(dataset => (
              <div key={dataset.id} className="bg-white border-4 border-black shadow-neo-lg hover:shadow-neo-lg-hover transition-all duration-200 h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-orange-dark text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {dataset.category}
                    </div>
                    <span className="font-mono text-sm text-gray-600">{dataset.lastUpdated}</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold mb-3 line-clamp-2">
                    {dataset.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {dataset.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Size:</span>
                      <span className="font-mono">{dataset.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Format:</span>
                      <span className="font-mono">{dataset.format}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">License:</span>
                      <span className="font-mono">{dataset.license}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 text-xs text-gray-600 mb-4">
                    <span>⬇ {dataset.downloads.toLocaleString()} downloads</span>
                    <span>📄 {dataset.citations} citations</span>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" href={`/datasets/${dataset.id}`}>
                      VIEW DETAILS
                    </Button>
                    <Button variant="ghost" size="sm" href={`/datasets/${dataset.id}/download`}>
                      📥 DOWNLOAD
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Standards */}
      <section className="py-20 px-4 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center border-b-4 border-orange-dark pb-4 inline-block w-full">
            DATA STANDARDS & QUALITY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-gray border-4 border-black p-8 text-center shadow-neo-lg hover:shadow-neo-lg-hover transition-all duration-200">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-display text-2xl font-bold mb-4">FAIR PRINCIPLES</h3>
              <p className="text-lg">
                All datasets follow Findable, Accessible, Interoperable, and Reusable standards
              </p>
            </div>
            
            <div className="bg-light-gray border-4 border-black p-8 text-center shadow-neo-lg hover:shadow-neo-lg-hover transition-all duration-200">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-display text-2xl font-bold mb-4">SECURE STORAGE</h3>
              <p className="text-lg">
                Enterprise-grade security with redundant backups and version control
              </p>
            </div>
            
            <div className="bg-light-gray border-4 border-black p-8 text-center shadow-neo-lg hover:shadow-neo-lg-hover transition-all duration-200">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-display text-2xl font-bold mb-4">RICH METADATA</h3>
              <p className="text-lg">
                Comprehensive documentation and standardized metadata schemas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Stats */}
      <section className="py-20 px-4 bg-dark text-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-md font-bold mb-12 text-center text-white">
            DATASET REPOSITORY METRICS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-8 border-4 border-white text-center bg-orange-dark">
              <div className="font-display font-black text-4xl md:text-5xl mb-2 text-white">657</div>
              <div className="font-bold text-sm uppercase tracking-wider text-white/90">Total Datasets</div>
            </div>
            <div className="p-8 border-4 border-white text-center bg-white text-black">
              <div className="font-display font-black text-4xl md:text-5xl mb-2">45.2TB</div>
              <div className="font-bold text-sm uppercase tracking-wider opacity-90">Total Data Size</div>
            </div>
            <div className="p-8 border-4 border-white text-center bg-orange">
              <div className="font-display font-black text-4xl md:text-5xl mb-2 text-white">2.1M</div>
              <div className="font-bold text-sm uppercase tracking-wider text-white/90">Total Downloads</div>
            </div>
            <div className="p-8 border-4 border-white text-center bg-white text-black">
              <div className="font-display font-black text-4xl md:text-5xl mb-2">1,234</div>
              <div className="font-bold text-sm uppercase tracking-wider opacity-90">Contributing Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Access */}
      <section className="py-20 px-4 bg-light-gray border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-md font-bold mb-6">
                PROGRAMMATIC ACCESS
              </h2>
              <p className="text-xl font-medium mb-6 text-gray-700">
                Access datasets programmatically through our REST API and Python SDK.
              </p>
              <div className="bg-black border-4 border-black p-6 font-mono text-green-400 text-sm mb-6">
                <div className="mb-2"># Install the Agentis SDK</div>
                <div className="mb-2">pip install agentis-datasets</div>
                <div className="mb-4"></div>
                <div className="mb-2"># Download a dataset</div>
                <div className="mb-2">import agentis</div>
                <div className="mb-2">dataset = agentis.get_dataset(&apos;human-protein-atlas-v23&apos;)</div>
                <div>dataset.download()</div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" href="/docs/api">
                  API DOCUMENTATION
                </Button>
                <Button variant="ghost" href="/docs/sdk">
                  SDK GUIDE
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-orange-dark border-4 border-black shadow-neo-lg flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="text-white font-display font-bold text-6xl">API</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-orange-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md font-bold mb-6">
            CONTRIBUTE YOUR DATA
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Share your research data with the global scientific community. 
            Make your datasets discoverable, citable, and reusable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" href="/submit-dataset">
              SUBMIT DATASET
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-dark" href="/docs/submission">
              SUBMISSION GUIDELINES
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 