# Deploying Anchor Foundation

Every push to `main` builds the site on GitHub and uploads it to the hosting account automatically
(`.github/workflows/deploy.yml`). Nothing to build by hand.

## One-time setup (GitHub → Settings → Secrets and variables → Actions)

**Secrets**
| Name | Value (from Pinnacle cPanel → FTP Accounts) |
|---|---|
| `FTP_SERVER` | FTP host, e.g. `ftp.yourdomain.org` |
| `FTP_USERNAME` | FTP account username |
| `FTP_PASSWORD` | FTP account password |

**Variables** (all optional)
| Name | Default | Purpose |
|---|---|---|
| `SITE_URL` | `https://anchorfoundation.co.ke` | Real public address – used for SEO (canonical, sitemap, share image) |
| `FTP_DIR` | `./public_html/` | Folder the site is uploaded to |
| `FTP_PROTOCOL` | `ftps` | Use `ftp` if the host has no FTPS |
| `FORM_ENDPOINT` | – | e.g. a Formspree URL so the contact form delivers straight to email |

## Day-to-day
Edit text/dates in `src/data.js` (events, programs, contacts), commit to `main` – the site updates in about 2 minutes.
Watch progress under the repo's **Actions** tab.

## Local
`npm install` · `npm run dev` (live preview) · `npm run build` (production build into `dist/`).
New photos: drop JPG/PNG into `src/assets/...` and run `npm run images`, then delete the originals.
