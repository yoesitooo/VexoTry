import React, { useRef, useEffect } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

const ServiceImage = ({ src, alt, className = "", width = "100%", height = "auto" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Spring physics for smooth reveal
  const scaleX = useSpring(0, {
    type: "tween",
    duration: 1.2,
    delay: isInView ? 0.1 : 0,
    bounce: 0.2
  });
  const scaleY = useSpring(0, {
    type: "tween",
    duration: 1.2,
    delay: isInView ? 0.1 : 0,
    bounce: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-md shadow-2xl ${className}`}
      style={{ width, height }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        loading="lazy"
      />
      
      {/* Decorative overlay for 'Dark Luxury' feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }} 
      />
    </motion.div>
  );
};

export default ServiceImage;