export enum SectionId {
  VISION = 'vision',
  ARCHITECTURE = 'architecture',
  DESIGN = 'design',
  INSTALLATION = 'installation',
  ECOSYSTEM = 'ecosystem',
  SERVICES = 'services',
  SECURITY = 'security',
  LANDING_PAGE = 'landing_page',
  ROADMAP = 'roadmap',
  CHAT = 'chat'
}

export interface SpecSection {
  id: string;
  title: string;
  subtitle: string;
  content: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
  connections: string[];
}