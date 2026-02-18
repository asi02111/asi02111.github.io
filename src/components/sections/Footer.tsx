import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <footer
      className={`border-t py-10 transition-colors duration-300 ${
        isDark
          ? 'bg-neutral-950 border-neutral-800'
          : 'bg-white border-neutral-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold text-white ${
              isDark ? 'bg-emerald-500' : 'bg-emerald-600'
            }`}>
              AI
            </div>
            <span
              className={`text-sm font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Ashraful Islam
            </span>
          </button>

          {/* Nav links */}
          <div className="hidden sm:flex items-center gap-5">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollToSection(l.toLowerCase())}
                className={`text-xs transition-colors ${
                  isDark
                    ? 'text-neutral-500 hover:text-emerald-400'
                    : 'text-neutral-400 hover:text-emerald-600'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-xs ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>
            © 2025 Ashraful Islam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;