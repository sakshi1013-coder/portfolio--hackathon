'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function AmbientLivingBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse Parallax Values for Depth Effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 35, damping: 20 };
  const smoothMouseX = useSpring(mouseX, { ...springConfig });
  const smoothMouseY = useSpring(mouseY, { ...springConfig });

  const gridX = useTransform(smoothMouseX, [0, 1], [-12, 12]);
  const gridY = useTransform(smoothMouseY, [0, 1], [-12, 12]);

  const auroraX = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const auroraY = useTransform(smoothMouseY, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Particle / Star Dust Canvas Animation (Diagonal Upward Drift)
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
      initParticles();
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const colors = [
      'rgba(124, 58, 237, 0.45)', // Violet
      'rgba(2, 132, 199, 0.40)',  // Sky Blue
      'rgba(236, 72, 153, 0.40)', // Pink
      'rgba(245, 158, 11, 0.35)', // Amber
      'rgba(16, 185, 129, 0.35)', // Emerald
      'rgba(255, 255, 255, 0.65)',// Pearl white
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 32000), 45); // Lightweight, non-distracting
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 1.5 + Math.random() * 2.5,
          speedX: 0.12 + Math.random() * 0.22, // Subtle rightward drift
          speedY: -(0.18 + Math.random() * 0.32), // Subtle upward drift
          opacity: 0.15 + Math.random() * 0.35,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: 0.0015 + Math.random() * 0.002,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    let time = 0;
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.y < -10) p.y = height + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity = p.opacity * (0.65 + 0.35 * Math.sin(time * p.pulseSpeed + p.pulseOffset));

        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentOpacity})`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
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
      }}
    >
      {/* ── 1. Base Atmospheric Sky Light ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #F8FAFC 0%, #FAF5FF 30%, #F0FDF4 65%, #EFF6FF 100%)',
        }}
      />

      {/* ── 2. Animated Aurora Morphing Gradient Blobs (Muted Blue, Pink, Violet, Amber) ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-20%',
          width: '140%',
          height: '140%',
          x: auroraX,
          y: auroraY,
          filter: 'blur(70px)',
          opacity: 0.62,
        }}
      >
        {/* Blob 1: Lavender / Violet (Top Left) */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '18%',
            width: '42vw',
            height: '42vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.28) 0%, rgba(192, 132, 252, 0.15) 50%, transparent 70%)',
            animation: 'auroraFloat1 18s ease-in-out infinite alternate',
          }}
        />

        {/* Blob 2: Soft Sky Blue / Cyan (Top Right) */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '38vw',
            height: '38vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.25) 0%, rgba(125, 211, 252, 0.14) 50%, transparent 70%)',
            animation: 'auroraFloat2 22s ease-in-out infinite alternate',
          }}
        />

        {/* Blob 3: Rose Pink (Bottom Left) */}
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '22%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.24) 0%, rgba(244, 114, 182, 0.12) 50%, transparent 70%)',
            animation: 'auroraFloat3 20s ease-in-out infinite alternate',
          }}
        />

        {/* Blob 4: Warm Sunset Gold / Amber (Bottom Right) */}
        <div
          style={{
            position: 'absolute',
            bottom: '18%',
            right: '20%',
            width: '36vw',
            height: '36vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, rgba(253, 230, 138, 0.12) 50%, transparent 70%)',
            animation: 'auroraFloat4 24s ease-in-out infinite alternate',
          }}
        />
      </motion.div>

      {/* ── 3. Central Spotlight Radial Pulse Glow (Behind Center Profile) ── */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(700px, 60vw)',
          height: 'min(700px, 60vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(245, 243, 255, 0.6) 40%, rgba(238, 242, 255, 0.2) 65%, transparent 80%)',
          filter: 'blur(35px)',
          zIndex: 1,
        }}
      />

      {/* ── 4. Floating Dust / Particle Field Canvas ── */}
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

      {/* ── 5. Parallax Dotted Depth Grid with Mouse Tilt ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-20px',
          x: gridX,
          y: gridY,
          backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.075) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          opacity: 0.75,
          zIndex: 3,
        }}
      />

      {/* ── 6. Glassmorphism Light Diffusion Layer ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.6) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 4,
        }}
      />

      {/* CSS Keyframe Animations for Organic Aurora Drift */}
      <style jsx>{`
        @keyframes auroraFloat1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(30px, -25px) scale(1.08);
          }
          100% {
            transform: translate(-20px, 15px) scale(0.95);
          }
        }
        @keyframes auroraFloat2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-35px, 20px) scale(1.06);
          }
          100% {
            transform: translate(25px, -30px) scale(0.96);
          }
        }
        @keyframes auroraFloat3 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-20px, -30px) scale(1.1);
          }
          100% {
            transform: translate(30px, 15px) scale(0.92);
          }
        }
        @keyframes auroraFloat4 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(25px, 25px) scale(1.05);
          }
          100% {
            transform: translate(-25px, -20px) scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}
