import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export const ServiceImage = ({ src, alt, className, delay = 0 }: ServiceImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl group"
    >
      {/* Image Container with Glassmorphism Overlay */}
      <div className="relative h-full w-full">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay for Dark Luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
        
        {/* Decorative Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Floating Glows */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
    </motion.div>
  );
};