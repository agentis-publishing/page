import { ArticleViewer } from '@/components/ArticleViewer'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

// Article data - in production this would come from a database or API
const articlesData: Record<string, { 
  title: string; 
  htmlUrl: string; 
  authors: string[]; 
  abstract: string;
}> = {
  'protists-mp': {
    title: 'Protists as mediators of complex microbial and viral associations',
    htmlUrl: 'https://agentis-publishing.github.io/public-testing/protists_mp/protists_mp.html',
    authors: ['Research Team'],
    abstract: 'Microbial eukaryotes, including protists, are known for their important roles in nutrient cycling across different ecosystems. However, the composition and function of protist-associated microbiomes remains largely elusive. Here, we employ cultivation-independent single-cell isolation and genome-resolved metagenomics to provide detailed insights into underexplored microbiomes and viromes of over 100 currently uncultivable ciliates and amoebae isolated from diverse environments. Our findings reveal unique microbiome compositions and hint at an intricate network of complex interactions and associations with bacterial symbionts and viruses. We observed stark differences between ciliates and amoebae in terms of microbiome and virome compositions, highlighting the specificity of protist-microbe interactions. Over 115 of the recovered microbial genomes were affiliated with known endosymbionts of eukaryotes, including diverse members of the Holosporales, Rickettsiales, Legionellales, Chlamydiae, Dependentiae, and more than 250 were affiliated with possible host-associated bacteria of the phylum Patescibacteria. We also identified more than 80 giant viruses belonging to diverse viral lineages, of which some were actively expressing genes in single cell transcriptomes, suggesting a possible association with the sampled protists. We also revealed a wide range of other viruses that were predicted to infect eukaryotes or host-associated bacteria. Our results provide further evidence that protists serve as mediators of complex microbial and viral associations, playing a critical role in ecological networks. The frequent co-occurrence of giant viruses and diverse microbial symbionts in our samples suggests multipartite associations, particularly among amoebae. Our study provides a preliminary assessment of the microbial diversity associated with lesser-known protist lineages and paves the way for a deeper understanding of protist ecology and their roles in environmental and human health.'
  }
}

// Required for static export
export async function generateStaticParams() {
  return Object.keys(articlesData).map((id) => ({
    id: id,
  }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const article = articlesData[resolvedParams.id]

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 text-center bg-white border-4 border-black shadow-neo">
            <h1 className="font-display text-3xl font-bold mb-4 text-red-600">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-6">The requested article could not be found.</p>
            <a 
              href="/browse-issues"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-150 border-3 border-black active:translate-x-1 active:translate-y-1 disabled:pointer-events-none disabled:opacity-50 bg-white text-black border-black shadow-neo hover:shadow-neo-hover active:shadow-none hover:bg-light-gray px-6 py-3 text-base"
            >
              Back to Browse
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ArticleViewer
      title={article.title}
      htmlUrl={article.htmlUrl}
      authors={article.authors}
      abstract={article.abstract}
    />
  )
}