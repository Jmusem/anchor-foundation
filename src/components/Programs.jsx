import { useCallback, useEffect, useState } from 'react'
import { ACTIVITIES, PROGRAMS } from '../data'
import { filePhotos, folderPhotos } from '../assets'
import { PROGRAM_ICONS, ChevronLeft, ChevronRight, X, ArrowRight } from './Icons'
import Reveal from './Reveal'

const programs = PROGRAMS.map((p) => ({ ...p, photos: p.folder ? folderPhotos(p.folder) : filePhotos(p.files) }))

function Lightbox({ title, photos, index, onClose, onIndex }) {
  const count = photos.length
  const go = useCallback((d) => onIndex((index + d + count) % count), [index, count, onIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [go, onClose])

  const [touchX, setTouchX] = useState(null)
  const onTouchEnd = (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    setTouchX(null)
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo gallery`} onClick={onClose}>
      <button className="lightbox__close" aria-label="Close gallery" onClick={onClose}><X size={26} /></button>
      <figure onClick={(e) => e.stopPropagation()} onTouchStart={(e) => setTouchX(e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
        <img src={photos[index].full} alt={`${title} – photo ${index + 1} of ${count}`} />
        <figcaption>{title} · {index + 1} / {count}</figcaption>
      </figure>
      {count > 1 && (
        <>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1) }}><ChevronLeft size={28} /></button>
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1) }}><ChevronRight size={28} /></button>
        </>
      )}
    </div>
  )
}

export default function Programs() {
  const [box, setBox] = useState(null) // { program, index }
  const close = useCallback(() => setBox(null), [])
  const setIndex = useCallback((i) => setBox((b) => (b ? { ...b, index: i } : b)), [])

  return (
    <section className="section section--tint" id="programs">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">What we do</p>
          <h2>Our programs</h2>
          <p className="lead">From the football pitch to the children’s home, every program is built to lift people up.</p>
        </Reveal>

        <div className="program-grid">
          {programs.map((p, i) => {
            const Icon = PROGRAM_ICONS[p.icon]
            const cover = p.photos[0]
            return (
              <Reveal as="article" className="program" key={p.id} delay={(i % 3) * 80}>
                <button className="program__media" onClick={() => setBox({ program: p, index: 0 })} aria-label={`View ${p.photos.length} photos: ${p.title}`}>
                  <img src={cover.thumb} alt={`${p.title} – Anchor Foundation`} loading="lazy" decoding="async" width="640" height="427" />
                  <span className="program__count">{p.photos.length} photo{p.photos.length > 1 ? 's' : ''}</span>
                </button>
                <div className="program__body">
                  <span className="icon-chip"><Icon size={20} aria-hidden /></span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <button className="link-btn" onClick={() => setBox({ program: p, index: 0 })}>
                    View gallery <ArrowRight size={16} aria-hidden />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="activities">
          <h3>Key activities throughout the year</h3>
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

      {box && <Lightbox title={box.program.title} photos={box.program.photos} index={box.index} onClose={close} onIndex={setIndex} />}
    </section>
  )
}
