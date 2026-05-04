import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Services = () => {
  return (
    <section id="services" className="py-24 bg-vexo-dark/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vexo-black via-vexo-dark/50 to-vexo-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Arquitectura de <br />
              <span className="text-vexo-accent">Alta Disponibilidad</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              No solo implementamos software, construimos ecosistemas digitales. 
              Nuestras soluciones escalan con tu negocio, integrándose con tu CRM, ERP y herramientas actuales sin fricción.
            </p>
            
            <div className="space-y-6">
              {[
                "Integración API Nativa",
                "Escalabilidad Cloud-Native",
                "Soporte 24/7 con IA",
                "Auditoría de Seguridad Semestral"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-vexo-accent/30 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-vexo-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-vexo-accent/20 rounded-3xl blur-2xl opacity-30" />
            <div className="relative glass-panel p-2">
              <img 
                src="https://placehold.co/800x600/0f172a/3b82f6?text=Dashboard+Analytics" 
                alt="Dashboard Analytics" 
                className="rounded-2xl w-full shadow-2xl"
              />
              
              {/* Floating Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-6 bg-vexo-black border border-vexo-accent/30 rounded-xl shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">+40%</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Eficiencia</p>
                    <p className="text-white font-bold">Incrementada</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services