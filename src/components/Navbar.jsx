// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg"
      style={{ background: "#0A1931" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Anchor Foundation
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#programs">Programs</a></li>
            <li className="nav-item"><a className="nav-link" href="#impact">Impact</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a href="#donate" className="btn btn-warning ms-3 fw-bold">Donate</a>
        </div>
      </div>
    </motion.nav>
  );
}
