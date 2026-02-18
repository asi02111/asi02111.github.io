import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const contactItems = [
    {
      icon: '📧',
      label: 'Email',
      value: 'asbashrafulislam@gmail.com',
      href: 'mailto:asbashrafulislam@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+880 1869 225821',
      href: 'tel:+8801869225821',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: undefined,
    },
  ];

  const socials = [
    { icon: FaGithub, href: 'https://github.com/asi02111', label: 'GitHub' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-300 ${isDark ? 'bg-neutral-950' : 'bg-neutral-50'}`}
    >
      <div className="max-w-6xl mx-auto px-10">

        {/* Header */}
        <div className="mb-14">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isDark ? 'text-emerald-400' : 'text-emerald-600'
          }`}>Contact</p>
          <h2
            className={`font-extrabold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
          >
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            {/* Contact items */}
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Tag = item.href ? 'a' : 'div';
                const props = item.href ? { href: item.href } : {};
                return (
                  <Tag
                    key={item.label}
                    {...props}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                    } ${item.href ? 'cursor-pointer' : ''}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 ${
                        isDark ? 'bg-neutral-900' : 'bg-neutral-100'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className={`text-[10px] uppercase tracking-wider mb-0.5 ${
                        isDark ? 'text-neutral-600' : 'text-neutral-400'
                      }`}>
                        {item.label}
                      </div>
                      <div className={`text-sm font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
                        {item.value}
                      </div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all ${
                    isDark
                      ? 'border-neutral-800 text-neutral-400 hover:border-emerald-500/40 hover:text-emerald-400 bg-neutral-950'
                      : 'border-neutral-200 text-neutral-500 hover:border-emerald-400/60 hover:text-emerald-600 bg-white'
                  }`}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: availability card */}
          <div
            className={`rounded-2xl border p-8 ${
              isDark
                ? 'border-emerald-500/15 bg-emerald-500/5'
                : 'border-emerald-400/20 bg-emerald-50/50'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={`text-xs font-semibold uppercase tracking-widest ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                Currently Available
              </span>
            </div>

            <h3
              className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-neutral-900'}`}
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Open to new opportunities
            </h3>

            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              I'm open to full-time roles, freelance contracts, and interesting collaborations.
              Particularly excited about projects that challenge me to grow and create meaningful impact.
            </p>

            <a
              href="mailto:asbashrafulislam@gmail.com"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all
                hover:-translate-y-0.5 active:translate-y-0 ${
                isDark ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              Send a Message
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;