import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <span>Academic Background</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter italic uppercase">
          ACADEMIC <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 not-italic">
            FOUNDATION & RIGOR.
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 font-light">
          Formal engineering education providing deep theoretical principles and software development practices.
        </p>
      </motion.div>

      {/* Education Cards */}
      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/40 transition-all duration-500 shadow-2xl overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/15 transition-all pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-cyan-500/15 border border-cyan-500/30 rounded-2xl text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {edu.institution}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="text-lg font-semibold text-cyan-300">
                      {edu.degree}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm font-medium text-gray-300">
                      {edu.specialization}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest font-bold flex items-center gap-2">
                  <Calendar size={13} /> {edu.period}
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl font-light mb-8 relative z-10">
              {edu.description}
            </p>

            <div className="relative z-10">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <BookOpen size={14} className="text-cyan-400" /> Key Curriculum & Specializations
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {edu.coursework.map((course, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all flex items-center gap-2.5 text-xs text-gray-200"
                  >
                    <CheckCircle size={14} className="text-cyan-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
