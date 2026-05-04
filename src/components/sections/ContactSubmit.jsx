import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, X } from 'lucide-react';

const ContactSubmit = ({ onSubmit, className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccess(false);

    // Simulación de llamada a API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (onSubmit) onSubmit();
      setSuccess(true);
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-md mx-auto p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/100x100/1e293b/1e293b?text=+')] opacity-[0.03] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!success && !error && (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-slate-200">Contactar</h3>
              <span className="text-xs text-slate-500 font-mono">v1.0</span>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                group relative w-full py-4 px-6 rounded-xl font-medium text-sm tracking-wide transition-all duration-300
                flex items-center justify-center gap-3 overflow-hidden
                ${isSubmitting 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] active:scale-[0.98]'
                }
              `}
            >
              {/* Loading State */}
              <AnimatePresence mode="wait">
                {isSubmitting && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  </motion.div>
                )}
                
                {/* Success State */}
                {success && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <Check className="w-5 h-5 text-green-300" />
                  </motion.div>
                )}

                {/* Error State */}
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <X className="w-5 h-5 text-red-400" />
                  </motion.div>
                )}

                {/* Default State */}
                {!isSubmitting && !success && !error && (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <span>ENVIAR MENSAJE</span>
                    <motion.div
                      className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    </motion.div>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.form>
        )}

        {/* Success Message Overlay */}
        {success && (
          <motion.div
            key="success-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4 ring-1 ring-green-500/20">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
            <p className="text-slate-400">Nos pondremos en contacto contigo en breve.</p>
            <button
              onClick={() => {
                setSuccess(false);
                setError(false);
              }}
              className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        )}

        {/* Error Message Overlay */}
        {error && (
          <motion.div
            key="error-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4 ring-1 ring-red-500/20">
              <X className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Error de Conexión</h4>
            <p className="text-slate-400">Por favor, intenta nuevamente.</p>
            <button
              onClick={() => setError(false)}
              className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Reintentar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactSubmit;