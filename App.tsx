import React, { useEffect, useState, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Monitor from './pages/Monitor';
import Hardware from './pages/Hardware';
import ProposalReview from './pages/ProposalReview';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- REALISTIC ATMOSPHERIC BACKGROUND ---
const AtmosphericBackground = () => {
  // Generate random stars for night mode
  const stars = React.useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`, 
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    // Updated: Added transform-gpu and will-change to force layer promotion and avoid repaints
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* === DAY MODE LAYER === */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-300 ease-in-out bg-gradient-to-b from-[#38bdf8] via-[#e0f2fe] to-[#ffffff] transform-gpu will-change-[opacity]">
          
          {/* REALISTIC SUN */}
          <div className="absolute top-[8%] right-[8%] w-24 h-24 rounded-full bg-[#FFFFE0] shadow-[0_0_60px_20px_rgba(255,220,0,0.7)] animate-pulse-slow z-10"></div>
          {/* Sun Glare */}
          <div className="absolute top-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-yellow-300/10 blur-[120px] pointer-events-none transform-gpu"></div>

          {/* REALISTIC AIR FLOW / CLOUDS */}
          <div className="absolute top-[15%] -left-[10%] w-[40vw] h-[200px] bg-white opacity-80 rounded-[100%] blur-[50px] animate-drift-slow transform-gpu"></div>
          <div className="absolute top-[40%] -left-[20%] w-[50vw] h-[250px] bg-white opacity-70 rounded-[100%] blur-[60px] animate-drift-medium transform-gpu" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[25%] -left-[15%] w-[30vw] h-[150px] bg-white/90 rounded-[100%] blur-[40px] animate-drift-fast transform-gpu" style={{ animationDelay: '8s' }}></div>
      </div>

      {/* === NIGHT MODE LAYER === */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300 ease-in-out bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#1e1b4b_50%,_#000000_100%)] transform-gpu will-change-[opacity]">
          
          {/* STARS */}
          <div className="stars-container">
             {stars.map((star, i) => (
                <div 
                  key={i}
                  className="star"
                  style={{
                    top: star.top,
                    left: star.left,
                    width: star.size,
                    height: star.size,
                    '--duration': star.duration,
                    animationDelay: star.delay
                  } as React.CSSProperties}
                ></div>
             ))}
          </div>

          {/* REALISTIC MOON */}
          <div className="absolute top-[10%] right-[10%] w-20 h-20 rounded-full bg-slate-200 shadow-[0_0_50px_10px_rgba(255,255,255,0.5)] z-10 animate-float transform-gpu">
             <div className="absolute top-4 left-5 w-4 h-4 bg-slate-300 rounded-full opacity-40"></div>
             <div className="absolute bottom-5 right-4 w-5 h-5 bg-slate-300 rounded-full opacity-30"></div>
          </div>
          <div className="absolute top-[5%] right-[5%] w-[300px] h-[300px] rounded-full bg-blue-100/5 blur-[90px] transform-gpu"></div>

          {/* NIGHT AIR FLOW (Aurora) */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-purple-900/40 to-transparent blur-2xl transform-gpu"></div>
          
          {/* Distinct Wind Streams */}
          <div className="absolute top-[30%] -left-[200px] w-[600px] h-[150px] bg-cyan-500/20 rounded-full blur-[80px] animate-drift-slow transform-gpu"></div>
          <div className="absolute top-[60%] -left-[300px] w-[500px] h-[200px] bg-purple-500/20 rounded-full blur-[90px] animate-drift-medium transform-gpu" style={{ animationDelay: '5s' }}></div>
      </div>

    </div>
  );
};

const App: React.FC = () => {
  // Auto-detect time for Day/Night mode
  const [isDark, setIsDark] = useState(() => {
    const currentHour = new Date().getHours();
    return currentHour < 6 || currentHour >= 18;
  });

  // Use useLayoutEffect to prevent flash of wrong theme and ensure class is applied synchronously before paint
  useLayoutEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <HashRouter>
      <ScrollToTop />
      {/* Removed global transition classes here, handled in components or specific layers */}
      <div className="min-h-screen flex flex-col font-sans text-gray-800 dark:text-gray-100 relative">
        <AtmosphericBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proposal-review" element={<ProposalReview />} />
                <Route path="/hardware" element={<Hardware />} />
                <Route path="/monitor" element={<Monitor />} />
                <Route path="/team" element={<Team />} />
                <Route path="/team/:memberId" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </main>
            <Footer isDark={isDark} />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
