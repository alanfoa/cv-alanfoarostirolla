# Plan de Desarrollo — CV Alan Foa Rostirolla

> **Estado**: En progreso
> **Inicio**: Junio 2026
> **Deploy**: Netlify

---

## Sprint 1 — Setup y Configuración

- [x] Crear proyecto en `E:\Github\cv-alanfoarostirolla\`
- [x] Inicializar npm + instalar Astro
- [x] Instalar Tailwind v4 + `@tailwindcss/vite`
- [x] Configurar `astro.config.mjs`
- [x] Configurar `tsconfig.json`
- [x] Crear `src/styles/global.css` con theme + animaciones
- [x] Crear `public/favicon.svg`

## Sprint 2 — Datos y Layout Base

- [x] Crear `src/data/info.ts` con toda la información (personal, about, stack, proyectos, experiencia, educación)
- [x] Crear `src/layouts/Layout.astro` (meta, fonts, estructura HTML)
- [x] Crear `src/pages/index.astro` (importa todas las secciones + scroll reveal script)

## Sprint 3 — Componentes UI

- [x] `Navbar.astro` — sticky con blur, ocultar al bajar, smooth scroll
- [x] `Hero.astro` — foto con glow neón rotatorio, nombre, título, ubicación, badges redes
- [x] `About.astro` — párrafos con fade-in reveal
- [x] `Stack.astro` — grid de categorías con badges interactivos (hover glow + stagger)
- [x] `Projects.astro` — 3 cards (TurniX, Animelandia, San Jorge) con placeholder de gradient
- [x] `Experience.astro` — timeline vertical con línea animada al scrollear
- [x] `Education.astro` — card con materias + beca destacada
- [x] `Footer.astro` — redes + disponibilidad

## Sprint 4 — Animaciones y Diseño

- [x] Scroll Reveal con IntersectionObserver (fade-in + slide-up)
- [x] Glow rotatorio en foto del Hero
- [x] Hover effects en badges (scale + glow)
- [x] Hover effects en project cards (translateY + glow)
- [x] Timeline line gradient animada
- [x] Navbar ocultar en scroll down / mostrar en scroll up
- [x] Scroll suave en enlaces de navegación
- [ ] Verificar prefers-reduced-motion

## Sprint 5 — Temas de Color (Theme Switcher)

- [x] Refactor colores a variables CSS genéricas (primary, secondary, tertiary)
- [x] 6 temas predefinidos: Neón, Esmeralda, Azul, Coral, Menta, Ámbar
- [x] Theme switcher flotante en esquina inferior derecha
- [x] Actualizar todos los componentes con nombres de color genéricos

## Sprint 6 — Assets e Imágenes (Pendiente)

- [ ] Agregar `public/foto-perfil.jpg`
- [ ] Agregar `public/proyectos/turnix.jpg`
- [ ] Agregar `public/proyectos/animelandia.jpg`
- [ ] Agregar `public/proyectos/sanjorge.jpg`
- [ ] Optimizar imágenes (formato webp)

## Sprint 7 — Testing y Deploy

- [ ] Verificar `npm run build` exitoso
- [ ] Verificar `npm run preview` funcionando
- [ ] Conectar repositorio a Netlify
- [ ] Configurar dominio personalizado (opcional)
- [ ] Configurar HTTPS

## Observaciones

- Los placeholders de proyectos se muestran con iniciales del nombre en gradient hasta que se agreguen las imágenes reales
- Actualizar email y LinkedIn en `src/data/info.ts` con los reales antes del deploy
- El stack usa Tailwind v4 con `@tailwindcss/vite` plugin (sin PostCSS ni archivo tailwind.config tradicional)
