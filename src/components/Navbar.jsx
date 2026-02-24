// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    const nav = document.getElementById("nav");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold neon-logo" to="/">
          Anchor Foundation
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  "nav-link nav-animated " + (isActive ? "active-link" : "")
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/programs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  "nav-link nav-animated " + (isActive ? "active-link" : "")
                }
              >
                Programs
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  "nav-link nav-animated " + (isActive ? "active-link" : "")
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Donate Button */}
          <Link
            to="/donate"
            onClick={closeMenu}
            className="btn neon-btn ms-lg-4"
          >
            Donate
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}