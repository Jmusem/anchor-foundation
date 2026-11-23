// Runs after `vite build` + the SSR build: injects the server-rendered HTML into dist/index.html
// (so crawlers and slow phones get real content immediately) and writes sitemap.xml + robots.txt.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const SITE_URL = (process.env.SITE_URL || 'https://anchorfoundation.co.ke').replace(/\/$/, '')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const file = 'dist/index.html'
const html = readFileSync(file, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('Placeholder <!--app-html--> missing from dist/index.html')
writeFileSync(file, html.replace('<!--app-html-->', render()))

const today = new Date().toISOString().slice(0, 10)
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>
`)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)

// Stamp the service worker so every deploy invalidates old caches.
const sw = readFileSync('dist/sw.js', 'utf8').replaceAll('__BUILD__', Date.now().toString(36))
writeFileSync('dist/sw.js', sw)

rmSync('dist-ssr', { recursive: true, force: true })
console.log(`Prerendered dist/index.html (${SITE_URL}) + sitemap.xml + robots.txt`)
