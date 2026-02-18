import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const stats = [
    { num: '1+', label: 'Years Experience' },
    { num: '3+', label: 'Platforms Built' },
    { num: '40%', label: 'Perf. Improvement' },
    { num: '30%', label: 'Dev Time Saved' },
  ];

  const tags = ['📍 Dhaka, Bangladesh', '🎓 BSc in CSE · 3.57 CGPA', '⚡ Open to Remote'];

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-neutral-50'}`}
    >
      <div className="max-w-6xl mx-auto px-10">

        {/* Header */}
        <div className="mb-14">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`}>About</p>
          <h2
            className={`font-extrabold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
          >
            Building things<br />that matter
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div className="space-y-5">
            <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              I'm a passionate Frontend Developer with over{' '}
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                1+ year of professional experience
              </span>{' '}
              specialising in the MERN stack. I thrive on transforming complex problems into elegant, user-friendly solutions.
            </p>

            <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Currently crafting innovative web applications at{' '}
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                9am Solution
              </span>
              , where I've contributed to building comprehensive business management systems integrating e-commerce, restaurant, and pharmaceutical operations.
            </p>

            <p className={`text-base leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              My approach combines technical excellence with creative problem-solving — ensuring every project not only meets requirements but exceeds expectations in both performance and aesthetics.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-md text-xs border transition-colors ${
                    isDark
                      ? 'border-neutral-800 text-neutral-400 bg-neutral-900'
                      : 'border-neutral-200 text-neutral-500 bg-white'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div
            className={`grid grid-cols-2 rounded-2xl overflow-hidden border ${
              isDark ? 'border-neutral-800' : 'border-neutral-200'
            }`}
            style={{ gap: '1px', background: isDark ? '#262626' : '#e5e7eb' }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className={`p-7 transition-colors group ${
                  isDark
                    ? 'bg-neutral-950 hover:bg-neutral-900'
                    : 'bg-white hover:bg-neutral-50'
                }`}
              >
                <div
                  className={`text-3xl font-extrabold leading-none mb-1 ${
                    isDark ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {s.num}
                </div>
                <div className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;