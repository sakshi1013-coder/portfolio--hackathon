'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredCategories =
    selectedCat === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCat);

  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#10B98115', border: '1px solid #10B98130', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#10B981', textTransform: 'uppercase' }}>
            02 / TECHNICAL ARSENAL
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
          Technologies, frameworks &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #0284C7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            engineering tools.
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
          A comprehensive toolkit spanning frontend craftsmanship, backend services, cloud architecture, and modern DevOps pipelines.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: '2.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        <button
          onClick={() => setSelectedCat('all')}
          style={{
            padding: '8px 16px',
            borderRadius: 100,
            border: `1px solid ${selectedCat === 'all' ? '#10B981' : 'rgba(0,0,0,0.08)'}`,
            background: selectedCat === 'all' ? '#10B981' : '#FFFFFF',
            color: selectedCat === 'all' ? '#FFFFFF' : '#475569',
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: selectedCat === 'all' ? '0 4px 12px rgba(16,185,129,0.25)' : 'none',
          }}
        >
          ALL CATEGORIES ({skillCategories.length})
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            style={{
              padding: '8px 16px',
              borderRadius: 100,
              border: `1px solid ${selectedCat === cat.id ? cat.color : 'rgba(0,0,0,0.08)'}`,
              background: selectedCat === cat.id ? `${cat.color}15` : '#FFFFFF',
              color: selectedCat === cat.id ? cat.color : '#64748B',
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat.label.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* Grid of Skill Category Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 * idx }}
            style={{
              background: '#FFFFFF',
              border: `1px solid ${cat.color}30`,
              borderRadius: 20,
              padding: '1.75rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Accent Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${cat.color}, transparent)`,
              }}
            />

            {/* Header: Title + Dot */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: `${cat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: cat.color,
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-space-grotesk)',
                  }}
                >
                  0{idx + 1}
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  {cat.label}
                </h2>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: cat.color,
                  background: `${cat.color}15`,
                  padding: '3px 8px',
                  borderRadius: 6,
                }}
              >
                {cat.skills.length} skills
              </span>
            </div>

            {/* Skill Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '6px 12px',
                    borderRadius: 10,
                    background: 'rgba(248, 250, 252, 0.9)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#334155',
                    letterSpacing: '0.01em',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: cat.color }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
