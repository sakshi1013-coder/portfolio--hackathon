'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* Clean Vector SVGs */
const TrophyIcon = ({ c = '#F59E0B', s = 24 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const UsersIcon = ({ c = '#7C3AED', s = 24 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GithubIcon = ({ c = '#0F172A', s = 15 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ c = '#0077B5', s = 15 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

const SearchIcon = ({ s = 16, c = '#64748B' }: { s?: number; c?: string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ChevronLeftIcon = ({ s = 18, c = 'currentColor' }: { s?: number; c?: string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = ({ s = 18, c = 'currentColor' }: { s?: number; c?: string }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const LINKEDIN_CERT_OVERLAY = 'https://www.linkedin.com/in/sakshi-shingole-484913315/details/certifications/';

export interface ModalItem {
  id: string;
  type: 'achievement' | 'certificate';
  companyId: 'all' | 'google' | 'oracle' | 'postman' | 'flutter' | 'deloitte' | 'hackathon' | 'ai-tools' | 'creative';
  companyName: string;
  badge: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  longDescription: string;
  tags: string[];
  color: string;
  imageBanner: string;
  galleryImages?: string[];
  linkedinUrl?: string;
  githubUrl?: string;
  credentialId?: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All', color: '#0284C7' },
  { id: 'google', label: 'Google Cloud', color: '#0284C7' },
  { id: 'oracle', label: 'Oracle', color: '#EF4444' },
  { id: 'postman', label: 'Postman', color: '#F97316' },
  { id: 'flutter', label: 'FlutterCraft', color: '#38BDF8' },
  { id: 'deloitte', label: 'Deloitte', color: '#0284C7' },
  { id: 'hackathon', label: 'Hackathons', color: '#F59E0B' },
  { id: 'ai-tools', label: 'AI & Competitions', color: '#7C3AED' },
  { id: 'creative', label: 'Design & AR/VR', color: '#EC4899' },
] as const;

const mainAchievements: ModalItem[] = [
  {
    id: 'aura-summerhacks-hero',
    type: 'achievement',
    companyId: 'hackathon',
    companyName: 'Notion x ITM',
    badge: '1ST PLACE WINNER',
    title: 'Aura — SummerHacks 2026 1st Position Winner',
    subtitle: '1st Place Champion at SummerHacks 2026 (ITM x Notion)',
    date: '2026',
    description: '1st Position Winner at SummerHacks 2026 Hackathon. Built Aura — an intelligent real-time visual and voice assistant featuring low-latency audio processing and multimodal AI intelligence.',
    longDescription: 'Awarded 1st Position Winner in the SummerHacks 2026 Hackathon organized by ITM School of Future Tech in collaboration with Notion. Aura is an intelligent real-time visual and voice assistant built for instant context understanding, sub-100ms WebSockets audio streaming, and multimodal LLM video feed analysis.',
    tags: ['1st Position Winner', 'SummerHacks 2026', 'ITM x Notion', 'Multimodal AI', 'WebSockets', 'OpenAI GPT-4o'],
    color: '#F59E0B',
    imageBanner: '/certificates/summerhacks.png',
    linkedinUrl: 'https://www.linkedin.com/posts/sakshi-shingole-484913315_devfestmumbai-devfestmumbai2025-gdgmad-activity-7409617992831078401-NcLG',
    githubUrl: 'https://github.com/sakshi1013-coder/aura-sh',
  },
  {
    id: 'ideaframe-2026-mentor',
    type: 'achievement',
    companyId: 'hackathon',
    companyName: 'Ideaframe Hackathon',
    badge: 'MENTOR · 20+ TEAMS',
    title: 'Technical Mentor & Guide — Ideaframe 2026',
    subtitle: 'School of Future Tech · ITM Skills University',
    date: '13 August 2026',
    description: 'Mentored 20+ teams at Ideaframe 2026, guiding participants through ideation, technical architecture, and execution — helping first-time builders turn early concepts into working prototypes.',
    longDescription: 'Mentored 20+ student engineering teams at Ideaframe 2026, guiding participants through system architecture design, full-stack web debugging (React, Next.js, Node.js REST APIs), database modeling, and evaluating hackathon submissions based on code quality, technical execution, and innovation.',
    tags: ['Mentorship', 'Technical Guidance', 'Ideation', 'System Architecture', 'Hackathon Leadership', 'ITM Skills University'],
    color: '#7C3AED',
    imageBanner: '/events/ideaframe_mentoring.jpg',
    galleryImages: [
      '/events/ideaframe_mentoring.jpg',
      '/events/ideaframe_goodies.jpg',
      '/events/ideaframe_group.jpg',
    ],
    linkedinUrl: 'https://lnkd.in/p/dQu4F8Q8',
  },
];

// ── 15 Verified Certifications with Company Grouping ──
const detailedCerts: ModalItem[] = [
  {
    id: 'cert-google-bigquery',
    type: 'certificate',
    companyId: 'google',
    companyName: 'Google Cloud',
    badge: 'GOOGLE CLOUD BADGE',
    title: 'Analyze BigQuery Data in Connected Sheets',
    subtitle: 'Google Cloud Platform (Productivity & Analytics)',
    date: 'Issued Dec 2025',
    description: 'Introductory Skill Badge from Google Cloud validating BigQuery data analysis, Connected Sheets querying, and cloud data visualization.',
    longDescription: 'Google Cloud skill badge verifying introductory competence in analyzing enterprise BigQuery datasets directly within Connected Sheets for data-driven decisions.',
    tags: ['Google Cloud', 'BigQuery', 'Connected Sheets', 'Introductory Skill Badge'],
    color: '#0284C7',
    imageBanner: '/certificates/gcp_bigquery.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-google-appsheet',
    type: 'certificate',
    companyId: 'google',
    companyName: 'Google Cloud',
    badge: 'GOOGLE CLOUD BADGE',
    title: 'App Building with AppSheet',
    subtitle: 'Google Cloud Platform (Application Modernization)',
    date: 'Issued Dec 2025',
    description: 'Introductory Skill Badge from Google Cloud validating no-code application modernization and automated workflow creation with AppSheet.',
    longDescription: 'Google Cloud skill badge verifying hands-on competence in building no-code web & mobile apps using Google AppSheet with enterprise data triggers.',
    tags: ['Google Cloud', 'AppSheet', 'Application Modernization', 'Introductory Skill Badge'],
    color: '#0284C7',
    imageBanner: '/certificates/gcp_appsheet.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-google-kubernetes',
    type: 'certificate',
    companyId: 'google',
    companyName: 'Google Cloud',
    badge: 'GOOGLE CLOUD BADGE',
    title: 'Manage Kubernetes in Google Cloud',
    subtitle: 'Google Cloud Platform (Hybrid & Multi-Cloud)',
    date: 'Issued Dec 2025',
    description: 'Intermediate Skill Badge from Google Cloud validating container orchestration, GKE cluster management, and multi-cloud infrastructure.',
    longDescription: 'Google Cloud skill badge verifying intermediate hands-on competence in managing, scaling, and configuring Google Kubernetes Engine (GKE) clusters.',
    tags: ['Google Kubernetes Engine (GKE)', 'Container Orchestration', 'Intermediate Skill Badge'],
    color: '#0284C7',
    imageBanner: '/certificates/gcp_kubernetes.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-google-cicd',
    type: 'certificate',
    companyId: 'google',
    companyName: 'Google Cloud',
    badge: 'GOOGLE CLOUD BADGE',
    title: 'Implement DevOps Workflows in Google Cloud',
    subtitle: 'Google Cloud Platform (DevOps & CI/CD)',
    date: 'Issued Dec 2025',
    description: 'Skill Badge from Google Cloud validating continuous integration, continuous delivery (CI/CD), and Cloud Build pipeline deployment.',
    longDescription: 'Google Cloud skill badge verifying practical expertise in configuring automated build pipelines, Cloud Build triggers, container image registries, and automated deployments.',
    tags: ['Google Cloud', 'CI/CD Pipelines', 'Cloud Build', 'DevOps Automation'],
    color: '#0284C7',
    imageBanner: '/certificates/gcp_cicd.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-oracle-agentic-ai',
    type: 'certificate',
    companyId: 'oracle',
    companyName: 'Oracle',
    badge: 'ORACLE CERTIFIED',
    title: 'Oracle Certified Foundations Associate',
    subtitle: 'Oracle University (Agentic AI)',
    date: 'Issued Aug 16, 2026',
    description: 'Oracle Certified Foundations Associate in Agentic AI, recognizing expertise in AI agents, generative AI foundations, and LangChain orchestration.',
    longDescription: 'Official Certificate of Recognition from Oracle Corporation recognizing Sakshi Shingole as Oracle Certified Associate in Agentic AI Foundations (Verification ID: 330659386AAI26OFA).',
    tags: ['Oracle Certified', 'Agentic AI', 'Generative AI', 'LangChain'],
    color: '#EF4444',
    imageBanner: '/certificates/oracle.png',
    credentialId: '330659386AAI26OFA',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-postman-expert',
    type: 'certificate',
    companyId: 'postman',
    companyName: 'Postman',
    badge: 'POSTMAN STUDENT EXPERT',
    title: 'Postman API Fundamentals Student Expert',
    subtitle: 'Postman',
    date: 'Issued 10 Jul 2024',
    description: 'Verified Postman Student Expert credential covering RESTful API testing, endpoint scripting, environment variables, and automated collection runner.',
    longDescription: 'Official Postman API Student Expert certification validating expertise in designing RESTful API requests, automating integration test suites, managing collections, and setting up environment authentication.',
    tags: ['Postman API', 'RESTful API Testing', 'API Scripting', 'Collection Runner'],
    color: '#F97316',
    imageBanner: '/certificates/postman.png',
    credentialId: '668e8626557d7e56f50acf10',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-flutter-dart',
    type: 'certificate',
    companyId: 'flutter',
    companyName: 'FlutterCraft',
    badge: 'FLUTTERCRAFT CERTIFIED',
    title: 'Dart Programming for Flutter',
    subtitle: 'FlutterCraft (14 Hours Course)',
    date: 'Issued Aug 16, 2026',
    description: 'Certificate of Achievement for successfully completing 14 hours of Dart Programming for Flutter on FlutterCraft.',
    longDescription: 'Official FlutterCraft Certificate of Achievement (ID: FC-2026-4613363) validating 14 hours of intensive Dart programming and object-oriented mobile architecture.',
    tags: ['Dart Programming', 'FlutterCraft', '14 Hours Course', 'ID: FC-2026-4613363'],
    color: '#0284C7',
    imageBanner: '/certificates/flutter_dart.png',
    credentialId: 'FC-2026-4613363',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-flutter-orientation',
    type: 'certificate',
    companyId: 'flutter',
    companyName: 'FlutterCraft',
    badge: 'FLUTTERCRAFT CERTIFIED',
    title: 'Orientation in Flutter Development',
    subtitle: 'FlutterCraft (11 Hours Course)',
    date: 'Issued Aug 16, 2026',
    description: 'Certificate of Achievement for successfully completing 11 hours of Orientation in Flutter Development on FlutterCraft.',
    longDescription: 'Official FlutterCraft Certificate of Achievement (ID: FC-2026-4448211) validating 11 hours of hands-on Flutter UI widget composition and mobile layout development.',
    tags: ['Flutter Development', 'FlutterCraft', '11 Hours Course', 'ID: FC-2026-4448211'],
    color: '#38BDF8',
    imageBanner: '/certificates/flutter_orientation.png',
    credentialId: 'FC-2026-4448211',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-deloitte-jobsim',
    type: 'certificate',
    companyId: 'deloitte',
    companyName: 'Deloitte',
    badge: 'DELOITTE AUSTRALIA',
    title: 'Deloitte Australia — Technology Job Simulation',
    subtitle: 'Forage / Deloitte Australia',
    date: 'Issued Nov 22, 2025',
    description: 'Completed practical software engineering tasks covering technology consulting, code analysis, security auditing, and development.',
    longDescription: 'Virtual technology job simulation credential from Deloitte Australia on Forage, completing real-world software engineering exercises, security audits, coding development tasks, and cloud architecture proposals.',
    tags: ['Software Engineering', 'Technology Consulting', 'Code Security', 'Development'],
    color: '#0284C7',
    imageBanner: '/certificates/deloitte.png',
    credentialId: '8g9nLKCvYCgnMHDbi',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-summerhacks-winner',
    type: 'certificate',
    companyId: 'hackathon',
    companyName: 'Notion x ITM',
    badge: 'HACKATHON WINNER',
    title: 'SummerHacks 2026 Hackathon Winner',
    subtitle: 'ITM x Notion x School of Future Tech',
    date: 'Issued Apr 2026',
    description: 'Awarded 1st Position in the SummerHacks 2026 Hackathon for demonstrating creativity, problem-solving, and innovation in a fast-paced arcade challenge.',
    longDescription: 'Official 1st Position Winner certificate for SummerHacks 2026 Hackathon organized by ITM Group of Institutions and School of Future Tech in collaboration with Notion.',
    tags: ['1st Position Winner', 'SummerHacks 2026', 'ITM x Notion', 'Rapid Prototyping'],
    color: '#F59E0B',
    imageBanner: '/certificates/summerhacks.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-women-who-master-hackathon',
    type: 'certificate',
    companyId: 'hackathon',
    companyName: 'Logitech & Aspire',
    badge: 'NATIONAL WOMEN HACKATHON',
    title: 'Women Who Master Hackathon',
    subtitle: 'Logitech & Aspire For Her National Initiative',
    date: 'Issued 27th July 2026',
    description: 'Participated in the Women Who Master Hackathon, an all-women national hackathon initiative by Logitech and Aspire For Her, part of a movement empowering 100K women in tech.',
    longDescription: 'Official Certificate of Participation awarded to Sakshi Shingole from ITM Skills University for active participation in the Women Who Master Hackathon, an all-women national initiative organized by Logitech and Aspire For Her empowering 100K women in technology.',
    tags: ['Women Who Master', 'Logitech', 'Aspire For Her', 'National Women Hackathon', 'Empowering 100K Women'],
    color: '#EC4899',
    imageBanner: '/certificates/aspire_women_hackathon.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-quizoff-ai',
    type: 'certificate',
    companyId: 'ai-tools',
    companyName: 'Unstop & CampusCrew',
    badge: 'NATIONAL AI QUIZ',
    title: 'QuizOff 2026: India\'s Biggest AI Quiz',
    subtitle: 'CampusCrew & Unstop',
    date: 'Issued 19 Jul 2026',
    description: 'Certificate of Recognition for competing in QuizOff 2026 among 5,25,000+ students from 48,500+ institutions across 35+ countries.',
    longDescription: 'Official Unstop & CampusCrew certificate presented to Sakshi Dhanaji Shingole in recognition of competing in QuizOff 2026: India\'s Biggest AI Quiz.',
    tags: ['QuizOff 2026', 'CampusCrew', 'Unstop', 'AI & ML Mastery'],
    color: '#7C3AED',
    imageBanner: '/certificates/quizoff.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-genai-pieces',
    type: 'certificate',
    companyId: 'ai-tools',
    companyName: 'Pieces for Developers',
    badge: 'PIECES FOR DEVELOPERS',
    title: 'GenAI 101 with Pieces',
    subtitle: 'Pieces for Developers',
    date: 'Issued 16 Dec 2024',
    description: 'Certification in Generative AI tools, prompt engineering techniques, and developer workflow augmentation using autonomous coding assistants.',
    longDescription: 'Completed Pieces for Developers GenAI certification, exploring prompt engineering strategies, AI code snippet retrieval, and developer productivity tools.',
    tags: ['GenAI', 'Prompt Engineering', 'AI Coding Assistants'],
    color: '#8B5CF6',
    imageBanner: '/certificates/pieces.png',
    credentialId: 'GENAI-PIECES-2024',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-graphic-design',
    type: 'certificate',
    companyId: 'creative',
    companyName: 'LetsUpgrade & GDG',
    badge: 'LETSUPGRADE BOOTCAMP',
    title: 'Graphic Designing Bootcamp',
    subtitle: 'LetsUpgrade (NSDC & GDG MAD Partnered)',
    date: 'Issued 20 July 2024',
    description: '5-Day Graphic Designing Bootcamp certification covering visual hierarchy, brand layout design, typography, and vector asset creation.',
    longDescription: 'LetsUpgrade graphic design bootcamp credential (No: LUEGDJUN1241295) in collaboration with NSDC and GDG MAD, covering visual design principles, vector editing, brand color systems, and UI illustration.',
    tags: ['Graphic Design', 'Visual Hierarchy', 'Typography & Layout', 'GDG MAD Partner'],
    color: '#F97316',
    imageBanner: '/certificates/letsupgrade.png',
    credentialId: 'LUEGDJUN1241295',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-bharatxr',
    type: 'certificate',
    companyId: 'creative',
    companyName: 'Snapchat & BharatXR',
    badge: 'BHARAT XR & SNAPCHAT AR',
    title: 'AR/VR Workshop — Snapchat AR Lenses',
    subtitle: 'BharatXR & ITM Skills University',
    date: 'Issued Feb 1 & 3, 2025',
    description: 'Certificate of Appreciation for building interactive Snapchat AR Lenses using Snap Lens Studio at the AR/VR Workshop for B.Tech CSE.',
    longDescription: 'BharatXR Certificate of Appreciation awarded to Sakshi Shingole for building interactive Snapchat AR Lenses using Lens Studio at the AR/VR Workshop organized by BharatXR for B.Tech CSE at ITM Skills University.',
    tags: ['Snapchat AR Lenses', 'Lens Studio', 'AR/VR Systems', 'Spatial Web'],
    color: '#6366F1',
    imageBanner: '/certificates/bharatxr.png',
    linkedinUrl: LINKEDIN_CERT_OVERLAY,
  },
  {
    id: 'cert-ideaframe-mentorship',
    type: 'certificate',
    companyId: 'hackathon',
    companyName: 'ITM Skills University',
    badge: 'MENTORSHIP CERTIFICATE',
    title: 'Certificate of Mentorship — IdeaFrame 2026',
    subtitle: 'Hackathon Club · School of Future Tech',
    date: 'Issued 13 August 2026',
    description: 'Official Certificate of Mentorship awarded for active participation, mentorship, guidance, problem-solving, collaboration, and hackathon leadership at IdeaFrame 2026.',
    longDescription: 'Official Certificate of Mentorship presented to Sakshi Shingole by Dean Dr. Kalpana Kumaran and HOD Dr. Aarti Pardeshi for mentoring and guiding 20+ participant teams throughout the IdeaFrame 2026 Hackathon at ITM Skills University.',
    tags: ['Mentorship Certificate', 'IdeaFrame 2026', 'ITM Skills University', 'Hackathon Leadership'],
    color: '#F59E0B',
    imageBanner: '/certificates/ideaframe_mentorship_cert.jpg',
    linkedinUrl: 'https://lnkd.in/p/dQu4F8Q8',
  },
  {
    id: 'cert-ideaframe-letter-appreciation',
    type: 'certificate',
    companyId: 'hackathon',
    companyName: 'School of Future Tech',
    badge: 'LETTER OF APPRECIATION',
    title: 'Letter of Appreciation — IdeaFrame 2026',
    subtitle: 'Dean & Head of BTech CSE Recognition',
    date: 'Issued 13 August 2026',
    description: 'Official Letter of Appreciation from Dean Dr. Kalpana Kumaran and HOD Dr. Aarti Pardeshi for valuable contributions as Mentor to participants of IdeaFrame 2026.',
    longDescription: 'Official Letter of Appreciation presented to Sakshi Shingole recognizing dedication, technical guidance, and genuine effort in mentoring hackathon participants and fostering peer learning at ITM Skills University.',
    tags: ['Letter of Appreciation', 'IdeaFrame 2026', 'Dean Recognition', 'Student Leadership'],
    color: '#7C3AED',
    imageBanner: '/certificates/ideaframe_letter_of_appreciation.jpg',
    linkedinUrl: 'https://lnkd.in/p/dQu4F8Q8',
  },
];

export default function CertificatesSection() {
  const [selectedModalItem, setSelectedModalItem] = useState<ModalItem | null>(null);
  const [activeGalleryIdx, setActiveGalleryIdx] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPosRef = useRef<number>(0);

  // Lock body scroll and reset gallery index when modal is open
  useEffect(() => {
    if (selectedModalItem) {
      setActiveGalleryIdx(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedModalItem]);

  // Filtered Certificates
  const filteredCerts = useMemo(() => {
    return detailedCerts.filter((cert) => {
      const matchCategory = activeCategory === 'all' || cert.companyId === activeCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: detailedCerts.length };
    detailedCerts.forEach((c) => {
      counts[c.companyId] = (counts[c.companyId] || 0) + 1;
    });
    return counts;
  }, []);

  // Continuous Slow-Motion Carousel Auto-Drift
  useEffect(() => {
    if (viewMode !== 'carousel') return;
    const el = carouselRef.current;
    if (!el) return;

    let lastTime = performance.now();
    const speed = 0.45; // Pixels per frame (ultra smooth slow drift)

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered && el) {
        // Increment scroll position
        scrollPosRef.current += (speed * delta) / 16.66;
        const maxScroll = el.scrollWidth - el.clientWidth;

        if (maxScroll > 10) {
          if (scrollPosRef.current >= maxScroll) {
            scrollPosRef.current = 0;
          }
          el.scrollLeft = scrollPosRef.current;
        }
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [viewMode, isHovered, filteredCerts]);

  // Handle user manual scroll on carousel
  const handleCarouselScroll = () => {
    if (carouselRef.current && isHovered) {
      scrollPosRef.current = carouselRef.current.scrollLeft;
    }
  };

  const manualScroll = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 360;
    const target = dir === 'left' ? carouselRef.current.scrollLeft - scrollAmount : carouselRef.current.scrollLeft + scrollAmount;
    carouselRef.current.scrollTo({ left: target, behavior: 'smooth' });
    scrollPosRef.current = target;
  };

  // Distinct certificate items without duplication
  const carouselDisplayItems = useMemo(() => {
    return filteredCerts;
  }, [filteredCerts]);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.25rem 6rem' }}>
      
      {/* ── Top Header Area ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(2, 132, 199, 0.12)', border: '1px solid rgba(2, 132, 199, 0.3)', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0284C7' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0284C7', textTransform: 'uppercase' }}>
            05 / CERTIFICATES & HONORS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' } as React.CSSProperties}>
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0F172A',
                maxWidth: 850,
              }}
            >
              Verified credentials, awards &{' '}
              <span style={{ color: '#0284C7' }}>
                recognitions.
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                color: '#64748B',
                marginTop: '0.75rem',
                maxWidth: 720,
                lineHeight: 1.6,
              }}
            >
              Industry certifications from Google Cloud, Oracle, Postman, and FlutterCraft alongside national hackathon victories. Browse with the slow carousel or view all certificates.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 18px',
              background: '#FFFFFF',
              border: '1.5px solid rgba(2, 132, 199, 0.2)',
              borderRadius: 16,
              boxShadow: '0 8px 24px rgba(2, 132, 199, 0.08)',
              alignSelf: 'flex-start',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.35rem', fontWeight: 800, color: '#0284C7' }}>
                15+
              </div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                Credentials
              </div>
            </div>
            <div style={{ width: 1, height: 28, background: '#E2E8F0' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.35rem', fontWeight: 800, color: '#F59E0B' }}>
                1st
              </div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                Hackathon
              </div>
            </div>
            <div style={{ width: 1, height: 28, background: '#E2E8F0' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.35rem', fontWeight: 800, color: '#7C3AED' }}>
                20+
              </div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>
                Mentored
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── ACHIEVEMENTS SHOWCASE (Aura Winner + Ideaframe Mentorship) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3.5rem' }}>
        
        {/* 1. HERO REVEAL: Aura 1st Position SummerHacks Winner Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.006 }}
          onClick={() => setSelectedModalItem(mainAchievements[0])}
          style={{
            background: 'linear-gradient(145deg, #FFFBEB 0%, #FEF3C7 60%, #FFF7ED 100%)',
            border: '1.5px solid rgba(245, 158, 11, 0.4)',
            borderRadius: 24,
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            boxShadow: '0 20px 48px rgba(245, 158, 11, 0.14)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          {/* Shimmer Sweep Animation */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 4 }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '40%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
              pointerEvents: 'none',
              transform: 'skewX(-20deg)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), #FEF3C7)',
                  border: '2px solid rgba(245, 158, 11, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)',
                }}
              >
                <TrophyIcon c="#D97706" s={38} />
              </div>

              <span
                style={{
                  padding: '4px 12px',
                  background: '#F59E0B',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 800,
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
                }}
              >
                1ST PLACE WINNER
              </span>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#B45309', textTransform: 'uppercase', marginBottom: 4 }}>
                SUMMERHACKS 2026 HACKATHON CHAMPION (ITM x NOTION)
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.95rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: '#0F172A',
                  marginBottom: '0.5rem',
                  lineHeight: 1.2,
                }}
              >
                Aura — SummerHacks 2026 1st Position Winner
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  maxWidth: 720,
                }}
              >
                Awarded 1st Position Winner at the SummerHacks 2026 Hackathon (ITM x Notion). Engineered low-latency WebSockets audio streaming, live camera feed processing, and real-time multimodal AI intelligence. <span style={{ color: '#D97706', fontWeight: 700 }}>Click to inspect certificate & repo →</span>
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {mainAchievements[0].tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      borderRadius: 100,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      color: '#B45309',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. SECOND ACHIEVEMENT: Mentoring at Ideaframe 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.006 }}
          onClick={() => setSelectedModalItem(mainAchievements[1])}
          style={{
            background: 'linear-gradient(145deg, #F3E8FF 0%, #FAF5FF 60%, #FFFFFF 100%)',
            border: '1.5px solid rgba(124, 58, 237, 0.3)',
            borderRadius: 24,
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            boxShadow: '0 16px 40px rgba(124, 58, 237, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            {/* Icon & Badge */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'rgba(124, 58, 237, 0.12)',
                  border: '2px solid rgba(124, 58, 237, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(124, 58, 237, 0.15)',
                }}
              >
                <UsersIcon c="#7C3AED" s={38} />
              </div>
              <span
                style={{
                  padding: '4px 12px',
                  background: '#7C3AED',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 800,
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                }}
              >
                MENTOR · 20+ TEAMS
              </span>
            </div>

            {/* Details */}
            <div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#7C3AED', textTransform: 'uppercase', marginBottom: 4 }}>
                IDEAFRAME 2026 HACKATHON · JAN 2026 – FEB 2026
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.95rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: '#0F172A',
                  marginBottom: '0.5rem',
                  lineHeight: 1.2,
                }}
              >
                Technical Mentor & Guide — Ideaframe 2026
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  maxWidth: 720,
                }}
              >
                Mentored 20+ teams at Ideaframe 2026, guiding participants through ideation, technical architecture, and execution — helping first-time builders turn early concepts into working prototypes. <span style={{ color: '#7C3AED', fontWeight: 700 }}>Click to inspect details →</span>
              </p>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {mainAchievements[1].tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(124, 58, 237, 0.3)',
                      borderRadius: 100,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      color: '#6D28D9',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── CATEGORY BAR & CLEAN VIEW ACTION ── */}
      <div style={{ marginBottom: '1.75rem' }}>
        
        {/* Top Control Bar: Title & Clean Action */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.25rem',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px', background: 'rgba(2, 132, 199, 0.08)', borderRadius: 100, marginBottom: '0.35rem' }}>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem', fontWeight: 700, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                FILTER BY COMPANY & ISSUER
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Certificates & Industry Badges
            </h2>
          </div>

          {/* Clean View Switcher Text Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {viewMode === 'carousel' ? (
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 16px',
                  borderRadius: 100,
                  border: '1.5px solid rgba(2, 132, 199, 0.3)',
                  background: '#FFFFFF',
                  color: '#0284C7',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>View all certificates ({detailedCerts.length})</span>
                <span>→</span>
              </button>
            ) : (
              <button
                onClick={() => setViewMode('carousel')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 16px',
                  borderRadius: 100,
                  border: '1.5px solid #E2E8F0',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>← Show as carousel</span>
              </button>
            )}

            {/* Left & Right Step Buttons (for carousel mode) */}
            {viewMode === 'carousel' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <button
                  onClick={() => manualScroll('left')}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  }}
                  title="Scroll Left"
                >
                  <ChevronLeftIcon s={16} />
                </button>
                <button
                  onClick={() => manualScroll('right')}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1.5px solid #E2E8F0',
                    color: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  }}
                  title="Scroll Right"
                >
                  <ChevronRightIcon s={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Clean Categories Filter Pills (No Emojis) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollbarWidth: 'none',
          }}
        >
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isActive = activeCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 16px',
                  borderRadius: 100,
                  border: isActive ? `1.5px solid ${cat.color}` : '1.5px solid #E2E8F0',
                  background: isActive ? `${cat.color}12` : '#FFFFFF',
                  color: isActive ? cat.color : '#475569',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 800 : 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? `0 4px 12px ${cat.color}20` : '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    padding: '2px 7px',
                    borderRadius: 100,
                    background: isActive ? cat.color : '#F1F5F9',
                    color: isActive ? '#FFFFFF' : '#64748B',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── MODE 1: SLOW-MOVING CAROUSEL VIEW ── */}
      {viewMode === 'carousel' && (
        <div style={{ position: 'relative' }}>
          {/* Horizontal Infinite Track Container */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onScroll={handleCarouselScroll}
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              padding: '0.5rem 0.25rem 1.5rem',
              scrollbarWidth: 'none',
              cursor: isHovered ? 'grab' : 'default',
            }}
          >
            {carouselDisplayItems.map((cert, index) => (
              <motion.div
                key={`${cert.id}-${index}`}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={() => setSelectedModalItem(cert)}
                style={{
                  flex: '0 0 340px',
                  width: 340,
                  background: '#FFFFFF',
                  border: `1.5px solid ${cert.color}35`,
                  borderRadius: 22,
                  boxShadow: `0 12px 32px ${cert.color}12`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Certificate Banner Header */}
                <div
                  style={{
                    position: 'relative',
                    height: 180,
                    width: '100%',
                    background: '#F8FAFC',
                    borderBottom: `1px solid ${cert.color}20`,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={cert.imageBanner}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.4s ease',
                    }}
                  />

                  {/* Company Badge Pill */}
                  <span
                    style={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      background: cert.color,
                      padding: '3px 9px',
                      borderRadius: 6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                    }}
                  >
                    {cert.badge}
                  </span>

                  {/* Date Pill */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 8,
                      right: 10,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(6px)',
                      padding: '2px 8px',
                      borderRadius: 5,
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25,
                        marginBottom: 4,
                      }}
                    >
                      {cert.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: cert.color,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {cert.subtitle}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.84rem',
                        color: '#475569',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '0.75rem' }}>
                      {cert.tags.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.66rem',
                            fontWeight: 600,
                            color: '#475569',
                            background: '#F1F5F9',
                            padding: '3px 8px',
                            borderRadius: 6,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.74rem', fontWeight: 700, color: cert.color, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span>Click to inspect certificate</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Switch to View All CTA Footer */}
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 24px',
                background: '#FFFFFF',
                border: '1.5px solid rgba(2, 132, 199, 0.3)',
                borderRadius: 100,
                color: '#0284C7',
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.08)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>View all {detailedCerts.length} certificates in grid mode</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* ── MODE 2: FULL RESPONSIVE GRID VIEW (VIEW ALL) ── */}
      {viewMode === 'grid' && (
        <div>
          {/* Search and Filter Summary */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.75rem',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              padding: '1rem 1.25rem',
              borderRadius: 18,
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: 12,
                padding: '8px 14px',
                flexGrow: 1,
                maxWidth: 400,
              }}
            >
              <SearchIcon s={16} />
              <input
                type="text"
                placeholder="Search by certificate title, company, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.88rem',
                  color: '#0F172A',
                  width: '100%',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#94A3B8',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 700, color: '#64748B' }}>
              Showing {filteredCerts.length} of {detailedCerts.length} certificates
            </div>
          </div>

          {/* Grid Cards Container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
                whileHover={{ y: -6, scale: 1.015 }}
                onClick={() => setSelectedModalItem(cert)}
                style={{
                  background: '#FFFFFF',
                  border: `1.5px solid ${cert.color}35`,
                  borderRadius: 22,
                  boxShadow: `0 10px 30px ${cert.color}0E`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {/* Banner Header */}
                <div
                  style={{
                    position: 'relative',
                    height: 170,
                    width: '100%',
                    background: '#F8FAFC',
                    borderBottom: `1px solid ${cert.color}20`,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={cert.imageBanner}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.4s ease',
                    }}
                  />

                  <span
                    style={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      background: cert.color,
                      padding: '3px 9px',
                      borderRadius: 6,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    {cert.badge}
                  </span>

                  <span
                    style={{
                      position: 'absolute',
                      bottom: 8,
                      right: 10,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#0F172A',
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(6px)',
                      padding: '2px 8px',
                      borderRadius: 5,
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Body Details */}
                <div style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25,
                        marginBottom: 4,
                      }}
                    >
                      {cert.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: cert.color,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {cert.subtitle}
                    </p>

                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.84rem',
                        color: '#475569',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                      }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '0.75rem' }}>
                      {cert.tags.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.66rem',
                            fontWeight: 600,
                            color: '#475569',
                            background: '#F1F5F9',
                            padding: '3px 8px',
                            borderRadius: 6,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.74rem', fontWeight: 700, color: cert.color, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span>Inspect credential details</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCerts.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: '#FFFFFF',
                borderRadius: 22,
                border: '1px dashed #CBD5E1',
              }}
            >
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.1rem', fontWeight: 700, color: '#64748B', marginBottom: '0.5rem' }}>
                No certificates found for this filter
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                style={{
                  padding: '8px 18px',
                  background: '#0284C7',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── CLICK-TO-OPEN DETAIL MODAL OVERLAY (AnimatePresence) ── */}
      <AnimatePresence>
        {selectedModalItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalItem(null)}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(15, 23, 42, 0.72)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
              }}
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 740,
                maxHeight: '92vh',
                background: '#FFFFFF',
                borderRadius: 28,
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 10,
              }}
            >
              {/* Image Banner Header with Multi-Photo Gallery Support */}
              <div
                style={{
                  position: 'relative',
                  height: 320,
                  width: '100%',
                  background: '#0F172A',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={
                    selectedModalItem.galleryImages && selectedModalItem.galleryImages.length > 0
                      ? selectedModalItem.galleryImages[activeGalleryIdx % selectedModalItem.galleryImages.length]
                      : selectedModalItem.imageBanner
                  }
                  alt={selectedModalItem.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: '#0F172A',
                  }}
                />

                {/* Left/Right Gallery Navigation if multiple photos */}
                {selectedModalItem.galleryImages && selectedModalItem.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveGalleryIdx((cur) =>
                          cur === 0 ? selectedModalItem.galleryImages!.length - 1 : cur - 1
                        );
                      }}
                      style={{
                        position: 'absolute',
                        left: 14,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: 900,
                        backdropFilter: 'blur(8px)',
                        zIndex: 2,
                      }}
                      title="Previous Photo"
                    >
                      ←
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveGalleryIdx((cur) =>
                          (cur + 1) % selectedModalItem.galleryImages!.length
                        );
                      }}
                      style={{
                        position: 'absolute',
                        right: 60,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: 900,
                        backdropFilter: 'blur(8px)',
                        zIndex: 2,
                      }}
                      title="Next Photo"
                    >
                      →
                    </button>

                    {/* Photo Counter Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 12,
                        left: 14,
                        background: 'rgba(0,0,0,0.72)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: 100,
                        padding: '3px 12px',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        backdropFilter: 'blur(8px)',
                        zIndex: 2,
                      }}
                    >
                      Photo {activeGalleryIdx + 1} / {selectedModalItem.galleryImages.length}
                    </div>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedModalItem(null)}
                  style={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    zIndex: 3,
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Multi-Photo Thumbnail Bar */}
              {selectedModalItem.galleryImages && selectedModalItem.galleryImages.length > 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 1.5rem',
                    background: '#F8FAFC',
                    borderBottom: '1px solid #E2E8F0',
                    overflowX: 'auto',
                  }}
                >
                  {selectedModalItem.galleryImages.map((imgUrl, gIdx) => (
                    <button
                      key={imgUrl}
                      onClick={() => setActiveGalleryIdx(gIdx)}
                      style={{
                        width: 60,
                        height: 44,
                        borderRadius: 8,
                        overflow: 'hidden',
                        border: activeGalleryIdx === gIdx ? `2px solid ${selectedModalItem.color}` : '2px solid transparent',
                        padding: 0,
                        cursor: 'pointer',
                        background: '#0F172A',
                        boxShadow: activeGalleryIdx === gIdx ? `0 0 10px ${selectedModalItem.color}80` : 'none',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                        opacity: activeGalleryIdx === gIdx ? 1 : 0.65,
                      }}
                    >
                      <img src={imgUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  ))}
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 600, color: '#64748B', marginLeft: 4 }}>
                    Click photo to switch view
                  </span>
                </div>
              )}

              {/* Modal Content Scroll Area */}
              <div style={{ padding: '1.75rem 2rem 2rem', overflowY: 'auto' }}>
                {/* Badge & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: selectedModalItem.color,
                        background: `${selectedModalItem.color}15`,
                        border: `1px solid ${selectedModalItem.color}30`,
                        padding: '4px 12px',
                        borderRadius: 100,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {selectedModalItem.badge}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#64748B',
                        background: '#F1F5F9',
                        padding: '4px 10px',
                        borderRadius: 100,
                      }}
                    >
                      {selectedModalItem.companyName}
                    </span>
                  </div>

                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.8rem', fontWeight: 700, color: '#64748B' }}>
                    {selectedModalItem.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h2
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1.2,
                    marginBottom: 4,
                  }}
                >
                  {selectedModalItem.title}
                </h2>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', fontWeight: 700, color: selectedModalItem.color, marginBottom: '1.25rem' }}>
                  {selectedModalItem.subtitle}
                </div>

                {/* Credential ID */}
                {selectedModalItem.credentialId && (
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', color: '#64748B', background: '#F8FAFC', padding: '6px 12px', borderRadius: 8, marginBottom: '1.25rem', border: '1px solid #E2E8F0' }}>
                    <strong>Credential ID:</strong> {selectedModalItem.credentialId}
                  </div>
                )}

                {/* Full Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.94rem',
                    color: '#334155',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}
                >
                  {selectedModalItem.longDescription}
                </p>

                {/* Tag Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
                  {selectedModalItem.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#475569',
                        background: '#F1F5F9',
                        border: '1px solid #E2E8F0',
                        padding: '4px 12px',
                        borderRadius: 100,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, borderTop: '1px solid #E2E8F0', paddingTop: '1.25rem' }}>
                  {selectedModalItem.linkedinUrl && (
                    <a
                      href={selectedModalItem.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 7,
                        padding: '9px 16px',
                        borderRadius: 12,
                        background: '#0077B5',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)',
                      }}
                    >
                      <LinkedinIcon c="#FFFFFF" s={16} />
                      <span>Verify on LinkedIn →</span>
                    </a>
                  )}

                  {selectedModalItem.githubUrl && (
                    <a
                      href={selectedModalItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 7,
                        padding: '9px 16px',
                        borderRadius: 12,
                        background: '#0F172A',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                      }}
                    >
                      <GithubIcon c="#FFFFFF" s={16} />
                      <span>View on GitHub →</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
