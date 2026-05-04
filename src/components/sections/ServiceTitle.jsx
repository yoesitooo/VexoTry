import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServiceTitle({ title, subtitle, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center px-4 py-12 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-slate-950/80 to-slate-950 pointer-events-none" />
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Icon Container */}
      <div className="relative z-10 mb-6 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] group">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        >
          <Icon className="w-12 h-12" strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* Main Title with Gradient */}
      <h2 className="relative z-10 text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(165,180,252,0.3)]">
        {title}
      </h2>

      {/* Subtitle with Glassmorphism */}
      <p className="relative z-10 mt-6 max-w-2xl text-lg md:text-xl text-slate-400 font-light leading-relaxed backdrop-blur-[2px]">
        {subtitle}
      </p>

      {/* Floating Particles (Decorative) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
    </motion.div>
  );
}