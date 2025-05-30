'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/neo/Card'
import { Button } from '@/components/neo/Button'

interface ArticleViewerProps {
  title: string
  htmlUrl: string
  authors: string[]
  abstract: string
}

export function ArticleViewer({ title, htmlUrl, authors, abstract }: ArticleViewerProps) {
  const [displayMode, setDisplayMode] = useState<'iframe' | 'embed'>('iframe')
  const [currentUrl, setCurrentUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  
  // Try multiple CDN options for better compatibility
  // For GitHub Pages, the URL should be: https://agentis-publishing.github.io/public-testing/protists_mp/protists_mp.html
  const cdnUrls = {
    // Use raw GitHub content URL as primary option
    raw: htmlUrl.replace('agentis-publishing.github.io/public-testing', 'raw.githubusercontent.com/agentis-publishing/public-testing/main'),
    // jsDelivr CDN
    jsdelivr: `https://cdn.jsdelivr.net/gh/agentis-publishing/public-testing@main/${htmlUrl.split('/public-testing/')[1]}`,
    // GitHack for raw serving
    githack: `https://raw.githack.com/agentis-publishing/public-testing/main/${htmlUrl.split('/public-testing/')[1]}`,
    // Direct GitHub Pages URL
    direct: htmlUrl
  }
  
  useEffect(() => {
    // Set the initial URL on client side to avoid hydration issues
    setCurrentUrl(cdnUrls.raw)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlUrl])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Article Header */}
        <Card className="mb-8">
          <div className="p-8">
            <h1 className="font-display text-3xl font-bold mb-4">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>Authors: {authors.join(', ')}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {abstract}
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <Button variant="outline" href="/browse-issues">
                ← Back to Browse
              </Button>
              <Button 
                variant="outline"
                href={htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Original →
              </Button>
              <Button
                variant="ghost"
                onClick={() => setDisplayMode(displayMode === 'iframe' ? 'embed' : 'iframe')}
              >
                Switch View Mode
              </Button>
            </div>
          </div>
        </Card>

        {/* Article Content */}
        <Card className="overflow-hidden" style={{ minHeight: '1200px' }}>
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <p className="text-gray-600">Loading article...</p>
            </div>
          ) : displayMode === 'iframe' ? (
            <iframe
              src={currentUrl}
              className="w-full border-0"
              style={{ 
                height: '1200px',
                minHeight: '100%'
              }}
              title={title}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              loading="lazy"
              onError={(e) => {
                console.error('Iframe loading error:', e)
                // Try alternative URLs in sequence
                const iframe = e.currentTarget as HTMLIFrameElement
                if (iframe.src === cdnUrls.raw) {
                  setCurrentUrl(cdnUrls.direct)
                } else if (iframe.src === cdnUrls.direct) {
                  setCurrentUrl(cdnUrls.jsdelivr)
                } else if (iframe.src === cdnUrls.jsdelivr) {
                  setCurrentUrl(cdnUrls.githack)
                }
              }}
            />
          ) : (
            <div className="p-8">
              <p className="text-center text-gray-600 mb-4">
                Loading article content...
              </p>
              <object
                data={currentUrl}
                type="text/html"
                className="w-full"
                style={{ height: '1200px' }}
              >
                <embed 
                  src={cdnUrls.jsdelivr} 
                  type="text/html"
                  className="w-full"
                  style={{ height: '1200px' }}
                />
              </object>
            </div>
          )}
        </Card>
        
        {/* Troubleshooting info */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Having trouble viewing the article?</p>
          <div className="flex justify-center gap-4 mt-2">
            <a 
              href={htmlUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open in GitHub Pages
            </a>
            <a 
              href={cdnUrls.raw} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open Raw File
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}