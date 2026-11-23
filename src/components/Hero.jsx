import { useEffect, useState } from 'react'
import { EVENTS, PROGRAMS } from '../data'
import { photo } from '../assets'

const bg = photo('programs/treeplanting/ee')
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
    <>
      <section className="hero" id="top">
        <img className="hero__bg" src={bg.full} srcSet={`${bg.thumb} 640w, ${bg.full} 1600w`} sizes="100vw" alt="Schoolchildren holding tree seedlings with Anchor Foundation volunteers" fetchPriority="high" decoding="async" />
        <div className="hero__shade" />
        <div className="container hero__inner">
          <p className="hero__eyebrow">Small help can make change</p>
          <h1>
            Empowering communities through <span className="hero__word" key={i}>{WORDS[i]}</span>
          </h1>
          <p className="hero__lead">
            Your small contribution means a lot. Anchor Foundation lifts lives through sports, worship, children’s home
            visits, free health camps, mentorship and tree planting across Kenya.
          </p>
          <div className="hero__cta">
            <a href="#donate" className="btn btn--orange btn--lg">Donate Now</a>
            <a href="#programs" className="btn btn--outline-light btn--lg">Our Programs</a>
          </div>
        </div>
      </section>

      <div className="band">
        <dl className="container band__in">
          {STATS.map((s) => (
            <div key={s.l}><dt>{s.n}</dt><dd>{s.l}</dd></div>
          ))}
        </dl>
      </div>
    </>
  )
}
