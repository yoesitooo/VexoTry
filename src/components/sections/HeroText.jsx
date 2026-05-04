import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      {/* Título Principal con Gradiente y Animación */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-400 to-slate-900 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
      >
        Automatización Inteligente
        <br />
        <span className="text-slate-500 font-light text-4xl md:text-6xl mt-2 block">
          para el Futuro
        </span>
      </motion.h1>

      {/* Subtítulo Técnico */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="text-lg md:text-xl text-cyan-400/80 font-mono tracking-widest uppercase mb-8 border-b border-cyan-900/50 inline-block pb-2"
      >
        // AI AGENTS & AUTOMATION SOLUTIONS
      </motion.h2>

      {/* Párrafo de Descripción */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
      >
        Transformamos procesos empresariales mediante arquitecturas de agentes de IA
        autónomos. Optimizamos su infraestructura digital con precisión quirúrgica.
      </motion.p>
    </div>
  );
};

export default HeroText;