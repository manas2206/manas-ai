import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= NAV ITEMS ================= */
const NAV_ITEMS = [
  "projects",
  "skills",
  "experience",
  "achievements",
  "certifications",
  "contact",
];

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setDark((prev) => !prev);
    document.body.style.background = !dark
      ? "#020617"
      : "radial-gradient(circle at top, #0f172a, #020617)";
    document.body.style.color = !dark ? "#e5e7eb" : "#e5e7eb";
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        ...styles.nav,
        background: dark ? "#020617" : "rgba(2,6,23,0.9)",
      }}
    >
      {/* ================= LOGO ================= */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        style={styles.logo}
      >
        Manas
      </motion.div>

      {/* ================= DESKTOP MENU ================= */}
      <div style={styles.menu}>
        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            <NavLink
              to={`/${item}`}
              className="nav-link"
              style={linkStyle}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* ================= RIGHT ICONS ================= */}
      <div style={styles.right}>
        <Icon href="https://github.com/manas2206" icon={<Github />} />
        <Icon
          href="https://www.linkedin.com/in/pandeymanas01/"
          icon={<Linkedin />}
        />
        <Icon href="mailto:immanaspandey@gmail.com" icon={<Mail />} />

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ rotate: 20 }}
          onClick={toggleTheme}
          style={styles.iconBtn}
        >
          {dark ? <Sun /> : <Moon />}
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          style={{ ...styles.iconBtn, display: "none" }}
          className="mobile-btn"
        >
          {open ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={styles.mobileMenu}
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className="nav-link"
                style={linkStyle}
                onClick={() => setOpen(false)}
              >
                {item.toUpperCase()}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

/* ================= ICON COMPONENT ================= */
const Icon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.2 }}
    style={styles.icon}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = "#a855f7";
      e.currentTarget.style.boxShadow = "0 0 12px #a855f7";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "#e5e7eb";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {icon}
  </motion.a>
);

/* ================= LINK STYLE ================= */
const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#a855f7" : "#e5e7eb",
  fontWeight: "500",
  position: "relative",
  zIndex: 20, // 🔑 VERY IMPORTANT (fixes click bug)
});

/* ================= STYLES ================= */
const styles = {
  nav: {
    height: "64px",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(12px)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
    cursor: "pointer",
    color: "#e5e7eb",
  },
  menu: {
    display: "flex",
    gap: "26px",
  },
  right: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },
  icon: {
    transition: "all 0.3s ease",
    borderRadius: "50%",
    padding: "4px",
    color: "#e5e7eb",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#e5e7eb",
  },
  mobileMenu: {
    position: "absolute",
    top: "64px",
    right: "20px",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    background: "#020617",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    zIndex: 999,
  },
};

export default Navbar;
