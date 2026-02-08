import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Github, Linkedin, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen py-20 md:py-24 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-uni-900 dark:text-white mb-4 drop-shadow-sm">
                Research Team
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                A team of innovators and engineers focused on solving real-world environmental challenges through technology.
            </p>
        </div>

        {/* Team Members List */}
        <div className="grid grid-cols-1 gap-8 md:gap-16">
            {TEAM_MEMBERS.map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                    {/* Card Container - UPDATED: Added visible border for day mode and kept card style on desktop */}
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-xl border border-gray-300 dark:border-slate-700/50 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 transition-all hover:border-uni-accent/30 dark:hover:border-uni-darkAccent/30">
                        
                        {/* Image Section */}
                        <div className="relative flex-shrink-0">
                            <div className="relative w-36 h-36 md:w-64 md:h-64 group-hover:scale-105 transition-transform duration-500 ease-out">
                                <div className="w-full h-full rounded-full md:rounded-2xl overflow-hidden border-[4px] border-white dark:border-slate-600 shadow-lg md:shadow-2xl">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-[3px] border-white dark:border-slate-800 rounded-full md:hidden z-10 shadow-sm animate-pulse"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 text-center md:text-left space-y-4 md:space-y-5 w-full">
                            <div>
                                <h3 className="text-2xl md:text-4xl font-serif font-bold text-uni-900 dark:text-white tracking-tight">
                                    {member.name}
                                </h3>
                                <div className="mt-2 md:mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-uni-accent/10 dark:bg-blue-900/30 border border-uni-accent/20 dark:border-blue-700/30 text-uni-accent dark:text-blue-300 text-xs font-bold uppercase tracking-widest shadow-sm">
                                    {member.role}
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed text-justify md:text-left md:max-w-3xl">
                                {member.bio}
                            </p>

                            {/* Action Buttons / Socials */}
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-2">
                                
                                {/* Animated Social Icons - Works in Day & Night Mode */}
                                <div className="flex items-center gap-4">
                                    {member.socials.linkedin && (
                                        <a 
                                            href={member.socials.linkedin} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-sm
                                            bg-white dark:bg-slate-700 
                                            border border-gray-200 dark:border-slate-600 
                                            text-gray-600 dark:text-gray-300
                                            
                                            hover:bg-[#0077b5] dark:hover:bg-[#0077b5]
                                            hover:border-[#0077b5] dark:hover:border-[#0077b5]
                                            hover:text-white dark:hover:text-white
                                            hover:scale-110 hover:shadow-lg
                                            
                                            active:bg-[#0077b5] dark:active:bg-[#0077b5]
                                            active:text-white dark:active:text-white
                                            active:scale-95"
                                        >
                                            <Linkedin size={22} strokeWidth={1.5} />
                                        </a>
                                    )}
                                    {member.socials.github && (
                                        <a 
                                            href={member.socials.github} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-sm
                                            bg-white dark:bg-slate-700 
                                            border border-gray-200 dark:border-slate-600 
                                            text-gray-600 dark:text-gray-300
                                            
                                            hover:bg-black dark:hover:bg-black
                                            hover:border-black dark:hover:border-black
                                            hover:text-white dark:hover:text-white
                                            hover:scale-110 hover:shadow-lg
                                            
                                            active:bg-black dark:active:bg-black
                                            active:text-white dark:active:text-white
                                            active:scale-95"
                                        >
                                            <Github size={22} strokeWidth={1.5} />
                                        </a>
                                    )}
                                    {member.socials.website && (
                                        <a 
                                            href={member.socials.website} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-out shadow-sm
                                            bg-white dark:bg-slate-700 
                                            border border-gray-200 dark:border-slate-600 
                                            text-gray-600 dark:text-gray-300
                                            
                                            hover:bg-[#D946EF] dark:hover:bg-[#D946EF]
                                            hover:border-[#D946EF] dark:hover:border-[#D946EF]
                                            hover:text-white dark:hover:text-white
                                            hover:scale-110 hover:shadow-lg
                                            
                                            active:bg-[#D946EF] dark:active:bg-[#D946EF]
                                            active:text-white dark:active:text-white
                                            active:scale-95"
                                        >
                                            <Globe size={22} strokeWidth={1.5} />
                                        </a>
                                    )}
                                </div>

                                {/* Visible Email Address */}
                                <a 
                                    href={member.socials.email} 
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 transition-all duration-300 hover:bg-uni-900 hover:text-white hover:border-uni-900 dark:hover:bg-white dark:hover:text-uni-900 hover:shadow-md active:scale-95"
                                >
                                    <Mail size={18} strokeWidth={2} />
                                    <span className="text-sm font-mono font-bold tracking-tight">
                                        {member.email}
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Divider for Desktop - Kept subtle */}
                    <div className="hidden md:block w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-700 to-transparent mt-16 opacity-50"></div>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Team;