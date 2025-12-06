# Website Deployment Guide

This guide walks you through publishing your Stage Up website to production.

## 📋 Pre-Deployment Checklist

- [x] Production build tested successfully
- [ ] Review all content and links
- [ ] Test all routes and navigation
- [ ] Verify images and assets load correctly
- [ ] Check mobile responsiveness

---

## Step 1: Final Build Verification

Your production build is ready! The build output is in the `dist/` folder.

To test the production build locally before deploying:

```bash
npm run preview
```

This will start a local server where you can test your production build. Visit the URL shown in the terminal (usually `http://localhost:4173`).

**Important:** Test all your routes (`/`, `/about`, `/faq`, `/privacy-policy`, `/terms-of-service`) to ensure they work correctly.

---

## Step 2: Choose a Hosting Platform

Here are the most popular options for hosting React/Vite applications:

### Option A: Vercel (Recommended - Easiest)
- **Best for:** Quick deployment, automatic HTTPS, custom domains
- **Free tier:** Yes
- **Setup time:** ~5 minutes
- **Features:** Automatic deployments from Git, preview deployments, analytics

### Option B: Netlify
- **Best for:** Simple deployments, form handling
- **Free tier:** Yes
- **Setup time:** ~5 minutes
- **Features:** Drag-and-drop deployment, automatic HTTPS, custom domains

### Option C: GitHub Pages
- **Best for:** Free hosting for public repositories
- **Free tier:** Yes
- **Setup time:** ~10 minutes
- **Note:** Requires additional configuration for React Router

### Option D: Cloudflare Pages
- **Best for:** Fast global CDN, great performance
- **Free tier:** Yes
- **Setup time:** ~5 minutes
- **Features:** Automatic deployments, unlimited bandwidth

---

## Step 3: Deploy to Your Chosen Platform

### 🚀 Deploying to Vercel

1. **Install Vercel CLI** (if deploying via CLI):
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked for settings, use defaults (or customize)
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Or use Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your repository
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Click "Deploy"

4. **Configure for React Router:**
   - Vercel automatically handles SPA routing, but if you have issues:
   - Create `vercel.json` in your project root:
     ```json
     {
       "rewrites": [
         { "source": "/(.*)", "destination": "/index.html" }
       ]
     }
     ```

### 🌐 Deploying to Netlify

1. **Install Netlify CLI** (if deploying via CLI):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **Or use Netlify Dashboard:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Drag and drop your `dist` folder, OR
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Configure for React Router:**
   - Create `netlify.toml` in your project root:
     ```toml
     [[redirects]]
       from = "/*"
       to = "/index.html"
       status = 200
     ```

### 📦 Deploying to GitHub Pages

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json scripts:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts** to set the base path:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your actual repo name
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

### ⚡ Deploying to Cloudflare Pages

1. **Via Cloudflare Dashboard:**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project
   - Connect your Git repository
   - Configure:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

2. **Configure for React Router:**
   - After deployment, go to Functions → Redirects
   - Add a redirect rule:
     - From: `/*`
     - To: `/index.html`
     - Status: 200

---

## Step 4: Post-Deployment

### ✅ Verify Your Deployment

1. **Test all pages:**
   - Homepage (`/`)
   - About (`/about`)
   - FAQ (`/faq`)
   - Privacy Policy (`/privacy-policy`)
   - Terms of Service (`/terms-of-service`)
   - 404 page (try a random URL)

2. **Check on different devices:**
   - Desktop
   - Tablet
   - Mobile

3. **Test performance:**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Check loading times
   - Verify images are optimized

### 🔒 Security & Performance

- ✅ HTTPS is automatically enabled on most platforms
- ✅ Your build is minified and optimized
- ✅ Consider adding a custom domain (see Step 5)

### 📊 Analytics (Optional)

Consider adding analytics to track visitors:
- Google Analytics
- Plausible Analytics
- Vercel Analytics (if using Vercel)

---

## Step 5: Custom Domain (Optional)

Most platforms allow you to connect a custom domain:

1. **Purchase a domain** (if you don't have one):
   - Namecheap
   - Google Domains
   - Cloudflare Registrar

2. **Connect domain in your hosting platform:**
   - Follow platform-specific instructions
   - Update DNS records as instructed
   - Wait for DNS propagation (can take up to 48 hours)

---

## Step 6: Continuous Deployment (Recommended)

Set up automatic deployments so your site updates when you push to GitHub:

1. **Connect your Git repository** to your hosting platform
2. **Configure build settings** (already done in Step 3)
3. **Push to your main branch** - deployment happens automatically!

---

## Troubleshooting

### Routes not working (404 errors)
- **Problem:** Direct navigation to routes like `/about` returns 404
- **Solution:** Ensure you've configured redirects/rewrites for your platform (see Step 3)

### Assets not loading
- **Problem:** Images or CSS not showing
- **Solution:** Check that `base` path in `vite.config.ts` matches your deployment path

### Build errors
- **Problem:** Build fails during deployment
- **Solution:** 
  - Test build locally: `npm run build`
  - Check Node.js version (most platforms use Node 18+)
  - Review build logs in your hosting platform

---

## Quick Reference Commands

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Run development server
npm run dev

# Lint code
npm run lint
```

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment Guide:** https://vitejs.dev/guide/static-deploy.html

---

**You're all set!** Your website is ready to go live. 🎉

