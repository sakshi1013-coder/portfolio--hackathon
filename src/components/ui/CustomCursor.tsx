'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  label: string;
  expanded: boolean;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<CursorState>({ x: -100, y: -100, label: '', expanded: false });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updatePos = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let currentX = -100;
    let currentY = -100;

    const animate = () => {
      currentX = lerp(currentX, pos.current.x, 0.12);
      currentY = lerp(currentY, pos.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const label =
        target.dataset.cursorLabel ||
        (target.closest('a') ? '↗' : '') ||
        (target.closest('button') ? 'VIEW' : '');

      if (label || target.closest('a') || target.closest('button') || target.closest('[data-cursor]')) {
        const l =
          target.dataset.cursorLabel ||
          (target.closest('[data-cursor-label]') as HTMLElement)?.dataset.cursorLabel ||
          label || 'VIEW';
        setCursor(prev => ({ ...prev, label: l, expanded: true }));
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('a') && !target.closest('button') && !target.closest('[data-cursor]')) {
        setCursor(prev => ({ ...prev, expanded: false, label: '' }));
      }
    };

    window.addEventListener('mousemove', updatePos);
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);

    return () => {
      window.removeEventListener('mousemove', updatePos);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: 'none',
        willChange: 'transform',
      }}
    >
      <AnimatePresence mode="wait">
        {cursor.expanded ? (
          <motion.div
            key="expanded"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{
              background: '#151515',
              color: '#ffffff',
              borderRadius: '100px',
              padding: '6px 14px',
              fontSize: '11px',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500,
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            {cursor.label || 'VIEW'}
          </motion.div>
        ) : (
          <motion.div
            key="dot"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#6257E8',
              border: '1px solid rgba(98,87,232,0.4)',
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
