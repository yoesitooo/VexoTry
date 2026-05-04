import { motion } from 'framer-motion'
import { Bot, Shield, BarChart3, Cpu } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: "Agentes Autónomos",
    desc: "IA que no solo responde, sino que ejecuta tareas complejas en múltiples plataformas simultáneamente."
  },
  {
    icon: Shield,
    title: "Seguridad Enterprise",
    desc: "Arquitectura blindada con encriptación de extremo a extremo para proteger tus datos sensibles."
  },
  {
    icon: BarChart3,
    title: "Optimización Predictiva",
    desc: "Algoritmos que anticipan cuellos de botella antes de que ocurran, ahorrando hasta un 40% en costos."
  },
  {
    icon: Cpu,
    title: "Procesamiento Neural",
    desc: "Modelos de lenguaje de última generación entrenados específicamente para la lógica de tu industria."
  }
]

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nuestros Pilares</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tecnología de élite diseñada para empresas que no se conforman con el estado actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group cursor-default"
            >
              <div className="w-12 h-12 bg-vexo-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-vexo-accent/20 transition-colors">
                <feature.icon className="text-vexo-accent group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-vexo-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features