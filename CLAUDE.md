# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Agentis Science is a peer-reviewed, AI-assisted, open-access scientific publishing platform built with Next.js 15, featuring a neobrutalist design system. The project is deployed to GitHub Pages at https://agentis-publishing.github.io/page/

## Common Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run lint         # Run Next.js linter
npm run export       # Build and export static site
npm run deploy       # Export and prepare for GitHub Pages deployment
```

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Custom neobrutalist component library
- **State Management**: React hooks and form management with react-hook-form
- **Validation**: Zod for schema validation
- **Icons**: Lucide React

### Key Configuration
- **Static Export**: Configured for static site generation (output: 'export')
- **Base Path**: Deployed under `/page` subdirectory
- **Images**: Unoptimized for static export compatibility
- **Trailing Slashes**: Enabled for proper GitHub Pages routing

### Design System

The project uses a neobrutalist design with:
- **Primary Colors**: Electric Blue (#0066FF), Hot Pink (#FF0066), Cyber Yellow (#FFFF00)
- **Accent Colors**: Acid Green (#00FF00), Deep Purple (#6600FF), Orange (#fb923c)
- **Typography**: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- **Design Elements**: Bold borders (4px), dramatic shadows, high contrast

### Component Structure

Core components in `src/components/neo/`:
- `Button.tsx`: Multiple variants (primary, secondary, accent, ghost, link)
- `Card.tsx`: Container components with neobrutalist styling
- `Input.tsx`: Form inputs with thick borders

UI components in `src/components/ui/`:
- `Navigation.tsx`: Main navigation with mobile menu
- `PaperCard.tsx`: Scientific paper display cards
- `StatCard.tsx`: Statistics display cards
- `StatusBadge.tsx`: Color-coded status indicators

### Future Integrations

The codebase is prepared for:
- Supabase authentication and database (dependencies installed)
- GitHub API integration via Octokit
- File uploads with react-dropzone
- Animation with Framer Motion

## Development Notes

1. All pages use the App Router pattern in `src/app/`
2. Global styles defined in `src/app/globals.css` with CSS variables
3. TypeScript path alias configured: `@/*` maps to `./src/*`
4. Environment variables needed for Supabase integration (see README)
5. Static export limitations: No dynamic routes or server-side features