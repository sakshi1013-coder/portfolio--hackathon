'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const equation = [
  { label: 'CODE', color: '#6257E8', desc: 'Writing clean, scalable software systems.' },
  { label: '+', color: '#999', desc: '' },
  { label: 'DESIGN', color: '#EC4899', desc: 'Crafting intuitive, beautiful interfaces.' },
  { label: '+', color: '#999', desc: '' },
  { label: 'CURIOSITY', color: '#F59E0B', desc: 'Constantly exploring new technologies.' },
  { label: '=', color: '#999', desc: '' },
  { label: 'SAKSHI', color: '#151515', desc: '' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-label"
        style={{ marginBottom: '1rem' }}
      >
        01 / WHO I AM
      </motion.p>

      {/* Main statement */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="heading-lg"
        style={{ maxWidth: 760, marginBottom: '3rem' }}
      >
        I like being somewhere between{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #6257E8, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          design and engineering.
        </span>
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#444',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}
          >
            I&apos;m Sakshi Shingole, a Computer Science / B.Tech student at ITM Skills University.
            I&apos;m building a foundation across the full product stack — from writing UI components
            and designing interfaces in Figma, to deploying containerised applications on Kubernetes and AWS.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#444',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
            }}
          >
            I&apos;ve built real-time platforms with MERN and Socket.IO, managed cloud infrastructure
            with AWS, designed pipelines with Jenkins and Docker, and explored AI-assisted development
            with tools like Cursor and Lovable. I think in systems — whether I&apos;m designing a user flow
            or architecting a deployment pipeline.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#444',
              lineHeight: 1.85,
            }}
          >
            I&apos;m motivated by the intersection of usability and reliability — products that feel
            effortless to use but are engineered to last.
          </p>

          {/* Quick facts */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '2rem',
            }}
          >
            {['B.Tech CS', 'ITM Skills University', '2024–2028', 'Kalyan, India'].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '5px 14px',
                  background: '#F7F8F6',
                  border: '1px solid #E5E5E5',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '0.78rem',
                  color: '#555',
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Equation visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            background: '#fff',
            border: '1px solid #E5E5E5',
            borderRadius: 20,
            padding: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: '#999',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            THE IDENTITY EQUATION
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginBottom: '2rem' }}>
            {equation.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: item.label === '=' || item.label === '+' ? 400 : 700,
                  fontSize: item.label === '=' || item.label === '+' ? '1.5rem' : '1.1rem',
                  color: item.color,
                  letterSpacing: '-0.02em',
                }}
              >
                {item.label}
              </motion.span>
            ))}
          </div>

          {/* Item descriptions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {equation
              .filter((e) => e.desc)
              .map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.12 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: item.color,
                      flexShrink: 0,
                      marginTop: '0.35rem',
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 600,
                        fontSize: '0.78rem',
                        color: item.color,
                        letterSpacing: '0.05em',
                        marginRight: '0.4rem',
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.82rem',
                        color: '#666',
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* SVG connecting lines decoration */}
          <svg
            width="100%"
            height="40"
            viewBox="0 0 300 40"
            style={{ marginTop: '1.5rem', opacity: 0.15 }}
          >
            <line x1="0" y1="20" x2="300" y2="20" stroke="#6257E8" strokeWidth="1" strokeDasharray="4 6" />
            {[0, 75, 150, 225, 300].map((x) => (
              <circle key={x} cx={x} cy={20} r={3} fill="#6257E8" />
            ))}
          </svg>

          {/* Illustrated SVG avatar */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              {/* Background circle */}
              <circle cx="45" cy="45" r="45" fill="#E9E7FF" />
              {/* Face */}
              <ellipse cx="45" cy="38" rx="18" ry="20" fill="#F5D0A9" />
              {/* Hair */}
              <path d="M27 32 Q30 14 45 12 Q60 14 63 32 Q58 24 45 24 Q32 24 27 32Z" fill="#2D1B00" />
              {/* Eyes */}
              <circle cx="39" cy="36" r="2.5" fill="#2D1B00" />
              <circle cx="51" cy="36" r="2.5" fill="#2D1B00" />
              {/* Smile */}
              <path d="M39 43 Q45 48 51 43" stroke="#A07040" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Body / top */}
              <path d="M28 68 Q30 56 45 54 Q60 56 62 68 Q55 72 45 73 Q35 72 28 68Z" fill="#6257E8" />
              {/* Code brackets decoration */}
              <text x="17" y="78" fontSize="9" fill="#6257E8" opacity="0.5" fontFamily="monospace">{'</>'}</text>
              <text x="64" y="78" fontSize="9" fill="#EC4899" opacity="0.5" fontFamily="monospace">✦</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
