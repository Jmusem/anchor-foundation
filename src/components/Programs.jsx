import { useCallback, useState } from 'react'
import { ACTIVITIES, PROGRAMS } from '../data'
import { filePhotos, folderPhotos } from '../assets'
import { PROGRAM_ICONS, ArrowUpRight } from './Icons'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

const programs = PROGRAMS.map((p) => ({ ...p, photos: p.folder ? folderPhotos(p.folder) : filePhotos(p.files) }))
const moments = ['homevisit', 'sports', 'worship', 'treeplanting'].flatMap((f) => folderPhotos(f).slice(0, 4))

export default function Programs() {
  const [box, setBox] = useState(null) // { title, photos, index }
  const [all, setAll] = useState(false)
  const close = useCallback(() => setBox(null), [])
  const setIndex = useCallback((i) => setBox((b) => (b ? { ...b, index: i } : b)), [])
  const shown = all ? moments : moments.slice(0, 9)

  return (
    <>
      <section className="section programs" id="programs">
        <div className="container">
          <p className="label">02 — What we do</p>
          <Reveal as="h2" className="display">Six ways we show up.</Reveal>

          <ul className="plist">
            {programs.map((p, i) => {
              const Icon = PROGRAM_ICONS[p.icon]
              const cover = p.photos[0]
              return (
                <Reveal as="li" key={p.id}>
                  <button className="prow" onClick={() => setBox({ title: p.title, photos: p.photos, index: 0 })} aria-label={`${p.title} – view ${p.photos.length} photos`}>
                    <span className="prow__n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="prow__main">
                      <span className="prow__title"><Icon size={26} aria-hidden /> {p.title}</span>
                      <span className="prow__desc">{p.description}</span>
                    </span>
                    <span className="prow__img"><img src={cover.thumb} width={cover.w} height={cover.h} alt="" loading="lazy" decoding="async" /></span>
                    <span className="prow__go" aria-hidden><ArrowUpRight size={28} /><small>{p.photos.length} photo{p.photos.length > 1 ? "s" : ""}</small></span>
                  </button>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section moments" id="moments">
        <div className="container">
          <p className="label">03 — Moments</p>
          <Reveal as="h2" className="display">Life at Anchor.</Reveal>
          <div className="masonry">
            {shown.map((p, i) => (
              <button key={p.thumb} onClick={() => setBox({ title: 'Anchor Foundation moments', photos: moments, index: i })} aria-label={`Open photo ${i + 1}`}>
                <img src={p.thumb} width={p.w} height={p.h} alt="Anchor Foundation community moment" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
          {!all && moments.length > 9 && (
            <div className="center"><button className="btn btn--line btn--lg" onClick={() => setAll(true)}>Show all {moments.length} photos</button></div>
          )}
        </div>
      </section>

      <section className="section year">
        <div className="container">
          <p className="label">Through the year</p>
          <ul className="year__list">
            {ACTIVITIES.map((a) => (
              <Reveal as="li" key={a.title}>
                <span className="year__when">{a.when}</span>
                <strong>{a.title}</strong>
                <span>{a.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {box && <Lightbox title={box.title} photos={box.photos} index={box.index} onClose={close} onIndex={setIndex} />}
    </>
  )
}
