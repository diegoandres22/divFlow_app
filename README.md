# DivFlow

Sitio web de marca de **DivFlow** — desarrollo de software a medida, plataformas e-commerce y automatizaciones con [n8n](https://n8n.io/).

Landing page de una sola página (SPA), con animaciones de scroll construidas en GSAP y un formulario de contacto funcional conectado a Formspree.

## Stack

- **React 19** + **Vite 6**
- **React Router DOM 7** (una sola ruta, `/`)
- **Tailwind CSS 4**
- **GSAP 3** (`ScrollTrigger`, `ScrollSmoother`, `SplitText`) vía `@gsap/react`
- **Formspree** para el envío del formulario de contacto (sin backend propio)

## Estructura del repo

```
capsule/
├── .github/workflows/   # CI (actualmente desactivado, ver nota abajo)
├── frontend/            # Proyecto Vite real — todo el código vive acá
│   ├── src/
│   │   ├── components/  # Un componente por sección de la landing
│   │   ├── pages/Home/  # Composición de las secciones
│   │   ├── layouts/     # Layout con Navbar, Preloader y ScrollSmoother
│   │   └── lib/         # Utilidades (scroll suave compatible con ScrollSmoother)
│   └── public/          # robots.txt, sitemap.xml, og-image.jpg
└── README.md
```

## Correr el proyecto localmente

Todo el proyecto real vive dentro de `frontend/` — instalar y correr siempre desde ahí, nunca desde la raíz del repo:

```bash
cd frontend
npm install
npm run dev
```

Otros scripts disponibles (dentro de `frontend/`):

```bash
npm run build    # build de producción
npm run preview  # sirve el build de producción localmente
npm run lint     # ESLint
```

## Despliegue

El hosting de producción va a ser **Vercel**, conectado directo al repositorio (Root Directory: `frontend`). El workflow de GitHub Actions que quedaba de un fork anterior del proyecto está desactivado (solo se puede correr a mano) porque apuntaba a GitHub Pages, que no es el destino final.

## Nota de origen

Este proyecto arrancó como un fork de [`ShowravKormokar/capsule`](https://github.com/ShowravKormokar/capsule) (un clon del sitio Awwwards "Capsule" de Moyra, hecho con fines de aprendizaje de animaciones GSAP) y fue completamente rebrandeado y reescrito para DivFlow: paleta de colores, copy, estructura de secciones, imágenes, formulario de contacto y modelo de oferta (apps para alquilar en vez de planes fijos).
