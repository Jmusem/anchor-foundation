// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-premium" id="about">

      {/* Animated Background Elements */}
      <div className="about-bg-shape shape-a"></div>
      <div className="about-bg-shape shape-b"></div>

      <div className="container">

        {/* Section Header */}
        <motion.div
          className="about-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">Who We Are</span>
          <h2 className="about-title">
            About Anchor Foundation
          </h2>
          <p className="about-subtitle">
            Empowering young people through opportunity, mentorship and community-driven impact.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-grid">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4>Our Mission</h4>
            <p>
              We transform the lives of young people through sporty  initiatives,
              sponsorship programs, outreach activities, and spiritual mentorship —
              creating safe spaces where young people can grow with dignity and purpose.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4>Our Impact</h4>
            <p>
              By partnering with communities, volunteers, and supporters,
              we provide education support, leadership development,
              talent nurturing, and holistic empowerment for sustainable change.
            </p>
          </motion.div>

        </div>

        {/* Vision Block */}
        <motion.div
          className="about-vision"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4>Our Vision</h4>
          <p>
            A future where every Young Person has access to opportunity, support,
            and guidance to unlock their full potential and positively
            influence society.
          </p>
        </motion.div>

      </div>
    </section>
  );
}