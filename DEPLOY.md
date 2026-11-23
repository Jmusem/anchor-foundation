# Deploying Anchor Foundation

Every push to `main` builds the site on GitHub and uploads it to the hosting account automatically
(`.github/workflows/deploy.yml`). Nothing to build by hand.

## One-time setup (GitHub → Settings → Secrets and variables → Actions)

The host blocks outside FTP, so the workflow uploads through cPanel's HTTPS API instead.
In cPanel → Security → **Manage API Tokens** → Create (name it `github-deploy`, no expiry). Copy the token once.

**Secrets**
| Name | Value |
|---|---|
| `CPANEL_USER` | cPanel username (`anchorfo`) |
| `CPANEL_HOST` | `anchorfoundation.co.ke` (or the server name your cPanel URL shows) |
| `CPANEL_TOKEN` | the API token |

**Variables** (all optional)
| Name | Default | Purpose |
|---|---|---|
| `SITE_URL` | `https://anchorfoundation.co.ke` | Public address, used for SEO |
| `WEB_DIR` | `/public_html` | Folder the site is uploaded to |
| `FORM_ENDPOINT` | – | e.g. a Formspree URL so the contact form emails you directly |

## Day-to-day
Edit text/dates in `src/data.js` (events, programs, contacts), commit to `main` – the site updates in about 2 minutes.
Watch progress under the repo's **Actions** tab.

## Local
`npm install` · `npm run dev` (live preview) · `npm run build` (production build into `dist/`).
New photos: drop JPG/PNG into `src/assets/...` and run `npm run images`, then delete the originals.
