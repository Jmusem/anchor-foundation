import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Events from './components/Events'
import Donate from './components/Donate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Schema from './components/Schema'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Programs />
        <Events />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <Schema />
    </>
  )
}
