import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Cerebro Digital",
    video: "https://cdn.pixabay.com/video/2022/10/24/136195-763462967_large.mp4", // Loop 1
    transition: "https://cdn.pixabay.com/video/2021/04/12/70881-537443831_large.mp4" // Transition 1-2
  },
  {
    id: 2,
    title: "Terminal Cuántica",
    video: "https://cdn.pixabay.com/video/2023/10/20/185856-876774641_large.mp4", // Loop 2
    transition: "https://cdn.pixabay.com/video/2021/04/12/70881-537443831_large.mp4" // Transition 2-1
  }
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef(null);
  const transitionRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Play transition video
    if (transitionRef.current) {
      transitionRef.current.currentTime = 0;
      transitionRef.current.play();
    }

    // Switch slide after transition time (e.g., 2 seconds)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 2000);
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Loop Video */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 will-change-opacity"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-[2.5rem] will-change-transform"
            src={slides[current].video}
          />
        </motion.div>
      </AnimatePresence>

      {/* Transition Video Overlay */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-300 will-change-opacity ${isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <video
          ref={transitionRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover rounded-[2.5rem] will-change-transform"
          src={slides[current].transition}
        />
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-30">
        <button 
          onClick={nextSlide}
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
      <div className="absolute top-8 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-950/40 border border-white/10 backdrop-blur-md z-30">
        <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">
          Modulo: {slides[current].title}
        </span>
      </div>
    </div>
  );
};

export default HeroCarousel;
