import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import TypingText from "../components/TypingText";
import SearchBar from "../components/SearchBar";
import MagneticButton from "../components/MagneticButton";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={styles.section}
    >
      <ParticleBackground />

      <div style={styles.content}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.avatarWrap}
        >
          <img src="/assets/profile.jpeg" alt="Manas" style={styles.avatar} />
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={styles.heading}
        >
          Hi, I’m <span style={styles.gradient}>Manas Pandey</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={styles.typing}
        >
          <TypingText />
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={styles.desc}
        >
          I build intelligent systems using Machine Learning, Computer Vision,
          and LLM-based architectures.
        </motion.p>

        {/* ✅ SEARCH BAR */}
        <SearchBar />

        <div style={styles.actions}>
          <MagneticButton
            onClick={() => navigate("/projects")}
            style={styles.primary}
          >
            View Projects
          </MagneticButton>

          <MagneticButton
            href="/assets/resume.pdf"
            style={styles.outline}
          >
            Download Resume
          </MagneticButton>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;


/* ================== STYLES ================== */

const styles = {
  section: {
    minHeight: "90vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  content: {
    textAlign: "center",
    zIndex: 2,
    maxWidth: "760px",
  },
  avatarWrap: {
    width: 130,
    height: 130,
    margin: "0 auto 24px",
    borderRadius: "50%",
    padding: 5,
    background: "linear-gradient(135deg,#7c3aed,#9333ea)",
    boxShadow: "0 0 40px #7c3aed",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  heading: {
    fontSize: 46,
    fontWeight: 700,
  },
  gradient: {
    background: "linear-gradient(135deg,#a78bfa,#7c3aed)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  typing: {
    marginTop: 10,
    fontSize: 18,
  },
  desc: {
    marginTop: 18,
    color: "#9ca3af",
  },
  actions: {
    marginTop: 30,
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primary: {
    padding: "12px 28px",
    borderRadius: 12,
    background: "linear-gradient(135deg,#7c3aed,#9333ea)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 25px #7c3aed88",
  },
  outline: {
    padding: "12px 28px",
    borderRadius: 12,
    border: "1px solid #7c3aed",
    color: "#c4b5fd",
    textDecoration: "none",
  },
};
