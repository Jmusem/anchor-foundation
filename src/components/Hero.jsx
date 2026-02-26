// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typography, Button, Row, Col, Space } from "antd";
import { ArrowRightOutlined, HeartOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Hero() {
  const words = ["Mindset", "Equipping", "Empowerment"];
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={styles.section}>
      {/* Soft Background Gradient */}
      <div style={styles.bgGradient}></div>

      <Row
        align="middle"
        justify="center"
        style={{ minHeight: "100vh", padding: "0 24px" }}
      >
        <Col xs={24} md={20} lg={14}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <Title
              level={1}
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              Empowering Communities Through{" "}
              <span style={styles.highlight}>
                {words[activeWord]}
              </span>
            </Title>

            {/* Description */}
            <Paragraph
              style={{
                fontSize: 18,
                color: "#cbd5e1",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Anchor Foundation is committed to transforming lives through
              sponsorship programs, sports initiatives, mentorship, and
              sustainable community outreach.
            </Paragraph>

            {/* CTA */}
            <Space
              size="middle"
              wrap
              style={{
                marginTop: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                style={styles.primaryBtn}
                href="#programs"
              >
                Discover Our Work
              </Button>

              <Button
                size="large"
                icon={<HeartOutlined />}
                style={styles.secondaryBtn}
                href="#donate"
              >
                Support The Mission
              </Button>
            </Space>
          </motion.div>
        </Col>
      </Row>

      {/* Decorative floating shapes */}
      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    background: "#0f172a",
    overflow: "hidden",
  },
  bgGradient: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 20%, rgba(79,157,255,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.12), transparent 40%)",
  },
  highlight: {
    color: "#4F9DFF",
    borderBottom: "4px solid #4F9DFF",
    paddingBottom: 6,
  },
  primaryBtn: {
    height: 50,
    padding: "0 36px",
    borderRadius: 50,
    fontWeight: 500,
    background: "#4F9DFF",
    border: "none",
  },
  secondaryBtn: {
    height: 50,
    padding: "0 36px",
    borderRadius: 50,
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#ffffff",
  },
  circle1: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(79,157,255,0.08)",
    top: "-100px",
    right: "-100px",
  },
  circle2: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "rgba(56,189,248,0.08)",
    bottom: "-60px",
    left: "-60px",
  },
};