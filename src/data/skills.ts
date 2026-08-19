export interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#6257E8",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#22C55E",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Firebase"],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#F59E0B",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firestore"],
  },
  {
    id: "programming",
    label: "Programming",
    color: "#EF4444",
    skills: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    id: "uiux",
    label: "UI/UX",
    color: "#EC4899",
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design"],
  },
  {
    id: "aws",
    label: "AWS",
    color: "#F97316",
    skills: ["EC2", "S3", "RDS", "IAM", "VPC", "CloudWatch"],
  },
  {
    id: "devops",
    label: "DevOps",
    color: "#14B8A6",
    skills: ["Docker", "Docker Compose", "Jenkins", "Kubernetes", "Nginx", "PM2"],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    color: "#8B5CF6",
    skills: ["Prometheus", "Grafana", "Elasticsearch", "Kibana"],
  },
  {
    id: "systemdesign",
    label: "System Design",
    color: "#6366F1",
    skills: ["HLD", "LLD", "Scalability", "Microservices", "Load Balancing", "Event-Driven Architecture", "Caching"],
  },
  {
    id: "tools",
    label: "Tools",
    color: "#64748B",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
  {
    id: "ai",
    label: "AI",
    color: "#A855F7",
    skills: ["Cursor", "Lovable", "Antigravity", "Prompt Engineering", "LLM APIs"],
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
