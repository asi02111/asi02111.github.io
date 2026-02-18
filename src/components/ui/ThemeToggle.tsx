import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary border-2 border-light-border dark:border-dark-border hover:border-light-accent-primary dark:hover:border-dark-accent-primary transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-dark-accent-primary" />
      ) : (
        <Moon className="w-5 h-5 text-light-accent-primary" />
      )}
    </button>
  );
};