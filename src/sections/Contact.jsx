import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section style={styles.section}>
      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h1>

      <div style={styles.card}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <strong>Email:</strong> immanaspandey@gmail.com
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <strong>Phone:</strong> +91 93693 28122
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <strong>Location:</strong> Sohna, Haryana, India
        </motion.p>

        <motion.div
          style={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="/assets/resume.pdf"
            download
            style={styles.button}
          >
            Download Resume
          </a>

          <a
            href="mailto:immanaspandey@gmail.com"
            style={styles.buttonOutline}
          >
            Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "40px",
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "32px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "30px",
  },
  button: {
    padding: "10px 20px",
    background: "#7c3aed",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
  },
  buttonOutline: {
    padding: "10px 20px",
    border: "1px solid #7c3aed",
    color: "#7c3aed",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Contact;
