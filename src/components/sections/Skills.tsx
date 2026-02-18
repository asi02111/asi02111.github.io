import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

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

const qualities = [
  { icon: '⚡', title: 'Performance', desc: '40% faster load times via code splitting & lazy loading' },
  { icon: '◻', title: 'UI / UX Focused', desc: 'Pixel-perfect, responsive interfaces for seamless UX' },
  { icon: '↺', title: 'Agile', desc: 'Experienced in Agile, code reviews & tight deadlines' },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    const el = document.getElementById('skills');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-10">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`}>Skills</p>
          <h2
            className={`font-extrabold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
          >
            Technical Arsenal
          </h2>
          <p className={`mt-3 text-base max-w-lg ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Technologies I work with daily to build modern, performant web applications.
          </p>
        </div>

        {/* Skill grid */}
        <div
          className={`rounded-2xl overflow-hidden border ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1px',
            background: isDark ? '#262626' : '#e5e7eb',
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 transition-colors ${
                isDark ? 'bg-neutral-950 hover:bg-neutral-900' : 'bg-white hover:bg-neutral-50'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className={`text-sm font-medium ${isDark ? 'text-neutral-100' : 'text-neutral-800'}`}>
                  {skill.name}
                </span>
                <span className={`text-[10px] ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  {skill.category}
                </span>
              </div>
              <div className={`h-0.5 rounded-full overflow-hidden ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                  }`}
                  style={{ width: animate ? `${skill.level}%` : '0%' }}
                />
              </div>
              <div className={`text-right text-[10px] mt-1.5 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        {/* Quality cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          {qualities.map((q) => (
            <div
              key={q.title}
              className={`p-5 rounded-xl border transition-all ${
                isDark
                  ? 'border-neutral-800 bg-neutral-950 hover:border-emerald-500/30'
                  : 'border-neutral-200 bg-white hover:border-emerald-400/40'
              }`}
            >
              <div className="text-xl mb-2">{q.icon}</div>
              <div className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                {q.title}
              </div>
              <div className={`text-xs leading-relaxed ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {q.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;