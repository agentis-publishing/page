import { Card } from '@/components/neo/Card'
import { Button } from '@/components/neo/Button'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

// Mock article data - in production this would come from a database
const articlesData: Record<string, { title: string; htmlUrl: string; authors: string[]; abstract: string }> = {
  'protists-mp': {
    title: 'Protists Microscopy Project: Exploring Microbial Diversity',
    htmlUrl: 'https://agentis-publishing.github.io/public-testing/protists_mp/protists_mp.html',
    authors: ['Research Team'],
    abstract: 'A comprehensive microscopy study documenting diverse protist species, their morphological characteristics, and ecological roles.'
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

  // For now, we'll embed the article in an iframe
  // In production, you might want to fetch and parse the HTML server-side
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Article Header */}
        <Card className="mb-8">
          <div className="p-8">
            <h1 className="font-display text-3xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>Authors: {article.authors.join(', ')}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {article.abstract}
            </p>
          </div>
        </Card>

        {/* Article Content */}
        <Card className="overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl font-bold">Full Article</h2>
              <Button 
                variant="outline" 
                size="sm"
                href={article.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Original →
              </Button>
            </div>
          </div>
          
          {/* Iframe to display the article */}
          <div className="w-full" style={{ height: '800px' }}>
            <iframe
              src={article.htmlUrl}
              className="w-full h-full border-0"
              title={article.title}
              sandbox="allow-same-origin allow-scripts"
            />
          </div>
        </Card>

        {/* Back to Browse Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" href="/browse-issues">
            ← Back to Browse
          </Button>
        </div>
      </div>
    </div>
  )
}