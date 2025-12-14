import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../constants';
import { Download, ChevronRight } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: any) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const fullName = PROFILE.name.toUpperCase();
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentFullText = fullName;
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, currentIndex));
        currentIndex--;
      } else {
        setDisplayText(currentFullText.substring(0, currentIndex + 1));
        currentIndex++;
      }

      // Slower typing speed (was 100, now 200)
      let typeSpeed = 200;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && currentIndex === currentFullText.length) {
        // Finished typing
        isDeleting = true;
        typeSpeed = 3000; // Pause at end
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting
        isDeleting = false;
        typeSpeed = 500; // Pause before typing again
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 500);

    return () => clearTimeout(timeoutId);
  }, [fullName]);

  return (
    <div className="h-full overflow-y-auto custom-scrollbar flex flex-col justify-center items-center md:items-start p-4 md:p-6 md:pl-20 text-center md:text-left">
      <motion.div
        className="w-full max-w-4xl pt-10 md:pt-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1 mb-6 border border-cyber-primary/30 rounded-full bg-cyber-primary/10 backdrop-blur-sm">
          <span className="text-cyber-primary font-orbitron tracking-widest text-xs md:text-sm animate-pulse">SYSTEM ONLINE</span>
        </div>
        
        {/* Adjusted container and added whitespace-nowrap to h1 to prevent wrapping */}
        <div className="min-h-16 md:min-h-32 mb-4 flex items-center justify-center md:justify-start w-full overflow-hidden">
          {/* Responsive font size: smaller on mobile to keep single line */}
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-primary to-cyber-secondary filter drop-shadow-[0_0_10px_rgba(0,243,255,0.3)] whitespace-nowrap">
            {displayText}
            <span className="animate-pulse text-cyber-primary">_</span>
          </h1>
        </div>
        
        <h2 className="text-base sm:text-xl md:text-3xl font-rajdhani font-semibold text-gray-300 mb-8 tracking-wide flex flex-wrap justify-center md:justify-start gap-2">
          <span className="text-cyber-secondary">&lt;</span> 
          <span>{PROFILE.title}</span>
          <span className="text-cyber-secondary">/&gt;</span>
        </h2>
        
        <p className="max-w-xl text-gray-400 mb-10 text-sm md:text-lg leading-relaxed mx-auto md:mx-0 px-4 md:px-0">
          Specializing in securing digital infrastructures and building intelligent systems. 
          Bridging the gap between DevOps automation and AI-driven security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pb-20 md:pb-0 px-4 md:px-0 w-full sm:w-auto">
          <button 
            onClick={() => setActiveSection('projects')}
            className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-none skew-x-[-10deg] border border-cyber-primary text-cyber-primary transition-all hover:bg-cyber-primary hover:text-black font-orbitron font-bold tracking-widest text-sm md:text-base w-full sm:w-auto"
          >
            <span className="skew-x-[10deg] inline-flex items-center justify-center gap-2 w-full">
              VIEW PROTOCOLS <ChevronRight size={18} />
            </span>
            <div className="absolute inset-0 bg-cyber-primary/20 blur-lg group-hover:opacity-100 opacity-0 transition-opacity" />
          </button>
          
          <button 
            className="group relative px-8 py-3 bg-cyber-dark overflow-hidden rounded-none skew-x-[-10deg] border border-white/20 text-white transition-all hover:border-cyber-secondary hover:text-cyber-secondary font-orbitron font-bold tracking-widest text-sm md:text-base w-full sm:w-auto"
          >
            <span className="skew-x-[10deg] inline-flex items-center justify-center gap-2 w-full">
              DOWNLOAD CV <Download size={18} />
            </span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;