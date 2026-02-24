import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Donate.css";

export default function Donate() {
  const [selectedProgram, setSelectedProgram] = useState("");
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

  return (
    <section className="donate-section" style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
      <div className="container">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontWeight: 700, fontSize: "2.5rem", textAlign: "center", color: "#222", marginBottom: "60px" }}
        >
          Support a Cause. Change a Life.
        </motion.h1>

        {/* Program Cards */}
        <div className="program-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", marginBottom: "50px" }}>
          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
              className={`program-card ${selectedProgram === program.name ? "active" : ""}`}
              onClick={() => setSelectedProgram(program.name)}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                background: "#fff",
                boxShadow: selectedProgram === program.name ? "0 12px 30px rgba(0,123,255,0.25)" : "0 4px 15px rgba(0,0,0,0.08)",
                transition: "0.3s"
              }}
            >
              <img src={program.image} alt={program.name} style={{ width: "100%", height: "140px", objectFit: "cover" }} />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h5 style={{ fontWeight: 600, fontSize: "1rem", color: "#222" }}>{program.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview Section */}
        <AnimatePresence>
          {selectedProgramData && (
            <motion.div
              className="program-preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: "50px", flexWrap: "wrap" }}
            >
              <img src={selectedProgramData.image} alt="preview" style={{ borderRadius: "12px", width: "300px", height: "200px", objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }} />
              <div style={{ maxWidth: "600px" }}>
                <h3 style={{ fontWeight: 700, color: "#222", marginBottom: "15px" }}>{selectedProgramData.name}</h3>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6 }}>{selectedProgramData.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Donation Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "40px",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
          }}
        >
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} />
          <input type="number" name="amount" placeholder="Donation Amount (USD)" required onChange={handleChange} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd" }} />
          <textarea name="message" placeholder="Optional message" onChange={handleChange} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ddd", resize: "none" }}></textarea>

          <button type="submit" style={{
            padding: "12px",
            fontWeight: 600,
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "0.3s"
          }}
          >
            Confirm Donation
          </button>
        </motion.form>

        {/* Success Popup */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                background: "#28a745",
                color: "#fff",
                padding: "15px 25px",
                borderRadius: "10px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                zIndex: 9999
              }}
            >
              🎉 Thank you! Your donation request has been sent.
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}