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
    id: "exp-ideaframe",
    role: "Technical Mentor & Guide",
    organization: "Ideaframe 2026",
    period: "Jan 2026 – Feb 2026",
    location: "Mumbai, Maharashtra, India",
    type: "Mentorship & Judging",
    description:
      "Mentored student developers, designers, and hackathon teams at Ideaframe 2026, providing hands-on technical guidance across full-stack web architecture, API integration, and project execution.",
    responsibilities: [
      "Guided 10+ student engineering teams through system architecture design, database modeling, and technical debugging.",
      "Provided hands-on assistance with React, Next.js, Node.js REST APIs, and modern deployment strategies.",
      "Evaluated project submissions based on code quality, technical complexity, UI/UX polish, and real-world innovation.",
    ],
    technologies: ["React", "Next.js", "Node.js", "System Architecture", "Mentorship", "Figma"],
    outcomes: "Mentored student teams resulting in high-impact hackathon deliverables and successful project showcases.",
  },
  {
    id: "exp-google",
    role: "Google Student Program Ambassador",
    organization: "Google",
    period: "Aug 2025 – Dec 2025 · 5 mos",
    location: "Mumbai, India · Remote",
    type: "Community & Developer Relations",
    description:
      "Represented Google student developer programs on campus, organizing technical workshops, cloud learning sessions, and fostering community engagement.",
    responsibilities: [
      "Promoted Google developer technologies, cloud certification pathways, and AI developer tools to student communities.",
      "Organized technical workshops, developer meetups, and collaborative learning events for aspiring engineers.",
      "Connected student developers with official Google developer resources, hackathons, and learning opportunities.",
    ],
    technologies: ["Google Cloud", "AI Tools", "Community Building", "Technical Workshops", "Public Speaking"],
    outcomes: "Empowered hundreds of student developers with Google tech stacks and cloud learning pathways.",
  },
  {
    id: "exp-hariom",
    role: "Full-Stack Developer Intern",
    organization: "HARI OM THALASSIC PVT. LTD.",
    period: "Jul 2025 – Oct 2025 · 4 mos",
    location: "Mumbai, Maharashtra, India · Remote",
    type: "Software Internship",
    description:
      "Contributed to frontend and backend web development tasks. Collaborated with team members to build and improve user-facing features, web components, and backend API integrations.",
    responsibilities: [
      "Designed and prototyped user interfaces in Figma and implemented responsive frontend web components.",
      "Engineered backend RESTful API endpoints in Node.js and Express to handle data flow and application logic.",
      "Collaborated closely with cross-functional team members to debug code, optimize page load times, and improve user experience.",
    ],
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "React", "Node.js", "REST APIs"],
    outcomes: "Shipped responsive web features and backend API integration for core company web products.",
  },
  {
    id: "exp-moodindigo",
    role: "Indigo Squad Member",
    organization: "Mood Indigo IIT Bombay",
    period: "Nov 2024 – Sep 2025 · 11 mos",
    location: "Mumbai, Maharashtra, India",
    type: "Student Leadership & Operations",
    description:
      "Active team member of the Indigo Squad for Mood Indigo, Asia's largest college cultural festival hosted at IIT Bombay.",
    responsibilities: [
      "Managed campus outreach, event logistics, and technical setup for university competitions and showcases.",
      "Coordinated cross-functional student teams to execute large-scale student engagements and interactive sessions.",
      "Facilitated participant onboarding, venue operations, and audience coordination during live festival events.",
    ],
    technologies: ["Leadership", "Team Coordination", "Event Operations", "Public Relations"],
    outcomes: "Coordinated student participation and event operations across regional university zones.",
  },
];
