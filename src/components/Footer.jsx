import { NAV, SITE, SOCIALS } from '../data'
import { logo } from '../assets'
import { SOCIAL_ICONS } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <img src={logo} alt="Anchor Foundation" width="140" height="80" loading="lazy" className="footer__logo" />
          <p>Mindset · Equipping · Empowerment.<br />Empowering communities across Kenya.</p>
        </div>
        <nav aria-label="Footer">
          <h4>Explore</h4>
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          <a href="#donate">Donate</a>
        </nav>
        <div>
          <h4>Connect</h4>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <div className="socials socials--sm">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.key]
              return <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}><Icon size={18} aria-hidden /></a>
            })}
          </div>
        </div>
      </div>
      <p className="footer__legal" suppressHydrationWarning>© {new Date().getFullYear()} Anchor Foundation. All rights reserved.</p>
    </footer>
  )
}
