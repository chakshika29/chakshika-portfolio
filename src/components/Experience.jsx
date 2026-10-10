import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Bot, Sparkles, Database, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <span>Professional Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter italic uppercase">
          INDUSTRY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 not-italic">
            CONTRIBUTIONS & IMPACT.
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 font-light">
          Real-world engineering experience in modern artificial intelligence, evaluating and refining LLM data systems.
        </p>
      </motion.div>

      {/* Experience Timeline Card */}
      <div className="space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/40 transition-all duration-500 shadow-2xl overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/15 transition-all pointer-events-none" />
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-purple-500/15 border border-purple-500/30 rounded-2xl text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Bot size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                      {exp.company}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <Calendar size={13} className="text-purple-400" /> {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest font-bold">
                {exp.statusBadge}
              </div>
            </div>

            {/* Bullets & Achievements */}
            <ul className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed relative z-10 pl-6 border-l-2 border-white/10 font-light">
              {exp.highlights.map((bullet, i) => (
                <li key={i} className="relative group/bullet">
                  <span className="absolute -left-[31px] top-2.5 w-2.5 h-2.5 rounded-full bg-purple-400 border-2 border-[#0a0a0a] shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2 relative z-10">
              <span className="text-xs font-mono text-gray-500 mr-2 uppercase tracking-wider">Core Tools:</span>
              {exp.tech.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
