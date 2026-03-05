import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function Donate() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:info@anchorfoundation.org?subject=Donation Confirmation&body=Hello Anchor Foundation,%0D%0A%0D%AII have made a donation via M-Pesa Till Number 4455474.%0D%0APlease confirm receipt.%0D%0A%0D%AThank you.";
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        py: 12,
        px: 3,
        bgcolor: "#0f172a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft Premium Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(0,184,88,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,150,136,0.12), transparent 40%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: "linear-gradient(90deg,#00B058,#00C853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Support Anchor Foundation
          </Typography>

          <Typography
            align="center"
            sx={{ color: "#cbd5e1", mb: 8, fontSize: "1.1rem" }}
          >
            Make a donation through M-Pesa to support our programs and
            community outreach initiatives.
          </Typography>
        </motion.div>

        {/* M-Pesa Styled Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 6,
              borderRadius: 4,
              textAlign: "center",
              background:
                "linear-gradient(135deg, #00B058 0%, #00C853 100%)",
              color: "#fff",
              boxShadow: "0 20px 50px rgba(0,184,88,0.35)",
            }}
          >
            <Stack spacing={3} alignItems="center">
              <PhoneAndroidIcon sx={{ fontSize: 60 }} />

              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                M-Pesa Till Number
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 3,
                }}
              >
                4455474
              </Typography>

              <Typography sx={{ maxWidth: 500, opacity: 0.95 }}>
                Go to M-Pesa → Lipa na M-Pesa → Buy Goods & Services → 
                Enter Till Number above → Confirm Payment.
              </Typography>
            </Stack>
          </Paper>
        </motion.div>

        {/* Email Confirmation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Paper
            sx={{
              mt: 8,
              p: 5,
              borderRadius: 4,
              textAlign: "center",
              bgcolor: "#1e293b",
              color: "#e2e8f0",
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Already Made a Donation?
            </Typography>

            <Typography sx={{ mb: 4, color: "#94a3b8" }}>
              Click the button below to notify us so we can acknowledge
              and confirm your support.
            </Typography>

            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              onClick={handleEmailClick}
              sx={{
                bgcolor: "#00B058",
                "&:hover": { bgcolor: "#009944" },
                borderRadius: 8,
                px: 4,
                py: 1.5,
                fontWeight: 700,
              }}
            >
              I Have Made a Donation
            </Button>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
}