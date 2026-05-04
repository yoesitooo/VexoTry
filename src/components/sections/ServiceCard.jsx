import React from 'react';
import { motion } from 'framer-motion';

// Componente de Icono SVG Reutilizable
const Icon = ({ path, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d={path} />
  </svg>
);

export const ServiceCard = ({ title, description, iconPath, image, actionLabel, actionUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-cyan-900/20 hover:shadow-2xl"
    >
      {/* Decorative Gradient Glow */}
      <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/30 text-cyan-400 ring-1 ring-white/10 group-hover:ring-cyan-400/50 transition-all duration-300">
            <Icon path={iconPath} className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-50 transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400 font-light">
          {description}
        </p>

        {/* Action Button */}
        <motion.a
          href={actionUrl}
          className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-slate-900/50 py-3 text-sm font-medium text-slate-300 ring-1 ring-white/10 transition-all duration-300 hover:bg-cyan-950/30 hover:text-cyan-300 hover:ring-cyan-500/30 hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">{actionLabel}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export default ServiceCard;