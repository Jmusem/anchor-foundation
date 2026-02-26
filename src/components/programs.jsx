import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sportsEventImg from '../assets/programs/events/sports.jpg';
import './Program.css';

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
    { title: "Sporty Events", description: "Empowering the youth through sports, teamwork, and discipline.", images: getImages(footballImages) },
    { title: "Worship Concerts", description: "Fostering faith and community through music and worship events.", images: getImages(worshipImages) },
    { title: "Children Home Visits", description: "Providing love, care, and mentorship to children in need.", images: getImages(homeVisitImages) },
    { title: "Tree Planting", description: "Planting trees in schools, churches, and communities.", images: getImages(treePlantingImages) },
  ];

  const upcomingEvents = [
    {
      title: "Sporty Tuesday Football Tournament",
      description: "Join us for an exciting match between Anchor Fc and EA ICS FC",
      date: "April 3, 2026",
      image: sportsEventImg
    }
  ];

  // Lightbox functions
  const openLightbox = (images, index) => setLightbox({ open: true, images, current: index });
  const closeLightbox = () => setLightbox({ open: false, images: [], current: 0 });
  const nextImage = () => setLightbox(prev => ({ ...prev, current: (prev.current + 1) % prev.images.length }));
  const prevImage = () => setLightbox(prev => ({ ...prev, current: (prev.current - 1 + prev.images.length) % prev.images.length }));

  return (
    <section id="programs" className="programs-section">
      <div className="container">

        {/* Section Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        {/* Key Activities */}
        <motion.div
          className="key-activities"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Key Activities</h3>
          <ul>
            {keyActivities.map((activity, idx) => (
              <li key={idx}>
                <span className="bullet">•</span> {activity}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          className="programs-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {programs.map((p, idx) => {
            const extraImages = p.images.length - 1;
            return (
              <motion.div
                key={idx}
                className="program-card"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
              >
                {/* Program Image */}
                <div className="program-image-wrapper" onClick={() => openLightbox(p.images, 0)}>
                  <img src={p.images[0]} alt={p.title} className="program-image-main" />
                  {extraImages > 0 && (
                    <motion.div
                      className="view-more-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      +{extraImages} More
                    </motion.div>
                  )}
                </div>

                {/* Program Content */}
                <div className="program-content">
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  {/* Donate button scrolls to #donate section */}
                  <motion.button
                    className="btn-donate"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px #007bff" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const donateSection = document.getElementById("donate");
                      if (donateSection) donateSection.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Donate
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Upcoming Events */}
        <section id="events" className="upcoming-events">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Upcoming Events
          </motion.h2>

          <div className="events-grid">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                className="event-card"
                key={idx}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }}
              >
                <img src={event.image} alt={event.title} />
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <p className="event-date">{event.date}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="lightbox"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <motion.img
                key={lightbox.current}
                src={lightbox.images[lightbox.current]}
                alt="Program"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxHeight: "80%", maxWidth: "90%", objectFit: "contain", borderRadius: "12px" }}
              />
              <div className="lightbox-controls" style={{ position: "absolute", bottom: "20px", display: "flex", gap: "10px" }}>
                <button onClick={(e) => { e.stopPropagation(); prevImage(); }}>Prev</button>
                <button onClick={(e) => { e.stopPropagation(); nextImage(); }}>Next</button>
                <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>Close</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}