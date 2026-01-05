import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#7c3aed" },
          links: {
            enable: true,
            color: "#7c3aed",
            opacity: 0.25,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;
