'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export type SectionInfo = {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  href: string;
  color: string;
};

export const SECTIONS: SectionInfo[] = [
  { id: 'about',        num: '01', title: 'ABOUT ME',                    shortTitle: 'About Me',      href: '/about',        color: '#7C3AED' },
  { id: 'achievements', num: '02', title: 'ACHIEVEMENTS & CERTIFICATES',  shortTitle: 'Achievements',  href: '/achievements', color: '#F59E0B' },
  { id: 'technologies', num: '03', title: 'TECHNOLOGIES',                 shortTitle: 'Technologies',  href: '/skills',       color: '#10B981' },
  { id: 'contact',      num: '04', title: 'CONTACT',                      shortTitle: 'Contact',       href: '/contact',      color: '#6366F1' },
  { id: 'resume',       num: '05', title: 'RESUME & CV',                  shortTitle: 'Resume & CV',   href: '/resume',       color: '#0284C7' },
  { id: 'projects',     num: '06', title: 'PROJECTS',                     shortTitle: 'Projects',      href: '/projects',     color: '#EC4899' },
];

export default function SectionJourneyLayout({
  currentSectionId,
  children,
}: {
  currentSectionId: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const currentIndex = SECTIONS.findIndex((s) => s.id === currentSectionId);
  const currentSection = SECTIONS[currentIndex] ?? SECTIONS[0];
  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#F7F8F6' }}>

      {/* ── Smooth arrival animation (opacity + subtle lift) — no warp ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      {/* ── Floating section navigation pill ── */}
      <nav
        aria-label="Section navigation"
        style={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '7px 16px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: 100,
          boxShadow: '0 12px 32px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)',
          whiteSpace: 'nowrap',
        }}
      >
        {/* ← Prev */}
        <button
          onClick={() => router.push(prevSection ? prevSection.href : '/')}
          title={prevSection ? `Previous: ${prevSection.title}` : 'Return to Hub'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            background: 'transparent',
            border: 'none',
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.66rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: prevSection ? prevSection.color : '#94A3B8',
            cursor: 'pointer',
            padding: '4px 6px',
            textTransform: 'uppercase',
          }}
        >
          <span>←</span>
          <span>{prevSection ? prevSection.shortTitle : 'Hub'}</span>
        </button>

        <div style={{ width: 1, height: 14, background: '#E2E8F0', flexShrink: 0 }} />

        {/* Current counter → links back to hub */}
        <Link
          href="/"
          title="Return to Interactive Hub"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            textDecoration: 'none',
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ color: currentSection.color }}>{currentSection.num}</span>
          <span style={{ color: '#CBD5E1' }}>/</span>
          <span style={{ color: '#000' }}>06</span>
        </Link>

        <div style={{ width: 1, height: 14, background: '#E2E8F0', flexShrink: 0 }} />

        {/* → Next */}
        {nextSection ? (
          <button
            onClick={() => router.push(nextSection.href)}
            title={`Next: ${nextSection.title}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: nextSection.color,
              cursor: 'pointer',
              padding: '4px 6px',
              textTransform: 'uppercase',
            }}
          >
            <span>{nextSection.shortTitle}</span>
            <span>→</span>
          </button>
        ) : (
          <button
            onClick={() => router.push('/')}
            title="Return to Hub"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: '#7C3AED',
              cursor: 'pointer',
              padding: '4px 6px',
              textTransform: 'uppercase',
            }}
          >
            <span>Hub</span>
            <span>↺</span>
          </button>
        )}
      </nav>
    </div>
  );
}
