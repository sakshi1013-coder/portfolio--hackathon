'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroOrbit = dynamic(() => import('./HeroOrbit'), { ssr: false });

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetX: number;
  targetY: number;
  color: string;
}

const phases = [
  'PIXEL',
  'SAKSHI',
  'SAKSHI SHINGOLE',
  'HEADLINE',
] as const;

type Phase = typeof phases[number];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const phaseRef = useRef<Phase>('PIXEL');
  const rafRef = useRef<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase>('PIXEL');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // Generate letter pixel positions
    function getTextPixels(text: string, fontSize: number): { x: number; y: number }[] {
      const offscreen = document.createElement('canvas');
      offscreen.width = W();
      offscreen.height = H();
      const octx = offscreen.getContext('2d')!;
      octx.fillStyle = '#000';
      octx.font = `700 ${fontSize}px 'Space Grotesk', sans-serif`;
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      octx.fillText(text, W() / 2, H() / 2);
      const imageData = octx.getImageData(0, 0, W(), H());
      const pixels: { x: number; y: number }[] = [];
      const gap = 6;
      for (let y = 0; y < H(); y += gap) {
        for (let x = 0; x < W(); x += gap) {
          const i = (y * W() + x) * 4;
          if (imageData.data[i + 3] > 128) {
            pixels.push({ x, y });
          }
        }
      }
      return pixels;
    }

    function initParticles(count: number) {
      particlesRef.current = Array.from({ length: count }, () => ({
        x: W() / 2,
        y: H() / 2,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
        targetX: W() / 2,
        targetY: H() / 2,
        color: Math.random() > 0.6 ? '#6257E8' : '#151515',
      }));
    }

    function setTargets(pixels: { x: number; y: number }[]) {
      const ps = particlesRef.current;
      for (let i = 0; i < ps.length; i++) {
        const target = pixels[i % pixels.length];
        ps[i].targetX = target.x + (Math.random() - 0.5) * 3;
        ps[i].targetY = target.y + (Math.random() - 0.5) * 3;
      }
    }

    function scatterParticles() {
      particlesRef.current.forEach((p) => {
        p.targetX = Math.random() * W();
        p.targetY = Math.random() * H();
      });
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let frame = 0;

    function draw() {
      // ctx is guaranteed non-null — checked at useEffect entry
      const c = ctx!;
      c.clearRect(0, 0, W(), H());

      particlesRef.current.forEach((p) => {
        p.x = lerp(p.x, p.targetX, 0.04);
        p.y = lerp(p.y, p.targetY, 0.04);

        c.beginPath();
        c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        c.fillStyle = p.color;
        c.globalAlpha = p.opacity;
        c.fill();
      });

      c.globalAlpha = 1;
      frame++;
      rafRef.current = requestAnimationFrame(draw);
    }

    // Phase sequence
    const fontSize = Math.min(W() * 0.1, 80);

    initParticles(220);
    draw();

    // PIXEL phase: scatter for 0.5s
    setTimeout(() => {
      const pixels1 = getTextPixels('SAKSHI', fontSize);
      setTargets(pixels1);
      phaseRef.current = 'SAKSHI';
      setCurrentPhase('SAKSHI');
    }, 500);

    setTimeout(() => {
      const pixels2 = getTextPixels('SAKSHI SHINGOLE', Math.min(W() * 0.065, 52));
      setTargets(pixels2);
      phaseRef.current = 'SAKSHI SHINGOLE';
      setCurrentPhase('SAKSHI SHINGOLE');
    }, 1800);

    setTimeout(() => {
      scatterParticles();
      phaseRef.current = 'HEADLINE';
      setCurrentPhase('HEADLINE');
    }, 3000);

    setTimeout(() => {
      setShowContent(true);
    }, 3200);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#F7F8F6',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: showContent ? 0 : 1,
          transition: 'opacity 0.8s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle background gradients */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(98,87,232,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,234,255,0.5) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
        }}
        className="flex-col lg:flex-row"
      >
        {/* Left: typography */}
        <div style={{ flex: 1, maxWidth: 620 }}>
          {/* Pixel → Product tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              background: '#E9E7FF',
              borderRadius: 100,
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#6257E8',
                animation: 'pulse 2s infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                color: '#6257E8',
                textTransform: 'uppercase',
              }}
            >
              PIXEL → PRODUCT
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#151515',
              marginBottom: '1.5rem',
            }}
          >
            I BUILD IDEAS
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #6257E8 0%, #9b8cf7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              INTO EXPERIENCES.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              color: '#666666',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            Aspiring Software Engineer · Full Stack Developer · UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '1rem',
              color: '#666666',
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: '2rem',
            }}
          >
            I design and build user-friendly digital products across web, AI, cloud and modern software systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
              data-cursor-label="EXPLORE"
            >
              EXPLORE MY WORK
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1LB6TmrUWnymxveRIYBIzDS0cQz3wvtkZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              data-cursor-label="↗"
            >
              VIEW RESUME ↗
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: '3rem',
            }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              style={{
                width: 24,
                height: 36,
                border: '1.5px solid #E5E5E5',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '5px',
              }}
            >
              <div style={{ width: 3, height: 8, borderRadius: 2, background: '#6257E8' }} />
            </motion.div>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                color: '#666',
                textTransform: 'uppercase',
              }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* Right: orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.9 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <HeroOrbit />
        </motion.div>
      </motion.div>

      {/* Story breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
        }}
        className="hidden md:flex"
      >
        {['IDEA', 'DESIGN', 'CODE', 'BUILD', 'SCALE', 'IMPACT'].map((label, i) => (
          <span
            key={label}
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: '0.6rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: i === 0 ? '#6257E8' : '#999',
              textTransform: 'uppercase',
            }}
          >
            {label}{i < 5 && <span style={{ marginLeft: 6, color: '#CCC' }}>→</span>}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
