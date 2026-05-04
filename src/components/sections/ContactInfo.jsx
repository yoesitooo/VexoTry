import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Globe } from 'lucide-react';

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, delay: 0.2 } 
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "contacto@vexotry.com",
      color: "text-cyan-400",
      hoverColor: "text-cyan-300",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 912 345 678",
      color: "text-cyan-400",
      hoverColor: "text-cyan-300",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+34 600 000 000",
      color: "text-emerald-400",
      hoverColor: "text-emerald-300",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      icon: MapPin,
      label: "Oficina",
      value: "Madrid, España",
      color: "text-slate-400",
      hoverColor: "text-slate-300",
      bg: "bg-slate-800/30",
      border: "border-slate-700/30"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-4xl mx-auto px-6 py-12"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.8))]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Primary Contact */}
        <div className="space-y-6">
          <motion.div 
            variants={itemVariants}
            className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/50"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              Información de Contacto
            </h3>
            
            <div className="space-y-4">
              {contactItems.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Map / Visual Context */}
        <motion.div 
          variants={itemVariants}
          className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-slate-800 group"
        >
          {/* Placeholder for Map/Visual */}
          <img 
            src="https://placehold.co/800x600/0f172a/1e293b?text=Mapa+de+Ubicacion" 
            alt="Mapa de ubicación" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-100">Visítanos</h4>
                <p className="text-sm text-slate-400">Calle Innovación, 123, Madrid</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactInfo;