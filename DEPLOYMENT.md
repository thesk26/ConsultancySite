# Vercel Deployment Guide

This guide will help you deploy your Consultancy Site to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
2. Git repository (GitHub, GitLab, or Bitbucket)
3. Node.js installed locally (for testing)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended for testing)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - What's your project's name? (Press Enter for default or enter a name)
   - In which directory is your code located? **./** (press Enter)
   - Want to override the settings? **No**

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard (Recommended for production)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Click "Add New..." → "Project"**

4. **Import your Git repository**

5. **Configure the project**:
   - Framework Preset: **Other**
   - Root Directory: **./**
   - Build Command: `npm run build` (already configured in vercel.json)
   - Output Directory: `dist/public` (already configured in vercel.json)
   - Install Command: `npm install` (already configured in vercel.json)

6. **Add Environment Variables** (if needed):
   - Click "Environment Variables"
   - Add any required variables (e.g., `DATABASE_URL` if using a database)

7. **Click "Deploy"**

## Project Configuration

The following files have been created/configured for Vercel deployment:

- **`vercel.json`**: Vercel configuration file
- **`api/index.js`**: Serverless function entry point for Express backend
- **`.vercelignore`**: Files to exclude from deployment

## Build Process

The deployment will:
1. Install dependencies (`npm install`)
2. Build the React frontend with Vite
3. Bundle the Express backend with esbuild
4. Deploy the static files and serverless functions

## Environment Variables

If you need to add environment variables:

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add your variables (e.g., `DATABASE_URL`, `NODE_ENV`, etc.)

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your domain and follow the DNS configuration instructions

## Monitoring & Logs

- View deployment logs in the Vercel Dashboard
- Check function logs under the **Deployments** tab
- Use Vercel's Analytics for performance monitoring

## Troubleshooting

### Build Fails
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### API Routes Not Working
- Ensure the `api/index.js` file exists
- Check that routes are properly configured in `vercel.json`
- Verify environment variables are set correctly

### Static Files Not Loading
- Check that the output directory is set to `dist/public`
- Verify the build completed successfully
- Check browser console for 404 errors

## Support

For more information, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

