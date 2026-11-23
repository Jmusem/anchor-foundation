import { EVENTS, PROGRAMS } from '../data'
import { filePhotos, folderPhotos } from '../assets'
import { ArrowRight, Heart } from './Icons'

const strip = [
  ...folderPhotos('homevisit').slice(0, 3),
  ...folderPhotos('sports').slice(0, 3),
  ...folderPhotos('worship').slice(0, 3),
  ...folderPhotos('treeplanting').slice(0, 3),
  ...filePhotos(['anchor_5', 'worship2']),
]

const FACTS = [
  { n: PROGRAMS.length, l: 'Programs running' },
  { n: EVENTS.length, l: 'Events on the 2026 calendar' },
  { n: '47', l: 'Counties we can reach' },
  { n: 'Thu', l: 'Gathering of Anchors, weekly' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="kicker"><span className="dot" /> Anchor Foundation · Kenya</p>
        <h1 className="hero__title">
          <span className="sr-only">Anchor Foundation – empowering communities in Kenya through </span>
          <span className="l1">Mindset.</span>
          <span className="l2">Equipping.</span>
          <span className="l3">Empowerment.</span>
        </h1>
        <div className="hero__row">
          <p className="hero__lead">
            We lift communities through youth sports, worship, children’s home visits, free health camps, mentorship and tree planting — one life at a time.
          </p>
          <div className="hero__cta">
            <a href="#programs" className="btn btn--ink btn--lg">See our work <ArrowRight size={18} aria-hidden /></a>
            <a href="#donate" className="btn btn--hot btn--lg"><Heart size={18} aria-hidden /> Give today</a>
          </div>
        </div>
      </div>

      <div className="strip" aria-hidden="true">
        <div className="strip__track">
          {[...strip, ...strip].map((p, i) => (
            <img key={i} src={p.thumb} width={p.w} height={p.h} alt="" loading={i < 4 ? 'eager' : 'lazy'} decoding="async" />
          ))}
        </div>
      </div>

      <div className="container">
        <dl className="facts">
          {FACTS.map((f) => (
            <div key={f.l}><dt>{f.n}</dt><dd>{f.l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}
