export const personal = {
  name: "Alan Foa Rostirolla",
  title: "Fullstack Developer & Soporte de Infraestructura",
  location: "Ituzaingó, Buenos Aires, Argentina",
  age: 25,
  email: "alan.fr2008@hotmail.com",
  github: "https://github.com/AlanFoa",
  linkedin: "https://www.linkedin.com/in/alan-foa-rostirolla-04b97a258",
};

export const about = [
  "Desarrollador Fullstack con un fuerte dominio técnico en el diseño e implementación de arquitecturas Frontend, Backend y Bases de Datos, siendo este mi principal fuerte profesional.",
  "Combino la agilidad del ecosistema moderno de TypeScript (NestJS, React y Node.js) con la rigurosidad teórica de mis estudios universitarios en Programación Orientada a Objetos (POO) y Bases de Datos Relacionales (SQL).",
  "Además, cuento con una marcada mentalidad hands-on y capacidad de troubleshooting nativa respaldada por más de 7 años de experiencia práctica en el diagnóstico de hardware, configuración de sistemas complejos y despliegue de redes de infraestructura.",
  "Mi enfoque se centra en fusionar la lógica estricta del desarrollo de software con la infraestructura de IT para construir soluciones escalables, robustas, eficientes y listas para producción.",
];

export const stack = {
  "Ecosistema Core": [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "React",
    "Tailwind CSS (v4)",
    "Vite",
  ],
  "Bases de Datos & ORMs": [
    "PostgreSQL",
    "SQLite",
    "Prisma ORM",
    "SQL Nativo",
  ],
  "Conceptos & Paradigmas": [
    "POO",
    "Estructuras de Datos",
    "Arquitectura de Software",
    "Seguridad en APIs (JWT)",
    "Comunicación Real-Time (SSE)",
  ],
  "Background Académico": ["Java", "Python"],
  "Infraestructura & Soporte": [
    "Conectividad IP",
    "Topologías de Red",
    "Configuración de routers/puertos",
    "CCTV (DVR/NVR)",
    "Hardware Troubleshooting",
    "Windows Avanzado",
    "Linux",
  ],
  Herramientas: [
    "Postman",
    "Figma",
    "Git (commits, push, pull)",
    "GitHub (PRs, merge, code review)",
    "Git Flow (ramas dev/features)",
    "Netlify",
    "Render",
    "Supabase",
    "Vercel",
    "UptimeRobot",
  ],
};

export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  highlights: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "TurniX",
    subtitle: "SaaS de Gestión de Turnos Empresarial (White Label)",
    description: [
      "Monorepo NestJS + React para gestión de turnos con dashboard administrativo y notificaciones en tiempo real.",
    ],
    tags: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React", "Vite", "Tailwind CSS v4", "Recharts", "SSE", "Passport JWT", "Radix UI", "Swagger", "React Router"],
    highlights: [
      "Backend NestJS modular con Prisma ORM, autenticación JWT por roles (ADMIN/CLIENT) y documentación Swagger automática",
      "Flujo de reserva en 5 pasos con validación de solapamiento horario, control de disponibilidad y precios dinámicos",
      "Dashboard administrativo con gráficos Recharts (barras, torta, línea) y métricas en tiempo real con filtro semanal/mensual",
      "Notificaciones en tiempo real vía SSE con campana de badges no leídas, Sonner toasts y Desktop Notifications en segundo plano",
    ],
    link: "https://turnix-oficial.netlify.app",
  },
  {
    title: "Animelandia",
    subtitle: "Plataforma de Streaming de Anime",
    description: [
      "Motor de streaming de anime con scraping automatizado y frontend vanilla.",
    ],
    tags: ["Node.js", "Express", "Axios", "Cheerio", "CSS3", "JavaScript Vanilla", "Docker"],
    highlights: [
      "Backend con scraping en tiempo real usando Axios + Cheerio con sistema de caché en memoria y Promise deduplication",
      "Frontend HTML/CSS/JS puro con variables CSS nativas para theming claro/oscuro y localStorage para favoritos",
      "Catálogo con 6 filtros interconectados (género, tipo, estado, año, orden, alfabético) y paginación sliding window",
      "Reproductor de video con selección multiservidor extraída mediante regex sobre scripts embebidos del sitio origen",
    ],
    link: "https://animelandia-oficial.netlify.app/",
  },
  {
    title: "San Jorge Informática",
    subtitle: "E-commerce & Cotizador de Hardware",
    description: [
      "E-commerce completo de hardware con tienda pública, panel administrador y pasarela de pagos.",
    ],
    tags: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Supabase", "React", "Vite", "Tailwind CSS v4", "React Router", "React Query", "Mercado Pago", "Cloudinary"],
    highlights: [
      "Backend NestJS con TypeORM, autenticación JWT + Passport, upload a Cloudinary e integración Mercado Pago Checkout Pro",
      "Frontend React 19 con Vite, React Router v7 y TanStack React Query para fetching optimizado con caché",
      "Carrito persistente en localStorage con integración a WhatsApp y pago directo por Mercado Pago",
      "Panel administrador con CRUD de productos, sincronización automatizada desde proveedor externo (Invid) y gestión de categorías",
    ],
    link: "https://sanjorgeinformatica.netlify.app/",
  },
];

export interface Experience {
  role: string;
  organization: string;
  period: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    role: "Técnico en Instalación de Sistemas de Seguridad e Infraestructura de Red",
    organization: "Emprendimiento Familiar",
    period: "2019 — Presente",
    items: [
      "Diseño, despliegue, cableado estructurado y montaje de redes IP y analógicas para sistemas de videovigilancia CCTV (cámaras de seguridad, DVRs y NVRs)",
      "Configuración avanzada de redes locales, ruteo de puertos, asignación de direccionamiento IP y vinculación de sistemas distribuidos para acceso remoto seguro",
      "Mantenimiento predictivo, preventivo y correctivo de equipamiento electrónico de seguridad",
    ],
  },
  {
    role: "Especialista en Hardware Troubleshooting & Soporte Técnico de PC",
    organization: "Freelance / Autónomo",
    period: "Desde temprana edad",
    items: [
      "Montaje completo, testeo y optimización de computadoras de escritorio de alta performance y estaciones de trabajo",
      "Diagnóstico profundo de fallas críticas en componentes de hardware (identificación de módulos quemados, testeo de memorias RAM, errores de tensión en fuentes)",
      "Administración avanzada de sistemas operativos Windows y Linux, especialización en resolución de conflictos de compatibilidad, entornos alterados, instalación de ISOs y emulación de entornos aislados para pruebas",
    ],
  },
];

export const education = {
  title: "Técnicatura Universitaria en Programación",
  institution: "Universidad Nacional de Hurlingham (UNAHUR)",
  status: "Cursando última materia — Finalización estimada: Julio 2026",
  subjects: [
    "Programación Orientada a Objetos",
    "Estructuras de Datos",
    "Base de Datos (SQL Nativo)",
    "SQLite",
    "PostgreSQL",
    "Arquitectura de Software",
  ],
};
