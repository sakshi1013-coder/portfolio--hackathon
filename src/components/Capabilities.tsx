'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const capabilities = [
  {
    id: 'build',
    number: '01',
    label: 'BUILD',
    title: 'Full Stack Development',
    color: '#6257E8',
    bg: '#E9E7FF',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.IO'],
    description: 'I architect and build complete web applications — from responsive frontends to scalable server-side systems and real-time features.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 20l-6-4 6-4M22 12l6 4-6 4M18 8l-4 16" stroke="#6257E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'design',
    number: '02',
    label: 'DESIGN',
    title: 'UI/UX Design',
    color: '#EC4899',
    bg: '#FDE8F2',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Responsive Design', 'Design Systems', 'User Research'],
    description: 'I translate ideas into polished, accessible interfaces — researching users, creating wireframes, and iterating on high-fidelity designs.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="11" height="11" rx="2" stroke="#EC4899" strokeWidth="2" />
        <rect x="17" y="4" width="11" height="11" rx="2" stroke="#EC4899" strokeWidth="2" />
        <rect x="4" y="17" width="11" height="11" rx="2" stroke="#EC4899" strokeWidth="2" />
        <circle cx="22.5" cy="22.5" r="5.5" stroke="#EC4899" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'intelligence',
    number: '03',
    label: 'INTELLIGENCE',
    title: 'AI / GenAI',
    color: '#A855F7',
    bg: '#F3E8FF',
    skills: ['Cursor', 'Lovable', 'Antigravity', 'Prompt Engineering', 'LLM APIs', 'AI-assisted Dev'],
    description: 'I leverage AI tools and APIs to accelerate development — from intelligent prompting strategies to integrating LLM capabilities into products.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" stroke="#A855F7" strokeWidth="2" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'scale',
    number: '04',
    label: 'SCALE',
    title: 'Cloud + DevOps',
    color: '#F59E0B',
    bg: '#FEF3C7',
    skills: ['AWS', 'Docker', 'Docker Compose', 'Jenkins', 'Kubernetes', 'Nginx', 'PM2', 'Monitoring & Logging'],
    description: 'I design and manage containerised cloud infrastructure — from CI/CD pipelines and orchestration to observability with Prometheus and Grafana.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 22c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 26h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="22" r="1.5" fill="#F59E0B" />
        <circle cx="20" cy="18" r="1.5" fill="#F59E0B" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const panelVariants = [
    { initial: { opacity: 0, y: 40 }, transition: { delay: 0.1 } },
    { initial: { opacity: 0, x: -40 }, transition: { delay: 0.2 } },
    { initial: { opacity: 0, scale: 0.92 }, transition: { delay: 0.3 } },
    { initial: { opacity: 0, x: 40 }, transition: { delay: 0.4 } },
  ];

  return (
    <section
      id="capabilities"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: '#fff',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label"
          style={{ marginBottom: '1rem' }}
        >
          02 / CAPABILITIES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-lg"
          style={{ marginBottom: '3.5rem', maxWidth: 560 }}
        >
          What I build,<br />design & engineer.
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={panelVariants[i].initial}
              animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], ...panelVariants[i].transition }}
              onHoverStart={() => setHoveredId(cap.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                background: hoveredId === cap.id ? cap.bg : '#fff',
                border: `1px solid ${hoveredId === cap.id ? cap.color + '30' : '#E5E5E5'}`,
                borderRadius: 20,
                padding: '2rem',
                cursor: 'none',
                transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hoveredId === cap.id ? `0 16px 48px ${cap.color}15` : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              data-cursor-label="EXPLORE"
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: hoveredId === cap.id ? cap.color : '#CCC',
                  transition: 'color 0.3s',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                {cap.number}
              </span>

              {/* Icon */}
              <div style={{ marginBottom: '1rem' }}>{cap.icon}</div>

              {/* Label */}
              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  letterSpacing: '-0.02em',
                  color: cap.color,
                  marginBottom: '0.25rem',
                }}
              >
                {cap.label}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  color: '#666',
                  marginBottom: '1rem',
                }}
              >
                {cap.title}
              </p>

              {/* Description — shows on hover */}
              <AnimatePresence>
                {hoveredId === cap.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.85rem',
                      color: '#555',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                      overflow: 'hidden',
                    }}
                  >
                    {cap.description}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '3px 10px',
                      background: hoveredId === cap.id ? 'rgba(255,255,255,0.7)' : '#F7F8F6',
                      border: `1px solid ${hoveredId === cap.id ? cap.color + '25' : '#E5E5E5'}`,
                      borderRadius: 100,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 500,
                      fontSize: '0.7rem',
                      color: hoveredId === cap.id ? cap.color : '#666',
                      transition: 'all 0.3s',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative corner */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  background: `radial-gradient(circle at 100% 100%, ${cap.color}15 0%, transparent 70%)`,
                  borderRadius: '20px',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
