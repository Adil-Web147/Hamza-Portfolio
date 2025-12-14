import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CERTIFICATIONS } from '../../constants';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-6 md:p-12 pb-32 custom-scrollbar">
      <motion.div 
        className="max-w-6xl mx-auto w-full pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-6xl font-orbitron font-bold mb-10 text-white flex items-center gap-4 sticky top-0 bg-cyber-dark/90 backdrop-blur-md py-4 z-20 rounded-xl">
          <span className="w-8 md:w-12 h-2 bg-cyber-secondary block"></span>
          SKILL_MATRIX
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-cyber-dark/40 border border-white/10 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Decorative Header Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary to-transparent opacity-50"></div>

              <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-cyber-primary">##</span> {skillGroup.category.toUpperCase()}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-3 py-2 rounded bg-white/5 border border-white/5 text-gray-300 text-sm font-rajdhani hover:border-cyber-secondary hover:text-white transition-all hover:scale-105 cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-primary shadow-[0_0_5px_#00f3ff]"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8 pb-12">
           <h3 className="text-2xl font-orbitron font-bold text-white mb-6 flex items-center gap-2">
              <ShieldCheck className="text-cyber-secondary" /> CERTIFICATIONS
           </h3>
           <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-cyber-dark border-l-4 border-cyber-secondary/50 hover:bg-white/5 transition-colors"
                >
                  <CheckCircle2 className="text-cyber-primary shrink-0" />
                  <span className="text-gray-200 font-rajdhani text-lg">{cert}</span>
                </motion.div>
              ))}
           </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Skills;