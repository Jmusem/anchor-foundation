import { useState } from 'react'
import { SITE } from '../data'
import { Check, Copy, Mail } from './Icons'
import Reveal from './Reveal'

export default function Donate() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.till)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* clipboard unavailable – the number is visible on screen */ }
  }
  const subject = encodeURIComponent('Donation confirmation')
  const body = encodeURIComponent(`Hello Anchor Foundation,\n\nI have made a donation via M-Pesa Till Number ${SITE.till}.\nPlease confirm receipt.\n\nThank you.`)

  return (
    <section className="donate" id="donate">
      <div className="container">
        <p className="label label--light">05 — Give hope</p>
        <Reveal as="h2" className="display display--light">Your gift becomes a meal, a check-up, a tree.</Reveal>
        <div className="donate__grid">
          <Reveal className="donate__till">
            <p>M-Pesa Till Number</p>
            <div className="till" aria-label={`M-Pesa till number ${SITE.till.split('').join(' ')}`}>{SITE.till}</div>
            <button className="btn btn--paper btn--lg" onClick={copy}>
              {copied ? <><Check size={18} aria-hidden /> Copied</> : <><Copy size={18} aria-hidden /> Copy till number</>}
            </button>
          </Reveal>
          <Reveal className="donate__steps" delay={100}>
            <ol>
              <li><b>1</b><span>Open <strong>M-Pesa</strong> → <strong>Lipa na M-Pesa</strong></span></li>
              <li><b>2</b><span>Choose <strong>Buy Goods &amp; Services</strong></span></li>
              <li><b>3</b><span>Enter the till number and confirm</span></li>
            </ol>
            <a className="donate__confirm" href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>
              <Mail size={18} aria-hidden /> Already given? Tell us so we can say thank you
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
