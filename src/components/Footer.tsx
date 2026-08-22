'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const GithubIcon = ({size=18}: {size?: number}) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>);
const LinkedinIcon = ({size=18}: {size?: number}) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const FileTextIcon = ({size=18}: {size?: number}) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
const MailIcon = ({size=18}: {size?: number}) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const footerLinks = [
    { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sakshi-shingole-484913315/', cursorLabel: '↗' },
    { icon: <GithubIcon />, label: 'GitHub', href: 'https://github.com/sakshi1013-coder', cursorLabel: '↗' },
    { icon: <MailIcon />, label: 'Instagram', href: 'https://www.instagram.com/sakshi_shingole?igsh=azdtYWF6azRpeHA1', cursorLabel: '↗' },
    { icon: <MailIcon />, label: 'X (Twitter)', href: 'https://x.com/saku_8055?t=yTgvW2O49wvmDHFF0X7Y5A&s=09', cursorLabel: '↗' },
    { icon: <MailIcon />, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shingolesakshi@gmail.com', cursorLabel: '↗' },
  ];

  return (
    <footer
      ref={ref}
      style={{
        background: '#0D0D0D',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Final convergence orbit */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        {[80, 140, 200].map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: r * 2,
              height: r * 2,
              borderRadius: '50%',
              border: `1px solid rgba(98,87,232,${0.15 - i * 0.03})`,
              animation: `spin-slow ${20 + i * 8}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1.5rem' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '0.75rem',
            }}
          >
            SAKSHI SHINGOLE
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 400,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            From idea to impact.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.08)',
            margin: '2.5rem 0',
            transformOrigin: 'center',
          }}
        />

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label={link.cursorLabel}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.82rem',
                letterSpacing: '0.04em',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                cursor: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#6257E8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Brand tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
        >
          {['DESIGN', '×', 'ENGINEERING', '×', 'AI', '×', 'CLOUD'].map((word, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: word === '×' ? 300 : 600,
                fontSize: '0.68rem',
                letterSpacing: word === '×' ? '0.05em' : '0.15em',
                color: word === '×' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.25)',
              }}
            >
              {word}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.15)',
            marginTop: '2rem',
          }}
        >
          © {new Date().getFullYear()} Sakshi Shingole. Designed & engineered by Sakshi.
        </motion.p>
      </div>
    </footer>
  );
}
