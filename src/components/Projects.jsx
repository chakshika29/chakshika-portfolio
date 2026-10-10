import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
          <span>Featured Projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter italic uppercase">
          ENGINEERING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 not-italic">
            REAL-WORLD SOLUTIONS.
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mt-4 font-light">
          A showcase of full-stack platforms, smart machine learning integrations, and AI developer utilities.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;