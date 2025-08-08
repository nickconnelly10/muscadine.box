# Muscadine Home Site

**This is the official homepage and marketing site for Muscadine.**

A clean, modern landing page showcasing Muscadine's mission of health resources and financial self-sovereignty. This site serves as the central hub connecting to our specialized services.

---

## 📦 Deployment Hygiene: What to Commit

| File/Folder         | Required for Deployment? | Commit to Repo? | Notes                                 |
|---------------------|-------------------------|-----------------|---------------------------------------|
| `node_modules/`     | No                      | No              | Only for local dev/build. Should be in `.gitignore`. |
| `package-lock.json` | Yes                     | Yes             | Ensures consistent dependency install |
| `vercel.json`       | Yes (if using Vercel)   | Yes             | Custom Vercel config                  |
| `dist/`             | No                      | No              | Build output, auto-generated          |
| `public/`           | Yes                     | Yes             | Static assets (favicon, legal, etc)   |
| `src/`              | Yes                     | Yes             | Source code                           |
| `.gitignore`        | Yes                     | Yes             | Ensures build artifacts are ignored   |

**Delete or do not commit:**
- `node_modules/` (never commit)
- `dist/` (never commit)
- Any backup files like `package-lock 2.json`, `vercel 2.json`, etc.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3001](http://localhost:3001)

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Vercel Deployment (Production)

1. **Create a new Vercel project** and set the **Root Directory** to this directory.
2. **Build Command:**
   ```bash
   npm run build
   ```
3. **Output Directory:**
   ```
   dist
   ```
4. **Custom Domain:**
   - Set to `muscadine.box` in the Vercel dashboard.

## 🏗️ Architecture

This is a minimal, performant React application built with:
- **Vite** - Fast build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Roman Grape Vine Theme** - Custom design system

## 📁 Project Structure

```
src/
├── components/
│   ├── HomeSite.tsx      # Main landing page content
│   ├── MuscadineBanner.tsx # Top navigation banner
│   └── MuscadineFooter.tsx # Footer component
├── App.tsx               # Root component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Design System

The site uses a custom Roman grape vine theme with:
- **Colors**: Stone, gold, and neutral palettes
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Components**: Consistent button, card, and layout patterns
- **Animations**: Subtle fade and slide effects

## 🔗 External Services

This site links to external services:
- **Launch Health**: `https://health.muscadine.box`
- **DeFi Dashboard**: `https://defi.muscadine.box`
- **Articles**: `https://nicholasconnelly.substack.com/`

## 📄 Legal Pages

Static legal pages are served from the `public/` directory:
- `/privacy.html` - Privacy Policy
- `/terms.html` - Terms of Service

## 🚀 Deployment

The site is configured for Vercel deployment with:
- Automatic HTTPS
- Global CDN
- Security headers
- Asset optimization
- SPA routing support

### Troubleshooting
- If you see `Missing script: "dev"`, ensure your `package.json` has:
  ```json
  "scripts": { "dev": "vite" }
  ```
- If you see errors about missing plugins, run:
  ```bash
  npm install @vitejs/plugin-react vite
  ```

---

*Built on BITCOIN • Secure • Transparent • Professional • Strava Club* 