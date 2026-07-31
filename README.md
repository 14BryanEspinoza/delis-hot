# Deli's Hots

Deli's Hots es un sitio web de comida rápida que muestra el menú,
destaca los productos en un carrusel y permite hacer pedidos en
línea. Construido con tecnologías web estándar, sin frameworks, es
a la vez una vitrina moderna para un restaurante y una base sólida
para aprender HTML, CSS y JavaScript.

## Características

- Navbar responsive con menú desplegable en móvil, accesible
  (`aria-expanded`, cierre con `Escape`).
- Carrusel con autoplay, indicadores y respeto por
  `prefers-reduced-motion`.
- Menú con tarjeta por producto en grid responsive, imágenes
  optimizadas y CTA a pedidos.
- Formulario de pedidos con validación nativa del navegador y
  confirmación accesible (`aria-live`).
- Iconos SVG inline, sin fuentes externas ni CDNs.
- Diseño responsive mobile-first con tokens en CSS custom
  properties.
- SEO básico: metadatos, Open Graph y Twitter Cards.

## Stack

| Capa            | Tecnología                         |
| --------------- | ---------------------------------- |
| HTML            | HTML5 semántico                    |
| CSS             | CSS3 vanilla con custom properties |
| JavaScript      | ES6+ módulos nativos (sin bundler) |
| Package manager | pnpm                               |
| Linting         | ESLint + Prettier                  |
| Deploy          | GitHub Pages                       |

## Empezar

### Requisitos

- Node.js 18 o superior
- pnpm 8 o superior

### Instalación

```bash
git clone git@github.com:14BryanEspinoza/delis-hot.git
cd delis-hot
pnpm install
```

### Desarrollo

Sirve el sitio en <http://localhost:3000>:

```bash
pnpm dev
```

No hay paso de build: los módulos ES se ejecutan directamente en
el navegador, igual que en producción.

### Scripts

| Script              | Descripción                             |
| ------------------- | --------------------------------------- |
| `pnpm dev`          | Sirve el sitio localmente (puerto 3000) |
| `pnpm lint`         | Ejecuta ESLint sobre el código          |
| `pnpm lint:fix`     | Corrige automáticamente los errores     |
| `pnpm format`       | Formatea el código con Prettier         |
| `pnpm format:check` | Verifica el formato sin modificar       |

## Estructura del proyecto

```text
.
├── index.html          # Página principal (nav, carrusel, menú, footer)
├── html/
│   └── pedidos.html    # Página de pedidos (formulario + validación)
├── css/
│   └── style.css       # Estilos: tokens, @layer, responsive
├── js/
│   ├── main.js         # Entry point (navbar + carrusel)
│   ├── carousel.js     # Lógica del carrusel (página principal)
│   ├── pedidos.js      # Lógica del formulario de pedidos
│   └── nav.js          # Toggle del navbar (compartido)
├── assets/             # Imágenes optimizadas (WebP/AVIF), logo y favicon
├── eslint.config.js    # Configuración de ESLint (flat config)
├── .prettierrc         # Configuración de Prettier
└── .github/workflows/
    └── deploy.yml      # Despliegue automático a GitHub Pages
```

## Demo

- GitHub Pages: disponible tras el primer despliegue de la rama
  `main`.

## Autor

Bryan Espinoza

"Programo no para resolver problemas, sino para crear soluciones."
