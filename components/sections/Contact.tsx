import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-12 pb-32 custom-scrollbar">
      <div className="min-h-full flex flex-col justify-center items-center">
        <motion.div 
          className="max-w-3xl w-full bg-cyber-dark/60 border border-white/10 rounded-2xl p-6 md:p-12 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)] my-4 md:my-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center text-white mb-2">
            INITIATE <span className="text-cyber-primary">CONTACT</span>
          </h2>
          <p className="text-center text-gray-400 mb-8 md:mb-12 font-rajdhani text-sm md:text-base">
            Secure channel open for collaboration and inquiries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary/20 group-hover:text-cyber-primary transition-all shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-orbitron">PHONE</p>
                  <p className="font-rajdhani text-base md:text-lg truncate">{PROFILE.phone}</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary/20 group-hover:text-cyber-primary transition-all shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-orbitron">EMAIL</p>
                  <p className="font-rajdhani text-base md:text-lg truncate">{PROFILE.email}</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary/20 group-hover:text-cyber-primary transition-all shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-gray-500 font-orbitron">BASE</p>
                  <p className="font-rajdhani text-base md:text-lg truncate">{PROFILE.location}</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="IDENTIFIER (Name)" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all font-rajdhani text-sm md:text-base"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="FREQUENCY (Email)" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all font-rajdhani text-sm md:text-base"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  placeholder="TRANSMISSION CONTENT (Message)" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] transition-all font-rajdhani text-sm md:text-base resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-cyber-primary to-cyber-secondary text-black font-bold font-orbitron py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.3)] border border-cyber-primary/50">
                SEND TRANSMISSION <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;