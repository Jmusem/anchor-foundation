import { NAV, SITE } from '../data'
import { logo } from '../assets'
import { useInstall, useScrollSpy } from '../hooks'
import { Download, Heart } from './Icons'

export default function Header({ onIosHint }) {
  const active = useScrollSpy()
  const { canInstall, showIosHint, install } = useInstall()

  return (
    <header className="header">
      <div className="container header__bar">
        <a href="#top" className="brand" aria-label={`${SITE.name} – home`}>
          <img src={logo} alt={SITE.name} width="120" height="68" />
        </a>

        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? 'is-active' : ''}>{n.label}</a>
          ))}
        </nav>

        <div className="header__tools">
          {(canInstall || showIosHint) && (
            <button className="btn btn--glass btn--sm" onClick={canInstall ? install : onIosHint} aria-label="Install the Anchor Foundation app">
              <Download size={16} aria-hidden /> <span className="hide-sm">Install app</span>
            </button>
          )}
          <a href="#donate" className="btn btn--primary btn--sm"><Heart size={16} aria-hidden /> Donate</a>
        </div>
      </div>
    </header>
  )
}
