// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "This is Anchor Foundation";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const words = ["Mindset.", "Equipping.", "Empowerment."];
  const [activeWord, setActiveWord] = useState(0);

  /* Typing + Deleting Loop */
  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(fullText.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  /* Rotating Word */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-premium-landing">

      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-typing">
          {displayText}
          <span className="cursor">|</span>
        </h1>

        <motion.h2
          key={activeWord}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-rotating"
        >
          {words[activeWord]}
        </motion.h2>

        <p className="hero-description">
          Transforming communities through sponsorship, sports programs,
          outreach initiatives and sustainable empowerment.
        </p>

        <div className="hero-buttons">
          <a href="#programs" className="btn-primary">
            Explore Programs
          </a>

          <a href="#donate" className="btn-secondary">
            Become a Partner
          </a>
        </div>

        <div className="scroll-indicator"></div>
      </motion.div>
    </section>
  );
}