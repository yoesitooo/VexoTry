import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vexo-accent/10 border border-vexo-accent/20 text-vexo-accent text-xs font-medium mb-8 backdrop-blur-sm"
        >
          <Zap size={14} className="animate-pulse" />
          <span>El Futuro de la Automatización</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-[1.1]"
        >
          Automatización <br />
          <span className="text-gradient">Inteligente & Premium</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformamos procesos empresariales con agentes de IA avanzados. 
          Optimizamos, automatizamos y escalamos tu negocio con tecnología de vanguardia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="group relative px-8 py-4 bg-vexo-accent text-white font-semibold rounded-full overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Comenzar Ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="#features" className="px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all">
            Ver Soluciones
          </a>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/050505/101010?text=Grid+Pattern')] opacity-[0.03] pointer-events-none z-0" />
    </section>
  )
}

export default Hero