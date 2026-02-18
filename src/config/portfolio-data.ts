import type { Skill, Project, Experience, Education, ContactInfo } from '../types';

export const personalInfo = {
  name: 'Ashraful Islam',
  title: 'Frontend Developer',
  subtitle: 'MERN Stack Specialist',
  bio: "Crafting seamless digital experiences with modern web technologies. Specialized in building scalable, responsive applications that solve real-world problems.",
};

export const contactInfo: ContactInfo = {
  email: 'asbashrafulislam@gmail.com',
  phone: '+880 1869 225821',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/asi02111',
  portfolio: 'https://bizlyne.com',
};

export const about = {
  description: [
    "I'm a passionate Frontend Developer with over 1+ year of professional experience specializing in the MERN stack. I thrive on transforming complex problems into elegant, user-friendly solutions.",
    "Currently, I'm crafting innovative web applications at 9am Solution, where I've contributed to building comprehensive business management systems that integrate e-commerce, restaurant, and pharmaceutical operations.",
    "My approach combines technical excellence with creative problem-solving, ensuring every project not only meets requirements but exceeds expectations.",
  ],
  stats: [
    { label: 'Experience', value: '1+ Years' },
    { label: 'Projects Completed', value: '3+ Platforms' },
    { label: 'Code Quality', value: 'Production-Ready' },
    { label: 'Performance Boost', value: '40% Faster' },
  ],
  badges: [
    { icon: '📍', text: 'Dhaka, Bangladesh' },
    { icon: '🎓', text: 'BSc in CSE (3.57 CGPA)' },
  ],
};

export const skills: Skill[] = [
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Redux', level: 85, category: 'State Management' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'HTML5 & CSS3', level: 98, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Database' },
];

export const skillHighlights = [
  {
    icon: '⚡',
    title: 'Performance Expert',
    description: 'Optimized applications achieving 40% faster load times through code splitting and lazy loading',
  },
  {
    icon: '🎨',
    title: 'UI/UX Focused',
    description: 'Creating pixel-perfect, responsive interfaces that provide seamless user experiences',
  },
  {
    icon: '🚀',
    title: 'Agile Developer',
    description: 'Experienced in Agile methodologies, code reviews, and delivering quality code under tight deadlines',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Frontend Developer (MERN Stack)',
    company: '9am Solution',
    location: 'Dhaka, Bangladesh',
    duration: 'Jan 2025 - Present',
    current: true,
    responsibilities: [
      'Developed and maintained frontend architecture for integrated multi-business platform managing e-commerce, restaurant, and medicine shop operations',
      'Built responsive, pixel-perfect user interfaces using React.js for 3 customer-facing websites and comprehensive ERP system',
      'Implemented complex state management solutions using Redux for seamless data flow across multiple business modules',
      'Optimized application performance resulting in 40% faster page load times through code splitting and lazy loading',
      'Developed reusable component library reducing development time by 30% across all platforms',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in CSE',
    institution: 'Sonargaon University',
    location: 'Dhaka, Bangladesh',
    duration: 'Graduated 2024',
    cgpa: '3.57 / 4.00',
  },
];

export const projects: Project[] = [
  {
    name: 'Bizlyne - Multi-Business Platform',
    description: 'Comprehensive business management system handling e-commerce, restaurant, and medicine shop operations',
    tech: ['React.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    features: [
      'E-commerce platform with cart & checkout',
      'Restaurant management system',
      'Medicine shop with prescription upload',
      'Integrated ERP system',
      'Role-based access control',
    ],
    link: 'https://bizlyne.com',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export const professionalAttributes = [
  'Strong problem-solving skills with ability to debug complex frontend issues efficiently',
  'Excellent collaboration and communication skills in cross-functional team environments',
  'Quick learner with passion for staying updated with latest web development trends and technologies',
  'Proven ability to deliver high-quality code under tight deadlines in Agile development cycles',
  'Experience working with version control systems and following Git workflow best practices',
];
