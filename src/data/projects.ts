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
    id: "aura",
    number: "01",
    title: "Aura",
    subtitle: "1st Place Hackathon Winner · Real-Time Multimodal Voice & Vision AI",
    problem: "How do you provide low-latency visual and voice assistance for instant context reasoning?",
    description:
      "Engineered an intelligent real-time visual and voice assistant featuring sub-100ms audio streaming, real-time video feed reasoning, and multimodal LLM intelligence.",
    tags: ["AI", "FULL STACK", "WEBRTC"],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "WebSockets", "WebRTC", "Tailwind CSS"],
    keyContribution:
      "Architected the low-latency WebSocket gateway and integrated multimodal vision models for real-time video stream querying.",
    githubUrl: "https://github.com/sakshi1013-coder/aura-sh",
    liveUrl: "https://aura-sh.vercel.app/",
    caseStudy: {
      problem:
        "Traditional voice assistants suffer from high audio turn-around latency and lack spatial visual awareness of the user's surroundings.",
      approach:
        "Built a bidirectional streaming pipeline over WebSockets and WebRTC that pipes audio chunks and video frames directly into multimodal reasoning models.",
      design:
        "Sleek modern interface with animated voice wave feedback, live transcription feed, and responsive camera viewport.",
      technology:
        "Next.js, TypeScript, WebSockets, WebRTC, Node.js, and OpenAI GPT-4o Vision API.",
      result:
        "Awarded 1st Place Winner out of 50+ engineering teams at SummerHacks 2026 for sub-100ms response time and intuitive UX.",
      learnings:
        "Mastered real-time WebSocket protocol handling, audio buffer stream synchronization, and multimodal prompt optimizations.",
    },
    dna: { frontend: 90, backend: 85, cloud: 75, devops: 65, uiux: 88 },
    color: "#0A0F1E",
    accentColor: "#7C3AED",
  },
  {
    id: "modulehub",
    number: "02",
    title: "ModuleHub",
    subtitle: "Autonomous GenAI Agent Engine & Multi-Node Workflow Orchestrator",
    problem: "How do teams automate complex enterprise data flows without manual dispatch?",
    description:
      "Autonomous workflow orchestrator that ingests webhooks, parses payloads using LLM intelligence, and dispatches dynamic multi-node API routes across Airtable and Outlook.",
    tags: ["GENAI", "AUTOMATION", "NODE.JS"],
    stack: ["Node.js", "Express.js", "n8n", "OpenAI GPT-4o", "REST APIs", "PostgreSQL", "Docker"],
    keyContribution:
      "Built multi-node n8n workflow triggers with autonomous error-handling fallbacks and dynamic API routing.",
    githubUrl: "https://github.com/sakshi1013-coder/ModuleHub",
    liveUrl: "https://module-hub-three.vercel.app/",
    caseStudy: {
      problem:
        "Enterprise communication pipelines often require manual intervention to categorize emails, extract metadata, and update internal databases.",
      approach:
        "Created an autonomous multi-node engine that listens to webhooks, passes incoming payloads through LLMs for structured entity extraction, and updates databases.",
      design:
        "Visual workflow dashboard showing live execution statuses, node telemetry, and error rates.",
      technology:
        "Node.js, Express.js, n8n Workflow Engine, OpenAI GPT-4o API, PostgreSQL, and Docker.",
      result:
        "Reduced manual dispatch times by 95% with sub-200ms payload processing and 99.9% pipeline reliability.",
      learnings:
        "Gained deep knowledge of event-driven architectures, webhook security, and autonomous agent orchestration.",
    },
    dna: { frontend: 65, backend: 95, cloud: 80, devops: 75, uiux: 60 },
    color: "#0F1A12",
    accentColor: "#F59E0B",
  },
  {
    id: "vibescribe",
    number: "03",
    title: "VibeScribe",
    subtitle: "AI Speech-to-Text & Real-Time Multilingual Transcription SaaS",
    problem: "How do you convert live audio into structured, searchable text with low latency?",
    description:
      "An AI-powered meeting transcription platform that converts audio streams into structured, searchable transcripts with secure authentication and export controls.",
    tags: ["AI", "FULL STACK", "SAAS"],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Whisper AI", "Tailwind CSS"],
    keyContribution:
      "Integrated OpenAI Whisper models with chunked audio streaming and full-text search database indexing.",
    githubUrl: "https://github.com/sakshi1013-coder/VibeScribe",
    liveUrl: "https://vibe-scribe-beryl.vercel.app/login",
    caseStudy: {
      problem:
        "Capturing accurate meeting notes manually is inefficient, and standard transcripts lack keyword indexing and speaker segmenting.",
      approach:
        "Engineered a SaaS platform that ingests microphone streams in real-time, queries transcription endpoints, and formats transcripts with speaker tags.",
      design:
        "Clean, distraction-free SaaS interface with real-time waveform visualizers and instant Markdown/PDF export controls.",
      technology:
        "Next.js, TypeScript, PostgreSQL, Prisma, OpenAI Whisper API, and Web Audio API.",
      result:
        "High-accuracy transcription with sub-100ms chunk processing and instant export to markdown and PDF formats.",
      learnings:
        "Learned client-side audio buffer management, relational database indexing for text search, and SaaS authentication workflows.",
    },
    dna: { frontend: 85, backend: 80, cloud: 70, devops: 55, uiux: 80 },
    color: "#1A0F1A",
    accentColor: "#10B981",
  },
  {
    id: "accredian",
    number: "04",
    title: "Accredian Enterprise",
    subtitle: "Enterprise Credential & Referral Management Platform",
    problem: "How do organizations manage credentials and track partner referrals seamlessly?",
    description:
      "Full-stack enterprise credentialing dashboard with referral tracking, automated email notifications, and analytical performance metrics.",
    tags: ["FULL STACK", "ENTERPRISE"],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    keyContribution:
      "Designed the relational database schema with Prisma and built automated email notification triggers.",
    githubUrl: "https://github.com/sakshi1013-coder/accredian-enterprise",
    liveUrl: "https://accredian-enterprise-omega-nine.vercel.app/",
    caseStudy: {
      problem:
        "Enterprises struggle with fragmented referral tracking and delayed communication when issuing certificates and credentials.",
      approach:
        "Built a centralized portal with role-based access control, instant referral link generation, and automated status dispatching.",
      design:
        "Corporate glassmorphism theme with high-contrast data tables, interactive filter bars, and modal dialogue forms.",
      technology:
        "React, Node.js, Express.js, PostgreSQL, Prisma ORM, and Tailwind CSS.",
      result:
        "Deployed to production on Vercel with automated continuous deployment and instant database migrations.",
      learnings:
        "Deepened understanding of Prisma ORM transactions, connection pooling in serverless environments, and transactional email deliverability.",
    },
    dna: { frontend: 85, backend: 85, cloud: 60, devops: 60, uiux: 75 },
    color: "#0F1420",
    accentColor: "#10B981",
  },
  {
    id: "bodmas",
    number: "05",
    title: "BODMAS Game",
    subtitle: "Gamified Mathematical Logic & Interactive Learning Platform",
    problem: "How do you make mathematical order of operations engaging and interactive?",
    description:
      "An interactive web game that teaches mathematical reasoning through rapid BODMAS equation solving, animated visual feedback, and timed levels.",
    tags: ["FRONTEND", "GAMIFICATION"],
    stack: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    keyContribution:
      "Programmed mathematical equation generation algorithms and dynamic score evaluation logic in pure vanilla JavaScript.",
    githubUrl: "https://github.com/sakshi1013-coder/aura-sh",
    liveUrl: "https://bodmas-game-xi.vercel.app/",
    caseStudy: {
      problem:
        "Students find standard arithmetic drill sheets tedious, leading to low retention of fundamental operator precedence rules.",
      approach:
        "Developed a gamified browser experience with visual combo streaks, instant correctness validation, and responsive mobile controls.",
      design:
        "Vibrant pixel-inspired retro design with punchy typography and sound/visual micro-interactions.",
      technology:
        "Vanilla JavaScript DOM manipulation, CSS3 keyframe animations, and HTML5 Canvas.",
      result:
        "Engaging learning tool accessed by hundreds of students with zero framework overhead and 100/100 Lighthouse performance score.",
      learnings:
        "Refined core web fundamentals, event loop mechanics, and CSS transition performance optimizations.",
    },
    dna: { frontend: 95, backend: 30, cloud: 20, devops: 30, uiux: 90 },
    color: "#1A0F00",
    accentColor: "#EF4444",
  },
  {
    id: "samavesh",
    number: "06",
    title: "Samavesh",
    subtitle: "AI-Powered Inclusive Learning & Accessibility Engine",
    problem: "How do you democratize digital education for neurodiverse and hearing/speech impaired students?",
    description:
      "AI-powered inclusive learning engine featuring real-time sign language gesture synthesis, text-to-speech conversion, and adaptive WCAG AAA layouts.",
    tags: ["AI", "ACCESSIBILITY", "FULL STACK"],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Express.js"],
    keyContribution:
      "Engineered real-time sign language gesture synthesis and adaptive high-contrast accessibility interface.",
    githubUrl: "https://github.com/sakshi1013-coder/Samavesh-Frontend",
    liveUrl: "https://samavesh-frontend.vercel.app/",
    caseStudy: {
      problem:
        "Traditional educational platforms lack adaptive interfaces and real-time assistive translation for diverse learners.",
      approach:
        "Built a WCAG AAA compliant platform with AI-assisted sign language gesture recognition and real-time speech captioning.",
      design:
        "High-contrast, accessible user interface with large interactive touch targets and customizable color profiles.",
      technology:
        "Next.js, React, Web Speech API, Node.js, Express, and MongoDB.",
      result:
        "Deployed to production on Vercel, providing accessible digital education to neurodiverse students.",
      learnings:
        "Deepened knowledge in web accessibility (a11y), assistive speech APIs, and inclusive design principles.",
    },
    dna: { frontend: 90, backend: 75, cloud: 60, devops: 50, uiux: 95 },
    color: "#1A0F1A",
    accentColor: "#EC4899",
  },
];
