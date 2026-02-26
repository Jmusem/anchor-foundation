// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Row, Col, Card, Typography, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function About() {
  const aboutData = [
    {
      title: "Our Mission",
      content:
        "We transform the lives of young people through sports initiatives, sponsorship programs, outreach activities, and mentorship — creating safe spaces where young people can grow with dignity and purpose.",
    },
    {
      title: "Our Impact",
      content:
        "By partnering with communities, volunteers, and supporters, we provide education support, leadership development, talent nurturing, and holistic empowerment for sustainable change.",
    },
  ];

  return (
    <section id="about" style={styles.section}>
      {/* Decorative Background Shapes */}
      <div style={styles.shape1}></div>
      <div style={styles.shape2}></div>

      {/* Section Header */}
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
              Empowering young people through opportunity, mentorship, and
              community-driven impact.
            </Paragraph>
          </motion.div>
        </Col>
      </Row>

      {/* Main Cards */}
      <Row gutter={[32, 32]} justify="center">
        {aboutData.map((item, index) => (
          <Col xs={24} md={12} key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                hoverable
                style={styles.card}
                bodyStyle={{ padding: "24px" }}
              >
                <Title level={4} style={{ color: "#4F9DFF" }}>
                  {item.title}
                </Title>
                <Paragraph style={{ color: "#cbd5e1", fontSize: 16 }}>
                  {item.content}
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Vision Block */}
      <Row justify="center" style={{ marginTop: 60 }}>
        <Col xs={24} md={16}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Card style={styles.visionCard} bodyStyle={{ padding: "24px" }}>
              <Title level={4} style={{ color: "#4F9DFF" }}>
                Our Vision
              </Title>
              <Paragraph style={{ color: "#cbd5e1", fontSize: 16 }}>
                A future where every young person has access to opportunity,
                support, and guidance to unlock their full potential and
                positively influence society.
              </Paragraph>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "100px 24px",
    background: "#0f172a",
    overflow: "hidden",
  },
  tag: {
    display: "inline-block",
    backgroundColor: "#4F9DFF22",
    color: "#4F9DFF",
    padding: "4px 14px",
    borderRadius: 20,
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    marginBottom: 16,
    lineHeight: 1.2,
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    maxWidth: 700,
    margin: "0 auto",
  },
  card: {
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  visionCard: {
    borderRadius: 16,
    background: "rgba(79,157,255,0.05)",
    border: "1px solid rgba(79,157,255,0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  shape1: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "rgba(79,157,255,0.08)",
    top: "-50px",
    left: "-50px",
  },
  shape2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(56,189,248,0.06)",
    bottom: "-100px",
    right: "-80px",
  },
};