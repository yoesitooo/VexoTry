import React from 'react';
import { motion } from 'framer-motion';

// Componente de Icono SVG Reutilizable
const FeatureIcon = ({ name, className }) => {
  const icons = {
    automation: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    speed: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
    scale: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3v19M8 21h8M12 17a5 5 0 0 0 5-5c0-2.486-1.26-4.643-3.135-5.259A4.987 4.987 0 0 0 12 6c-.396 0-.777.068-1.12.191C8.96 6.357 7.7 8.514 7.7 11a5 5 0 0 0 5 5Z" />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    )
  };

  return icons[name] || icons.ai;
};

const Features = () => {
  const features = [
    {
      title: "Automatización de Procesos",
      description: "Eliminamos la redundancia operativa. Nuestros sistemas gestionan tareas repetitivas con una precisión quirúrgica, liberando a su equipo para la innovación.",
      icon: "automation"
    },
    {
      title: "Agentes de IA Autónomos",
      description: "No solo herramientas, sino colaboradores digitales. Agentes que aprenden, se adaptan y ejecutan estrategias complejas 24/7 sin supervisión constante.",
      icon: "ai"
    },
    {
      title: "Velocidad de Ejecución",
      description: "Acelere su infraestructura digital. Reducimos los tiempos de respuesta y ejecución de tareas críticas en un 400% mediante arquitecturas optimizadas.",
      icon: "speed"
    },
    {
      title: "Seguridad de Grado Militar",
      description: "Protección de datos encriptada y monitoreo en tiempo real. Su información está blindada contra amenazas externas con protocolos de seguridad avanzados.",
      icon: "security"
    },
    {
      title: "Escalabilidad Infinita",
      description: "Su negocio crece sin límites técnicos. Nuestra arquitectura soporta picos de demanda masivos sin degradación del rendimiento ni interrupciones.",
      icon: "scale"
    },
    {
      title: "ROI Medible",
      description: "Transformamos datos en decisiones. Visualice el impacto directo de la automatización en sus métricas clave de rendimiento y rentabilidad.",
      icon: "growth"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="solutions" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Fondo de malla sutil */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase"
          >
            Capacidades
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-display"
          >
            Arquitectura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Elite</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Soluciones diseñadas para empresas que no aceptan menos que la perfección operativa. 
            Potencia y elegancia en cada línea de código.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-950/60 backdrop-blur-lg border border-white/5 p-10 rounded-[2.5rem] hover:border-cyan-500/30 transition-all duration-500 shadow-xl hover:shadow-premium overflow-hidden will-change-transform"
            >
              {/* Efecto de brillo dinámico */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex p-4 rounded-2xl bg-white/5 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 shadow-xl transition-all duration-500">
                  <FeatureIcon name={feature.icon} className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>

              {/* Decoración sutil de borde inferior */}
              <div className="absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;