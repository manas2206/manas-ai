import React from "react";
import { motion } from "framer-motion";

const achievements = [
  "Top 5% performer at Ducat IT India for Machine Learning projects",
  "Best Visualization Project award for real-time Power BI dashboard",
  "Hackathon Finalist for AI-based Travel Planner solution",
];

const Achievements = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            🏆 {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
