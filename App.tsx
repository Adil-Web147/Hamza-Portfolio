import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { SectionType } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'contact': return <Contact />;
      default: return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white selection:bg-cyber-primary selection:text-black">
      
      {/* 1. Background Layer */}
      <ParticlesBackground />
      
      {/* 2. Overlay Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-0 opacity-60"></div>

      {/* 3. Main Content Layer */}
      <main className="relative z-10 w-full h-full flex flex-col md:flex-row">
        
        {/* Navigation Sidebar */}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Dynamic Content Area */}
        <div className="flex-1 h-full relative p-4 md:p-8 md:pl-32 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              className="w-full h-full"
            >
              <div className="w-full h-full bg-cyber-dark/30 backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl overflow-hidden relative">
                {/* Decorative Frame Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-primary rounded-tl-xl opacity-60 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-secondary rounded-tr-xl opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-secondary rounded-bl-xl opacity-60 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-primary rounded-br-xl opacity-60 pointer-events-none"></div>
                
                {renderSection()}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;