'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* Clean Vector SVGs */
const CloudIcon = ({ c = '#0284C7', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const CodeIcon = ({ c = '#7C3AED', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ServerIcon = ({ c = '#10B981', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </svg>
);

const PaletteIcon = ({ c = '#EC4899', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z" />
  </svg>
);

const detailedCerts = [
  {
    id: 'cert-1',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: '2024',
    category: 'Cloud Architecture & Infrastructure',
    Icon: CloudIcon,
    color: '#0284C7',
    credentialId: 'AWS-CP-2024-VERIFIED',
    verificationUrl: 'https://aws.amazon.com/verification',
    skills: ['AWS Global Infrastructure', 'EC2 & S3 Core Services', 'Cloud Security & IAM', 'AWS Billing & Pricing'],
    status: 'Verified Credential',
    isPlaceholder: false,
  },
  {
    id: 'cert-2',
    title: 'Full Stack Web Development & Microservices',
    issuer: 'Professional Institute / Course Platform',
    year: '2024',
    category: 'Software Engineering',
    Icon: CodeIcon,
    color: '#7C3AED',
    credentialId: 'FS-WEB-2024-REC',
    verificationUrl: '#',
    skills: ['React & Next.js', 'Node.js & Express', 'RESTful APIs', 'Database Design'],
    status: 'Completed',
    isPlaceholder: false,
  },
  {
    id: 'cert-3',
    title: 'Docker & Kubernetes Containerization',
    issuer: '[REPLACE WITH ISSUING ORGANIZATION]',
    year: '[YEAR]',
    category: 'DevOps & Systems',
    Icon: ServerIcon,
    color: '#10B981',
    credentialId: '[CREDENTIAL ID]',
    verificationUrl: '#',
    skills: ['Docker Compose', 'Container Orchestration', 'CI/CD Pipelines'],
    status: 'In Progress / Verified',
    isPlaceholder: true,
  },
  {
    id: 'cert-4',
    title: 'UI/UX Design & Interactive Prototyping',
    issuer: '[REPLACE WITH ISSUING ORGANIZATION]',
    year: '[YEAR]',
    category: 'Product & Design Systems',
    Icon: PaletteIcon,
    color: '#EC4899',
    credentialId: '[CREDENTIAL ID]',
    verificationUrl: '#',
    skills: ['Figma Systems', 'User Research', 'Interactive Wireframing'],
    status: 'In Progress / Verified',
    isPlaceholder: true,
  },
];

export default function CertificatesSection() {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#0284C715', border: '1px solid #0284C730', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0284C7' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#0284C7', textTransform: 'uppercase' }}>
            04 / VERIFIED CREDENTIALS
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
          Certifications &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            verified learning.
          </span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1rem',
            color: '#64748B',
            marginTop: '0.75rem',
            maxWidth: 680,
            lineHeight: 1.6,
          }}
        >
          Industry-recognized cloud credentials, professional courses, and technical competencies.
        </p>
      </motion.div>

      {/* Grid of Certificates */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {detailedCerts.map((cert, idx) => {
          const Icon = cert.Icon;
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              style={{
                background: '#FFFFFF',
                border: cert.isPlaceholder ? '1.5px dashed rgba(148, 163, 184, 0.4)' : `1px solid ${cert.color}35`,
                borderRadius: 22,
                padding: '2rem',
                boxShadow: cert.isPlaceholder ? 'none' : `0 12px 36px ${cert.color}0D`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Gradient */}
              {!cert.isPlaceholder && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${cert.color}, #38BDF8)`,
                  }}
                />
              )}

              <div>
                {/* Header: Icon + Category + Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon c={cert.color} s={22} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: cert.isPlaceholder ? '#64748B' : cert.color,
                        background: `${cert.isPlaceholder ? '#64748B' : cert.color}15`,
                        padding: '3px 10px',
                        borderRadius: 100,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {cert.status}
                    </span>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h2
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    marginBottom: 6,
                  }}
                >
                  {cert.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: cert.color,
                    marginBottom: '1.25rem',
                  }}
                >
                  {cert.issuer}
                </p>

                {/* Skills Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#475569',
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        padding: '4px 10px',
                        borderRadius: 6,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Credential ID / Verification Link */}
              <div
                style={{
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.72rem',
                    color: '#94A3B8',
                    letterSpacing: '0.04em',
                  }}
                >
                  ID: {cert.credentialId}
                </span>

                {!cert.isPlaceholder && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-space-grotesk)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: cert.color,
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <span>Verify</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
