// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section-padding about-section" id="about">
      <div className="about-overlay"></div> {/* optional subtle overlay */}
      <div className="container text-center">

        {/* Section Heading */}
        <motion.h2
          className="neon-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Anchor Foundation
        </motion.h2>

        {/* Glass Card Text */}
        <motion.div
          className="glass-card mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-4">
            Anchor Foundation is a non-profit organization dedicated to transforming the lives of children through football events, home visits, child sponsorship, and worship activities. We provide opportunities for education, personal development, and holistic growth while fostering a strong sense of community and belonging.
          </p>

          <p className="mb-4">
            Our programs focus on nurturing talents, building leadership skills, and encouraging faith and moral values in young children. We partner with local communities, volunteers, and supporters to ensure that every child has the opportunity to thrive in a safe and inspiring environment.
          </p>

          <p>
            With transparency, integrity, and compassion at the core of our operations, Anchor Foundation envisions a future where every child can reach their full potential and contribute positively to society. Our commitment to empowerment and care drives every initiative, ensuring meaningful impact and lasting change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
