import { useEffect, useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaChevronDown,
} from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', section: 'home', hasDropdown: false },
    { name: 'About', section: 'about', hasDropdown: false },
    { name: 'Skills', section: 'skills', hasDropdown: false },
    {
      name: 'Work',
      section: 'experience',
      hasDropdown: true,
      items: ['Experience', 'Projects'],
    },
    { name: 'Contact', section: 'contact', hasDropdown: false },
  ];

  const topBarInfo = [
    { icon: FaPhone, label: '+880 1869 225821', href: 'tel:+8801869225821' },
    { icon: FaEnvelope, label: 'asbashrafulislam@gmail.com', href: 'mailto:asbashrafulislam@gmail.com' },
  ];

  const socials = [
    { icon: FaGithub, href: 'https://github.com/asi02111' },
    { icon: FaLinkedinIn, href: '#' },
  ];

  /* ── shared style tokens ── */
  const bg         = isDark ? 'bg-neutral-950' : 'bg-white';
  const border     = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const textMuted  = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const textBase   = isDark ? 'text-neutral-200' : 'text-neutral-700';
  const hoverText  = isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600';
  const accent     = isDark ? 'bg-emerald-500' : 'bg-emerald-600';
  const accentBar  = isDark ? 'bg-emerald-400' : 'bg-emerald-600';
  const socialHov  = isDark
    ? 'hover:bg-emerald-500 hover:text-white'
    : 'hover:bg-emerald-600 hover:text-white';

  return (
    <>
      {/* ── Top Bar ── */}
      <div className={`hidden lg:block border-b transition-colors duration-300 ${
        isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
      }`}>
        <div className="mx-auto px-10 py-2">
          <div className="flex items-center justify-between">

            {/* Left: contact info */}
            <div className="flex items-center gap-6">
              {topBarInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 text-xs transition-colors ${textMuted} ${hoverText}`}
                >
                  <item.icon className="text-[10px]" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Right: socials + theme toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 rounded flex items-center justify-center text-xs transition-all ${textMuted} ${socialHov}`}
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
              <div className={`w-px h-4 ${isDark ? 'bg-neutral-700' : 'bg-neutral-300'}`} />
              <ThemeToggle />
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? `${isDark ? 'bg-neutral-950/95' : 'bg-white/95'} backdrop-blur-md shadow-lg border-b ${border}`
            : `${bg}`
        }`}
      >
        <div className="mx-auto px-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent}`}>
                <span className="text-white font-bold text-lg font-mono">AI</span>
              </div>
              <div className="flex flex-col text-left">
                <span className={`text-lg font-bold leading-none tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`} style={{ fontFamily: 'Syne, sans-serif' }}>
                  Ashraful Islam
                </span>
                <span className={`text-[10px] tracking-wider ${textMuted}`}>
                  Frontend Developer
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => !link.hasDropdown && scrollToSection(link.section)}
                    className={`flex items-center gap-1 px-5 py-2 text-sm font-medium transition-all relative group ${textBase} ${hoverText}`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <FaChevronDown
                        className={`text-[9px] transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                    {/* animated underline */}
                    <span className={`absolute bottom-0 left-3 right-3 h-px ${accentBar}
                      transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </button>

                  {/* Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className={`absolute top-full left-0 mt-2 w-44 rounded-xl shadow-xl border overflow-hidden z-50 ${
                      isDark
                        ? 'bg-neutral-900 border-neutral-800'
                        : 'bg-white border-neutral-200'
                    }`}>
                      {link.items?.map((item) => (
                        <button
                          key={item}
                          onClick={() => scrollToSection(item.toLowerCase())}
                          className={`block w-full text-left px-5 py-3 text-sm transition-colors border-b last:border-0 ${
                            isDark
                              ? `text-neutral-300 hover:bg-neutral-800 border-neutral-800 ${hoverText}`
                              : `text-neutral-600 hover:bg-neutral-50 border-neutral-100 ${hoverText}`
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="mailto:asbashrafulislam@gmail.com"
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all
                  ${isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-700'}
                  hover:-translate-y-0.5 active:translate-y-0`}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded transition-colors ${
                isDark ? 'text-neutral-300 hover:bg-neutral-800' : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          } ${isDark ? 'bg-black/70' : 'bg-black/50'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div className={`absolute top-0 right-0 h-full w-72 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isDark ? 'bg-neutral-950 border-l border-neutral-800' : 'bg-white border-l border-neutral-200'}`}>

          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${border}`}>
            <span className={`font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1.5 rounded transition-colors ${
                isDark ? 'text-neutral-400 hover:bg-neutral-800' : 'text-neutral-500 hover:bg-neutral-100'
              }`}
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="p-5 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.section)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? `text-neutral-300 hover:bg-neutral-800 ${hoverText}`
                    : `text-neutral-700 hover:bg-neutral-100 ${hoverText}`
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className={`px-5 pb-5 border-b ${border}`}>
            <a
              href="mailto:asbashrafulislam@gmail.com"
              className={`flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold text-white transition-all ${
                isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              Hire Me
            </a>
          </div>

          {/* Theme + Socials */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all ${
                    isDark
                      ? `bg-neutral-800 ${textMuted} ${socialHov}`
                      : `bg-neutral-100 text-neutral-500 ${socialHov}`
                  }`}
                >
                  <s.icon />
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;