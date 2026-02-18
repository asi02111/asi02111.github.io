import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`
        bg-white/50 dark:bg-slate-800/50 
        backdrop-blur-sm 
        border border-slate-200 dark:border-cyan-500/20 
        rounded-xl 
        ${hover ? 'hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};