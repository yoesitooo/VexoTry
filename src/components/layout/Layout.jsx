import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { cn } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Layout Component
 * 
 * @description
 * Principal contenedor de la aplicación con animaciones de entrada,
 * efectos de fondo (Grid Dark Luxury) y estructura semántica.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  // Variants para animaciones de entrada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden"
    >
      {/* 
        BACKGROUND GRID EFFECT 
        Implementación del patrón de fondo "Dark Luxury" con máscara radial
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <motion.main
        variants={itemVariants}
        className="relative z-10 flex flex-col min-h-screen"
      >
        <div className="flex-grow container mx-auto px-6 py-12 md:py-20">
          {children}
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        variants={itemVariants}
        className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md"
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
}