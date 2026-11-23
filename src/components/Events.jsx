import { useEffect, useState } from 'react'
import { EVENTS } from '../data'
import { Calendar, Clock, MapPin } from './Icons'
import Reveal from './Reveal'

const pad = (n) => String(n).padStart(2, '0')

function Countdown({ target }) {
  const [now, setNow] = useState(null)
  useEffect(() => {
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  if (now === null) return <div className="countdown" aria-hidden />
  const diff = Math.max(0, new Date(target).getTime() - now)
  const parts = [
    ['Days', Math.floor(diff / 864e5)],
    ['Hours', Math.floor(diff / 36e5) % 24],
    ['Minutes', Math.floor(diff / 6e4) % 60],
    ['Seconds', Math.floor(diff / 1e3) % 60],
  ]
  return (
    <div className="countdown" role="timer" aria-label="Time until the next event">
      {parts.map(([label, v]) => (
        <div key={label}><span>{label === 'Days' ? v : pad(v)}</span><small>{label}</small></div>
      ))}
    </div>
  )
}

export default function Events() {
  // `now` stays null on the server / first render so prerendered HTML matches the browser.
  const [now, setNow] = useState(null)
  useEffect(() => setNow(Date.now()), [])

  const status = (e) => {
    if (now === null) return 'upcoming'
    if (new Date(e.end).getTime() < now) return 'past'
    if (new Date(e.start).getTime() <= now) return 'live'
    return 'upcoming'
  }
  const next = now === null ? null : EVENTS.find((e) => status(e) !== 'past')

  return (
    <section className="section" id="events">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Join us</p>
          <h2>Calendar of events</h2>
          <p className="lead">Be part of something impactful. Everyone is welcome.</p>
        </Reveal>

        {next && (
          <Reveal className="next-event">
            <div>
              <p className="eyebrow eyebrow--light">{status(next) === 'live' ? 'Happening now' : 'Next up'}</p>
              <h3>{next.title}</h3>
              <p className="next-event__meta">
                <span><Calendar size={16} aria-hidden /> {next.displayDate}</span>
                <span><MapPin size={16} aria-hidden /> {next.venue}</span>
                <span><Clock size={16} aria-hidden /> {next.time}</span>
              </p>
            </div>
            {status(next) === 'upcoming' && <Countdown target={next.start} />}
          </Reveal>
        )}

        <ol className="timeline">
          {EVENTS.map((e, i) => {
            const s = status(e)
            return (
              <Reveal as="li" className={`timeline__item is-${s}`} key={e.start} delay={(i % 3) * 60}>
                <time className="timeline__date" dateTime={e.start}>{e.displayDate}</time>
                <div className="timeline__body">
                  <h3>{e.title}</h3>
                  <p><MapPin size={15} aria-hidden /> {e.venue}</p>
                  <p><Clock size={15} aria-hidden /> {e.time}</p>
                </div>
                <span className="badge">{s === 'past' ? 'Completed' : s === 'live' ? 'Happening now' : 'Upcoming'}</span>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
