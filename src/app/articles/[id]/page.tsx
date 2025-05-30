import { Card } from '@/components/neo/Card'
import { Button } from '@/components/neo/Button'

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
          <Card className="p-8 text-center">
            <h1 className="font-display text-3xl font-bold mb-4 text-red-600">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-6">The requested article could not be found.</p>
            <Button href="/browse-issues">Back to Browse</Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Article Header */}
        <Card className="mb-8">
          <div className="p-8">
            <h1 className="font-display text-3xl font-bold mb-4">
              {article.actualTitle || article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>Authors: {article.authors.join(', ')}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {article.abstract}
            </p>
            <div className="mt-6 flex gap-4">
              <Button variant="outline" href="/browse-issues">
                ← Back to Browse
              </Button>
              <Button 
                variant="outline"
                href={article.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Original →
              </Button>
            </div>
          </div>
        </Card>

        {/* Article Content - Full Height Iframe */}
        <Card className="overflow-hidden" style={{ minHeight: '1200px' }}>
          <iframe
            src={article.htmlUrl}
            className="w-full border-0"
            style={{ 
              height: '1200px',
              minHeight: '100%'
            }}
            title={article.actualTitle || article.title}
            sandbox="allow-same-origin allow-scripts allow-popups"
          />
        </Card>
      </div>
    </div>
  )
}