import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from './Icons'

export default function Lightbox({ title, photos, index, onClose, onIndex }) {
  const count = photos.length
  const go = useCallback((d) => onIndex((index + d + count) % count), [index, count, onIndex])
  const [touchX, setTouchX] = useState(null)

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

  const onTouchEnd = (e) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    setTouchX(null)
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo gallery`} onClick={onClose}>
      <button className="lightbox__close" aria-label="Close gallery" onClick={onClose}><X size={24} /></button>
      <figure onClick={(e) => e.stopPropagation()} onTouchStart={(e) => setTouchX(e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
        <img src={photos[index].full} alt={`${title} – photo ${index + 1} of ${count}`} />
        <figcaption><span>{title}</span><span>{String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span></figcaption>
      </figure>
      {count > 1 && (
        <>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1) }}><ChevronLeft size={26} /></button>
          <button className="lightbox__nav lightbox__nav--next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1) }}><ChevronRight size={26} /></button>
        </>
      )}
    </div>
  )
}
