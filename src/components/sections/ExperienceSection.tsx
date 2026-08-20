'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { experiences, ExperienceItem } from '@/data/experience';

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth spring physics for liquid scroll movement
  const springProgress = useSpring(0, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  // Dynamic percentage for glowing pulse head position along the line
  const pulseTop = useTransform(springProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    // Parent scrollable element inside SectionContainer
    const parentEl = sectionRef.current?.parentElement;
    if (!parentEl) return;

    const handleScroll = () => {
      const scrollTop = parentEl.scrollTop;
      const scrollHeight = parentEl.scrollHeight - parentEl.clientHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setScrollProgress(progress);
        springProgress.set(progress);
      }
    };

    parentEl.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation on mount

    return () => parentEl.removeEventListener('scroll', handleScroll);
  }, [springProgress]);

  return (
    <div
      ref={sectionRef}
      style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}
    >
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#D97706', textTransform: 'uppercase' }}>
            04 / WORK & LEADERSHIP
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
          Industry experience, mentorship &{' '}
          <span style={{ color: '#F59E0B' }}>
            leadership engagements.
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
          A timeline of software development internships, Google Student Ambassador leadership, hackathon mentorship, and university event management.
        </p>
      </motion.div>

      {/* Interactive Scroll-Animated Timeline Container */}
      <div style={{ position: 'relative', marginTop: '3.5rem' }}>
        
        {/* ── 1. Muted Background Timeline Track Line ── */}
        <div
          style={{
            position: 'absolute',
            left: 20,
            top: 24,
            bottom: 24,
            width: 3,
            background: 'rgba(226, 232, 240, 0.8)',
            borderRadius: 4,
          }}
        />

        {/* ── 2. Scroll-Driven Glowing Amber Line Fill (Spring Animated) ── */}
        <motion.div
          style={{
            position: 'absolute',
            left: 20,
            top: 24,
            bottom: 24,
            width: 3,
            background: 'linear-gradient(180deg, #F59E0B 0%, #EA580C 50%, #D97706 100%)',
            scaleY: springProgress,
            transformOrigin: 'top center',
            borderRadius: 4,
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.7)',
            zIndex: 1,
          }}
        />

        {/* ── 3. Traveling Glowing Pulse Head along the line ── */}
        <motion.div
          style={{
            position: 'absolute',
            left: 21.5,
            top: 24,
            y: pulseTop,
            transform: 'translate(-50%, -50%)',
            width: 13,
            height: 13,
            borderRadius: '50%',
            background: '#F59E0B',
            boxShadow: '0 0 18px #F59E0B, 0 0 32px #EA580C',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {/* ── Experience Timeline Cards Stack ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp: ExperienceItem, idx: number) => (
            <TimelineCard key={exp.id} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

{/* Individual Experience Card with Scroll Reveal & Node Dot Activation */}
function TimelineCard({ exp, idx }: { exp: ExperienceItem; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        paddingLeft: '56px',
      }}
    >
      {/* ── Interactive Node Ring & Pulsing Core ── */}
      <div
        style={{
          position: 'absolute',
          left: 11,
          top: 20,
          width: 21,
          height: 21,
          borderRadius: '50%',
          background: '#FFFFFF',
          border: '2.5px solid #F59E0B',
          boxShadow: '0 0 0 4px rgba(245, 158, 11, 0.2), 0 4px 12px rgba(245, 158, 11, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#D97706',
          }}
        />
      </div>

      {/* ── Experience Card Body ── */}
      <motion.div
        whileHover={{ y: -4, scale: 1.008 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        style={{
          background: 'rgba(255, 255, 255, 0.94)',
          border: '1.5px solid rgba(245, 158, 11, 0.25)',
          borderRadius: 24,
          padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
          boxShadow: '0 10px 32px rgba(0, 0, 0, 0.04)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Top Row: Role, Type Badge, Organization, Period */}
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
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  color: '#F59E0B',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  padding: '3px 10px',
                  borderRadius: 8,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {exp.type}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.94rem',
                fontWeight: 700,
                color: '#D97706',
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
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
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
              background: 'rgba(245, 158, 11, 0.08)',
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
            Skills & Tools:
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
      </motion.div>
    </motion.div>
  );
}
