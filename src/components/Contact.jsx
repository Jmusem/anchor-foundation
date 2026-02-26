import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding contact-section" style={{ backgroundColor: "#f5f6fa", padding: "80px 0" }}>
      <div className="container">

        {/* Section Title */}
        <motion.h2
          className="text-center mb-5"
          style={{ fontWeight: "700", color: "#222", fontSize: "2.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <div className="row g-5">

          {/* Contact Form */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="contact-form p-5 rounded"
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                borderRadius: "12px"
              }}
            >
              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: "600", color: "#444" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                  style={{ borderRadius: "8px", borderColor: "#ddd", padding: "12px" }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: "600", color: "#444" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Email"
                  required
                  style={{ borderRadius: "8px", borderColor: "#ddd", padding: "12px" }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label" style={{ fontWeight: "600", color: "#444" }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  style={{ borderRadius: "8px", borderColor: "#ddd", padding: "12px" }}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "12px 0",
                  borderRadius: "8px",
                  fontSize: "1rem"
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 6px 18px rgba(0,123,255,0.4)" }}
              >
                Send Message
              </motion.button>

              {submitted && (
                <p className="mt-3 text-success" style={{ fontWeight: "500" }}>
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="contact-info p-5 rounded"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                borderRadius: "12px"
              }}
            >
              <h4 className="mb-3" style={{ fontWeight: "700", color: "#222", fontSize: "1.75rem" }}>
                Get in Touch
              </h4>
              <p style={{ color: "#555", lineHeight: "1.8" }}>
                We’d love to hear from you! Reach us via email, phone, or visit our office.
              </p>

              <ul className="list-unstyled mt-4" style={{ color: "#555", lineHeight: "1.8" }}>
                <li><strong>Email:</strong> <a href="mailto:info@anchorfoundation.org" style={{ color: "#007bff" }}>info@anchorfoundation.org</a></li>
                <li><strong>Phone:</strong> <a href="tel:+254714509575" style={{ color: "#007bff" }}>+254 714 509 575</a></li>
                <li><strong>Address:</strong> 123 Anchor Street, Nairobi, Kenya</li>
              </ul>

              <div className="social-links mt-4">
                <a href="https://facebook.com" target="_blank" className="me-3" style={{ color: "#3b5998" }}>Facebook</a>
                <a href="https://instagram.com" target="_blank" className="me-3" style={{ color: "#E4405F" }}>Instagram</a>
                <a href="https://twitter.com" target="_blank" style={{ color: "#1DA1F2" }}>Twitter</a>
              </div>

              <div className="map mt-4" style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 6px 18px rgba(0,0,0,0.1)" }}>
                <iframe
                  title="Anchor Foundation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.012345678!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173e2bde!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1629987654321!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}