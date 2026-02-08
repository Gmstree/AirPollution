import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className="bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 py-12 border-t border-gray-100 dark:border-slate-800 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            {/* Brand Matching Header */}
            <div className="flex items-center gap-3">
                 <div className="relative w-10 h-10 flex items-center justify-center">
                    {/* Night Mode Logo (White) - Shown when isDark is true */}
                    <img 
                      src="https://github.com/Gmstree/Images/blob/main/airw.png?raw=true" 
                      alt="Smart Air Logo (Light)"
                      loading="lazy"
                      width="40" height="40"
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
                    />
                    
                    {/* Day Mode Logo (Black) - Shown when isDark is false */}
                    <img 
                      src="https://github.com/Gmstree/Images/blob/main/airb.png?raw=true"
                      alt="Smart Air Logo (Dark)"
                      loading="lazy"
                      width="40" height="40"
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
                    />
                 </div>
                 <div>
                    <h3 className="font-sans font-black text-xl text-uni-900 dark:text-white uppercase tracking-tighter">SMART AIR</h3>
                 </div>
            </div>

            {/* Copyright */}
            <div className="text-sm font-mono text-gray-500 dark:text-gray-500 text-center md:text-right font-bold">
                <p>&copy; 2026 University Research Project.</p>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;