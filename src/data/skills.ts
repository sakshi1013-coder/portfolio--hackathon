export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Familiar';
  score: number; // 90, 75, 60
  dots: number; // 5, 4, 3
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    color: '#7C3AED',
    description: 'Crafting performant, accessible, and responsive user interfaces.',
    skills: [
      { name: 'HTML', level: 'Advanced', score: 90, dots: 5 },
      { name: 'CSS', level: 'Advanced', score: 90, dots: 5 },
      { name: 'JavaScript', level: 'Advanced', score: 90, dots: 5 },
      { name: 'React', level: 'Advanced', score: 90, dots: 5 },
      { name: 'Next.js', level: 'Advanced', score: 90, dots: 5 },
      { name: 'TypeScript', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Tailwind CSS', level: 'Proficient', score: 75, dots: 4 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Engineering',
    color: '#22C55E',
    description: 'Building robust RESTful microservices, API gateways, and server logic.',
    skills: [
      { name: 'Node.js', level: 'Advanced', score: 90, dots: 5 },
      { name: 'Express.js', level: 'Advanced', score: 90, dots: 5 },
      { name: 'REST APIs', level: 'Advanced', score: 90, dots: 5 },
      { name: 'GraphQL', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Firebase', level: 'Proficient', score: 75, dots: 4 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & Storage',
    color: '#F59E0B',
    description: 'Designing normalized relational schemas and document datastores.',
    skills: [
      { name: 'MongoDB', level: 'Advanced', score: 90, dots: 5 },
      { name: 'PostgreSQL', level: 'Proficient', score: 75, dots: 4 },
      { name: 'MySQL', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Firestore', level: 'Proficient', score: 75, dots: 4 },
      { name: 'RDS', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'programming',
    label: 'Programming Languages',
    color: '#EF4444',
    description: 'Core programming languages for algorithmic problem solving.',
    skills: [
      { name: 'JavaScript', level: 'Advanced', score: 90, dots: 5 },
      { name: 'Java', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Python', level: 'Proficient', score: 75, dots: 4 },
      { name: 'C++', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'uiux',
    label: 'UI/UX Design',
    color: '#EC4899',
    description: 'Wireframing, interactive prototyping, and responsive layout systems.',
    skills: [
      { name: 'Figma', level: 'Advanced', score: 90, dots: 5 },
      { name: 'Wireframing', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Prototyping', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Responsive Design', level: 'Proficient', score: 75, dots: 4 },
    ],
  },
  {
    id: 'aws',
    label: 'Cloud Infrastructure (AWS)',
    color: '#F97316',
    description: 'Architecting secure, scalable cloud resources on Amazon Web Services.',
    skills: [
      { name: 'AWS (EC2, S3, IAM)', level: 'Proficient', score: 75, dots: 4 },
      { name: 'EC2', level: 'Proficient', score: 75, dots: 4 },
      { name: 'S3', level: 'Proficient', score: 75, dots: 4 },
      { name: 'IAM', level: 'Proficient', score: 75, dots: 4 },
      { name: 'VPC', level: 'Familiar', score: 60, dots: 3 },
      { name: 'CloudWatch', level: 'Familiar', score: 60, dots: 3 },
      { name: 'RDS', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Containers',
    color: '#14B8A6',
    description: 'Containerizing microservices and automating deployment pipelines.',
    skills: [
      { name: 'Docker', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Docker Compose', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Kubernetes', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Jenkins', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Nginx', level: 'Familiar', score: 60, dots: 3 },
      { name: 'PM2', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    color: '#64748B',
    description: 'Essential developer toolchain, version control, and API testing tools.',
    skills: [
      { name: 'Git', level: 'Advanced', score: 90, dots: 5 },
      { name: 'GitHub', level: 'Advanced', score: 90, dots: 5 },
      { name: 'Postman', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Vercel', level: 'Proficient', score: 75, dots: 4 },
      { name: 'Render', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'systemdesign',
    label: 'System Design & Architecture',
    color: '#6366F1',
    description: 'Structuring resilient distributed systems, caching layers, and load balancing.',
    skills: [
      { name: 'HLD', level: 'Familiar', score: 60, dots: 3 },
      { name: 'LLD', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Microservices', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Load Balancing', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Event-Driven Architecture', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Caching', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Scalability', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'monitoring',
    label: 'Monitoring & Logging',
    color: '#8B5CF6',
    description: 'Telemetry, metrics dashboarding, and log aggregation for live systems.',
    skills: [
      { name: 'Prometheus', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Grafana', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Elasticsearch', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Kibana', level: 'Familiar', score: 60, dots: 3 },
      { name: 'CloudWatch', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & GenAI Workflows',
    color: '#A855F7',
    description: 'Leveraging LLM APIs, prompt engineering, and autonomous AI developer tools.',
    skills: [
      { name: 'Cursor', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Lovable', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Antigravity', level: 'Familiar', score: 60, dots: 3 },
      { name: 'Prompt Engineering', level: 'Familiar', score: 60, dots: 3 },
      { name: 'LLM APIs', level: 'Familiar', score: 60, dots: 3 },
    ],
  },
];

export const orbitNodes = [
  {
    id: "uiux",
    label: "UI/UX",
    color: "#EC4899",
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design"],
  },
  {
    id: "fullstack",
    label: "Full Stack",
    color: "#6257E8",
    skills: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    id: "ai",
    label: "AI",
    color: "#A855F7",
    skills: ["LLM APIs", "Prompt Engineering", "AI-assisted Dev"],
  },
  {
    id: "cloud",
    label: "Cloud",
    color: "#F59E0B",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];
