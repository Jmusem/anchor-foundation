import { useState } from 'react'
import { SITE, SOCIALS } from '../data'
import { ArrowUpRight, Send } from './Icons'
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
    <section className="section contact" id="contact">
      <div className="container">
        <p className="label">06 — Get in touch</p>
        <Reveal as="h2" className="display">Let’s talk.</Reveal>
        <div className="contact__grid">
          <Reveal className="contact__info">
            <a className="bigmail" href={`mailto:${SITE.email}`}>{SITE.email}<ArrowUpRight aria-hidden /></a>
            <p><a href={SITE.phoneHref}>{SITE.phone}</a><br />{SITE.address}</p>
            <a className="btn btn--wa btn--lg" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            <ul className="social">
              {SOCIALS.map((s) => (
                <li key={s.key}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <ArrowUpRight size={16} aria-hidden /></a></li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="form" className="form" onSubmit={onSubmit} delay={100}>
            <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>How can we help?<textarea name="message" rows="5" required /></label>
            <input className="hp" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button className="btn btn--ink btn--lg" type="submit" disabled={state === 'sending'}>
              <Send size={18} aria-hidden /> {state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className="form__status" role="status" aria-live="polite">
              {state === 'sent' && (ENDPOINT ? 'Thank you! Your message has been sent.' : 'Your email app should now open with your message ready to send.')}
              {state === 'error' && `Sorry, that didn’t go through. Please email ${SITE.email} directly.`}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
