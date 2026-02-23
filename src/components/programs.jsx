import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// Import all program images
const footballImages = import.meta.glob('../assets/programs/sports/*.{jpg,jpeg,png}', { eager: true });
const worshipImages = import.meta.glob('../assets/programs/worship/*.{jpg,jpeg,png}', { eager: true });
const homeVisitImages = import.meta.glob('../assets/programs/homevisit/*.{jpg,jpeg,png}', { eager: true });

// Utility to convert import object to array of image URLs
const getImages = (imagesObject) => Object.values(imagesObject).map(img => img.default);

export default function Programs() {
  const [lightbox, setLightbox] = useState({ open: false, images: [], current: 0 });

  const programs = [
    { title: "Football Events", description: "Empowering children through sports, teamwork, and discipline.", images: getImages(footballImages) },
    { title: "Worship Concerts", description: "Fostering faith and community through music and worship events.", images: getImages(worshipImages) },
    { title: "Children Home Visits", description: "Providing love, care, and mentorship to children in need.", images: getImages(homeVisitImages) },

  ];

  // Lightbox controls
  const openLightbox = (images, index) => setLightbox({ open: true, images, current: index });
  const closeLightbox = () => setLightbox({ open: false, images: [], current: 0 });
  const nextImage = () => setLightbox(prev => ({ ...prev, current: (prev.current + 1) % prev.images.length }));
  const prevImage = () => setLightbox(prev => ({ ...prev, current: (prev.current - 1 + prev.images.length) % prev.images.length }));

  return (
    <section className="section-padding programs-section">
      <div className="container text-center">
        <motion.h2
          className="neon-text mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        <div className="row g-4">
          {programs.map((p, idx) => (
            <motion.div
              key={idx}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="glass-card program-card p-3 d-flex flex-column">
                <h4 className="neon-text mb-2">{p.title}</h4>
                <p className="flex-grow-1">{p.description}</p>

                {/* Image Grid with "+X More" */}
                <div className="program-images-grid">
                  {p.images.slice(0, 4).map((img, i) => {
                    const remaining = p.images.length - 4;
                    return (
                      <div key={i} className="image-wrapper" onClick={() => openLightbox(p.images, i)}>
                        <motion.img src={img} alt={p.title} whileHover={{ scale: 1.05 }} />
                        {i === 3 && remaining > 0 && <div className="more-overlay">+{remaining} More</div>}
                      </div>
                    );
                  })}
                </div>

                <button className="btn-neon mt-auto">Donate</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
              className="lightbox d-flex justify-content-center align-items-center"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, flexDirection: "column" }}
            >
              <motion.img
                key={lightbox.current}
                src={lightbox.images[lightbox.current]}
                alt="Program"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxHeight: "80vh", maxWidth: "90vw", borderRadius: "10px", boxShadow: "0 0 20px #00f5ff" }}
              />

              <div className="mt-3 d-flex gap-3">
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