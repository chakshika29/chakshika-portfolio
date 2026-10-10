import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Award, CheckCircle2, Cpu, Terminal, Cloud, Code2, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

// Map icon based on certification issuer or title
const getCertIcon = (issuer) => {
  switch (issuer.toLowerCase()) {
    case 'ibm':
      return Cpu;
    case 'kaggle':
      return Terminal;
    case 'amazon web services (aws)':
    case 'aws':
      return Cloud;
    case 'jpmorganchase':
      return Code2;
    default:
      return Award;
  }
};

const CertCard = ({ i, title, issuer, desc, date, color, link, progress, range, targetScale }) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = getCertIcon(issuer);

  return (
    <div ref={container} className="h-[38vh] min-h-[260px] flex items-center justify-center sticky top-0 px-4">
      <motion.div 
        style={{ scale, top: `calc(12vh + ${i * 24}px)` }} 
        className="relative flex flex-col w-full max-w-[850px] p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group hover:border-white/20 transition-all duration-300 z-10"
      >
        {/* Dynamic Gradient Top Border */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`} />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white">
              <Icon size={26} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{title}</h3>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">{issuer}</p>
            </div>
          </div>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer shrink-0"
            >
              <ExternalLink size={13} /> Verify
            </a>
          )}
        </div>

        <p className="text-base text-gray-300 font-light leading-relaxed mb-6">
          {desc}
        </p>

        <div className="mt-auto flex justify-between items-center pt-3 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <CheckCircle2 size={14} /> Verified Credential
          </div>
          <span className="text-xs font-mono text-gray-500">{date}</span>
        </div>

      </motion.div>
    </div>
  );
};

const Certifications = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="certifications" ref={container} className="relative pb-56 scroll-mt-20">
      {/* Background Connector Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10 pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <span>Qualifications</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic uppercase">
          CERTIFIED EXPERTISE.
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-3 font-light">
          Industry-recognized certifications in Artificial Intelligence, Python, Cloud Architecture, and Software Engineering.
        </p>
      </div>

      {certificationsData.map((cert, i) => {
        const targetScale = 1 - ((certificationsData.length - i) * 0.04);
        return (
          <CertCard 
            key={i} 
            i={i} 
            {...cert} 
            progress={scrollYProgress} 
            range={[i * (1 / certificationsData.length), 1]} 
            targetScale={targetScale} 
          />
        );
      })}

      {/* Blending Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Certifications;
