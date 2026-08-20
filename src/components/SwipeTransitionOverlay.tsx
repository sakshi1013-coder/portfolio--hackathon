'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SwipeTransitionOverlayProps {
  isActive: boolean;
  color: string;
  onCovered?: () => void;
  onComplete?: () => void;
}

export default function SwipeTransitionOverlay({
  isActive,
  color,
  onCovered,
  onComplete,
}: SwipeTransitionOverlayProps) {
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');

  const onCoveredRef = useRef(onCovered);
  onCoveredRef.current = onCovered;

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (isActive) {
      setPhase('covering');
    } else {
      setPhase('idle');
    }
  }, [isActive]);

  const panelColors = [
    '#F5F3FF', // Soft lavender pastel curtain
    color,     // Destination accent color
    '#FAF9FF', // Clean porcelain pixel canvas base
  ];

  // Custom cubic bezier curve
  const easeCurve = [0.76, 0, 0.24, 1] as const;

  const handleCoverComplete = (index: number) => {
    // When the top-most cover panel finishes sweeping in
    if (index === panelColors.length - 1 && phase === 'covering') {
      if (onCoveredRef.current) {
        onCoveredRef.current();
      }
      // Brief 50ms hold at full screen cover, then begin sweep out reveal
      setTimeout(() => {
        setPhase('revealing');
      }, 50);
    }
  };

  const handleRevealComplete = (index: number) => {
    // When the top-most reveal panel finishes sweeping out
    if (index === panelColors.length - 1 && phase === 'revealing') {
      setPhase('idle');
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }
  };

  if (!isActive && phase === 'idle') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'all',
        overflow: 'hidden',
      }}
    >
      {panelColors.map((pColor, i) => (
        <motion.div
          key={`panel-${i}`}
          initial={{ x: '-100%' }}
          animate={{
            x: phase === 'covering' ? '0%' : phase === 'revealing' ? '100%' : '-100%',
          }}
          transition={{
            duration: 0.44,
            delay: i * 0.065,
            ease: easeCurve,
          }}
          onAnimationComplete={() => {
            if (phase === 'covering') {
              handleCoverComplete(i);
            } else if (phase === 'revealing') {
              handleRevealComplete(i);
            }
          }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            background: pColor,
            opacity: i === 1 ? 0.95 : 1,
            boxShadow: i === 1 ? `0 0 50px ${color}60` : 'none',
          }}
        />
      ))}

      {/* Center Brand / Pulse Monogram at Sweep Peak */}
      <motion.div
        animate={{
          opacity: phase === 'covering' ? [0, 1, 1] : [1, 0],
          scale: phase === 'covering' ? [0.8, 1.05, 1] : [1, 1.15],
        }}
        transition={{ duration: 0.35, ease: easeCurve }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            border: `2.5px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FFFFFF',
            boxShadow: `0 8px 30px ${color}50`,
          }}
        >
          <span style={{ color: color, fontSize: '1.3rem', fontWeight: 800 }}>✦</span>
        </div>
      </motion.div>
    </div>
  );
}
