# Scientific Publishing with Agentis

https://agentis-publishing.github.io/page/

A peer-reviewed, human-assisted, open-access journal built with Next.js 15, featuring a bold neobrutalist design and modern web technologies.

## 🚀 Features

- **Neobrutalist Design**: Bold colors, thick borders, and dramatic shadows
- **Responsive Layout**: Works perfectly on all devices
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Component Library**: Reusable UI components with consistent styling
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper focus management

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: Custom neobrutalist component library
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agentis-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_KEY=your-service-key

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Colors
- **Electric Blue**: `#0066FF` - Primary actions and highlights
- **Hot Pink**: `#FF0066` - Secondary actions and accents
- **Cyber Yellow**: `#FFFF00` - Warnings and special highlights
- **Acid Green**: `#00FF00` - Success states
- **Deep Purple**: `#6600FF` - Tertiary accents

### Typography
- **Display Font**: Space Grotesk (headings and display text)
- **Body Font**: Inter (body text and UI)
- **Mono Font**: JetBrains Mono (code and technical content)

### Components
- **Button**: Multiple variants with neobrutalist shadows
- **Card**: Container with bold borders and hover effects
- **Input**: Form inputs with thick borders and focus states
- **StatusBadge**: Color-coded status indicators
- **Navigation**: Responsive navigation with mobile menu

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/
│   ├── neo/               # Core neobrutalist components
│   │   ├── Button.tsx     # Button component with variants
│   │   ├── Card.tsx       # Card components
│   │   └── Input.tsx      # Input component
│   └── ui/                # UI components
│       ├── Navigation.tsx # Main navigation
│       ├── PaperCard.tsx  # Paper display card
│       ├── StatCard.tsx   # Statistics card
│       └── StatusBadge.tsx # Status indicator
└── lib/
    └── utils.ts           # Utility functions
```

## 🚀 Deployment

### GitHub Pages (Current Setup)

This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Pushes to `main` branch trigger automatic deployment
2. **Live Site**: https://agentis-publishing.github.io/page/
3. **Custom Domain**: Configured for agentis.science (if DNS is set up)
4. **Configuration**: Ensure GitHub Pages source is set to "GitHub Actions" in repository settings

#### Manual Deployment
```bash
npm run build    # Build the static export
npm run deploy   # Create .nojekyll file for GitHub Pages
```

### Alternative Deployment Options

#### Vercel (Recommended for production)
1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** automatically on push to main branch

#### Cloudflare Pages
1. **Build the project**
   ```bash
   npm run build
   ```
2. **Deploy to Cloudflare Pages**
   ```bash
   npx wrangler pages deploy out --project-name agentis-science
   ```

## 🔧 Development

### Adding New Pages

1. Create a new file in `src/app/`
2. Export a default React component
3. Add navigation links in `src/components/ui/Navigation.tsx`

### Creating Components

1. Follow the neobrutalist design principles
2. Use the established color palette
3. Include proper TypeScript types
4. Add to the appropriate directory (`neo/` for core, `ui/` for specific)

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the established design tokens
- Include hover and focus states
- Ensure accessibility compliance

## 🎯 Future Features

- [ ] Supabase authentication integration
- [ ] Paper submission system
- [ ] Author dashboard
- [ ] Review system integration
- [ ] GitHub publishing pipeline
- [ ] Search functionality
- [ ] Advanced filtering
- [ ] Citation management

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or open an issue on GitHub.
