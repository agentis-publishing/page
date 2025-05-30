import { ArticleViewer } from '@/components/ArticleViewer'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

// Mock article data - in production this would come from a database
const articlesData: Record<string, { 
  title: string; 
  htmlUrl: string; 
  authors: string[]; 
  abstract: string;
  actualTitle?: string; // The actual title from the HTML document
}> = {
  'protists-mp': {
    title: 'Protists Microscopy Project',
    actualTitle: 'Protists Microscopy Project', // This should match what's in the HTML
    htmlUrl: 'https://agentis-publishing.github.io/public-testing/protists_mp/protists_mp.html',
    authors: ['Research Team'],
    abstract: 'A comprehensive microscopy study documenting diverse protist species, their morphological characteristics, and ecological roles. This project presents high-resolution imagery and detailed analysis of various protist communities.'
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
      title={article.actualTitle || article.title}
      htmlUrl={article.htmlUrl}
      authors={article.authors}
      abstract={article.abstract}
    />
  )
}