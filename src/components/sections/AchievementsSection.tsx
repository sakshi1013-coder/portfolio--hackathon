'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { mainAchievement, education } from '@/data/achievements';

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

const GraduationCapIcon = ({ c = '#7C3AED', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

const ZapIcon = ({ c = '#F59E0B', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const additionalMilestones = [
  {
    title: 'Top Tier Project Selection — OrbitalShield',
    category: 'Cloud & Infrastructure Architecture',
    year: '2024',
    description: 'Recognized for building a scalable space traffic monitoring architecture with Kubernetes, Prometheus, and automated Grafana telemetry pipelines.',
    tags: ['DevOps', 'Kubernetes', 'Monitoring'],
    color: '#EC4899',
    Icon: TrophyIcon,
  },
  {
    title: 'Academic Excellence in Computer Science',
    category: 'Undergraduate Program · ITM Skills University',
    year: '2024 – Present',
    description: 'Maintaining a strong academic standing across Data Structures, Algorithms, Cloud Computing, and Software Engineering principles.',
    tags: ['Algorithms', 'Cloud', 'System Design'],
    color: '#7C3AED',
    Icon: GraduationCapIcon,
  },
  {
    title: 'Real-Time Systems Innovation — SyncWave',
    category: 'Collaborative Web Platforms',
    year: '2024',
    description: 'Architected high-concurrency websocket rooms with sub-50ms message propagation and Redis state caching.',
    tags: ['Socket.IO', 'Redis', 'Full Stack'],
    color: '#F59E0B',
    Icon: ZapIcon,
  },
];

export default function AchievementsSection() {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(236, 72, 153, 0.12)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EC4899' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#DB2777', textTransform: 'uppercase' }}>
            05 / PROOF OF WORK & AWARDS
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
          Awards, hackathons &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            key milestones.
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
          Competitive hackathon victories, engineering recognitions, and educational background.
        </p>
      </motion.div>

      {/* Main Dramatic 1st Place Hackathon Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: 'linear-gradient(145deg, #FFFBEB 0%, #FEF3C7 60%, #FFF7ED 100%)',
          border: '1.5px solid rgba(245, 158, 11, 0.35)',
          borderRadius: 26,
          padding: 'clamp(2rem, 4.5vw, 3.25rem)',
          marginBottom: '3.5rem',
          boxShadow: '0 20px 48px rgba(245, 158, 11, 0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="flex flex-col sm:grid"
        >
          {/* Trophy Icon & Rank */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), #FEF3C7)',
                border: '2px solid rgba(245, 158, 11, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)',
              }}
            >
              <TrophyIcon c="#D97706" s={46} />
            </div>
            <div
              style={{
                padding: '6px 18px',
                background: '#F59E0B',
                borderRadius: 100,
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 800,
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                color: '#FFFFFF',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
              }}
            >
              1ST PLACE WINNER
            </div>
          </div>

          {/* Details */}
          <div>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.12em', color: '#B45309', textTransform: 'uppercase', marginBottom: 6 }}>
              {mainAchievement.event} · {mainAchievement.title}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#0F172A',
                marginBottom: '0.8rem',
                lineHeight: 1.15,
              }}
            >
              Aura — AI-Powered Real-Time Assistance Platform
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.98rem',
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
                maxWidth: 620,
              }}
            >
              {mainAchievement.description} Collaborated in a cross-functional engineering team to build low-latency audio waveforms, responsive live camera streaming, and real-time multimodal intelligence.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {mainAchievement.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '5px 14px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    borderRadius: 100,
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '0.74rem',
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

      {/* Additional Milestones Grid */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '1.4rem',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          Notable Recognitions & Projects
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {additionalMilestones.map((m, idx) => {
            const Icon = m.Icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: `1px solid ${m.color}30`,
                  borderRadius: 20,
                  padding: '1.75rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: `${m.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon c={m.color} s={20} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8' }}>
                      {m.year}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: m.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                    {m.category}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      letterSpacing: '-0.01em',
                      marginBottom: 8,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.86rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {m.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: '#475569',
                        background: '#F1F5F9',
                        padding: '3px 8px',
                        borderRadius: 6,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Education Background */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '1.4rem',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          Academic Foundation
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {education.map((edu) => (
            <div
              key={edu.institution}
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                border: '1px solid #E2E8F0',
                borderRadius: 18,
                padding: '1.5rem',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#7C3AED' }}>
                  {edu.period}
                </span>
                <GraduationCapIcon c="#7C3AED" s={20} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: 2 }}>
                {edu.degree}
              </h3>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', fontWeight: 600, color: '#64748B', marginBottom: 8 }}>
                {edu.institution}
              </div>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
