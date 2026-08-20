'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillIcon from '../SkillIcon';

const ExternalLinkIcon = ({ c = '#7C3AED', s = 15 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = ({ c = '#0F172A', s = 16 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ── Top 5 Featured Projects Detailed Schema ──
interface ArchNode {
  label: string;
  sub: string;
  icon: string;
}

interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  purpose: string;
  color: string;
  badge: string;
  archNodes: ArchNode[];
  highlights: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  postUrl?: string;
  imageUrl: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'aura',
    title: 'Aura',
    tagline: '1st Place Hackathon Winner · Real-time visual & voice AI assistance platform',
    purpose: 'Engineered an intelligent real-time visual and voice assistant built for instant context understanding. Features low-latency audio processing, real-time video stream analysis, and multimodal LLM intelligence.',
    color: '#7C3AED',
    badge: '1ST PLACE HACKATHON WINNER',
    archNodes: [
      { label: 'Client App', sub: 'Next.js + Tailwind CSS', icon: 'Next.js' },
      { label: 'Audio Gateway', sub: 'WebSockets & WebRTC', icon: 'React' },
      { label: 'AI Intelligence', sub: 'OpenAI GPT-4o Vision API', icon: 'Prompt Engineering' },
      { label: 'Backend Server', sub: 'Node.js + Express', icon: 'Node.js' },
    ],
    highlights: [
      'Awarded 1st Place Winner out of 50+ engineering hackathon teams',
      'Low-latency WebSockets streaming enabling sub-100ms real-time audio response',
      'Integrated multimodal vision LLMs to answer real-time camera feed queries',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'WebSockets', 'Tailwind CSS'],
    liveUrl: 'https://aura-sh.vercel.app/',
    githubUrl: 'https://github.com/sakshi1013-coder/aura-sh',
    postUrl: 'https://lnkd.in/p/dD2j2fHp',
    imageUrl: '/events/devfest_wall.jpg',
  },
  {
    id: 'modulehub',
    title: 'ModuleHub',
    tagline: 'Autonomous GenAI agent engine & automated multi-node workflow orchestrator',
    purpose: 'Designed to automate enterprise payload ingestion, LLM-powered context parsing, and dynamic multi-node API routing without requiring manual human dispatch or intervention.',
    color: '#F59E0B',
    badge: 'AI WORKFLOW ENGINE',
    archNodes: [
      { label: 'Trigger Node', sub: 'Webhooks / Outlook', icon: 'REST APIs' },
      { label: 'Orchestrator', sub: 'n8n Workflow Engine', icon: 'Node.js' },
      { label: 'AI Intelligence', sub: 'OpenAI GPT-4o LLM', icon: 'Prompt Engineering' },
      { label: 'Database', sub: 'Airtable / PostgreSQL', icon: 'PostgreSQL' },
    ],
    highlights: [
      'Multi-node n8n workflow integrating OpenAI GPT-4o with Airtable & Outlook APIs',
      'Automated webhook trigger handling with sub-200ms payload routing',
      'Self-healing error fallback mechanism ensuring 99.9% pipeline execution reliability',
    ],
    tech: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'Docker', 'Python'],
    liveUrl: 'https://module-hub-three.vercel.app/',
    githubUrl: 'https://github.com/sakshi1013-coder/ModuleHub',
    imageUrl: '/events/n8n_workshop_group.jpg',
  },
  {
    id: 'vibescribe',
    title: 'VibeScribe',
    tagline: 'Low-latency real-time multilingual audio & speech-to-text transcriber',
    purpose: 'Solves real-time meeting transcription and live translation challenges by streaming low-latency WebRTC/WebSocket audio buffers to OpenAI Whisper models with live transcript synchronization.',
    color: '#10B981',
    badge: 'MULTIMODAL SPEECH AI',
    archNodes: [
      { label: 'Audio Buffer Client', sub: 'React + WebRTC', icon: 'React' },
      { label: 'Streaming Gateway', sub: 'WebSocket Server', icon: 'Node.js' },
      { label: 'Speech Model', sub: 'OpenAI Whisper AI', icon: 'Python' },
      { label: 'Store & Export', sub: 'MongoDB Datastore', icon: 'MongoDB' },
    ],
    highlights: [
      'Sub-100ms streaming transcription latency using WebSocket audio chunking',
      'Multi-language translation with custom technical domain phrase highlighting',
      'Clean interactive audio visualizer & exportable Markdown/PDF transcript editor',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Python'],
    liveUrl: 'https://vibe-scribe-beryl.vercel.app/login',
    githubUrl: 'https://github.com/sakshi1013-coder/VibeScribe',
    imageUrl: '/events/mtw2026_sakshi_plaid.png',
  },
  {
    id: 'accredian',
    title: 'Accredian Enterprise',
    tagline: 'Full-stack enterprise credentialing & referral management platform',
    purpose: 'Built to streamline enterprise partner referrals, manage verified certificate issuances, and automate real-time status dispatching with high concurrency database transactions.',
    color: '#0284C7',
    badge: 'ENTERPRISE PLATFORM',
    archNodes: [
      { label: 'Admin Portal', sub: 'React + Tailwind CSS', icon: 'React' },
      { label: 'API Server', sub: 'Node.js + Express', icon: 'Node.js' },
      { label: 'ORM & Query', sub: 'Prisma Client', icon: 'Prisma' },
      { label: 'Relational DB', sub: 'PostgreSQL Datastore', icon: 'PostgreSQL' },
    ],
    highlights: [
      'Integrated Prisma ORM with transactional email dispatch pipelines',
      'Real-time referral performance analytics and conversion tracking dashboard',
      'High-security role-based authentication and audit log telemetry',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    liveUrl: 'https://accredian-enterprise-omega-nine.vercel.app/',
    githubUrl: 'https://github.com/sakshi1013-coder/accredian-enterprise',
    imageUrl: '/events/aws_badge.jpg',
  },
  {
    id: 'samavesh',
    title: 'Samavesh',
    tagline: 'AI-powered inclusive learning engine for accessible digital education',
    purpose: 'Built to democratize digital learning for neurodiverse students and individuals with speech or hearing impairments using real-time sign language synthesis, text-to-speech conversion, and adaptive UI layouts.',
    color: '#EC4899',
    badge: 'INCLUSIVE TECH PLATFORM',
    archNodes: [
      { label: 'Accessible UI', sub: 'Next.js + WCAG AAA', icon: 'React' },
      { label: 'Speech Engine', sub: 'Web Speech API', icon: 'JavaScript' },
      { label: 'API Microservice', sub: 'Node.js + Express', icon: 'Express.js' },
      { label: 'Database', sub: 'MongoDB Datastore', icon: 'MongoDB' },
    ],
    highlights: [
      'AI-assisted sign language gesture recognition & real-time text translation module',
      'Adaptive high-contrast WCAG AAA layout engine for accessible user experiences',
      'Real-time speech synthesis and audio transcript captioning for diverse learners',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
    liveUrl: 'https://samavesh-frontend.vercel.app/',
    githubUrl: 'https://github.com/sakshi1013-coder/Samavesh-Frontend',
    imageUrl: '/events/aws_group.jpg',
  },
];

// ── Tier 2: Other Projects Brief Grid Data (Exact Live & GitHub Repositories) ──
interface OtherProject {
  id: string;
  title: string;
  badge: string;
  icon: string;
  desc: string;
  workflowLabel: string;
  phases: { step: string; title: string; sub: string }[];
  benchmark: string;
  tech: string[];
  github: string;
  demo: string;
  color: string;
}

const otherProjects: OtherProject[] = [
  {
    id: 'bodmas-game',
    title: 'BODMAS Logic Game',
    badge: 'GAMIFIED EDTECH',
    icon: '🎯',
    desc: 'Interactive mathematical logic platform teaching operator precedence through rapid-fire equations, visual feedback, and timed combo streaks.',
    workflowLabel: 'MATHEMATICAL LOGIC ENGINE',
    phases: [
      { step: 'PHASE 01', title: 'Equation Gen', sub: 'Dynamic Order' },
      { step: 'PHASE 02', title: 'Eval Stack', sub: 'Expression Tree' },
      { step: 'PHASE 03', title: 'Streak Score', sub: 'Real-Time Telemetry' },
    ],
    benchmark: '100% Client-Side Speed',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    github: 'https://github.com/sakshi1013-coder/aura-sh',
    demo: 'https://bodmas-game-xi.vercel.app/',
    color: '#EF4444',
  },
  {
    id: 'washflow',
    title: 'WashFlow — Service Tracker',
    badge: 'SERVICE PLATFORM',
    icon: '🧺',
    desc: 'On-demand laundry tracking and workflow automation platform with real-time order status updates and clean dispatching UI.',
    workflowLabel: 'ORDER DISPATCH PIPELINE',
    phases: [
      { step: 'PHASE 01', title: 'Order Intake', sub: 'Item Tagging' },
      { step: 'PHASE 02', title: 'Wash Cycle', sub: 'Status Webhooks' },
      { step: 'PHASE 03', title: 'Dispatch', sub: 'SMS & Delivery' },
    ],
    benchmark: 'Real-Time Order Telemetry',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/sakshi1013-coder/WashFlow',
    demo: 'https://wash-flow-xi.vercel.app/',
    color: '#0284C7',
  },
  {
    id: 'notification-system',
    title: 'Notification System Pipeline',
    badge: 'BACKEND SYSTEM',
    icon: '⚡',
    desc: 'Real-time multi-channel notification dispatch pipeline with queue processing, email/SMS webhooks, and rate-limiting throttling.',
    workflowLabel: 'DISTRIBUTED QUEUE PIPELINE',
    phases: [
      { step: 'PHASE 01', title: 'Event Ingest', sub: 'Redis Bull Queue' },
      { step: 'PHASE 02', title: 'Rate Limiter', sub: 'Token Bucket' },
      { step: 'PHASE 03', title: 'Multi-Channel', sub: 'Email & Webhooks' },
    ],
    benchmark: '5,000+ Msgs/Sec Throughput',
    tech: ['Node.js', 'Express.js', 'Redis', 'REST APIs'],
    github: 'https://github.com/sakshi1013-coder/Notification-System',
    demo: 'https://sakshi1013-coder.github.io/Notification-System/',
    color: '#F59E0B',
  },
  {
    id: 'joblens',
    title: 'JobLens — AI Job Analytics',
    badge: 'AI JOB ANALYTICS',
    icon: '🔍',
    desc: 'AI-assisted career analytics and resume keyword optimization tool helping job seekers tailor applications with real-time match scoring.',
    workflowLabel: 'RESUME & JOB MATCHING',
    phases: [
      { step: 'PHASE 01', title: 'Resume Parse', sub: 'Text Extraction' },
      { step: 'PHASE 02', title: 'Vector Analysis', sub: 'Cosine Similarity' },
      { step: 'PHASE 03', title: 'Gap Report', sub: 'Skill Optimization' },
    ],
    benchmark: '98% Keyword Match Accuracy',
    tech: ['Next.js', 'React', 'Python', 'Tailwind CSS'],
    github: 'https://github.com/sakshi1013-coder/JobLens',
    demo: 'https://job-lens-sigma.vercel.app/',
    color: '#EC4899',
  },
  {
    id: 'focus-taskmanager',
    title: 'Focus — The Task Manager',
    badge: 'PRODUCTIVITY ENGINE',
    icon: '📋',
    desc: 'High-efficiency productivity & task management application featuring drag-and-drop kanban boards, priority tagging, and state persistence.',
    workflowLabel: 'KANBAN STATE PIPELINE',
    phases: [
      { step: 'PHASE 01', title: 'Task Capture', sub: 'Priority Matrix' },
      { step: 'PHASE 02', title: 'State Engine', sub: 'Drag & Drop' },
      { step: 'PHASE 03', title: 'Persistence', sub: 'Local & Cloud Sync' },
    ],
    benchmark: 'Zero-Latency State Updates',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/sakshi1013-coder/Focus-thetaskmanager',
    demo: 'https://focus-thetaskmanager.vercel.app/',
    color: '#7C3AED',
  },
  {
    id: 'fundflow',
    title: 'FundFlow — Financial Engine',
    badge: 'FINTECH ENGINE',
    icon: '💰',
    desc: 'Financial expense tracking & budget allocation platform with interactive chart analytics, recurring transaction alerts, and CSV exports.',
    workflowLabel: 'FINANCIAL ANALYTICS',
    phases: [
      { step: 'PHASE 01', title: 'Ledger Ingest', sub: 'CSV & Bank Feeds' },
      { step: 'PHASE 02', title: 'Categorizer', sub: 'Budget Rules' },
      { step: 'PHASE 03', title: 'Visualizer', sub: 'Interactive Charts' },
    ],
    benchmark: 'Automated Cashflow Tracking',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/sakshi1013-coder/FundFlow',
    demo: 'https://fund-flow-liart.vercel.app/',
    color: '#14B8A6',
  },
  {
    id: 'vero',
    title: 'Vero — Content & Media Platform',
    badge: 'CONTENT PLATFORM',
    icon: '✍️',
    desc: 'Modern content publishing & media platform featuring Markdown text editing, dynamic tag filtering, and automated social sharing previews.',
    workflowLabel: 'MARKDOWN PUBLISHING',
    phases: [
      { step: 'PHASE 01', title: 'Draft Editor', sub: 'Live AST Parsing' },
      { step: 'PHASE 02', title: 'Tag Indexing', sub: 'Search Clustering' },
      { step: 'PHASE 03', title: 'SSR Delivery', sub: 'Instant Previews' },
    ],
    benchmark: 'Sub-50ms Page Loads',
    tech: ['React', 'Next.js', 'TypeScript', 'Firebase'],
    github: 'https://github.com/sakshi1013-coder/Vero',
    demo: 'https://vero-khaki.vercel.app/',
    color: '#6366F1',
  },
  {
    id: 'nobroker-clone',
    title: 'NoBroker — Real Estate Platform',
    badge: 'FULL STACK CLONE',
    icon: '🏠',
    desc: 'Full-stack property rental & real estate listing platform with zero brokerage fees, property search filters, and owner contact routing.',
    workflowLabel: 'ZERO BROKERAGE PORTAL',
    phases: [
      { step: 'PHASE 01', title: 'Listing Flow', sub: 'Media Uploads' },
      { step: 'PHASE 02', title: 'Geo Filters', sub: 'Rental Matching' },
      { step: 'PHASE 03', title: 'Direct Connect', sub: 'Owner Routing' },
    ],
    benchmark: 'Zero Brokerage Matching',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Netlify'],
    github: 'https://github.com/sakshi1013-coder/NoBroker-clone',
    demo: 'https://sparkling-churros-4c3f35.netlify.app/',
    color: '#EF4444',
  },
  {
    id: 'examwali-figma',
    title: 'Exam Wali Site — UI/UX Redesign',
    badge: 'FIGMA UI/UX DESIGN',
    icon: '🎨',
    desc: 'Complete responsive UI/UX interface redesign & interactive prototype for student exam preparation and study note distribution.',
    workflowLabel: 'DESIGN SYSTEM & PROTOTYPE',
    phases: [
      { step: 'PHASE 01', title: 'User Research', sub: 'Student Personas' },
      { step: 'PHASE 02', title: 'Design System', sub: 'Typography & Colors' },
      { step: 'PHASE 03', title: 'Prototype', sub: 'Figma Components' },
    ],
    benchmark: '100% WCAG Accessible Prototype',
    tech: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping'],
    github: 'https://www.figma.com/make/m9p2grZlgnM4IJvLcW1nSi/examwalisite_recreation?t=bajbOGWw42gYeyhp-1',
    demo: 'https://www.figma.com/make/m9p2grZlgnM4IJvLcW1nSi/examwalisite_recreation?t=bajbOGWw42gYeyhp-1',
    color: '#A855F7',
  },
];

export default function ProjectsSection() {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      
      {/* ── Top Header Area ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '3.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(124, 58, 237, 0.12)', border: '1px solid rgba(124, 58, 237, 0.3)', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#7C3AED', textTransform: 'uppercase' }}>
            03 / FEATURED PROJECTS
          </span>
        </div>

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
          Engineering work, AI systems &{' '}
          <span style={{ color: '#7C3AED' }}>
            full-stack applications.
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
          A detailed showcase of production-grade web platforms, space telemetry pipelines, inclusive AI applications, and workflow automations from Sakshi&apos;s GitHub repository.
        </p>
      </motion.div>

      {/* ── TIER 1: TOP 5 FEATURED PROJECTS (Aura, Samavesh, ModuleHub, OrbitalShield, VibeScribe) ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '5rem' }}>
        {featuredProjects.map((proj, idx) => (
          <FeaturedProjectCard key={proj.id} proj={proj} idx={idx} />
        ))}
      </div>

      {/* ── TIER 2: 3D COVERFLOW PERSPECTIVE CAROUSEL FOR OTHER BUILDS ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginTop: '4rem', borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '3.5rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px', background: 'rgba(0,0,0,0.04)', borderRadius: 100, marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                MORE BUILDS
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
              Other Projects & Repositories
            </h2>
          </div>
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8' }}>
            0{otherProjects.length} builds
          </span>
        </div>

        {/* 3D Coverflow Interactive Carousel Stage */}
        <OtherProjects3DCoverflow />
      </motion.div>
    </div>
  );
}

{/* ── 3D Coverflow Carousel Component (Matching Modern Stacked Perspective) ── */}
function OtherProjects3DCoverflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? otherProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === otherProjects.length - 1 ? 0 : prev + 1));
  };

  // Auto drift every 5.5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        padding: '0.5rem 0 2rem',
      }}
    >
      {/* 3D Perspective Stage */}
      <div
        style={{
          position: 'relative',
          height: 'clamp(520px, 64vh, 560px)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: 1200,
          perspectiveOrigin: 'center 45%',
          overflow: 'visible',
        }}
      >
        {otherProjects.map((op, idx) => {
          const count = otherProjects.length;
          let dist = idx - activeIndex;
          if (dist > count / 2) dist -= count;
          if (dist < -count / 2) dist += count;

          const isActive = dist === 0;
          const absDist = Math.abs(dist);
          const isVisible = absDist <= 2;

          let translateX = '0%';
          let rotateY = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 10;

          if (dist === 0) {
            translateX = '0%';
            rotateY = 0;
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else if (dist === -1) {
            translateX = '-56%';
            rotateY = 16;
            scale = 0.85;
            opacity = 0.45;
            zIndex = 5;
          } else if (dist === 1) {
            translateX = '56%';
            rotateY = -16;
            scale = 0.85;
            opacity = 0.45;
            zIndex = 5;
          } else if (dist < -1) {
            translateX = '-105%';
            rotateY = 25;
            scale = 0.72;
            opacity = 0;
            zIndex = 1;
          } else {
            translateX = '105%';
            rotateY = -25;
            scale = 0.72;
            opacity = 0;
            zIndex = 1;
          }

          if (!isVisible) return null;

          return (
            <motion.div
              key={op.id}
              onClick={() => {
                if (!isActive) setActiveIndex(idx);
              }}
              animate={{
                x: translateX,
                scale,
                rotateY,
                opacity,
                zIndex,
              }}
              transition={{
                duration: 0.48,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                position: 'absolute',
                width: 'clamp(320px, 86vw, 440px)',
                background: 'linear-gradient(170deg, #181C28 0%, #0F121C 100%)',
                border: isActive ? `2px solid ${op.color}` : '1.5px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 26,
                padding: 'clamp(1.5rem, 3.2vw, 2rem)',
                boxShadow: isActive
                  ? `0 24px 60px rgba(0, 0, 0, 0.55), 0 0 32px ${op.color}35`
                  : '0 12px 30px rgba(0, 0, 0, 0.35)',
                cursor: isActive ? 'default' : 'pointer',
                transformStyle: 'preserve-3d',
                pointerEvents: isActive ? 'auto' : absDist <= 1 ? 'auto' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              {/* Card Header: Pill Badge & Glowing Icon */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: op.color,
                      background: `${op.color}20`,
                      border: `1px solid ${op.color}40`,
                      padding: '4px 10px',
                      borderRadius: 100,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {op.badge}
                  </span>

                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: `${op.color}25`,
                      border: `1px solid ${op.color}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      boxShadow: `0 0 12px ${op.color}30`,
                    }}
                  >
                    {op.icon}
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    margin: '0 0 8px 0',
                  }}
                >
                  {op.title}
                </h3>

                {/* Project Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.84rem',
                    color: '#94A3B8',
                    lineHeight: 1.5,
                    margin: '0 0 14px 0',
                  }}
                >
                  {op.desc}
                </p>

                {/* Inner Architecture / Workflow Box (matching Image 2) */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 16,
                    padding: '12px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: op.color, boxShadow: `0 0 8px ${op.color}` }} />
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.66rem', fontWeight: 800, color: '#E2E8F0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        {op.workflowLabel}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.62rem', fontWeight: 700, color: op.color }}>
                      ● Active Pipeline
                    </span>
                  </div>

                  {/* 3-Step Milestone Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                    {op.phases.map((p, pIdx) => (
                      <div
                        key={p.step}
                        style={{
                          background: pIdx === 0 ? `${op.color}15` : 'rgba(255, 255, 255, 0.02)',
                          border: pIdx === 0 ? `1px solid ${op.color}45` : '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: 8,
                          padding: '8px 6px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.58rem', fontWeight: 800, color: pIdx === 0 ? op.color : '#64748B' }}>
                            {p.step}
                          </span>
                          <span style={{ fontSize: '0.6rem', color: pIdx === 0 ? op.color : '#475569' }}>✓</span>
                        </div>
                        <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem', fontWeight: 800, color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {p.title}
                        </div>
                        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.58rem', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {p.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 2 }}>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.68rem', color: '#64748B' }}>
                      {op.tech.slice(0, 3).join(' • ')}
                    </span>
                    <a
                      href={op.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: op.color,
                        textDecoration: 'none',
                      }}
                    >
                      View Live →
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Benchmark & CTA Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 4 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    BENCHMARK
                  </div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', fontWeight: 800, color: '#F1F5F9' }}>
                    {op.benchmark}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <a
                    href={op.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      padding: '8px 12px',
                      borderRadius: 10,
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                    }}
                  >
                    <GithubIcon c="#FFFFFF" s={14} />
                    <span>Repo</span>
                  </a>

                  <a
                    href={op.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '9px 16px',
                      borderRadius: 10,
                      background: `linear-gradient(135deg, ${op.color}, ${op.color}DD)`,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      boxShadow: `0 4px 16px ${op.color}50`,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span>Launch App</span>
                    <span style={{ fontSize: '0.8rem' }}>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrow Controls & Stepper Dots */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginTop: '1.5rem' }}>
        <button
          onClick={prevSlide}
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            color: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 800,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            transition: 'all 0.2s ease',
          }}
          title="Previous Project"
        >
          ←
        </button>

        {/* Stepper Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {otherProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              style={{
                width: activeIndex === idx ? 28 : 8,
                height: 8,
                borderRadius: 100,
                background: activeIndex === idx ? p.color : '#CBD5E1',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeIndex === idx ? `0 0 10px ${p.color}80` : 'none',
              }}
              title={p.title}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            color: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: 800,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            transition: 'all 0.2s ease',
          }}
          title="Next Project"
        >
          →
        </button>
      </div>
    </div>
  );
}

{/* Detailed Featured Project Card with Alternating Layout & Animated Architecture Diagram */}
function FeaturedProjectCard({ proj, idx }: { proj: FeaturedProject; idx: number }) {
  const isEven = idx % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: '#FFFFFF',
        border: `1.5px solid ${proj.color}30`,
        borderRadius: 28,
        padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
        boxShadow: '0 16px 45px rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Accent Line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4.5, background: proj.color }} />

      {/* Grid Container — Alternating Left / Right Column Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {/* ── Text Info Content Column ── */}
        <div style={{ order: isEven ? 1 : 2 }}>
          {/* Top Badge & Number */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.68rem',
                fontWeight: 800,
                color: proj.color,
                background: `${proj.color}15`,
                border: `1px solid ${proj.color}30`,
                padding: '4px 11px',
                borderRadius: 8,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {proj.badge}
            </span>

            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8' }}>
              0{idx + 1} / 05
            </span>
          </div>

          {/* Project Title & Tagline */}
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: 6,
            }}
          >
            {proj.title}
          </h2>

          <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', fontWeight: 700, color: proj.color, marginBottom: '1.25rem' }}>
            {proj.tagline}
          </div>

          {/* Purpose Paragraph */}
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.94rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
            }}
          >
            {proj.purpose}
          </p>

          {/* Key Highlights Bullet Points */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Key System Highlights
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {proj.highlights.map((h, i) => (
                <li key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                  <span style={{ color: proj.color, fontWeight: 900, marginTop: -1 }}>▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills with Brand Icons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.75rem' }}>
            {proj.tech.map((t, tIdx) => (
              <motion.span
                key={t}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.04 * tIdx }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#334155',
                  background: '#F1F5F9',
                  border: '1px solid #E2E8F0',
                  padding: '4px 10px',
                  borderRadius: 8,
                }}
              >
                <SkillIcon name={t} size={15} />
                <span>{t}</span>
              </motion.span>
            ))}
          </div>

          {/* Action Link Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <a
              href={proj.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '9px 18px',
                borderRadius: 12,
                background: proj.color,
                color: '#FFFFFF',
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.8rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: `0 4px 14px ${proj.color}40`,
                transition: 'transform 0.2s ease',
              }}
            >
              <span>Live Demo</span>
              <ExternalLinkIcon c="#FFFFFF" s={14} />
            </a>

            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                padding: '9px 18px',
                borderRadius: 12,
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                color: '#0F172A',
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }}
            >
              <GithubIcon c="#0F172A" s={16} />
              <span>GitHub Code</span>
            </a>

            {proj.postUrl && (
              <a
                href={proj.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 16px',
                  borderRadius: 12,
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1.5px solid rgba(245, 158, 11, 0.35)',
                  color: '#D97706',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                <span>🏆 Winner Post</span>
                <span style={{ fontSize: '0.85rem' }}>↗</span>
              </a>
            )}
          </div>
        </div>

        {/* ── Architecture Diagram & Visual Preview Column ── */}
        <div style={{ order: isEven ? 2 : 1 }}>
          <motion.div
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              background: '#F8FAFC',
              border: `1.5px solid ${proj.color}25`,
              borderRadius: 22,
              padding: '1.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
            }}
          >
            {/* Diagram Title */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 800, color: proj.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                System Architecture Flow
              </span>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: proj.color }} />
            </div>

            {/* Visual Node Diagram (Frontend -> Backend -> Event -> DB) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}>
              {proj.archNodes.map((node, nIdx) => (
                <React.Fragment key={node.label}>
                  {/* Node Box */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.08 * nIdx }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '12px 14px',
                      background: '#FFFFFF',
                      border: `1px solid ${proj.color}30`,
                      borderRadius: 14,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: `${proj.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: proj.color, flexShrink: 0 }}>
                      <SkillIcon name={node.icon} size={18} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.84rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                        {node.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 600, color: proj.color }}>
                        {node.sub}
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Connecting SVG Arrow Line */}
                  {nIdx < proj.archNodes.length - 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '-4px 0' }}>
                      <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                        <motion.path
                          d="M12 0V16M12 16L7 11M12 16L17 11"
                          stroke={proj.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.08 * nIdx + 0.1 }}
                        />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
