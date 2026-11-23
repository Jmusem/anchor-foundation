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
    } catch {
      /* clipboard unavailable – the number is visible on screen */
    }
  }

  const subject = encodeURIComponent('Donation confirmation')
  const body = encodeURIComponent(
    `Hello Anchor Foundation,\n\nI have made a donation via M-Pesa Till Number ${SITE.till}.\nPlease confirm receipt.\n\nThank you.`,
  )

  return (
    <section className="section donate" id="donate">
      <div className="container donate__grid">
        <Reveal>
          <p className="eyebrow eyebrow--light">Give hope</p>
          <h2>Support Anchor Foundation</h2>
          <p className="lead lead--light">
            Your gift funds meals for children, free health camps, youth sports, mentorship and trees for our schools.
            Every shilling is put to work in the community.
          </p>
          <ol className="steps">
            <li>Open <strong>M-Pesa</strong> → <strong>Lipa na M-Pesa</strong></li>
            <li>Choose <strong>Buy Goods &amp; Services</strong></li>
            <li>Enter the Till Number and confirm payment</li>
          </ol>
        </Reveal>

        <Reveal className="till" delay={120}>
          <p className="till__label">M-Pesa Till Number</p>
          <p className="till__number" aria-label={`M-Pesa till number ${SITE.till.split('').join(' ')}`}>{SITE.till}</p>
          <button className="btn btn--light btn--lg" onClick={copy}>
            {copied ? <><Check size={18} aria-hidden /> Copied</> : <><Copy size={18} aria-hidden /> Copy till number</>}
          </button>
          <p className="till__note">Already donated? Let us know so we can thank you.</p>
          <a className="link-btn link-btn--light" href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>
            <Mail size={16} aria-hidden /> I have made a donation
          </a>
        </Reveal>
      </div>
    </section>
  )
}
