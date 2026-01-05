import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const PageWrapper = ({ title, children }) => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
    >
      {title && (
        <motion.h2 variants={item}>{title}</motion.h2>
      )}
      {children}
    </motion.section>
  );
};

export default PageWrapper;
