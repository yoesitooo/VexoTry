import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Services from './components/sections/Services';
import ContactForm from './components/sections/ContactForm';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Reveal from './components/ui/Reveal';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Background Ambient Effects - Optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(37,99,235,0) 70%)" }}
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(6,182,212,0) 70%)" }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col min-h-screen"
      >
        <Navbar />

        <main className="flex-grow pt-20">
          <Hero />
          <Reveal><Features /></Reveal>
          <Reveal><Services /></Reveal>
          <Reveal><ContactForm /></Reveal>
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;