'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HandwritingIntroProps {
  onComplete: () => void;
}

export default function HandwritingIntro({ onComplete }: HandwritingIntroProps) {
  const [phase, setPhase] = useState<'drawing' | 'fill' | 'subtitle' | 'exit'>('drawing');
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setIsReducedMotion(true);
        const timer = setTimeout(() => {
          onComplete();
        }, 1200);
        return () => clearTimeout(timer);
      }
    }

    // Sequence timings
    // 0.0s - 2.1s: Stroke line drawing
    // 2.1s - 2.5s: Ink solid fill transition + pen glow
    // 2.5s - 3.1s: "PORTFOLIO" subtitle fade-in
    // 3.4s: Exit transition to main homepage
    const fillTimer = setTimeout(() => setPhase('fill'), 2100);
    const subtitleTimer = setTimeout(() => setPhase('subtitle'), 2400);
    const exitTimer = setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 650);
    }, 3200);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // If user prefers reduced motion, show quick fade
  if (isReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: '#FAF9FF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-fleur-de-leah), "Fleur De Leah", cursive',
            fontSize: 'clamp(3.8rem, 8vw, 6.4rem)',
            color: '#0F172A',
            margin: 0,
          }}
        >
          Sakshi Shingole
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.24em',
            color: '#64748B',
            marginTop: 16,
            textTransform: 'uppercase',
          }}
        >
          PORTFOLIO
        </p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#FAF9FF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            userSelect: 'none',
          }}
        >
          {/* Subtle Ambient Grid Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.8,
              pointerEvents: 'none',
            }}
          />

          {/* Glowing Ambient Core Aura */}
          <div
            style={{
              position: 'absolute',
              width: 520,
              height: 280,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.12) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 75%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Handwriting SVG Signature Canvas ── */}
          <div
            style={{
              position: 'relative',
              width: 'clamp(320px, 78vw, 760px)',
              maxWidth: '90vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 740 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: '100%',
                height: 'auto',
                overflow: 'visible',
                filter: 'drop-shadow(0 6px 20px rgba(124, 58, 237, 0.14))',
              }}
            >
              {/* Defs for gradients & glowing pen */}
              <defs>
                <linearGradient id="signatureInk" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0F172A" />
                  <stop offset="45%" stopColor="#1E1B4B" />
                  <stop offset="85%" stopColor="#312E81" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                <linearGradient id="flourishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#EC4899" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.4" />
                </linearGradient>

                <filter id="inkGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ── 1. Stroke 1: Capital "S" (First Name) ── */}
              <motion.path
                d="M 85 75 C 70 55, 45 60, 42 82 C 40 102, 60 115, 82 128 C 102 140, 115 156, 110 174 C 102 195, 68 196, 48 180 C 36 170, 32 155, 34 145"
                stroke="url(#signatureInk)"
                strokeWidth={3.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.48, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* ── 2. Stroke 2: "akshi" (First Name body: a -> k -> s -> h -> i) ── */}
              <motion.path
                d="M 98 168 C 112 152, 128 138, 142 152 C 152 162, 145 182, 130 182 C 115 182, 116 160, 134 150 C 146 142, 158 162, 164 178 C 170 160, 178 105, 185 88 C 190 78, 196 82, 192 98 C 185 130, 178 165, 175 182 C 174 182, 186 156, 198 152 C 205 150, 208 160, 202 172 C 206 165, 216 148, 226 154 C 234 158, 232 175, 222 180 C 220 180, 230 162, 238 120 C 242 98, 248 92, 252 98 C 255 106, 248 145, 244 180 C 248 162, 258 150, 268 152 C 278 154, 275 174, 272 180 C 274 172, 282 152, 292 152 C 300 152, 302 165, 298 178 C 302 174, 308 168, 316 168"
                stroke="url(#signatureInk)"
                strokeWidth={3.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.72, delay: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* ── 3. Stroke 3: Dot for "i" (First Name) ── */}
              <motion.path
                d="M 296 134 C 298 132, 301 132, 302 135 C 302 138, 298 139, 296 137 Z"
                stroke="url(#signatureInk)"
                strokeWidth={3.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#0F172A"
                initial={{ pathLength: 0, opacity: 0, scale: 0.5 }}
                animate={{ pathLength: 1, opacity: 1, scale: 1 }}
                transition={{ duration: 0.18, delay: 1.05, ease: 'easeOut' }}
              />

              {/* ── 4. Stroke 4: Capital "S" (Last Name) ── */}
              <motion.path
                d="M 380 75 C 365 55, 340 60, 337 82 C 335 102, 355 115, 377 128 C 397 140, 410 156, 405 174 C 397 195, 363 196, 343 180 C 331 170, 327 155, 329 145"
                stroke="url(#signatureInk)"
                strokeWidth={3.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.46, delay: 1.08, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* ── 5. Stroke 5: "hingole" (Last Name body: h -> i -> n -> g -> o -> l -> e) ── */}
              <motion.path
                d="M 395 168 C 402 152, 410 108, 416 92 C 420 82, 426 84, 423 98 C 418 125, 410 165, 408 180 C 412 162, 422 150, 432 152 C 440 154, 438 174, 435 180 C 438 170, 446 152, 456 152 C 464 152, 462 170, 458 180 C 462 168, 470 152, 480 152 C 490 152, 488 172, 485 180 C 488 168, 496 152, 506 152 C 516 152, 514 172, 510 180 C 516 166, 526 152, 538 152 C 548 152, 550 166, 545 178 C 542 195, 526 215, 508 214 C 496 213, 498 198, 512 194 C 532 188, 550 168, 558 152 C 568 152, 575 162, 570 178 C 572 170, 580 148, 586 130 C 592 110, 598 90, 602 75 C 606 68, 612 72, 608 85 C 598 120, 588 165, 584 180 C 588 165, 600 152, 612 152 C 624 152, 622 172, 616 180 C 622 176, 638 168, 655 162"
                stroke="url(#signatureInk)"
                strokeWidth={3.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.82, delay: 1.38, ease: [0.25, 0.1, 0.25, 1] }}
              />

              {/* ── 6. Stroke 6: Dot for "i" (Last Name) ── */}
              <motion.path
                d="M 458 134 C 460 132, 463 132, 464 135 C 464 138, 460 139, 458 137 Z"
                stroke="url(#signatureInk)"
                strokeWidth={3.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#0F172A"
                initial={{ pathLength: 0, opacity: 0, scale: 0.5 }}
                animate={{ pathLength: 1, opacity: 1, scale: 1 }}
                transition={{ duration: 0.18, delay: 1.95, ease: 'easeOut' }}
              />

              {/* ── 7. Stroke 7: Dynamic Underline Flourish Swirl ── */}
              <motion.path
                d="M 70 205 C 180 218, 380 216, 560 198 C 620 192, 670 184, 695 178 C 705 175, 698 182, 680 188 C 640 200, 520 215, 360 216 C 240 217, 120 212, 60 204"
                stroke="url(#flourishGradient)"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{ duration: 0.65, delay: 1.85, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Solid Calligraphy Weight Overlay (Smoothly fades in right as stroke drawing concludes) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'fill' || phase === 'subtitle' ? 1 : 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-fleur-de-leah), "Fleur De Leah", cursive',
                  fontSize: 'clamp(3.8rem, 8vw, 6.4rem)',
                  fontWeight: 400,
                  color: '#0F172A',
                  letterSpacing: '0.02em',
                  lineHeight: 1.25,
                  whiteSpace: 'nowrap',
                  margin: 0,
                  paddingRight: '20px',
                  filter: 'drop-shadow(0 4px 20px rgba(124, 58, 237, 0.15))',
                }}
              >
                Sakshi Shingole
              </h1>
            </motion.div>

            {/* Glowing Pen Tip / Sparkle particle moving with the active handwriting stroke */}
            {phase === 'drawing' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 1, 1, 0.9, 0],
                  scale: [0.6, 1.2, 1, 1.1, 0.5],
                  x: [-240, -120, 20, 180, 290],
                  y: [-15, 10, -5, 15, 8],
                }}
                transition={{
                  duration: 2.1,
                  ease: 'easeInOut',
                  times: [0, 0.25, 0.55, 0.85, 1],
                }}
                style={{
                  position: 'absolute',
                  top: '52%',
                  left: '50%',
                  pointerEvents: 'none',
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #EC4899 0%, #7C3AED 70%)',
                    boxShadow: '0 0 16px #7C3AED, 0 0 24px rgba(236, 72, 153, 0.8)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: 4,
                    color: '#7C3AED',
                    fontSize: '1.1rem',
                    filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.6))',
                  }}
                >
                  ✦
                </span>
              </motion.div>
            )}
          </div>

          {/* ── "PORTFOLIO" Subtitle Text (Slides + Fades up right after signature finishes) ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: phase === 'subtitle' || phase === 'fill' ? 1 : 0,
              y: phase === 'subtitle' || phase === 'fill' ? 0 : 12,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: '1.25rem',
            }}
          >
            <span style={{ width: 24, height: 1, background: 'rgba(124, 58, 237, 0.3)' }} />
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(0.68rem, 0.82vw, 0.84rem)',
                letterSpacing: '0.28em',
                color: '#64748B',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              PORTFOLIO
            </p>
            <span style={{ width: 24, height: 1, background: 'rgba(124, 58, 237, 0.3)' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
