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

const GithubIcon = ({ c = '#0F172A', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ c = '#0077B5', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

const InstagramIcon = ({ c = '#E1306C', s = 18 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XTwitterIcon = ({ c = '#0F172A', s = 17 }: { c?: string; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const contactInfo = [
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'shingolesakshi@gmail.com',
    href: 'mailto:shingolesakshi@gmail.com',
    desc: 'Direct email for collaborations, hiring, and project inquiries.',
    action: 'Open in Email App ↗',
    color: '#6366F1',
  },
  {
    Icon: PhoneIcon,
    label: 'Phone / WhatsApp',
    value: '+91-8369238055',
    href: 'tel:+918369238055',
    whatsappHref: 'https://wa.me/918369238055?text=Hi%20Sakshi,%20I%20saw%20your%20portfolio!',
    desc: 'Available for calls & WhatsApp messages during IST hours.',
    action: 'Call Directly ↗',
    color: '#10B981',
  },
  {
    Icon: MapPinIcon,
    label: 'Location',
    value: 'Kalyan, Maharashtra, India',
    href: 'https://maps.google.com/?q=Kalyan,+Maharashtra,+India',
    desc: 'Open to on-site, hybrid, and worldwide remote opportunities.',
    action: 'View on Google Maps ↗',
    color: '#F59E0B',
  },
];

const socialProfiles = [
  {
    name: 'LinkedIn',
    handle: 'sakshi-shingole',
    url: 'https://www.linkedin.com/in/sakshi-shingole-484913315/',
    Icon: LinkedinIcon,
    color: '#0077B5',
    bg: 'rgba(0, 119, 181, 0.08)',
    border: 'rgba(0, 119, 181, 0.25)',
  },
  {
    name: 'Instagram',
    handle: '@sakshi_shingole',
    url: 'https://www.instagram.com/sakshi_shingole?igsh=azdtYWF6azRpeHA1',
    Icon: InstagramIcon,
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.08)',
    border: 'rgba(225, 48, 108, 0.25)',
  },
  {
    name: 'X (Twitter)',
    handle: '@saku_8055',
    url: 'https://x.com/saku_8055?t=yTgvW2O49wvmDHFF0X7Y5A&s=09',
    Icon: XTwitterIcon,
    color: '#0F172A',
    bg: 'rgba(15, 23, 42, 0.06)',
    border: 'rgba(15, 23, 42, 0.18)',
  },
  {
    name: 'GitHub',
    handle: 'sakshi1013-coder',
    url: 'https://github.com/sakshi1013-coder',
    Icon: GithubIcon,
    color: '#0F172A',
    bg: 'rgba(15, 23, 42, 0.06)',
    border: 'rgba(15, 23, 42, 0.18)',
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Message from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Sakshi,\n\n${formData.message.trim()}\n\n---\nSender Information:\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    return `mailto:shingolesakshi@gmail.com?subject=${subject}&body=${body}`;
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Message from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Sakshi,\n\n${formData.message.trim()}\n\n---\nSender Information:\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=shingolesakshi@gmail.com&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    // Automatically trigger native email client in app
    window.location.href = getMailtoUrl();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem 6rem' }}>
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '2.5rem' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: 100, marginBottom: '1rem' }}>
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
          <span style={{ color: '#6366F1' }}>
            build something meaningful.
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
        {/* Left Column: Direct Contact Info + Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          {contactInfo.map((info) => {
            const Icon = info.Icon;
            return (
              <motion.a
                key={info.label}
                href={info.href || '#'}
                target={info.href?.startsWith('http') ? '_blank' : '_self'}
                rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: `1.5px solid ${info.color}25`,
                  borderRadius: 20,
                  padding: '1.6rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16,
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: info.href ? 'pointer' : 'default',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 14,
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon c={info.color} s={22} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
                    {info.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>
                    {info.value}
                  </div>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, marginBottom: 10 }}>
                    {info.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: info.color,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      {info.action}
                    </span>

                    {info.whatsappHref && (
                      <a
                        href={info.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#10B981',
                          background: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: 100,
                          padding: '3px 10px',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        WhatsApp Chat ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.a>
            );
          })}

          {/* Social Profiles Icons */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.92)',
              border: '1px solid rgba(0, 0, 0, 0.07)',
              borderRadius: 20,
              padding: '1.25rem 1.5rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
              Online Presence & Socials
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              {socialProfiles.map((p) => {
                const IconComponent = p.Icon;
                return (
                  <motion.a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${p.name} (${p.handle})`}
                    aria-label={p.name}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      background: p.bg,
                      border: `1.5px solid ${p.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                  >
                    <IconComponent c={p.color} s={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(255, 255, 255, 0.94)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            borderRadius: 24,
            padding: '2.25rem',
            boxShadow: '0 16px 40px rgba(99, 102, 241, 0.06)',
            backdropFilter: 'blur(24px)',
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
            Send a Direct Message
          </h2>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.88rem', color: '#64748B', marginBottom: '1.5rem' }}>
            Clicking send will automatically open your email app with your message pre-populated.
          </p>

          {submitted ? (
            <div
              style={{
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 20,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
                <CheckCircleIcon c="#10B981" s={52} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.25rem', fontWeight: 800, color: '#065F46', marginBottom: 6 }}>
                Message Prepared & Ready!
              </h3>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#047857', lineHeight: 1.6, maxWidth: 420, margin: '0 auto 1.5rem' }}>
                Your email app has been triggered. You can also use the buttons below to open directly in your preferred client:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320, margin: '0 auto 1.5rem' }}>
                <a
                  href={getMailtoUrl()}
                  style={{
                    padding: '11px 18px',
                    background: '#6366F1',
                    color: '#FFFFFF',
                    borderRadius: 12,
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  <MailIcon c="#FFFFFF" s={18} />
                  <span>Open in Mail App ↗</span>
                </a>

                <a
                  href={getGmailWebUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '11px 18px',
                    background: '#FFFFFF',
                    color: '#0F172A',
                    border: '1px solid #CBD5E1',
                    borderRadius: 12,
                    fontFamily: 'var(--font-space-grotesk)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <span>Open in Gmail Web ↗</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                style={{
                  padding: '6px 14px',
                  background: 'transparent',
                  color: '#059669',
                  border: 'none',
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                ← Write Another Message
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
                  placeholder="e.g. Full-Stack Project Collaboration / Internship"
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
                OPEN IN EMAIL APP & SEND →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
