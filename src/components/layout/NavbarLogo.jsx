import { motion } from 'framer-motion';

const NavbarLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center gap-3 group cursor-pointer"
    >
      {/* Glow Effect Container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      {/* Logo Text */}
      <div className="relative z-10 flex items-center gap-2">
        <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          VEXO
        </span>
        <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          TRY
        </span>
      </div>

      {/* Subtitle / Tagline (Optional but adds premium feel) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 hidden sm:block"
      >
        <span className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
          Automation & AI
        </span>
      </motion.div>
    </motion.div>
  );
};

export default NavbarLogo;