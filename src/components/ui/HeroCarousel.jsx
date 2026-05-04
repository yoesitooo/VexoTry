import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Cerebro Digital",
    image: "/images/cerebro.jpg",
  },
  {
    id: 2,
    title: "Flujo de Datos",
    image: "/images/flujo-de-datos.jpg",
  },
  {
    id: 3,
    title: "Terminal Cuántica",
    image: "/images/terminal-cuantica.jpg",
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Slide Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 will-change-opacity will-change-transform"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
          {/* Subtle overlay to blend with the UI */}
          <div className="absolute inset-0 bg-[#030712]/30 rounded-[2.5rem]" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Info Indicator */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-950/60 border border-white/10 backdrop-blur-md z-30 shadow-lg">
        <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">
          Módulo: {slides[current].title}
        </span>
      </div>
    </div>
  );
};

export default HeroCarousel;
