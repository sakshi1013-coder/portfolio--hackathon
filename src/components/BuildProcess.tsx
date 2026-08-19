'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stages = [
  {
    id: 'understand',
    label: 'UNDERSTAND',
    question: 'What problem are we solving?',
    description: 'I start by deeply understanding the user, the context and the constraints. What pain point is real? Who experiences it? What does success actually look like?',
    color: '#6257E8',
    icon: '◉',
  },
  {
    id: 'design',
    label: 'DESIGN',
    question: 'How should people experience it?',
    description: 'Before writing code, I map out the user experience. Wireframes, flows and prototypes let me validate ideas fast and iterate without engineering cost.',
    color: '#EC4899',
    icon: '◈',
  },
  {
    id: 'build',
    label: 'BUILD',
    question: 'How do we make it work?',
    description: 'I write clean, modular code. Frontend components. APIs. Database schemas. Real-time features. Each piece engineered to work reliably and connect clearly.',
    color: '#22C55E',
    icon: '◧',
  },
  {
    id: 'scale',
    label: 'SCALE',
    question: 'How do we make it reliable?',
    description: 'Containerising with Docker. Orchestrating with Kubernetes. CI/CD pipelines. Monitoring with Prometheus and Grafana. Infrastructure that handles growth.',
    color: '#F59E0B',
    icon: '◫',
  },
  {
    id: 'refine',
    label: 'REFINE',
    question: 'How can we make it better?',
    description: 'Ship, observe, iterate. Real users surface real problems. Performance, accessibility, new features — improvement is a continuous process, not a phase.',
    color: '#14B8A6',
    icon: '◎',
  },
];

export default function BuildProcess() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="process"
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
          04 / MY BUILD PROCESS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-lg"
          style={{ marginBottom: '3.5rem', maxWidth: 560 }}
        >
          How I think through every product.
        </motion.h2>

        {/* Stage selector tabs */}
        <div
          style={{
            display: 'flex',
            gap: '0',
            borderBottom: '1px solid #E5E5E5',
            marginBottom: '3rem',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {stages.map((stage, i) => (
            <motion.button
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              onClick={() => setActiveStage(i)}
              data-cursor-label="VIEW"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 1.5rem',
                background: 'transparent',
                border: 'none',
                borderBottom: `2px solid ${activeStage === i ? stage.color : 'transparent'}`,
                cursor: 'none',
                whiteSpace: 'nowrap',
                transition: 'border-color 0.2s',
                transform: 'translateY(1px)',
              }}
            >
              <span style={{ fontSize: '1rem', color: stage.color }}>{stage.icon}</span>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: activeStage === i ? 700 : 500,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  color: activeStage === i ? stage.color : '#666',
                  transition: 'color 0.2s, font-weight 0.2s',
                }}
              >
                {stage.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active stage content */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '2.5rem',
                  color: stages[activeStage].color,
                  lineHeight: 1,
                }}
              >
                {stages[activeStage].icon}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 500,
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: stages[activeStage].color,
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  STAGE {activeStage + 1} / 5
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 700,
                    fontSize: '1.8rem',
                    letterSpacing: '-0.02em',
                    color: '#151515',
                  }}
                >
                  {stages[activeStage].label}
                </h3>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '1rem',
                color: stages[activeStage].color,
                fontStyle: 'italic',
                marginBottom: '1rem',
              }}
            >
              "{stages[activeStage].question}"
            </p>

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                color: '#555',
                lineHeight: 1.8,
              }}
            >
              {stages[activeStage].description}
            </p>
          </div>

          {/* Visual pipeline */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {stages.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.875rem 1.25rem',
                    borderRadius: 12,
                    background: i === activeStage ? s.color + '10' : 'transparent',
                    border: `1px solid ${i === activeStage ? s.color + '30' : '#E5E5E5'}`,
                    cursor: 'none',
                    transition: 'all 0.3s',
                  }}
                  onClick={() => setActiveStage(i)}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i === activeStage ? s.color : '#CCC',
                      flexShrink: 0,
                      transition: 'background 0.3s',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: i === activeStage ? 600 : 400,
                      fontSize: '0.82rem',
                      color: i === activeStage ? s.color : '#666',
                      flex: 1,
                      transition: 'color 0.3s',
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.72rem',
                      color: '#999',
                      textAlign: 'right',
                      maxWidth: 180,
                    }}
                  >
                    {s.question}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
