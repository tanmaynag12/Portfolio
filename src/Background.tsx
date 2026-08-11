import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

function Background() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 90,

      particles: {
        number: { value: 100 },
        color: { value: "#6366f1" },
        size: { value: 2 },
        move: { enable: true, speed: 0.5 },
        links: {
          enable: true,
          color: "#6366f1",
          opacity: 0.2,
        },
        opacity: { value: 0.5 },
      },
    }),
    [],
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="fixed inset-0 -z-10"
        options={options}
      />
    </ParticlesProvider>
  );
}

export default Background;
