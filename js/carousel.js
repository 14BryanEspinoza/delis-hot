export function initCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) {
    return () => {};
  }

  const track = carousel.querySelector(".carousel__track");
  const items = [...carousel.querySelectorAll(".carousel__item")];

  if (!track || items.length === 0) {
    return () => {};
  }

  const autoplay = carousel.hasAttribute("data-autoplay");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const interval = 5000;
  const dragThreshold = 50;

  let index = 0;
  let timer = null;
  let dragState = null;

  const controller = new AbortController();
  const { signal } = controller;

  const dots = document.createElement("div");
  dots.className = "carousel__dots";

  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
    dot.addEventListener(
      "click",
      () => {
        goTo(i);
        restart();
      },
      { signal },
    );
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
    track.style.transform = `translateX(${-index * 100}%)`;
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

  function onPointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    dragState = {
      startX: event.clientX,
      startY: event.clientY,
      offset: 0,
      active: false,
    };
    carousel.classList.add("is-dragging");
    stop();
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", cancelDrag);
  }

  function onPointerMove(event) {
    if (!dragState) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;

    if (!dragState.active) {
      if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) {
        return;
      }
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        cancelDrag();
        return;
      }
      dragState.active = true;
    }

    dragState.offset = deltaX;
    track.style.transform = `translateX(calc(${-index * 100}% + ${deltaX}px))`;
  }

  function cleanupDrag() {
    dragState = null;
    carousel.classList.remove("is-dragging");
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", endDrag);
    window.removeEventListener("pointercancel", cancelDrag);
  }

  function endDrag() {
    if (!dragState) {
      return;
    }

    const { offset } = dragState;
    cleanupDrag();

    if (offset < -dragThreshold) {
      next();
    } else if (offset > dragThreshold) {
      goTo(index - 1);
    } else {
      goTo(index);
    }

    start();
  }

  function cancelDrag() {
    if (!dragState) {
      return;
    }
    cleanupDrag();
    goTo(index);
    start();
  }

  track.addEventListener("pointerdown", onPointerDown, { signal });

  carousel.addEventListener("mouseenter", stop, { signal });
  carousel.addEventListener("mouseleave", start, { signal });
  carousel.addEventListener("focusin", stop, { signal });
  carousel.addEventListener("focusout", start, { signal });

  carousel.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "ArrowLeft") {
        goTo(index - 1);
        restart();
      } else if (event.key === "ArrowRight") {
        next();
        restart();
      }
    },
    { signal },
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        start();
      } else {
        stop();
      }
    });
  });
  observer.observe(carousel);

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    },
    { signal },
  );

  goTo(0);
  start();

  return () => {
    stop();
    cleanupDrag();
    observer.disconnect();
    controller.abort();
  };
}
