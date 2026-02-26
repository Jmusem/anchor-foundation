// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Layout, Menu, Button, Drawer, Grid } from "antd";
import {
  MenuOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { useBreakpoint } = Grid;

export default function Navbar() {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { key: "home", label: <a href="#hero">Home</a> },
    { key: "about", label: <a href="#about">About</a> },
    { key: "programs", label: <a href="#programs">Programs</a> },
    { key: "contact", label: <a href="#contact">Contact</a> },
  ];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={styles.navWrapper}
    >
      <div style={styles.container}>
        
        {/* Logo */}
        <div style={styles.logo}>
          Anchor<span style={{ color: "#4F9DFF" }}>Foundation</span>
        </div>

        {/* Desktop Menu */}
        {screens.md && (
          <div style={styles.menuContainer}>
            <Menu
              mode="horizontal"
              items={menuItems}
              style={styles.menu}
            />

            <Button
              type="primary"
              icon={<HeartOutlined />}
              size="large"
              style={styles.donateBtn}
              href="#donate"
            >
              Donate
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {!screens.md && (
          <>
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: "#fff", fontSize: 22 }} />}
              onClick={() => setOpen(true)}
            />

            <Drawer
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
              style={{ background: "#0f172a" }}
            >
              <Menu
                mode="vertical"
                items={[
                  ...menuItems,
                  {
                    key: "donate",
                    label: <a href="#donate">Donate</a>,
                  },
                ]}
                style={{ background: "transparent", color: "#fff" }}
              />
            </Drawer>
          </>
        )}
      </div>
    </motion.div>
  );
}

const styles = {
  navWrapper: {
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(14px)",
    background:
      "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,41,59,0.65))",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
    letterSpacing: 0.5,
  },
  menuContainer: {
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
  menu: {
    background: "transparent",
    borderBottom: "none",
    color: "#fff",
  },
  donateBtn: {
    borderRadius: 50,
    padding: "0 28px",
    height: 42,
    background: "linear-gradient(90deg, #4F9DFF, #2563EB)",
    border: "none",
    fontWeight: 500,
  },
};