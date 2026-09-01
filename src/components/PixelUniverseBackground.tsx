'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TechSprite {
  id: string;
  name: string;
  category: string;
  color: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  fact: string;
  funIcon: string;
  project: {
    title: string;
    tagline: string;
    badge: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  svgRender: (color: string) => React.ReactNode;
}

const TECH_SPRITES: TechSprite[] = [
  {
    id: 'moon',
    name: 'Pixel Moon',
    category: 'AEROSPACE & COMPUTING',
    color: '#F59E0B',
    top: '8%',
    right: '10%',
    funIcon: '🌙',
    fact: 'The Apollo 11 guidance computer operated on just 4 KB of RAM and 72 KB of ROM at 2.048 MHz. Your browser tab running this portfolio has over 500,000× more memory!',
    project: {
      title: 'OrbitalShield / SpaceOps',
      tagline: 'High-availability satellite telemetry streaming & orbit trajectory anomaly detection system.',
      badge: 'SPACE ARCHITECTURE',
      githubUrl: 'https://github.com/sakshi1013-coder/SpaceOps',
    },
    svgRender: () => (
      <svg width="36" height="36" viewBox="0 0 14 14" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="4" y="1" width="5" height="1" fill="#FBBF24" />
        <rect x="2" y="2" width="3" height="1" fill="#FBBF24" />
        <rect x="8" y="2" width="3" height="1" fill="#FBBF24" />
        <rect x="1" y="3" width="2" height="2" fill="#FBBF24" />
        <rect x="10" y="3" width="2" height="1" fill="#FBBF24" />
        <rect x="0" y="5" width="2" height="4" fill="#FBBF24" />
        <rect x="1" y="9" width="2" height="2" fill="#FBBF24" />
        <rect x="2" y="11" width="3" height="1" fill="#FBBF24" />
        <rect x="8" y="11" width="3" height="1" fill="#FBBF24" />
        <rect x="4" y="12" width="5" height="1" fill="#FBBF24" />
        <rect x="3" y="4" width="3" height="6" fill="#FAF5FF" />
        <rect x="6" y="3" width="4" height="8" fill="#FAF5FF" />
      </svg>
    ),
  },
  {
    id: 'planet',
    name: 'Pixel Saturn',
    category: 'HEALTHTECH & AI ENGINE',
    color: '#EC4899',
    bottom: '9%',
    left: '8%',
    funIcon: '🪐',
    fact: 'The very first computer mouse in 1964 was carved from wood by Douglas Engelbart and had two perpendicular metallic wheels inside.',
    project: {
      title: 'Aura — 1st Place Hackathon Winner',
      tagline: 'Women\'s health guidance system featuring a Reverse-Chronobiology Engine, 10s swiper check-in, and cycle-synced nutrition.',
      badge: '1ST PLACE WINNER',
      liveUrl: 'https://aura-sh.vercel.app/',
      githubUrl: 'https://github.com/sakshi1013-coder/aura-sh',
    },
    svgRender: () => (
      <svg width="44" height="30" viewBox="0 0 16 10" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="5" y="2" width="6" height="6" fill="#C084FC" />
        <rect x="6" y="1" width="4" height="8" fill="#A855F7" />
        <rect x="7" y="3" width="3" height="2" fill="#E9D5FF" />
        <rect x="1" y="5" width="4" height="1" fill="#F472B6" />
        <rect x="11" y="3" width="4" height="1" fill="#F472B6" />
        <rect x="0" y="6" width="3" height="1" fill="#FBCFE8" />
        <rect x="13" y="2" width="3" height="1" fill="#FBCFE8" />
      </svg>
    ),
  },
  {
    id: 'star',
    name: 'Cyber Star',
    category: 'AGENTIC AUTOMATION',
    color: '#0284C7',
    top: '12%',
    left: '8%',
    funIcon: '✦',
    fact: 'The word "bug" was popularized in 1947 when computer pioneer Grace Hopper found a literal moth trapped in the Harvard Mark II relay circuits!',
    project: {
      title: 'ModuleHub — AI Agent Engine',
      tagline: 'Autonomous multi-node n8n workflow engine integrating OpenAI GPT-4o with Airtable & Outlook APIs.',
      badge: 'GENAI AUTOMATION',
      liveUrl: 'https://module-hub-three.vercel.app/',
      githubUrl: 'https://github.com/sakshi1013-coder/ModuleHub',
    },
    svgRender: () => (
      <svg width="28" height="28" viewBox="0 0 8 8" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="3" y="1" width="2" height="6" fill="#38BDF8" />
        <rect x="1" y="3" width="6" height="2" fill="#38BDF8" />
        <rect x="3" y="3" width="2" height="2" fill="#BAE6FD" />
      </svg>
    ),
  },
  {
    id: 'spark',
    name: 'Inclusion Spark',
    category: 'ACCESSIBLE AI TECH',
    color: '#EC4899',
    bottom: '12%',
    right: '8%',
    funIcon: '⚡',
    fact: 'Over 1 billion people worldwide experience some form of disability. Building accessible, inclusive software creates a more empowering web for everyone!',
    project: {
      title: 'Samavesh — Inclusive Learning',
      tagline: 'Empowering neurodiverse learners and speech/hearing impaired students with real-time sign language synthesis & adaptive UI.',
      badge: 'ACCESSIBILITY PLATFORM',
      liveUrl: 'https://samavesh-frontend.vercel.app/',
      githubUrl: 'https://github.com/sakshi1013-coder/Samavesh-Frontend',
    },
    svgRender: () => (
      <svg width="26" height="26" viewBox="0 0 8 8" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="3" y="1" width="2" height="6" fill="#EC4899" />
        <rect x="1" y="3" width="6" height="2" fill="#EC4899" />
        <rect x="3" y="3" width="2" height="2" fill="#FCE7F3" />
      </svg>
    ),
  },
  {
    id: 'satellite',
    name: 'Pixel Satellite',
    category: 'ENTERPRISE CREDENTIALS',
    color: '#0284C7',
    top: '46%',
    right: '5%',
    funIcon: '🛰️',
    fact: 'Linus Torvalds created the initial release of Git in just 10 days in 2005 to manage the Linux kernel development after BitKeeper revoked free access.',
    project: {
      title: 'Accredian Enterprise Platform',
      tagline: 'Full-stack enterprise credentialing & partner referral management dashboard with Prisma & PostgreSQL.',
      badge: 'ENTERPRISE PLATFORM',
      liveUrl: 'https://accredian-enterprise-omega-nine.vercel.app/',
      githubUrl: 'https://github.com/sakshi1013-coder/accredian-enterprise',
    },
    svgRender: () => (
      <svg width="32" height="32" viewBox="0 0 12 12" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="2" y="2" width="3" height="3" fill="#0284C7" />
        <rect x="7" y="7" width="3" height="3" fill="#0284C7" />
        <rect x="5" y="5" width="2" height="2" fill="#FBBF24" />
        <rect x="4" y="6" width="4" height="1" fill="#38BDF8" />
        <rect x="6" y="4" width="1" height="4" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    id: 'crystal',
    name: 'Code Crystal',
    category: 'FINTECH & ANALYTICS',
    color: '#6366F1',
    top: '52%',
    left: '5%',
    funIcon: '💎',
    fact: 'JavaScript was created by Brendan Eich in just 10 days in May 1995 under the code name "Mocha" before being renamed LiveScript and finally JavaScript!',
    project: {
      title: 'FundFlow — FinTech Platform',
      tagline: 'Financial expense tracking & budget allocation platform with interactive chart analytics and CSV exports.',
      badge: 'FINTECH ENGINE',
      liveUrl: 'https://fund-flow-liart.vercel.app/',
      githubUrl: 'https://github.com/sakshi1013-coder/FundFlow',
    },
    svgRender: () => (
      <svg width="26" height="26" viewBox="0 0 10 10" fill="none" style={{ imageRendering: 'pixelated' }}>
        <rect x="4" y="1" width="2" height="1" fill="#6366F1" />
        <rect x="2" y="2" width="6" height="2" fill="#818CF8" />
        <rect x="1" y="4" width="8" height="2" fill="#6366F1" />
        <rect x="2" y="6" width="6" height="2" fill="#4F46E5" />
        <rect x="4" y="8" width="2" height="1" fill="#3730A3" />
        <rect x="4" y="4" width="2" height="2" fill="#EEF2FF" />
      </svg>
    ),
  },
];

export default function PixelUniverseBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSpriteId, setActiveSpriteId] = useState<string | null>(null);

  // Mouse Parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 25, damping: 20 };
  const smoothMouseX = useSpring(mouseX, { ...springConfig });
  const smoothMouseY = useSpring(mouseY, { ...springConfig });

  const layer1X = useTransform(smoothMouseX, [0, 1], [-18, 18]);
  const layer1Y = useTransform(smoothMouseY, [0, 1], [-14, 14]);
  const layer2X = useTransform(smoothMouseX, [0, 1], [-26, 26]);
  const layer2Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  const headphoneParallaxX = useTransform(smoothMouseX, [0, 1], [-10, 10]);
  const headphoneParallaxY = useTransform(smoothMouseY, [0, 1], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // 8-Bit Pixel Starfield & Pixel Shooting Stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    interface PixelStar {
      x: number;
      y: number;
      size: number;
      color: string;
      speed: number;
      offset: number;
    }

    interface PixelShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      color: string;
      life: number;
      maxLife: number;
    }

    const pastelColors = [
      '#7C3AED',
      '#EC4899',
      '#0284C7',
      '#10B981',
      '#F59E0B',
      '#A78BFA',
      '#64748B',
    ];

    let stars: PixelStar[] = [];
    let shootingStars: PixelShootingStar[] = [];

    const initStars = () => {
      stars = [];
      const starCount = Math.min(Math.floor((width * height) / 5500), 180);
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() < 0.7 ? 3 : Math.random() < 0.9 ? 4 : 6;
        stars.push({
          x: Math.floor(Math.random() * (width / 3)) * 3,
          y: Math.floor(Math.random() * (height / 3)) * 3,
          size,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          speed: 0.003 + Math.random() * 0.006,
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.006) {
        shootingStars.push({
          x: Math.random() * (width * 0.8),
          y: Math.random() * (height * 0.4),
          length: Math.floor(20 + Math.random() * 35),
          speed: 8 + Math.random() * 6,
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          life: 0,
          maxLife: 40 + Math.random() * 20,
        });
      }
    };

    initStars();

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let time = 0;
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Render twinkling square pixel stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const alpha = 0.25 + 0.65 * (0.5 + 0.5 * Math.sin(time * star.speed * 60 + star.offset));
        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(star.x, star.y, star.size, star.size);

        if (star.size >= 5 && alpha > 0.6) {
          ctx.fillRect(star.x - star.size, star.y, star.size * 3, star.size);
          ctx.fillRect(star.x, star.y - star.size, star.size, star.size * 3);
        }
      }

      // Render shooting stars
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.speed;
        ss.y += ss.speed * 0.65;
        ss.life++;

        const trailAlpha = 1 - ss.life / ss.maxLife;
        ctx.fillStyle = ss.color;
        ctx.globalAlpha = Math.max(0, trailAlpha * 0.85);

        const step = 4;
        const count = Math.floor(ss.length / step);
        for (let j = 0; j < count; j++) {
          const segAlpha = (1 - j / count) * trailAlpha;
          ctx.globalAlpha = Math.max(0, segAlpha);
          ctx.fillRect(
            Math.floor((ss.x - j * step * 1.2) / 3) * 3,
            Math.floor((ss.y - j * step * 0.78) / 3) * 3,
            3,
            3
          );
        }

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        background: '#FAF9FF',
      }}
    >
      {/* ── 1. Soft Pastel Dream Gradient Base ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #F5F3FF 0%, #FAF5FF 35%, #FFF7ED 70%, #F0FDF4 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── 2. Parallax Pastel Pixel Nebulae ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-20%',
          width: '140%',
          height: '140%',
          x: layer1X,
          y: layer1Y,
          filter: 'blur(75px)',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '12%',
            left: '15%',
            width: '45vw',
            height: '45vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.45) 0%, rgba(192, 132, 252, 0.18) 50%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '12%',
            width: '42vw',
            height: '42vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(186, 230, 253, 0.6) 0%, rgba(125, 211, 252, 0.22) 50%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '22%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(254, 205, 211, 0.55) 0%, rgba(251, 146, 60, 0.15) 50%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '18%',
            width: '38vw',
            height: '38vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167, 243, 208, 0.5) 0%, rgba(110, 231, 183, 0.18) 50%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* ── 3. AUTHENTIC RETRO 8-BIT HEADPHONE WATERMARK SILHOUETTE (10–12% Opacity) ── */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(480px, 46vw, 680px)',
          height: 'clamp(480px, 46vw, 680px)',
          pointerEvents: 'none',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          style={{
            x: headphoneParallaxX,
            y: headphoneParallaxY,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          animate={{
            scale: [1, 1.02, 1],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="/pixel_headphones.png"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              imageRendering: 'pixelated',
              mixBlendMode: 'multiply',
              opacity: 0.11,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>

      {/* ── 4. HTML5 Canvas: 8-Bit Pixel Starfield & Pixel Shooting Stars ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── 5. Retro Pixel Grid Pattern ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.7,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* ── 6. INTERACTIVE 8-BIT PIXEL SPRITES WITH TECH FACTS & PROJECT LINKS ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          x: layer2X,
          y: layer2Y,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        {TECH_SPRITES.map((sprite) => {
          const isActive = activeSpriteId === sprite.id;

          return (
            <div
              key={sprite.id}
              style={{
                position: 'absolute',
                top: sprite.top,
                bottom: sprite.bottom,
                left: sprite.left,
                right: sprite.right,
                pointerEvents: 'auto',
              }}
              onMouseEnter={() => setActiveSpriteId(sprite.id)}
              onMouseLeave={() => setActiveSpriteId((cur) => (cur === sprite.id ? null : cur))}
            >
              {/* Interactive Sprite Trigger Button */}
              <motion.button
                onClick={() => setActiveSpriteId((cur) => (cur === sprite.id ? null : sprite.id))}
                whileHover={{ scale: 1.35, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -6, 0],
                  filter: isActive
                    ? `drop-shadow(0 0 12px ${sprite.color})`
                    : `drop-shadow(0 0 4px ${sprite.color}60)`,
                }}
                transition={{
                  y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 0.2 },
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  outline: 'none',
                }}
                title={`Click for Tech Trivia & Project link!`}
              >
                {/* Glowing Pulse Aura */}
                <div
                  style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${sprite.color}35 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* SVG Pixel Artwork */}
                {sprite.svgRender(sprite.color)}

                {/* Tiny Floating "✦" Hint on Hover */}
                <span
                  style={{
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    fontSize: '0.65rem',
                    color: sprite.color,
                    fontWeight: 900,
                  }}
                >
                  ✦
                </span>
              </motion.button>

              {/* ── Interactive Tech Fact & Project Popover Card ── */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: sprite.bottom ? 12 : -12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: sprite.bottom ? 8 : -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute',
                      zIndex: 100,
                      top: sprite.bottom ? 'auto' : '110%',
                      bottom: sprite.bottom ? '110%' : 'auto',
                      left: sprite.right ? 'auto' : -20,
                      right: sprite.right ? -20 : 'auto',
                      width: 'min(310px, 85vw)',
                      background: 'rgba(255, 255, 255, 0.98)',
                      border: `1.5px solid ${sprite.color}50`,
                      borderRadius: 18,
                      padding: '16px',
                      boxShadow: `0 16px 40px rgba(0, 0, 0, 0.12), 0 0 20px ${sprite.color}25`,
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      pointerEvents: 'auto',
                      cursor: 'default',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: '1rem' }}>{sprite.funIcon}</span>
                        <span
                          style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            color: sprite.color,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {sprite.category}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSpriteId(null);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#94A3B8',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          padding: 2,
                          lineHeight: 1,
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Fact Body */}
                    <p
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.86rem',
                        color: '#1E293B',
                        lineHeight: 1.55,
                        margin: '0 0 10px 0',
                      }}
                    >
                      {sprite.fact}
                    </p>

                    {/* Fun Easter Egg footer tag */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background: `${sprite.color}15`,
                        borderRadius: 8,
                        padding: '4px 10px',
                        width: 'fit-content',
                      }}
                    >
                      <span style={{ fontSize: '0.75rem' }}>✨</span>
                      <span
                        style={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: sprite.color,
                        }}
                      >
                        Interactive Tech Trivia
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
