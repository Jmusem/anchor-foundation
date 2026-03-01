// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Row, Col, Card, Typography, Button } from "antd";
import { CloseOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";

const { Title, Paragraph, Text } = Typography;

export default function About() {
  const [showPopup, setShowPopup] = useState(false);
  const valuesRef = useRef(null);
  const isInView = useInView(valuesRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setShowPopup(true);
    }
  }, [isInView]);

  const aboutData = [
    {
      title: "Mission",
      content:
        "To empower and uplift our community through collaborative efforts, equitable opportunities, sustainable initiatives, fostering a culture of education, inclusion, and social justice.",
    },
    {
      title: "Vision",
      content:
        "To create a thriving and inclusive community where every individual has the opportunity to reach their full potential and contribute positively to the society.",
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.shape1}></div>
      <div style={styles.shape2}></div>

      {/* Header */}
      <Row justify="center" style={{ marginBottom: 60 }}>
        <Col xs={22} md={18} lg={14}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center" }}
          >
            <Text style={styles.tag}>Who We Are</Text>
            <Title level={2} style={styles.title}>
              About Anchor Foundation
            </Title>
            <Paragraph style={styles.subtitle}>
              Empowering and uplifting our community through meaningful initiatives.
            </Paragraph>
          </motion.div>
        </Col>
      </Row>

      {/* Mission & Vision */}
      <Row gutter={[32, 32]} justify="center">
        {aboutData.map((item, index) => (
          <Col xs={24} md={12} key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card style={styles.card}>
                <Title level={4} style={{ color: "#4F9DFF" }}>
                  {item.title}
                </Title>
                <Paragraph style={{ color: "#cbd5e1" }}>
                  {item.content}
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* VALUES SECTION */}
      <Row justify="center" style={{ marginTop: 80 }}>
        <Col xs={24} md={16}>
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Card style={styles.card}>
              <Title level={4} style={{ color: "#4F9DFF" }}>
                Our Values
              </Title>
              <Paragraph style={{ color: "#cbd5e1" }}>
                1. Community centered<br/>
                2. Equity and Justice<br/>
                3. Integrity and transparency<br/>
                4. Empowerment through Education
              </Paragraph>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* ===================== */}
      {/* ANCHOR DAILY POP CARD */}
      {/* ===================== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={styles.popupWrapper}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={styles.popupCard}
            >
              <CloseOutlined
                onClick={() => setShowPopup(false)}
                style={styles.closeBtn}
              />

              <Text style={styles.popupTag}>Anchor Daily</Text>

              <Title level={4} style={styles.popupTitle}>
                You are known by what you say and your actions
              </Title>

              <Paragraph style={styles.popupWords}>
                Mindset — Equipping — Empower
              </Paragraph>

              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                style={styles.popupBtn}
                href="#programs"
              >
                Explore Programs
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "120px 24px",
    background: "#0f172a",
  },
  tag: {
    backgroundColor: "#4F9DFF22",
    color: "#4F9DFF",
    padding: "4px 14px",
    borderRadius: 20,
  },
  title: { color: "#fff" },
  subtitle: { color: "#94a3b8" },
  card: {
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  popupWrapper: {
    position: "absolute",
    right: "8%",
    bottom: "5%",
    zIndex: 100,
  },
  popupCard: {
    width: 320,
    padding: 24,
    borderRadius: 20,
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
    border: "1px solid rgba(79,157,255,0.4)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    cursor: "pointer",
    color: "#94a3b8",
  },
  popupTag: {
    color: "#4F9DFF",
    fontWeight: 600,
  },
  popupTitle: {
    color: "#fff",
    marginTop: 12,
  },
  popupWords: {
    color: "#cbd5e1",
    marginBottom: 20,
  },
  popupBtn: {
    borderRadius: 50,
    width: "100%",
    background: "linear-gradient(90deg, #4F9DFF, #2563EB)",
    border: "none",
  },
};