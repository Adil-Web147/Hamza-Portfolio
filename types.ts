export type SectionType = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface Project {
  title: string;
  category: string;
  description: string[];
  tech: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}