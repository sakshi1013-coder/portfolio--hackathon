'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollProgress from './ui/ScrollProgress';

const navLinks = [
  { label: 'WORK', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#toolbox' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

const tourSections = ['#about', '#projects', '#toolbox', '#achievements', '#contact'];
let tourIndex = 0;
let tourTimer: ReturnType<typeof setTimeout>;

function runTour() {
  if (tourIndex >= tourSections.length) {
    tourIndex = 0;
    return;
  }
  const el = document.querySelector(tourSections[tourIndex]);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    tourIndex++;
    tourTimer = setTimeout(runTour, 2800);
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 60));
    return () => unsub();
  }, [scrollY]);

  function handleTour() {
    clearTimeout(tourTimer);
    tourIndex = 0;
    runTour();
  }

  function handleNav(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(247,248,246,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 #E5E5E5' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            color: '#151515',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'none',
          }}
        >
          SAKSHI SHINGOLE
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              data-cursor-label="↗"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: '#666666',
                background: 'none',
                border: 'none',
                cursor: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#151515')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666666')}
            >
              {link.label}
            </button>
          ))}

          {/* Tour button */}
          <button
            onClick={handleTour}
            data-cursor-label="GO"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: '#6257E8',
              color: '#fff',
              borderRadius: '100px',
              border: 'none',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              cursor: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            ⚡ 60 SEC TOUR
          </button>

          <ScrollProgress />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'none' }}
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#151515', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#151515', transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#151515', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(247,248,246,0.98)',
            backdropFilter: 'blur(16px)',
            padding: '1.5rem 1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid #E5E5E5',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#151515',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'none',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { handleTour(); setMenuOpen(false); }}
            style={{
              marginTop: '0.5rem',
              padding: '10px 20px',
              background: '#6257E8',
              color: '#fff',
              borderRadius: '100px',
              border: 'none',
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500,
              fontSize: '0.85rem',
              cursor: 'none',
              alignSelf: 'flex-start',
            }}
          >
            ⚡ 60 SEC TOUR
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
