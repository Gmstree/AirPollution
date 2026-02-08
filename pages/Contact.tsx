import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import { Mail, Github, Linkedin, Globe, Terminal, User } from 'lucide-react';

const Contact: React.FC = () => {
  const leaders = TEAM_MEMBERS.filter(m => m.role === 'Leader' || m.role === 'Co-leader');

  return (
    <div className="min-h-screen py-16 md:py-24 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 md:gap-3 px-3 py-1 md:px-6 md:py-2 rounded-full border border-uni-900/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-md shadow-lg mb-4 md:mb-8"
           >
               <Terminal size={12} className="text-uni-accent" />
               <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase text-uni-900 dark:text-white">Engineering Team</span>
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="font-serif text-3xl md:text-7xl font-bold text-uni-900 dark:text-white mb-2 md:mb-6 drop-shadow-sm"
           >
               Get in Touch
           </motion.h1>
           <p className="text-gray-600 dark:text-gray-300 text-xs md:text-lg max-w-2xl mx-auto font-medium px-2">
             Connect directly with the project leaders.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {leaders.map((leader, index) => (
                <motion.div 
                    key={leader.id}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* VISUAL STYLE: IDE / Coding Editor Window */}
                    <div className="rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] border border-gray-700 font-mono group hover:border-uni-accent/50 transition-colors duration-300 flex flex-col h-full">
                        
                        {/* Window Header (The "Coding Box" Look) */}
                        <div className="bg-[#252526] px-3 py-2 md:px-4 md:py-3 flex items-center justify-between border-b border-gray-800 select-none">
                            <div className="flex items-center gap-1.5 md:gap-2">
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"></div>
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors"></div>
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors"></div>
                            </div>
                            <div className="flex items-center gap-2 opacity-60">
                                <User size={10} className="text-blue-400" />
                                <span className="text-gray-400 text-[10px] md:text-xs font-medium tracking-wide truncate max-w-[120px] md:max-w-[150px]">
                                    {leader.name.toLowerCase().includes('sizar') 
                                        ? 'sizar.tsx' 
                                        : `${leader.name.split(' ')[0].toLowerCase()}.tsx`
                                    }
                                </span>
                            </div>
                            <div className="w-4"></div> {/* Spacer */}
                        </div>

                        {/* Content Area (Human Readable) */}
                        <div className="p-4 md:p-8 flex flex-col sm:flex-row gap-4 md:gap-6 text-gray-300 h-full">
                             
                             {/* Left: Profile Image & Status */}
                             <div className="flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-start gap-3 md:gap-4">
                                 <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-gray-600 shadow-lg relative group-hover:border-blue-500 transition-colors">
                                     <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                                 </div>
                                 <div className="flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 bg-[#2d2d2d] rounded-full border border-gray-700">
                                     <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                                     <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400">Online</span>
                                 </div>
                             </div>

                             {/* Right: Details */}
                             <div className="flex-1 space-y-3 md:space-y-5">
                                 
                                 {/* Name & Role */}
                                 <div className="text-left">
                                     <h2 className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1 group-hover:text-blue-400 transition-colors">
                                        {leader.name}
                                     </h2>
                                     <div className="flex items-center gap-2 text-[10px] md:text-sm">
                                        <span className="text-[#ce9178] font-bold">const</span>
                                        <span className="text-purple-400">role</span>
                                        <span className="text-gray-500">=</span>
                                        <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] md:text-xs border border-blue-500/20">
                                            "{leader.role}"
                                        </span>
                                     </div>
                                 </div>

                                 {/* Bio - Readable Text */}
                                 <div className="text-[11px] md:text-sm leading-relaxed text-gray-400 border-l-2 border-gray-700 pl-3 text-justify">
                                     <p>{leader.bio}</p>
                                 </div>

                                 {/* Contact Information */}
                                 <div className="space-y-2 md:space-y-3 pt-1">
                                     <a href={leader.email} className="flex items-center gap-3 p-2 md:p-3 rounded-lg bg-[#2d2d2d] hover:bg-[#333] border border-transparent hover:border-gray-600 transition-all group/email">
                                         <Mail size={14} className="text-gray-400 group-hover/email:text-white flex-shrink-0 md:w-4 md:h-4" />
                                         <span className="text-[10px] md:text-sm text-gray-300 group-hover/email:text-white truncate">
                                             {leader.email.replace('mailto:', '')}
                                         </span>
                                     </a>

                                     <div className="flex items-center gap-2">
                                         {leader.socials.linkedin && (
                                             <a href={leader.socials.linkedin} target="_blank" rel="noreferrer" className="p-1.5 md:p-2 bg-[#2d2d2d] rounded hover:bg-[#0077b5] hover:text-white text-gray-400 transition-colors">
                                                 <Linkedin size={14} className="md:w-4 md:h-4" />
                                             </a>
                                         )}
                                         {leader.socials.github && (
                                             <a href={leader.socials.github} target="_blank" rel="noreferrer" className="p-1.5 md:p-2 bg-[#2d2d2d] rounded hover:bg-black hover:text-white text-gray-400 transition-colors">
                                                 <Github size={14} className="md:w-4 md:h-4" />
                                             </a>
                                         )}
                                         {leader.socials.website && (
                                             <a href={leader.socials.website} target="_blank" rel="noreferrer" className="p-1.5 md:p-2 bg-[#2d2d2d] rounded hover:bg-purple-600 hover:text-white text-gray-400 transition-colors">
                                                 <Globe size={14} className="md:w-4 md:h-4" />
                                             </a>
                                         )}
                                     </div>
                                 </div>

                             </div>
                        </div>

                        {/* Footer Status Bar */}
                        <div className="bg-[#007acc] px-3 py-0.5 md:py-1 text-[8px] md:text-[10px] text-white flex justify-between items-center">
                            <span>TEAM</span>
                            <span>08</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;
