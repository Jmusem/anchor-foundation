// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import "./Events.css";

const events = [
  {
    date: "2026-04-24T21:00:00",
    displayDate: "24 Apr 2026",
    title: "Gathering of Anchors – Worship Night",
    venue: "GPF Thiba",
    time: "9:00 PM – 4:00 AM",
  },
  {
    date: "2026-06-01T09:00:00",
    displayDate: "1 Jun 2026",
    title: "Environmental Day",
    venue: "Community Outreach",
    time: "All Day",
  },
  {
    date: "2026-08-09T10:00:00",
    displayDate: "9 Aug 2026",
    title: "Children’s Home Outreach",
    venue: "Nyeri Town",
    time: "10:00 AM – 3:00 PM",
  },
  {
    date: "2026-10-10T08:00:00",
    displayDate: "10 Oct 2026",
    title: "Anchor Ride Day",
    venue: "Thiba",
    time: "8:00 AM – 2:00 PM",
  },
  {
    date: "2026-12-13T09:00:00",
    displayDate: "13 Dec 2026",
    title: "Anchor Thanksgiving Day",
    venue: "UPC Church, Thiba",
    time: "9:00 AM – 1:00 PM",
  },
];

export default function Events() {
  const [timeLeft, setTimeLeft] = useState({});
  const nextEvent = events[0];

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(nextEvent.date) - new Date();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="events-section">
      <div className="container">

        {/* Header */}
        <motion.div
          className="events-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Anchor Foundation</span>
          <h2>2026 Calendar of Events</h2>
          <p>Join us and be part of something impactful.</p>
        </motion.div>

        {/* Countdown */}
        <div className="countdown-box">
          <h4>Next Event Starts In:</h4>
          <div className="countdown-grid">
            <div><span>{timeLeft.days}</span><small>Days</small></div>
            <div><span>{timeLeft.hours}</span><small>Hours</small></div>
            <div><span>{timeLeft.minutes}</span><small>Minutes</small></div>
            <div><span>{timeLeft.seconds}</span><small>Seconds</small></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="timeline-content">
                <span className="event-date">{event.displayDate}</span>
                <h3>{event.title}</h3>

                <div className="event-meta">
                  <div><MapPin size={16}/> {event.venue}</div>
                  <div><Clock size={16}/> {event.time}</div>
                </div>

                {/* Clean Status Badge Instead of Register Button */}
                <div className="event-status">
                  Upcoming Event
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}