import React from 'react';
import { motion } from 'framer-motion';

const HeroVisual = () => {
  // Variants para animaciones de entrada premium
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateX: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      } 
    }
  };

  return (
    <motion.div
      className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 group"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Fondo Base Oscuro con Gradiente */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black opacity-90" />
        
        {/* Grid Pattern Subtle */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Glow Effect Neón */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Contenedor de Imagen Principal */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center p-4 md:p-10"
        variants={imageVariants}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
          
          {/* Placeholder Funcional */}
          <img 
            src="https://placehold.co/1920x1080/0f172a/38bdf8?text=AI+Architecture+Visualization&font=montserrat" 
            alt="AI Automation Architecture Visualization" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent backdrop-blur-[2px]" />
          
          {/* Badge de Tecnología Flotante */}
          <div className="absolute top-6 right-6 bg-slate-900/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-100 tracking-wide">LIVE SYSTEM</span>
          </div>
        </div>
      </motion.div>

      {/* Elementos Decorativos Flotantes (Circuitos) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </motion.div>
  );
};

export default HeroVisual;