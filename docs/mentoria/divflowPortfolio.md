# Mentoría técnica — divflowPortfolio

Repo: `PorfolioDivFlow` (remote: `diegoandres22/divFlow_app`). Sitio de marca/portfolio de DivFlow, en pre-producción.

Nivel de calibración (2026-08-09): básico en React, Vite/Tailwind/ESLint y seguridad web (CSP/Vercel); sin experiencia previa en GSAP.

---

## Módulo 1 — Arquitectura y stack general

### Qué es este proyecto, en una frase
Es un **SPA (Single Page Application) 100% estático**: no hay servidor propio, no hay base de datos, no hay API backend tuya. Todo el "backend" que necesita (envío del formulario, analítica) lo resuelven servicios de terceros a los que el navegador les pega directo.

### El stack real (verificado en `package.json`)
- **React 19** (`react`, `react-dom`) — UI.
- **Vite 6** (`vite`) — bundler y dev server. No es Create React App ni Next.js: no hay SSR, no hay rutas de servidor, solo build estático.
- **React Router DOM 7** (`react-router-dom`) — routing 100% client-side, con `createBrowserRouter`.
- **Tailwind CSS 4** (vía `@tailwindcss/vite`, no PostCSS clásico) — estilos.
- **GSAP 3** + `@gsap/react` — animaciones (`ScrollTrigger`, `ScrollSmoother`).
- **ESLint 9** (flat config, `eslint.config.js`) — linting.

No hay Redux, Zustand, React Query, ni ningún manejador de estado global: es una landing, no una app con estado complejo.

### Flujo de datos (el mapa general)
```
Usuario → navegador carga index.html → Vite sirve el bundle de React
   → main.jsx monta <RouterProvider> (React Router decide qué página)
   → MainLayout envuelve todo con ScrollSmoother (GSAP) + Navbar + Footer
   → Home.jsx renderiza las secciones (Hero, Choose, Activities, Gallery, Contact...)
   → Contact.jsx hace fetch() directo a Formspree (servicio externo) — no pasa por ningún servidor tuyo
   → GA4 y Meta Pixel cargan sus scripts externos y mandan eventos directo a Google/Meta
```

No hay capa intermedia. El navegador del visitante habla directo con tres servicios de terceros: **Formspree** (formulario de contacto), **Google Analytics 4** y **Meta Pixel** (analítica/tracking). Esto lo vas a ver en detalle en el Módulo 4.

### Por qué esta arquitectura (vs. alternativas)
- **SPA estática en vez de Next.js/SSR**: para un portfolio/landing sin contenido dinámico ni SEO complejo por página, SSR es complejidad que no aporta nada — no hay datos que cambien por request. Vite + SPA build más rápido, deploy más simple (estático puro en Vercel).
- **Sin backend propio para el formulario**: usar Formspree en vez de montar una función serverless propia evita mantener infraestructura para algo que un servicio gratuito/barato ya resuelve. Trade-off: dependés de un tercero y su disponibilidad/pricing.
- **Client-side routing con `createBrowserRouter`**: como es SPA sin SSR, no hay alternativa real — el router tiene que vivir en el cliente. Ojo: esto significa que si alguien entra directo a `/privacidad` sin pasar por Vercel con rewrites correctos, el servidor tiene que saber devolver `index.html` igual (lo vamos a chequear en el módulo de deploy).

### Qué se rompe si falla cada pieza
- **Si Vite/build falla**: no hay sitio, punto — es 100% estático, sin build no hay `dist/`.
- **Si Formspree cae**: el sitio sigue andando, pero el formulario de contacto no envía nada (no hay fallback).
- **Si GA4/Meta Pixel fallan en cargar**: cero impacto funcional para el usuario — son scripts opcionales, el código ya está escrito para no romper si `window.gtag`/`window.fbq` no existen (lo vas a ver en `ga4.js`/`metaPixel.js`, Módulo 4).
- **Si React Router falla**: toda la navegación interna se rompe, incluidas las páginas legales.

### Hallazgo: el README está desactualizado
El `README.md` describe la estructura como si el código viviera dentro de una carpeta `frontend/` (`frontend/src/`, `frontend/public/`, Root Directory en Vercel = `frontend`). Pero el commit `3eb7f4d` ("aplanar estructura del repo, eliminar wrapper capsule/frontend", 2026-08-08) ya movió todo a la raíz del repo — `package.json`, `src/`, `public/` están en la raíz, no dentro de `frontend/`. La carpeta `capsule/frontend/` que queda en disco está vacía, es un resto sin trackear en git.

Esto importa en la práctica: si en Vercel el "Root Directory" del proyecto sigue configurado como `frontend`, el deploy va a fallar o va a buildear el código viejo. Lo profundizamos en el Módulo 7, pero quedá con esto: **el README documenta una estructura que ya no existe.**

---

**Pregunta de verificación antes de seguir:** con lo que viste arriba — ¿por qué decís que este proyecto *no* necesita una base de datos, y qué tendría que pasar en el negocio para que sí la necesitara?

