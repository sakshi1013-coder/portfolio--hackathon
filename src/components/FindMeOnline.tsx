'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const GithubIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>);
const LinkedinIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const FileTextIcon = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>);

const links = [
  {
    id: 'github',
    label: 'GITHUB',
    description: 'Explore the code behind my projects.',
    href: 'https://github.com/sakshi1013-coder',
    cursorLabel: '↗',
    color: '#151515',
    bg: '#F7F8F6',
    icon: <GithubIcon />,
    cta: 'VIEW PROFILE →',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    description: 'Follow my professional journey.',
    href: '[REPLACE WITH LINKEDIN URL]',
    cursorLabel: '↗',
    color: '#0A66C2',
    bg: '#EBF3FB',
    icon: <LinkedinIcon />,
    cta: 'CONNECT →',
  },
  {
    id: 'resume',
    label: 'RESUME',
    description: 'View my latest resume.',
    href: '[REPLACE WITH RESUME URL]',
    cursorLabel: '↗',
    color: '#6257E8',
    bg: '#E9E7FF',
    icon: <FileTextIcon />,
    cta: 'DOWNLOAD →',
  },
];

export default function FindMeOnline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="find-me"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: '#F7F8F6',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-label"
          style={{ marginBottom: '1rem' }}
        >
          07 / FIND ME ONLINE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-lg"
          style={{ marginBottom: '3.5rem', maxWidth: 480 }}
        >
          Let&apos;s connect and collaborate.
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {links.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              data-cursor-label={link.cursorLabel}
              style={{
                display: 'block',
                background: link.bg,
                border: `1px solid ${link.color}20`,
                borderRadius: 20,
                padding: '2rem',
                textDecoration: 'none',
                cursor: 'none',
                transition: 'box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: link.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  marginBottom: '1.25rem',
                }}
              >
                {link.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#151515',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {link.label}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.9rem',
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                }}
              >
                {link.description}
              </p>

              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.06em',
                  color: link.color,
                }}
              >
                {link.cta}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
