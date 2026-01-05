import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const ref = useRef(null);

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const v = query.toLowerCase();

    if (v.includes("project")) navigate("/projects");
    else if (v.includes("skill")) navigate("/skills");
    else if (v.includes("experience")) navigate("/experience");
    else if (v.includes("achievement")) navigate("/achievements");
    else if (v.includes("certificate")) navigate("/certifications");
    else if (v.includes("contact")) navigate("/contact");
    else alert("❌ Wrong input");
  };

  return (
    <form onSubmit={handleSearch} style={{ marginTop: 40 }}>
      <input
        ref={ref}
        onMouseMove={move}
        onMouseLeave={reset}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search: projects, skills, achievements..."
        style={{
          width: 400,
          padding: "15px 20px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid #7c3aed",
          color: "#e5e7eb",
          backdropFilter: "blur(14px)",
          boxShadow: "0 0 30px rgba(124,58,237,0.4)",
          outline: "none",
          fontSize: 15,
        }}
      />
    </form>
  );
};

export default SearchBar;
