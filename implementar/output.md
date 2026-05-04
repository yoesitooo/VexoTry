FILE: src/components/layout/Footer.jsx
```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold tracking-tight text-white">
              VexoTry
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Automatización y agentes de IA para empresas que buscan el futuro.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vexo-accent/20 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vexo-accent/20 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-vexo-accent/20 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Navegación
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Términos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-slate-400">
                hola@vexotry.com
              </li>
              <li className="text-sm text-slate-400">
                +34 912 345 678
              </li>
              <li className="text-sm text-slate-400">
                Madrid, España
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 VexoTry. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium tracking-[0.2em] text-slate-600 uppercase">
                Powered by AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
```