import React from 'react';
import { motion } from 'framer-motion';

const HeroButtonSecondary = ({ children, onClick, icon: Icon }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-500/30 bg-slate-900/40 px-8 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
    >
      {/* Glow Effect Background */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && (
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45" />
          </motion.span>
        )}
      </span>
    </motion.button>
  );
};

export default HeroButtonSecondary;