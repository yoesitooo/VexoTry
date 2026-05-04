import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for Tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Navbar Component
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll Spy Logic - Optimized
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          const sections = document.querySelectorAll('section[id]');
          let current = '';
          
          sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              current = sectionId;
            }
          });
          
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Capacidades', href: '#solutions' },
    { name: 'Tecnología', href: '#technology' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop & Mobile Floating Island */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.1 
          }}
          className={cn(
            "relative flex items-center justify-between h-14 px-6 transition-all duration-500 ease-in-out will-change-[width,max-width,border-radius]",
            "bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
            isScrolled ? "w-full max-w-2xl rounded-full" : "w-full max-w-5xl rounded-3xl"
          )}
          style={{ transform: "translateZ(0)" }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300">
              <Zap className="text-white w-4 h-4 fill-current" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
              Vexo<span className="text-cyan-400">Try</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs font-medium uppercase tracking-wider transition-colors duration-300 px-2 py-1",
                  activeSection === link.href.substring(1)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-white text-slate-950 text-xs font-bold rounded-full hover:bg-cyan-50 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Demo <ChevronRight size={14} />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-1.5 hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center w-full max-w-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-4 rounded-full bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all"
              >
                Agendar Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;