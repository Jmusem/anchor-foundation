// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const text = "This is Anchor Foundation";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const words = ["Mindset", "Equipping", "Empower"];
  const [activeWord, setActiveWord] = useState(0);

  // Typing + Deleting Loop
  useEffect(() => {
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  // Rotating Words
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center text-center text-white">
      <div className="container position-relative">

        {/* Typing Title */}
        <h1 className="hero-title">
          <span className="gradient-text">{displayText}</span>
          <span className="cursor">|</span>
        </h1>

        {/* Rotating Words */}
        <motion.h2
          key={activeWord}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-rotating mt-4"
        >
          {words[activeWord]}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hero-subtitle mt-4"
        >
          Empowering communities through football, sponsorship,
          worship events and outreach programs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-5"
        >
          <Link to="/programs" className="btn neon-btn-lg me-3">
            Explore Programs
          </Link>

          <Link to="/donate" className="btn neon-outline-btn">
            Donate
          </Link>
        </motion.div>

        <div className="glow-circle"></div>
      </div>
    </section>
  );
}