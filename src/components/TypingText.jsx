import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Python Developer",
  "Data Scientist",
  "AI Engineer",
];

const TypingText = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <span style={{ color: "#a78bfa", fontWeight: 500 }}>
      {text}
      <span style={{ opacity: 0.6 }}>|</span>
    </span>
  );
};

export default TypingText;
