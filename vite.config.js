import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The public address of the site. Used for canonical URLs, Open Graph, sitemap and
// structured data. Override at build time with:  SITE_URL=https://example.org npm run build
const SITE_URL = (process.env.SITE_URL || 'https://anchorfoundation.org').replace(/\/$/, '')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-url-in-html',
      transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', SITE_URL),
    },
  ],
  define: { __SITE_URL__: JSON.stringify(SITE_URL) },
  build: { target: 'es2020', cssCodeSplit: false },
})
