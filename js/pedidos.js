import { initNavbar } from "./nav.js";

const PRODUCT_LABELS = {
  "hot-dog": "Hot Dog",
  hamburguesa: "Hamburguesa",
  pizza: "Pizza",
  tacos: "Tacos",
  "pollo-frito": "Pollo Frito",
  shawarma: "Shawarma",
  sandwich: "Sandwich",
  empanadas: "Empanadas",
  noodles: "Noodles",
  "fish-and-chips": "Fish and Chips",
};

function initOrderForm() {
  const form = document.querySelector(".pedido");
  const success = document.querySelector(".pedido__success");

  if (!form || !success) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    success.hidden = true;

    if (!form.reportValidity()) {
      return;
    }

    const name = form.elements.nombre.value.trim();
    const quantity = form.elements.cantidad.value;
    const product = PRODUCT_LABELS[form.elements.producto.value];

    success.textContent =
      `¡Gracias ${name}! Tu pedido de ${quantity} ${product} ha sido recibido. ` +
      "Te contactaremos para confirmar la entrega.";
    success.hidden = false;
    success.focus();
    form.reset();
  });
}

initNavbar();
initOrderForm();
