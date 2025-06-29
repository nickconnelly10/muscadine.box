# Vercel Deployment Guide

## Current Issue Resolution

The error "The specified Root Directory 'muscadine.box' does not exist" has been fixed by:

1. **Adding `vercel.json`** - This tells Vercel to use the root directory (not a subdirectory)
2. **Pushing the configuration** - The `vercel.json` file is now in the repository

## Vercel Project Settings

### 1. Root Directory
- **Set to:** `/` (root) or leave empty
- **Do NOT set to:** `muscadine.box` (this was causing the error)

### 2. Build Settings
- **Framework Preset:** Vite
- **Build Command:** `npm run build` (or leave empty, `vercel.json` handles this)
- **Output Directory:** `dist` (or leave empty, `vercel.json` handles this)
- **Install Command:** `npm install` (default)

### 3. Environment Variables
No environment variables are required for basic functionality.

## Domain Configuration

### For www.muscadine.box (Marketing Site)
1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add `www.muscadine.box`
4. Configure DNS to point to Vercel's nameservers

### For app.muscadine.box (DeFi Dashboard)
1. In the same "Domains" section
2. Add `app.muscadine.box`
3. Both domains will serve the same application
4. The app automatically detects the subdomain and shows the appropriate content

## How Subdomain Detection Works

The application automatically detects the hostname and serves different content:

```typescript
// From src/App.tsx
const isAppSubdomain = window.location.hostname === 'app.muscadine.box' || 
                      window.location.hostname === 'localhost' && window.location.port === '3000'

// Routes to DeFi Dashboard if on app subdomain, otherwise Marketing Site
```

## Troubleshooting

### If deployment still fails:

1. **Check Vercel Project Settings:**
   - Root Directory should be `/` or empty
   - Framework should be "Vite" or "Other"

2. **Verify Build Logs:**
   - Look for any build errors
   - Check if all dependencies are installed

3. **Test Locally:**
   ```bash
   npm run build
   npm run preview
   ```

4. **Check Repository Structure:**
   - All project files should be in the root directory
   - `package.json`, `vite.config.ts`, `src/` folder should be at root level

### Common Issues:

1. **Root Directory Error:** Make sure it's set to `/` not `muscadine.box`
2. **Build Failures:** Check if all dependencies are in `package.json`
3. **Domain Issues:** Ensure DNS is properly configured for both subdomains

## Next Steps

1. **Redeploy:** The new `vercel.json` should trigger a new deployment
2. **Monitor:** Check the build logs for any remaining issues
3. **Test:** Once deployed, test both subdomains:
   - `www.muscadine.box` → Marketing site
   - `app.muscadine.box` → DeFi dashboard

## Support

If issues persist, check:
- Vercel build logs for specific error messages
- Repository structure matches the expected layout
- All configuration files are properly committed 