import React from 'react';
import { motion } from 'framer-motion';
import PaperCard from '../components/PaperCard';
import LiveDashboard from '../components/LiveDashboard';
import ProjectSurvey from '../components/ProjectSurvey';
import BlockDiagram from '../components/BlockDiagram';
import GanttChart from '../components/GanttChart';
import { COMPONENT_LIST, PROJECT_TITLE, REFERENCES } from '../constants';
import { Cpu, Target, Heart, Map as MapIcon, Info, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-20 transition-colors duration-300">
      
      {/* 1. Hero Section - Mobile Optimized */}
      <section className="relative bg-transparent pt-24 md:pt-32 pb-32 md:pb-48 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block mb-4 px-3 py-1 md:px-4 md:py-1 rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-md text-uni-900 dark:text-white border border-white/50 dark:border-white/10 text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-sm">
                    University Research Project 2026
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto text-uni-900 dark:text-white drop-shadow-lg px-2">
                    {PROJECT_TITLE}
                </h1>
            </motion.div>
        </div>
      </section>

      {/* 2. Control Panel - Floating & Mobile Padding */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 md:-mt-32 relative z-20">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-lg shadow-2xl border border-gray-200 dark:border-slate-700 p-1 md:p-2">
              <div className="bg-gray-100/80 dark:bg-slate-900/80 px-4 py-3 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center rounded-t-md">
                  <h3 className="font-mono text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                      System Status: Active
                  </h3>
                  <span className="text-[10px] md:text-xs text-gray-400 font-mono">Real-time Telemetry</span>
              </div>
              <div className="p-4 md:p-6">
                  <LiveDashboard />
              </div>
          </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 space-y-16 md:space-y-24">
        
        {/* 3. Research Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/50 dark:border-slate-700">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-uni-900 dark:text-white mb-2 md:mb-4 relative inline-block">
                    Research Gap
                    <span className="absolute bottom-1 left-0 w-full h-2 bg-uni-accent/20 -z-10"></span>
                </h2>
                {/* COMPACT TEXT FIX: Removed 'prose', tighter leading, smaller spacing */}
                <div className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-normal md:leading-relaxed text-justify space-y-3">
                    <p>
                        Current technologies create a <span className="text-uni-accent font-bold">"data silo"</span>, where accurate data is disconnected from human context.
                    </p>
                    <p>
                        Most low-cost sensors suffer from environmental drift and lack the cultural context needed for community adoption. Our project addresses the "unaddress" of the community based on habits and economic constraints.
                    </p>
                </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    { icon: Cpu, title: "Engineering Design", desc: "Solar-powered IoT network for multi-pollutant tracking." },
                    { icon: Target, title: "AI Integration", desc: "Machine learning algorithms for auto-calibration." },
                    { icon: Heart, title: "Social Impact", desc: "Culturally resonant UI/UX for health recommendations." },
                    { icon: MapIcon, title: "Policy Bridging", desc: "Spatial mapping for urban planning decisions." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-slate-800 p-5 md:p-6 rounded shadow-lg border-l-4 border-uni-900 dark:border-slate-600 hover:border-uni-accent transition-all"
                    >
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-uni-accent mb-3" />
                        <h3 className="font-bold text-base md:text-lg text-uni-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* 4. Methodology & Survey */}
        <PaperCard title="Survey: The Human Sensor">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                <div className="flex-1 text-gray-700 dark:text-gray-300 space-y-4">
                    {/* COMPACT TEXT FIX */}
                    <p className="text-sm md:text-lg leading-normal md:leading-relaxed text-justify">
                        To tackle the complex engineering challenge, we employ a survey as a <span className="font-bold text-uni-900 dark:text-white">"human sensor"</span>. This approach considers the impact of cultural behaviors such as cooking habits or waste disposal and societal factors like economic state.
                    </p>
                    
                    {/* FORMATTED QUOTE */}
                    <div className="relative pl-4 md:pl-8 border-l-4 border-uni-accent py-2 md:py-4 bg-gradient-to-r from-uni-accent/5 to-transparent rounded-r-lg">
                        <span className="absolute top-0 left-0 -ml-2 -mt-2 text-3xl md:text-4xl text-uni-accent opacity-30 font-serif">"</span>
                        <p className="font-serif text-base md:text-2xl font-medium italic text-uni-900 dark:text-white leading-normal md:leading-relaxed">
                            The revised engineering process shifts from pure technology development to a holistic approach ensuring social sustainability.
                        </p>
                    </div>
                </div>
                <div className="flex-1 w-full flex justify-center mt-2 md:mt-0">
                    <ProjectSurvey />
                </div>
            </div>
        </PaperCard>

        {/* 5. System Architecture & Components */}
        <div className="space-y-8 md:space-y-12">
            <div className="text-center">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-uni-900 dark:text-white bg-white/50 dark:bg-black/50 inline-block px-4 py-2 rounded-lg mx-auto backdrop-blur-sm">
                    Data Flow Architecture
                </h2>
            </div>
            <BlockDiagram />
        </div>

        <div className="space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-uni-900 dark:text-white bg-white/50 dark:bg-black/50 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
                Hardware Specification
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[300px]">
                        <thead>
                            <tr className="bg-uni-900 dark:bg-slate-950 text-white text-xs uppercase tracking-wider">
                                <th className="p-3 md:p-4 font-bold border-r border-gray-700 w-10 md:w-16 text-center">No.</th>
                                <th className="p-3 md:p-4 font-bold">Component Name</th>
                                {/* VISIBLE ON MOBILE NOW */}
                                <th className="p-3 md:p-4 font-bold">Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700 text-sm">
                            {COMPONENT_LIST.map((comp, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors text-gray-700 dark:text-gray-300">
                                    <td className="p-3 text-center font-mono text-gray-400 text-xs md:text-sm">{(idx + 1).toString().padStart(2, '0')}</td>
                                    <td className="p-3 font-semibold text-xs md:text-sm">{comp}</td>
                                    {/* VISIBLE ON MOBILE NOW */}
                                    <td className="p-3 text-[10px] md:text-xs uppercase text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        {comp.includes('Sensor') ? 'Sensor' : comp.includes('Arduino') || comp.includes('Node') ? 'Controller' : 'Module'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* 6. Timeline */}
        <div>
            <div className="text-center mb-8 md:mb-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-uni-900 dark:text-white bg-white/50 dark:bg-black/50 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
                    Project Timeline
                </h2>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium bg-white/50 dark:bg-black/50 inline-block px-2 rounded">
                
                </p>
            </div>
            <GanttChart />
        </div>

        {/* 7. References Table */}
        <div className="border-t border-gray-200 dark:border-slate-800 pt-12 md:pt-16 bg-white/80 dark:bg-slate-900/80 p-4 md:p-8 rounded-xl backdrop-blur-sm">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-uni-900 dark:text-white mb-6 md:mb-8 flex items-center gap-2">
                <Info size={24} className="text-uni-accent" />
                References
            </h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-200 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm min-w-full md:min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-slate-600">
                                <th className="p-3 md:p-4 w-8 md:w-12 text-center">#</th>
                                <th className="p-3 md:p-4">Citation Text</th>
                                <th className="p-3 md:p-4 w-48 hidden md:table-cell">DOI / Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                            {REFERENCES.map((ref) => (
                                <tr key={ref.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="p-3 md:p-4 text-center font-mono text-gray-400 align-top">{ref.id}</td>
                                    <td className="p-3 md:p-4 text-gray-700 dark:text-gray-300 font-serif leading-relaxed text-xs md:text-sm">
                                        {ref.text}
                                        {/* Mobile Link View */}
                                        {ref.doi && (
                                            <a href={ref.doi} target="_blank" rel="noreferrer" className="flex items-center gap-1 mt-2 text-uni-accent md:hidden text-[10px] font-sans font-bold uppercase tracking-wider">
                                                <ExternalLink size={10} /> View Source
                                            </a>
                                        )}
                                    </td>
                                    <td className="p-4 hidden md:table-cell align-middle">
                                        {ref.doi ? (
                                            <a href={ref.doi} target="_blank" rel="noreferrer" className="text-uni-accent dark:text-uni-darkAccent hover:underline truncate block w-40 text-xs font-mono">
                                                {ref.doi}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 text-xs">-</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;