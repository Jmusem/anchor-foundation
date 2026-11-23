import { useEffect, useState } from 'react'

export const SECTION_IDS = ['top', 'about', 'programs', 'moments', 'events', 'donate', 'contact']

// Highlights whichever section is currently in the middle of the screen.
export function useScrollSpy(ids = SECTION_IDS) {
  const [active, setActive] = useState('top')
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const seen = new Map()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting))
        const first = ids.find((id) => seen.get(id))
        if (first) setActive(first)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

// Light / dark theme, remembered per visitor. The first value is set before paint by a script in index.html.
export function useTheme() {
  const [theme, setTheme] = useState('light')
  useEffect(() => setTheme(document.documentElement.getAttribute('data-theme') || 'light'), [])
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch { /* private mode */ }
  }
  return [theme, toggle]
}

// Install-as-app support (Chrome/Edge/Android prompt, plus a hint for iOS Safari).
export function useInstall() {
  const [evt, setEvt] = useState(null)
  const [ios, setIos] = useState(false)
  const [installed, setInstalled] = useState(false)
  useEffect(() => {
    const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone
    setInstalled(!!standalone)
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent) && !standalone)
    const onPrompt = (e) => { e.preventDefault(); setEvt(e) }
    const onInstalled = () => { setInstalled(true); setEvt(null) }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])
  const install = async () => {
    if (!evt) return
    evt.prompt()
    await evt.userChoice
    setEvt(null)
  }
  return { canInstall: !installed && !!evt, showIosHint: ios && !installed, install }
}
