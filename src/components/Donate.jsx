import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";

export default function Donate() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialProgram = query.get("program") || "";

  const [selectedProgram, setSelectedProgram] = useState(initialProgram);
  const [formData, setFormData] = useState({ name: "", email: "", amount: "", message: "" });
  const [success, setSuccess] = useState(false);

  const programs = [
    { name: "Child Sponsorship", image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d", description: "Support a child’s education, healthcare, and daily needs." },
    { name: "Sports & Youth Empowerment", image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf", description: "Empower youth through sports, leadership & mentorship." },
    { name: "Street Kids Initiative", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c", description: "Rehabilitate and reintegrate vulnerable street children." },
    { name: "Children Home Visits", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300", description: "Provide emotional and material support to children homes." },
    { name: "Medical Care Consultancy", image: "https://images.unsplash.com/photo-1584515933487-779824d29309", description: "Offer medical guidance and care support to families." },
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

  // Scroll to preview if program preselected
  useEffect(() => {
    if (selectedProgramData) {
      const preview = document.querySelector(".program-preview_donate");
      if (preview) preview.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProgramData]);

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        px: 3,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#0f172a",
      }}
      id="donate"
    >
      {/* Background soft radial gradients */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 20%, rgba(79,157,255,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.12), transparent 40%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 6,
              background: "linear-gradient(90deg,#1a416a,#207283)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Support a Cause. Change a Life.
          </Typography>
        </motion.div>

        {/* Program Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {programs.map((program, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0,123,255,0.25)" }}>
                <Card
                  sx={{
                    cursor: "pointer",
                    borderRadius: 3,
                    overflow: "hidden",
                    border: selectedProgram === program.name ? "2px solid #4F9DFF" : "2px solid transparent",
                  }}
                  onClick={() => setSelectedProgram(program.name)}
                >
                  <CardMedia component="img" height="180" image={program.image} alt={program.name} />
                  <CardContent sx={{ bgcolor: "#1f2f5a" }}>
                    <Typography variant="h6" sx={{ color: "#e0e7ff", fontWeight: 600 }}>
                      {program.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Program Preview */}
        <AnimatePresence>
          {selectedProgramData && (
            <motion.div
              className="program-preview_donate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  overflow: "hidden",
                  borderRadius: 3,
                  mb: 6,
                  bgcolor: "#1f2f5a",
                }}
              >
                <CardMedia
                  component="img"
                  image={selectedProgramData.image}
                  alt={selectedProgramData.name}
                  sx={{ width: { md: "40%" }, height: 200, objectFit: "cover" }}
                />
                <Box sx={{ p: 4, flex: 1 }}>
                  <Typography variant="h5" sx={{ color: "#4F9DFF", fontWeight: 700, mb: 2 }}>
                    {selectedProgramData.name}
                  </Typography>
                  <Typography sx={{ color: "#cfd8ff" }}>{selectedProgramData.description}</Typography>
                </Box>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Donation Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              variant="filled"
              onChange={handleChange}
              InputProps={{ sx: { bgcolor: "#1f2f5a", color: "#e0e7ff" } }}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              name="email"
              variant="filled"
              onChange={handleChange}
              InputProps={{ sx: { bgcolor: "#1f2f5a", color: "#e0e7ff" } }}
            />
            <TextField
              fullWidth
              label="Donation Amount (USD)"
              type="number"
              name="amount"
              variant="filled"
              onChange={handleChange}
              InputProps={{ sx: { bgcolor: "#1f2f5a", color: "#e0e7ff" } }}
            />
            <TextField
              fullWidth
              label="Optional Message"
              name="message"
              variant="filled"
              multiline
              rows={4}
              onChange={handleChange}
              InputProps={{ sx: { bgcolor: "#1f2f5a", color: "#e0e7ff" } }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "#4F9DFF", "&:hover": { bgcolor: "#2a76d2" }, borderRadius: 5, py: 1.5 }}
            >
              Confirm Donation
            </Button>
          </Stack>
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
                bottom: 40,
                right: 40,
                background: "#4F9DFF",
                color: "#fff",
                padding: "16px 24px",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                zIndex: 9999,
              }}
            >
              🎉 Thank you! Your donation request has been sent.
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}