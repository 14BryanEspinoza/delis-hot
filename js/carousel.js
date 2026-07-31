export function initCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) {
    return;
  }

  const track = carousel.querySelector(".carousel__track");
  const items = [...carousel.querySelectorAll(".carousel__item")];

  if (!track || items.length === 0) {
    return;
  }

  const autoplay = carousel.hasAttribute("data-autoplay");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const interval = 5000;

  let index = 0;
  let timer = null;

  const dots = document.createElement("div");
  dots.className = "carousel__dots";

  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
    dot.addEventListener("click", () => {
      goTo(i);
      restart();
    });
    dots.appendChild(dot);
  });

  carousel.appendChild(dots);

  carousel.setAttribute("role", "region");
  carousel.setAttribute("aria-roledescription", "carrusel");
  carousel.setAttribute("aria-label", "Imágenes destacadas");
  carousel.setAttribute("tabindex", "0");

  function updateDots() {
    [...dots.children].forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
  }

  function goTo(i) {
    index = (i + items.length) % items.length;
    const offset = -index * 100 || 0;
    track.style.transform = `translateX(${offset}%)`;
    updateDots();
  }

  function next() {
    goTo(index + 1);
  }

  function stop() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    if (!autoplay || prefersReducedMotion) {
      return;
    }
    stop();
    timer = window.setInterval(next, interval);
  }

  function restart() {
    stop();
    start();
  }

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", start);

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      goTo(index - 1);
      restart();
    } else if (event.key === "ArrowRight") {
      next();
      restart();
    }
  });

  goTo(0);
  start();
}
