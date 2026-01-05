import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "RAG-based AI Chatbot",
    description:
      "LLM-powered chatbot using Retrieval-Augmented Generation with embeddings and vector databases.",
    tech: "Python, LangChain, FAISS, LLMs",
  },
  {
    title: "AI Resume Shortlisting System",
    description:
      "Resume ranking system using BERT embeddings and Flask backend.",
    tech: "Python, BERT, Flask",
  },
  {
    title: "Waste Classification System",
    description:
      "CNN-based waste classification model with 93% accuracy.",
    tech: "TensorFlow, OpenCV, CNN",
  },
  {
    title: "LLM Text Summarizer",
    description:
      "Abstractive text summarizer using Transformer models.",
    tech: "Transformers, Streamlit",
  },
];

const Projects = () => {
  return (
    <section style={styles.section}>
      <motion.h1
        style={styles.heading}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <motion.h3
              style={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {p.title}
            </motion.h3>

            <motion.p
              style={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 + 0.2 }}
            >
              {p.description}
            </motion.p>

            <motion.span
              style={styles.tech}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 + 0.4 }}
            >
              {p.tech}
            </motion.span>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 10%",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  },
  tech: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#7c3aed",
  },
};

export default Projects;
