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
  IconButton,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // TikTok substitute

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
    setTimeout(() => setSubmitted(false), 4000);
  };
const socialLinks = [
 {
    name: "Facebook",
    displayName: "Anchor Foundation",
    url: "https://www.facebook.com/share/1AvmGt3rw9/",
    icon: <FacebookIcon />,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    displayName: "Anchor Foundation",
    url: "https://www.instagram.com/_anchorfoundation?igsh=MTI1YXJ0amp5OXJjZQ==",
    icon: <InstagramIcon />,
    color: "#E4405F",
  },
  {
    name: "TikTok",
    displayName: "Anchor Foundation",
    url: "https://vm.tiktok.com/ZS9ew3DeFtEEh-fKOs4/",
    icon: <MusicNoteIcon />,
    color: "#000000",
  },
    {
      name: "YouTube",
      url: "https://youtube.com/@AnchorTv254",
      icon: <YouTubeIcon />,
      color: "#FF0000",
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: "#0f172a",
        py: 12,
        px: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 10,
              background: "linear-gradient(90deg,#4F9DFF,#2563EB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Anchor Foundation
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* FORM */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  bgcolor: "rgba(31,47,90,0.7)",
                  backdropFilter: "blur(15px)",
                  color: "#e0e7ff",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
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
                      InputProps={{ sx: { bgcolor: "#15223f", color: "#fff" } }}
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
                      InputProps={{ sx: { bgcolor: "#15223f", color: "#fff" } }}
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
                      InputProps={{ sx: { bgcolor: "#15223f", color: "#fff" } }}
                      required
                    />

                    <motion.div whileHover={{ scale: 1.03 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "#4F9DFF",
                          "&:hover": { bgcolor: "#2563EB" },
                          borderRadius: 3,
                          py: 1.5,
                          fontWeight: 600,
                        }}
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Stack>
                </form>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      style={{
                        marginTop: 16,
                        color: "#4F9DFF",
                        fontWeight: 600,
                      }}
                    >
                      🎉 Thank you! Your message has been sent.
                    </motion.div>
                  )}
                </AnimatePresence>
              </Paper>
            </motion.div>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  bgcolor: "rgba(31,47,90,0.7)",
                  backdropFilter: "blur(15px)",
                  color: "#e0e7ff",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 3, color: "#4F9DFF" }}
                >
                  Get in Touch
                </Typography>

                <Typography sx={{ mb: 3, color: "#cfd8ff" }}>
                  We’d love to hear from you! Connect with us through our
                  official platforms.
                </Typography>

                <Stack spacing={1.5}>
                  <Typography>
                    <strong>Email:</strong>{" "}
                    <Link
                      href="mailto:info@anchorfoundation.org"
                      sx={{ color: "#4F9DFF" }}
                    >
                      info@anchorfoundation.org
                    </Link>
                  </Typography>

                  <Typography>
                    <strong>Phone:</strong>{" "}
                    <Link
                      href="tel:+254741973192"
                      sx={{ color: "#4F9DFF" }}
                    >
                      +254 741 973 192
                    </Link>
                  </Typography>

                  <Typography>
                    <strong>Address:</strong> Nairobi, Kenya
                  </Typography>
                </Stack>

                <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

                {/* SOCIAL MEDIA */}
                <Typography
                  variant="h6"
                  sx={{ mb: 3, color: "#4F9DFF", fontWeight: 600 }}
                >
                  Follow Us
                </Typography>

                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.08)",
                          color: social.color,
                          "&:hover": {
                            bgcolor: social.color,
                            color: "#fff",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}