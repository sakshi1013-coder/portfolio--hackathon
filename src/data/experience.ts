export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  outcomes?: string;
  isPlaceholder?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack & DevOps Developer",
    organization: "Project Engineering & Innovation",
    period: "2024 – Present",
    location: "Kalyan / Remote",
    type: "Academic & Personal Projects",
    description:
      "Designing and architecting scalable web applications, real-time collaboration platforms, and automated cloud infrastructure deployments.",
    responsibilities: [
      "Architected OrbitalShield, a space traffic management platform using Docker, Kubernetes, and Prometheus/Grafana observability pipelines.",
      "Built SyncWave, a real-time collaborative workspace leveraging MERN stack, Socket.IO, and Redis caching.",
      "Implemented automated CI/CD pipelines with Jenkins and Docker Compose to streamline containerized testing and deployments.",
    ],
    technologies: ["React", "Next.js", "Node.js", "Docker", "Kubernetes", "AWS", "Socket.IO"],
    outcomes: "Delivered 4+ full-stack software products with production-grade monitoring and CI/CD pipelines.",
  },
  {
    id: "exp-2",
    role: "Frontend & AI Systems Lead",
    organization: "Summer Hacks — Hackathon Team",
    period: "2024",
    location: "Hackathon / Team Project",
    type: "Competitive Engineering",
    description:
      "Led the frontend engineering and multimodal AI integration for Aura — an AI-powered real-time assistance platform that won 1st place.",
    responsibilities: [
      "Engineered an intuitive, high-performance user interface with real-time video stream rendering and audio waveforms.",
      "Integrated multimodal LLM APIs for instantaneous visual and audio comprehension.",
      "Coordinated with team members across design, API orchestration, and pitch presentation.",
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Multimodal AI APIs", "WebRTC"],
    outcomes: "Awarded 🥇 1st Place overall for technical execution, real-time latency, and user experience.",
  },
  {
    id: "exp-3",
    role: "Software Engineering Intern / Contributor",
    organization: "[REPLACE WITH ORGANIZATION / COMPANY]",
    period: "[REPLACE WITH DURATION e.g. Summer 2025]",
    location: "[REPLACE WITH LOCATION]",
    type: "Internship / Apprenticeship",
    description:
      "Placeholder for upcoming internship or industry experience. Update this section with your company details and key contributions.",
    responsibilities: [
      "[REPLACE WITH RESPONSIBILITY 1 — e.g. Developed and maintained RESTful microservices]",
      "[REPLACE WITH RESPONSIBILITY 2 — e.g. Optimized database queries and backend latency]",
      "[REPLACE WITH RESPONSIBILITY 3 — e.g. Collaborated with cross-functional engineering teams]",
    ],
    technologies: ["[TECH 1]", "[TECH 2]", "[TECH 3]", "[TECH 4]"],
    outcomes: "[REPLACE WITH KEY OUTCOME OR METRIC]",
    isPlaceholder: true,
  },
];
