import { useEffect, useState } from "react";
import { Layout, ConfigProvider, theme } from "antd";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Loader from "./components/Preloader";

const { Header, Content, Footer } = Layout;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#C89B3C", // Luxury Gold
          colorBgBase: "#0F172A",  // Deep navy background
          colorTextBase: "#ffffff",
          fontFamily: "'Inter', sans-serif",
          borderRadius: 8,
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", background: "#0F172A" }}>
        
        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>

        {!loading && (
          <>
            <Header
              style={{
                background: "transparent",
                padding: 0,
                position: "fixed",
                width: "100%",
                zIndex: 1000,
              }}
            >
              <Navbar />
            </Header>

            <Content style={{ marginTop: 80 }}>
              <Hero />
              <About />
              <Programs />
              <Donate />
              <Contact />
            </Content>

            <Footer
              style={{
                textAlign: "center",
                background: "#0B1120",
                color: "#999",
                padding: "40px 20px",
              }}
            >
              © {new Date().getFullYear()} Anchor Foundation. All rights reserved.
            </Footer>
          </>
        )}
      </Layout>
    </ConfigProvider>
  );
}

export default App;