**Respuesta de Diego (correcta):** la info es estática y la sigue siendo porque solo comunica lo que él elige; cambios se hacen directo en el código fuente. Se ahorra dev + panel admin + costos de DB + API. Matiz agregado: haría falta DB si el contenido tuviera que cambiar sin tocar código (blog editable, panel de carga de testimonios) o si hubiera que persistir algo generado por usuarios (cuentas, leads propios en vez de solo vía Formspree).

---

## Módulo 2 — Estructura de carpetas y convenciones

### El patrón general
```
src/
├── Router/          # 1 archivo: la config de rutas (createBrowserRouter)
├── assets/          # imágenes/video, importados directo en los componentes que los usan
├── components/       # un componente por sección de la landing
│   └── NombreComponente/
│       ├── NombreComponente.jsx
│       └── nombrecomponente.css   (opcional — solo si Tailwind no alcanza)
├── constants/        # arrays/strings de copy, separados de la lógica de UI
├── layouts/          # layouts de RUTA (los usa el Router directamente)
├── lib/               # utilidades e integraciones de terceros (no son componentes)
└── pages/             # una carpeta por página, mismo patrón que components/
    └── NombrePagina/
        └── NombrePagina.jsx
```

Confirmado leyendo varios componentes (`Hero.jsx`, `MarqueeSticky.jsx`, `LegalLayout.jsx`) y el `eslint.config.js`: la convención es **carpeta PascalCase + archivo `.jsx` con el mismo nombre**, un componente por archivo, `export default` al final. Es el mismo patrón tanto en `components/` como en `pages/` — así que una vez que entendés uno, entendés el otro.

### `constants/` — separar copy de lógica
`src/constants/welcome.js` guarda arrays de strings (`welcomeLinesLG`, `chooseLinesLG`, etc.) que después consumen los componentes para renderizar texto línea por línea (típico para animaciones de texto tipo GSAP SplitText/stagger, donde necesitás el texto ya partido en líneas). Separar esto del JSX significa que si mañana querés cambiar el copy del Hero, no tenés que tocar lógica de animación — solo el archivo de constants.

### `lib/` — no son componentes, son utilidades
`ga4.js`, `metaPixel.js`, `smoothScroll.js`, `useDocumentMeta.js` viven acá porque son funciones puras / hooks de utilidad, no piezas de UI. Es la carpeta "todo lo que no es una sección visual pero el sitio necesita para funcionar".

### Hallazgo: nombre `Layouts` duplicado con significados distintos
Hay **dos carpetas** con "layout" en el nombre y no son lo mismo:
- `src/layouts/` (minúscula, nivel raíz de `src/`) → `MainLayout.jsx` y `LegalLayout.jsx`, que el **Router** usa como wrapper de rutas (`Router.jsx`: `element: <MainLayout />`).
- `src/components/Layouts/` (con mayúscula, dentro de `components/`) → contiene `MarqueeSticky.jsx`, que **no es un layout de ruta**: es un componente de sección que combina un marquee con scroll pineado (GSAP). No lo usa el Router, lo usa `Home.jsx` como una sección más.

Si buscás "layout" en el proyecto (por ejemplo con grep) vas a encontrar dos cosas conceptualmente distintas. No rompe nada funcionalmente — son carpetas separadas, sin colisión de imports — pero es una inconsistencia de nomenclatura que puede confundir a cualquiera que se sume al proyecto (incluido vos, en 6 meses). Como estamos en modo solo lectura no lo toco, pero quedá anotado para cuando quieras limpiar nombres.

### Hallazgo: no hay alias de imports
No existe `jsconfig.json`/`tsconfig.json` ni configuración de `resolve.alias` en `vite.config.js`. Todos los imports son relativos: `../../assets/robot-1.jpg`, `../Buttons/Brand`, etc. (lo ves en `Hero.jsx`). Con la profundidad actual (2-3 niveles) todavía es legible; si el árbol de `components/` crece más, vas a empezar a ver imports tipo `../../../../lib/ga4` que son molestos de mantener. No es un problema hoy, es algo a vigilar.

### Design tokens declarados pero subutilizados
En `src/index.css` hay variables CSS (`--base-100`, `--base-200`, `--base-300`, `--accent-primary`, `--accent-secondary`) pensadas como paleta central. Verifiqué su uso real: **solo `Preloader/preloaderII.css` las consume** (`var(--base-300)`, etc.). El resto del proyecto — `Footer.jsx`, `Contact.jsx`, `Choose.jsx`, `Cards.jsx`, páginas legales — usa colores hardcodeados directo en clases Tailwind arbitrarias (`text-[#F5F0EA]`, `bg-[#E8734A]`, conté 13 apariciones de `#E8734A` solo en `Footer.jsx`). O sea: definiste un sistema de tokens y después no lo usaste de forma consistente. Si mañana cambiás la paleta de marca, tenés que hacer find-and-replace de hex en vez de tocar 5 variables.

---

