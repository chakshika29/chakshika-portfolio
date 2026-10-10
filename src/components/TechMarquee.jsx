import { motion } from 'framer-motion';
import { marqueeTechs } from '../data/portfolioData';

const TechMarquee = () => {
  return (
    <div className="w-full py-8 md:py-10 border-y border-white/5 bg-white/[0.02] relative overflow-hidden flex select-none">
      
      {/* 1. Gradient Overlay (Smooth edge fade) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] pointer-events-none" />

      {/* 2. The Moving Track */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Render twice for seamless loop */}
        {[...marqueeTechs, ...marqueeTechs].map((tech, i) => (
          <div 
            key={i} 
            className="text-4xl md:text-5xl font-black text-white/[0.06] hover:text-emerald-400/30 transition-colors uppercase tracking-tighter italic px-8 flex items-center gap-6"
          >
            <span>{tech}</span>
            <span className="text-emerald-500/20 text-2xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;