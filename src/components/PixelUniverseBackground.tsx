'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function PixelUniverseBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse Parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 25, damping: 20 };
  const smoothMouseX = useSpring(mouseX, { ...springConfig });
  const smoothMouseY = useSpring(mouseY, { ...springConfig });

  const layer1X = useTransform(smoothMouseX, [0, 1], [-18, 18]);
  const layer1Y = useTransform(smoothMouseY, [0, 1], [-14, 14]);
  const layer2X = useTransform(smoothMouseX, [0, 1], [-30, 30]);
  const layer2Y = useTransform(smoothMouseY, [0, 1], [-22, 22]);
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
      '#7C3AED', // Soft violet
      '#EC4899', // Pastel pink
      '#0284C7', // Sky cyan
      '#10B981', // Mint green
      '#F59E0B', // Warm peach/amber
      '#A78BFA', // Lavender
      '#64748B', // Soft slate
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
          x: Math.floor(Math.random() * width * 0.8),
          y: Math.floor(Math.random() * height * 0.4),
          length: 40 + Math.random() * 35,
          speed: 7 + Math.random() * 5,
          color: pastelColors[Math.floor(Math.random() * 4)],
          life: 0,
          maxLife: 30 + Math.random() * 20,
        });
      }
    };

    initStars();

    let time = 0;
    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Blocky Pixel Stars
      stars.forEach((star) => {
        const pulse = Math.sin(time * star.speed + star.offset);
        const opacity = Math.max(0.18, Math.min(0.85, 0.45 + pulse * 0.4));

        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;

        if (star.size >= 6) {
          ctx.fillRect(star.x + 2, star.y, 2, 6);
          ctx.fillRect(star.x, star.y + 2, 6, 2);
        } else {
          ctx.fillRect(star.x, star.y, star.size, star.size);
        }
      });

      // 2. Draw Pixel Shooting Stars
      spawnShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life += 1;
        const progress = ss.life / ss.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.85;

        ctx.fillStyle = ss.color;
        ctx.globalAlpha = alpha;

        const steps = Math.floor(ss.length / 4);
        for (let s = 0; s < steps; s++) {
          const px = ss.x - s * 4;
          const py = ss.y - s * 4;
          const trailAlpha = (1 - s / steps) * alpha;
          ctx.globalAlpha = trailAlpha;
          ctx.fillRect(Math.floor(px / 3) * 3, Math.floor(py / 3) * 3, 3, 3);
        }

        ss.x += ss.speed;
        ss.y += ss.speed;

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
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
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
      {/* Positioned directly at the exact center behind profile photo & orbit ring */}
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

      {/* ── 4. Cute 8-Bit Pixel Celestial Sprites (Moon, Planets, Stars) ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          x: layer2X,
          y: layer2Y,
          pointerEvents: 'none',
        }}
      >
        {/* Pixel Crescent Moon (Top-Right) */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            right: '12%',
            width: 38,
            height: 38,
            opacity: 0.75,
            imageRendering: 'pixelated',
          }}
        >
          <svg width="38" height="38" viewBox="0 0 14 14" fill="none" style={{ imageRendering: 'pixelated' }}>
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
        </div>

        {/* Pixel Ringed Planet (Bottom-Left) */}
        <div
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '8%',
            width: 48,
            height: 32,
            opacity: 0.7,
            imageRendering: 'pixelated',
          }}
        >
          <svg width="48" height="32" viewBox="0 0 16 10" fill="none" style={{ imageRendering: 'pixelated' }}>
            <rect x="5" y="2" width="6" height="6" fill="#C084FC" />
            <rect x="6" y="1" width="4" height="8" fill="#A855F7" />
            <rect x="7" y="3" width="3" height="2" fill="#E9D5FF" />
            <rect x="1" y="5" width="4" height="1" fill="#F472B6" />
            <rect x="11" y="3" width="4" height="1" fill="#F472B6" />
            <rect x="0" y="6" width="3" height="1" fill="#FBCFE8" />
            <rect x="13" y="2" width="3" height="1" fill="#FBCFE8" />
          </svg>
        </div>

        {/* Pixel Cluster Star 1 (Top-Left) */}
        <div
          style={{
            position: 'absolute',
            top: '12%',
            left: '10%',
            width: 22,
            height: 22,
            opacity: 0.6,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 8 8" fill="none" style={{ imageRendering: 'pixelated' }}>
            <rect x="3" y="1" width="2" height="6" fill="#38BDF8" />
            <rect x="1" y="3" width="6" height="2" fill="#38BDF8" />
            <rect x="3" y="3" width="2" height="2" fill="#BAE6FD" />
          </svg>
        </div>

        {/* Pixel Flower/Cross Sprite (Bottom-Right) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '10%',
            width: 20,
            height: 20,
            opacity: 0.6,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 8 8" fill="none" style={{ imageRendering: 'pixelated' }}>
            <rect x="3" y="1" width="2" height="6" fill="#EC4899" />
            <rect x="1" y="3" width="6" height="2" fill="#EC4899" />
            <rect x="3" y="3" width="2" height="2" fill="#FBCFE8" />
          </svg>
        </div>
      </motion.div>

      {/* ── 5. HTML5 Canvas: 8-Bit Pixel Starfield & Pixel Shooting Stars ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      />

      {/* ── 6. Retro Pixel Grid Pattern ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(124, 58, 237, 0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.7,
          zIndex: 3,
        }}
      />
    </div>
  );
}
