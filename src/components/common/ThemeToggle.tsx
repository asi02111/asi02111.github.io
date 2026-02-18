import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      onClick={handleToggle}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-indigo-600 to-purple-600'
          : 'bg-gradient-to-br from-orange-400 to-yellow-400'
      }`} />

      {/* Glow */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-50 transition-all duration-500 ${
        theme === 'dark' ? 'bg-purple-500' : 'bg-yellow-400'
      }`} />

      {/* Icons */}
      <div className="relative z-10 flex items-center justify-center">
        <div className={`absolute transition-all duration-500 transform ${
          theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'
        }`}>
          <FaMoon className="text-xl text-white" />
        </div>
        <div className={`absolute transition-all duration-500 transform ${
          theme === 'light' ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-0'
        }`}>
          <FaSun className="text-xl text-white" />
        </div>
      </div>

      {/* Ripple */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
      )}
    </button>
  );
};

export default ThemeToggle;