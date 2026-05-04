[FASE: FAST FORWARD - DISEÑO TÉCNICO Y ARQUITECTURA]

**PROYECTO:** VexoTry Landing Page
**ROL:** SENIOR FRONTEND ARCHITECT
**ESTÁNDAR:** DRA YOHANNA (Elite Architecture)
**FECHA:** 2026-05-03

---

## 1. DEFINICIÓN DE STACK Y ENTORNO

El proyecto se ejecutará en un entorno de desarrollo aislado y optimizado para máxima velocidad de carga y estética visual.

*   **Core:** Vite (v5.4+) con React (18.3+).
*   **Estilos:** Tailwind CSS (v3.4+) con configuración personalizada (`tailwind.config.js`).
*   **Animaciones:** Framer Motion (v11.0+) para transiciones de entrada y scroll.
*   **Iconografía:** Lucide React (versión ligera).
*   **Formularios:** React Hook Form + Zod (Validación estricta).
*   **Imágenes:** Placehold.co (Placeholder API).
*   **Prohibido:** Bootstrap, Java, Spring Boot, Flask, Sass (solo CSS Modules/Tailwind).

---

## 2. SISTEMA DE DISEÑO (DESIGN TOKENS)

Se define la paleta de colores y las reglas de estilo para cumplir con la estética "Dark Luxury Technological".

### 2.1 Paleta de Colores (Tailwind Config)

```json
{
  "colors": {
    "background": {
      "base": "#020617", // Azul oscuro casi negro (Slate-950)
      "surface": "#0f172a", // Slate-900 para tarjetas
      "accent": "#38bdf8", // Sky-400 (Azul eléctrico)
      "accent-glow": "#0ea5e9", // Sky-500 (Neón)
      "glass": "rgba(255, 255, 255, 0.05)", // Fondo vidrio
      "border": "rgba(255, 255, 255, 0.1)" // Bordes sutiles
    }
  },
  "typography": {
    "font-sans": "Inter, sans-serif",
    "font-display": "Space Grotesk, sans-serif"
  }
}
```

### 2.2 Reglas de Estilo (UI Rules)

1.  **Glassmorphism:** Todas las tarjetas de servicio y secciones secundarias deben usar `backdrop-blur-md`, `bg-opacity-20` y `border-white/10`.
2.  **Neon Accents:** Los botones de CTA y títulos principales deben usar gradientes de `cyan-400` a `blue-600` con `shadow-[0_0_15px_rgba(56,189,248,0.5)]`.
3.  **Tipografía:** Títulos grandes y negros (o blanco puro) con alto contraste. Texto secundario en gris claro (`text-slate-400`).
4.  **Espaciado:** Uso generoso de `py-24` (padding vertical) para secciones para dar sensación de lujo y aire.

---

## 3. ARQUITECTURA DE COMPONENTES (ATOMIC DESIGN)

La estructura del proyecto se divide en componentes reutilizables y optimizados.

### 3.1 Estructura de Archivos (`src/components/`)

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx       // Sticky, glassmorphism, logo animado
│   │   └── Footer.jsx        // Links y copyright
│   ├── sections/
│   │   ├── Hero.jsx         // Video background o imagen 3D abstracta + H1
│   │   ├── Services.jsx     // Grid de tarjetas con hover effects
│   │   ├── TechStack.jsx    // Logos de tecnologías (animados)
│   │   └── Contact.jsx      // Formulario con validación visual
│   └── ui/
│       ├── Button.jsx       // Variants: primary (neon), secondary (glass)
│       ├── Card.jsx         // Base para glassmorphism
│       └── Badge.jsx        // Etiquetas de "AI Agent", "Automation"
├── hooks/
│   └── useScrollReveal.js   // Custom hook para animaciones al hacer scroll
└── lib/
    └── utils.js             // Clases Tailwind helpers
```

### 3.2 Componente Hero (Ejemplo de Implementación)

```jsx
// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Automatización <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Inteligente</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Transformamos tu negocio con agentes de IA y flujos de trabajo automatizados.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <a href="#contact" className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            Iniciar Proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
};
```

### 3.3 Componente Servicios (Glassmorphism)

```jsx
// src/components/sections/Services.jsx
import { motion } from 'framer-motion';

const services = [
  { title: "Chatbots IA", desc: "Agentes conversacionales 24/7", icon: "MessageSquare" },
  { title: "Automatización", desc: "Flujos de trabajo sin código", icon: "Cpu" },
  { title: "Consultoría", desc: "Estrategia de implementación", icon: "Briefcase" }
];

export const Services = () => {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              {/* Icono con efecto de luz */}
              <div className="mb-4 text-cyan-400">
                {/* Icon Lucide aquí */}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

## 4. ESTRATEGIA DE ANIMACIÓN Y RENDIMIENTO

### 4.1 Framer Motion Strategy
*   **Scroll Reveal:** Usar `useScroll` y `useTransform` para que los elementos aparezcan suavemente (`opacity: 0 -> 1`, `y: 20 -> 0`) a medida que el usuario baja.
*   **Hover States:** Las tarjetas de servicio deben elevarse (`y: -10`) y aumentar la opacidad del borde al pasar el mouse.
*   **Background:** Implementar un fondo sutil de partículas o gradientes animados con `animate-pulse` o `animate-spin` muy lento para dar vida sin distraer.

### 4.2 Optimización de Imágenes
*   **Placeholders:** Todas las imágenes de fondo o ilustraciones usarán `placehold.co` con parámetros específicos para mantener la estética oscura.
    *   Ejemplo: `https://placehold.co/1920x1080/0f172a/38bdf8?text=AI+Automation+Background&font=montserrat`
*   **Lazy Loading:** Atributo `loading="lazy"` en todas las imágenes excepto el Hero.

---

## 5. ESQUEMA DE DATOS (Backend Schema)

Para el formulario de contacto y la gestión de servicios:

```typescript
// src/types/schema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  company: z.string().min(3, "Nombre de empresa requerido"),
  message: z.string().min(20, "Mensaje demasiado corto"),
});

export const serviceData = [
  { id: 1, title: "Chatbots IA", description: "Agentes conversacionales 24/7", icon: "MessageSquare" },
  { id: 2, title: "Automatización", description: "Flujos de trabajo sin código", icon: "Cpu" },
  { id: 3, title: "Consultoría", description: "Estrategia de implementación", icon: "Briefcase" },
];
```

---

[STATUS]: ARCHITECTURE_FINALIZED
[STATUS]: DESIGN_APPROVED