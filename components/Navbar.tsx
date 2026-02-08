import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Overview', path: '/' },
    { label: 'Air Monitor', path: '/monitor' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added inline style to enforce flex layout immediately before CSS loads to prevent stacking */}
        <div className="flex justify-between h-20 items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Animated Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink 
              to="/" 
              onClick={handleScrollTop}
              className="flex items-center gap-2 md:gap-3 group"
            >
               <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                  {/* Preload both logos to avoid flickering/delay on theme switch */}
                  
                  {/* Night Mode Logo (White) - Shown when isDark is true */}
                  <img 
                    src="https://github.com/Gmstree/Images/blob/main/airw.png?raw=true" 
                    alt="Smart Air Logo (Light)"
                    loading="eager"
                    width="48" height="48"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  {/* Day Mode Logo (Black) - Shown when isDark is false */}
                  <img 
                    src="https://github.com/Gmstree/Images/blob/main/airb.png?raw=true"
                    alt="Smart Air Logo (Dark)"
                    loading="eager"
                    width="48" height="48"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
                  />
               </div>
               <div className="flex flex-col">
                  <h1 className="text-lg md:text-2xl font-sans font-black tracking-tighter text-uni-900 dark:text-white group-hover:text-uni-accent dark:group-hover:text-uni-darkAccent transition-colors uppercase">
                    SMART AIR
                  </h1>
               </div>
            </NavLink>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleScrollTop}
                className={({ isActive }) =>
                  `text-xs font-bold transition-all duration-200 uppercase tracking-widest py-2 px-3 rounded hover:bg-gray-50 dark:hover:bg-slate-800 ${
                    isActive 
                      ? 'text-uni-accent dark:text-uni-darkAccent' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-600 dark:text-yellow-400"
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-uni-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                  handleScrollTop();
                }}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded text-sm font-bold uppercase tracking-wider ${
                    isActive 
                      ? 'bg-gray-100 dark:bg-slate-800 text-uni-accent dark:text-uni-darkAccent' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;