'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import SectionContainer, { SECTIONS_META } from './SectionContainer';
import CloudBackground from './CloudBackground';

/* ─── Clean Modern SVG Icons ─────────────────────────────────────────────── */
const PersonIcon = ({ c, s = 16 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LayersIcon = ({ c, s = 16 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const BriefcaseIcon = ({ c, s = 16 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const AwardIcon = ({ c, s = 16 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const TrophyIcon = ({ c, s = 16 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

const MailIcon = ({ c, s = 16 }: { c: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ─── 6 Cards Ordered Sequentially at 60° Intervals ────────────────────────── */
export type CardDef = {
  id: string;
  num: string;
  titleLines: string[];
  desc: string;
  href: string;
  color: string;
  bg: string;
  Icon: (p: { c: string; s?: number }) => React.ReactElement;
};

export const CARDS: CardDef[] = [
  {
    id: 'about',
    num: '01',
    titleLines: ['ABOUT ME'],
    desc: 'Get to know me, my journey, values, and what drives me.',
    href: '/about',
    color: '#7C3AED',
    bg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(245, 243, 255, 0.94) 100%)',
    Icon: PersonIcon,
  },
  {
    id: 'skills',
    num: '02',
    titleLines: ['TECHNICAL', 'SKILLS'],
    desc: 'Languages, frameworks, databases, cloud, and dev tools.',
    href: '/skills',
    color: '#10B981',
    bg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(236, 253, 245, 0.94) 100%)',
    Icon: LayersIcon,
  },
  {
    id: 'experience',
    num: '03',
    titleLines: ['EXPERIENCE'],
    desc: 'Career timeline, software projects, and engineering roles.',
    href: '/experience',
    color: '#F59E0B',
    bg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 251, 235, 0.94) 100%)',
    Icon: BriefcaseIcon,
  },
  {
    id: 'certificates',
    num: '04',
    titleLines: ['CERTIFICATES'],
    desc: 'AWS Cloud credentials and verified industry certificates.',
    href: '/certificates',
    color: '#0284C7',
    bg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 249, 255, 0.94) 100%)',
    Icon: AwardIcon,
  },
  {
    id: 'achievements',
    num: '05',
    titleLines: ['ACHIEVEMENTS'],
    desc: 'Hackathon 1st place victories, recognitions and awards.',
    href: '/achievements',
    color: '#EC4899',
    bg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(253, 242, 248, 0.94) 100%)',
    Icon: TrophyIcon,
  },
  {
    id: 'contact',
    num: '06',
    titleLines: ['CONTACT'],
    desc: "Let's connect, collaborate, and build something impactful.",
    href: '/contact',
    color: '#6366F1',
    bg: 'linear-gradient(145deg, rgba(255, 255, 255, 0.96) 0%, rgba(238, 242, 255, 0.94) 100%)',
    Icon: MailIcon,
  },
];

/* ─── Guaranteed Smooth Signature Intro Overlay (Never gets stuck) ────────── */
function SignatureIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1400;
    let frameId: number;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(eased * 100);

      if (rawProgress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }, 350);
      }
    };

    frameId = requestAnimationFrame(animate);

    const fallbackTimer = setTimeout(() => {
      setProgress(100);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 2200);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.8,
        }}
      />

      <div style={{ position: 'relative', display: 'inline-block', padding: '10px 45px 10px 20px' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'visible',
            clipPath: progress >= 99 ? 'none' : `inset(0 ${Math.max(0, 100 - progress)}% 0 0)`,
            WebkitClipPath: progress >= 99 ? 'none' : `inset(0 ${Math.max(0, 100 - progress)}% 0 0)`,
            transition: 'clip-path 0.05s linear',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-fleur-de-leah), "Fleur De Leah", cursive',
              fontSize: 'clamp(3.8rem, 8vw, 6.4rem)',
              fontWeight: 400,
              color: '#000000',
              letterSpacing: '0.02em',
              lineHeight: 1.25,
              whiteSpace: 'nowrap',
              margin: 0,
              paddingRight: '45px',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.05))',
            }}
          >
            Sakshi Shingole
          </h1>
        </div>

        {progress > 3 && progress < 97 && (
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: `${progress}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <span style={{ color: '#7C3AED', fontSize: '1.4rem', filter: 'drop-shadow(0 0 8px #7C3AED)' }}>
              ✦
            </span>
          </div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: progress > 75 ? 1 : 0, y: progress > 75 ? 0 : 10 }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 700,
          fontSize: 'clamp(0.66rem, 0.78vw, 0.82rem)',
          letterSpacing: '0.24em',
          color: '#64748B',
          marginTop: 18,
          textTransform: 'uppercase',
        }}
      >
        PORTFOLIO
      </motion.p>
    </motion.div>
  );
}

/* ─── Circular Nav Card Component ─────────────────────────────────────────── */
function NavCard({
  card,
  index,
  angleDeg,
  posX,
  posY,
  centerX,
  centerY,
  showIntro,
  isDimmed,
  onCardClick,
  onHoverChange,
}: {
  card: CardDef;
  index: number;
  angleDeg: number;
  posX: number;
  posY: number;
  centerX: number;
  centerY: number;
  showIntro: boolean;
  isDimmed: boolean;
  onCardClick: (card: CardDef, e: React.MouseEvent) => void;
  onHoverChange: (isHovered: boolean) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const IcComp = card.Icon;

  const rad = (angleDeg * Math.PI) / 180;
  const hoverPushX = Math.cos(rad) * 8;
  const hoverPushY = Math.sin(rad) * 8;

  const startDeltaX = centerX - posX;
  const startDeltaY = centerY - posY;

  const handleMouseEnter = () => {
    setHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onHoverChange(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: startDeltaX, y: startDeltaY, scale: 0.15 }}
      animate={
        showIntro
          ? { opacity: 0, x: startDeltaX, y: startDeltaY, scale: 0.15 }
          : {
              opacity: isDimmed ? 0 : 1,
              x: hovered ? hoverPushX : 0,
              y: hovered ? hoverPushY : 0,
              scale: isDimmed ? 0.9 : hovered ? 1.04 : 1,
              zIndex: hovered ? 35 : 20,
            }
      }
      transition={{
        delay: showIntro ? 0 : 0.05 + index * 0.05,
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        position: 'absolute',
        left: posX,
        top: posY,
        transform: 'translate(-50%, -50%)',
        width: 'clamp(146px, 9.8vw, 166px)',
        pointerEvents: isDimmed ? 'none' : 'auto',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        onClick={(e) => onCardClick(card, e)}
        style={{
          background: card.bg,
          border: `1px solid ${hovered ? card.color + '85' : 'rgba(255, 255, 255, 0.94)'}`,
          borderRadius: '14px',
          padding: '10px 10px 8px',
          cursor: 'pointer',
          boxShadow: hovered
            ? `0 16px 32px ${card.color}25, 0 6px 14px rgba(0,0,0,0.06)`
            : '0 6px 18px rgba(0,0,0,0.04), 0 2px 5px rgba(0,0,0,0.02)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transition: 'border 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        }}
      >
        {/* Top row: Icon + Colored Indicator */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <div
            style={{
              width: 25,
              height: 25,
              borderRadius: 7,
              background: `${card.color}18`,
              border: `1px solid ${card.color}35`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IcComp c={card.color} s={13} />
          </div>
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: card.color,
              opacity: hovered ? 1 : 0.75,
              boxShadow: hovered ? `0 0 8px ${card.color}` : `0 0 4px ${card.color}99`,
              transition: 'opacity 0.2s, box-shadow 0.2s',
            }}
          />
        </div>

        {/* Number */}
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.48rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: card.color,
            textTransform: 'uppercase',
            marginBottom: 2,
          }}
        >
          {card.num}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 800,
            fontSize: 'clamp(0.72rem, 0.76vw, 0.8rem)',
            color: '#0F172A',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            marginBottom: 2,
          }}
        >
          {card.titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < card.titleLines.length - 1 && <br />}
            </span>
          ))}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.58rem',
            color: '#64748B',
            lineHeight: 1.28,
            marginBottom: 5,
          }}
        >
          {card.desc}
        </p>

        {/* Explore link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: '0.54rem',
            letterSpacing: '0.08em',
            color: card.color,
            textTransform: 'uppercase',
          }}
        >
          <span>OPEN SECTION</span>
          <span style={{ transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.18s' }}>
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Expanding Card Overlay ─────────────────────────────────────────────── */
function ExpandingCardOverlay({
  card,
  originRect,
  onComplete,
}: {
  card: CardDef;
  originRect: { left: number; top: number; width: number; height: number };
  onComplete: () => void;
}) {
  return (
    <motion.div
      initial={{
        position: 'fixed',
        left: originRect.left,
        top: originRect.top,
        width: originRect.width,
        height: originRect.height,
        borderRadius: 14,
        background: card.bg,
        border: `1px solid ${card.color}60`,
        boxShadow: `0 20px 50px ${card.color}40`,
        zIndex: 9999,
        opacity: 1,
      }}
      animate={{
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        background: '#F8FAFC',
        border: '1px solid transparent',
        boxShadow: 'none',
        opacity: 1,
      }}
      transition={{
        duration: 0.52,
        ease: [0.16, 1, 0.3, 1],
      }}
      onAnimationComplete={onComplete}
      style={{
        pointerEvents: 'none',
      }}
    />
  );
}

/* ─── Master OrbitHub Component ──────────────────────────────────────────── */
export default function OrbitHub({ initialSectionId }: { initialSectionId?: string }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(!initialSectionId);
  const [dims, setDims] = useState({ w: 1440, h: 900 });

  // Continuous Gentle Orbital Rotation State
  const [orbitAngle, setOrbitAngle] = useState(0);
  const isHoveredRef = useRef(false);

  // Full-Screen Section State
  const [activeSectionId, setActiveSectionId] = useState<string | null>(initialSectionId || null);
  const [expandingCard, setExpandingCard] = useState<{ card: CardDef; rect: { left: number; top: number; width: number; height: number } } | null>(null);

  // Mouse parallax motion
  const mouseXMv = useMotionValue(0.5);
  const mouseYMv = useMotionValue(0.5);
  const sMouseX = useSpring(mouseXMv, { stiffness: 40, damping: 16 });
  const sMouseY = useSpring(mouseYMv, { stiffness: 40, damping: 16 });
  const photoTX = useTransform(sMouseX, [0, 1], [-4, 4]);
  const photoTY = useTransform(sMouseY, [0, 1], [-3, 3]);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      setDims({ w: window.innerWidth, h: window.innerHeight });
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

  // Smooth continuous orbit animation loop
  useEffect(() => {
    let animFrameId: number;
    let lastTime = performance.now();

    const animateOrbit = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHoveredRef.current && !activeSectionId && !expandingCard) {
        // Slow, graceful rotation: ~2.8 degrees per second
        setOrbitAngle((prev) => (prev + delta * 2.8) % 360);
      }

      animFrameId = requestAnimationFrame(animateOrbit);
    };

    animFrameId = requestAnimationFrame(animateOrbit);
    return () => cancelAnimationFrame(animFrameId);
  }, [activeSectionId, expandingCard]);

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

  // Card Click -> Trigger Full-Screen Expansion
  const handleCardClick = useCallback((card: CardDef, e: React.MouseEvent) => {
    const target = e.currentTarget.getBoundingClientRect();
    setExpandingCard({
      card,
      rect: {
        left: target.left,
        top: target.top,
        width: target.width,
        height: target.height,
      },
    });

    window.history.pushState(null, '', `/${card.id}`);
  }, []);

  // Expansion Animation Complete
  const handleExpansionComplete = useCallback(() => {
    if (expandingCard) {
      setActiveSectionId(expandingCard.card.id);
      setExpandingCard(null);
    }
  }, [expandingCard]);

  // Close Section -> Return to Orbit Hub
  const handleCloseSection = useCallback(() => {
    setActiveSectionId(null);
    window.history.pushState(null, '', '/');
  }, []);

  // Navigate between sections (swipe / buttons / dots)
  const handleNavigateSection = useCallback((newSectionId: string) => {
    setActiveSectionId(newSectionId);
    window.history.pushState(null, '', `/${newSectionId}`);
  }, []);

  if (!mounted) return null;
  const isMobile = dims.w < 1080;

  /* ──────────────────────────────────────────────────────────────────────────
     ADAPTIVE WIDESCREEN ELLIPTICAL ORBIT:
     - Exact screen center: (centerX, centerY)
     - Horizontal Radius (radiusX): Wide spread (370px - 440px) to guarantee
       ~200px of open clearance from the center name/text!
     - Vertical Radius (radiusY): Viewport-safe (210px - 250px) to guarantee
       top/bottom cards NEVER clip or go out of the browser window frame!
  ────────────────────────────────────────────────────────────────────────── */
  const centerX = dims.w * 0.5;
  const centerY = dims.h * 0.48;

  // Horizontal spread gives ample clearance from center text
  const maxSafeRadiusX = (dims.w * 0.5) - 95;
  const radiusX = Math.max(290, Math.min(maxSafeRadiusX, 420));

  // Vertical safe headroom ensures top & bottom cards never touch screen borders
  const maxSafeRadiusY = (dims.h * 0.5) - 80;
  const radiusY = Math.max(200, Math.min(maxSafeRadiusY, 245));

  // Orbit ring dimensions
  const orbitRadiusX = radiusX - 45;
  const orbitRadiusY = radiusY - 40;
  const innerRadius = 95;

  const isHubDimmed = !!expandingCard || !!activeSectionId;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        background: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* ── Handwriting Intro Screen Animation ── */}
      <AnimatePresence>
        {showIntro && !initialSectionId && (
          <SignatureIntroOverlay onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* ── Expanding Card Transition Layer ── */}
      {expandingCard && (
        <ExpandingCardOverlay
          card={expandingCard.card}
          originRect={expandingCard.rect}
          onComplete={handleExpansionComplete}
        />
      )}

      {/* ── Full-Screen Section Container ── */}
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
          filter: isHubDimmed ? 'blur(8px)' : 'blur(0px)',
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
        {/* ── Animated Volumetric Clouds Background ── */}
        <CloudBackground />

        {/* ── SVG Layer: Orbit Ring & Dynamic Rotating Radial Connectors ── */}
        {!isMobile && (
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 5,
              overflow: 'visible',
            }}
          >
            {/* Smooth Adaptive Orbit Ring (Clean interior circle with zero center overlap) */}
            <motion.ellipse
              cx={centerX}
              cy={centerY}
              rx={orbitRadiusX}
              ry={orbitRadiusY}
              fill="none"
              stroke="rgba(148, 163, 184, 0.45)"
              strokeWidth="1.2"
              strokeDasharray="6 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
            />

            {/* Inner Concentric Ellipse */}
            <motion.ellipse
              cx={centerX}
              cy={centerY}
              rx={orbitRadiusX * 0.52}
              ry={orbitRadiusY * 0.52}
              fill="none"
              stroke="rgba(203, 213, 225, 0.4)"
              strokeWidth="1"
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.3, delay: 0.4, ease: 'easeOut' }}
            />

            {/* 6 Radial Connector Lines from inner radius through orbit ring to card */}
            {CARDS.map((card, i) => {
              const angleDeg = -90 + i * 60 + orbitAngle;
              const rad = (angleDeg * Math.PI) / 180;

              const x1 = centerX + innerRadius * Math.cos(rad);
              const y1 = centerY + innerRadius * Math.sin(rad);
              const orbitDotX = centerX + orbitRadiusX * Math.cos(rad);
              const orbitDotY = centerY + orbitRadiusY * Math.sin(rad);
              const cardX = centerX + radiusX * Math.cos(rad);
              const cardY = centerY + radiusY * Math.sin(rad);

              return (
                <g key={`orbit-link-${card.id}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={cardX}
                    y2={cardY}
                    stroke={card.color}
                    strokeWidth="1.2"
                    strokeOpacity="0.38"
                    strokeDasharray="4 6"
                  />
                  <circle
                    cx={orbitDotX}
                    cy={orbitDotY}
                    r={3}
                    fill={card.color}
                    fillOpacity="0.6"
                  />
                  <circle
                    cx={cardX}
                    cy={cardY}
                    r={4}
                    fill={card.color}
                    fillOpacity="0.9"
                  />
                </g>
              );
            })}
          </svg>
        )}

        {/* ── CENTER HERO CONTAINER (Completely clear inside the orbit ring) ── */}
        <div
          style={{
            position: 'absolute',
            left: `${centerX}px`,
            top: `${centerY}px`,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 25,
            pointerEvents: 'none',
          }}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
        >
          {/* Portrait Photo */}
          <div style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                x: photoTX,
                y: photoTY,
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 6%, black 14%, black 86%, rgba(0,0,0,0.4) 94%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 6%, black 14%, black 86%, rgba(0,0,0,0.4) 94%, transparent 100%)',
              }}
            >
              <img
                src="/profile.png"
                alt="Sakshi Shingole"
                style={{
                  display: 'block',
                  width: isMobile ? '130px' : 'clamp(130px, 9.5vw, 150px)',
                  height: 'auto',
                  maxHeight: isMobile ? '175px' : 'clamp(180px, 13vw, 210px)',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.06))',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.6) 86%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.6) 86%, transparent 100%)',
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/sakshi.jpg';
                }}
              />
            </motion.div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 900,
              fontSize: isMobile ? 'clamp(1.2rem, 4.2vw, 1.45rem)' : 'clamp(1.25rem, 1.45vw, 1.55rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              margin: '3px 0 0',
              color: '#0F172A',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              pointerEvents: 'none',
              textShadow: '0 2px 10px rgba(255,255,255,0.8)',
            }}
          >
            SAKSHI SHINGOLE
          </motion.h1>

          {/* Professional Roles */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: isMobile ? '0.46rem' : 'clamp(0.48rem, 0.52vw, 0.56rem)',
              letterSpacing: '0.1em',
              color: '#334155',
              marginTop: 2,
              textAlign: 'center',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            SOFTWARE ENGINEER
            <span style={{ color: '#7C3AED', margin: '0 4px', fontWeight: 900 }}>×</span>
            FULL STACK DEVELOPER
            <span style={{ color: '#EC4899', margin: '0 4px', fontWeight: 900 }}>×</span>
            UI/UX DESIGNER
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.35, delay: 0.55 }}
            style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2, pointerEvents: 'none' }}
          >
            <div style={{ width: 18, height: '1px', background: 'linear-gradient(90deg, transparent, #CBD5E1)' }} />
            <span style={{ color: '#7C3AED', fontSize: '0.45rem' }}>✦</span>
            <div style={{ width: 18, height: '1px', background: 'linear-gradient(90deg, #CBD5E1, transparent)' }} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.65 }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontStyle: 'italic',
              fontSize: isMobile ? '0.6rem' : 'clamp(0.62rem, 0.65vw, 0.7rem)',
              color: '#475569',
              marginTop: 2,
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            "I build{' '}
            <span style={{ color: '#7C3AED', fontWeight: 600 }}>ideas</span>
            {' '}into{' '}
            <span style={{ color: '#EC4899', fontWeight: 600 }}>experiences</span>."
          </motion.p>

          {/* ── Mobile Layout: 6 Cards in Grid ── */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              style={{
                marginTop: 12,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 6,
                width: '100%',
                maxWidth: 320,
                pointerEvents: 'auto',
              }}
            >
              {CARDS.map((card) => {
                const IcComp = card.Icon;
                return (
                  <button
                    key={card.id}
                    onClick={(e) => handleCardClick(card, e)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 9px',
                      borderRadius: '10px',
                      background: card.bg,
                      border: `1px solid ${card.color}30`,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <IcComp c={card.color} s={13} />
                      <span
                        style={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          color: card.color,
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {card.titleLines[0]}
                      </span>
                    </div>
                    <span style={{ color: card.color, fontSize: '0.72rem', fontWeight: 700 }}>→</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* ── Desktop: 6 Cards Rotating Safely Within Viewport Bounds ── */}
        {!isMobile &&
          CARDS.map((card, i) => {
            const angleDeg = -90 + i * 60 + orbitAngle;
            const rad = (angleDeg * Math.PI) / 180;
            const posX = centerX + radiusX * Math.cos(rad);
            const posY = centerY + radiusY * Math.sin(rad);

            return (
              <NavCard
                key={card.id}
                card={card}
                index={i}
                angleDeg={angleDeg}
                posX={posX}
                posY={posY}
                centerX={centerX}
                centerY={centerY}
                showIntro={showIntro}
                isDimmed={isHubDimmed}
                onCardClick={handleCardClick}
                onHoverChange={(hovered) => {
                  isHoveredRef.current = hovered;
                }}
              />
            );
          })}
      </motion.div>
    </div>
  );
}
