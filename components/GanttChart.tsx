import React from 'react';

interface Task {
  name: string;
  start: number; // Week number 1-22
  end: number;   // Week number 1-22
  category: 'Research' | 'Hardware' | 'Software' | 'AI' | 'Integration' | 'Testing' | 'Final';
}

const tasks: Task[] = [
  { name: "Literature Review", start: 1, end: 2, category: 'Research' },
  { name: "Requirement Analysis", start: 3, end: 4, category: 'Research' },
  { name: "Component Procurement", start: 5, end: 6, category: 'Hardware' },
  { name: "Circuit Design & Sim", start: 7, end: 8, category: 'Hardware' },
  { name: "Hardware Assembly", start: 9, end: 12, category: 'Hardware' },
  { name: "Sensor Calibration", start: 11, end: 12, category: 'Hardware' },
  { name: "Firmware Development", start: 10, end: 13, category: 'Software' },
  { name: "IoT Cloud Integration", start: 13, end: 15, category: 'Software' },
  { name: "AI Model Training", start: 15, end: 17, category: 'AI' },
  { name: "System Integration", start: 17, end: 18, category: 'Integration' },
  { name: "Testing & Debugging", start: 18, end: 20, category: 'Testing' },
  { name: "Documentation", start: 20, end: 22, category: 'Final' },
];

const categoryColors = {
  Research: 'bg-blue-600',
  Hardware: 'bg-emerald-600',
  Software: 'bg-violet-600',
  AI: 'bg-amber-500',
  Integration: 'bg-cyan-600',
  Testing: 'bg-slate-600',
  Final: 'bg-gray-800 dark:bg-gray-600',
};

const GanttChart: React.FC = () => {
  const totalWeeks = 22;

  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-colors">
      {/* Header - Compact & White */}
      <div className="bg-gray-50 dark:bg-slate-900 px-6 py-4 border-b border-gray-200 dark:border-slate-700 flex items-center gap-3">
        <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Project Execution Timeline</h3>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1000px] p-6 pt-2">
          
          {/* Timeline Header Row */}
          <div className="grid grid-cols-[200px_1fr] gap-4 mb-2 border-b border-gray-200 dark:border-slate-700 pb-2">
             <div className="font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-xs flex items-end pb-1">Task Phase</div>
             
             {/* Fixed Grid Columns using Inline Style to guarantee layout */}
             <div className="grid gap-0 relative" style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}>
                {[...Array(totalWeeks)].map((_, i) => (
                  <div key={i} className="text-center group">
                    <span className="text-[10px] text-gray-400 font-mono block mb-1">W{i+1}</span>
                    <div className="h-2 border-l border-gray-200 dark:border-slate-700 mx-auto"></div>
                  </div>
                ))}
             </div>
          </div>

          {/* Rows */}
          <div className="space-y-2 relative">
             {/* Background Grid Lines */}
             <div className="absolute inset-0 grid grid-cols-[200px_1fr] gap-4 pointer-events-none h-full">
                <div></div>
                <div className="grid gap-0 h-full" style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}>
                   {[...Array(totalWeeks)].map((_, i) => (
                      <div key={i} className="border-l border-gray-100 dark:border-slate-700/50 h-full"></div>
                   ))}
                </div>
             </div>

             {tasks.map((task, index) => (
               <div key={index} className="grid grid-cols-[200px_1fr] gap-4 items-center relative z-10 hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors rounded-lg py-2 px-2 -mx-2">
                  <div className="text-sm font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {task.name}
                  </div>
                  <div className="grid gap-0 h-8 items-center rounded relative" style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}>
                     {/* The Bar */}
                     <div 
                        className={`h-5 rounded shadow-sm flex items-center justify-center text-[9px] font-bold text-white uppercase tracking-wider ${categoryColors[task.category]} relative overflow-hidden`}
                        style={{
                          gridColumnStart: task.start,
                          gridColumnEnd: task.end + 1,
                          marginLeft: '2px',
                          marginRight: '2px'
                        }}
                     >
                        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"></div>
                        <span className="relative z-10 truncate px-2">{task.category}</span>
                     </div>
                  </div>
               </div>
             ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 justify-end border-t border-gray-100 dark:border-slate-700 pt-4">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-2">
                   <div className={`w-3 h-3 rounded-full ${color.split(' ')[0]}`}></div>
                   <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{cat}</span>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GanttChart;