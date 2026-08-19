'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BackToHub() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 28px',
        background: 'rgba(247,248,246,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(229,229,229,0.6)',
      }}
    >
      <Link
        href="/"
        data-cursor-label="HOME"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          color: '#6257E8',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#151515')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#6257E8')}
      >
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        SAKSHI
      </Link>

      <span
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          color: '#151515',
          textTransform: 'uppercase',
          opacity: 0.5,
        }}
      >
        SAKSHI SHINGOLE
      </span>
    </motion.div>
  );
}
