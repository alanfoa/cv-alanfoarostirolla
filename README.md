<div align="center">
  <img src="public/favicon.svg" width="80" alt="Logo" />
  <h1>Alan Foa Rostirolla</h1>
  <p><strong>Fullstack Developer & Soporte de Infraestructura</strong></p>
  <p>
    <a href="https://www.linkedin.com/in/alan-foa-rostirolla-04b97a258">LinkedIn</a>
    ·
    <a href="mailto:alan.fr2008@hotmail.com">Email</a>
    ·
    <a href="https://github.com/AlanFoa">GitHub</a>
  </p>
  <br/>
</div>

---

## 🧑‍💻 Sobre el proyecto

CV profesional interactivo desarrollado con **Astro 5** + **Tailwind CSS v4**. Diseñado para ser rápido, liviano (cero JS al cliente por defecto) y visualmente atractivo, con animaciones fluidas y un selector de temas de color integrado.

### 🎯 Características

- ⚡ **100% estático** — build generado con Astro, cero JS innecesario
- 🎨 **6 temas de color** intercambiables en vivo
- 🔍 **Scroll reveal** animado con IntersectionObserver
- 🕶️ **Modo oscuro** con acentos neón (predeterminado: menta)
- 📱 **Responsive** mobile-first
- 🖼️ **Glassmorphism** + animaciones CSS nativas

---

## 🛠️ Stack

| Área | Tecnologías |
|------|------------|
| **Framework** | Astro 5 |
| **Lenguaje** | TypeScript |
| **Estilos** | Tailwind CSS v4 |
| **Animaciones** | CSS nativas + IntersectionObserver |
| **Build** | Vite (incluido en Astro) |
| **Deploy** | Netlify |

---

## 🎨 Temas de color

El proyecto incluye un **theme switcher** (esquina inferior derecha) que permite cambiar entre 6 paletas de colores:

| Tema | Primario | Secundario |
|------|----------|------------|
| **Menta** (default) | `#34d399` | `#38bdf8` |
| Neón | `#00f0ff` | `#8b5cf6` |
| Esmeralda | `#10b981` | `#f59e0b` |
| Azul | `#3b82f6` | `#94a3b8` |
| Coral | `#f43f5e` | `#a855f7` |
| Ámbar | `#f59e0b` | `#78716c` |

---

## 🚀 Instalación local

```bash
# Clonar
git clone https://github.com/alanfoa/cv-alanfoarostirolla.git
cd cv-alanfoarostirolla

# Instalar dependencias
npm install

# Desarrollo
npm run dev
# Abrir http://localhost:4321

# Build producción
npm run build

# Vista previa del build
npm run preview
```

---

## 📁 Estructura

```
cv-alanfoarostirolla/
├── public/
│   ├── favicon.svg
│   └── proyectos/           # Screenshots de proyectos
├── src/
│   ├── components/          # Hero, About, Stack, Projects, etc.
│   ├── data/
│   │   └── info.ts          # Toda la información centralizada
│   ├── layouts/
│   │   └── Layout.astro     # HTML shell + meta + fonts
│   ├── pages/
│   │   └── index.astro      # Página única
│   └── styles/
│       └── global.css       # Tema, animaciones, utilidades
├── plan.md                  # Sprint checklist del proyecto
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🧩 Secciones

| Sección | Descripción |
|---------|-------------|
| **Hero** | Foto con glow animado, nombre, título, enlaces a redes |
| **Sobre mí** | Resumen profesional con reveal animado |
| **Stack** | Tecnologías organizadas por categorías con badges |
| **Proyectos** | 3 proyectos destacados (TurniX, Animelandia, San Jorge) |
| **Experiencia** | Timeline vertical con línea animada |
| **Educación** | Técnicatura UNAHUR + materias clave |

---

## 🔗 Links

| Recurso | URL |
|---------|-----|
| **LinkedIn** | https://www.linkedin.com/in/alan-foa-rostirolla-04b97a258 |
| **GitHub** | https://github.com/AlanFoa |
| **Email** | alan.fr2008@hotmail.com |
| **Animelandia** | https://animelandia-oficial.netlify.app |
| **San Jorge** | https://sanjorgeinformatica.netlify.app |
| **TurniX** | https://turnix-oficial.netlify.app |

---

## 📄 Licencia

MIT
