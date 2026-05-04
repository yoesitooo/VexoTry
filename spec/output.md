# CONTRATO TÉCNICO: VEXO TRY LANDING PAGE

**PROYECTO:** VexoTry
**ROL:** SPEC WRITER / SENIOR FRONTEND ENGINEER
**FECHA:** 2026-05-03
**ESTÁNDAR:** DRA YOHANNA (Elite Architecture)

---

## 1. DEFINICIÓN DE STACK Y ENTORNO

El proyecto se ejecutará en un entorno de desarrollo aislado y optimizado.

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
      "DEFAULT": "#020617", // Azul oscuro casi negro (Base)
      "surface": "#0F172A", // Azul oscuro profundo (Cards)
      "surface-glass": "rgba(15, 23, 42, 0.6)" // Glassmorphism base
    },
    "primary": {
      "DEFAULT": "#00F0FF", // Azul Eléctrico / Neón (Acentos)
      "hover": "#00C4CC"
    },
    "secondary": {
      "DEFAULT": "#3B82F6", // Azul corporativo (Botones secundarios)
      "hover": "#2563EB"
    },
    "text": {
      "heading": "#FFFFFF",
      "body": "#94A3B8",
      "muted": "#64748B"
    }
  }
}
```

### 2.2 Tipografía

*   **Títulos:** `Space Grotesk` (Google Fonts) - Peso 700/800.
*   **Cuerpo:** `Inter` (Google Fonts) - Peso 400/500.
*   **Regla:** Máximo 64px para H1, 48px para H2, 32px para H3.

### 2.3 Efectos de Superficie (Glassmorphism)

Cualquier tarjeta o contenedor flotante debe aplicar estrictamente:
```css
.bg-surface-glass
.backdrop-blur-xl
.border-white/10
.shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
```

---

## 3. ARQUITECTURA DE COMPONENTES (FRONTEND)

El layout es modular. Cada sección es un componente React independiente.

### 3.1 Header / Navbar
*   **Componente:** `Navbar`
*   **Props:** `logo`, `links`, `isScrolled` (boolean).
*   **Comportamiento:**
    *   Fijo en el top (`fixed top-0 z-50`).
    *   Transición de fondo: Transparente al inicio -> `bg-background/80 backdrop-blur-md` al hacer scroll (detectado por `useScroll` de Framer Motion).
    *   Logo: Texto blanco con efecto de brillo sutil.

### 3.2 Hero Section
*   **Componente:** `Hero`
*   **Layout:** Flexbox/Grid centrado.
*   **Contenido:**
    *   **H1:** "Automatización Inteligente para el Futuro".
    *   **Subtítulo:** "Implementamos agentes de IA que transforman procesos empresariales."
    *   **CTA:** Botón primario "Agendar Consultoría" (Color `primary`).
    *   **Visual:**
        *   Fondo: Gradiente radial sutil desde el centro (`bg-gradient-to-b from-blue-900/20 to-background`).
        *   Imagen Principal: `https://placehold.co/1200x800/020617/00F0FF?text=AI+Automation+Network&font=montserrat`
        *   Decoración: Partículas de luz simuladas con CSS puro o SVG animado.

### 3.3 Servicios (Grid de Tarjetas)
*   **Componente:** `ServicesGrid`
*   **Estructura:** Grid responsive (1 col móvil, 3 col desktop).
*   **Tarjeta (`ServiceCard`):**
    *   Usa clase `bg-surface-glass`.
    *   **Hover:** `scale-105 transition-transform duration-300`.
    *   **Icono:** Lucide React (ej. `Cpu`, `Bot`, `Zap`).
    *   **Contenido:** Título y descripción breve.
    *   **Imagen:** Placeholder específico por servicio (ej. `https://placehold.co/600x400/0F172A/00F0FF?text=AI+Agents`).

### 3.4 Sección "Sobre Nosotros"
*   **Componente:** `AboutSection`
*   **Layout:** Dos columnas (Texto a la izquierda, Imagen a la derecha).
*   **Imagen:** `https://placehold.co/800x600/020617/3B82F6?text=Team+Innovation`
*   **Texto:** Explicación de la metodología de automatización.

### 3.5 Footer
*   **Componente:** `Footer`
*   **Estructura:** 4 columnas (Links rápidos, Contacto, Redes, Copyright).
*   **Estilo:** Fondo `background` sólido, texto `text-muted`.

---

## 4. LÓGICA DE INTERACCIÓN Y ANIMACIONES

Se utiliza `framer-motion` para todas las animaciones de entrada.

### 4.1 Animaciones de Entrada (Initial)
*   **Hero:** FadeInUp con `duration: 1.2s`.
*   **Tarjetas de Servicio:** StaggeredFadeInUp (cada tarjeta entra con 0.1s de retraso respecto a la anterior).

### 4.2 Animaciones de Scroll (Viewport)
*   **Componente:** `ScrollReveal` (Wrapper).
*   **Trigger:** `whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}`.
*   **Efecto:** Los elementos ocultos inicialmente (`opacity: 0, y: 20`) aparecen suavemente al entrar en el viewport.

### 4.3 Formulario de Contacto
*   **Componente:** `ContactForm`
*   **Campos:** Nombre, Email, Empresa, Mensaje.
*   **Validación:** Zod schema (Email regex, Required fields).
*   **Feedback:**
    *   Error: Rojo neón (`text-red-400`).
    *   Éxito: Mensaje de confirmación con animación de check verde.
*   **Botón:** "Enviar Solicitud".

---

## 5. BACKEND / INTERACCIONES (API CONTRACT)

Aunque es una landing page, el formulario requiere un endpoint simulado o real.

### 5.1 Endpoint: POST /api/contact
*   **Método:** POST
*   **Cuerpo (JSON):**
    ```json
    {
      "name": "string",
      "email": "string",
      "company": "string",
      "message": "string"
    }
    ```
*   **Respuesta Exitosa (200 OK):**
    ```json
    {
      "status": "success",
      "message": "Mensaje enviado correctamente."
    }
    ```
*   **Respuesta de Error (400/500):**
    ```json
    {
      "status": "error",
      "message": "Error en el servidor."
    }
    ```

---

## 6. REQUISITOS DE RENDIMIENTO

*   **LCP (Largest Contentful Paint):** < 1.5s.
*   **CLS (Cumulative Layout Shift):** 0.1 (Máximo).
*   **Optimización de Imágenes:** Todos los placeholders y assets deben tener `loading="lazy"` y formato WebP/AVIF si es posible (aunque sean placeholders, se simula la carga).
*   **Bundle Size:** Mantener el JS crítico por debajo de 150KB (Gzip).

---

[SPEC_APROBADO]