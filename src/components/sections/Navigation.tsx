import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition, useActiveSection, scrollToSection } from '../../hooks/useScroll';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const Navigation = () => {
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(navItems.map(item => item.toLowerCase()));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (item: string) => {
    scrollToSection(item.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg shadow-cyan-500/5'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-pulse-slow">
            AI
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-500 dark:text-cyan-400'
                    : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-900 dark:text-white focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-2 text-slate-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};