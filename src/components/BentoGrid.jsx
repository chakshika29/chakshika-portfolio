import { 
  Globe, 
  Code2, 
  Zap, 
  Terminal, 
  Database, 
  Layout, 
  Server, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

const BentoGrid = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter italic uppercase">
          ENGINEERING SCALABLE SYSTEMS, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 not-italic">
            POWERED BY MODERN AI.
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 font-light">
          A full-stack software engineer with hands-on expertise in distributed web applications, machine learning integration, and LLM dataset pipelines.
        </p>
      </motion.div>

      {/* 3-COLUMN BENTO GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
      >
        
        {/* 1. FULL STACK (Dominant Card - 2 Columns) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.015 }}
          className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 group hover:border-emerald-500/40 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
            <Layout size={220} className="text-emerald-500" />
          </div>
          
          <div className="z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
                <Globe className="text-emerald-400" size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Full Stack Development</h3>
                <p className="text-xs font-mono text-emerald-400">MERN Stack • Next.js • REST APIs</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-light mb-6">
              I build end-to-end web applications with responsive <strong>React.js</strong> and <strong>Next.js</strong> frontends, paired with robust <strong>Node.js</strong> and <strong>Express.js</strong> backends, RESTful APIs, JWT authentication, and Stripe payments.
            </p>

            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'Next.js', 'REST APIs', 'Stripe API', 'JWT'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2. AI & LLM PIPELINES (1 Column) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.015 }}
          className="md:col-span-1 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/40 transition-all duration-500 flex flex-col justify-between min-h-[300px] group relative overflow-hidden"
        >
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
          
          <div className="p-3.5 w-fit rounded-2xl bg-purple-500/15 border border-purple-500/25 group-hover:scale-105 transition-transform">
            <Bot className="text-purple-400" size={28} />
          </div>
          
          <div className="mt-6 z-10">
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">AI & LLM Pipelines</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Experienced in LLM evaluation, dataset curation, quality benchmarking, model fine-tuning validation, and Python-driven ML pipelines.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['LLM Trainee', 'Python', 'Flask', 'Data Prep', 'NLP & AST'].map((item) => (
                <span key={item} className="px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-[10px] font-mono border border-purple-500/20">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. LANGUAGES */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-7 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all duration-500 group flex flex-col justify-between"
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20 mb-4 group-hover:scale-105 transition-transform">
              <Code2 className="text-blue-400" size={26} />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">Languages</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Writing clean, efficient, and typed code across multiple programming paradigms.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Python', 'C++', 'SQL', 'JavaScript', 'HTML5', 'CSS3'].map((lang) => (
              <span key={lang} className="px-2.5 py-1 rounded-lg bg-blue-500/5 text-blue-300 text-xs font-mono border border-blue-500/15">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4. DATABASES & STORAGE */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-7 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group flex flex-col justify-between"
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4 group-hover:rotate-6 transition-transform">
              <Database className="text-cyan-400" size={26} />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">Databases</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Architecting schema models and high-throughput queries for both relational and document stores.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['MongoDB', 'SQL', 'Schema Design', 'Data Integrity'].map((db) => (
              <span key={db} className="px-2.5 py-1 rounded-lg bg-cyan-500/5 text-cyan-300 text-xs font-mono border border-cyan-500/15">
                {db}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 5. CLOUD, DEVOPS & AUTOMATION */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-7 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-amber-500/30 transition-all duration-500 group flex flex-col justify-between"
        >
          <div>
            <div className="p-3 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4 group-hover:scale-105 transition-transform">
              <Zap className="text-amber-400" size={26} />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">Cloud & Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Containerizing microservices and automating end-to-end integration testing.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['AWS', 'Docker', 'Git/GitHub', 'Playwright', 'Postman'].map((tool) => (
              <span key={tool} className="px-2.5 py-1 rounded-lg bg-amber-500/5 text-amber-300 text-xs font-mono border border-amber-500/15">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 6. FULL-WIDTH BANNER: CORE CS PHILOSOPHY */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="md:col-span-3 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#0d0d0d] via-[#090909] to-[#040404] border border-white/10 hover:border-emerald-500/25 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden group gap-6"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400 shrink-0">
              <ShieldCheck size={36} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest mb-1">
                <span>Core Computer Science Foundation</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tight">
                "Engineered with rigor. Built for performance."
              </h3>
              <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl font-light">
                Deep theoretical and practical grounding in <strong>OOPS</strong>, <strong>DBMS</strong>, <strong>Operating Systems</strong>, and structured <strong>SDLC</strong> methodologies from Vellore Institute of Technology.
              </p>
            </div>
          </div>

          <Server size={180} className="text-white/[0.03] absolute -right-8 -bottom-8 rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BentoGrid;