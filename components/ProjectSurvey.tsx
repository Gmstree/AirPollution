import React from 'react';
import { SURVEY_DATA } from '../constants';

const ProjectSurvey: React.FC = () => {
  const total = SURVEY_DATA.reduce((acc, item) => acc + item.value, 0);
  let accumulatedPercent = 0;

  // Function to create SVG slices
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-gray-100 dark:border-slate-700 w-full flex flex-col items-center">
      <h3 className="font-serif text-lg font-bold text-uni-900 dark:text-white mb-6 w-full text-center border-b border-gray-100 dark:border-slate-700 pb-2">
        Socio-Technical Survey Data
      </h3>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* SVG Pie Chart */}
        <div className="relative w-64 h-64 shrink-0">
          <svg viewBox="-1 -1 2 2" className="transform -rotate-90 w-full h-full">
            {SURVEY_DATA.map((item, index) => {
              const startPercent = accumulatedPercent;
              const slicePercent = item.value / total;
              accumulatedPercent += slicePercent;
              const endPercent = accumulatedPercent;

              const [startX, startY] = getCoordinatesForPercent(startPercent);
              const [endX, endY] = getCoordinatesForPercent(endPercent);

              const largeArcFlag = slicePercent > 0.5 ? 1 : 0;
              
              const pathData = [
                `M 0 0`,
                `L ${startX} ${startY}`,
                `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                `Z`
              ].join(' ');

              return (
                <path
                  key={item.name}
                  d={pathData}
                  fill={item.color}
                  className="hover:opacity-90 transition-opacity cursor-pointer stroke-white dark:stroke-slate-800 stroke-[0.02]"
                />
              );
            })}
            {/* Center Hole for Donut Look */}
            <circle cx="0" cy="0" r="0.6" fill="currentColor" className="text-white dark:text-slate-800" />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="text-center">
                <span className="block text-3xl font-bold text-uni-900 dark:text-white">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Impact</span>
             </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3 w-full">
          {SURVEY_DATA.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
              </div>
              <span className="font-mono text-sm font-bold text-gray-500 dark:text-gray-400">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSurvey;