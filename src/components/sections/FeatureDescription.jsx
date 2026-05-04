import React from 'react';
import { motion } from 'framer-motion';

const FeatureDescription = ({ description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-3"
    >
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>

      {/* Subtle decorative line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-500 to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default FeatureDescription;