'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'shingolesakshi@gmail.com',
    href: 'mailto:shingolesakshi@gmail.com',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91-8369238055',
    href: 'tel:+918369238055',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Kalyan, India',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 9rem) 2rem',
        background: '#151515',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(98,87,232,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Large editorial heading */}
        <div style={{ marginBottom: '4rem' }}>
          {['LET\'S BUILD', 'SOMETHING', 'USEFUL.'].map((line, i) => (
            <motion.h2
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: i === 2 ? '#6257E8' : '#fff',
                display: 'block',
              }}
            >
              {line}
            </motion.h2>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: 380,
              }}
            >
              I&apos;m open to internships, collaborations, and interesting problems. If you&apos;re working on something meaningful, let&apos;s talk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactDetails.map((detail, i) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6257E8',
                      flexShrink: 0,
                    }}
                  >
                    {detail.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 500,
                        fontSize: '0.68rem',
                        letterSpacing: '0.1em',
                        color: 'rgba(255,255,255,0.35)',
                        textTransform: 'uppercase',
                        marginBottom: '0.15rem',
                      }}
                    >
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        data-cursor-label="↗"
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.95rem',
                          color: '#fff',
                          textDecoration: 'none',
                          cursor: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#6257E8')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.95rem',
                          color: '#fff',
                        }}
                      >
                        {detail.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20,
              padding: '2.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              GET IN TOUCH
            </p>

            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Have a project in mind? A question? Or just want to say hi? My inbox is always open.
            </p>

            <a
              href="mailto:shingolesakshi@gmail.com"
              data-cursor-label="HELLO"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: '#6257E8',
                color: '#fff',
                borderRadius: 100,
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                cursor: 'none',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(98,87,232,0.45)';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              SAY HELLO
              <ArrowRight size={16} />
            </a>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: 'rgba(255,255,255,0.08)',
                margin: '2rem 0',
              }}
            />

            <p
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.04em',
              }}
            >
              Usually responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
