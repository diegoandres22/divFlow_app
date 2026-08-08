<div align="center">

<img src="frontend/public/og-image.jpg" alt="DivFlow" width="100%" />

# &lt;div&gt;Flow

### Software a medida, con n8n.

Construimos productos SaaS y flujos automatizados que hacen crecer tu operación sin fricción.

[![React](https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-B85C3C?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-E8734A?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

<br />

## ¿Qué es DivFlow?

DivFlow es un estudio de desarrollo de software. No vendemos horas de código: entregamos productos que resuelven un problema real de operación — sistemas a medida, plataformas propias y flujos automatizados que corren solos, todos los días, sin que nadie tenga que acordarse de tocarlos.

> Software que se adapta a tu operación, no al revés.

<br />

<p align="center">
  <img src="frontend/src/assets/robot-1.jpg" alt="DivFlow — automatización" width="49%" />
  <img src="frontend/src/assets/robot-2.jpg" alt="DivFlow — software a medida" width="49%" />
</p>

<br />

## Lo que hacemos

**Software a medida** — Tu producto, construido desde cero: dashboard, base de datos y lógica de negocio propia, listo para escalar. Nada de plantillas genéricas forzadas a encajar en tu negocio.

**Automatizaciones con n8n** — Conectamos tus herramientas para que la información viaje sola entre sistemas, sin duplicados ni planillas manuales. Tu pipeline crece mientras vos dormís.

**Apps para alquilar** — Plataformas ya construidas y probadas (como nuestra app de e-commerce), disponibles por suscripción mensual. Sin desarrollo desde cero, sin esperar meses para arrancar.

<br />

## Lo que vas a encontrar en el sitio

<table>
<tr>
<td width="50%">

**Casos de uso probados**

- Automatización de procesos
- Sincronización de datos entre sistemas
- SaaS a medida, de cero a producción

</td>
<td width="50%">
<img src="frontend/src/assets/activities-2.jpg" alt="Casos de uso DivFlow" width="100%" />
</td>
</tr>
<tr>
<td width="50%">
<img src="frontend/src/assets/cap2-square.jpg" alt="Integraciones DivFlow" width="100%" />
</td>
<td width="50%">

**Integraciones en producción**

- CRM conectado a facturación automática
- Soporte al cliente 24/7 con bot + escalado humano
- Dashboard en tiempo real, sin hojas de cálculo dispersas

</td>
</tr>
</table>

Y una sección de **contacto directo**: contanos tu idea y armamos el flujo — respuesta en menos de 24 horas.

<br />

## Cómo trabajamos

Sin vueltas, sin jerga innecesaria. Escuchamos qué proceso te quita tiempo o qué producto querés construir, y lo convertimos en algo que funciona de verdad — medible, mantenible y pensado para crecer con vos, no en contra tuyo.

<br />

## Hablemos

📧 [diego.a.v3005@gmail.com](mailto:diego.a.v3005@gmail.com)

🌐 Sitio en vivo — próximamente en Vercel

<sub>Política de Privacidad · Términos y Condiciones · Aviso Legal — disponibles en el sitio.</sub>

<br />

---

<br />

<details>
<summary><strong>Detalles técnicos</strong> (para quien quiera correr el proyecto localmente)</summary>

<br />

### Stack

- **React 19** + **Vite 6**
- **React Router DOM 7** (una sola ruta principal, `/`, más rutas legales)
- **Tailwind CSS 4**
- **GSAP 3** (`ScrollTrigger`, `ScrollSmoother`, `SplitText`) vía `@gsap/react`
- **Formspree** para el envío del formulario de contacto (sin backend propio)

### Estructura del repo

```
capsule/
├── .github/workflows/   # CI (actualmente desactivado, ver nota abajo)
├── frontend/            # Proyecto Vite real — todo el código vive acá
│   ├── src/
│   │   ├── components/  # Un componente por sección de la landing
│   │   ├── pages/       # Home + páginas legales (Privacidad, Términos, Aviso Legal)
│   │   ├── layouts/     # MainLayout (Navbar, Preloader, ScrollSmoother) y LegalLayout
│   │   └── lib/         # Utilidades (scroll suave compatible con ScrollSmoother)
│   └── public/          # robots.txt, sitemap.xml, og-image.jpg
└── README.md
```

### Correr el proyecto localmente

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

### Despliegue

El hosting de producción va a ser **Vercel**, conectado directo al repositorio (Root Directory: `frontend`). El workflow de GitHub Actions que quedaba de un fork anterior del proyecto está desactivado (solo se puede correr a mano) porque apuntaba a GitHub Pages, que no es el destino final.

</details>

<br />

<div align="center">
<sub>© 2026 DivFlow. Todos los derechos reservados.</sub>
</div>
