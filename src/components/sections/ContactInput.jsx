import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

export default function ContactInput({ label, type = "text", placeholder, icon: IconComponent, className = "" }) {
  return (
    <div className={`relative group w-full ${className}`}>
      {/* Contenedor Glassmorphism */}
      <div className="relative flex items-center w-full overflow-hidden rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 transition-all duration-300 group-hover:border-cyan-500/30 group-focus-within:border-cyan-400/50 group-focus-within:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
        
        {/* Icono Interno */}
        {IconComponent && (
          <div className="absolute left-4 flex h-full items-center justify-center text-slate-400 transition-colors duration-300 group-focus-within:text-cyan-400">
            <IconComponent className="h-5 w-5" />
          </div>
        )}

        {/* Input */}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-transparent text-slate-100 placeholder-slate-500 pl-[2.5rem] pr-4 py-4 outline-none transition-all duration-300 ${IconComponent ? 'pl-[2.5rem]' : 'pl-4'} group-focus-within:text-white`}
        />

        {/* Label Flotante (Opcional, implementado para estética premium) */}
        {label && (
          <motion.label
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -12, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-[2.5rem] top-4 text-sm font-medium text-slate-500 transition-all duration-300 group-focus-within:text-cyan-400 group-focus-within:opacity-0 -translate-y-4 pointer-events-none"
          >
            {label}
          </motion.label>
        )}
      </div>
    </div>
  );
}