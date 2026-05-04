import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

const FeatureIcon = ({ icon: IconComponent, color = "cyan", size = 24 }) => {
  const colorMap = {
    cyan: "text-cyan-400 shadow-cyan-500/50",
    purple: "text-purple-400 shadow-purple-500/50",
    emerald: "text-emerald-400 shadow-emerald-500/50",
    rose: "text-rose-400 shadow-rose-500/50",
    amber: "text-amber-400 shadow-amber-500/50",
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-md shadow-lg shadow-black/20 group overflow-hidden`}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow Effect Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-${color}-500/20 to-transparent`} />
      
      {/* Icon Container */}
      <div className="relative z-10 flex items-center justify-center">
        <IconComponent 
          className={`${colorMap[color]} ${size} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]`} 
          strokeWidth={1.5}
        />
      </div>
    </motion.div>
  );
};

export default FeatureIcon;