import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Send } from 'lucide-react'
import * as z from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "La empresa es obligatoria"),
  message: z.string().min(20, "El mensaje debe ser más largo")
})

const Contact = () => {
  const [status, setStatus] = useState('idle')
  
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: ''
    }
  })

  const onSubmit = (data) => {
    setStatus('submitting')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-vexo-accent/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Hablemos de tu Proyecto</h2>
              <p className="text-slate-400 mb-8">
                Déjanos tus datos y un especialista de VexoTry te contactará en menos de 2 horas para diseñar tu solución personalizada.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail size={18} className="text-vexo-accent" />
                  </div>
                  <span>contacto@vexotry.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Send size={18} className="text-vexo-accent" />
                  </div>
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 uppercase">Nombre</label>
                  <input 
                    {...form.register('name')}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-vexo-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 uppercase">Empresa</label>
                  <input 
                    {...form.register('company')}
                    placeholder="Nombre de tu empresa"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-vexo-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400 uppercase">Email Corporativo</label>
                <input 
                  {...form.register('email')}
                  type="email"
                  placeholder="nombre@empresa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-vexo-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400 uppercase">Mensaje</label>
                <textarea 
                  {...form.register('message')}
                  rows={4}
                  placeholder="Cuéntanos sobre tus necesidades..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-vexo-accent transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                    : 'bg-vexo-accent hover:bg-vexo-neon shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                }`}
              >
                {status === 'submitting' ? (
                  <span className="animate-pulse">Procesando...</span>
                ) : status === 'success' ? (
                  <span>¡Mensaje Enviado!</span>
                ) : (
                  <>
                    Enviar Solicitud <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact