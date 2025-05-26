import { Card, CardContent, CardHeader } from '@/components/neo/Card'
import { Button } from '@/components/neo/Button'
import { StatusBadge } from './StatusBadge'
import { formatDate } from '@/lib/utils'

interface Author {
  name: string
  email?: string
  orcid?: string
}

interface Paper {
  id: string
  title: string
  abstract: string
  authors: Author[]
  status: 'received' | 'under_review' | 'revision' | 'accepted' | 'published' | 'rejected'
  created_at: string
  views?: number
  downloads?: number
  citations?: number
  keywords?: string[]
}

interface PaperCardProps {
  paper: Paper
  showMetrics?: boolean
}

export function PaperCard({ paper, showMetrics = false }: PaperCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <StatusBadge status={paper.status} />
          <span className="font-mono text-sm text-gray-600">
            {formatDate(paper.created_at)}
          </span>
        </div>
        
        <h3 className="font-display text-xl font-bold mb-3 line-clamp-2">
          {paper.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {paper.abstract}
        </p>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          {/* Authors */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-800">
              {paper.authors.map((author, i) => (
                <span key={i}>
                  {author.name}
                  {i < paper.authors.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>

          {/* Keywords */}
          {paper.keywords && paper.keywords.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {paper.keywords.slice(0, 3).map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono bg-gray-100 border-2 border-black"
                  >
                    {keyword}
                  </span>
                ))}
                {paper.keywords.length > 3 && (
                  <span className="px-2 py-1 text-xs font-mono text-gray-500">
                    +{paper.keywords.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Metrics */}
          {showMetrics && (
            <div className="flex gap-4 text-xs text-gray-600 mb-4">
              {paper.views && <span>👁 {paper.views} views</span>}
              {paper.downloads && <span>⬇ {paper.downloads} downloads</span>}
              {paper.citations && <span>📄 {paper.citations} citations</span>}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" href={`/articles/${paper.id}`}>
            READ MORE →
          </Button>
          {paper.status === 'published' && (
            <Button variant="ghost" size="sm" href={`/articles/${paper.id}/download`}>
              📄 PDF
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 