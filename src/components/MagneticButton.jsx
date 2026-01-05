import { motion } from "framer-motion";
import { useRef } from "react";

const MagneticButton = ({ children, onClick, href, style }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `
      translate(${x * 0.25}px, ${y * 0.25}px)
      rotateX(${y * -0.04}deg)
      rotateY(${x * 0.04}deg)
    `;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0) rotateX(0) rotateY(0)";
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={{
        position: "relative",
        cursor: "pointer",
        boxShadow: "0 0 25px rgba(124,58,237,0.4)",
        ...style,
      }}
    >
      {children}
      <span className="ripple" />
    </Component>
  );
};

export default MagneticButton;
