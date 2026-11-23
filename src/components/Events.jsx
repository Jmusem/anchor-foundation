import { useEffect, useState } from 'react'
import { EVENTS } from '../data'
import { Clock, MapPin } from './Icons'
import Reveal from './Reveal'

const pad = (n) => String(n).padStart(2, '0')
const parts = (iso) => {
  const [d, m, y] = new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Africa/Nairobi' }).split(' ')
  return { d, m, y }
}

function Countdown({ target }) {
  const [now, setNow] = useState(null)
  useEffect(() => {
    setNow(Date.now())
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const diff = now === null ? null : Math.max(0, new Date(target).getTime() - now)
  const cells = [
    ['days', diff === null ? '--' : Math.floor(diff / 864e5)],
    ['hrs', diff === null ? '--' : pad(Math.floor(diff / 36e5) % 24)],
    ['min', diff === null ? '--' : pad(Math.floor(diff / 6e4) % 60)],
    ['sec', diff === null ? '--' : pad(Math.floor(diff / 1e3) % 60)],
  ]
  return (
    <div className="count" role="timer" aria-label="Time until the next event">
      {cells.map(([l, v]) => <div key={l}><b>{v}</b><small>{l}</small></div>)}
    </div>
  )
}

export default function Events() {
  // `now` stays null on the server / first render so the prerendered HTML matches the browser.
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
    <section className="section events" id="events">
      <div className="container">
        <p className="label">04 — Join us</p>
        <Reveal as="h2" className="display">On the calendar.</Reveal>

        {next && (
          <Reveal className="next">
            <div>
              <p className="kicker kicker--light"><span className="dot" /> {status(next) === 'live' ? 'Happening now' : 'Next up'}</p>
              <h3>{next.title}</h3>
              <p className="next__meta">{next.displayDate} · {next.venue} · {next.time}</p>
            </div>
            {status(next) === 'upcoming' && <Countdown target={next.start} />}
          </Reveal>
        )}

        <ol className="elist">
          {EVENTS.map((e) => {
            const s = status(e)
            const { d, m, y } = parts(e.start)
            return (
              <Reveal as="li" key={e.start} className={`erow is-${s}`}>
                <time dateTime={e.start} className="erow__date"><b>{d}</b><span>{m} {y}</span></time>
                <div className="erow__body">
                  <h3>{e.title}</h3>
                  <p><span><MapPin size={15} aria-hidden /> {e.venue}</span><span><Clock size={15} aria-hidden /> {e.time}</span></p>
                </div>
                <span className="pill">{s === 'past' ? 'Done' : s === 'live' ? 'Live now' : 'Upcoming'}</span>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
