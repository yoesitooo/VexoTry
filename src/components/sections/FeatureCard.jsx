import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    >
      {/* Decorative Glow Background */}
      <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-lg" />
      </div>

      {/* Icon Container */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-cyan-400 shadow-inner ring-1 ring-white/5 group-hover:bg-cyan-950/30 group-hover:text-cyan-300 group-hover:ring-cyan-500/20 transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>

      {/* Subtle decorative line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-500 to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default FeatureCard;