// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/logo_anchor.jpg";

export default function Loader() {
  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loader-content text-center">

        {/* Logo Background Circle */}
        <motion.div
          className="logo-background mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={logo}
            alt="Anchor Foundation Logo"
            className="loader-logo"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Foundation Name */}
        <motion.h2
          className="loader-name"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Anchor Foundation
        </motion.h2>

        {/* Progress Line */}
        <div className="progress-line mt-4">
          <motion.div
            className="progress-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>

      </div>
    </motion.div>
  );
}
