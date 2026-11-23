import { NAV, SITE } from '../data'
import { logo } from '../assets'
import { useInstall, useScrollSpy, useTheme } from '../hooks'
import { Download, Moon, Sun } from './Icons'

export default function Header({ onIosHint }) {
  const active = useScrollSpy()
  const [theme, toggle] = useTheme()
  const { canInstall, showIosHint, install } = useInstall()

  return (
    <header className="header">
      <div className="container header__bar">
        <a href="#top" className="brand" aria-label={`${SITE.name} – home`}>
          <img src={logo} alt={SITE.name} width="120" height="68" />
        </a>

        <nav className="nav" aria-label="Main">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href} className={active === n.href.slice(1) ? 'is-active' : ''}>
              <sup>{String(i + 1).padStart(2, '0')}</sup>{n.label}
            </a>
          ))}
        </nav>

        <div className="header__tools">
          {(canInstall || showIosHint) && (
            <button className="icon-btn icon-btn--text" onClick={canInstall ? install : onIosHint} aria-label="Install the Anchor Foundation app">
              <Download size={18} aria-hidden /> <span>Install app</span>
            </button>
          )}
          <button className="icon-btn" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
          </button>
          <a href="#donate" className="btn btn--ink btn--sm header__give">Give</a>
        </div>
      </div>
    </header>
  )
}
