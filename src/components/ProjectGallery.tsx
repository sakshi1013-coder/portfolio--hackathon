'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
const GithubIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>);
const ExternalLinkIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>);
const BookOpenIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>);
import { projects } from '@/data/projects';
import ProjectDNA from './ProjectDNA';
import dynamic from 'next/dynamic';

const ProjectCaseStudy = dynamic(() => import('./ProjectCaseStudy'), { ssr: false });

const filters = ['ALL', 'FULL STACK', 'AI', 'CLOUD', 'UI/UX', 'DEVOPS'];

// Orbital visualization for OrbitalShield
function OrbitalViz({ color }: { color: string }) {
  return (
    <svg width="100%" height="160" viewBox="0 0 320 160" style={{ overflow: 'visible' }}>
      <circle cx="160" cy="80" r="18" fill={color} opacity="0.9" />
      <text x="160" y="84" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="bold">EARTH</text>
      {[60, 90, 120].map((r, i) => (
        <g key={r}>
          <ellipse cx="160" cy="80" rx={r} ry={r * 0.35} fill="none" stroke={color} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 4" />
          <motion.circle
            cx={160 + r}
            cy={80}
            r={i === 0 ? 5 : i === 1 ? 4 : 3}
            fill={i === 0 ? color : i === 1 ? '#E5E5E5' : '#999'}
            animate={{
              cx: [160 + r, 160, 160 - r, 160, 160 + r],
              cy: [80, 80 - r * 0.35, 80, 80 + r * 0.35, 80],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
              ease: 'linear',
            }}
          />
        </g>
      ))}
      {['EC2', 'K8s', 'Grafana', 'Jenkins'].map((label, i) => (
        <text
          key={label}
          x={[50, 250, 80, 260][i]}
          y={[40, 60, 130, 130][i]}
          fontSize="8"
          fill={color}
          opacity="0.6"
          fontFamily="monospace"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

// Package flow visualization for ModuleHub
function PackageFlowViz({ color }: { color: string }) {
  const steps = ['COMPANY', 'PUBLISH', 'VERSION', 'SUBSCRIBE', 'NOTIFY'];
  return (
    <svg width="100%" height="160" viewBox="0 0 320 160">
      {steps.map((step, i) => {
        const x = 30 + i * 65;
        return (
          <g key={step}>
            <rect x={x - 24} y="65" width="48" height="28" rx="6" fill={color} opacity={0.1} stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
            <text x={x} y="83" textAnchor="middle" fontSize="7" fill={color} fontFamily="monospace" fontWeight="600">{step}</text>
            {i < steps.length - 1 && (
              <motion.line
                x1={x + 24}
                y1={79}
                x2={x + 41}
                y2={79}
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity="0.5"
                animate={{ strokeOpacity: [0.2, 0.8, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
              />
            )}
            <motion.circle
              cx={x}
              cy={79}
              r={3}
              fill={color}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
            />
          </g>
        );
      })}
      <text x="160" y="130" textAnchor="middle" fontSize="8" fill={color} opacity="0.5" fontFamily="monospace">Socket.IO real-time events</text>
    </svg>
  );
}

// Waveform visualization for VibeScribe
function WaveformViz({ color }: { color: string }) {
  const bars = Array.from({ length: 32 }, (_, i) => ({
    h: 20 + Math.sin(i * 0.7) * 25 + Math.random() * 15,
    delay: i * 0.05,
  }));
  return (
    <svg width="100%" height="160" viewBox="0 0 320 160">
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={6 + i * 9.5}
          y={80 - bar.h / 2}
          width={6}
          height={bar.h}
          rx={3}
          fill={color}
          opacity={0.6}
          animate={{ height: [bar.h, bar.h * 0.4, bar.h, bar.h * 1.4, bar.h], y: [80 - bar.h / 2, 80 - bar.h * 0.2, 80 - bar.h / 2, 80 - bar.h * 0.7, 80 - bar.h / 2] }}
          transition={{ repeat: Infinity, duration: 2, delay: bar.delay, ease: 'easeInOut' }}
        />
      ))}
      <text x="160" y="148" textAnchor="middle" fontSize="9" fill={color} opacity="0.6" fontFamily="monospace">AUDIO → AI → TRANSCRIPTION</text>
    </svg>
  );
}

// AWS Architecture visualization for SpaceOps
function AWSViz({ color }: { color: string }) {
  const services = [
    { label: 'VPC', x: 160, y: 30 },
    { label: 'EC2', x: 80, y: 75 },
    { label: 'RDS', x: 240, y: 75 },
    { label: 'S3', x: 50, y: 125 },
    { label: 'IAM', x: 160, y: 120 },
    { label: 'CW', x: 270, y: 125 },
  ];
  const connections = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]];
  return (
    <svg width="100%" height="160" viewBox="0 0 320 160">
      {connections.map(([from, to], i) => (
        <motion.line
          key={i}
          x1={services[from].x}
          y1={services[from].y}
          x2={services[to].x}
          y2={services[to].y}
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
          animate={{ strokeOpacity: [0.15, 0.5, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
        />
      ))}
      {services.map((s) => (
        <g key={s.label}>
          <rect x={s.x - 16} y={s.y - 10} width={32} height={20} rx={5} fill={color} opacity={0.12} stroke={color} strokeWidth="0.8" strokeOpacity="0.4" />
          <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="8" fill={color} fontFamily="monospace" fontWeight="700">{s.label}</text>
        </g>
      ))}
    </svg>
  );
}

// BODMAS interactive visualization
function BODMASViz({ color }: { color: string }) {
  const [result, setResult] = useState<string | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);

  function check(val: number) {
    // 12 + 6 × 2 = 12 + 12 = 24 (correct BODMAS)
    setAnswer(val);
    setResult(val === 24 ? '✓ Correct! +10 points' : '✗ Try again — remember BODMAS!');
    setTimeout(() => { setResult(null); setAnswer(null); }, 2500);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 160, gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.5rem', color: '#151515' }}>12 + 6</span>
        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.5rem', color: color }}>×</span>
        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '1.5rem', color: '#151515' }}>2 = ?</span>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        {[36, 24, 48, 14].map((v) => (
          <button
            key={v}
            onClick={() => check(v)}
            data-cursor-label="GUESS"
            style={{
              padding: '6px 18px',
              borderRadius: 8,
              border: `1.5px solid ${answer === v ? color : '#E5E5E5'}`,
              background: answer === v ? color : '#fff',
              color: answer === v ? '#fff' : '#151515',
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'none',
              transition: 'all 0.2s',
            }}
          >
            {v}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {result && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: result.includes('✓') ? '#22C55E' : '#EF4444',
            }}
          >
            {result}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const projectVisuals: Record<string, (color: string) => React.ReactNode> = {
  orbitalshield: (c) => <OrbitalViz color={c} />,
  modulehub: (c) => <PackageFlowViz color={c} />,
  vibescribe: (c) => <WaveformViz color={c} />,
  spaceops: (c) => <AWSViz color={c} />,
  bodmas: (c) => <BODMASViz color={c} />,
};

export default function ProjectGallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  const openProject = projects.find((p) => p.id === openCaseStudy);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: '#F7F8F6',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label"
          style={{ marginBottom: '1rem' }}
        >
          03 / SELECTED WORK
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg"
          >
            Things I&apos;ve designed,<br />built and engineered.
          </motion.h2>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                data-cursor-label="FILTER"
                style={{
                  padding: '6px 14px',
                  borderRadius: 100,
                  border: `1.5px solid ${activeFilter === f ? '#6257E8' : '#E5E5E5'}`,
                  background: activeFilter === f ? '#6257E8' : 'transparent',
                  color: activeFilter === f ? '#fff' : '#666',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  cursor: 'none',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: '#fff',
                  border: '1px solid #E5E5E5',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '1fr 320px',
                }}
                className="project-card"
              >
                {/* Left: info */}
                <div style={{ padding: '2rem 2.5rem' }}>
                  {/* Number + tags */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        color: project.accentColor,
                      }}
                    >
                      {project.number}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '2px 10px',
                          background: project.accentColor + '15',
                          borderRadius: 100,
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 500,
                          fontSize: '0.65rem',
                          letterSpacing: '0.06em',
                          color: project.accentColor,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '1.6rem',
                      letterSpacing: '-0.02em',
                      color: '#151515',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 500,
                      fontSize: '0.82rem',
                      color: '#666',
                      marginBottom: '1rem',
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.9rem',
                      color: '#555',
                      lineHeight: 1.75,
                      marginBottom: '1.25rem',
                      maxWidth: 480,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        style={{
                          padding: '3px 10px',
                          background: '#F7F8F6',
                          border: '1px solid #E5E5E5',
                          borderRadius: 100,
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 500,
                          fontSize: '0.68rem',
                          color: '#555',
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* DNA bars */}
                  <ProjectDNA dna={project.dna} accentColor={project.accentColor} />

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => setOpenCaseStudy(project.id)}
                      data-cursor-label="OPEN"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '9px 18px',
                        background: project.accentColor,
                        color: '#fff',
                        borderRadius: 100,
                        border: 'none',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 500,
                        fontSize: '0.78rem',
                        cursor: 'none',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      <BookOpenIcon />
                      CASE STUDY
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-label="↗"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '9px 18px',
                        background: 'transparent',
                        color: '#151515',
                        borderRadius: 100,
                        border: '1.5px solid #E5E5E5',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 500,
                        fontSize: '0.78rem',
                        textDecoration: 'none',
                        cursor: 'none',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <GithubIcon />
                      GITHUB
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-label="↗"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '9px 18px',
                          background: 'transparent',
                          color: '#151515',
                          borderRadius: 100,
                          border: '1.5px solid #E5E5E5',
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 500,
                          fontSize: '0.78rem',
                          textDecoration: 'none',
                          cursor: 'none',
                        }}
                      >
                        <ExternalLinkIcon />
                        LIVE
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: visual */}
                <div
                  style={{
                    background: project.accentColor + '08',
                    borderLeft: '1px solid #E5E5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                  }}
                  className="hidden md:flex"
                >
                  {projectVisuals[project.id]?.(project.accentColor)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {openProject && (
          <ProjectCaseStudy
            key={openProject.id}
            project={openProject}
            onClose={() => setOpenCaseStudy(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
