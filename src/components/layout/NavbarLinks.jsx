import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const NavbarLinks = () => {
  const links = [
    { name: 'Inicio', href: '#home', icon: null },
    { name: 'Servicios', href: '#services', icon: ArrowUpRight },
    { name: 'Sobre Nosotros', href: '#about', icon: null },
    { name: 'Contacto', href: '#contact', icon: null },
  ];

  return (
    <nav className="hidden md:flex gap-8 items-center">
      {links.map((link, index) => {
        const Icon = link.icon || null;
        
        return (
          <motion.a
            key={index}
            href={link.href}
            className="group relative flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glassmorphism Tooltip / Glow Effect */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs text-cyan-300 whitespace-nowrap z-50 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              {link.name}
            </span>

            <span className="relative z-10 flex items-center gap-2">
              {Icon && <Icon size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />}
              {link.name}
            </span>
            
            {/* Underline Animation */}
            <motion.div
              layoutId="underline"
              className="absolute -bottom-1 left-0 h-[1px] w-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        );
      })}
    </nav>
  );
};

export default NavbarLinks;