**Pregunta de verificación:** si tuvieras que agregar una nueva sección a la landing (por ejemplo "Testimonios"), ¿en qué carpetas exactas crearías archivos, siguiendo el patrón que acabamos de ver, y por qué ahí?

**Nota:** Diego pidió explicación menos técnica y con analogías — se retomó el módulo con ese enfoque. Se generó además un prompt para pegar en Claude Code que corrige los 3 hallazgos de este módulo (unificar nombre "Layouts", agregar alias de imports "@/", auditar y consolidar colores hardcodeados en un theme de Tailwind). Queda pendiente revisar el resultado cuando Diego confirme que Claude Code terminó.

---

## Módulo 3 — "Modelo de datos" y lógica de negocio

No hay modelo de datos tradicional (sin DB, sin tablas). Lo único que existe es estado en memoria del navegador (`useState` en `Contact.jsx`), que se pierde al cerrar/recargar la página.

Reglas de negocio reales encontradas:

1. **Consentimiento de cookies** (`src/components/CookieBanner/CookieBanner.jsx`): al montar, lee `localStorage.getItem("divflow_cookie_consent")`. Si ya hay un valor guardado, no vuelve a mostrar el banner; si el valor es `"accepted"`, dispara `initMetaPixel()` e `initGA4()` automáticamente. Si el usuario nunca decidió, muestra el banner y solo activa tracking ante un click explícito en "Aceptar". Es una regla de cumplimiento legal (no solo UI): sin consentimiento, cero tracking.

2. **Formulario de contacto** (`src/components/Contact/Contact.jsx`): el botón de enviar queda `disabled` hasta que el checkbox de "Acepto la Política de Privacidad" esté marcado, además de los campos `required`. Truco prolijo: un input oculto `_subject` arma el asunto del email que le llega a Diego para que el lead resalte en la bandeja, sin backend propio. Al enviar con éxito, dispara `trackMetaEvent("Lead")`.

3. **Meta/título por página** (`src/lib/useDocumentMeta.js`): como es SPA sin SSR, cada página setea su propio `document.title` y meta description a mano vía `useEffect`, restaurando los valores por defecto al desmontar. Sin esto, todas las páginas compartirían el mismo título/descripción en buscadores y al compartir el link.

**Verificación con Diego (correcta):** confirmó que si un visitante ya aceptó cookies y vuelve días después, el banner no reaparece porque `localStorage` ya tiene `"accepted"` guardado, y la app usa ese valor para activar GA4/Meta Pixel sin volver a preguntar.

---

## Módulo 4 — "Backend" e integraciones externas

Verifiqué (grep de "n8n" en `src/`) que **no hay integración real de n8n en este repo** — todas las menciones son copy de marketing (Hero, Footer, Activities, etc.) describiendo el servicio de DivFlow como negocio, no una llamada real a un flujo de n8n. Este sitio no ejecuta ni consume ningún webhook de n8n.

Los tres "backends" reales son servicios externos:

- **Formspree** (cubierto en Módulo 3).
- **GA4 y Meta Pixel** (`src/lib/ga4.js`, `src/lib/metaPixel.js`): comparten el mismo patrón — cargan su script externo dinámicamente con `document.createElement("script")` en vez de un `<script>` inline en el HTML. Motivo (se profundiza en Módulo 6): el CSP del sitio no permite scripts inline, solo scripts de un listado de orígenes de confianza.

**Patrón de seguridad funcional compartido:** tanto `trackGA4Event` como `trackMetaEvent` chequean `if (window.gtag)` / `if (window.fbq)` antes de disparar el evento. Si el usuario rechazó cookies, esas funciones globales nunca existieron, y el track se vuelve un no-op silencioso en vez de romper la página. Esto permite llamar `trackMetaEvent("Lead")` en `Contact.jsx` sin verificar el consentimiento en ese punto — la función ya se protege sola. Diseño intencional, bien resuelto.

**Qué se rompe si falla cada uno:** Formspree caído = formulario no envía (resto del sitio OK). GA4/Meta Pixel caídos = cero impacto funcional, solo se pierde tracking.

**Verificación con las 3 correcciones de código (aplicadas por Claude Code, revisadas 2026-08-09, aún sin commitear):**
- Carpeta `Layouts` duplicada → resuelta: `MarqueeSticky` movido a `src/components/MarqueeSticky/`.
- Imports relativos → resuelto: alias `@` → `src/` en `vite.config.js` + `jsconfig.json` nuevo; 0 imports `../` restantes.
- Colores hardcodeados → resuelto: bloque `@theme` en `src/index.css` con paleta completa nombrada (`--color-cream`, `--color-tan`, `--color-surface`, etc.); solo queda 1 hex hardcodeado en todo `src/` (antes eran cientos).

**Verificación con Diego (correcta):** con cookies rechazadas, `window.fbq` nunca se crea (porque `initMetaPixel()` nunca corrió), así que `trackMetaEvent("Lead")` evalúa `if (window.fbq)` como falso y no hace nada — no-op silencioso, no rompe el envío del formulario.
