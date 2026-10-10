import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Award, 
  Users, 
  Github, 
  Linkedin, 
  Mail, 
  Check, 
  Download, 
  Code2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isCopied, setIsCopied] = useState(false);

  const navLinks = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' },
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'experience', icon: Briefcase, label: 'Experience', href: '#experience' },
    { id: 'education', icon: GraduationCap, label: 'Education', href: '#education' },
    { id: 'projects', icon: Layers, label: 'Work', href: '#projects' },
    { id: 'certifications', icon: Award, label: 'Certs', href: '#certifications' },
    { id: 'leadership', icon: Users, label: 'Leadership', href: '#leadership' },
  ];

  const socialLinks = [
    { id: 'github', icon: Github, href: personalInfo.github, label: 'GitHub' },
    { id: 'linkedin', icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { id: 'leetcode', icon: Code2, href: personalInfo.leetcode, label: 'LeetCode' },
  ];

  // Robust scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveTab('home');
        return;
      }

      let currentSection = 'home';
      let minDistance = Infinity;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = link.id;
          }
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Floating Navigation"
        className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 rounded-full bg-[#030014]/85 border border-white/10 backdrop-blur-2xl shadow-[0_0_35px_rgba(0,0,0,0.6)]"
      >
        {/* Navigation Sections */}
        <div className="flex items-center overflow-x-auto no-scrollbar py-0.5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              title={link.label}
              className="relative flex items-center justify-center px-3 md:px-4 py-2.5 rounded-full transition-all group cursor-pointer text-xs"
            >
              {activeTab === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-1.5">
                <link.icon 
                  size={16} 
                  className={`transition-colors duration-300 ${activeTab === link.id ? "text-green-400" : "text-gray-400 group-hover:text-gray-200"}`} 
                />
                <AnimatePresence>
                  {activeTab === link.id && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0, overflow: 'hidden' }} 
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="text-[11px] font-bold text-white whitespace-nowrap overflow-hidden hidden sm:inline-block"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </a>
          ))}
        </div>

        <div className="w-[1px] h-5 bg-white/15 mx-1 hidden sm:block" />

        {/* Social Actions & Resume */}
        <div className="flex items-center gap-0.5 pr-1">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              title={social.label}
              className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <social.icon size={16} />
            </a>
          ))}

          {/* Resume Download */}
          <a
            href={personalInfo.resume}
            download="Chakshika_Pawar_Resume.pdf"
            title="Download Resume PDF"
            className="relative p-2.5 rounded-full text-gray-400 hover:text-green-400 hover:bg-white/5 transition-all group"
          >
            <Download size={16} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 border border-white/10 rounded-md text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Resume
            </span>
          </a>

          {/* Email Copy */}
          <button
            onClick={handleCopyEmail}
            title={isCopied ? "Copied to clipboard" : "Copy Email"}
            className="relative p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
          >
            {isCopied ? <Check size={16} className="text-green-500" /> : <Mail size={16} />}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 border border-white/10 rounded-md text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {isCopied ? "Copied!" : "Copy Email"}
            </span>
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default FloatingNav;