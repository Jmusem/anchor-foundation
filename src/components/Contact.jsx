import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Link,
} from "@mui/material";

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
    setTimeout(() => setSubmitted(false), 4000); // auto hide success
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ bgcolor: "#0f172a", py: 12, px: 3, position: "relative", overflow: "hidden" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 10,
              background: "linear-gradient(90deg,#1a416a,#207283)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Paper
                elevation={6}
                sx={{ p: 5, borderRadius: 3, bgcolor: "#1f2f5a", color: "#e0e7ff" }}
              >
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      InputProps={{ sx: { bgcolor: "#15223f", color: "#e0e7ff" } }}
                      required
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      InputProps={{ sx: { bgcolor: "#15223f", color: "#e0e7ff" } }}
                      required
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      multiline
                      rows={5}
                      InputProps={{ sx: { bgcolor: "#15223f", color: "#e0e7ff" } }}
                      required
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "#4F9DFF",
                        "&:hover": { bgcolor: "#2a76d2" },
                        borderRadius: 3,
                        py: 1.5,
                        fontWeight: 600,
                      }}
                      whileHover={{ scale: 1.03 }}
                      component={motion.div}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      style={{ marginTop: 16, color: "#4F9DFF", fontWeight: 600 }}
                    >
                      🎉 Thank you! Your message has been sent.
                    </motion.div>
                  )}
                </AnimatePresence>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Paper
                elevation={6}
                sx={{ p: 5, borderRadius: 3, bgcolor: "#1f2f5a", color: "#e0e7ff" }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#4F9DFF" }}>
                  Get in Touch
                </Typography>
                <Typography sx={{ mb: 3, color: "#cfd8ff" }}>
                  We’d love to hear from you! Reach us via email, phone, or visit our office.
                </Typography>

                <Stack spacing={1.5}>
                  <Typography>
                    <strong>Email:</strong>{" "}
                    <Link href="mailto:info@anchorfoundation.org" sx={{ color: "#4F9DFF" }}>info@anchorfoundation.org</Link>
                  </Typography>
                  <Typography>
                    <strong>Phone:</strong>{" "}
                    <Link href="tel:+254741973192" sx={{ color: "#4F9DFF" }}>+254 741973192</Link>
                  </Typography>
                  <Typography>
                    <strong>Address:</strong> 123 Anchor Street, Nairobi, Kenya
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} mt={4}>
                  <Link href="https://facebook.com" target="_blank" sx={{ color: "#3b5998" }}>Facebook</Link>
                  <Link href="https://instagram.com" target="_blank" sx={{ color: "#E4405F" }}>Instagram</Link>
                  <Link href="https://twitter.com" target="_blank" sx={{ color: "#1DA1F2" }}>Twitter</Link>
                </Stack>

                <Box mt={4} sx={{ borderRadius: 3, overflow: "hidden", boxShadow: "0 6px 18px rgba(0,0,0,0.1)" }}>
                  <iframe
                    title="Anchor Foundation Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.012345678!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173e2bde!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1629987654321!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}