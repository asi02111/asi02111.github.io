import { useTheme } from '../../context/ThemeContext';

const projects = [
  {
    name: 'Bizlyne',
    tagline: 'Multi-Business Platform',
    description:
      'Comprehensive business management system handling e-commerce, restaurant, and medicine shop operations — built with a focus on performance and scalability.',
    tech: ['React.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    features: [
      'E-commerce with cart & checkout',
      'Restaurant management system',
      'Medicine shop + prescription upload',
      'Integrated ERP system',
      'Role-based access control',
    ],
    link: 'https://bizlyne.com',
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
      className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-10">

        {/* Header */}
        <div className="mb-12">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`}>Projects</p>
          <h2
            className={`font-extrabold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
          >
            Featured Work
          </h2>
          <p className={`mt-3 text-base max-w-lg ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            A selection of projects I've built and shipped.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`rounded-2xl border overflow-hidden transition-all group ${
                isDark
                  ? 'bg-neutral-950 border-neutral-800 hover:border-emerald-500/30'
                  : 'bg-white border-neutral-200 hover:border-emerald-400/50'
              }`}
            >
              {/* Top accent stripe */}
              <div className={`h-px w-full ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-400/20'}`} />

              <div className="p-8 md:p-10">
                {/* Head row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3
                      className={`text-2xl font-bold group-hover:text-emerald-500 transition-colors ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {project.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      {project.tagline}
                    </p>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium border transition-all whitespace-nowrap ${
                        isDark
                          ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                          : 'border-emerald-500/40 text-emerald-600 hover:bg-emerald-50'
                      }`}
                    >
                      View Live
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded text-xs border transition-colors ${
                        isDark
                          ? 'border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                          : 'border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <p className={`text-[10px] uppercase tracking-widest mb-3 ${
                    isDark ? 'text-neutral-600' : 'text-neutral-400'
                  }`}>Key Features</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isDark ? 'bg-emerald-400' : 'bg-emerald-500'
                        }`} />
                        <span className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;