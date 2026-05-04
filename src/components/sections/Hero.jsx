import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Cpu } from 'lucide-react';
import HeroCarousel from '../ui/HeroCarousel';

const Hero = () => {
  // Variants para animaciones de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] text-white">
      {/* Local AI Video Background */}
      <div className="absolute inset-0 z-0 bg-[#030712]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50 will-change-transform"
        >
          <source src="/videos/ai-loop.mp4" type="video/mp4" />
        </video>
        {/* Overlays for depth and glassmorphism */}
        <div className="absolute inset-0 bg-[#030712]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/20 via-transparent to-[#030712]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
        
        {/* Ambient Lights - Optimized with radial gradients instead of heavy blur */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 70%)"
          }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full mix-blend-screen pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0) 70%)"
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full mix-blend-screen pointer-events-none" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Columna Izquierda: Copywriting */}
        <motion.div variants={itemVariants} className="space-y-8 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase">
              El Futuro de la Automatización
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] font-display">
            Automatiza el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Imposible.
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Implementamos agentes de IA y flujos de automatización que transforman tu operativa. 
            Deja de perder tiempo en tareas repetitivas y escala tu negocio con precisión.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.25)] transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-slate-900/30 border border-white/10 text-white font-medium rounded-full hover:bg-slate-800/50 transition-all backdrop-blur-sm"
            >
              Ver Casos de Éxito
            </motion.button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-white/5">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030712] bg-slate-800 overflow-hidden">
                  <img src={`https://placehold.co/100x100/1e293b/cbd5e1?text=U${i}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-400 tracking-wide uppercase">
              <span className="text-white font-bold">+200</span> empresas escaladas
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative flex justify-center items-center h-full min-h-[500px]"
        >
          <div className="relative w-full max-w-lg aspect-square bg-slate-950/40 backdrop-blur-md border border-white/5 rounded-[3rem] shadow-premium overflow-hidden group will-change-transform" style={{ transform: "translateZ(0)" }}>
            <HeroCarousel />
            
            {/* Overlay de datos flotantes (Optimizado) */}
            <div className="absolute bottom-8 left-8 right-8 bg-slate-950/60 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 flex flex-col justify-between shadow-2xl z-20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-400">
                    <Zap size={18} />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">Red Neuronal</span>
                </div>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter">+340%</span>
              </div>
              
              <div className="space-y-4">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" 
                  />
                </div>
              </div>
            </div>

            {/* Luces decorativas simplificadas para performance */}
            <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0) 70%)" }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;