document.addEventListener("DOMContentLoaded", async () => {
  console.log("Script JS rodando");

  try {
    await tsParticles.load("tsparticles", {
      background: { color: "#FFF" },
      particles: {
        number: { value: 60 },
        color: { value: "#000" },
        links: {
          enable: true,
          color: "#9C7B43",
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
        },
        size: { value: 2 },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          }
        }
      },
      detectRetina: true
    });
    console.log("tsParticles carregado com sucesso");
  } catch (err) {
    console.error("Erro ao carregar tsParticles:", err);
  }
}); 