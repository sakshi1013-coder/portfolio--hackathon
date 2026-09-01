'use client';

import React from 'react';
import { motion } from 'framer-motion';

const sitemapLinks = [
  { num: '01', label: 'ABOUT ME', id: 'about', color: '#7C3AED' },
  { num: '02', label: 'TECHNICAL SKILLS', id: 'skills', color: '#10B981' },
  { num: '03', label: 'EXPERIENCE', id: 'experience', color: '#F59E0B' },
  { num: '04', label: 'CERTIFICATES', id: 'certificates', color: '#0284C7' },
  { num: '05', label: 'ACHIEVEMENTS', id: 'achievements', color: '#EC4899' },
  { num: '06', label: 'CONTACT', id: 'contact', color: '#6366F1' },
  { num: '07', label: 'FOOTER', id: 'footer', color: '#64748B' },
];

export default function FooterSection({
  onSelectSection,
  onReturnToHub,
}: {
  onSelectSection?: (id: string) => void;
  onReturnToHub?: () => void;
}) {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#64748B15', border: '1px solid #64748B30', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#64748B' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#64748B', textTransform: 'uppercase' }}>
            07 / FINAL DESTINATION
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#0F172A',
            maxWidth: 820,
          }}
        >
          Convergence &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #64748B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            navigation index.
          </span>
        </h1>
      </motion.div>

      {/* Main Grounded Footer Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: '#0F172A',
          color: '#F8FAFC',
          borderRadius: 28,
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}
      >
        {/* Decorative Radial Lighting */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Row: Name + Signature */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-fleur-de-leah), "Fleur De Leah", cursive',
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 400,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Sakshi Shingole
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: '#94A3B8',
                textTransform: 'uppercase',
                marginTop: 6,
              }}
            >
              SOFTWARE ENGINEER · FULL STACK DEVELOPER · UI/UX DESIGNER
            </p>
          </div>

          {onReturnToHub && (
            <button
              onClick={onReturnToHub}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 22px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 100,
                color: '#FFFFFF',
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              <span>↺</span>
              <span>RETURN TO ORBIT HUB</span>
            </button>
          )}
        </div>

        {/* Middle Row: Sitemap Sections Grid + Socials */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Direct Navigation Links to All 7 Sections */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#64748B',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              All 7 Portfolio Sections
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sitemapLinks.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectSection && onSelectSection(s.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: 10,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#E2E8F0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${s.color}25`;
                    e.currentTarget.style.borderColor = `${s.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: s.color }}>
                      {s.num}
                    </span>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                      {s.label}
                    </span>
                  </div>
                  <span style={{ color: s.color, fontSize: '0.85rem' }}>→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#64748B',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Direct Connect & Links
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'LinkedIn Profile', value: 'linkedin.com/in/sakshi-shingole', href: 'https://www.linkedin.com/in/sakshi-shingole/', icon: '💼' },
                { label: 'GitHub Repository', value: 'github.com/sakshi1013-coder', href: 'https://github.com/sakshi1013-coder', icon: '💻' },
                { label: 'Instagram Profile', value: '@sakshi_shingole', href: 'https://www.instagram.com/sakshi_shingole?igsh=azdtYWF6azRpeHA1', icon: '📸' },
                { label: 'X (Twitter)', value: '@saku_8055', href: 'https://x.com/saku_8055?t=yTgvW2O49wvmDHFF0X7Y5A&s=09', icon: '🐦' },
                { label: 'Email Contact', value: 'shingolesakshi@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shingolesakshi@gmail.com', icon: '✉️' },
                { label: 'Direct Phone', value: '+91-8369238055', href: 'tel:+918369238055', icon: '📞' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#E2E8F0',
                    textDecoration: 'none',
                    transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
                >
                  <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8' }}>
                      {link.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 500 }}>
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#64748B', margin: 0 }}>
            © {new Date().getFullYear()} Sakshi Shingole. Designed & built from pixel to product.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.74rem', color: '#94A3B8', fontWeight: 600 }}>
              Next.js · TypeScript · Framer Motion
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
