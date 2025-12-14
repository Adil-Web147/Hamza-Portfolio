import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Calendar, Building2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-12 pb-32 custom-scrollbar">
      <motion.div 
        className="max-w-5xl mx-auto w-full pt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-6xl font-orbitron font-bold mb-12 text-white flex items-center justify-end md:justify-start gap-4 sticky top-0 bg-cyber-dark/90 backdrop-blur-md py-4 z-20 rounded-xl">
          EXPERIENCE_DATA
          <span className="w-8 md:w-12 h-2 bg-cyber-secondary block"></span>
        </h2>

        <div className="space-y-8 relative pb-12">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-transparent hidden md:block opacity-30"></div>
          {/* Mobile connecting line */}
          <div className="absolute left-[1.1rem] top-4 bottom-0 w-0.5 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-transparent md:hidden opacity-30"></div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-4 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-1/2" />
              
              {/* Timeline Dot */}
              <div className="absolute left-3 md:left-1/2 w-4 h-4 rounded-full bg-cyber-black border-2 border-cyber-primary shadow-[0_0_15px_#00f3ff] z-10 translate-y-6 md:-translate-x-2"></div>

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                <div className={`
                  relative p-5 md:p-6 rounded-xl border border-white/10 bg-cyber-dark/60 backdrop-blur-md 
                  hover:border-cyber-primary/50 transition-colors duration-300 group
                  ${index % 2 === 0 ? 'text-left' : 'text-left md:text-right'}
                `}>
                  {/* Glowing Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>

                  <h3 className="text-lg md:text-2xl font-orbitron font-bold text-white mb-1 group-hover:text-cyber-primary transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className={`flex flex-col gap-1 mb-4 text-xs md:text-sm text-gray-400 font-rajdhani ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'}`}>
                    <span className="flex items-center gap-2"><Building2 size={14} className="text-cyber-secondary"/> {exp.company}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-cyber-secondary"/> {exp.period}</span>
                  </div>

                  <ul className={`list-none space-y-2 text-gray-300 text-sm md:text-base font-rajdhani ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative">
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;