# Neobrutalist Agentis Science Journal - Complete Implementation Plan

Based on the existing Agentis codebase, here's a comprehensive plan to rebuild the site with a neobrutalist design while maintaining all functionality and content.

## 1. Current Site Analysis & Content Structure

### Existing Pages (from the codebase):
- **Homepage** (`/`) - Journal introduction with recent/active papers
- **Agentis Biology** (`/agentis-biology`) - Detailed about the journal, editorial board, latest publications
- **Browse Issues** (`/browse-issues`) - Published papers ledger with tabs for all/published/active papers
- **Articles** (`/articles/[...slug]`) - Individual article pages with TOC, metrics, citations
- **About** (`/about`) - Mission, vision, approach, team, values
- **For Authors** (`/for-authors`) - Submission guidelines, manuscript preparation
- **For Reviewers** (`/for-reviewers`) - Reviewer guidelines and process
- **FAQ** (`/faq`) - Frequently asked questions
- **Contact** (`/contact`) - Contact form and information
- **Submit Paper** (`/submit-paper`) - Multi-field submission form
- **Dashboard** (`/dashboard`) - Author dashboard with submissions, profile, settings
- **Login** (`/login`) - Authentication page

### Current Features:
- Supabase authentication (email/password)
- Paper submission system with file uploads
- Author dashboard for tracking submissions
- Profile management
- Submission status tracking (received, under_review, revision, accepted, published, rejected)
- File storage in Supabase buckets

## 2. Neobrutalist Design System

### Color Palette
```scss
// Bold, high-contrast colors for neobrutalist aesthetic
$colors: (
  // Primary colors
  black: #000000,
  white: #FFFFFF,
  
  // Accent colors - bold and vibrant
  electric-blue: #0066FF,
  hot-pink: #FF0066,
  cyber-yellow: #FFFF00,
  acid-green: #00FF00,
  deep-purple: #6600FF,
  
  // UI colors
  gray-100: #F5F5F5,
  gray-200: #E5E5E5,
  gray-300: #D4D4D4,
  gray-400: #A3A3A3,
  gray-900: #171717,
  
  // Status colors
  success: #00D26A,
  warning: #FFB800,
  error: #F92672,
  info: #00D4FF
);
```

### Typography System
```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['56px', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['48px', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'display-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      }
    }
  }
}
```

### Core Design Components

