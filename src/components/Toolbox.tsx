'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function Toolbox() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      id="toolbox"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: '#F7F8F6',
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
          05 / TOOLBOX
        </motion.p>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-lg"
            style={{ maxWidth: 480 }}
          >
            Technologies I work with.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.9rem',
              color: '#666',
              maxWidth: 320,
              lineHeight: 1.7,
            }}
          >
            Click any category to explore the technologies. Built across frontend, backend, cloud, DevOps, AI and more.
          </motion.p>
        </div>

        {/* Category grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
            >
              <motion.button
                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                data-cursor-label="EXPAND"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '100%',
                  background: activeCategory === cat.id ? cat.color : '#fff',
                  border: `1px solid ${activeCategory === cat.id ? cat.color : '#E5E5E5'}`,
                  borderRadius: 14,
                  padding: '1.25rem',
                  cursor: 'none',
                  textAlign: 'left',
                  transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
                  boxShadow: activeCategory === cat.id ? `0 8px 24px ${cat.color}30` : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: activeCategory === cat.id ? '#fff' : '#151515',
                      transition: 'color 0.25s',
                    }}
                  >
                    {cat.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 500,
                      fontSize: '0.65rem',
                      color: activeCategory === cat.id ? 'rgba(255,255,255,0.7)' : '#999',
                      transition: 'color 0.25s',
                    }}
                  >
                    {cat.skills.length} tools
                  </span>
                </div>

                <div
                  style={{
                    width: 28,
                    height: 3,
                    borderRadius: 2,
                    background: activeCategory === cat.id ? 'rgba(255,255,255,0.5)' : cat.color,
                    transition: 'background 0.25s',
                    marginBottom: '0.75rem',
                  }}
                />

                {/* Collapsed: show first 2 skills */}
                {activeCategory !== cat.id && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {cat.skills.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        style={{
                          padding: '2px 8px',
                          background: cat.color + '12',
                          borderRadius: 100,
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 500,
                          fontSize: '0.65rem',
                          color: cat.color,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                    {cat.skills.length > 2 && (
                      <span
                        style={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontSize: '0.65rem',
                          color: '#999',
                          padding: '2px 4px',
                        }}
                      >
                        +{cat.skills.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Expanded: show all skills */}
                <AnimatePresence>
                  {activeCategory === cat.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.25rem' }}>
                        {cat.skills.map((skill, si) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: si * 0.05 }}
                            style={{
                              padding: '3px 10px',
                              background: 'rgba(255,255,255,0.25)',
                              border: '1px solid rgba(255,255,255,0.3)',
                              borderRadius: 100,
                              fontFamily: 'var(--font-space-grotesk)',
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              color: '#fff',
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Central SAKSHI node decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #E5E5E5)' }} />
          <div
            style={{
              padding: '8px 20px',
              background: '#151515',
              borderRadius: 100,
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              color: '#fff',
            }}
          >
            SAKSHI
          </div>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #E5E5E5)' }} />
        </motion.div>
      </div>
    </section>
  );
}
