import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Data Scientist",
    platform: "Ducat IT India",
  },
  {
    title: "Data Analytics",
    platform: "Coursera",
  },
];

const Certifications = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 style={{ marginBottom: "8px", color: "#c4b5fd" }}>
              {cert.title}
            </h3>
            <p style={{ color: "#9ca3af" }}>{cert.platform}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
