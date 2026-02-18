import { useTheme } from '../../context/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const workItems = [
    {
      type: 'work',
      role: 'Frontend Developer — MERN Stack',
      company: '9am Solution',
      period: 'Jan 2025 – Present',
      location: 'Dhaka, Bangladesh',
      points: [
        'Developed and maintained frontend architecture for an integrated multi-business platform covering e-commerce, restaurant, and medicine shop modules.',
        'Built responsive, pixel-perfect UIs using React.js for 3 customer-facing websites and a comprehensive ERP system.',
        'Implemented complex state management using Redux for seamless data flow across multiple business modules.',
        'Optimised application performance resulting in 40% faster page load times via code splitting and lazy loading.',
        'Developed a reusable component library reducing development time by 30% across all platforms.',
      ],
    },
    {
      type: 'education',
      role: 'Bachelor of Science in CSE',
      company: 'Sonargaon University',
      period: 'Graduated 2024',
      location: 'Dhaka, Bangladesh',
      extra: 'CGPA: 3.57 / 4.00',
      points: [],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-neutral-50'}`}
    >
      <div className="max-w-4xl mx-auto px-10">

        {/* Header */}
        <div className="mb-14">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`}>Experience</p>
          <h2
            className={`font-extrabold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
          >
            Where I've Worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div
            className={`absolute left-0 top-2 bottom-2 w-px ${
              isDark ? 'bg-neutral-800' : 'bg-neutral-200'
            }`}
          />

          <div className="space-y-10">
            {workItems.map((item, i) => (
              <div key={i} className="relative pl-9">
                {/* dot */}
                <div
                  className={`absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                    item.type === 'work'
                      ? isDark
                        ? 'bg-emerald-400 border-neutral-950'
                        : 'bg-emerald-500 border-neutral-50'
                      : isDark
                        ? 'bg-neutral-600 border-neutral-950'
                        : 'bg-neutral-400 border-neutral-50'
                  }`}
                />

                {/* Card */}
                <div
                  className={`rounded-xl border p-7 transition-all ${
                    isDark
                      ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div
                        className={`text-lg font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {item.role}
                      </div>
                      <div className={`text-sm mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        {item.company}
                      </div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${
                        isDark
                          ? 'border-neutral-700 text-neutral-400'
                          : 'border-neutral-200 text-neutral-500'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Location */}
                  <p className={`text-xs mb-4 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`}>
                    {item.location}
                  </p>

                  {/* Extra (education CGPA) */}
                  {item.extra && (
                    <p className={`text-sm font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {item.extra.split(':')[0]}:{' '}
                      <span className={isDark ? 'text-emerald-400' : 'text-emerald-600'}>
                        {item.extra.split(':')[1]}
                      </span>
                    </p>
                  )}

                  {/* Points */}
                  {item.points.length > 0 && (
                    <ul className="space-y-2.5 mt-1">
                      {item.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                          }`} />
                          <span className={`text-sm leading-relaxed ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                          }`}>
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;