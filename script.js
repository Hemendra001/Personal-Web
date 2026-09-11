// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Single orchestrated entrance for the hero title only (per design principle:
// one deliberate moment, not scattered fade-ins on every section)
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-title");
  if (!title || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  title.style.opacity = "0";
  title.style.transform = "translateY(16px)";
  title.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    });
  });
});
