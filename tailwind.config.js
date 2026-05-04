/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta VexoTry: Dark Luxury & Neon
        vexo: {
          black: '#030712',       // Más profundo (Slate-950 approx)
          dark: '#0f172a',        // Fondo secundario
          surface: '#1e293b',     // Tarjetas Glassmorphism base
          neon: '#22d3ee',        // Cian eléctrico (Acento principal)
          neonHover: '#67e8f9',   // Cian más brillante
          accent: '#3b82f6',      // Azul eléctrico secundario
          text: '#f8fafc',        // Blanco hueso para lectura
          muted: '#94a3b8',       // Gris para textos secundarios
          glass: 'rgba(255, 255, 255, 0.03)', // Fondo glass más sutil
          border: 'rgba(255, 255, 255, 0.08)', // Bordes sutiles
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        'premium': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #06b6d4 0deg, #3b82f6 180deg, #06b6d4 360deg)',
        'premium-gradient': 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'glow': '0 0 50px rgba(6, 182, 212, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography',
  ],
}