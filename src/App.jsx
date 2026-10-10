import React from 'react';
import { Github, Mail, ArrowUpRight, ArrowUp, Linkedin, Phone, Code2 } from 'lucide-react';

// Import Reusable UI Components
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import ContributionGraph from './components/github/ContributionGraph';
import LanguagesBar from './components/github/LanguagesBar';
import PinnedRepos from './components/github/PinnedRepos';

import { personalInfo, githubConfig } from './data/portfolioData';

const App = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#030014] font-sans text-white selection:bg-emerald-500/30">
      
      {/* 1. FLOATING NAVIGATION */}
      <FloatingNav />

      {/* 2. GLOBAL BACKGROUND TEXTURE & AMBIENT BLURS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] bg-emerald-600/15 rounded-full blur-[140px]" />
      </div>

      {/* 3. HERO SECTION */}
      <Hero />
      
      {/* 4. TECH TICKER MARQUEE */}
      <TechMarquee />
      
      {/* 5. ABOUT / TECHNICAL ARSENAL (BENTO GRID) */}
      <BentoGrid />

      {/* 6. PROFESSIONAL EXPERIENCE */}
      <Experience />

      {/* 7. ACADEMIC EDUCATION */}
      <Education />

      {/* 8. FEATURED PROJECTS */}
      <Projects />

      {/* 9. CERTIFICATIONS */}
      <Certifications />

      {/* 10. LEADERSHIP & ACHIEVEMENTS */}
      <Leadership />

      {/* 11. GITHUB CODE ACTIVITY */}
      <section className="relative z-10 py-24 md:py-32 border-t border-white/5 bg-[#030014]/80 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <Github className="text-white w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Code Activity</h2>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mt-0.5">
                Live statistics for @{githubConfig.username}
              </p>
            </div>
          </div>
          
          <div className="p-6 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden">
            <ContributionGraph />
            <LanguagesBar />
            <PinnedRepos />
          </div>
        </div>
      </section>

      {/* 12. FOOTER / CONTACT SECTION */}
      <footer id="contact" className="relative z-10 bg-[#020010] border-t border-white/10 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            
            {/* Left: CTA & Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.openToWorkBadge}
              </div>
              
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                LET'S<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  CONNECT.
                </span>
              </h2>
              
              <p className="text-gray-300 max-w-md text-base md:text-lg leading-relaxed font-light">
                Seeking <strong>Software Engineering, Full Stack & AI/ML</strong> roles for the 2026 batch. <br />
                Focused on architecting scalable, data-driven systems.
              </p>
              
              <div className="pt-2">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:bg-emerald-400"
                >
                  <Mail size={18} /> Say Hello
                </a>
              </div>
            </div>

            {/* Right: Quick Links */}
            <div className="flex flex-col gap-5 items-start md:items-end min-w-[220px]">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-3 text-lg md:text-xl font-bold text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-emerald-400" />
              </a>
              
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-3 text-lg md:text-xl font-bold text-gray-400 hover:text-white transition-colors"
              >
                GitHub <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-emerald-400" />
              </a>
              
              <a 
                href={personalInfo.leetcode} 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-3 text-lg md:text-xl font-bold text-gray-400 hover:text-white transition-colors"
              >
                LeetCode <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-emerald-400" />
              </a>
              
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="group flex items-center gap-3 text-lg md:text-xl font-bold text-gray-400 hover:text-white transition-colors"
              >
                {personalInfo.email} <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-emerald-400" />
              </a>
              
              <a 
                href={`tel:${personalInfo.rawPhone}`} 
                className="group flex items-center gap-3 text-lg md:text-xl font-bold text-gray-400 hover:text-white transition-colors"
              >
                {personalInfo.phone} <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-emerald-400" />
              </a>
              
              <button 
                onClick={scrollToTop} 
                className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 uppercase tracking-widest transition-colors cursor-pointer"
              >
                Back to Top <ArrowUp size={14} />
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-gray-500 uppercase tracking-[0.2em]">
            <span>© 2026 {personalInfo.name}. All Rights Reserved.</span>
            <span>VIT Bhopal • B.Tech CSE (E-Commerce Tech)</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;