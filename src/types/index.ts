export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  gradient: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
