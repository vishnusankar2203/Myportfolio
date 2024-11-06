import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#00ff99", "#0099ff", "#ff6699"], // Color gradient
          },
          shape: {
            type: "circle",
          },
          line_linked: {
            enable: true,
            opacity: 0.05,
            color: "#999999",
          },
          move: {
            direction: "none",
            speed: 0.5,
            out_mode: "bounce", // Bounce particles off edges
          },
          size: {
            value: 3,
            random: true, // Randomize particle size
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "explode", // Creates an explosion effect
            },
            onhover: {
              enable: true,
              mode: "grab",
              parallax: { enable: true, force: 10 }, // Adds a parallax effect on hover
            },
          },
          modes: {
            explode: {
              particles_nb: 5, // Number of particles on explode
            },
            grab: {
              distance: 150,
              line_linked: { opacity: 0.2 },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
