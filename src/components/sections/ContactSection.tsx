'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* Clean Vector SVGs */
const MailIcon = ({ c = '#6366F1', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = ({ c = '#6366F1', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = ({ c = '#6366F1', s = 22 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckCircleIcon = ({ c = '#10B981', s = 48 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const contactInfo = [
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'shingolesakshi@gmail.com',
    href: 'mailto:shingolesakshi@gmail.com',
    desc: 'Direct email for collaborations, hiring, and project inquiries.',
    action: 'Send Email ↗',
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    value: '+91-8369238055',
    href: 'tel:+918369238055',
    desc: 'Available for discussions during regular IST business hours.',
    action: 'Call Directly ↗',
  },
  {
    Icon: MapPinIcon,
    label: 'Location',
    value: 'Kalyan, Maharashtra, India',
    href: null,
    desc: 'Open to on-site, hybrid, and worldwide remote opportunities.',
    action: 'IST (UTC+5:30)',
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: '#6366F115', border: '1px solid #6366F130', borderRadius: 100, marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1' }} />
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: '#6366F1', textTransform: 'uppercase' }}>
            06 / GET IN TOUCH
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
          Let&apos;s collaborate &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            build something impactful.
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
          Have a software project in mind, an internship opportunity, or want to discuss full-stack & AI systems? Feel free to reach out.
        </p>
      </motion.div>

      {/* Main Grid: Direct Contact Cards + Interactive Message Form */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {contactInfo.map((info) => {
            const Icon = info.Icon;
            return (
              <div
                key={info.label}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: 20,
                  padding: '1.6rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: '#6366F115',
                    border: '1px solid #6366F130',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon c="#6366F1" s={22} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
                    {info.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>
                    {info.value}
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, marginBottom: 8 }}>
                    {info.desc}
                  </p>

                  {info.href ? (
                    <a
                      href={info.href}
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: '#6366F1',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      {info.action}
                    </a>
                  ) : (
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.74rem', fontWeight: 600, color: '#94A3B8' }}>
                      {info.action}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Social Profiles Grid */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: 20,
              padding: '1.5rem',
            }}
          >
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
              Online Presence
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href="https://github.com/sakshi1013-coder"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 10,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  textDecoration: 'none',
                }}
              >
                <span>GitHub</span>
                <span style={{ color: '#6366F1' }}>↗</span>
              </a>
              <a
                href="[REPLACE WITH LINKEDIN URL]"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 10,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  textDecoration: 'none',
                }}
              >
                <span>LinkedIn</span>
                <span style={{ color: '#6366F1' }}>↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: 24,
            padding: '2.25rem',
            boxShadow: '0 16px 40px rgba(99, 102, 241, 0.05)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '1.3rem',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: 6,
            }}
          >
            Send a Quick Message
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: '#64748B', marginBottom: '1.5rem' }}>
            I typically respond within 24 hours.
          </p>

          {submitted ? (
            <div
              style={{
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.06)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 16,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <CheckCircleIcon c="#10B981" s={48} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.2rem', fontWeight: 800, color: '#065F46', marginBottom: 6 }}>
                Message Sent Successfully!
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: '#047857', lineHeight: 1.6, maxWidth: 360, margin: '0 auto 1.5rem' }}>
                Thank you for reaching out, {formData.name}. I will get back to you at {formData.email} shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                style={{
                  padding: '8px 18px',
                  background: '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: 100,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: 12,
                    border: '1px solid #E2E8F0',
                    background: '#F8FAFC',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9rem',
                    color: '#0F172A',
                    outline: 'none',
                    transition: 'border 0.2s',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#6366F1')}
                  onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: 12,
                    border: '1px solid #E2E8F0',
                    background: '#F8FAFC',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9rem',
                    color: '#0F172A',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#6366F1')}
                  onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. Project Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: 12,
                    border: '1px solid #E2E8F0',
                    background: '#F8FAFC',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9rem',
                    color: '#0F172A',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#6366F1')}
                  onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, idea, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: 12,
                    border: '1px solid #E2E8F0',
                    background: '#F8FAFC',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.9rem',
                    color: '#0F172A',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#6366F1')}
                  onBlur={(e) => (e.target.style.borderColor = '#E2E8F0')}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: 6,
                  padding: '13px 20px',
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
                  color: '#FFFFFF',
                  border: 'none',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                SEND MESSAGE →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
