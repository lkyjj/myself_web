export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  achievement: string[];
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  category: string;
  period?: string;
  starCount?: number;
  updatedAt?: string;
}

export interface TimelineItem {
  period: string;
  company: string;
  position: string;
  achievements: string[];
  type: '实习' | '教育' | '项目';
}

export interface SkillCategory {
  [key: string]: number;
}

export interface SkillsData {
  aiTech: SkillCategory;
  productSkills: SkillCategory;
  frontendDev: SkillCategory;
  backendDev: SkillCategory;
}

export interface KnowledgeItem {
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}