'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#F59E0B15', border: '1px solid #F59E0B30', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#F59E0B', textTransform: 'uppercase' }}>
            03 / CAREER & PROJECTS
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
          Engineering experience &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            hands-on leadership.
          </span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1rem',
            color: '#64748B',
            marginTop: '0.75rem',
            maxWidth: 680,
            lineHeight: 1.6,
          }}
        >
          A structured timeline of competitive hackathons, project architecture, and software engineering engagements.
        </p>
      </motion.div>

      {/* Timeline Layout */}
      <div style={{ position: 'relative', marginTop: '3rem' }}>
        {/* Continuous vertical timeline line */}
        <div
          style={{
            position: 'absolute',
            left: 20,
            top: 24,
            bottom: 24,
            width: 2,
            background: 'linear-gradient(180deg, #F59E0B, #E2E8F0)',
            opacity: 0.6,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '56px',
              }}
            >
              {/* Timeline Node Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: 12,
                  top: 22,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: exp.isPlaceholder ? '#94A3B8' : '#F59E0B',
                  border: '4px solid #FFFFFF',
                  boxShadow: `0 0 0 2px ${exp.isPlaceholder ? '#94A3B8' : '#F59E0B'}`,
                  zIndex: 2,
                }}
              />

              {/* Experience Card */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: exp.isPlaceholder
                    ? '1.5px dashed rgba(148, 163, 184, 0.5)'
                    : '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: 22,
                  padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                  boxShadow: exp.isPlaceholder ? 'none' : '0 10px 30px rgba(245, 158, 11, 0.04)',
                }}
              >
                {/* Top Row: Role, Organization, Period */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <h2
                        style={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                          fontWeight: 800,
                          color: '#0F172A',
                          letterSpacing: '-0.02em',
                          margin: 0,
                        }}
                      >
                        {exp.role}
                      </h2>
                      {exp.isPlaceholder && (
                        <span
                          style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            color: '#64748B',
                            background: '#F1F5F9',
                            padding: '2px 8px',
                            borderRadius: 6,
                            letterSpacing: '0.04em',
                          }}
                        >
                          PLACEHOLDER
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: exp.isPlaceholder ? '#64748B' : '#D97706',
                        marginTop: 4,
                      }}
                    >
                      {exp.organization} · <span style={{ color: '#64748B', fontWeight: 500 }}>{exp.location}</span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        color: '#0F172A',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        padding: '6px 14px',
                        borderRadius: 100,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.94rem',
                    color: '#475569',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}
                >
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Key Responsibilities & Deliverables
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.88rem',
                          color: '#334155',
                          lineHeight: 1.6,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 10,
                        }}
                      >
                        <span style={{ color: '#F59E0B', fontWeight: 900, marginTop: -1 }}>▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Outcome */}
                {exp.outcomes && (
                  <div
                    style={{
                      background: 'rgba(245, 158, 11, 0.06)',
                      borderLeft: '3px solid #F59E0B',
                      padding: '10px 14px',
                      borderRadius: '0 10px 10px 0',
                      marginBottom: '1.25rem',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.86rem',
                      color: '#92400E',
                      fontWeight: 500,
                    }}
                  >
                    <strong>Outcome:</strong> {exp.outcomes}
                  </div>
                )}

                {/* Technologies Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', marginRight: 4 }}>
                    Stack:
                  </span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: '#475569',
                        background: '#F1F5F9',
                        padding: '4px 10px',
                        borderRadius: 6,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
