import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer",
    company: "Vinayan India Consulting & Services Pvt. Ltd.",
    period: "May 2025 – Nov 2025 | Delhi, India",
    points: [
      "Developed Python automation pipeline for vehicle e-challan processing.",
      "Implemented real-time vehicle detection and license plate recognition.",
      "Integrated OpenCV modules with backend scripts for reporting.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "CRIS",
    period: "Jul 2024 – Sep 2024 | Delhi, India",
    points: [
      "Built ML models for freight demand forecasting.",
      "Performed EDA & feature engineering using Pandas & NumPy.",
      "Improved prediction accuracy using Scikit-learn.",
    ],
  },
];

const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>

      <div style={{ display: "grid", gap: "30px" }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 style={{ color: "#e9d5ff" }}>
              {exp.role} — {exp.company}
            </h3>

            <p style={{ color: "#9ca3af", margin: "8px 0 14px" }}>
              {exp.period}
            </p>

            <ul style={{ paddingLeft: "18px", color: "#cbd5f5" }}>
              {exp.points.map((p, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
