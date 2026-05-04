import React from 'react';
import { motion } from 'framer-motion';

const HeroButton = ({ children, onClick, className = "", icon: Icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-full px-8 py-4 
        bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 
        text-cyan-400 font-bold tracking-wide text-sm uppercase
        shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300
        hover:bg-slate-800/90 hover:border-cyan-400/60
        ${className}
      `}
    >
      {/* Efecto de brillo interior */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
      
      {/* Contenido del botón */}
      <div className="relative flex items-center justify-center gap-3 z-10">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors" />
          </motion.div>
        )}
        <span className="relative z-10">{children}</span>
      </div>
    </motion.button>
  );
};

export default HeroButton;