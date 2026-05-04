import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    console.log('Form Data:', data);
  };

  return (
    <section id="contact" className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px]" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://placehold.co/100x100/0f172a/1e293b?text=')] opacity-[0.03] bg-repeat" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50 will-change-transform"
          style={{ transform: "translateZ(0)" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Inicia tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Transformación</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cuéntanos sobre tu proyecto. Nuestros agentes de IA están listos para optimizar tu infraestructura.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Nombre Completo</label>
                <div className="relative group">
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'El nombre es obligatorio' })}
                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                    placeholder="Ej. Juan Pérez"
                  />
                  {errors.name && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-3 top-3 text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Correo Electrónico</label>
                <div className="relative group">
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'El email es obligatorio', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' } })}
                    className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                    placeholder="juan@empresa.com"
                  />
                  {errors.email && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-3 top-3 text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Mensaje</label>
              <div className="relative group">
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'El mensaje es obligatorio' })}
                  className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Describe brevemente tu necesidad de automatización..."
                />
                {errors.message && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-3 top-3 text-red-400"
                  >
                    <AlertCircle className="h-5 w-5" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`
                w-full relative overflow-hidden group
                bg-gradient-to-r from-blue-600 to-cyan-600 
                text-white font-bold py-4 px-6 rounded-xl
                shadow-lg shadow-cyan-900/20
                transition-all duration-300
                flex items-center justify-center gap-3
                ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-cyan-500/25 hover:shadow-lg'}
              `}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Procesando solicitud...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Solicitud</span>
                  </>
                )}
              </span>
            </motion.button>

            {/* Success Message */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">¡Mensaje Enviado!</h4>
                    <p className="text-sm opacity-90">Nos pondremos en contacto contigo en breve.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;