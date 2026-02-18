import type { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className = '' }: SectionTitleProps) => {
  return (
    <h2 className={`text-5xl md:text-6xl font-bold mb-16 text-center ${className}`}>
      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
};