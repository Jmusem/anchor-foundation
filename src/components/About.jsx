import { MISSION, PILLARS, VALUES, VISION } from '../data'
import { photo } from '../assets'
import { Quote, VALUE_ICONS } from './Icons'
import Reveal from './Reveal'

const img = photo('anchor_5')
const img2 = photo('worship1')

const TILES = [
  { key: 'programs/homevisit/homevisit_9', label: 'Children’s Home Visits' },
  { key: 'programs/treeplanting/e', label: 'Tree Planting' },
  { key: 'programs/sports/anch_sport4', label: 'Sporty Events' },
  { key: 'programs/worship/a', label: 'Worship Concerts' },
].map((t) => ({ ...t, ...photo(t.key) }))

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="intro">
          <div>
            <span className="tag">What we can do</span>
            <h2>We believe that we can save more lives with you</h2>
          </div>
          <p>
            Anchor Foundation brings people together to feed children, care for the sick, mentor the young, plant trees
            and grow faith. Every shilling and every volunteer hour turns into real, visible change in the community.
          </p>
        </Reveal>
        <ul className="tiles">
          {TILES.map((t, i) => (
            <Reveal as="li" key={t.key} delay={i * 70}>
              <a href="#programs">
                <img src={t.thumb} width={t.w} height={t.h} alt={t.label} loading="lazy" decoding="async" />
                <span>{t.label}</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="space" />
        <Reveal className="head">
          <span className="tag">Who we are</span>
          <h2>About Anchor Foundation</h2>
          <p>Empowering and uplifting our community through meaningful, faith-driven initiatives.</p>
        </Reveal>

        <div className="about">
          <Reveal className="about__media">
            <img className="about__main" src={img.full} srcSet={`${img.thumb} 640w, ${img.full} 1600w`} sizes="(min-width: 900px) 45vw, 100vw" width={img.w} height={img.h} alt="Anchor Foundation volunteers cooking a community meal" loading="lazy" decoding="async" />
            <img className="about__second" src={img2.thumb} width={img2.w} height={img2.h} alt="Worship gathering hosted by Anchor Foundation" loading="lazy" decoding="async" />
            <figure className="quote glass">
              <Quote size={22} aria-hidden />
              <blockquote>Faith opens eyes that fear tries to blind.</blockquote>
              <figcaption>Anchor Daily</figcaption>
            </figure>
          </Reveal>

          <div className="about__cards">
            <Reveal className="glass card"><h3>Our Mission</h3><p>{MISSION}</p></Reveal>
            <Reveal className="glass card" delay={100}><h3>Our Vision</h3><p>{VISION}</p></Reveal>
          </div>
        </div>

        <ul className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal as="li" className="glass pillar" key={p.title} delay={i * 90}>
              <span className="pillar__n">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="values">
          <h3>Our Values</h3>
          <ul>
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[i]
              return (
                <li key={v.title} className="glass">
                  <span className="chip"><Icon size={22} aria-hidden /></span>
                  <div><strong>{v.title}</strong><span>{v.text}</span></div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
