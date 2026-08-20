'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* Clean Vector SVGs */
const ZapIcon = ({ c = '#7C3AED', s = 20 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CloudIcon = ({ c = '#0284C7', s = 20 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const CpuIcon = ({ c = '#10B981', s = 20 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const PaletteIcon = ({ c = '#EC4899', s = 20 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
  </svg>
);

const TargetIcon = ({ c = '#7C3AED', s = 16 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const DownloadIcon = ({ c = '#FFFFFF', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ExternalLinkIcon = ({ c = '#7C3AED', s = 15 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const LinkedinIcon = ({ c = '#0A66C2', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// User Provided Resume Link
const RESUME_DRIVE_LINK = 'https://drive.google.com/file/d/1u57jeQ33N8bsVT6qf5uGqxpljaxWEXTU/view?usp=sharing';

// 5 Tech Event LinkedIn Posts with Accurate Image & Content Mapping
const events = [
  {
    id: 'aws-community',
    title: 'AWS Community Day Mumbai 2025',
    tag: 'Cloud & DevOps Summit',
    date: 'Oct 2025',
    desc: 'Joined cloud architects, DevOps engineers, and fellow developers at AWS Community Day Mumbai to explore serverless patterns, cloud infrastructure, and modern deployment strategies.',
    url: 'https://www.linkedin.com/posts/sakshi-shingole-484913315_aws-cloud-innovation-activity-7383516932299227136-U6kb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAMI-QBiUsHb3-aGAPQAYl_bUCoFZ5z34M',
    image: '/events/aws_group.jpg',
    color: '#0284C7',
  },
  {
    id: 'mtw-2026',
    title: 'Mumbai Tech Week (MTW 2026)',
    tag: 'Tech Summit & AI',
    date: 'Feb 2026',
    desc: 'Exploring keynotes on AI transformation, system architecture, and emerging tech platforms at Mumbai Tech Week 2026.',
    url: 'https://www.linkedin.com/posts/sakshi-shingole-484913315_mumbaitechweek-mtw2026-ai-activity-7467503170164809729-eRDe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAMI-QBiUsHb3-aGAPQAYl_bUCoFZ5z34M',
    image: '/events/mtw2026_sakshi_plaid.png', // Newly uploaded Sakshi photo at MTW 2026 pink wall
    color: '#7C3AED',
  },
  {
    id: 'mtw-2025',
    title: 'Mumbai Tech Week (MTW 2025)',
    tag: 'AI & Innovation Showcase',
    date: 'May 2025',
    desc: 'Participating in AI innovation showcases, connecting with founders, and exploring emerging technology trends at Mumbai Tech Week 2025.',
    url: 'https://www.linkedin.com/posts/sakshi-shingole-484913315_mumbaitechweek-ai-innovation-activity-7302000693224058880-UXPj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAMI-QBiUsHb3-aGAPQAYl_bUCoFZ5z34M',
    image: '/events/mtw2026.jpg', // Photo of Sakshi at MTW red sun backdrop
    color: '#EC4899',
  },
  {
    id: 'ai-n8n-workshop',
    title: 'AI Agents & Automation Workshop (n8n & LLMs)',
    tag: 'AI & Automation',
    date: 'Aug 2025',
    desc: 'Hands-on workshop learning AI agents, low-code automation with n8n workflows, OpenAI LLM integration, and building real-world automated pipelines.',
    url: 'https://www.linkedin.com/posts/sakshi-shingole-484913315_ai-automation-n8n-activity-7325811897834897408-CXaf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAMI-QBiUsHb3-aGAPQAYl_bUCoFZ5z34M',
    image: '/events/n8n_workshop_group.jpg', // Workshop stage group photo
    color: '#F59E0B',
  },
  {
    id: 'devfest-mumbai',
    title: 'DevFest Mumbai · GDG MAD & Cloud',
    tag: 'Google Developer Conference',
    date: 'Dec 2025',
    desc: 'Engaging in Google Developer Group sessions on Web3, AI Agents, cloud native application design, and modern frontend frameworks.',
    url: 'https://www.linkedin.com/posts/sakshi-shingole-484913315_devfestmumbai-devfestmumbai2025-gdgmad-activity-7409617992831078401-NcLG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFAMI-QBiUsHb3-aGAPQAYl_bUCoFZ5z34M',
    image: '/events/devfest_wall.jpg',
    color: '#10B981',
  },
];

const equation = [
  { label: 'CODE', color: '#7C3AED', desc: 'Writing clean, scalable, high-performance software systems.' },
  { label: '+', color: '#94A3B8', desc: '' },
  { label: 'DESIGN', color: '#EC4899', desc: 'Crafting intuitive, pixel-perfect user experiences.' },
  { label: '+', color: '#94A3B8', desc: '' },
  { label: 'CURIOSITY', color: '#F59E0B', desc: 'Constantly exploring cutting-edge AI, cloud, and modern tech.' },
  { label: '=', color: '#94A3B8', desc: '' },
  { label: 'SAKSHI', color: '#0F172A', desc: '' },
];

const pillars = [
  {
    title: 'Full Stack Engineering',
    desc: 'Developing scalable web architectures from dynamic React/Next.js frontends to robust Node.js and database backends.',
    Icon: ZapIcon,
    color: '#7C3AED',
  },
  {
    title: 'Cloud & DevOps Infrastructure',
    desc: 'Deploying containerized microservices with Docker, Kubernetes, and AWS with automated CI/CD and observability.',
    Icon: CloudIcon,
    color: '#0284C7',
  },
  {
    title: 'Multimodal AI & Automation',
    desc: 'Integrating real-time LLMs, computer vision, and speech processing to craft intelligent, responsive applications.',
    Icon: CpuIcon,
    color: '#10B981',
  },
  {
    title: 'UI/UX & Product Design',
    desc: 'Transforming complex functional requirements into elegant, accessible, and delightful interactive interfaces in Figma.',
    Icon: PaletteIcon,
    color: '#EC4899',
  },
];

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 840);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      
      {/* ── 1. Top Header Area: Profile Photo + Resume Download Button ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          marginBottom: '3.5rem',
        }}
      >
        {/* Left Column: Heading & Resume Button */}
        <div style={{ flex: '1 1 500px', minWidth: 280 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(124, 58, 237, 0.12)', border: '1px solid rgba(124, 58, 237, 0.3)', borderRadius: 100, marginBottom: '1.2rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED' }} />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#7C3AED', textTransform: 'uppercase' }}>
              01 / WHO I AM
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
              marginBottom: '1.25rem',
            }}
          >
            Bridging the space between{' '}
            <span style={{ color: '#7C3AED' }}>
              design, code & AI.
            </span>
          </h1>

          {/* Download Resume Pill Button */}
          <motion.a
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 24px',
              borderRadius: 100,
              background: '#FFFFFF',
              border: '1.5px solid rgba(124, 58, 237, 0.35)',
              color: '#7C3AED',
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.86rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(124, 58, 237, 0.12)',
              transition: 'all 0.2s ease',
            }}
          >
            <DownloadIcon c="#7C3AED" s={18} />
            <span>Download Resume</span>
            <span style={{ fontSize: '0.9rem', color: '#7C3AED' }}>→</span>
          </motion.a>
        </div>

        {/* Right Column: Clean Standalone Portrait Photo with Blurred/Feathered Left, Right, & Bottom Edges */}
        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'relative',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/sakshi_portrait.png"
            alt="Sakshi Shingole"
            style={{
              width: 'clamp(230px, 25vw, 300px)',
              height: 'auto',
              maxHeight: 380,
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 16px 32px rgba(0, 0, 0, 0.05))',
              WebkitMaskImage: 'radial-gradient(ellipse 86% 80% at 50% 38%, #000000 52%, rgba(0,0,0,0.6) 72%, transparent 96%)',
              maskImage: 'radial-gradient(ellipse 86% 80% at 50% 38%, #000000 52%, rgba(0,0,0,0.6) 72%, transparent 96%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── 2. Main Grid: Personal Introduction & Identity Equation ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
          marginBottom: '4rem',
        }}
      >
        {/* Left Column: Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              border: '1px solid rgba(0, 0, 0, 0.07)',
              borderRadius: 22,
              padding: '2.2rem',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0F172A',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span>Personal Introduction</span>
              <span style={{ color: '#7C3AED' }}>✦</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              I&apos;m <strong style={{ color: '#0F172A' }}>Sakshi Shingole</strong>, a Computer Science student at ITM Skills University (2024–2028). I specialize in engineering full-stack web platforms, crafting intuitive user experiences, and deploying scalable cloud systems.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              My passion lies in taking ambitious concepts from initial Figma wireframes to production-grade architectures. Whether orchestrating microservices with Docker and Kubernetes, building real-time socket applications, or exploring multimodal AI workflows, I approach every project with systems-level thinking.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              I believe great digital products must not only perform reliably under load, but also feel effortless, delightful, and human to interact with.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.96rem',
                color: '#475569',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Beyond building, I actively seek out tech events, conferences, and workshops to learn from the community and explore emerging technologies. I also mentored aspiring developers and designers at <strong style={{ color: '#7C3AED' }}>Ideaframe 2026</strong>, guiding teams through ideation and execution.
            </p>
          </div>

          {/* Key Facts Pill Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 10,
            }}
          >
            {[
              { label: 'Degree', value: 'B.Tech in CS' },
              { label: 'University', value: 'ITM Skills University' },
              { label: 'Graduation', value: 'Class of 2028' },
              { label: 'Location', value: 'Kalyan, India' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                  borderRadius: 16,
                  padding: '12px 16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.66rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginTop: 2 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Identity Equation Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(145deg, #FFFFFF 0%, #FAF5FF 100%)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            borderRadius: 24,
            padding: '2.2rem',
            boxShadow: '0 16px 40px rgba(124, 58, 237, 0.06)',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -60,
              right: -60,
              width: 180,
              height: 180,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#7C3AED',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            THE IDENTITY EQUATION
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              alignItems: 'center',
              marginBottom: '1.75rem',
              padding: '12px 16px',
              background: 'rgba(124, 58, 237, 0.05)',
              borderRadius: 14,
              border: '1px dashed rgba(124, 58, 237, 0.25)',
            }}
          >
            {equation.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: item.label === '=' || item.label === '+' ? 400 : 800,
                  fontSize: item.label === '=' || item.label === '+' ? '1.4rem' : '1.05rem',
                  color: item.color,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.label}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {equation
              .filter((e) => e.desc)
              .map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: item.color,
                      flexShrink: 0,
                      marginTop: 4,
                      boxShadow: `0 0 8px ${item.color}40`,
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        color: item.color,
                        letterSpacing: '0.06em',
                        marginRight: 8,
                      }}
                    >
                      {item.label}:
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.88rem',
                        color: '#475569',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Current Focus Card */}
          <div
            style={{
              marginTop: '2rem',
              padding: '16px',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <TargetIcon c="#7C3AED" s={16} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Current Engineering Focus
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.84rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>
              Currently learning and building with <strong style={{ color: '#0284C7' }}>Flutter & Dart</strong> (cross-platform app engineering) and <strong style={{ color: '#10B981' }}>Machine Learning (ML)</strong> models, alongside cloud architecture (AWS), microservice patterns, container orchestration (Kubernetes), and LLM-assisted developer workflows.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── 3. Core Engineering Pillars ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '4.5rem' }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.02em',
            }}
          >
            What I Do & Build
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.92rem', color: '#64748B', marginTop: 4 }}>
            Four pillars that define my development approach and technical expertise.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {pillars.map((pillar, pIdx) => {
            const Icon = pillar.Icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.08 * pIdx, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                  borderRadius: 18,
                  padding: '1.6rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 6,
                  }}
                >
                  <Icon c={pillar.color} s={22} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.84rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ── 4. Horizontal Event Showcase Cards (Alternating Photo + Text Layout) ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ marginBottom: '2.2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.25)', borderRadius: 100, marginBottom: '0.75rem' }}>
            <LinkedinIcon c="#0A66C2" s={14} />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: '#7C3AED', textTransform: 'uppercase' }}>
              WHERE I SHOW UP
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: '-0.02em',
            }}
          >
            Tech Events & Hackathons
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.94rem', color: '#64748B', marginTop: 4, maxWidth: 720 }}>
            Attending developer summits, hackathons, cloud conferences, and AI automation workshops to learn, collaborate, and share ideas.
          </p>
        </div>

        {/* Stack of Full-Width Horizontal Cards (Alternating Image Side) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {events.map((evt, idx) => {
            const isImageLeft = idx % 2 === 0;
            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.008 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.94)',
                  border: `1.5px solid ${evt.color}28`,
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: '0 10px 32px rgba(0, 0, 0, 0.04)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : (isImageLeft ? 'row' : 'row-reverse'),
                  alignItems: 'stretch',
                }}
              >
                {/* Photo Column (~38% width on Desktop) */}
                <div
                  style={{
                    flex: isMobile ? '1 1 auto' : '0 0 38%',
                    height: isMobile ? 220 : 'auto',
                    minHeight: isMobile ? 220 : 250,
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#F1F5F9',
                  }}
                >
                  <img
                    src={evt.image}
                    alt={evt.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 40%, rgba(0,0,0,0.45) 100%)',
                    }}
                  />

                  {/* Top Badge: Date Pill */}
                  <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 2 }}>
                    <span
                      style={{
                        padding: '4px 11px',
                        borderRadius: 100,
                        background: 'rgba(15, 23, 42, 0.72)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(8px)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {evt.date}
                    </span>
                  </div>

                  {/* Top Right: LinkedIn Badge */}
                  <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 2 }}>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                      <LinkedinIcon c="#0A66C2" s={16} />
                    </div>
                  </div>
                </div>

                {/* Text Content Column (~62% width on Desktop) */}
                <div
                  style={{
                    flex: '1 1 62%',
                    padding: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  {/* Category Tag */}
                  <div style={{ marginBottom: 8 }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: 8,
                        background: `${evt.color}15`,
                        border: `1px solid ${evt.color}35`,
                        color: evt.color,
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.64rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {evt.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
                      fontWeight: 800,
                      color: '#0F172A',
                      lineHeight: 1.25,
                      marginBottom: 10,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {evt.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.92rem',
                      color: '#475569',
                      lineHeight: 1.65,
                      marginBottom: 18,
                    }}
                  >
                    {evt.desc}
                  </p>

                  {/* Interactive LinkedIn Link Button */}
                  <div>
                    <a
                      href={evt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '8px 16px',
                        borderRadius: 10,
                        background: `${evt.color}12`,
                        border: `1px solid ${evt.color}35`,
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        color: evt.color,
                        letterSpacing: '0.04em',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      <span>View Post on LinkedIn</span>
                      <ExternalLinkIcon c={evt.color} s={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
