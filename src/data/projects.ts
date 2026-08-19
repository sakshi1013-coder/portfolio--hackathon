export interface ProjectDNA {
  frontend: number;
  backend: number;
  cloud: number;
  devops: number;
  uiux: number;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  description: string;
  tags: string[];
  stack: string[];
  keyContribution: string;
  githubUrl: string;
  liveUrl: string | null;
  caseStudy: {
    problem: string;
    approach: string;
    design: string;
    technology: string;
    result: string;
    learnings: string;
  };
  dna: ProjectDNA;
  color: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "orbitalshield",
    number: "01",
    title: "OrbitalShield",
    subtitle: "Space Traffic Management & Collision Avoidance Platform",
    problem: "How do you monitor satellites and orbital debris in real-time at scale?",
    description:
      "Built a mission control dashboard for monitoring satellites, orbital debris and simulated telemetry to support real-time space traffic management and collision avoidance.",
    tags: ["CLOUD", "DEVOPS"],
    stack: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana", "Elasticsearch", "Kibana"],
    keyContribution:
      "Designed and deployed the full containerised infrastructure with observability pipelines tracking simulated satellite telemetry.",
    githubUrl: "https://github.com/sakshi1013-coder",
    liveUrl: null,
    caseStudy: {
      problem:
        "Space traffic is becoming increasingly congested. Managing satellite positions, debris fields and collision risks requires real-time monitoring infrastructure that can handle high-frequency telemetry data.",
      approach:
        "Designed a microservices architecture where each service handles a distinct concern: data ingestion, processing, storage, and visualisation. Used container orchestration to ensure reliability.",
      design:
        "Mission-control aesthetic with clean data panels, orbital visualisations and alert dashboards. Prioritised at-a-glance situational awareness for operators.",
      technology:
        "Docker and Kubernetes for containerisation and orchestration. Jenkins for CI/CD pipelines. Prometheus and Grafana for metrics. Elasticsearch and Kibana for log analytics.",
      result:
        "A fully functional mission-control style dashboard with real-time telemetry monitoring, automated alerting and centralized log management across the microservices stack.",
      learnings:
        "Deepened understanding of Kubernetes resource management, Prometheus scraping configurations and how observability layers integrate with containerised workloads.",
    },
    dna: { frontend: 45, backend: 60, cloud: 95, devops: 100, uiux: 40 },
    color: "#0A0F1E",
    accentColor: "#6257E8",
  },
  {
    id: "modulehub",
    number: "02",
    title: "ModuleHub",
    subtitle: "Real-Time Component Registry",
    problem: "How do teams stay in sync when packages change without a centralised registry?",
    description:
      "Built a real-time platform where companies publish packages and versions while employees subscribe using a unique company code.",
    tags: ["FULL STACK"],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
    keyContribution:
      "Architected the real-time subscription system using Socket.IO and built the full MERN stack from scratch.",
    githubUrl: "https://github.com/sakshi1013-coder",
    liveUrl: null,
    caseStudy: {
      problem:
        "Engineering teams need a way to track when shared internal packages release new versions or breaking changes. Email chains and manual Slack messages are unreliable.",
      approach:
        "Created a publish-subscribe model where companies register their packages and employees subscribe to relevant ones. Real-time WebSocket events push notifications the moment a new version is published.",
      design:
        "Clean dashboard-style UI with a company registry view and an employee subscription panel. Notifications appear as animated pulse cards.",
      technology:
        "MERN stack (MongoDB, Express, React, Node.js) for the core application. Socket.IO for real-time bidirectional communication between publisher and subscriber clients.",
      result:
        "A working real-time registry where publishing a new package version instantly notifies all subscribed employees across the platform.",
      learnings:
        "Gained practical experience with WebSocket event management, room-based subscriptions in Socket.IO and building scalable MERN applications.",
    },
    dna: { frontend: 75, backend: 85, cloud: 20, devops: 25, uiux: 65 },
    color: "#0F1A12",
    accentColor: "#22C55E",
  },
  {
    id: "vibescribe",
    number: "03",
    title: "VibeScribe",
    subtitle: "AI-Based Transcription Platform",
    problem: "How do you convert audio into structured, searchable content automatically?",
    description:
      "An AI-powered transcription platform that converts audio into structured, searchable text with authentication and transcript management.",
    tags: ["FULL STACK", "AI"],
    stack: ["Next.js", "PostgreSQL", "AI APIs", "TypeScript"],
    keyContribution:
      "Integrated AI transcription APIs into a full-stack SaaS platform with user authentication and structured transcript management.",
    githubUrl: "https://github.com/sakshi1013-coder",
    liveUrl: null,
    caseStudy: {
      problem:
        "Manually transcribing audio is time-consuming. Existing tools often produce unstructured output without management or search features.",
      approach:
        "Built a SaaS platform that accepts audio uploads, sends them to AI transcription APIs, and returns structured, searchable transcripts stored in a relational database.",
      design:
        "Clean SaaS-style dashboard with waveform visualisations, transcript viewer and management controls. Prioritised readability and clarity.",
      technology:
        "Next.js for the full-stack framework with server actions. PostgreSQL for persistent transcript storage. AI APIs for audio-to-text conversion.",
      result:
        "A functional transcription platform that converts audio to structured text, stores it per-user, and provides search and management capabilities.",
      learnings:
        "Learned to integrate third-party AI APIs effectively, manage async processing flows and design user-friendly interfaces for complex data.",
    },
    dna: { frontend: 80, backend: 75, cloud: 35, devops: 20, uiux: 70 },
    color: "#1A0F1A",
    accentColor: "#A855F7",
  },
  {
    id: "spaceops",
    number: "04",
    title: "SpaceOps",
    subtitle: "AWS Cloud Infrastructure Management",
    problem: "How do you design and configure secure, production-grade AWS infrastructure from scratch?",
    description:
      "Designed and configured secure AWS cloud infrastructure demonstrating deployment, networking, storage, monitoring and Linux administration.",
    tags: ["CLOUD", "DEVOPS"],
    stack: ["AWS EC2", "AWS S3", "AWS RDS", "AWS IAM", "AWS VPC", "CloudWatch", "Linux"],
    keyContribution:
      "Architected and configured a complete AWS infrastructure stack including networking (VPC/subnets), compute (EC2), storage (S3/RDS), IAM security policies and CloudWatch monitoring.",
    githubUrl: "https://github.com/sakshi1013-coder",
    liveUrl: null,
    caseStudy: {
      problem:
        "Understanding cloud infrastructure requires more than theory — you need to actually design, configure and connect real AWS services with proper security boundaries.",
      approach:
        "Built a complete AWS infrastructure from scratch: VPC with public/private subnets, EC2 instances with proper security groups, S3 for storage, RDS for a managed database, IAM roles/policies, and CloudWatch for monitoring.",
      design:
        "Structured as a layered architecture diagram: networking → compute → storage → monitoring. Each layer is independently configurable.",
      technology:
        "AWS core services: EC2, S3, RDS, IAM, VPC, CloudWatch. Linux administration for instance configuration, user management and service setup.",
      result:
        "A fully configured, secure AWS infrastructure demonstrating real-world cloud deployment patterns with monitoring and logging.",
      learnings:
        "Gained deep hands-on experience with AWS networking, IAM least-privilege principles, managed database configuration and cloud monitoring best practices.",
    },
    dna: { frontend: 10, backend: 40, cloud: 100, devops: 85, uiux: 15 },
    color: "#0F1420",
    accentColor: "#F59E0B",
  },
  {
    id: "bodmas",
    number: "05",
    title: "BODMAS Learning Platform",
    subtitle: "Interactive Logic-Based Application",
    problem: "How do you make mathematical reasoning genuinely fun and engaging?",
    description:
      "Designed a gamified platform to teach mathematical reasoning using BODMAS rules with multiple game modes.",
    tags: ["FULL STACK", "UI/UX"],
    stack: ["JavaScript", "HTML", "CSS"],
    keyContribution:
      "Designed and built the complete gamified learning experience including game logic, scoring system and multiple interactive modes.",
    githubUrl: "https://github.com/sakshi1013-coder",
    liveUrl: null,
    caseStudy: {
      problem:
        "Students struggle with order of operations (BODMAS) because traditional teaching relies on dry repetition rather than active engagement.",
      approach:
        "Built a gamified platform with multiple modes: a timed challenge, a visual step-by-step explainer, and a competitive scoring system that rewards correct reasoning.",
      design:
        "Playful, colourful UI that breaks away from typical educational app aesthetics. Large typography, animated feedback, and clear visual hierarchy for equations.",
      technology:
        "Pure JavaScript for game logic and DOM manipulation. HTML/CSS for structure and animations. No external frameworks — demonstrating core web fundamentals.",
      result:
        "An interactive platform where users engage with BODMAS rules through gameplay, receiving instant visual feedback and earning points for correct answers.",
      learnings:
        "Learned to design engaging educational experiences and implement complex game logic cleanly in vanilla JavaScript.",
    },
    dna: { frontend: 90, backend: 10, cloud: 0, devops: 0, uiux: 85 },
    color: "#1A0F00",
    accentColor: "#EF4444",
  },
];
