import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  subtitle,
  date,
  description, 
  tags, 
  color = "#22c55e", 
  image, 
  repoLink, 
  demoLink,
  metrics = []
}) => {
  return (
    <div className="w-full flex items-center justify-center py-6 px-2">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col lg:flex-row relative min-h-[520px] w-full max-w-[1150px] rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-white/20 transition-all duration-500"
      >
        
        {/* --- LEFT PANEL: INFO --- */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between relative z-10 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0a0a0a]">
          
          <div>
            {/* Header / Date */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">
                {date}
              </span>
              <div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}
              />
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
                {subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 font-light">
              {description}
            </p>

            {/* Metrics Chips */}
            {metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2.5 mb-6 py-3 border-y border-white/5">
                {metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-sm md:text-base font-black text-white font-mono" style={{ color: color }}>
                      {m.value}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-gray-300 uppercase tracking-wider hover:border-white/25 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/5">
            {repoLink && (
              <a 
                href={repoLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer group/btn"
              >
                <Github size={16} className="group-hover/btn:scale-110 transition-transform" /> 
                <span>Source Code</span>
              </a>
            )}
            
            {demoLink && demoLink !== '#' && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:scale-105 transition-transform"
                style={{ color: color }}
              >
                <ExternalLink size={16} /> 
                <span>Live Deployment</span>
              </a>
            )}
          </div>
        </div>

        {/* --- RIGHT PANEL: PREVIEW VISUAL --- */}
        <div className="w-full lg:w-1/2 min-h-[320px] lg:min-h-full bg-gradient-to-br from-black to-[#060606] relative overflow-hidden flex items-center justify-center p-6 md:p-10 group-hover:bg-[#0c0c0c] transition-colors duration-500">
          
          {/* Dynamic Background Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(${color} 1.5px, transparent 1.5px)`, 
              backgroundSize: '24px 24px' 
            }}
          />
          
          {image ? (
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:scale-105 group-hover:-rotate-0.5 transition-all duration-500">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto max-h-[380px] object-cover object-top" 
              />
            </div>
          ) : (
            <div className="w-full max-w-sm p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center">
              <Sparkles size={48} style={{ color }} className="mb-4 animate-pulse" />
              <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
              <p className="text-gray-400 text-xs font-mono">Full-Stack Application</p>
            </div>
          )}

        </div>

      </motion.div>
    </div>
  );
};

export default ProjectCard;