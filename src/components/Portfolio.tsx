import React, { useState, useEffect, useRef } from 'react';

const ACCENT = '#4ade80'; // single crisp green accent — used sparingly

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'JavaScript ES6+', level: 95, category: 'Frontend' },
    { name: 'Redux', level: 85, category: 'State Mgmt' },
    { name: 'Tailwind CSS', level: 95, category: 'Styling' },
    { name: 'HTML5 & CSS3', level: 98, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Database' },
  ];

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const isVisible = id => visibleSections.has(id);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080c10;
          --surface: #0e1318;
          --border: rgba(255,255,255,0.07);
          --border-hover: rgba(74,222,128,0.3);
          --text: #e8eaed;
          --muted: #6b7280;
          --accent: #4ade80;
          --accent-dim: rgba(74,222,128,0.08);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        ::selection { background: rgba(74,222,128,0.2); }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 99px; }

        /* ── Reveal animations ── */
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-left { opacity: 0; transform: translateX(-24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-left.visible { opacity: 1; transform: none; }
        .reveal-right { opacity: 0; transform: translateX(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-right.visible { opacity: 1; transform: none; }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }

        /* ── Nav ── */
        nav {
          position: fixed; top: 0; width: 100%; z-index: 100;
          transition: background 0.3s, border-color 0.3s;
        }
        nav.scrolled {
          background: rgba(8,12,16,0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 0 2rem;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: 1.1rem;
          color: var(--text); text-decoration: none;
          display: flex; align-items: center; gap: 10px;
        }
        .logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--accent);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform: scale(1); }
          50% { opacity:0.5; transform: scale(0.8); }
        }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-size: 0.875rem; font-weight: 500;
          color: var(--muted); padding: 4px 0;
          position: relative; transition: color 0.2s;
        }
        .nav-links button::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 100%; height: 1px; background: var(--accent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-links button:hover, .nav-links button.active { color: var(--text); }
        .nav-links button.active::after, .nav-links button:hover::after { transform: scaleX(1); }

        /* ── Layout ── */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

        /* ── Hero ── */
        #home {
          min-height: 100vh; padding-top: 68px;
          display: grid; place-items: center;
          position: relative; overflow: hidden;
        }
        .hero-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%);
          pointer-events: none;
        }
        .hero-glow {
          position: absolute; top: -20%; left: 50%; transform: translateX(-50%);
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: center;
          width: 100%; max-width: 1100px; padding: 4rem 2rem;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border: 1px solid rgba(74,222,128,0.25);
          border-radius: 99px; font-size: 0.78rem;
          color: var(--accent); margin-bottom: 1.5rem;
          background: var(--accent-dim);
          animation: fade-in 0.6s ease forwards;
        }
        .badge-dot {
          width: 6px; height: 6px; border-radius: 50%; background: var(--accent);
          animation: pulse-dot 1.5s ease-in-out infinite;
        }
        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 800; line-height: 1.05;
          color: var(--text); margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .hero-role {
          font-size: 1.05rem; color: var(--muted); margin-bottom: 1.5rem;
          font-weight: 400;
        }
        .hero-role span { color: var(--accent); font-weight: 500; }
        .hero-desc { font-size: 1rem; color: var(--muted); max-width: 440px; line-height: 1.75; margin-bottom: 2rem; }

        .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary {
          padding: 0.75rem 1.75rem;
          background: var(--accent); color: #080c10;
          border: none; border-radius: 6px; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 0.9rem;
          transition: opacity 0.2s, transform 0.2s;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-outline {
          padding: 0.75rem 1.75rem;
          background: transparent;
          border: 1px solid var(--border); border-radius: 6px; cursor: pointer;
          font-family: 'Outfit', sans-serif; font-weight: 500; font-size: 0.9rem;
          color: var(--text); transition: border-color 0.2s, transform 0.2s;
        }
        .btn-outline:hover { border-color: var(--border-hover); transform: translateY(-1px); }

        .hero-image-wrapper {
          display: flex; justify-content: center; align-items: flex-end;
          height: 520px; position: relative;
        }
        .hero-image-wrapper::before {
          content: '';
          position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(74,222,128,0.12), transparent 70%);
          filter: blur(30px);
        }
        .hero-image-wrapper img {
          height: 100%; object-fit: contain; object-position: bottom;
          position: relative; z-index: 1;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.6));
        }

        /* ── Section Base ── */
        section { padding: 6rem 0; }
        .section-label {
          font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--accent); margin-bottom: 0.75rem;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; color: var(--text);
          line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 1rem;
        }
        .section-sub { font-size: 1rem; color: var(--muted); max-width: 560px; line-height: 1.7; }

        /* ── About ── */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-top: 3.5rem; }
        .about-text p { color: var(--muted); line-height: 1.8; margin-bottom: 1.25rem; }
        .about-text strong { color: var(--text); font-weight: 500; }
        .about-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
        .about-tag {
          padding: 5px 12px; border: 1px solid var(--border);
          border-radius: 4px; font-size: 0.8rem; color: var(--muted);
        }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
        .stat-cell {
          background: var(--surface); padding: 1.75rem;
          transition: background 0.2s;
        }
        .stat-cell:hover { background: #131920; }
        .stat-num {
          font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800;
          color: var(--accent); line-height: 1;
        }
        .stat-label { font-size: 0.82rem; color: var(--muted); margin-top: 4px; }

        /* ── Skills ── */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-top: 3rem; }
        .skill-cell {
          background: var(--surface); padding: 1.5rem;
          transition: background 0.2s;
        }
        .skill-cell:hover { background: #131920; }
        .skill-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
        .skill-name { font-weight: 500; font-size: 0.9rem; color: var(--text); }
        .skill-cat { font-size: 0.7rem; color: var(--muted); }
        .skill-bar-track { height: 2px; background: rgba(255,255,255,0.06); border-radius: 99px; overflow: hidden; }
        .skill-bar-fill {
          height: 100%; background: var(--accent);
          border-radius: 99px;
          transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        .skill-pct { font-size: 0.72rem; color: var(--muted); margin-top: 6px; text-align: right; }

        .qualities-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
        .quality-card {
          border: 1px solid var(--border); border-radius: 10px; padding: 1.25rem;
          background: var(--surface); transition: border-color 0.2s;
        }
        .quality-card:hover { border-color: var(--border-hover); }
        .quality-icon { font-size: 1.25rem; margin-bottom: 0.6rem; }
        .quality-title { font-weight: 600; font-size: 0.875rem; color: var(--text); margin-bottom: 0.25rem; }
        .quality-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.5; }

        /* ── Experience / Timeline ── */
        .timeline { position: relative; margin-top: 3rem; }
        .timeline::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 1px; background: var(--border);
        }
        .timeline-item { position: relative; padding-left: 2.5rem; padding-bottom: 3rem; }
        .timeline-dot {
          position: absolute; left: -5px; top: 4px;
          width: 11px; height: 11px; border-radius: 50%;
          background: var(--accent); border: 2px solid var(--bg);
        }
        .tl-card {
          border: 1px solid var(--border); border-radius: 12px;
          padding: 2rem; background: var(--surface);
          transition: border-color 0.25s;
        }
        .tl-card:hover { border-color: var(--border-hover); }
        .tl-meta { display: flex; flex-wrap: wrap; gap: 1rem; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; }
        .tl-role { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.15rem; color: var(--text); }
        .tl-company { color: var(--accent); font-size: 0.875rem; margin-top: 2px; }
        .tl-period {
          font-size: 0.75rem; color: var(--muted);
          border: 1px solid var(--border); padding: 3px 10px; border-radius: 99px;
          white-space: nowrap;
        }
        .tl-location { font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; }
        .tl-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; }
        .tl-list li {
          font-size: 0.875rem; color: var(--muted); line-height: 1.6;
          padding-left: 1rem; position: relative;
        }
        .tl-list li::before {
          content: '—'; position: absolute; left: 0; color: var(--accent);
          font-size: 0.7rem; top: 3px;
        }

        /* ── Projects ── */
        .project-card {
          border: 1px solid var(--border); border-radius: 14px;
          background: var(--surface); overflow: hidden;
          transition: border-color 0.25s, transform 0.25s;
        }
        .project-card:hover { border-color: var(--border-hover); transform: translateY(-2px); }
        .project-inner { padding: 2.5rem; }
        .project-head {
          display: flex; flex-wrap: wrap; gap: 1rem;
          align-items: flex-start; justify-content: space-between; margin-bottom: 1rem;
        }
        .project-name { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 700; color: var(--text); }
        .project-desc { color: var(--muted); font-size: 0.9rem; line-height: 1.7; margin-bottom: 1.5rem; }
        .tech-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
        .tech-chip {
          padding: 4px 10px; border: 1px solid var(--border);
          border-radius: 4px; font-size: 0.75rem; color: var(--muted);
          transition: border-color 0.2s, color 0.2s;
        }
        .tech-chip:hover { border-color: var(--border-hover); color: var(--text); }
        .features-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.75rem; }
        .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
        .feature-item {
          font-size: 0.82rem; color: var(--muted); display: flex; align-items: center; gap: 6px;
        }
        .feature-item::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .live-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 0.6rem 1.25rem; border: 1px solid rgba(74,222,128,0.3);
          border-radius: 6px; font-size: 0.82rem; font-weight: 500;
          color: var(--accent); text-decoration: none;
          transition: background 0.2s;
          font-family: 'Outfit', sans-serif;
          cursor: pointer; background: none;
          white-space: nowrap;
        }
        .live-link:hover { background: var(--accent-dim); }

        /* ── Contact ── */
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; margin-top: 3rem; }
        .contact-intro { font-size: 1rem; color: var(--muted); line-height: 1.8; margin-bottom: 2rem; }
        .contact-items { display: flex; flex-direction: column; gap: 1rem; }
        .contact-item {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.25rem; border: 1px solid var(--border);
          border-radius: 8px; text-decoration: none;
          background: var(--surface); transition: border-color 0.2s;
        }
        .contact-item:hover { border-color: var(--border-hover); }
        .contact-icon { width: 36px; height: 36px; border-radius: 6px; background: var(--accent-dim); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
        .contact-label { font-size: 0.72rem; color: var(--muted); margin-bottom: 2px; }
        .contact-val { font-size: 0.875rem; color: var(--text); font-weight: 500; }
        .social-links { display: flex; gap: 0.75rem; margin-top: 2rem; }
        .social-btn {
          width: 40px; height: 40px; border-radius: 8px;
          border: 1px solid var(--border); background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .social-btn:hover { border-color: var(--border-hover); color: var(--accent); }

        .availability-card {
          border: 1px solid rgba(74,222,128,0.15);
          border-radius: 12px; padding: 2rem;
          background: rgba(74,222,128,0.03);
        }
        .avail-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 0.5rem; }
        .avail-text { font-size: 0.875rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.5rem; }

        /* ── Footer ── */
        footer {
          border-top: 1px solid var(--border); padding: 2rem 0;
          text-align: center; font-size: 0.8rem; color: var(--muted);
        }

        /* ── Mobile hamburger ── */
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: var(--text); }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-content { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
          .hero-image-wrapper { height: 300px; }
          .btn-group { justify-content: center; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .stat-grid { grid-template-columns: 1fr 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .qualities-row { grid-template-columns: 1fr; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu {
            position: fixed; top: 68px; left: 0; right: 0;
            background: rgba(8,12,16,0.97); backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            padding: 1rem 0; z-index: 99;
          }
          .mobile-menu button {
            display: block; width: 100%; padding: 0.75rem 2rem;
            text-align: left; background: none; border: none;
            font-family: 'Outfit', sans-serif; font-size: 0.9rem;
            color: var(--muted); cursor: pointer;
            transition: color 0.2s;
          }
          .mobile-menu button:hover { color: var(--accent); }
        }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* NAV */}
      <nav className={scrollY > 40 ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a className="nav-logo" href="#home" onClick={e => { e.preventDefault(); scrollToSection('home'); }}>
            <div className="logo-dot" />
            Ashraful Islam
          </a>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}>
                <button
                  className={activeSection === item.toLowerCase() ? 'active' : ''}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div>
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for Opportunities
            </div>
            <h1 className="hero-name">Ashraful<br />Islam</h1>
            <p className="hero-role">
              Frontend Developer &nbsp;·&nbsp; <span>MERN Stack</span>
            </p>
            <p className="hero-desc">
              Crafting seamless digital experiences with modern web technologies. Specialised in building scalable, responsive applications that solve real-world problems.
            </p>
            <div className="btn-group">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>View My Work</button>
              <button className="btn-outline" onClick={() => scrollToSection('contact')}>Get In Touch</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/as.png" alt="Ashraful Islam" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className={`reveal ${isVisible('about') ? 'visible' : ''}`}>
            <p className="section-label">About</p>
            <h2 className="section-title">Building things<br />that matter</h2>
          </div>
          <div className="about-grid">
            <div className={`about-text reveal ${isVisible('about') ? 'visible' : ''} delay-2`}>
              <p>
                I'm a passionate Frontend Developer with over <strong>1+ year of professional experience</strong> specialising in the MERN stack. I thrive on transforming complex problems into elegant, user-friendly solutions.
              </p>
              <p>
                Currently crafting innovative web applications at <strong>9am Solution</strong>, where I've contributed to building comprehensive business management systems integrating e-commerce, restaurant, and pharmaceutical operations.
              </p>
              <p>
                My approach combines technical excellence with creative problem-solving — ensuring every project not only meets requirements but exceeds expectations.
              </p>
              <div className="about-tags">
                <span className="about-tag">📍 Dhaka, Bangladesh</span>
                <span className="about-tag">🎓 BSc in CSE · 3.57 CGPA</span>
                <span className="about-tag">⚡ Open to remote work</span>
              </div>
            </div>
            <div className={`reveal-right ${isVisible('about') ? 'visible' : ''} delay-3`}>
              <div className="stat-grid">
                <div className="stat-cell">
                  <div className="stat-num">1+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-num">3+</div>
                  <div className="stat-label">Platforms Built</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-num">40%</div>
                  <div className="stat-label">Perf. Improvement</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-num">30%</div>
                  <div className="stat-label">Dev Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className={`reveal ${isVisible('skills') ? 'visible' : ''}`}>
            <p className="section-label">Skills</p>
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-sub">Technologies I work with daily to build modern, performant web applications.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={skill.name} className={`skill-cell reveal ${isVisible('skills') ? 'visible' : ''} delay-${Math.min(i+1,6)}`}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-cat">{skill.category}</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: isVisible('skills') ? `${skill.level}%` : '0%' }}
                  />
                </div>
                <div className="skill-pct">{skill.level}%</div>
              </div>
            ))}
          </div>
          <div className="qualities-row" style={{ marginTop: '2rem' }}>
            {[
              { icon: '⚡', title: 'Performance', desc: '40% faster load times via code splitting & lazy loading' },
              { icon: '◻', title: 'UI/UX Focused', desc: 'Pixel-perfect, responsive interfaces for seamless UX' },
              { icon: '↺', title: 'Agile', desc: 'Experienced in Agile, code reviews & tight deadlines' },
            ].map((q, i) => (
              <div key={q.title} className={`quality-card reveal ${isVisible('skills') ? 'visible' : ''} delay-${i+4}`}>
                <div className="quality-icon">{q.icon}</div>
                <div className="quality-title">{q.title}</div>
                <div className="quality-desc">{q.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className={`reveal ${isVisible('experience') ? 'visible' : ''}`}>
            <p className="section-label">Experience</p>
            <h2 className="section-title">Where I've Worked</h2>
          </div>
          <div className="timeline">
            {/* Work */}
            <div className={`timeline-item reveal ${isVisible('experience') ? 'visible' : ''} delay-2`}>
              <div className="timeline-dot" />
              <div className="tl-card">
                <div className="tl-meta">
                  <div>
                    <div className="tl-role">Frontend Developer — MERN Stack</div>
                    <div className="tl-company">9am Solution</div>
                  </div>
                  <span className="tl-period">Jan 2025 – Present</span>
                </div>
                <div className="tl-location">Dhaka, Bangladesh</div>
                <ul className="tl-list">
                  <li>Developed and maintained frontend architecture for an integrated multi-business platform covering e-commerce, restaurant, and medicine shop modules.</li>
                  <li>Built responsive, pixel-perfect UIs using React.js for 3 customer-facing websites and a comprehensive ERP system.</li>
                  <li>Implemented complex state management using Redux for seamless data flow across multiple business modules.</li>
                  <li>Optimised application performance resulting in 40% faster page load times through code splitting and lazy loading.</li>
                  <li>Developed a reusable component library reducing development time by 30% across all platforms.</li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <div className={`timeline-item reveal ${isVisible('experience') ? 'visible' : ''} delay-4`}>
              <div className="timeline-dot" style={{ background: '#6b7280' }} />
              <div className="tl-card">
                <div className="tl-meta">
                  <div>
                    <div className="tl-role">Bachelor of Science in CSE</div>
                    <div className="tl-company">Sonargaon University</div>
                  </div>
                  <span className="tl-period">Graduated 2024</span>
                </div>
                <div className="tl-location">Dhaka, Bangladesh</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>CGPA: <strong style={{ color: 'var(--accent)' }}>3.57 / 4.00</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className={`reveal ${isVisible('projects') ? 'visible' : ''}`}>
            <p className="section-label">Projects</p>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-sub">A selection of projects I've built and shipped.</p>
          </div>
          <div style={{ marginTop: '2.5rem' }}>
            <div className={`project-card reveal ${isVisible('projects') ? 'visible' : ''} delay-2`}>
              <div className="project-inner">
                <div className="project-head">
                  <div>
                    <div className="project-name">Bizlyne</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '2px' }}>Multi-Business Platform</div>
                  </div>
                  <a href="https://bizlyne.com" target="_blank" rel="noopener noreferrer" className="live-link">
                    View Live
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
                <p className="project-desc">
                  Comprehensive business management system handling e-commerce, restaurant, and medicine shop operations — built with a focus on performance and scalability.
                </p>
                <div className="tech-chips">
                  {['React.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'REST APIs'].map(t => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
                <div className="features-label">Key Features</div>
                <div className="features-grid">
                  {[
                    'E-commerce with cart & checkout',
                    'Restaurant management system',
                    'Medicine shop + prescription upload',
                    'Integrated ERP system',
                    'Role-based access control',
                  ].map(f => (
                    <div key={f} className="feature-item">{f}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className={`reveal ${isVisible('contact') ? 'visible' : ''}`}>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's Work Together</h2>
          </div>
          <div className="contact-grid">
            <div className={`reveal-left ${isVisible('contact') ? 'visible' : ''} delay-2`}>
              <p className="contact-intro">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              <div className="contact-items">
                <a href="mailto:asbashrafulislam@gmail.com" className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-val">asbashrafulislam@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+8801869225821" className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-val">+880 1869 225821</div>
                  </div>
                </a>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-val">Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/asi02111" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02.005 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://bizlyne.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Website">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className={`reveal-right ${isVisible('contact') ? 'visible' : ''} delay-3`}>
              <div className="availability-card">
                <div className="avail-title">Currently Available</div>
                <p className="avail-text">
                  I'm open to full-time roles, freelance contracts, and interesting collaborations. I'm particularly excited about projects that challenge me to grow and create meaningful impact.
                </p>
                <button className="btn-primary" onClick={() => window.location.href = 'mailto:asbashrafulislam@gmail.com'}>
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2025 Ashraful Islam · Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}