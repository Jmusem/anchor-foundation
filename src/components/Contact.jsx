import { useState } from 'react'
import { SITE, SOCIALS } from '../data'
import { Mail, MapPin, Phone, Send, SOCIAL_ICONS } from './Icons'
import Reveal from './Reveal'

// Optional: set VITE_FORM_ENDPOINT (e.g. a Formspree URL) at build time to deliver messages straight to your inbox.
// Without it the form opens the visitor's email app with the message pre-filled, so nothing is ever lost.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

export default function Contact() {
  const [state, setState] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot
    if (ENDPOINT) {
      setState('sending')
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
        })
        if (!res.ok) throw new Error('bad status')
        form.reset()
        setState('sent')
      } catch {
        setState('error')
      }
    } else {
      const subject = encodeURIComponent(`Website message from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setState('sent')
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="head">
          <span className="tag">Get in touch</span>
          <h2>Contact Anchor Foundation</h2>
          <p>Want to volunteer, partner with us, or request a visit? We’d love to hear from you.</p>
        </Reveal>

        <div className="contact">
          <Reveal as="form" className="glass form" onSubmit={onSubmit}>
            <label>Full name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>Message<textarea name="message" rows="5" required /></label>
            <input className="hp" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button className="btn btn--primary btn--lg" type="submit" disabled={state === 'sending'}>
              <Send size={18} aria-hidden /> {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className="form__status" role="status" aria-live="polite">
              {state === 'sent' && (ENDPOINT ? 'Thank you! Your message has been sent.' : 'Your email app should now open with your message ready to send.')}
              {state === 'error' && `Sorry, that didn’t go through. Please email ${SITE.email} directly.`}
            </p>
          </Reveal>

          <Reveal className="glass info" delay={100}>
            <h3>Get in touch</h3>
            <ul>
              <li><span className="chip"><Mail size={20} aria-hidden /></span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><span className="chip"><Phone size={20} aria-hidden /></span><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><span className="chip"><MapPin size={20} aria-hidden /></span><span>{SITE.address}</span></li>
            </ul>
            <a className="btn btn--wa btn--lg" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <h3>Follow us</h3>
            <div className="socials">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.key]
                return <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`Anchor Foundation on ${s.name}`}><Icon size={22} aria-hidden /></a>
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
