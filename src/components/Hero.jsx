// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center text-center text-white">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="display-4 fw-bold"
        >
          Empowering Children. Transforming Communities.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="lead mt-3"
        >
          Through football, sponsorship, worship events and outreach programs.
        </motion.p>

        <motion.a
          href="#programs"
          whileHover={{ scale: 1.05 }}
          className="btn btn-warning btn-lg mt-4"
        >
          Get Involved
        </motion.a>
      </div>
    </section>
  );
}
