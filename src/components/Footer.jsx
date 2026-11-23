import { NAV, SITE } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__word" aria-hidden="true">Anchor</p>
        <div className="footer__row">
          <p>Mindset · Equipping · Empowerment.<br />Empowering communities across Kenya.</p>
          <nav aria-label="Footer">
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            <a href="#donate">Donate</a>
          </nav>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={SITE.phoneHref}>{SITE.phone}</a></p>
        </div>
        <p className="footer__legal" suppressHydrationWarning>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
