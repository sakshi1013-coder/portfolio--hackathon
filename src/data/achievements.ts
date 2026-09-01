export interface Achievement {
  rank: string;
  title: string;
  event: string;
  description: string;
  role: string;
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const mainAchievement: Achievement = {
  rank: "1ST PLACE",
  title: "Summer Hacks 2026",
  event: "Hackathon Champion (ITM x Notion)",
  description:
    "Collaborated in Team Straw Hats as Frontend & Design Lead to build Aura — a 1st-place winning Reverse-Chronobiology Engine and women's health guidance system with 10s swipe check-ins and cycle-synced nutrition.",
  role: "Team Straw Hats · Frontend & Design Lead",
  tags: ["1st Place Winner", "Healthtech", "UI/UX Design", "Next.js", "SummerHacks 2026"],
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "[REPLACE WITH ISSUER]",
    year: "[REPLACE WITH YEAR]",
    color: "#F59E0B",
  },
  {
    id: "cert-2",
    title: "[REPLACE WITH CERTIFICATE NAME]",
    issuer: "[REPLACE WITH ISSUER]",
    year: "[REPLACE WITH YEAR]",
    color: "#6257E8",
  },
  {
    id: "cert-3",
    title: "[REPLACE WITH CERTIFICATE NAME]",
    issuer: "[REPLACE WITH ISSUER]",
    year: "[REPLACE WITH YEAR]",
    color: "#22C55E",
  },
  {
    id: "cert-4",
    title: "[REPLACE WITH CERTIFICATE NAME]",
    issuer: "[REPLACE WITH ISSUER]",
    year: "[REPLACE WITH YEAR]",
    color: "#EC4899",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology — Computer Science",
    institution: "ITM Skills University",
    period: "2024 – 2028",
    description: "Studying software engineering, cloud computing, system design and full stack development.",
  },
  {
    degree: "Higher Secondary — Science",
    institution: "St. Xavier's International School and Junior College",
    period: "2022 – 2024",
    description: "Science stream with focus on Mathematics and Computer Science.",
  },
];
