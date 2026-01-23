import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Programming", items: "Python, C++, SQL" },
  { title: "Data & ML", items: "Pandas, NumPy, Microsoft Excel, Power BI, Scikit-learn, TensorFlow" },
  { title: "Computer Vision", items: "OpenCV" },
  { title: "NLP & LLMs", items: "RAG, Embeddings" },
  { title: "Databases", items: "MySQL, MongoDB" },
  { title: "Web & Deployment", items: "HTML, CSS, React, Flask, Streamlit" },
  {title: "Soft Skills", items: "Communication, Interpersonal Skills, Analytical Thinking, Attention to Detail, Team Collaboration"},
];

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <h3 style={{ marginBottom: "10px", color: "#e9d5ff" }}>
              {skill.title}
            </h3>
            <p style={{ color: "#cbd5f5" }}>{skill.items}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
