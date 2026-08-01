# Deli's Hots

Deli's Hots es un sitio web de comida rápida que muestra el menú,
destaca los productos en un carrusel y permite hacer pedidos en
línea. Construido con tecnologías web estándar, sin frameworks, es
a la vez una vitrina moderna para un restaurante y una base sólida
para aprender HTML, CSS y JavaScript.

## Características

- Navbar responsive con menú desplegable en móvil, accesible
  (`aria-expanded`, cierre con `Escape`).
- Carrusel con autoplay, indicadores, navegación por teclado,
  swipe táctil y pausa automática fuera del viewport. Respeta
  `prefers-reduced-motion`.
- Menú con tarjeta por producto en grid responsive y CTA a pedidos.
- Sección "¿Por qué elegirnos?" con beneficios destacados.
- Formulario de pedidos con validación nativa del navegador y
  confirmación accesible (`aria-live`).
- Diseño minimalista mobile-first con tokens en CSS custom
  properties, modo oscuro automático (`prefers-color-scheme`) y
  contraste WCAG AA.
- Imágenes optimizadas en WebP y AVIF (de ~40 MB a ~2 MB), con
  `<picture>`, `width`/`height` para evitar CLS y carga diferida.
- Iconos SVG inline, sin fuentes externas ni CDNs.
- SEO: metadatos, Open Graph, Twitter Cards, datos estructurados
  Schema.org (`Restaurant` + `Menu`), `sitemap.xml`, `robots.txt` y
  página 404 personalizada.

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

- Node.js 22 o superior
- pnpm 10 o superior

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
├── index.html          # Página principal (nav, carrusel, beneficios, menú, footer)
├── 404.html            # Página de error personalizada
├── robots.txt          # Reglas para buscadores
├── sitemap.xml         # Mapa del sitio
├── html/
│   └── pedidos.html    # Página de pedidos (formulario + validación)
├── css/
│   └── style.css       # Estilos: tokens, @layer, dark mode, responsive
├── js/
│   ├── main.js         # Entry point (inicializa navbar y carrusel)
│   ├── carousel.js     # Lógica del carrusel (página principal)
│   ├── pedidos.js      # Lógica del formulario de pedidos
│   └── nav.js          # Toggle del navbar (compartido)
├── assets/
│   ├── img/            # Imágenes optimizadas en WebP y AVIF
│   └── Icono.png       # Logo del sitio
├── eslint.config.js    # Configuración de ESLint (flat config)
├── .prettierrc         # Configuración de Prettier
└── .github/workflows/
    └── deploy.yml      # Despliegue automático a GitHub Pages
```

## Despliegue

El sitio se despliega automáticamente en GitHub Pages al hacer
`push` a la rama `main`. Antes de publicar, el workflow de CI
(`.github/workflows/deploy.yml`) instala dependencias y ejecuta
`pnpm lint` y `pnpm format:check` como puerta de calidad.

## Demo

- GitHub Pages: disponible tras el primer despliegue de la rama
  `main`.

## Autor

Bryan Espinoza

"Programa no para resolver problemas, sino para crear soluciones."
