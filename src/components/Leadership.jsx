import { motion } from 'framer-motion';
import { Users, Leaf, HeartHandshake, Sparkles, Trophy } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

const getLeadershipIcon = (type) => {
  switch (type) {
    case 'volunteer':
      return Leaf;
    case 'event':
      return Users;
    case 'leadership':
    default:
      return Trophy;
  }
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 relative z-30">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <span>Beyond Academics</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter italic uppercase">
          LEADERSHIP & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400 not-italic">
            COMMUNITY IMPACT.
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 font-light">
          Demonstrated executive initiative, team orchestration, and grassroots volunteer engagement.
        </p>
      </motion.div>

      {/* Grid of Leadership Roles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadershipData.map((item, idx) => {
          const Icon = getLeadershipIcon(item.iconType);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-orange-500/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Dynamic Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-[60px] group-hover:bg-orange-500/15 transition-all pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-orange-400 group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-orange-400 font-semibold mb-6">
                  {item.organization}
                </p>

                <ul className="space-y-3.5 text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-white/10 font-light">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="relative">
                      <span className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500 relative z-10">
                <span>Verified Activity</span>
                <Sparkles size={14} className="text-orange-400/70" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Leadership;
