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
  title: "Summer Hacks",
  event: "Hackathon Winner",
  description:
    "Collaborated in a team to develop Aura — an AI-powered multimodal assistant that provides real-time video understanding with speech interaction.",
  role: "Team Project · Frontend · UI/UX · AI",
  tags: ["Team Project", "Frontend", "UI/UX", "AI"],
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
