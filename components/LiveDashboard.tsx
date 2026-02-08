import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Wind, Droplets, Thermometer } from 'lucide-react';

const GraphLine = ({ color }: { color: string }) => {
  return (
    <div className="flex items-end h-32 gap-1 overflow-hidden mt-4">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-full rounded-t-sm opacity-60 ${color}`}
          initial={{ height: "20%" }}
          animate={{ height: `${Math.random() * 80 + 20}%` }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const LiveDashboard: React.FC = () => {
  const [aqi, setAqi] = useState(45);
  const [co2, setCo2] = useState(412);
  const [temp, setTemp] = useState(24.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setAqi(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      setCo2(prev => prev + (Math.random() > 0.5 ? 2 : -2));
      setTemp(prev => Number((prev + (Math.random() > 0.5 ? 0.1 : -0.1)).toFixed(1)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* AQI Monitor */}
      <div className="bg-uni-900 dark:bg-black text-white p-6 rounded-sm shadow-xl border-l-4 border-green-500">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Real-time AQI</h3>
            <div className="text-4xl font-mono font-bold mt-1">{aqi}</div>
            <span className="text-green-400 text-xs font-bold px-2 py-0.5 bg-green-900/50 rounded mt-2 inline-block">GOOD</span>
          </div>
          <Activity className="text-green-500 opacity-50" />
        </div>
        <GraphLine color="bg-green-500" />
      </div>

      {/* CO Monitor */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-sm shadow-md border border-gray-200 dark:border-slate-700 transition-colors">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">CO Levels (PPM)</h3>
            <div className="text-4xl font-mono font-bold mt-1 text-gray-800 dark:text-white">{co2}</div>
          </div>
          <Wind className="text-uni-accent opacity-50" />
        </div>
        <GraphLine color="bg-uni-accent" />
      </div>

      {/* Climate */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-sm shadow-md border border-gray-200 dark:border-slate-700 transition-colors">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Micro-Climate</h3>
          <Thermometer className="text-blue-500 opacity-50" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-2xl font-mono font-bold text-gray-800 dark:text-white">{temp}°C</span>
            <span className="text-xs text-gray-400">Temperature</span>
          </div>
          <div>
            <span className="block text-2xl font-mono font-bold text-gray-800 dark:text-white">62%</span>
            <span className="text-xs text-gray-400">Humidity</span>
          </div>
        </div>
        <div className="mt-4 h-2 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-blue-500"
               animate={{ width: ["60%", "65%", "62%"] }}
               transition={{ duration: 3, repeat: Infinity }}
             />
        </div>
      </div>
    </div>
  );
};

export default LiveDashboard;