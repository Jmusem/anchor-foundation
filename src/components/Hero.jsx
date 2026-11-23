import { photo } from '../assets'
import { PILLARS } from '../data'
import { ArrowRight, Heart } from './Icons'

const hero = photo('homevisit1')

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero__bg"
        src={hero.full}
        srcSet={`${hero.thumb} 640w, ${hero.full} 1600w`}
        sizes="100vw"
        alt="Anchor Foundation volunteers serving a meal to children"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero__overlay" />
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--light">Kenya · Community · Faith</p>
        <h1>
          Empowering communities through <span className="hero__accent">mindset, equipping &amp; empowerment.</span>
        </h1>
        <p className="hero__lead">
          Anchor Foundation transforms lives through youth sports, worship, children’s home visits, free health camps,
          mentorship and tree planting — one community at a time.
        </p>
        <div className="hero__cta">
          <a href="#programs" className="btn btn--primary btn--lg">Discover our work <ArrowRight size={18} aria-hidden /></a>
          <a href="#donate" className="btn btn--ghost btn--lg"><Heart size={18} aria-hidden /> Support the mission</a>
        </div>
        <ul className="hero__pillars">
          {PILLARS.map((p) => (
            <li key={p.title}>{p.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
