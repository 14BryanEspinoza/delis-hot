export function initNavbar() {
  const toggle = document.querySelector(".navbar__toggle");
  const list = document.querySelector(".navbar__list");

  if (!toggle || !list) {
    return;
  }

  const isOpen = () => list.classList.contains("is-open");

  const setOpen = (open) => {
    list.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Cerrar menú de navegación" : "Abrir menú de navegación",
    );
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  list.addEventListener("click", (event) => {
    if (event.target.closest(".navbar__link")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
    }
  });
}
