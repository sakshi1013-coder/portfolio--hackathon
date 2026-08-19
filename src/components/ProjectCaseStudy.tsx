'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GithubIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>);
const ExternalLinkIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>);
import { Project } from '@/data/projects';
import ProjectDNA from './ProjectDNA';

interface Props {
  project: Project;
  onClose: () => void;
}

const caseStudySections = [
  { key: 'problem' as const, label: '01 / PROBLEM' },
  { key: 'approach' as const, label: '02 / APPROACH' },
  { key: 'design' as const, label: '03 / DESIGN' },
  { key: 'technology' as const, label: '04 / TECHNOLOGY' },
  { key: 'result' as const, label: '05 / RESULT' },
  { key: 'learnings' as const, label: '06 / LEARNINGS' },
];

export default function ProjectCaseStudy({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9000,
          background: 'rgba(21,21,21,0.5)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          style={{
            background: '#F7F8F6',
            width: '100%',
            maxWidth: 900,
            maxHeight: '92vh',
            borderRadius: '24px 24px 0 0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid #E5E5E5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
              flexShrink: 0,
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  color: project.accentColor,
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                CASE STUDY · {project.number}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  color: '#151515',
                  letterSpacing: '-0.02em',
                }}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              data-cursor-label="CLOSE"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#F7F8F6',
                border: '1px solid #E5E5E5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'none',
              }}
            >
              <X size={16} color="#666" />
            </button>
          </div>

          {/* Content */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '2rem',
            }}
          >
            {/* Subtitle + stack */}
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                color: '#555',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}
            >
              {project.description}
            </p>

            {/* Stack tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2.5rem' }}>
              {project.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: '4px 12px',
                    background: project.accentColor + '15',
                    border: `1px solid ${project.accentColor}30`,
                    borderRadius: 100,
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 500,
                    fontSize: '0.72rem',
                    color: project.accentColor,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Case study sections */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              {caseStudySections.map((section, i) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  style={{
                    background: '#fff',
                    border: '1px solid #E5E5E5',
                    borderRadius: 14,
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 600,
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      color: project.accentColor,
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {section.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.88rem',
                      color: '#444',
                      lineHeight: 1.75,
                    }}
                  >
                    {project.caseStudy[section.key]}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* DNA */}
            <div
              style={{
                background: '#fff',
                border: '1px solid #E5E5E5',
                borderRadius: 14,
                padding: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <ProjectDNA dna={project.dna} accentColor={project.accentColor} />
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="↗"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 20px',
                  background: '#151515',
                  color: '#fff',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  cursor: 'none',
                }}
              >
                <GithubIcon />
                VIEW CODE
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
                    gap: 8,
                    padding: '10px 20px',
                    background: project.accentColor,
                    color: '#fff',
                    borderRadius: 100,
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 500,
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    cursor: 'none',
                  }}
                >
                  <ExternalLinkIcon />
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
