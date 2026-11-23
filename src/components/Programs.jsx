import { useCallback, useState } from 'react'
import { ACTIVITIES, PROGRAMS } from '../data'
import { filePhotos, folderPhotos } from '../assets'
import { PROGRAM_ICONS, ArrowRight, Images } from './Icons'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

const programs = PROGRAMS.map((p) => ({ ...p, photos: p.folder ? folderPhotos(p.folder) : filePhotos(p.files) }))
const moments = ['homevisit', 'sports', 'worship', 'treeplanting'].flatMap((f) => folderPhotos(f).slice(0, 4))

export default function Programs() {
  const [box, setBox] = useState(null)
  const [all, setAll] = useState(false)
  const close = useCallback(() => setBox(null), [])
  const setIndex = useCallback((i) => setBox((b) => (b ? { ...b, index: i } : b)), [])
  const shown = all ? moments : moments.slice(0, 8)

  return (
    <>
      <section className="section section--alt" id="programs">
        <div className="container">
          <Reveal className="head">
            <span className="tag">What we do</span>
            <h2>Our Programs</h2>
            <p>From the football pitch to the children’s home, every program is built to lift people up.</p>
          </Reveal>

          <div className="programs">
            {programs.map((p, i) => {
              const Icon = PROGRAM_ICONS[p.icon]
              const cover = p.photos[0]
              const open = () => setBox({ title: p.title, photos: p.photos, index: 0 })
              return (
                <Reveal as="article" className="glass program" key={p.id} delay={(i % 3) * 80}>
                  <button className="program__media" onClick={open} aria-label={`View ${p.photos.length} photos: ${p.title}`}>
                    <img src={cover.thumb} width={cover.w} height={cover.h} alt={`${p.title} – Anchor Foundation`} loading="lazy" decoding="async" />
                    <span className="program__count"><Images size={14} aria-hidden /> {p.photos.length}</span>
                  </button>
                  <div className="program__body">
                    <span className="chip"><Icon size={20} aria-hidden /></span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <button className="link" onClick={open}>View photos <ArrowRight size={16} aria-hidden /></button>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="glass activities">
            <h3>Key Activities</h3>
            <ul>
              {ACTIVITIES.map((a) => (
                <li key={a.title}>
                  <span className="activities__when">{a.when}</span>
                  <strong>{a.title}</strong>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" id="moments">
        <div className="container">
          <Reveal className="head">
            <span className="tag">Gallery</span>
            <h2>Moments That Matter</h2>
            <p>A look at life with the Anchor family.</p>
          </Reveal>
          <div className="gallery">
            {shown.map((p, i) => (
              <button key={p.thumb} onClick={() => setBox({ title: 'Anchor Foundation moments', photos: moments, index: i })} aria-label={`Open photo ${i + 1}`}>
                <img src={p.thumb} width={p.w} height={p.h} alt="Anchor Foundation community moment" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
          {!all && moments.length > 8 && (
            <div className="center"><button className="btn btn--line btn--lg" onClick={() => setAll(true)}>Show all {moments.length} photos</button></div>
          )}
        </div>
      </section>

      {box && <Lightbox title={box.title} photos={box.photos} index={box.index} onClose={close} onIndex={setIndex} />}
    </>
  )
}
