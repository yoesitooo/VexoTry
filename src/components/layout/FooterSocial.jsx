import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Github, Mail, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for Tailwind class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Variants for smooth entrance animations
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function FooterSocial() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
      color: 'text-blue-400',
      glow: 'shadow-blue-500/30',
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com',
      icon: Twitter,
      color: 'text-sky-400',
      glow: 'shadow-sky-500/30',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: Instagram,
      color: 'text-pink-400',
      glow: 'shadow-pink-500/30',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: Github,
      color: 'text-zinc-400',
      glow: 'shadow-zinc-500/30',
    },
    {
      name: 'Email',
      url: 'mailto:contacto@vexotry.com',
      icon: Mail,
      color: 'text-cyan-400',
      glow: 'shadow-cyan-500/30',
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex items-center justify-center gap-6 py-8 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20 blur-3xl -z-10" />

      <div className="flex items-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/60 border border-slate-800/50 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]",
              link.color,
              link.glow
            )}
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon */}
            <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-md" />
            
            {/* Tooltip on Hover */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-lg">
              {link.name}
            </span>
          </motion.a>
        ))}

        {/* External Link Indicator (Optional visual cue) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="ml-4 flex items-center gap-2 text-xs text-slate-500"
        >
          <span className="h-px w-8 bg-slate-800" />
          <span className="flex items-center gap-1 text-slate-600">
            <ExternalLink className="h-3 w-3" />
            <span>Síguenos</span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}