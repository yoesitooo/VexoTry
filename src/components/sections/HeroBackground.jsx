import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HeroBackground = () => {
  const controls = useAnimation();

  // Variación aleatoria para evitar que todos los elementos se muevan igual
  const randomDelay = () => Math.random() * 10;

  useEffect(() => {
    // Animación continua de los gradientes de fondo
    const interval = setInterval(async () => {
      await controls.start({
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">
      {/* Capa de Ruido (Noise Texture) para textura premium */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Grid Sutil Tecnológico */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px),
                            linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Blobs de Luz Animados (Glassmorphism Glow) */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-cyan-500/20 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[100px]"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: randomDelay()
        }}
      />

      <motion.div
        className="absolute -bottom-[10%] left-[20%] w-[30vw] h-[30vw] bg-indigo-500/20 rounded-full blur-[80px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: randomDelay() * 2
        }}
      />

      {/* Partículas Flotantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -100, null],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Overlay Oscuro para legibilidad */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90 pointer-events-none" />
      
      {/* Overlay de degradado lateral para enfoque */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/50 pointer-events-none" />
    </div>
  );
};

export default HeroBackground;