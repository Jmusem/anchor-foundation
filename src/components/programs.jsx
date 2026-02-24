import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sportsEventImg from '../assets/programs/events/sports.jpg';

// Import images
const footballImages = import.meta.glob('../assets/programs/sports/*.{jpg,jpeg,png}', { eager: true });
const worshipImages = import.meta.glob('../assets/programs/worship/*.{jpg,jpeg,png}', { eager: true });
const homeVisitImages = import.meta.glob('../assets/programs/homevisit/*.{jpg,jpeg,png}', { eager: true });
const treePlantingImages = import.meta.glob('../assets/programs/treeplanting/*.{jpg,jpeg,png}', { eager: true });
const getImages = (imagesObject) => Object.values(imagesObject).map(img => img.default);

export default function Programs() {
  const [lightbox, setLightbox] = useState({ open: false, images: [], current: 0 });

  const keyActivities = [
    "Gathering of Anchors every Thursday from 9:00 - 10:00pm",
    "Health camps – We offer free diagnosis.",
    "Planting and donations of trees to schools, churches, etc."
  ];

  const programs = [
    { title: "Football Events", description: "Empowering children through sports, teamwork, and discipline.", images: getImages(footballImages) },
    { title: "Worship Concerts", description: "Fostering faith and community through music and worship events.", images: getImages(worshipImages) },
    { title: "Children Home Visits", description: "Providing love, care, and mentorship to children in need.", images: getImages(homeVisitImages) },
    { title: "Tree Planting", description: "Planting trees in schools, churches, and communities.", images: getImages(treePlantingImages) },
  ];

  const upcomingEvents = [
    {
      title: "Sporty Tuesday Football Tournament",
      description: "Join us for an exciting match between Anchor Fc and EA ICS FC",
      date: "April 3, 2026",
      image: sportsEventImg // Use the imported image
    }
  ];

  const openLightbox = (images, index) => setLightbox({ open: true, images, current: index });
  const closeLightbox = () => setLightbox({ open: false, images: [], current: 0 });
  const nextImage = () => setLightbox(prev => ({ ...prev, current: (prev.current + 1) % prev.images.length }));
  const prevImage = () => setLightbox(prev => ({ ...prev, current: (prev.current - 1 + prev.images.length) % prev.images.length }));

  return (
    <section className="section-padding programs-section">
      <div className="container">

        {/* Section Title */}
        <motion.h2
          className="neon-text text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        {/* Key Activities */}
        <motion.div
          className="key-activities mb-5 p-4 rounded-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="neon-text mb-3">Key Activities</h3>
          <ul>
            {keyActivities.map((activity, idx) => (
              <li key={idx}>
                <span className="activity-bullet">●</span> {activity}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Programs */}
        <div className="programs-column-layout">
          {programs.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                className={`program-row d-flex flex-column flex-lg-row align-items-center mb-5 ${isEven ? "" : "flex-lg-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                {/* Images Section */}
                <div className="program-images-grid" style={{ flex: '1' }}>
                  {p.images.slice(0, 4).map((img, i) => {
                    const remaining = p.images.length - 4;
                    return (
                      <motion.div
                        key={i}
                        className="image-wrapper"
                        whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 0 15px #00f5ff' }}
                        onClick={() => openLightbox(p.images, i)}
                      >
                        <img src={img} alt={p.title} />
                        {i === 3 && remaining > 0 && (
                          <div className="more-overlay">+{remaining} More</div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Vertical Line */}
                <div className="vertical-line"></div>

                {/* Text Section */}
                <div className="program-text" style={{ flex: '1' }}>
                  <h4 className="neon-text">{p.title}</h4>
                  <p>{p.description}</p>
                  <motion.a
                    href="/donate"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f5ff" }}
                    className="btn-neon mt-2 d-inline-block text-center"
                  >
                    Donate
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Upcoming Events Section */}
        <section className="section-padding upcoming-events-section mt-5">
          <div className="container">
            <motion.h2
              className="neon-text text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Upcoming Events
            </motion.h2>

            <div className="row g-4">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  className="col-12 col-md-6 col-lg-4"
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="event-card p-3 rounded-4">
                    <img src={event.image} alt={event.title} className="img-fluid rounded-3 mb-3" />
                    <h4 className="neon-text">{event.title}</h4>
                    <p>{event.description}</p>
                    <p className="event-date">{event.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="lightbox d-flex justify-content-center align-items-center"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, flexDirection: "column" }}
            >
              <motion.img
                key={lightbox.current}
                src={lightbox.images[lightbox.current]}
                alt="Program"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxHeight: "80vh", maxWidth: "90vw", borderRadius: "12px", boxShadow: "0 0 30px #00f5ff" }}
              />

              <div className="mt-3 d-flex gap-3 align-items-center">
                <button className="btn-neon" onClick={(e) => { e.stopPropagation(); prevImage(); }}>Prev</button>
                <button className="btn-neon" onClick={(e) => { e.stopPropagation(); nextImage(); }}>Next</button>
                <span className="text-light">{lightbox.current + 1}/{lightbox.images.length}</span>
                <button className="btn-neon" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>Close</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}