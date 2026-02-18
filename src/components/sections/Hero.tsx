import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-neutral-950' : 'bg-white'
      }`}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)'
            : 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 400,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-10 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 lg:py-0">

          {/* Left */}
          <div className="space-y-6 animate-fade-in-up">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border"
              style={{
                background: 'rgba(52,211,153,0.08)',
                borderColor: 'rgba(52,211,153,0.25)',
                color: isDark ? '#34d399' : '#059669',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>

            {/* Name */}
            <div>
              <h1
                className={`font-extrabold leading-[1.04] tracking-tight ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
                style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
              >
                Ashraful<br />Islam
              </h1>
            </div>

            {/* Role */}
            <p className={`text-base font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Frontend Developer
              <span className={`mx-2 ${isDark ? 'text-neutral-700' : 'text-neutral-300'}`}>·</span>
              <span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>MERN Stack</span>
            </p>

            {/* Description */}
            <p className={`text-base leading-relaxed max-w-md ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Crafting seamless digital experiences with modern web technologies.
              Specialised in building scalable, responsive applications that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all
                  hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all border
                  hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? 'border-neutral-700 text-neutral-200 hover:border-emerald-500/50 hover:bg-neutral-900'
                    : 'border-neutral-300 text-neutral-700 hover:border-emerald-500/50 hover:bg-neutral-50'
                }`}
              >
                Get In Touch
              </button>
            </div>

            {/* Stats strip */}
            <div className={`flex gap-6 pt-4 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
              {[
                { num: '1+', label: 'Years Exp.' },
                { num: '3+', label: 'Platforms' },
                { num: '40%', label: 'Perf. Boost' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className={`text-xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {s.num}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="hidden lg:flex justify-end items-end h-[70vh] relative">
            {/* Glow under image */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(52,211,153,0.15), transparent 70%)',
                filter: 'blur(24px)',
              }}
            />
            <img
              src="/as.png"
              alt="Ashraful Islam"
              className="h-full object-contain object-bottom relative z-10"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.35))' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className={`w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5 ${
          isDark ? 'border-neutral-700' : 'border-neutral-300'
        }`}>
          <div className={`w-1 h-2 rounded-full ${isDark ? 'bg-neutral-500' : 'bg-neutral-400'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;