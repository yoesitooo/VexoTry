/**
 * VEXO TRY - Design System Constants
 * @module constants
 * @description Define the core design tokens for the Dark Luxury aesthetic.
 */

/**
 * @typedef {Object} Spacing
 * @property {string} [0] - 0px
 * @property {string} [1] - 0.25rem (4px)
 * @property {string} [2] - 0.5rem (8px)
 * @property {string} [3] - 0.75rem (12px)
 * @property {string} [4] - 1rem (16px)
 * @property {string} [5] - 1.25rem (20px)
 * @property {string} [6] - 1.5rem (24px)
 * @property {string} [8] - 2rem (32px)
 * @property {string} [10] - 2.5rem (40px)
 * @property {string} [12] - 3rem (48px)
 * @property {string} [16] - 4rem (64px)
 * @property {string} [20] - 5rem (80px)
 * @property {string} [24] - 6rem (96px)
 */

/**
 * @typedef {Object} Breakpoints
 * @property {string} sm - 640px
 * @property {string} md - 768px
 * @property {string} lg - 1024px
 * @property {string} xl - 1280px
 * @property {string} '2xl' - 1536px
 */

/**
 * @typedef {Object} Colors
 * @property {string} background - Deep dark slate/black
 * @property {string} surface - Slightly lighter dark slate
 * @property {string} primary - Electric cyan
 * @property {string} primaryHover - Brighter cyan
 * @property {string} secondary - Deep purple/indigo
 * @property {string} text - White/Slate-100
 * @property {string} textMuted - Slate-400
 * @property {string} border - Subtle cyan border
 */

/**
 * @typedef {Object} Typography
 * @property {string} heading - Font family for titles
 * @property {string} body - Font family for content
 * @property {string} mono - Font family for code/technical elements
 */

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const colors = {
  // Backgrounds
  background: '#020617', // slate-950
  backgroundSecondary: '#0f172a', // slate-900
  surface: '#1e293b', // slate-800
  surfaceHover: '#334155', // slate-700
  
  // Accents
  primary: '#06b6d4', // cyan-500
  primaryHover: '#22d3ee', // cyan-400
  primaryGlow: 'rgba(6, 182, 212, 0.15)',
  
  secondary: '#6366f1', // indigo-500
  secondaryGlow: 'rgba(99, 102, 241, 0.15)',
  
  // Text
  text: '#f8fafc', // slate-50
  textMuted: '#94a3b8', // slate-400
  textDim: '#475569', // slate-600
  
  // Borders & Dividers
  border: '#1e293b',
  borderAccent: 'rgba(6, 182, 212, 0.3)',
};

export const typography = {
  heading: 'font-sans', // Default Tailwind sans (Inter/Roboto)
  body: 'font-sans',
  mono: 'font-mono', // For technical details
};

export const glassmorphism = {
  base: 'bg-white/5 backdrop-blur-lg border border-white/10',
  hover: 'hover:bg-white/10 hover:border-white/20',
  dark: 'bg-slate-950/60 backdrop-blur-md border border-slate-800/50',
};

export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  pulse: 'animate-pulse',
};