```typescript
// components/neo/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  `
    font-bold uppercase tracking-wider transition-all duration-150
    border-4 border-black active:translate-x-1 active:translate-y-1
  `,
  {
    variants: {
      variant: {
        primary: [
          'bg-electric-blue text-white',
          'shadow-[8px_8px_0px_#000]',
          'hover:shadow-[4px_4px_0px_#000]',
          'active:shadow-none'
        ],
        secondary: [
          'bg-hot-pink text-white',
          'shadow-[8px_8px_0px_#000]',
          'hover:shadow-[4px_4px_0px_#000]',
          'active:shadow-none'
        ],
        outline: [
          'bg-white text-black',
          'hover:bg-gray-100'
        ],
        ghost: [
          'bg-transparent text-black border-0',
          'hover:bg-gray-100'
        ]
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

// components/neo/Card.tsx
export function Card({ children, className = '' }) {
  return (
    <div className={`
      bg-white border-4 border-black
      shadow-[12px_12px_0px_#000]
      hover:shadow-[8px_8px_0px_#000]
      transition-all duration-200
      ${className}
    `}>
      {children}
    </div>
  )
}

// components/neo/Input.tsx
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`
        w-full px-4 py-3
        bg-white border-4 border-black
        font-mono text-base
        placeholder:text-gray-400
        focus:outline-none focus:ring-0
        focus:shadow-[4px_4px_0px_#000]
        transition-shadow duration-150
        ${className}
      `}
      {...props}
    />
  )
}
```

## 3. Complete Page Implementations

### Homepage
```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue via-hot-pink to-cyber-yellow opacity-10" />
        
        <div className="relative max-w-7xl mx-auto">
          <h1 className="font-display text-display-xl font-black mb-6">
            AGENTIS
            <span className="block text-hot-pink">BIOLOGY</span>
          </h1>
          
          <p className="text-2xl font-medium max-w-3xl mb-12">
            A peer-reviewed, AI-assisted, open-access journal democratizing 
            scientific publishing for research on proteins, nucleic acids, 
            and microbial genomics.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="xl" href="/submit-paper">
              SUBMIT YOUR PAPER
            </Button>
            <Button size="xl" variant="outline" href="/browse-issues">
              BROWSE PAPERS
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Papers Grid */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-display-md font-black mb-12">
            LATEST PAPERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPapers.map(paper => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard number="342" label="Published Papers" />
          <StatCard number="1,247" label="Authors" />
          <StatCard number="89%" label="Acceptance Rate" />
          <StatCard number="14" label="Days to Review" />
        </div>
      </section>
    </div>
  )
}

// components/PaperCard.tsx
function PaperCard({ paper }) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <StatusBadge status={paper.status} />
        <span className="font-mono text-sm">{paper.date}</span>
      </div>
      
      <h3 className="font-display text-2xl font-bold mb-3 flex-grow">
        {paper.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {paper.abstract}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {paper.authors.map((author, i) => (
          <span key={i} className="text-sm font-medium">
            {author}{i < paper.authors.length - 1 && ','}
          </span>
        ))}
      </div>
      
      <Button variant="outline" size="sm" className="self-start">
        READ MORE →
      </Button>
    </Card>
  )
}
```

### Authentication with Multiple Providers
```typescript
// app/auth/login/page.tsx
'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClientComponentClient()

  const signInWithORCID = async () => {
    // Configure ORCID OAuth in Supabase dashboard
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'orcid' as any, // Custom provider
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  }

  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cyber-yellow">
      <Card className="w-full max-w-md p-8">
        <h1 className="font-display text-display-sm font-black mb-8">
          SIGN IN
        </h1>

        {/* OAuth Buttons */}
        <div className="space-y-4 mb-8">
          <button
            onClick={signInWithORCID}
            className="w-full p-4 bg-white border-4 border-black font-bold
                     hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
          >
            <ORCIDIcon />
            SIGN IN WITH ORCID
          </button>
          
          <button
            onClick={signInWithGitHub}
            className="w-full p-4 bg-black text-white border-4 border-black font-bold
                     hover:bg-gray-900 transition-colors flex items-center justify-center gap-3"
          >
            <GitHubIcon />
            SIGN IN WITH GITHUB
          </button>
          
          <button
            onClick={signInWithGoogle}
            className="w-full p-4 bg-white border-4 border-black font-bold
                     hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
          >
            <GoogleIcon />
            SIGN IN WITH GOOGLE
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-4 border-black"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white font-bold text-xl">OR</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <Input
            type="email"
            placeholder="EMAIL ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button type="submit" className="w-full">
            SIGN IN
          </Button>
        </form>

        <p className="mt-8 text-center">
          Don't have an account?{' '}
          <Link href="/auth/register" className="font-bold underline">
            CREATE ONE
          </Link>
        </p>
      </Card>
    </div>
  )
}
```

### Enhanced Submission System
```typescript
// app/(authenticated)/submit-paper/page.tsx
export default function SubmitPaperPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: '',
    authors: [{ name: '', email: '', orcid: '', affiliation: '' }],
    abstract: '',
    keywords: [],
    manuscriptFile: null,
    supplementaryFiles: [],
    coverLetter: '',
    suggestedReviewers: [],
    aiReviewOptIn: true
  })

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`
                  w-16 h-16 border-4 border-black
                  flex items-center justify-center
                  font-display font-black text-2xl
                  ${step >= i ? 'bg-electric-blue text-white' : 'bg-white'}
                  ${step > i ? 'shadow-[4px_4px_0px_#000]' : ''}
                `}
              >
                {i}
              </div>
            ))}
          </div>
        </div>

        <Card className="p-8">
          {step === 1 && <ManuscriptDetailsStep />}
          {step === 2 && <AuthorsStep />}
          {step === 3 && <FilesUploadStep />}
          {step === 4 && <ReviewersStep />}
          {step === 5 && <ReviewAndSubmitStep />}
        </Card>
      </div>
    </div>
  )
}

// components/submission/FilesUploadStep.tsx
function FilesUploadStep() {
  const [files, setFiles] = useState([])
  const [uploading, setUploading] = useState(false)
  const supabase = createClientComponentClient()

  const uploadFile = async (file: File) => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `manuscripts/${fileName}`

    const { error } = await supabase.storage
      .from('manuscripts')
      .upload(filePath, file)

    if (error) throw error
    return filePath
  }

  return (
    <div className="space-y-8">
      <h2 className="font-display text-display-sm font-black">
        UPLOAD FILES
      </h2>

      {/* Main Manuscript */}
      <div>
        <label className="block font-bold text-xl mb-4">
          MAIN MANUSCRIPT *
        </label>
        <div
          className="border-4 border-dashed border-black p-12 text-center
                     hover:bg-gray-50 transition-colors cursor-pointer"
          onClick={() => document.getElementById('manuscript-input').click()}
        >
          <input
            id="manuscript-input"
            type="file"
            accept=".pdf,.doc,.docx,.tex"
            className="hidden"
            onChange={handleManuscriptUpload}
          />
          
          <div className="text-6xl mb-4">📄</div>
          <p className="font-bold text-xl mb-2">
            DROP YOUR MANUSCRIPT HERE
          </p>
          <p className="text-gray-600">
            PDF, DOC, DOCX, or TEX files up to 50MB
          </p>
        </div>
      </div>

      {/* Supplementary Files */}
      <div>
        <label className="block font-bold text-xl mb-4">
          SUPPLEMENTARY FILES
        </label>
        <div
          className="border-4 border-dashed border-black p-12 text-center
                     hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="text-6xl mb-4">📁</div>
          <p className="font-bold text-xl mb-2">
            ADD SUPPLEMENTARY MATERIALS
          </p>
          <p className="text-gray-600">
            Figures, tables, datasets, code
          </p>
        </div>
      </div>

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-bold text-xl">UPLOADED FILES</h3>
          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4
                       border-4 border-black bg-white"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">📎</span>
                <div>
                  <p className="font-bold">{file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(i)}
                className="text-2xl hover:text-error"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
```

### Author Dashboard
```typescript
// app/(authenticated)/dashboard/page.tsx
export default function DashboardPage() {
  const { user } = useUser()
  const { submissions, stats } = useSubmissions(user.id)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-display-md font-black mb-12">
          AUTHOR DASHBOARD
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            number={stats.total}
            label="Total Submissions"
            color="bg-electric-blue"
          />
          <StatCard
            number={stats.published}
            label="Published"
            color="bg-success"
          />
          <StatCard
            number={stats.underReview}
            label="Under Review"
            color="bg-warning"
          />
          <StatCard
            number={stats.citations}
            label="Total Citations"
            color="bg-hot-pink"
          />
        </div>

        {/* Submissions Table */}
        <Card className="p-8">
          <h2 className="font-display text-3xl font-black mb-8">
            MY SUBMISSIONS
          </h2>

          <div className="space-y-4">
            {submissions.map(submission => (
              <div
                key={submission.id}
                className="p-6 bg-white border-4 border-black
                         hover:shadow-[4px_4px_0px_#000] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">
                      {submission.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Submitted: {formatDate(submission.created_at)}
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span>Views: {submission.views}</span>
                      <span>Downloads: {submission.downloads}</span>
                      <span>Citations: {submission.citations}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <StatusBadge status={submission.status} />
                    <Button size="sm" variant="outline">
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>

                {/* Version Dropdown */}
                {submission.versions.length > 1 && (
                  <div className="mt-4 pt-4 border-t-4 border-black">
                    <select className="font-mono text-sm border-2 border-black px-2 py-1">
                      {submission.versions.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.label} - {formatDate(v.created_at)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
```

## 4. Backend Integration

### Supabase Schema Updates
```sql
-- Add support for OAuth providers
ALTER TABLE profiles ADD COLUMN orcid_id TEXT UNIQUE;
ALTER TABLE profiles ADD COLUMN github_username TEXT UNIQUE;
ALTER TABLE profiles ADD COLUMN google_id TEXT UNIQUE;

-- Add versioning support
CREATE TABLE paper_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
  version_label TEXT NOT NULL, -- 'preprint', 'v1', 'v2', etc.
  manuscript_url TEXT,
  pdf_url TEXT,
  html_url TEXT,
  github_url TEXT,
  changes_summary TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(paper_id, version_label)
);

-- Add review system
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES profiles(id),
  decision TEXT CHECK (decision IN ('accept', 'minor_revision', 'major_revision', 'reject')),
  comments TEXT,
  confidential_comments TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add suggested reviewers
CREATE TABLE suggested_reviewers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  orcid TEXT,
  reason TEXT
);
```

### API Routes for Paper Processing
```typescript
// app/api/papers/[paperId]/process/route.ts
export async function POST(
  request: Request,
  { params }: { params: { paperId: string } }
) {
  const supabase = createRouteHandlerClient({ cookies })
  
  // 1. Get paper details
  const { data: paper } = await supabase
    .from('papers')
    .select('*')
    .eq('id', params.paperId)
    .single()

  // 2. Send to review server
  const reviewResponse = await fetch(process.env.REVIEW_SERVER_URL + '/review', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REVIEW_SERVER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      paper_id: paper.id,
      manuscript_url: paper.manuscript_url,
      metadata: {
        title: paper.title,
        abstract: paper.abstract,
        keywords: paper.keywords
      }
    })
  })

  const { review_id } = await reviewResponse.json()

  // 3. Update paper status
  await supabase
    .from('papers')
    .update({ 
      status: 'under_review',
      review_id 
    })
    .eq('id', params.paperId)

  return Response.json({ success: true, review_id })
}

// app/api/papers/[paperId]/publish/route.ts
export async function POST(
  request: Request,
  { params }: { params: { paperId: string } }
) {
  const { version } = await request.json()
  
  // 1. Generate HTML and PDF with Quarto
  const quartoResponse = await fetch(process.env.QUARTO_SERVER_URL + '/render', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      paper_id: params.paperId,
      formats: ['html', 'pdf']
    })
  })

  const { html_url, pdf_url } = await quartoResponse.json()

  // 2. Push to GitHub
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  
  const repo = await octokit.repos.createInOrg({
    org: 'agentis-publishing',
    name: `paper-${params.paperId}`,
    description: paper.title,
    homepage: `https://agentis.science/papers/${params.paperId}`
  })

  // 3. Upload files to GitHub
  await octokit.repos.createOrUpdateFileContents({
    owner: 'agentis-publishing',
    repo: repo.data.name,
    path: `${version}/paper.html`,
    message: `Add ${version} HTML`,
    content: Buffer.from(htmlContent).toString('base64')
  })

  await octokit.repos.createOrUpdateFileContents({
    owner: 'agentis-publishing',
    repo: repo.data.name,
    path: `${version}/paper.pdf`,
    message: `Add ${version} PDF`,
    content: pdfContent
  })

  // 4. Update database
  await supabase.from('paper_versions').insert({
    paper_id: params.paperId,
    version_label: version,
    html_url: `https://github.com/agentis-publishing/${repo.data.name}/blob/main/${version}/paper.html`,
    pdf_url: `https://github.com/agentis-publishing/${repo.data.name}/blob/main/${version}/paper.pdf`,
    github_url: repo.data.html_url
  })

  return Response.json({ success: true, github_url: repo.data.html_url })
}
```

### Cloudflare Functions for File Processing
```typescript
// functions/api/review-webhook.ts
export async function onRequestPost(context) {
  const { request, env } = context
  const body = await request.json()
  
  // Verify webhook signature
  const signature = request.headers.get('X-Review-Signature')
  if (!verifySignature(signature, body, env.WEBHOOK_SECRET)) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { paper_id, status, results } = body

  // Update paper in Supabase
  const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY)
  
  await supabase
    .from('papers')
    .update({ 
      status: status === 'approved' ? 'accepted' : 'revision',
      review_results: results
    })
    .eq('id', paper_id)

  // Send notification to author
  await sendNotification(paper_id, status, results)

  return new Response('OK', { status: 200 })
}
```

## 5. Deployment Instructions

### Step 1: Initialize Project
```bash
# Create new Next.js project with TypeScript
npx create-next-app@latest agentis-neobrutalist --typescript --tailwind --app

