import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, EDUCATION } from '../../constants';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-12 pb-32 custom-scrollbar">
      <motion.div 
        className="max-w-4xl mx-auto w-full pt-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-6xl font-orbitron font-bold mb-8 text-white flex items-center gap-4 sticky top-0 bg-cyber-dark/90 backdrop-blur-md py-4 z-20 rounded-xl">
          <span className="w-8 md:w-12 h-2 bg-cyber-primary block"></span>
          ABOUT_ME
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Bio */}
          <div className="md:col-span-2 space-y-6 text-gray-300 font-rajdhani text-base md:text-lg leading-relaxed text-justify bg-cyber-dark/40 p-4 md:p-6 border-l-2 border-cyber-primary rounded-r-xl backdrop-blur-sm">
            <p>
              I am a passionate <span className="text-cyber-primary font-bold">Cybersecurity and Software Engineer</span> with strong expertise in machine learning–based security solutions, web application development, and digital forensics. My work focuses on designing intelligent systems that detect, analyze, and mitigate cyber threats.
            </p>
            <p>
              I have hands-on experience building end-to-end security solutions using technologies such as Python, Flask, TensorFlow, scikit-learn, React, and RESTful APIs. I enjoy transforming complex security challenges into practical, scalable applications supported by data-driven insights and clean system architecture.
            </p>
            <p>
              Currently pursuing a <span className="text-cyber-secondary font-bold">Master’s degree in Cyber Security</span>, actively working on research-oriented projects involving machine learning for threat detection and digital forensics investigations.
            </p>
          </div>

          {/* Quick Info Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 p-6 rounded-xl border border-white/10 backdrop-blur-md flex flex-col gap-6 h-fit">
             <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-cyber-primary/20 border-2 border-cyber-primary flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                  <span className="font-orbitron text-2xl md:text-3xl text-white">HH</span>
                </div>
                <h3 className="text-lg md:text-xl font-orbitron text-white">{PROFILE.name}</h3>
                <p className="text-cyber-primary text-sm">{PROFILE.location}</p>
             </div>
             <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <MapPin size={18} className="text-cyber-secondary"/>
                  <span>Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <GraduationCap size={18} className="text-cyber-secondary"/>
                  <span>Masters in Cyber Sec (Ongoing)</span>
                </div>
             </div>
          </div>
        </div>

        {/* Education Section */}
        <h3 className="text-xl md:text-2xl font-orbitron mb-6 text-cyber-primary flex items-center gap-2">
           <Award /> EDUCATION LOGS
        </h3>
        
        <div className="relative border-l-2 border-white/10 pl-6 md:pl-8 ml-2 md:ml-4 space-y-8 pb-12">
           <div className="relative">
             <span className="absolute -left-[33px] md:-left-[41px] top-0 w-5 h-5 rounded-full bg-cyber-black border-2 border-cyber-secondary shadow-[0_0_10px_#bc13fe]"></span>
             <h4 className="text-lg md:text-xl font-bold text-white">{EDUCATION.degree}</h4>
             <p className="text-cyber-primary text-sm md:text-base">{EDUCATION.institution}</p>
             <p className="text-xs md:text-sm text-gray-500 mb-2 font-mono">Graduation: {EDUCATION.year}</p>
             <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                {EDUCATION.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
             </ul>
           </div>
        </div>

      </motion.div>
    </div>
  );
};

export default About;