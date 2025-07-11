# Muscadine - Marketing Site

The marketing and information website for Muscadine, featuring a Roman aesthetic design with stone and gold color scheme.

## Features

- **Roman-Inspired Design**: Clean, professional aesthetic with stone and gold color palette
- **Company Information**: About section explaining Muscadine's mission and Bitcoin roots
- **App Description**: "What is Our App" section detailing DeFi vault operations on Base network
- **Contact Information**: Email and Twitter contact details
- **Bitcoin Services**: Professional Bitcoin and crypto services section
- **Substack Integration**: Direct link to articles and research
- **Call-to-Action**: Buttons linking to the DeFi dashboard
- **Responsive Design**: Optimized for desktop and mobile devices
- **Security Optimized**: Latest dependencies with no known vulnerabilities

## Tech Stack

- **Framework**: Vite 7.0.0 + React 18.2.0 + TypeScript 5.0.2
- **Styling**: Tailwind CSS 3.3.3
- **Fonts**: Playfair Display & Inter (Google Fonts)
- **Deployment**: Vercel
- **Animations**: CSS transitions and hover effects
- **Security**: ESLint with TypeScript rules

## Development

```bash
# Install dependencies
npm install

# Start development server (port 3001)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Check for security vulnerabilities
npm audit
```

## Security & Performance

- ✅ **No Vulnerabilities**: All dependencies updated to latest secure versions
- ✅ **Vite 7.0.0**: Latest build tool with security fixes
- ✅ **TypeScript**: Strict type checking for code quality
- ✅ **ESLint**: Code quality and security linting
- ✅ **Optimized Build**: Minified and compressed assets
- ✅ **Security Headers**: XSS protection and content type options

## Deployment

This project is configured for Vercel deployment. The site should be deployed to:
- **Domain**: `muscadine.box`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Project Structure

```
src/
├── components/
│   └── MarketingSite.tsx    # Main marketing site component
├── App.tsx                  # App with navigation and routing
├── main.tsx                 # Entry point
└── index.css               # Global styles and Tailwind components
```

## Design Features

### Color Scheme
- **Primary**: Stone colors (stone-50 to stone-800)
- **Accent**: Gold colors (gold-50 to gold-200)
- **Text**: Stone-700 to stone-900 for readability

### Typography
- **Headings**: Playfair Display serif font with gradient effects
- **Body**: Clean, readable Inter font
- **Links**: Underlined with hover effects

### Animations
- **Fade-in**: Hero section elements
- **Slide-up**: Content sections
- **Hover effects**: Buttons and interactive elements

## Content Sections

1. **Hero Section**: Company name, tagline ("Bitcoin and DeFi self-sovereignty"), and call-to-action buttons
2. **About Section**: Mission and company background
3. **What is Our App**: DeFi vault operations explanation
4. **Contact & Connect**: Contact info and articles section
5. **Bitcoin Services**: Professional services overview
6. **Call-to-Action**: Launch app button
7. **Footer**: Copyright and branding

## Links

- **DeFi Dashboard**: https://app.muscadine.box
- **Contact Email**: nickconnelly10@gmail.com
- **Twitter**: @nicklutk
- **Articles**: https://nicholasconnelly.substack.com/
- **Base Network**: https://base.org

## Environment Setup

No environment variables required. The site uses:
- Static content
- Public links
- CDN-hosted fonts

## Local Development

The marketing site runs on port 3001 and automatically links to the DeFi dashboard on port 3002 when running locally.

## Performance Metrics

- **Bundle Size**: ~12.6KB (gzipped)
- **CSS Size**: ~16.6KB (gzipped)
- **Vendor Bundle**: ~139KB (gzipped)
- **Build Time**: ~1.2s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## Maintenance

- **Dependencies**: Updated to latest secure versions
- **Security**: Regular npm audit checks
- **Performance**: Optimized build process with Vite 7
- **Code Quality**: TypeScript strict mode and ESLint enforcement 