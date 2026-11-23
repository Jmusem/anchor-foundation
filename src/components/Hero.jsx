import { useEffect, useState } from 'react'
import { EVENTS, PROGRAMS } from '../data'
import { photo } from '../assets'
import { ArrowRight, ChevronDown, Heart } from './Icons'

const bg = photo('homevisit1')
const WORDS = ['Mindset', 'Equipping', 'Empowerment']

const STATS = [
  { n: PROGRAMS.length, l: 'Community programs' },
  { n: EVENTS.length, l: 'Events in 2026' },
  { n: '47', l: 'Counties we can reach' },
  { n: 'Every Thu', l: 'Gathering of Anchors' },
]

export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((x) => (x + 1) % WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="top">
      <img
        className="hero__bg"
        src={bg.full}
        srcSet={`${bg.thumb} 640w, ${bg.full} 1600w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero__shade" />
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />

      <div className="container hero__inner">
        <p className="tag tag--glass">Faith · Community · Kenya</p>
        <h1>
          Empowering Communities Through{' '}
          <span className="hero__word" key={i}>{WORDS[i]}</span>
        </h1>
        <p className="hero__lead">
          Anchor Foundation transforms lives through youth sports, worship, children’s home visits, free health camps,
          mentorship and tree planting — one community at a time.
        </p>
        <div className="hero__cta">
          <a href="#programs" className="btn btn--primary btn--lg">Discover our work <ArrowRight size={18} aria-hidden /></a>
          <a href="#donate" className="btn btn--glass btn--lg"><Heart size={18} aria-hidden /> Support the mission</a>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.l}><dt>{s.n}</dt><dd>{s.l}</dd></div>
          ))}
        </dl>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About"><ChevronDown size={22} /></a>
    </section>
  )
}