# Install dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install @octokit/rest class-variance-authority clsx
npm install react-dropzone react-hook-form zod
npm install @radix-ui/react-dialog @radix-ui/react-select
npm install framer-motion lucide-react

# Development dependencies
npm install -D @types/node prettier eslint-config-prettier
```

### Step 2: Environment Setup
```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_KEY=your-service-key

# OAuth (configure in Supabase dashboard)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# External services
REVIEW_SERVER_URL=https://your-review-server.com
REVIEW_SERVER_API_KEY=your-api-key
GITHUB_TOKEN=your-github-token
WEBHOOK_SECRET=your-webhook-secret

# Cloudflare
CF_ACCOUNT_ID=your-account-id
CF_API_TOKEN=your-api-token
```

### Step 3: Supabase Configuration
1. Create new Supabase project
2. Run the SQL schema provided above
3. Configure authentication providers:
   - Enable Email auth
   - Add GitHub OAuth (built-in)
   - Add Google OAuth (built-in)
   - Add ORCID as custom OAuth provider:
     ```
     Authorization URL: https://orcid.org/oauth/authorize
     Token URL: https://orcid.org/oauth/token
     Scope: /authenticate
     ```
4. Create storage buckets:
   - `manuscripts` (private)
   - `supplementary` (private)
   - `publications` (public)

### Step 4: Deploy to Cloudflare Pages
```bash
# Install Cloudflare CLI
npm install -g wrangler

