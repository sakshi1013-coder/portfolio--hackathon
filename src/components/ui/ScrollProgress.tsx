'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const circumference = 2 * Math.PI * 16;

  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 36 36" className="rotate-[-90deg]">
        <circle cx="18" cy="18" r="16" fill="none" stroke="#E5E5E5" strokeWidth="2" />
        <motion.circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="#6257E8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          style={{ transition: 'stroke-dashoffset 0.1s ease' }}
        />
      </svg>
      <span
        style={{
          position: 'absolute',
          fontSize: '8px',
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          color: '#6257E8',
        }}
      >
        {Math.round(progress)}
      </span>
    </div>
  );
}
