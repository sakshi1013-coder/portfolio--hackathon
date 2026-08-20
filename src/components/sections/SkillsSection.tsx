'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { skillCategories, SkillCategory, SkillItem } from '@/data/skills';
import SkillIcon from '../SkillIcon';

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [containerEl, setContainerEl] = useState<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile viewport
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Parent scrollable container inside SectionContainer modal
    if (sectionRef.current?.parentElement) {
      setContainerEl(sectionRef.current.parentElement);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Framer Motion scroll progress inside the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerEl ? { current: containerEl } : undefined,
    offset: ['start start', 'end end'],
  });

  // Physical spring physics for smooth parallax scroll velocity easing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  const totalCards = skillCategories.length;

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: isMobile ? 'auto' : `${totalCards * 85}vh`, // Proportional 85vh per card allocation
        width: '100%',
        margin: '0 auto',
        padding: isMobile ? '1.5rem 1rem 3rem' : '0 1.5rem 4rem',
      }}
    >
      {/* ── DESKTOP: Sticky Container Pinning Header + Deck Together ── */}
      {!isMobile ? (
        <div
          style={{
            position: 'sticky',
            top: '70px', // Pinned directly below main top nav bar throughout entire scroll
            height: 'calc(100vh - 90px)',
            width: '100%',
            maxWidth: 1160,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflow: 'hidden',
          }}
        >
          {/* ── 1. PINNED SECTION HEADER (Stays 100% visible throughout entire scroll) ── */}
          <div style={{ textAlign: 'center', marginBottom: '1.2rem', paddingTop: '0.5rem', flexShrink: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '3px 12px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 100, marginBottom: '0.4rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: '#059669', textTransform: 'uppercase' }}>
                02 / TECHNICAL ARSENAL
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0F172A',
                margin: '0 auto',
                maxWidth: 850,
              }}
            >
              Technologies, frameworks &{' '}
              <span style={{ color: '#10B981' }}>
                engineering tools.
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.9rem',
                color: '#64748B',
                margin: '0.35rem auto 0',
                maxWidth: 720,
                lineHeight: 1.45,
              }}
            >
              A comprehensive technical stack spanning full-stack web engineering, cloud infrastructure, container orchestration, system design, and AI automation.
            </p>
          </div>

          {/* ── 2. STACKED CARDS DECK AREA (Identical dimensions, 100% Opaque Solid White) ── */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              height: '465px',
              flexShrink: 0,
            }}
          >
            {skillCategories.map((cat: SkillCategory, idx: number) => (
              <StackedCategoryCard
                key={cat.id}
                cat={cat}
                idx={idx}
                total={totalCards}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      ) : (
        /* ── MOBILE FALLBACK: Clean Unpinned Vertical Cards ── */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
          {/* Mobile Header */}
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '3px 12px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 100, marginBottom: '0.4rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', color: '#059669', textTransform: 'uppercase' }}>
                02 / TECHNICAL ARSENAL
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.8rem', fontWeight: 800, color: '#0F172A' }}>
              Technologies & <span style={{ color: '#10B981' }}>tools.</span>
            </h1>
          </div>

          {skillCategories.map((cat: SkillCategory, idx: number) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: 0.05 * (idx % 3) }}
              style={{
                background: '#FFFFFF', // 100% Solid Opaque White
                border: `1.5px solid ${cat.color}35`,
                borderRadius: 22,
                padding: '1.5rem',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent Line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: cat.color }} />

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 26, height: 26, borderRadius: 8, background: `${cat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color, fontWeight: 800, fontSize: '0.75rem', fontFamily: 'var(--font-space-grotesk)' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                      {cat.label}
                    </h2>
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.84rem', color: '#64748B', margin: 0, lineHeight: 1.4 }}>
                    {cat.description}
                  </p>
                </div>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.66rem', fontWeight: 800, color: cat.color, background: `${cat.color}15`, padding: '3px 8px', borderRadius: 6 }}>
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Vertical Stack of Technologies */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem' }}>
                {cat.skills.map((skill: SkillItem, sIdx: number) => (
                  <VerticalSkillCard key={skill.name} skill={skill} categoryColor={cat.color} delay={0.03 * sIdx} isTopActive={true} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

{/* Stacked Category Card — 100% SOLID OPAQUE WHITE (#FFFFFF) WITH ZERO BLEED-THROUGH */}
function StackedCategoryCard({
  cat,
  idx,
  total,
  smoothProgress,
}: {
  cat: SkillCategory;
  idx: number;
  total: number;
  smoothProgress: MotionValue<number>;
}) {
  const cardStep = 1 / total;
  const startSlide = idx === 0 ? 0 : (idx - 0.9) * cardStep;
  const settleSlide = idx * cardStep;
  const recedeSlide = (idx + 0.9) * cardStep;

  // y position: card 0 starts at 0. Subsequent cards slide up smoothly from +600px to 0. Past cards STAY AT 0 (Zero upward bleed!).
  const y = useTransform(
    smoothProgress,
    [startSlide, settleSlide, recedeSlide],
    [idx === 0 ? 0 : 600, 0, 0] // Past cards remain at 0px so headers NEVER bleed above top edge!
  );

  // Scale: slides up from 0.92 -> 1. Past cards scale down slightly (0.97) inside the top card's shadow boundary
  const scale = useTransform(
    smoothProgress,
    [startSlide, settleSlide, recedeSlide],
    [idx === 0 ? 1 : 0.92, 1, 0.97]
  );

  // Opacity: slides in from 0 -> 1 when arriving. Once settled, stays at 1 (100% fully opaque)
  const opacity = useTransform(
    smoothProgress,
    [startSlide, settleSlide, recedeSlide],
    [idx === 0 ? 1 : 0, 1, 1]
  );

  // Active state: Is this card currently topmost?
  const [isTopActive, setIsTopActive] = useState(idx === 0);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (v) => {
      const currentActiveIdx = Math.min(Math.floor(v * total), total - 1);
      setIsTopActive(currentActiveIdx === idx);
    });
    return () => unsubscribe();
  }, [smoothProgress, total, idx]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        y,
        scale,
        opacity,
        zIndex: idx + 10, // Higher z-index guarantees later cards sit cleanly ON TOP of earlier cards
        pointerEvents: isTopActive ? 'auto' : 'none', // Locks interaction to top active card only
        width: '100%',
        height: '465px',
        background: '#FFFFFF', // 100% SOLID OPAQUE WHITE (ZERO TRANSPARENCY / ZERO BLEED-THROUGH!)
        border: `1.5px solid ${cat.color}35`,
        borderRadius: 24,
        padding: '1.5rem 1.75rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 14px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
          height: 4.5,
          background: cat.color,
        }}
      />

      {/* Category Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
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
                fontSize: '0.78rem',
                fontFamily: 'var(--font-space-grotesk)',
              }}
            >
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.015em',
                margin: 0,
              }}
            >
              {cat.label}
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.86rem',
              color: '#64748B',
              margin: 0,
              lineHeight: 1.45,
            }}
          >
            {cat.description}
          </p>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.68rem',
            fontWeight: 800,
            color: cat.color,
            background: `${cat.color}15`,
            border: `1px solid ${cat.color}30`,
            padding: '4px 10px',
            borderRadius: 8,
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          {cat.skills.length} skills
        </span>
      </div>

      {/* ── Vertical Stack of Technologies (One Below Another) ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginTop: '0.75rem',
          flex: 1,
          alignContent: 'flex-start',
          overflowY: 'auto',
          paddingRight: 6,
        }}
      >
        {cat.skills.map((skill: SkillItem, sIdx: number) => (
          <VerticalSkillCard
            key={skill.name}
            skill={skill}
            categoryColor={cat.color}
            delay={0.04 * sIdx}
            isTopActive={isTopActive}
          />
        ))}
      </div>
    </motion.div>
  );
}

{/* Vertical Skill Card */}
function VerticalSkillCard({
  skill,
  categoryColor,
  delay,
  isTopActive,
}: {
  skill: SkillItem;
  categoryColor: string;
  delay: number;
  isTopActive: boolean;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={isTopActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.8, scale: 0.97, y: 4 }}
      transition={{ duration: 0.4, delay: isTopActive ? delay : 0, ease: 'easeOut' }}
      whileHover={{ scale: 1.015, y: -2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '11px 16px',
        borderRadius: 16,
        background: isHovered ? `${categoryColor}0A` : '#F8FAFC',
        border: `1px solid ${isHovered ? `${categoryColor}40` : 'rgba(226, 232, 240, 0.9)'}`,
        boxShadow: isHovered ? `0 6px 18px ${categoryColor}15` : '0 2px 6px rgba(0,0,0,0.02)',
        transition: 'background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        cursor: 'default',
        boxSizing: 'border-box',
        gap: 16,
      }}
    >
      {/* Left Column: Tech Brand Icon + Skill Name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 170, flexShrink: 0 }}>
        <motion.div
          animate={isHovered ? { rotate: [0, -10, 10, -5, 0], scale: [1, 1.15, 1] } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <SkillIcon name={skill.name} size={20} />
        </motion.div>

        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#0F172A',
            letterSpacing: '-0.01em',
            lineHeight: 1.2,
          }}
        >
          {skill.name}
        </span>
      </div>

      {/* Center Column: Solid Category Color Progress Bar + Percentage */}
      <div style={{ flex: 1, maxWidth: 420, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            flex: 1,
            height: 6,
            borderRadius: 100,
            background: '#E2E8F0',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isTopActive ? { width: `${skill.score}%` } : { width: `${skill.score}%` }}
            transition={{ duration: 0.8, delay: isTopActive ? delay + 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: '100%',
              borderRadius: 100,
              background: categoryColor,
            }}
          />
        </div>

        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.74rem',
            fontWeight: 800,
            color: categoryColor,
            letterSpacing: '0.04em',
            width: 36,
            textAlign: 'right',
            flexShrink: 0,
          }}
        >
          {skill.score}%
        </span>
      </div>

      {/* Right Column: Level Tag + 5-Dot Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.62rem',
            fontWeight: 700,
            color: categoryColor,
            background: `${categoryColor}15`,
            padding: '3px 8px',
            borderRadius: 6,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {skill.level}
        </span>

        {/* 5-Dot Rating Indicator */}
        <div style={{ display: 'flex', gap: 3.5, alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map((dot) => {
            const isFilled = dot <= skill.dots;
            return (
              <motion.div
                key={dot}
                initial={{ scale: 0, opacity: 0 }}
                animate={isTopActive ? { scale: 1, opacity: isFilled ? 1 : 0.35 } : { scale: 1, opacity: isFilled ? 0.7 : 0.2 }}
                transition={{ duration: 0.2, delay: isTopActive ? delay + dot * 0.03 : 0 }}
                style={{
                  width: 4.5,
                  height: 4.5,
                  borderRadius: '50%',
                  background: isFilled ? categoryColor : '#CBD5E1',
                }}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
