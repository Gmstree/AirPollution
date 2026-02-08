import React from 'react';
import { Globe, Map as MapIcon } from 'lucide-react';

const Monitor: React.FC = () => {
  return (
    <div className="min-h-screen py-24 px-4 bg-transparent">
       <div className="max-w-7xl mx-auto space-y-24">
           
           {/* Header */}
           <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-uni-900 dark:text-white flex items-center justify-center gap-4">
                 <Globe className="text-uni-accent w-8 h-8 md:w-12 md:h-12" /> Global Air Intelligence
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">Real-time Atmospheric Data Visualization</p>
           </div>
           
           {/* Section 1: Global Earth & Bangladesh Fixed Map */}
           <div className="grid grid-cols-1 gap-12">
               
               {/* Earth Nullschool - Wind & Particulates */}
               <div className="bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 h-[300px] md:h-[700px] relative group w-full">
                   <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs font-mono text-green-400 border border-green-900 pointer-events-none">
                       Earth Nullschool: Surface Wind & PM2.5
                   </div>
                   <iframe 
                      src="https://earth.nullschool.net/#current/wind/surface/level/orthographic/loc=90.238,23.867,3000" 
                      className="w-full h-full border-0"
                      title="Earth Wind Map"
                      loading="lazy"
                   ></iframe>
               </div>

               {/* IQAir - Bangladesh Fixed Map */}
               {/* HIDDEN ON MOBILE (hidden), VISIBLE ON DESKTOP (md:block) as per user instruction due to iframe limitations */}
               <div className="hidden md:block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-slate-700 h-[700px] relative w-full">
                 <div className="absolute top-0 left-0 z-20 w-full bg-gray-100 dark:bg-slate-900 px-4 py-2 border-b border-gray-200 dark:border-slate-700 text-xs font-bold text-gray-600 dark:text-gray-300">
                     IQAir Real-time Index (Bangladesh Region)
                 </div>
                 {/* Container to crop header, sidebars (especially left list), and popups */}
                 <div className="w-full h-full overflow-hidden relative pointer-events-none">
                     <iframe 
                        src="https://www.iqair.com/air-quality-map?zoomLevel=7&lat=23.86731158&lng=90.2381274323" 
                        // Desktop Only Tuning
                        className="w-[140%] h-[140%] -mt-[200px] -ml-[380px] border-0"
                        title="IQAir Map"
                        loading="lazy"
                        scrolling="no"
                     ></iframe>
                 </div>
                 {/* Bottom Cover for potential footer popups */}
                 <div className="absolute bottom-0 left-0 w-full h-12 bg-white dark:bg-slate-800 z-30"></div>
              </div>
           </div>

           {/* Section 3: AirNet World Wide Map - Clean Fixed View */}
           <div className="space-y-4 pt-12 border-t border-gray-200 dark:border-slate-800">
               <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-uni-900 dark:text-white flex items-center justify-center gap-3">
                      <MapIcon className="text-blue-600" /> AirNet World Wide Map
                  </h3>
               </div>
               
               <div className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-slate-700 h-[400px] md:h-[800px] w-full relative">
                   {/* Strictly cropped and locked map view to hide ads and headers */}
                   <div className="w-full h-full overflow-hidden pointer-events-none">
                       <iframe 
                          src="https://waqi.info/" 
                          className="w-[100%] h-[130%] -mt-[120px] md:-mt-[100px] border-0"
                          title="AirNet World Wide Map"
                          loading="lazy"
                          scrolling="no"
                       ></iframe>
                   </div>
                   <div className="absolute inset-x-0 bottom-0 h-8 md:h-12 bg-slate-50 dark:bg-slate-800 z-10"></div>
               </div>
           </div>

        </div>
    </div>
  );
};

export default Monitor;