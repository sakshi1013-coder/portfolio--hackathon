'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import SectionContainer, { SECTIONS_META } from './SectionContainer';
import PixelUniverseBackground from './PixelUniverseBackground';
import SwipeTransitionOverlay from './SwipeTransitionOverlay';

/* ─── Clean Modern Vector Icons ─────────────────────────────────────────── */
const LayersIcon = ({ c, s = 22 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const FolderCodeIcon = ({ c, s = 22 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
    <polyline points="10 10 8 13 10 16" />
    <polyline points="14 10 16 13 14 16" />
  </svg>
);

const BriefcaseIcon = ({ c, s = 22 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const AwardIcon = ({ c, s = 22 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const MailIcon = ({ c, s = 22 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ─── 5 Planet Definitions Across 3 Concentric Rings ─────────────────────── */
export type PlanetDef = {
  id: string;
  num: string;
  shortTitle: string;
  titleLines: string[];
  desc: string;
  href: string;
  color: string;
  bg: string;
  ringIndex: 0 | 1 | 2; // 0 = Inner, 1 = Middle, 2 = Outer
  initialAngle: number;
  Icon: (p: { c: string; s?: number }) => React.ReactElement;
};

export const PLANETS: PlanetDef[] = [
  {
    id: 'skills',
    num: '02',
    shortTitle: 'SKILLS',
    titleLines: ['TECHNICAL', 'SKILLS'],
    desc: 'Languages, frameworks, databases, cloud, and modern dev tools.',
    href: '/skills',
    color: '#10B981',
    bg: 'linear-gradient(145deg, rgba(240, 253, 244, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%)',
    ringIndex: 0, // Inner Ring
    initialAngle: -75,
    Icon: LayersIcon,
  },
  {
    id: 'contact',
    num: '06',
    shortTitle: 'CONTACT',
    titleLines: ['CONTACT', 'ME'],
    desc: "Let's connect, collaborate, and build something impactful.",
    href: '/contact',
    color: '#6366F1',
    bg: 'linear-gradient(145deg, rgba(238, 242, 255, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%)',
    ringIndex: 0, // Inner Ring
    initialAngle: 105,
    Icon: MailIcon,
  },
  {
    id: 'projects',
    num: '03',
    shortTitle: 'PROJECTS',
    titleLines: ['FEATURED', 'PROJECTS'],
    desc: 'Full-stack applications, multimodal AI systems, and cloud pipelines.',
    href: '/projects',
    color: '#EC4899',
    bg: 'linear-gradient(145deg, rgba(253, 242, 248, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%)',
    ringIndex: 1, // Middle Ring
    initialAngle: -25,
    Icon: FolderCodeIcon,
  },
  {
    id: 'experience',
    num: '04',
    shortTitle: 'EXPERIENCE',
    titleLines: ['EXPERIENCE', 'TIMELINE'],
    desc: 'Career timeline, software projects, and engineering roles.',
    href: '/experience',
    color: '#F59E0B',
    bg: 'linear-gradient(145deg, rgba(255, 251, 235, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%)',
    ringIndex: 1, // Middle Ring
    initialAngle: 155,
    Icon: BriefcaseIcon,
  },
  {
    id: 'certificates',
    num: '05',
    shortTitle: 'CREDENTIALS',
    titleLines: ['CERTIFICATES &', 'ACHIEVEMENTS'],
    desc: 'Verified AWS credentials, hackathon victories, and academic milestones.',
    href: '/certificates',
    color: '#0284C7',
    bg: 'linear-gradient(145deg, rgba(240, 249, 255, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%)',
    ringIndex: 2, // Outer Ring
    initialAngle: 55,
    Icon: AwardIcon,
  },
];

/* ─── Spacious, Clear, Highly Legible Planet Node (~74–82px) with Pop-Up Card ── */
function PlanetNode({
  planet,
  index,
  posX,
  posY,
  isDimmed,
  onCardClick,
  onHoverChange,
}: {
  planet: PlanetDef;
  index: number;
  posX: number;
  posY: number;
  isDimmed: boolean;
  onCardClick: (cardId: string, color: string) => void;
  onHoverChange: (isHovered: boolean) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IcComp = planet.Icon;

  // Collision-safe quadrant expansion
  const expandTowardLeft = posX > 20;
  const expandTowardTop = posY > 30;
  const transformOrigin = `${expandTowardLeft ? 'right' : 'left'} ${expandTowardTop ? 'bottom' : 'top'}`;

  const handleMouseEnter = () => {
    setIsExpanded(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
    onHoverChange(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{
        opacity: isDimmed ? 0 : 1,
        scale: isDimmed ? 0.85 : 1,
        zIndex: isExpanded ? 50 : 20,
      }}
      transition={{
        delay: 0.12 + index * 0.08,
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        position: 'absolute',
        left: `${posX}px`,
        top: `${posY}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: isDimmed ? 'none' : 'auto',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Glowing Ambient Radial Halo */}
        <motion.div
          animate={{
            scale: isExpanded ? [1.25, 1.5, 1.25] : [1, 1.22, 1],
            opacity: isExpanded ? [0.45, 0.75, 0.45] : [0.2, 0.42, 0.2],
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: -14,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${planet.color}50 0%, ${planet.color}15 60%, transparent 80%)`,
            pointerEvents: 'none',
          }}
        />

        {/* ── State A: Spacious, Beautifully Sized Planet Node (~74–82px) ── */}
        {!isExpanded && (
          <motion.div
            onClick={() => onCardClick(planet.id, planet.color)}
            whileHover={{ scale: 1.14 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 'clamp(72px, 5.2vw, 84px)',
              height: 'clamp(72px, 5.2vw, 84px)',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.72)',
              border: `1.8px solid ${planet.color}`,
              boxShadow: `0 8px 26px ${planet.color}30, 0 2px 8px rgba(0,0,0,0.04)`,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
              cursor: 'pointer',
              position: 'relative',
              padding: '6px 4px',
              transition: 'background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            {/* Top Number Indicator Pill */}
            <div
              style={{
                position: 'absolute',
                top: -8,
                padding: '2px 7px',
                borderRadius: 100,
                background: planet.color,
                color: '#FFFFFF',
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.54rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                boxShadow: `0 2px 8px ${planet.color}45`,
              }}
            >
              {planet.num}
            </div>

            {/* Bigger, Crisply Visible Icon */}
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: `${planet.color}16`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 2,
              }}
            >
              <IcComp c={planet.color} s={19} />
            </div>

            {/* Large, High-Contrast, Easily Readable Title */}
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: 'clamp(0.56rem, 0.62vw, 0.68rem)',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#0F172A',
                textTransform: 'uppercase',
                lineHeight: 1,
                textAlign: 'center',
                maxWidth: '92%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {planet.shortTitle}
            </span>
          </motion.div>
        )}

        {/* ── State B: Smooth Pop-up Card Expansion ── */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.35,
                x: expandTowardLeft ? 15 : -15,
                y: expandTowardTop ? 15 : -15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: expandTowardLeft ? -55 : 55,
                y: expandTowardTop ? -45 : 45,
              }}
              exit={{
                opacity: 0,
                scale: 0.35,
                transition: { duration: 0.18, ease: 'easeIn' },
              }}
              transition={{
                type: 'spring',
                stiffness: 320,
                damping: 24,
                mass: 0.8,
              }}
              style={{
                position: 'absolute',
                transformOrigin: transformOrigin,
                width: 'clamp(215px, 15vw, 248px)',
                background: planet.bg,
                border: `2px solid ${planet.color}`,
                borderRadius: '22px',
                padding: '16px 18px 15px',
                boxShadow: `0 24px 55px ${planet.color}30, 0 8px 24px rgba(0,0,0,0.08)`,
                backdropFilter: 'blur(28px)',
                WebkitBackdropFilter: 'blur(28px)',
                cursor: 'pointer',
                zIndex: 60,
              }}
              onClick={() => onCardClick(planet.id, planet.color)}
            >
              {/* Row 1: Icon + Number Badge */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.03 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 11,
                    background: `${planet.color}18`,
                    border: `1px solid ${planet.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IcComp c={planet.color} s={20} />
                </div>

                <div
                  style={{
                    padding: '3px 9px',
                    borderRadius: 100,
                    background: `${planet.color}20`,
                    border: `1px solid ${planet.color}50`,
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: planet.color,
                    textTransform: 'uppercase',
                  }}
                >
                  {planet.num} · PLANET
                </div>
              </motion.div>

              {/* Row 2: Title */}
              <motion.h3
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.07 }}
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 900,
                  fontSize: 'clamp(0.94rem, 1vw, 1.06rem)',
                  color: '#0F172A',
                  lineHeight: 1.2,
                  letterSpacing: '-0.015em',
                  marginBottom: 6,
                }}
              >
                {planet.titleLines.join(' ')}
              </motion.h3>

              {/* Row 3: Description */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.11 }}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.72rem',
                  color: '#475569',
                  lineHeight: 1.45,
                  marginBottom: 12,
                }}
              >
                {planet.desc}
              </motion.p>

              {/* Row 4: Action Link Button */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.15 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 12px',
                  borderRadius: 10,
                  background: `${planet.color}12`,
                  border: `1px solid ${planet.color}35`,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 800,
                  fontSize: '0.66rem',
                  letterSpacing: '0.08em',
                  color: planet.color,
                  textTransform: 'uppercase',
                }}
              >
                <span>OPEN SECTION</span>
                <span style={{ fontSize: '0.85rem' }}>→</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─── Master OrbitHub Component with Scaled Up Composition & Wide Radii ──── */
export default function OrbitHub({ initialSectionId }: { initialSectionId?: string }) {
  const [mounted, setMounted] = useState(false);
  const [dims, setDims] = useState({ w: 1440, h: 900 });

  // Planetary Rotation Angles across 3 Distinct Concentric Rings
  const [ringAngles, setRingAngles] = useState<[number, number, number]>([0, 0, 0]);
  const isHoveredRef = useRef(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  // Full-Screen Section & Swipe State
  const [activeSectionId, setActiveSectionId] = useState<string | null>(initialSectionId || null);
  const [swipeState, setSwipeState] = useState<{
    isActive: boolean;
    targetSectionId: string | null;
    color: string;
  }>({
    isActive: false,
    targetSectionId: null,
    color: '#7C3AED',
  });

  // Mouse parallax motion
  const mouseXMv = useMotionValue(0.5);
  const mouseYMv = useMotionValue(0.5);
  const sMouseX = useSpring(mouseXMv, { stiffness: 45, damping: 18 });
  const sMouseY = useSpring(mouseYMv, { stiffness: 45, damping: 18 });

  const photoTX = useTransform(sMouseX, [0, 1], [-8, 8]);
  const photoTY = useTransform(sMouseY, [0, 1], [-6, 6]);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setDims({
        w: document.documentElement.clientWidth || window.innerWidth,
        h: document.documentElement.clientHeight || window.innerHeight,
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseXMv.set(e.clientX / window.innerWidth);
      mouseYMv.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseXMv, mouseYMv]);

  // Continuous multi-speed celestial revolution animation loop
  useEffect(() => {
    let animFrameId: number;
    let lastTime = performance.now();

    const animateOrbits = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHoveredRef.current && !activeSectionId && !swipeState.isActive) {
        setRingAngles(([r0, r1, r2]) => [
          (r0 + delta * 4.8) % 360,  // Ring 0 (Inner): ~4.8 deg/sec
          (r1 + delta * 3.2) % 360,  // Ring 1 (Middle): ~3.2 deg/sec
          (r2 + delta * 2.0) % 360,  // Ring 2 (Outer): ~2.0 deg/sec
        ]);
      }

      animFrameId = requestAnimationFrame(animateOrbits);
    };

    animFrameId = requestAnimationFrame(animateOrbits);
    return () => cancelAnimationFrame(animFrameId);
  }, [activeSectionId, swipeState.isActive]);

  // Handle browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const currentPath = window.location.pathname.replace('/', '');
      if (currentPath && SECTIONS_META.some((s) => s.id === currentPath)) {
        setActiveSectionId(currentPath);
      } else {
        setActiveSectionId(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Trigger Multi-Panel Swipe Reveal when opening a section
  const triggerSwipeTransition = useCallback((sectionId: string, color: string) => {
    setSwipeState({
      isActive: true,
      targetSectionId: sectionId,
      color,
    });
    window.history.pushState(null, '', `/${sectionId}`);
  }, []);

  const handleSwipeCovered = useCallback(() => {
    if (swipeState.targetSectionId) {
      setActiveSectionId(swipeState.targetSectionId);
    }
  }, [swipeState.targetSectionId]);

  const handleSwipeComplete = useCallback(() => {
    setSwipeState((prev) => ({ ...prev, isActive: false }));
  }, []);

  const handleCloseSection = useCallback(() => {
    triggerSwipeTransition('', '#7C3AED');
    setActiveSectionId(null);
    window.history.pushState(null, '', '/');
  }, [triggerSwipeTransition]);

  const handleNavigateSection = useCallback((newSectionId: string) => {
    setActiveSectionId(newSectionId);
    window.history.pushState(null, '', `/${newSectionId}`);
  }, []);

  if (!mounted) return null;
  const isMobile = dims.w < 1080;

  const maxAvailableX = (dims.w * 0.5) - 40;
  const maxAvailableY = (dims.h * 0.5) - 35;

  const r0_x = Math.max(260, Math.min(maxAvailableX * 0.55, 330));
  const r0_y = Math.max(180, Math.min(maxAvailableY * 0.58, 235));

  const r1_x = Math.max(360, Math.min(maxAvailableX * 0.77, 450));
  const r1_y = Math.max(245, Math.min(maxAvailableY * 0.78, 305));

  const r2_x = Math.max(460, Math.min(maxAvailableX * 0.96, 565));
  const r2_y = Math.max(305, Math.min(maxAvailableY * 0.96, 375));

  const ringRadii: Array<{ rx: number; ry: number }> = [
    { rx: r0_x, ry: r0_y },
    { rx: r1_x, ry: r1_y },
    { rx: r2_x, ry: r2_y },
  ];

  const isHubDimmed = swipeState.isActive || !!activeSectionId;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        background: '#FAF9FF',
        overflow: 'hidden',
      }}
    >
      {/* ── Multi-Panel Staggered Swipe Reveal Transition (Orbit Hub -> Section) ── */}
      <SwipeTransitionOverlay
        isActive={swipeState.isActive}
        color={swipeState.color}
        onCovered={handleSwipeCovered}
        onComplete={handleSwipeComplete}
      />

      {/* ── Full-Screen Section Container (Number-Wise Horizontal Sliding) ── */}
      {activeSectionId && (
        <SectionContainer
          activeSectionId={activeSectionId}
          onClose={handleCloseSection}
          onNavigateSection={handleNavigateSection}
        />
      )}

      {/* ── Orbit Hub View ── */}
      <motion.div
        animate={{
          opacity: isHubDimmed ? 0 : 1,
          scale: isHubDimmed ? 0.96 : 1,
          filter: isHubDimmed ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: isHubDimmed ? 'none' : 'auto',
        }}
      >
        {/* ── Light-Theme Pixel Universe Animated Background ── */}
        <PixelUniverseBackground />

        {/* ── 100% PERFECTLY CENTERED ORBIT ORIGIN WRAPPER ── */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 0,
            height: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          {/* ── SVG Layer: 3 Concentric Orbit Rings & Connector Spoke Guidelines ── */}
          {!isMobile && (
            <svg
              style={{
                position: 'absolute',
                left: `-${dims.w / 2}px`,
                top: `-${dims.h / 2}px`,
                width: `${dims.w}px`,
                height: `${dims.h}px`,
                pointerEvents: 'none',
                zIndex: 5,
                overflow: 'visible',
              }}
            >
              {/* Ring 0 (Inner Orbit Track) */}
              <motion.ellipse
                cx={dims.w / 2}
                cy={dims.h / 2}
                rx={r0_x}
                ry={r0_y}
                fill="none"
                stroke="rgba(16, 185, 129, 0.22)"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              />

              {/* Ring 1 (Middle Orbit Track) */}
              <motion.ellipse
                cx={dims.w / 2}
                cy={dims.h / 2}
                rx={r1_x}
                ry={r1_y}
                fill="none"
                stroke="rgba(245, 158, 11, 0.22)"
                strokeWidth="1.3"
                strokeDasharray="5 7"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.35, ease: 'easeOut' }}
              />

              {/* Ring 2 (Outer Orbit Track) */}
              <motion.ellipse
                cx={dims.w / 2}
                cy={dims.h / 2}
                rx={r2_x}
                ry={r2_y}
                fill="none"
                stroke="rgba(2, 132, 199, 0.22)"
                strokeWidth="1.4"
                strokeDasharray="6 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.5, ease: 'easeOut' }}
              />

              {/* Connectors from Center to Each Moving Planet */}
              {PLANETS.map((planet) => {
                const ring = ringRadii[planet.ringIndex];
                const currentAngle = planet.initialAngle + ringAngles[planet.ringIndex];
                const rad = (currentAngle * Math.PI) / 180;

                const cx = dims.w / 2;
                const cy = dims.h / 2;

                const x1 = cx + 85 * Math.cos(rad);
                const y1 = cy + 85 * Math.sin(rad);

                const x2 = cx + ring.rx * Math.cos(rad);
                const y2 = cy + ring.ry * Math.sin(rad);

                return (
                  <g key={`orbit-link-${planet.id}`}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={planet.color}
                      strokeWidth="1.1"
                      strokeOpacity="0.28"
                      strokeDasharray="3 5"
                    />
                    <circle
                      cx={x2}
                      cy={y2}
                      r={2.5}
                      fill={planet.color}
                      fillOpacity={0.6}
                    />
                  </g>
                );
              })}
            </svg>
          )}

          {/* ── CENTER HERO SECTION ── */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 25,
              pointerEvents: 'none',
            }}
          >
            {/* Clickable Perfect Circular Portrait Photo */}
            <div
              style={{
                position: 'relative',
                pointerEvents: 'auto',
                cursor: 'pointer',
                marginBottom: 10,
              }}
              onClick={() => triggerSwipeTransition('about', '#7C3AED')}
              onMouseEnter={() => {
                isHoveredRef.current = true;
                setIsPhotoHovered(true);
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
                setIsPhotoHovered(false);
              }}
            >
              {/* Circular Breathing Glow Pulse */}
              <motion.div
                animate={{
                  scale: isPhotoHovered ? 1.22 : [1, 1.1, 1],
                  opacity: isPhotoHovered ? 0.85 : [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: isPhotoHovered ? 0.3 : 4.5,
                  repeat: isPhotoHovered ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  inset: -16,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(236, 72, 153, 0.22) 50%, transparent 75%)',
                  filter: 'blur(24px)',
                  pointerEvents: 'none',
                  zIndex: -1,
                }}
              />

              {/* Perfect Circular Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={{
                  opacity: 1,
                  scale: isPhotoHovered ? 1.06 : 1,
                  y: isPhotoHovered ? -4 : 0,
                }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  x: photoTX,
                  y: photoTY,
                  borderRadius: '50%',
                  padding: 4,
                  background: isPhotoHovered
                    ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(236, 72, 153, 0.8))'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(124, 58, 237, 0.3))',
                  boxShadow: isPhotoHovered
                    ? '0 16px 44px rgba(124, 58, 237, 0.32), 0 4px 16px rgba(0,0,0,0.06)'
                    : '0 10px 34px rgba(124, 58, 237, 0.16), 0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Sakshi Shingole - Click for 01 / About Me"
                  style={{
                    display: 'block',
                    width: isMobile ? '135px' : 'clamp(145px, 11vw, 175px)',
                    height: isMobile ? '135px' : 'clamp(145px, 11vw, 175px)',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    userSelect: 'none',
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/sakshi.jpg';
                  }}
                />
              </motion.div>

              {/* Hover Badge */}
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{
                  opacity: isPhotoHovered ? 1 : 0,
                  y: isPhotoHovered ? 0 : 6,
                  scale: isPhotoHovered ? 1 : 0.9,
                }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px 14px',
                  borderRadius: 100,
                  background: 'rgba(124, 58, 237, 0.94)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  boxShadow: '0 4px 16px rgba(124, 58, 237, 0.45)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  pointerEvents: 'none',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                }}
              >
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FFFFFF', textTransform: 'uppercase' }}>
                  01 · ABOUT ME ✦ VIEW PROFILE
                </span>
              </motion.div>
            </div>

            {/* Scaled Up Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 900,
                fontSize: isMobile ? 'clamp(1.45rem, 5vw, 1.8rem)' : 'clamp(1.75rem, 2.25vw, 2.45rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                margin: '6px 0 0',
                color: '#0F172A',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                pointerEvents: 'none',
              }}
            >
              SAKSHI SHINGOLE
            </motion.h1>

            {/* Scaled Up Roles */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: isMobile ? '0.54rem' : 'clamp(0.62rem, 0.68vw, 0.76rem)',
                letterSpacing: '0.12em',
                color: '#475569',
                marginTop: 4,
                textAlign: 'center',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              SOFTWARE ENGINEER
              <span style={{ color: '#7C3AED', margin: '0 6px', fontWeight: 900 }}>×</span>
              FULL STACK DEVELOPER
              <span style={{ color: '#EC4899', margin: '0 6px', fontWeight: 900 }}>×</span>
              UI/UX DESIGNER
            </motion.p>

            {/* Scaled Up Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.35, delay: 0.38 }}
              style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 4, pointerEvents: 'none' }}
            >
              <div style={{ width: 28, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.4))' }} />
              <span style={{ color: '#7C3AED', fontSize: '0.55rem' }}>✦</span>
              <div style={{ width: 28, height: '1px', background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.4), transparent)' }} />
            </motion.div>

            {/* Scaled Up Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.42 }}
              style={{
                fontFamily: 'var(--font-inter)',
                fontStyle: 'italic',
                fontSize: isMobile ? '0.72rem' : 'clamp(0.8rem, 0.86vw, 0.96rem)',
                color: '#64748B',
                marginTop: 4,
                textAlign: 'center',
                pointerEvents: 'none',
              }}
            >
              "I build{' '}
              <span style={{ color: '#7C3AED', fontWeight: 600 }}>ideas</span>
              {' '}into{' '}
              <span style={{ color: '#EC4899', fontWeight: 600 }}>experiences</span>."
            </motion.p>

            {/* ── Mobile Layout: Responsive Planet Cards Grid ── */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                style={{
                  marginTop: 16,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 8,
                  width: '100%',
                  maxWidth: 350,
                  pointerEvents: 'auto',
                }}
              >
                {PLANETS.map((planet) => {
                  const IcComp = planet.Icon;
                  return (
                    <button
                      key={planet.id}
                      onClick={() => triggerSwipeTransition(planet.id, planet.color)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 13px',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.92)',
                        border: `1.5px solid ${planet.color}35`,
                        cursor: 'pointer',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <IcComp c={planet.color} s={16} />
                        <span
                          style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            color: '#0F172A',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {planet.num} · {planet.shortTitle}
                        </span>
                      </div>
                      <span style={{ color: planet.color, fontSize: '0.78rem', fontWeight: 700 }}>→</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* ── Desktop: Planetary Orbs ── */}
          {!isMobile &&
            PLANETS.map((planet, i) => {
              const ring = ringRadii[planet.ringIndex];
              const currentAngle = planet.initialAngle + ringAngles[planet.ringIndex];
              const rad = (currentAngle * Math.PI) / 180;
              const posX = ring.rx * Math.cos(rad);
              const posY = ring.ry * Math.sin(rad);

              return (
                <PlanetNode
                  key={planet.id}
                  planet={planet}
                  index={i}
                  posX={posX}
                  posY={posY}
                  isDimmed={isHubDimmed}
                  onCardClick={triggerSwipeTransition}
                  onHoverChange={(hovered) => {
                    isHoveredRef.current = hovered;
                  }}
                />
              );
            })}
        </div>
      </motion.div>
    </div>
  );
}
