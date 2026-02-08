import React from 'react';
import { motion } from 'framer-motion';

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  title?: string;
}

const PaperCard: React.FC<PaperCardProps> = ({ children, className = "", delay = 0, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={`bg-white dark:bg-slate-800 relative shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-uni-900 via-uni-800 to-uni-accent"></div>
      
      <div className="p-8 md:p-10">
        {title && (
          <div className="mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
             <h2 className="font-serif text-2xl md:text-3xl text-uni-900 dark:text-white font-semibold">{title}</h2>
          </div>
        )}
        <div className="font-sans text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {children}
        </div>
      </div>
    </motion.div>
  );
};

export default PaperCard;