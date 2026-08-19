'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/achievements';
import { skillCategories } from '@/data/skills';
import { projects } from '@/data/projects';

export default function ResumeViewer() {
  const resumeUrl = '[REPLACE WITH RESUME URL]';

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '3rem 1.5rem 6rem',
      }}
    >
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '2.5rem' }}
      >
        <p className="section-label" style={{ marginBottom: '0.5rem' }}>
          05 / CURRICULUM VITAE
        </p>
        <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>
          Resume & Experience
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1rem',
            color: '#666666',
            maxWidth: 600,
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          Comprehensive overview of education, technical stack, engineering projects, and credentials.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            data-cursor-label="↗"
          >
            VIEW RESUME ↗
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            data-cursor-label="PDF"
          >
            DOWNLOAD PDF ↓
          </a>
        </div>
      </motion.div>

      {/* Structured Clean Resume Preview Document */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{
          background: '#FFFFFF',
          border: '1px solid #E5E5E5',
          borderRadius: 20,
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.04)',
        }}
      >
        {/* Header section in preview */}
        <div
          style={{
            borderBottom: '1px solid #E5E5E5',
            paddingBottom: '2rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: '1.8rem',
                color: '#151515',
                letterSpacing: '-0.02em',
                marginBottom: '0.25rem',
              }}
            >
              Sakshi Shingole
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#6257E8',
                marginBottom: '0.5rem',
              }}
            >
              Aspiring Software Engineer · Full Stack Developer · UI/UX Designer
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.82rem',
                color: '#666666',
              }}
            >
              Kalyan, Maharashtra, India · shingolesakshi@gmail.com · +91-8369238055
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
            }}
          >
            <a
              href="https://github.com/sakshi1013-coder"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '6px 14px',
                background: '#F7F8F6',
                border: '1px solid #E5E5E5',
                borderRadius: 100,
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.75rem',
                color: '#151515',
                textDecoration: 'none',
              }}
            >
              GitHub ↗
            </a>
            <a
              href="https://sakshisuniverse.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '6px 14px',
                background: '#F7F8F6',
                border: '1px solid #E5E5E5',
                borderRadius: 100,
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.75rem',
                color: '#151515',
                textDecoration: 'none',
              }}
            >
              Portfolio ↗
            </a>
          </div>
        </div>

        {/* 1. Education */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              color: '#6257E8',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            01. Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {education.map((edu) => (
              <div
                key={edu.degree}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  paddingLeft: '1rem',
                  borderLeft: '2px solid #E9E7FF',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      color: '#151515',
                    }}
                  >
                    {edu.degree}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#666666' }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', color: '#777777', marginTop: '0.2rem' }}>
                    {edu.description}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    color: '#6257E8',
                  }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Technical Stack */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              color: '#6257E8',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            02. Technical Skills
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                style={{
                  background: '#F7F8F6',
                  padding: '1rem',
                  borderRadius: 12,
                  border: '1px solid #E5E5E5',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: '#151515',
                    marginBottom: '0.4rem',
                  }}
                >
                  {cat.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.78rem',
                    color: '#555555',
                    lineHeight: 1.5,
                  }}
                >
                  {cat.skills.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Featured Projects */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              color: '#6257E8',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            03. Key Projects
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {projects.slice(0, 4).map((p) => (
              <div
                key={p.id}
                style={{
                  padding: '1.25rem',
                  borderRadius: 12,
                  border: '1px solid #E5E5E5',
                  background: '#FAFAFA',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#151515',
                    }}
                  >
                    {p.title} <span style={{ fontWeight: 400, color: '#666666', fontSize: '0.82rem' }}>— {p.subtitle}</span>
                  </h4>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.82rem',
                    color: '#555555',
                    lineHeight: 1.6,
                    marginBottom: '0.5rem',
                  }}
                >
                  {p.description}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.75rem',
                    color: '#6257E8',
                    fontWeight: 500,
                  }}
                >
                  Tech: {p.stack.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Hackathon Honors */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              color: '#6257E8',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            04. Honors & Awards
          </h3>
          <div
            style={{
              padding: '1.25rem',
              borderRadius: 12,
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: '#B45309',
                marginBottom: '0.25rem',
              }}
            >
              🥇 1st Place Winner — Summer Hacks Hackathon
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.82rem',
                color: '#78350F',
                lineHeight: 1.5,
              }}
            >
              Built Aura: Multimodal AI Assistant delivering real-time video understanding with interactive speech support. (Role: Frontend, UI/UX, AI Integration).
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
