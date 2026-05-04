import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Database, 
  Layers, 
  Code, 
  Bot, 
  Smartphone, 
  Lock, 
  ArrowRight 
} from 'lucide-react';

// Variants para animaciones de entrada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentes Autónomos",
      description: "Implementación de agentes de IA que operan 24/7, gestionando flujos de trabajo complejos sin supervisión humana constante.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización de Procesos",
      description: "Optimizamos sus operaciones repetitivas mediante RPA avanzado, liberando a su equipo para tareas de alto valor.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integración de Datos",
      description: "Conectamos sus silos de información. Unificamos CRM, ERP y herramientas de marketing en un ecosistema coherente.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ciberseguridad IA",
      description: "Sistemas de detección de amenazas proactivos que aprenden y se adaptan a las nuevas vulnerabilidades en tiempo real.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Soporte Multilingüe",
      description: "Chatbots y asistentes virtuales que dominan más de 20 idiomas, escalando su atención al cliente globalmente.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análisis Predictivo",
      description: "Modelos de machine learning que anticipan tendencias de mercado y comportamientos de clientes antes de que ocurran.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    }
  ];

  return (
    <section id="technology" className="relative py-32 overflow-hidden bg-[#030712]">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6"
          >
            Soluciones de Élite
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight font-display"
          >
            Arquitecturas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">Inteligencia</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Transformamos la complejidad técnica en eficiencia operativa de alto nivel. 
            Nuestros servicios están diseñados para empresas que buscan liderar el cambio tecnológico.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative p-10 rounded-[2.5rem] bg-slate-950/40 backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-all duration-700 shadow-premium overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
              
              <div className="relative z-10">
                <div className={`mb-8 p-4 rounded-2xl inline-flex bg-white/5 ${service.color} group-hover:bg-white group-hover:text-slate-950 transition-all duration-500 shadow-2xl`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-500 text-base">
                  {service.description}
                </p>
              </div>

              {/* Icono de flecha sutil en la esquina */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-cyan-400">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-slate-900/30 border border-white/10 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer group backdrop-blur-xl"
          >
            <span className="text-white font-semibold text-lg">Explorar todas las soluciones</span>
            <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;