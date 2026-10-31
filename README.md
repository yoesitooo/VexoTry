# VexoTry — AI Agency Landing Page

**High-conversion landing page for an AI-automation agency: dark glassmorphism design, scroll-driven animations, a 3D carousel and a validated contact form.**

![React](https://img.shields.io/badge/React_18-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![Zod](https://img.shields.io/badge/React_Hook_Form_+_Zod-3E67B1?logo=zod&logoColor=white)

> 🇪🇸 Landing de agencia de automatización con IA, en React + Vite + Tailwind + Framer Motion, con formulario validado (React Hook Form + Zod).

## Highlights

- **Sections:** Hero with looping video background, Services, Features, 3D AI carousel, Contact, Footer.
- **Contact form** validated on the client with **React Hook Form + Zod** schemas.
- **Animations** with Framer Motion (`whileInView` reveals, scroll-spy navbar).
- **Performance pass:** heavy `backdrop-blur` and noise filters replaced with radial gradients, broken external video links removed, carousel switched to optimized static images — see the commit history for each step.
- **SEO basics:** `robots.txt`, `sitemap.xml`, favicons.

## How it was built

This project was generated with an early version of my multi-agent pipeline (SDD Ecosystem). The agents' intermediate outputs are kept in the repo so the process is visible:

| Folder | Pipeline phase |
|---|---|
| [`proponer/`](./proponer) | Technical proposal |
| [`investigar_visual/`](./investigar_visual) | Visual research |
| [`spec/`](./spec) | Specification |
| [`diseñar/`](./diseñar) | Design |
| [`planear_tareas/`](./planear_tareas) | Task breakdown |
| [`implementar/`](./implementar) | Implementation notes |

I then reviewed, fixed and optimized the generated code by hand (performance and navigation fixes in the commit history).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Author

**Jhoe Miranda** — [GitHub](https://github.com/yoesitooo) · [LinkedIn](https://www.linkedin.com/in/jhoe-miranda)
