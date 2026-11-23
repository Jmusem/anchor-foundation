import { MISSION, VISION, VALUES, PILLARS } from '../data'
import { photo } from '../assets'
import { VALUE_ICONS } from './Icons'
import Reveal from './Reveal'

const img = photo('anchor_5')

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Who we are</p>
          <h2>About Anchor Foundation</h2>
          <p className="lead">Empowering and uplifting our community through meaningful, faith-driven initiatives.</p>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-photo">
            <img src={img.full} srcSet={`${img.thumb} 640w, ${img.full} 1600w`} sizes="(min-width: 900px) 45vw, 100vw" alt="Anchor Foundation volunteers cooking for a community meal" loading="lazy" decoding="async" width="1600" height="1067" />
          </Reveal>
          <div className="about-text">
            <Reveal className="card card--accent">
              <h3>Our mission</h3>
              <p>{MISSION}</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <h3>Our vision</h3>
              <p>{VISION}</p>
            </Reveal>
          </div>
        </div>

        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal className="pillar" key={p.title} delay={i * 80}>
              <span className="pillar__num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="values">
          <h3>Our values</h3>
          <ul>
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[i]
              return (
                <li key={v.title}>
                  <span className="icon-chip"><Icon size={22} aria-hidden /></span>
                  <div>
                    <strong>{v.title}</strong>
                    <span>{v.text}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
