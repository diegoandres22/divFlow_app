# DivFlow — frontend

Proyecto Vite + React de la landing de DivFlow. Ver el [README de la raíz del repo](../README.md) para contexto general, estructura y notas de despliegue.

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (Vite --host)
npm run build    # build de producción a dist/
npm run preview  # sirve el build de producción localmente
npm run lint     # ESLint
```

## Variables/config a tener en cuenta

- El endpoint de Formspree está hardcodeado en `src/components/Contact/Contact.jsx` (`FORMSPREE_ENDPOINT`).
- `vite.config.js` tiene `base: '/'` — pensado para desplegar en la raíz del dominio real (Vercel), no en un subpath de GitHub Pages.
- `src/Router/Router.jsx` define una única ruta (`/`).
