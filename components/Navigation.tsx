import React from 'react';
import { SectionType } from '../types';
import { Home, User, Briefcase, Code, Cpu, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems: { id: SectionType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  return (
    // Updated Layout Strategy:
    // 1. pointer-events-none on wrapper to allow clicking through the empty space around nav.
    // 2. Mobile: fixed at bottom, w-full + flex justify-center (Centers horizontally).
    // 3. Desktop: fixed left, h-screen + flex-col justify-center (Centers vertically).
    <nav className="fixed bottom-4 left-0 w-full z-50 flex justify-center pointer-events-none md:bottom-auto md:top-0 md:left-8 md:w-auto md:h-screen md:flex-col md:justify-center">
      <div className="pointer-events-auto backdrop-blur-md bg-cyber-dark/80 border border-white/10 rounded-2xl p-2 md:p-4 shadow-[0_0_20px_rgba(0,243,255,0.2)] flex md:flex-col justify-between md:justify-center gap-2 md:gap-6 w-[90%] md:w-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`group relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 ease-out
              ${activeSection === item.id 
                ? 'bg-gradient-to-r from-cyber-primary/20 to-cyber-secondary/20 text-cyber-primary shadow-[0_0_15px_rgba(0,243,255,0.4)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
          >
            <span className="relative z-10">{item.icon}</span>
            
            {/* Tooltip for Desktop */}
            <span className="absolute left-full ml-4 px-2 py-1 bg-cyber-dark border border-cyber-primary/30 text-cyber-primary text-sm rounded opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block whitespace-nowrap font-orbitron tracking-wider">
              {item.label}
            </span>

            {/* Active Indicator Line (Mobile) */}
            {activeSection === item.id && (
              <span className="absolute -bottom-1 w-1/2 h-1 bg-cyber-primary rounded-full md:hidden shadow-[0_0_10px_#00f3ff]"></span>
            )}
            {/* Active Indicator Line (Desktop) */}
            {activeSection === item.id && (
              <span className="absolute -left-1 h-1/2 w-1 bg-cyber-primary rounded-full hidden md:block shadow-[0_0_10px_#00f3ff]"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;