import React from 'react';
import { Database, Cpu, Radio } from 'lucide-react';

export const BlockDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 p-4 md:p-8 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
        
        <div className="flex flex-col gap-6 md:gap-12">
            
            {/* Top Section: IoT Network Diagram */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                 <div className="flex-1 w-full">
                      <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4">
                          Figure 1: Network Topology
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">IoT Sensor Network</h3>
                      
                      <div className="text-gray-600 dark:text-gray-400 text-sm leading-normal md:leading-relaxed mb-4 text-justify">
                          <p className="mb-2">The architecture utilizes a multi-node system for robust environmental monitoring:</p>
                          <ul className="list-disc pl-5 space-y-1">
                              <li><strong>End Nodes (Arduino/ESP8266):</strong> Collect raw data from MQ-2/MQ-135 sensors.</li>
                              <li><strong>Transmission:</strong> Data flows via Gateway to the Cloud Server.</li>
                              <li><strong>Topology:</strong> Ensures real-time connectivity across the wireless network.</li>
                          </ul>
                      </div>

                      <div className="flex gap-4 text-xs font-mono text-gray-500 border-t border-gray-100 dark:border-slate-700 pt-4">
                          <span className="flex items-center gap-1"><Radio size={12} /> ZigBee / WiFi</span>
                      </div>
                 </div>
                 <div className="flex-1 w-full relative group">
                      <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors rounded-lg"></div>
                      <img 
                          src="https://www.mdpi.com/sensors/sensors-21-05313/article_deploy/html/images/sensors-21-05313-g002.png" 
                          alt="IoT Network Topology" 
                          className="w-full h-auto rounded-lg border border-gray-200 dark:border-slate-600 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                      />
                      <p className="text-center text-[10px] text-gray-400 mt-2 italic">Source: MDPI Sensors Journal (Ref. Architecture Model)</p>
                 </div>
            </div>

            {/* Bottom Section: Data Processing Diagram */}
            <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 items-center bg-white dark:bg-slate-800 p-5 md:p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                 <div className="flex-1 w-full">
                      <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 md:mb-4">
                          Figure 2: ML Pipeline
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">AI-Driven Data Calibration</h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-normal md:leading-relaxed mb-4 text-justify">
                          Raw sensor data often contains noise and drift. Our system implements a <strong>Machine Learning Pipeline</strong> (SVR/Random Forest) to process this data. The diagram shows the flow from Data Collection → Pre-processing → Feature Extraction → Prediction Model, ensuring high-accuracy air quality indices.
                      </p>
                      
                      <div className="flex gap-4 text-xs font-mono text-gray-500 border-t border-gray-100 dark:border-slate-700 pt-4">
                          <span className="flex items-center gap-1"><Cpu size={12} /> ML Model</span>
                          <span className="flex items-center gap-1"><Database size={12} /> Feature Extraction</span>
                      </div>
                 </div>
                 <div className="flex-1 w-full relative group">
                      <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent transition-colors rounded-lg"></div>
                      <img 
                          src="https://www.mdpi.com/sensors/sensors-25-03183/article_deploy/html/images/sensors-25-03183-g010.png" 
                          alt="AI Data Processing Flow" 
                          className="w-full h-auto rounded-lg border border-gray-200 dark:border-slate-600 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                      />
                      <p className="text-center text-[10px] text-gray-400 mt-2 italic">Source: MDPI Sensors Journal (AI Prediction Model)</p>
                 </div>
            </div>

            {/* Logical Flow Connector */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                 <div className="h-24 w-1 bg-gray-200 dark:bg-slate-700"></div>
            </div>

        </div>
    </div>
  );
};
