import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Shield, 
  Activity, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Check, 
  Phone, 
  Code2,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  // --- PARALLAX LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // --- BACKGROUND PARTICLES ---
  const particles = Array.from({ length: 24 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1.2,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 5,
  }));

  // --- TERMINAL TYPING LOGIC ---
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> INITIALIZING... CHAKSHIKA_PROFILE... VIT_BHOPAL_2026... LLM_PIPELINES_ONLINE... ";
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 130);
    return () => clearInterval(typing);
  }, []);

  // --- COPY LOGIC ---
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24 md:py-28 overflow-hidden bg-[#030014]"
    >
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }} 
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} 
          className="absolute bottom-[-20%] right-[-10%] w-[650px] h-[650px] bg-emerald-600/15 rounded-full blur-[140px]" 
        />
        
        {particles.map((p) => (
          <motion.div 
            key={p.id} 
            initial={{ top: "100%", left: `${p.x}%`, opacity: 0 }} 
            animate={{ top: "-10%", opacity: [0, 0.8, 0] }} 
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }} 
            className="absolute bg-white/25 rounded-full" 
            style={{ width: p.size, height: p.size }} 
          />
        ))}
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10" />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10 pt-6">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.15)]"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[11px] font-mono text-green-400 uppercase tracking-[0.2em] font-semibold">
                {personalInfo.openToWorkBadge}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.8rem] font-black leading-[0.85] tracking-tighter text-white uppercase italic"
            >
              CHAKSHIKA <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 not-italic font-black">
                PAWAR
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.25, duration: 0.7 }} 
            className="space-y-6 border-l-2 border-white/10 pl-6 md:pl-8"
          >
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed font-light">
              I am a <span className="text-white font-semibold">Full Stack Engineer & LLM Specialist</span> building responsive, data-driven web applications and scalable artificial intelligence pipelines.
            </p>
            
            <div className="flex flex-wrap gap-2.5">
              {[
                'Full Stack Engineer', 
                'React.js & Node.js', 
                'LLM & AI Pipelines', 
                'Python & Flask', 
                'VIT Bhopal 2026'
              ].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300 uppercase tracking-wider hover:border-green-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }} 
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a 
              href="#projects" 
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-extrabold text-xs tracking-widest uppercase rounded-2xl transition-all hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]"
            >
              EXPLORE WORKS <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              GET IN TOUCH
            </a>
          </motion.div>

        </div>

        {/* RIGHT: THE COMMAND HUB CARD */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
            className="relative w-full max-w-[420px] aspect-[4/5] group"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 rounded-[3.5rem] blur-3xl transform translate-z-[-40px]" />
            
            <div className="relative h-full rounded-[3rem] bg-[#0a0a0a]/90 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.7)] backdrop-blur-3xl overflow-hidden p-7 flex flex-col justify-between">
              
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                    <Terminal size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">ID: SWE-PROFILE</h4>
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Active Candidate
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <Activity size={12} className="text-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Online</span>
                </div>
              </div>

              {/* Photo Area */}
              <div className="flex flex-col items-center relative z-20 my-2">
                <div className="relative mb-4">
                  {/* Outer Orbital Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }} 
                    className="absolute -inset-5 border border-white/10 rounded-full" 
                  />
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }} 
                    className="absolute -inset-2.5 border border-dashed border-emerald-500/30 rounded-full" 
                  />
                  
                  <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
                    <img 
                      src={personalInfo.avatar} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <div className="absolute -bottom-2 -right-2 p-2 bg-[#0a0a0a] border border-white/15 rounded-xl shadow-xl flex items-center gap-1.5">
                    <Sparkles size={14} className="text-yellow-400 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase italic text-center">
                  {personalInfo.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mt-1">
                  VIT Bhopal • Batch of 2026
                </p>
              </div>

              {/* === COMMAND GRID === */}
              <div className="grid grid-cols-2 gap-2.5 my-1">
                {/* Resume */}
                <a 
                  href={personalInfo.resume} 
                  target="_blank" 
                  rel="noreferrer"
                  download="Chakshika_Pawar_Resume.pdf"
                  className="group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <div className="p-1.5 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300">
                    <FileText size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-400 uppercase">Artifact</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Resume</span>
                  </div>
                </a>
                
                {/* Email Copy */}
                <button 
                  onClick={handleCopy} 
                  className="group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2.5 cursor-pointer text-left"
                >
                  <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300">
                    {copied ? <Check size={14} className="text-green-400" /> : <Mail size={14} />}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-400 uppercase">Contact</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {copied ? "Copied!" : "Email"}
                    </span>
                  </div>
                </button>

                {/* GitHub */}
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2.5"
                >
                  <div className="p-1.5 bg-gray-500/20 rounded-lg text-gray-300 group-hover:text-white">
                    <Github size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-400 uppercase">Repo</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">GitHub</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2.5"
                >
                  <div className="p-1.5 bg-blue-600/20 rounded-lg text-blue-400 group-hover:text-blue-300">
                    <Linkedin size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-400 uppercase">Connect</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">LinkedIn</span>
                  </div>
                </a>

                {/* LeetCode */}
                <a 
                  href={personalInfo.leetcode} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2.5"
                >
                  <div className="p-1.5 bg-yellow-500/20 rounded-lg text-yellow-400 group-hover:text-yellow-300">
                    <Code2 size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-400 uppercase">Solve</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">LeetCode</span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href={`tel:${personalInfo.rawPhone}`} 
                  className="group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-2.5"
                >
                  <div className="p-1.5 bg-green-500/20 rounded-lg text-green-400 group-hover:text-green-300">
                    <Phone size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono text-gray-400 uppercase">Direct</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Call</span>
                  </div>
                </a>
              </div>

              {/* Terminal Footer */}
              <div className="mt-2 pt-3 border-t border-white/5">
                <div className="p-2.5 bg-black/60 rounded-lg border border-white/5 font-mono text-[9px] text-emerald-400/90 overflow-hidden whitespace-nowrap">
                  {terminalText}<span className="animate-pulse">_</span>
                </div>
              </div>

            </div>

            {/* Floating Core Shield Tag */}
            <motion.div 
              style={{ transform: "translateZ(50px)" }} 
              className="absolute -bottom-3 -right-3 p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl hidden md:block group-hover:-translate-y-1.5 transition-transform"
            >
              <div className="flex items-center gap-2 text-white">
                <Shield size={14} className="text-emerald-400 shadow-[0_0_10px_#10b981]" />
                <span className="text-[9px] font-mono tracking-widest uppercase font-black italic">
                  Verified_LLM & FullStack
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;