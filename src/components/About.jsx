import { MISSION, PILLARS, VALUES, VISION } from '../data'
import { photo } from '../assets'
import Reveal from './Reveal'

const img = photo('anchor_5')
const img2 = photo('worship1')

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <p className="label">01 — Who we are</p>
        <Reveal as="p" className="statement">
          Anchor Foundation <mark>empowers and uplifts</mark> communities across Kenya through faith, sport, service and care —{' '}
          <mark>one life</mark> at a time.
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__photos">
            <img src={img.full} srcSet={`${img.thumb} 640w, ${img.full} 1600w`} sizes="(min-width: 900px) 40vw, 100vw" width={img.w} height={img.h} alt="Anchor Foundation volunteers cooking a community meal" loading="lazy" decoding="async" />
            <img className="about__photo2" src={img2.thumb} width={img2.w} height={img2.h} alt="Worship gathering hosted by Anchor Foundation" loading="lazy" decoding="async" />
          </Reveal>

          <div className="about__text">
            <Reveal className="block">
              <h2><span className="num">A</span> Our mission</h2>
              <p>{MISSION}</p>
            </Reveal>
            <Reveal className="block">
              <h2><span className="num">B</span> Our vision</h2>
              <p>{VISION}</p>
            </Reveal>
          </div>
        </div>

        <ol className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80}>
              <span className="pillars__n">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="values">
          <h3 className="label">What we stand for</h3>
          <ul>
            {VALUES.map((v) => (
              <li key={v.title} title={v.text}>{v.title}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
