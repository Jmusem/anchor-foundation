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
  const diff = now === null ? null : Math.max(0, new Date(target).getTime() - now)
  const v = (x) => (diff === null ? '--' : x)
  const cells = [
    ['Days', v(diff === null ? 0 : Math.floor(diff / 864e5))],
    ['Hours', v(diff === null ? 0 : pad(Math.floor(diff / 36e5) % 24))],
    ['Minutes', v(diff === null ? 0 : pad(Math.floor(diff / 6e4) % 60))],
    ['Seconds', v(diff === null ? 0 : pad(Math.floor(diff / 1e3) % 60))],
  ]
  return (
    <div className="count" role="timer" aria-label="Time until the next event">
      {cells.map(([l, x]) => <div key={l}><b>{x}</b><small>{l}</small></div>)}
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
    <section className="section section--alt" id="events">
      <div className="container">
        <Reveal className="head">
          <span className="tag">Join us</span>
          <h2>Calendar of Events</h2>
          <p>Be part of something impactful. Everyone is welcome.</p>
        </Reveal>

        {next && (
          <Reveal className="glass next">
            <div>
              <span className="tag tag--gold">{status(next) === 'live' ? 'Happening now' : 'Next event'}</span>
              <h3>{next.title}</h3>
              <p className="next__meta">
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
              <Reveal as="li" className={`tl is-${s}`} key={e.start} delay={(i % 2) * 80}>
                <span className="tl__dot" aria-hidden />
                <div className="glass tl__card">
                  <time dateTime={e.start}>{e.displayDate}</time>
                  <h3>{e.title}</h3>
                  <p><MapPin size={15} aria-hidden /> {e.venue}</p>
                  <p><Clock size={15} aria-hidden /> {e.time}</p>
                  <span className="status">{s === 'past' ? 'Completed' : s === 'live' ? 'Happening now' : 'Upcoming'}</span>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
