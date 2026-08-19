'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DNAProps {
  dna: {
    frontend: number;
    backend: number;
    cloud: number;
    devops: number;
    uiux: number;
  };
  accentColor: string;
}

const bars = [
  { key: 'frontend' as const, label: 'Frontend', color: '#6257E8' },
  { key: 'backend' as const, label: 'Backend', color: '#22C55E' },
  { key: 'cloud' as const, label: 'Cloud', color: '#F59E0B' },
  { key: 'devops' as const, label: 'DevOps', color: '#14B8A6' },
  { key: 'uiux' as const, label: 'UI/UX', color: '#EC4899' },
];

export default function ProjectDNA({ dna, accentColor }: DNAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ marginTop: '1.5rem' }}>
      <p
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          color: '#999',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}
      >
        PROJECT DNA
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {bars.map((bar) => (
          <div key={bar.key} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.68rem',
                fontWeight: 500,
                color: '#666',
                width: 60,
                flexShrink: 0,
              }}
            >
              {bar.label}
            </span>
            <div className="dna-bar" style={{ flex: 1 }}>
              <motion.div
                className="dna-bar-fill"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: dna[bar.key] / 100 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{
                  background: `linear-gradient(90deg, ${bar.color} 0%, ${bar.color}AA 100%)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
