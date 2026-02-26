import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // <-- import this
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Donate.css";

export default function Donate() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialProgram = query.get("program") || ""; // <-- read the query

  const [selectedProgram, setSelectedProgram] = useState(initialProgram);
  const [formData, setFormData] = useState({ name: "", email: "", amount: "", message: "" });
  const [success, setSuccess] = useState(false);

  const programs = [
    { name: "Child Sponsorship", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d", description: "Support a child’s education, healthcare, and daily needs." },
    { name: "Sports & Youth Empowerment", image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf", description: "Empower youth through sports, leadership & mentorship." },
    { name: "Street Kids Initiative", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c", description: "Rehabilitate and reintegrate vulnerable street children." },
    { name: "Children Home Visits", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300", description: "Provide emotional and material support to children homes." },
    { name: "Medical Care Consultancy", image: "https://images.unsplash.com/photo-1584515933487-779824d29309", description: "Offer medical guidance and care support to families." }
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      amount: formData.amount,
      program: selectedProgram,
      message: formData.message,
    };
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY")
      .then(() => { setSuccess(true); setTimeout(() => setSuccess(false), 4000); })
      .catch((error) => console.error(error));
  };

  const selectedProgramData = programs.find(p => p.name === selectedProgram);

  // Automatically scroll to preview if program pre-selected
  useEffect(() => {
    if (selectedProgramData) {
      const preview = document.querySelector(".program-preview_donate");
      if (preview) preview.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProgramData]);

  return (
    <section id="donate" className="donate-section">
      <div className="container">
        <motion.h1 className="donate-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          Support a Cause. Change a Life.
        </motion.h1>

        {/* Program Cards */}
        <div className="program-grid_donate">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`program-card_donate ${selectedProgram === program.name ? "active" : ""}`}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0,123,255,0.25)" }}
              onClick={() => setSelectedProgram(program.name)}
            >
              <img src={program.image} alt={program.name} />
              <div className="program-info_donate">
                <h5>{program.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Preview */}
        <AnimatePresence>
          {selectedProgramData && (
            <motion.div
              className="program-preview_donate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <img src={selectedProgramData.image} alt="preview" />
              <div className="preview-info_donate">
                <h3>{selectedProgramData.name}</h3>
                <p>{selectedProgramData.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Donation Form */}
        <motion.form className="donate-form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="number" name="amount" placeholder="Donation Amount (USD)" required onChange={handleChange} />
          <textarea name="message" placeholder="Optional message" onChange={handleChange}></textarea>

          <button type="submit" className="btn-submit">Confirm Donation</button>
        </motion.form>

        <AnimatePresence>
          {success && (
            <motion.div className="success-popup" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
              🎉 Thank you! Your donation request has been sent.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}