import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { ArrowForward, ChevronLeft, ChevronRight, Close } from "@mui/icons-material";
import sportsEventImg from "../assets/programs/events/sports.jpg";

// Import images
const footballImages = import.meta.glob("../assets/programs/sports/*.{jpg,jpeg,png}", { eager: true });
const worshipImages = import.meta.glob("../assets/programs/worship/*.{jpg,jpeg,png}", { eager: true });
const homeVisitImages = import.meta.glob("../assets/programs/homevisit/*.{jpg,jpeg,png}", { eager: true });
const treePlantingImages = import.meta.glob("../assets/programs/treeplanting/*.{jpg,jpeg,png}", { eager: true });
const getImages = (imagesObject) => Object.values(imagesObject).map((img) => img.default);

export default function Programs() {
  const [lightbox, setLightbox] = useState({ open: false, images: [], current: 0 });
  const [carouselIndex, setCarouselIndex] = useState({}); // Track per-card carousel index

  const keyActivities = [
    "Gathering of Anchors every Thursday from 9:00 - 10:00pm",
    "Anchor FC league games. Follow our pages FB, IG, TikTok (Anchor Foundation) to be notified of their fixtures.",
    "Health camps – We offer free diagnosis.",
    "Cycling event every 10th October",
    "Mentorship programs in primary schools, Highschool, Campuses",
    "Thanksgiving every second Sunday in the month of December ",
    "Planting and donations of trees to schools, churches, etc.",
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
      image: sportsEventImg,
    },
  ];

  // Lightbox functions
  const openLightbox = (images, index) => setLightbox({ open: true, images, current: index });
  const closeLightbox = () => setLightbox({ open: false, images: [], current: 0 });
  const nextImage = () => setLightbox((prev) => ({ ...prev, current: (prev.current + 1) % prev.images.length }));
  const prevImage = () => setLightbox((prev) => ({ ...prev, current: (prev.current - 1 + prev.images.length) % prev.images.length }));

  // Carousel functions per card
  const handleNext = (idx, length) =>
  setCarouselIndex((prev) => ({
    ...prev,
    [idx]: ((prev[idx] ?? 0) + 1) % length, // initialize to 0 if undefined
  }));
  const handlePrev = (idx, length) =>
  setCarouselIndex((prev) => ({
    ...prev,
    [idx]: ((prev[idx] ?? 0) - 1 + length) % length, // initialize to 0 if undefined
  }));
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 12,
        px: 3,
        background: "#0f172a",
      }}
      id="programs"
    >
      {/* Soft radial gradients like Hero */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(79,157,255,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.12), transparent 40%)",
          zIndex: 0,
        }}
      />

      {/* Floating circles */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(79,157,255,0.08)",
          top: "-100px",
          right: "-100px",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(56,189,248,0.08)",
          bottom: "-60px",
          left: "-60px",
          zIndex: 0,
        }}
      />

      <Box sx={{ maxWidth: 1200, mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
            Our Programs
          </Typography>
        </motion.div>

        {/* Key Activities */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ bgcolor: "rgba(255,255,255,0.05)", p: 4, borderRadius: 3, mb: 8, backdropFilter: "blur(15px)", boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#e0e7ff" }}>
              Key Activities
            </Typography>
            <Stack spacing={1.5}>
              {keyActivities.map((activity, idx) => (
                <Typography key={idx} sx={{ display: "flex", alignItems: "center", fontSize: 16, color: "#e0e7ff" }}>
                  <Box component="span" sx={{ color: "#4f9dff", mr: 1, fontWeight: 600 }}>
                    •
                  </Box>
                  {activity}
                </Typography>
              ))}
            </Stack>
          </Box>
        </motion.div>

        {/* Programs Grid with Carousel */}
        <Grid container spacing={4}>
          {programs.map((p, idx) => {
            const currentIndex = carouselIndex[idx] || 0;

            return (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(0,0,0,0.3)" }} transition={{ duration: 0.4 }}>
                  <Card sx={{ borderRadius: 3, overflow: "hidden", cursor: "pointer", bgcolor: "#1f2f5a" }}>
                    {/* Carousel */}
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={p.images[currentIndex]}
                        alt={p.title}
                        sx={{ transition: "transform 0.4s", "&:hover": { transform: "scale(1.05)" } }}
                        onClick={() => openLightbox(p.images, currentIndex)}
                      />
                      {p.images.length > 1 && (
                        <>
                          <IconButton sx={{ position: "absolute", top: "50%", left: 8, bgcolor: "rgba(0,0,0,0.3)", color: "#fff" }} onClick={() => handlePrev(idx, p.images.length)}>
                            <ChevronLeft />
                          </IconButton>
                          <IconButton sx={{ position: "absolute", top: "50%", right: 8, bgcolor: "rgba(0,0,0,0.3)", color: "#fff" }} onClick={() => handleNext(idx, p.images.length)}>
                            <ChevronRight />
                          </IconButton>
                        </>
                      )}
                    </Box>

                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#e0e7ff" }}>
                        {p.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#cfd8ff", mb: 2 }}>
                        {p.description}
                      </Typography>
                      <Button variant="contained" endIcon={<ArrowForward />} sx={{ borderRadius: 5, bgcolor: "#4f9dff", "&:hover": { bgcolor: "#2a76d2" } }} onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}>
                        Donate
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>


        {/* Lightbox */}
        <AnimatePresence>
          {lightbox.open && (
            <motion.div
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
                flexDirection: "column",
              }}
            >
              <motion.img
                key={lightbox.current}
                src={lightbox.images[lightbox.current]}
                alt="Program"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{ maxHeight: "80%", maxWidth: "90%", borderRadius: "12px", marginBottom: "20px" }}
              />
              <Stack direction="row" spacing={2}>
                <IconButton onClick={(e) => { e.stopPropagation(); prevImage(); }} sx={{ bgcolor: "primary.main", color: "#fff", "&:hover": { bgcolor: "primary.dark" } }}>
                  <ChevronLeft />
                </IconButton>
                <IconButton onClick={(e) => { e.stopPropagation(); nextImage(); }} sx={{ bgcolor: "primary.main", color: "#fff", "&:hover": { bgcolor: "primary.dark" } }}>
                  <ChevronRight />
                </IconButton>
                <IconButton onClick={(e) => { e.stopPropagation(); closeLightbox(); }} sx={{ bgcolor: "error.main", color: "#fff", "&:hover": { bgcolor: "error.dark" } }}>
                  <Close />
                </IconButton>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}