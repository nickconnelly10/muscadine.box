# Muscadine Finance - Separate Deployment Guide

This guide explains how to deploy the two separate Vite projects to their respective domains on Vercel.

## Project Structure

```
muscadine.box/
├── marketing-site/          # Marketing site (muscadine.box)
│   ├── package.json
│   ├── vite.config.ts
│   ├── src/
│   └── vercel.json
└── app-site/               # DeFi app (app.muscadine.box)
    ├── package.json
    ├── vite.config.ts
    ├── src/
    └── vercel.json
```

## Deployment Strategy

### Option 1: Separate Vercel Projects (Recommended)

Create two separate Vercel projects, each pointing to the same repository but different directories.

#### Marketing Site Deployment

1. **Create Vercel Project**: `muscadine-marketing`
2. **Repository**: Connect to your GitHub repository
3. **Root Directory**: `marketing-site`
4. **Framework Preset**: Vite
5. **Build Command**: `npm run build`
6. **Output Directory**: `dist`
7. **Install Command**: `npm install`
8. **Domains**: 
   - `muscadine.box`
   - `www.muscadine.box`

#### DeFi App Deployment

1. **Create Vercel Project**: `muscadine-app`
2. **Repository**: Connect to your GitHub repository
3. **Root Directory**: `app-site`
4. **Framework Preset**: Vite
5. **Build Command**: `npm run build`
6. **Output Directory**: `dist`
7. **Install Command**: `npm install`
8. **Domains**: 
   - `app.muscadine.box`

### Option 2: Single Project with Rewrites

If you prefer a single Vercel project, you can use rewrites to route traffic based on the hostname.

#### Vercel Configuration

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/marketing-site/$1",
      "has": [
        {
          "type": "host",
          "value": "muscadine.box"
        }
      ]
    },
    {
      "source": "/(.*)",
      "destination": "/marketing-site/$1",
      "has": [
        {
          "type": "host",
          "value": "www.muscadine.box"
        }
      ]
    },
    {
      "source": "/(.*)",
      "destination": "/app-site/$1",
      "has": [
        {
          "type": "host",
          "value": "app.muscadine.box"
        }
      ]
    }
  ]
}
```

## Development Workflow

### Local Development

```bash
# Marketing site (port 3000)
cd marketing-site
npm install
npm run dev

# DeFi app (port 3001)
cd app-site
npm install
npm run dev
```

### Building Both Projects

```bash
# Build marketing site
cd marketing-site
npm run build

# Build DeFi app
cd app-site
npm run build
```

## Environment Variables

### Marketing Site
No special environment variables required.

### DeFi App
```bash
# Optional: WalletConnect Project ID
VITE_WALLET_CONNECT_PROJECT_ID=your-project-id
```

## Domain Configuration

### DNS Setup

Ensure your DNS records point to Vercel:

```
Type    Name    Value
A       @       76.76.19.34
CNAME   www     cname.vercel-dns.com
CNAME   app     cname.vercel-dns.com
```

### Vercel Domain Settings

1. Add domains in each Vercel project settings
2. Configure SSL certificates (automatic with Vercel)
3. Set up redirects if needed

## Testing Deployment

### Marketing Site
- Visit `muscadine.box` or `www.muscadine.box`
- Verify "Launch App" button links to `app.muscadine.box`
- Check all sections load correctly

### DeFi App
- Visit `app.muscadine.box`
- Verify "About" link goes to `muscadine.box`
- Test wallet connection
- Verify portfolio data loads
- Test vault interactions

## Troubleshooting

### Common Issues

1. **Build Failures**: Check that all dependencies are installed
2. **Domain Not Working**: Verify DNS propagation and Vercel domain settings
3. **Cross-Origin Issues**: Ensure proper CORS configuration if needed
4. **Wallet Connection**: Verify wagmi configuration and Base network setup

### Debug Commands

```bash
# Check build output
npm run build

# Check linting
npm run lint

# Preview builds locally
npm run preview
```

## Maintenance

### Updates

When updating either project:

1. Make changes in the respective directory
2. Test locally with `npm run dev`
3. Build and test with `npm run build`
4. Deploy to Vercel
5. Verify functionality on live domains

### Monitoring

- Monitor Vercel deployment logs
- Check for build errors
- Verify domain health
- Monitor wallet connection success rates 