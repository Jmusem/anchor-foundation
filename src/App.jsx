import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Loader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          {/* IMPORTANT: Do NOT wrap components again */}
          <Hero />
          <About />
          <Programs />
          <Donate />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;