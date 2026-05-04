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
      {/* Background Ambient Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[100px]" />
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