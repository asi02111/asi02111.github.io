import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all duration-300';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50',
    secondary: 'border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};