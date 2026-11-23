import { useEffect, useState } from 'react'
import { NAV } from '../data'
import { logo } from '../assets'
import { Heart, Menu, X } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header__bar">
        <a href="#top" className="brand" aria-label="Anchor Foundation – home" onClick={close}>
          <img src={logo} alt="Anchor Foundation" width="150" height="86" />
        </a>

        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
          <a href="#donate" className="btn btn--primary btn--sm nav__donate" onClick={close}>
            <Heart size={16} aria-hidden /> Donate
          </a>
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
