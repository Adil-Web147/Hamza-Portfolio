import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { FolderGit2, ExternalLink, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-6 md:p-12 pb-32 custom-scrollbar">
      <motion.div 
        className="max-w-6xl mx-auto w-full pt-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-10 text-white text-center sticky top-0 bg-cyber-dark/90 backdrop-blur-md py-4 z-20 rounded-xl">
          DEPLOYED_PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-cyber-dark/40 border border-white/10 p-6 rounded-xl backdrop-blur-sm overflow-hidden hover:bg-cyber-dark/60 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Background Tech Circuit Effect */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <Cpu size={100} />
              </div>

              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyber-primary/10 rounded-lg text-cyber-primary group-hover:text-white group-hover:bg-cyber-secondary transition-colors">
                  <FolderGit2 size={24} />
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-xs font-bold text-cyber-secondary mb-4 uppercase tracking-widest">
                {project.category}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-cyber-primary mt-1">›</span> {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-gray-300 border border-white/5 group-hover:border-cyber-primary/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;