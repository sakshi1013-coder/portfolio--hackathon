'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Clean Vector SVGs to replace all emojis */
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
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#7C3AED15', border: '1px solid #7C3AED30', borderRadius: 100, marginBottom: '1rem' }}>
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
            maxWidth: 820,
          }}
        >
          Bridging the space between{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            design, code & AI.
          </span>
        </h1>
      </motion.div>

      {/* Main Grid: Bio + Equation Card */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
          marginBottom: '4rem',
        }}
      >
        {/* Left Column: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: 20,
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '1.2rem',
                fontWeight: 700,
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
              }}
            >
              I believe great digital products must not only perform reliably under load, but also feel effortless, delightful, and human to interact with.
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
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 14,
                  padding: '12px 16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
            border: '1px solid rgba(124, 58, 237, 0.15)',
            borderRadius: 24,
            padding: '2.2rem',
            boxShadow: '0 16px 40px rgba(124, 58, 237, 0.05)',
            position: 'relative',
            overflow: 'hidden',
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
              background: 'rgba(124, 58, 237, 0.04)',
              borderRadius: 14,
              border: '1px dashed rgba(124, 58, 237, 0.2)',
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
                      boxShadow: `0 0 8px ${item.color}66`,
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

          {/* Current Focus Card with Vector Icon */}
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
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
              Deepening knowledge in cloud architecture (AWS), microservice patterns, container orchestration (Kubernetes), and integrating LLM-assisted developer workflows.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Core Engineering Pillars with Vector Icons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
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
          {pillars.map((pillar) => {
            const Icon = pillar.Icon;
            return (
              <div
                key={pillar.title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 18,
                  padding: '1.6rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
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
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