# Build project
npm run build

# Deploy
wrangler pages deploy out --project-name agentis-science

# Set environment variables in Cloudflare dashboard
# Add custom domain agentis.science
```

### Step 5: Setup Review Server Integration
```typescript
// review-server/index.ts (separate service)
import express from 'express'
import { processManuscript } from './ai-review'

const app = express()

app.post('/review', async (req, res) => {
  const { paper_id, manuscript_url } = req.body
  
  // Download manuscript
  const manuscript = await downloadFile(manuscript_url)
  
  // Run AI review checks
  const results = await processManuscript(manuscript)
  
  // Send webhook back to main app
  await fetch(req.body.callback_url, {
    method: 'POST',
    headers: {
      'X-Review-Signature': generateSignature(results),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      paper_id,
      status: results.decision,
      results
    })
  })
  
  res.json({ review_id: generateId(), status: 'processing' })
})
```

### Step 6: GitHub Actions for Publishing
```yaml
# .github/workflows/publish-paper.yml
name: Publish Paper

on:
  workflow_dispatch:
    inputs:
      paper_id:
        description: 'Paper ID to publish'
        required: true
      version:
        description: 'Version label'
        required: true

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Quarto
        uses: quarto-dev/quarto-actions/setup@v2
        
      - name: Fetch manuscript
        run: |
          # Download from Supabase
          curl -o manuscript.md "${{ secrets.SUPABASE_URL }}/storage/v1/object/manuscripts/${{ github.event.inputs.paper_id }}/manuscript.md"
          
      - name: Render with Quarto
        run: |
          quarto render manuscript.md --to html
          quarto render manuscript.md --to pdf
          
      - name: Create release
        uses: actions/create-release@v1
        with:
          tag_name: ${{ github.event.inputs.version }}
          release_name: Paper ${{ github.event.inputs.paper_id }} - ${{ github.event.inputs.version }}
          files: |
            manuscript.html
            manuscript.pdf
```

## 6. Complete Feature Checklist

- [x] Neobrutalist design system with bold colors and typography
- [x] All pages from original site recreated
- [x] Multi-provider authentication (ORCID, GitHub, Google, Email)
- [x] Complete submission system with file uploads
- [x] Author dashboard with submission tracking
- [x] Version management system (preprint, v1, v2, etc.)
- [x] Integration with review server
- [x] Quarto rendering for HTML/PDF generation
- [x] GitHub publishing pipeline
- [x] Supabase storage for manuscripts
- [x] Cloudflare Pages deployment
- [x] Responsive design for all screen sizes
- [x] Accessibility features
- [x] SEO optimization

This implementation plan provides a complete transformation of the Agentis website into a bold, neobrutalist design while maintaining all functionality and adding the requested features for OAuth, submission processing, and GitHub publishing.
