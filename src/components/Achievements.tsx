'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { mainAchievement, certificates, education } from '@/data/achievements';

// Trophy SVG with particle feel
function Trophy({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={inView ? { scale: 1, rotate: 0 } : {}}
      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.3 }}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #F59E0B20, #FEF3C7)',
        border: '2px solid #F59E0B30',
        marginBottom: '1.5rem',
      }}
    >
      {/* Pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          border: '1.5px solid #F59E0B',
          pointerEvents: 'none',
        }}
      />
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M10 6h24l-4 18H14L10 6Z" fill="#F59E0B" opacity="0.85" />
        <path d="M14 24h16v4H14z" fill="#F59E0B" opacity="0.7" />
        <path d="M12 28h20v4H12z" fill="#F59E0B" opacity="0.8" />
        <path d="M10 6C8 6 4 8 4 14s4 8 6 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M34 6c2 0 6 2 6 8s-4 8-6 8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="22" cy="14" r="3" fill="#fff" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [flippedCert, setFlippedCert] = useState<string | null>(null);

  return (
    <section
      id="achievements"
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
          06 / PROOF OF WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-lg"
          style={{ marginBottom: '3.5rem', maxWidth: 560 }}
        >
          Recognition & credentials.
        </motion.h2>

        {/* Main achievement — dramatic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
            border: '1px solid #F59E0B30',
            borderRadius: 24,
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #F59E0B15 0%, transparent 70%)',
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Trophy inView={inView} />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                style={{
                  padding: '6px 16px',
                  background: '#F59E0B',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: '#fff',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                🥇 1ST PLACE
              </motion.div>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: '#B45309',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                HACKATHON WINNER · SUMMER HACKS
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 }}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  letterSpacing: '-0.025em',
                  color: '#151515',
                  marginBottom: '1rem',
                }}
              >
                Aura — Women's Healthtech & Reverse-Chronobiology Engine
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.55 }}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.95rem',
                  color: '#555',
                  lineHeight: 1.75,
                  marginBottom: '1.25rem',
                  maxWidth: 540,
                }}
              >
                Awarded 1st Place Winner at SummerHacks 2026 (ITM x Notion) by Team Straw Hats. Built a Reverse-Chronobiology Engine converting daily inputs into actionable women's health guidance with 10s swipe check-ins and cycle-synced nutrition.
              </motion.p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {mainAchievement.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.06 }}
                    style={{
                      padding: '4px 12px',
                      background: '#fff',
                      border: '1px solid #F59E0B40',
                      borderRadius: 100,
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 500,
                      fontSize: '0.72rem',
                      color: '#B45309',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '-0.01em',
              color: '#151515',
              marginBottom: '1.5rem',
            }}
          >
            CERTIFICATIONS
          </h3>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              paddingBottom: '0.5rem',
            }}
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
                onHoverStart={() => setFlippedCert(cert.id)}
                onHoverEnd={() => setFlippedCert(null)}
                data-cursor-label="VIEW"
                style={{
                  flexShrink: 0,
                  width: 200,
                  height: 130,
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${cert.color}15 0%, ${cert.color}08 100%)`,
                  border: `1px solid ${cert.color}30`,
                  padding: '1.25rem',
                  cursor: 'none',
                  transform: flippedCert === cert.id ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: flippedCert === cert.id ? `0 12px 32px ${cert.color}25` : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Color accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: cert.color,
                    borderRadius: '14px 14px 0 0',
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    color: '#151515',
                    lineHeight: 1.4,
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem',
                  }}
                >
                  {cert.title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.68rem',
                    color: '#666',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {cert.issuer}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 500,
                    fontSize: '0.65rem',
                    color: cert.color,
                  }}
                >
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '-0.01em',
              color: '#151515',
              marginBottom: '1.5rem',
            }}
          >
            EDUCATION
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1.25rem',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: '#F7F8F6',
                  border: '1px solid #E5E5E5',
                  borderRadius: 14,
                }}
                className="flex flex-col sm:grid"
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: '#6257E8',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: '#151515',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.82rem',
                      color: '#666',
                    }}
                  >
                    {edu.institution}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    color: '#6257E8',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
