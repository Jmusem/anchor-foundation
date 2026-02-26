// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar-bottom-glass"
    >
      <ul className="nav-glass-items">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#donate">Donate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </motion.nav>
  );
}