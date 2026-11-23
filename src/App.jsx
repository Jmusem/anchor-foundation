import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Events from './components/Events'
import Donate from './components/Donate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TabBar from './components/TabBar'
import Schema from './components/Schema'
import { Share, X } from './components/Icons'

export default function App() {
  const [iosHint, setIosHint] = useState(false)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header onIosHint={() => setIosHint(true)} />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Events />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <TabBar />
      <Schema />
      {iosHint && (
        <div className="sheet" role="dialog" aria-label="Install the app" onClick={() => setIosHint(false)}>
          <div className="sheet__card" onClick={(e) => e.stopPropagation()}>
            <button className="icon-btn sheet__x" aria-label="Close" onClick={() => setIosHint(false)}><X size={18} /></button>
            <h3>Install Anchor Foundation</h3>
            <p>Tap <Share size={16} aria-label="Share" style={{ verticalAlign: '-3px' }} /> in Safari, then <strong>Add to Home Screen</strong>.</p>
          </div>
        </div>
      )}
    </>
  )
}
