import { NAV, SITE, SOCIALS } from '../data'
import { logo } from '../assets'
import { useInstall, useScrollSpy } from '../hooks'
import { Download, Mail, Phone, SOCIAL_ICONS } from './Icons'

export default function Header({ onIosHint }) {
  const active = useScrollSpy()
  const { canInstall, showIosHint, install } = useInstall()

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar__in">
          <p>
            <a href={SITE.phoneHref}><Phone size={13} aria-hidden /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}><Mail size={13} aria-hidden /> {SITE.email}</a>
          </p>
          <div className="topbar__right">
            <span className="topbar__social">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.key]
                return <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}><Icon size={14} aria-hidden /></a>
              })}
            </span>
            <a href="#donate" className="topbar__donate">Donate Now</a>
          </div>
        </div>
      </div>

      <div className="header__bar container">
        <a href="#top" className="brand" aria-label={`${SITE.name} – home`}>
          <img src={logo} alt={SITE.name} width="150" height="86" />
        </a>

        <nav className="nav" aria-label="Main">
          <a href="#top" className={active === 'top' ? 'is-active' : ''}>Home</a>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? 'is-active' : ''}>{n.label}</a>
          ))}
        </nav>

        <div className="header__tools">
          {(canInstall || showIosHint) && (
            <button className="btn btn--line btn--sm" onClick={canInstall ? install : onIosHint} aria-label="Install the Anchor Foundation app">
              <Download size={15} aria-hidden /> <span className="hide-sm">Install app</span>
            </button>
          )}
          <a href="#donate" className="btn btn--orange btn--sm header__give">Donate Now</a>
        </div>
      </div>
    </header>
  )
}
