'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';
import CloudBackground from './CloudBackground';

export type SectionMeta = {
  id: string;
  num: string;
  title: string;
  shortTitle: string;
  color: string;
};

export const SECTIONS_META: SectionMeta[] = [
  { id: 'about', num: '01', title: 'ABOUT ME', shortTitle: 'About', color: '#7C3AED' },
  { id: 'skills', num: '02', title: 'TECHNICAL SKILLS', shortTitle: 'Skills', color: '#10B981' },
  { id: 'experience', num: '03', title: 'EXPERIENCE', shortTitle: 'Experience', color: '#F59E0B' },
  { id: 'certificates', num: '04', title: 'CERTIFICATES', shortTitle: 'Certificates', color: '#0284C7' },
  { id: 'achievements', num: '05', title: 'ACHIEVEMENTS', shortTitle: 'Achievements', color: '#EC4899' },
  { id: 'contact', num: '06', title: 'CONTACT', shortTitle: 'Contact', color: '#6366F1' },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : direction < 0 ? '100%' : 0,
    opacity: 0,
  }),
};

export default function SectionContainer({
  activeSectionId,
  onClose,
  onNavigateSection,
}: {
  activeSectionId: string;
  onClose: () => void;
  onNavigateSection: (id: string) => void;
}) {
  const currentIndex = Math.max(
    0,
    SECTIONS_META.findIndex((s) => s.id === activeSectionId)
  );
  const currentSection = SECTIONS_META[currentIndex] || SECTIONS_META[0];
  const [direction, setDirection] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Touch gesture refs
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const wheelLockRef = useRef<boolean>(false);

  // Transition to specific index with direction
  const goToIndex = useCallback(
    (newIndex: number) => {
      if (isTransitioning || newIndex === currentIndex || newIndex < 0 || newIndex >= SECTIONS_META.length) {
        return;
      }
      setIsTransitioning(true);
      setDirection(newIndex > currentIndex ? 1 : -1);
      onNavigateSection(SECTIONS_META[newIndex].id);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 550);
    },
    [currentIndex, isTransitioning, onNavigateSection]
  );

  const goNext = useCallback(() => {
    if (currentIndex < SECTIONS_META.length - 1) {
      goToIndex(currentIndex + 1);
    }
  }, [currentIndex, goToIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      goToIndex(currentIndex - 1);
    }
  }, [currentIndex, goToIndex]);

  // Keyboard navigation: Left/Right arrows change section, Escape returns home
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goNext();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, onClose]);

  // Trackpad horizontal swipe detection
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.6 && Math.abs(e.deltaX) > 32) {
        if (wheelLockRef.current || isTransitioning) return;
        wheelLockRef.current = true;
        if (e.deltaX > 0) {
          goNext();
        } else {
          goPrev();
        }
        setTimeout(() => {
          wheelLockRef.current = false;
        }, 650);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev, isTransitioning]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || isTransitioning) return;
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    const elapsed = Date.now() - touchStartRef.current.time;

    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5 && elapsed < 800) {
      if (diffX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartRef.current = null;
  };

  // Render current section component
  const renderSectionContent = () => {
    switch (activeSectionId) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'certificates':
        return <CertificatesSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        background: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Animated Volumetric Clouds Background ── */}
      <CloudBackground />

      {/* ── Fixed Top Navigation Bar (Clean & Minimal) ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 3vw, 2.5rem)',
        }}
      >
        {/* Left: HOME / Return to Orbit Hub Button */}
        <button
          onClick={onClose}
          title="Return to Orbit Homepage (Esc)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 14px',
            borderRadius: 100,
            background: 'rgba(15, 23, 42, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            cursor: 'pointer',
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#0F172A',
            textTransform: 'uppercase',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.08)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.04)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span style={{ fontSize: '0.9rem', color: currentSection.color }}>↺</span>
          <span>ORBIT HUB</span>
        </button>

        {/* Center: Current Section Indicator & Dot Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Subtle Dots for all 6 sections */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {SECTIONS_META.map((sec, i) => (
              <button
                key={sec.id}
                onClick={() => goToIndex(i)}
                title={`Jump directly to ${sec.num} — ${sec.title}`}
                style={{
                  width: i === currentIndex ? 22 : 7,
                  height: 7,
                  borderRadius: 100,
                  background: i === currentIndex ? sec.color : 'rgba(0, 0, 0, 0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.25s ease',
                  boxShadow: i === currentIndex ? `0 0 8px ${sec.color}66` : 'none',
                }}
              />
            ))}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ color: currentSection.color }}>{currentSection.num}</span>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <span style={{ color: '#64748B' }}>06</span>
            <span style={{ color: '#CBD5E1', margin: '0 2px' }}>·</span>
            <span style={{ color: currentSection.color }}>{currentSection.title}</span>
          </div>
        </div>

        {/* Right side spacer to keep center balanced */}
        <div style={{ width: 110 }} />
      </header>

      {/* ── Main Full-Screen Section Content Container ── */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          marginTop: 64,
          width: '100%',
          height: 'calc(100vh - 64px)',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeSectionId}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 280, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {renderSectionContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Subtle Floating Gesture Hint at Bottom ── */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          bottom: 14,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 80,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '5px 14px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: 100,
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.66rem', fontWeight: 600, color: '#94A3B8' }}>
          ↕ Vertical scroll to read · ↔ Horizontal swipe / Arrow keys to switch sections
        </span>
      </div>
    </div>
  );
}
