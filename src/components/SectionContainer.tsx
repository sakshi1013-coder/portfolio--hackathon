'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import PixelUniverseBackground from './PixelUniverseBackground';

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
  { id: 'projects', num: '03', title: 'PROJECTS', shortTitle: 'Projects', color: '#EC4899' },
  { id: 'experience', num: '04', title: 'EXPERIENCE', shortTitle: 'Experience', color: '#F59E0B' },
  { id: 'certificates', num: '05', title: 'CERTIFICATES & ACHIEVEMENTS', shortTitle: 'Credentials', color: '#0284C7' },
  { id: 'contact', num: '06', title: 'CONTACT', shortTitle: 'Contact', color: '#6366F1' },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
};

interface SectionContainerProps {
  activeSectionId: string;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function SectionContainer({
  activeSectionId,
  onClose,
  onNavigateSection,
}: SectionContainerProps) {
  const currentIndex = SECTIONS_META.findIndex((s) => s.id === activeSectionId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const currentSection = SECTIONS_META[safeIndex];

  const prevSection = safeIndex > 0 ? SECTIONS_META[safeIndex - 1] : null;
  const nextSection = safeIndex < SECTIONS_META.length - 1 ? SECTIONS_META[safeIndex + 1] : null;

  const [direction, setDirection] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const prevIndexRef = useRef(safeIndex);

  useEffect(() => {
    if (safeIndex !== prevIndexRef.current) {
      setDirection(safeIndex > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = safeIndex;
    }
  }, [safeIndex]);

  const goToIndex = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= SECTIONS_META.length || isTransitioning) return;
      if (newIndex === safeIndex) return;

      setIsTransitioning(true);
      setDirection(newIndex > safeIndex ? 1 : -1);
      onNavigateSection(SECTIONS_META[newIndex].id);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    },
    [safeIndex, isTransitioning, onNavigateSection]
  );

  const goNext = useCallback(() => {
    if (safeIndex < SECTIONS_META.length - 1) {
      goToIndex(safeIndex + 1);
    }
  }, [safeIndex, goToIndex]);

  const goPrev = useCallback(() => {
    if (safeIndex > 0) {
      goToIndex(safeIndex - 1);
    }
  }, [safeIndex, goToIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, onClose]);

  // Reliable Global Touch Swipe Gesture
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      // Do not intercept if touch starts on interactive input or sliders
      if (target?.closest('input') || target?.closest('textarea') || target?.closest('[data-no-swipe]')) {
        touchStartRef.current = null;
        return;
      }

      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      };
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || isTransitioning) return;
      const touch = e.changedTouches[0];
      const diffX = touch.clientX - touchStartRef.current.x;
      const diffY = touch.clientY - touchStartRef.current.y;
      const elapsed = Date.now() - touchStartRef.current.time;

      // Horizontal swipe threshold: > 45px, horizontal dominant, under 800ms
      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.15 && elapsed < 800) {
        if (diffX < -45) {
          goNext();
        } else if (diffX > 45) {
          goPrev();
        }
      }
      touchStartRef.current = null;
    };

    const onTouchCancel = () => {
      touchStartRef.current = null;
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchCancel, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchCancel);
    };
  }, [goNext, goPrev, isTransitioning]);

  // Trackpad 2-finger horizontal gesture
  useEffect(() => {
    let lastWheelTime = 0;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > 50 && Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.5) {
        const now = Date.now();
        if (now - lastWheelTime < 650) return;
        lastWheelTime = now;

        if (e.deltaX > 50) {
          goNext();
        } else if (e.deltaX < -50) {
          goPrev();
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goNext, goPrev]);

  // Render current section component
  const renderSectionContent = () => {
    switch (activeSectionId) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'certificates':
        return <CertificatesSection />;
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
        background: '#FAF9FF',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* ── Light Pastel Pixel Universe Animated Background ── */}
      <PixelUniverseBackground />

      {/* ── Fixed Top Navigation Bar (Light Glassmorphism with Number Stepper) ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          zIndex: 100,
          background: '#FFFFFF',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 2.5vw, 2.5rem)',
        }}
      >
        {/* Left: Return to Orbit Hub Button */}
        <button
          onClick={onClose}
          title="Return to Orbit Homepage (Esc)"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 14px',
            borderRadius: 100,
            background: 'rgba(0, 0, 0, 0.04)',
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
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.08)';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span style={{ fontSize: '0.9rem', color: currentSection.color }}>↺</span>
          <span>ORBIT HUB</span>
        </button>

        {/* Center: Number-Wise Stepper Tabs (01 to 06) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.03)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              borderRadius: 100,
              padding: '3px 4px',
              gap: 4,
            }}
          >
            {SECTIONS_META.map((sec, i) => {
              const isSelected = i === safeIndex;
              return (
                <button
                  key={sec.id}
                  onClick={() => goToIndex(i)}
                  title={`Go to ${sec.num} — ${sec.title}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: isSelected ? '5px 12px' : '5px 8px',
                    borderRadius: 100,
                    background: isSelected ? `${sec.color}18` : 'transparent',
                    border: isSelected ? `1.5px solid ${sec.color}` : '1.5px solid transparent',
                    color: isSelected ? '#0F172A' : '#64748B',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.74rem',
                    fontWeight: isSelected ? 800 : 600,
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? `0 2px 8px ${sec.color}25` : 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: isSelected ? sec.color : '#94A3B8' }}>{sec.num}</span>
                  {isSelected && (
                    <span style={{ color: sec.color, fontSize: '0.68rem', textTransform: 'uppercase', fontWeight: 800 }}>
                      {sec.shortTitle}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </header>

      {/* ── Main Full-Screen Section Content Container with Horizontal Swipe ── */}
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
              x: { type: 'spring', stiffness: 320, damping: 32 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
            }}
          >
            {renderSectionContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
