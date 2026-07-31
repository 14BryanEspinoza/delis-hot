export function initNavbar() {
  const toggle = document.querySelector(".navbar__toggle");
  const list = document.querySelector(".navbar__list");

  if (!toggle || !list) {
    return () => {};
  }

  const controller = new AbortController();
  const { signal } = controller;

  const isOpen = () => list.classList.contains("is-open");

  const setOpen = (open) => {
    list.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Cerrar menú de navegación" : "Abrir menú de navegación",
    );
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()), { signal });

  list.addEventListener(
    "click",
    (event) => {
      if (event.target.closest(".navbar__link")) {
        setOpen(false);
      }
    },
    { signal },
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
      }
    },
    { signal },
  );

  return () => controller.abort();
}
