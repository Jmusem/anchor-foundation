import { useState } from 'react'
import { SITE } from '../data'
import { Check, Copy, Mail, Smartphone } from './Icons'
import { photo } from '../assets'
import Reveal from './Reveal'

const bg = photo('programs/homevisit/homevisit_9')

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
    <section className="section donate" id="donate">
      <img className="donate__bg" src={bg.full} alt="" loading="lazy" decoding="async" />
      <div className="donate__shade" />
      <div className="container donate__in">
        <Reveal className="head head--light">
          <span className="tag tag--gold">Give hope</span>
          <h2>Support Anchor Foundation</h2>
          <p>Your gift funds meals for children, free health camps, youth sports, mentorship and trees for our schools.</p>
        </Reveal>

        <div className="donate__grid">
          <Reveal className="mpesa">
            <Smartphone size={44} aria-hidden />
            <p className="mpesa__label">M-Pesa Till Number</p>
            <div className="mpesa__num" aria-label={`M-Pesa till number ${SITE.till.split('').join(' ')}`}>{SITE.till}</div>
            <button className="btn btn--white btn--lg" onClick={copy}>
              {copied ? <><Check size={18} aria-hidden /> Copied</> : <><Copy size={18} aria-hidden /> Copy till number</>}
            </button>
            <p className="mpesa__how">M-Pesa → Lipa na M-Pesa → Buy Goods &amp; Services → enter the till number → confirm payment.</p>
          </Reveal>

          <Reveal className="glass thanks" delay={100}>
            <h3>Already made a donation?</h3>
            <p>Let us know so we can acknowledge and confirm your support — your generosity changes lives.</p>
            <a className="btn btn--orange btn--lg" href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>
              <Mail size={18} aria-hidden /> I have made a donation
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
