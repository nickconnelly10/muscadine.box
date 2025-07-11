# Vercel Deployment Guide

## Current Deployment Structure

The project now uses **separate deployments** for each site:

1. **Marketing Site** (`muscadine.box`) → Deployed from `marketing-site/` directory
2. **DeFi Dashboard** (`defi.muscadine.box`) → Deployed from `app-site/` directory

## Marketing Site Deployment

### Vercel Project Settings for Marketing Site

1. **Root Directory:** `marketing-site`
2. **Framework Preset:** Vite
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. **Install Command:** `npm install`

### Domain Configuration
- **Primary Domain:** `muscadine.box`
- **Redirect:** `www.muscadine.box` → `muscadine.box`

## DeFi Dashboard Deployment

### Vercel Project Settings for DeFi Dashboard

1. **Root Directory:** `app-site`
2. **Framework Preset:** Vite
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. **Install Command:** `npm install`

### Domain Configuration
- **Primary Domain:** `defi.muscadine.box`

## Deployment Steps

### 1. Marketing Site (muscadine.box)

```bash
# Navigate to marketing site directory
cd marketing-site

# Install dependencies
npm install

# Build for production
npm run build

# Deploy to Vercel
# - Connect repository to Vercel
# - Set root directory to 'marketing-site'
# - Deploy to muscadine.box domain
```

### 2. DeFi Dashboard (defi.muscadine.box)

```bash
# Navigate to app site directory
cd app-site

# Install dependencies
npm install

# Build for production
npm run build

# Deploy to Vercel
# - Connect repository to Vercel
# - Set root directory to 'app-site'
# - Deploy to defi.muscadine.box domain
```

## Environment Variables

No environment variables are required for either site. Both use:
- Public Base RPC endpoints
- Public token and vault addresses
- Static content and configurations

## Local Development

### Marketing Site
```bash
cd marketing-site
npm run dev
# Runs on http://localhost:3001
```

### DeFi Dashboard
```bash
cd app-site
npm run dev
# Runs on http://localhost:3002
```

## Troubleshooting

### Common Issues:

1. **Root Directory Error:**
   - Marketing site: Set to `marketing-site`
   - DeFi dashboard: Set to `app-site`

2. **Build Failures:**
   - Check if all dependencies are installed in the correct directory
   - Verify `package.json` exists in the root directory being deployed

3. **Domain Issues:**
   - Ensure DNS is properly configured for both domains
   - Marketing site: `muscadine.box` and `www.muscadine.box`
   - DeFi dashboard: `defi.muscadine.box`

### Build Verification

Test builds locally before deploying:

```bash
# Marketing site
cd marketing-site
npm run build
npm run preview

# DeFi dashboard
cd app-site
npm run build
npm run preview
```

## Project Structure

```
muscadine.box/
├── marketing-site/          # Marketing site deployment
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── vercel.json
├── app-site/               # DeFi dashboard deployment
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── vercel.json
├── README.md
├── DEPLOYMENT.md
└── SEPARATE_DEPLOYMENT.md
```

## Support

For deployment issues:
- Check Vercel build logs for specific error messages
- Verify repository structure matches the expected layout
- Ensure all configuration files are properly committed
- Contact: nickconnelly10@icloud.com 