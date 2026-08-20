'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse Parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 30, damping: 22 };
  const smoothMouseX = useSpring(mouseX, { ...springConfig });
  const smoothMouseY = useSpring(mouseY, { ...springConfig });

  const nebulaX = useTransform(smoothMouseX, [0, 1], [-25, 25]);
  const nebulaY = useTransform(smoothMouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Starfield & Shooting Stars Canvas Animation
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

    interface Star {
      x: number;
      y: number;
      size: number;
      baseOpacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      hue: number;
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      life: number;
      maxLife: number;
    }

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    const initStars = () => {
      stars = [];
      const starCount = Math.min(Math.floor((width * height) / 4500), 280);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() < 0.85 ? Math.random() * 1.4 + 0.5 : Math.random() * 2.2 + 1.2,
          baseOpacity: 0.2 + Math.random() * 0.7,
          twinkleSpeed: 0.002 + Math.random() * 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          hue: Math.random() < 0.3 ? 260 : Math.random() < 0.6 ? 210 : 0, // Violet, cyan, or pure white
        });
      }
    };

    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.008) {
        shootingStars.push({
          x: Math.random() * width * 0.8 + width * 0.1,
          y: Math.random() * (height * 0.4),
          length: 70 + Math.random() * 60,
          speed: 8 + Math.random() * 7,
          angle: (Math.PI / 4) + (Math.random() - 0.5) * 0.2, // ~45 degrees diagonal
          opacity: 1,
          life: 0,
          maxLife: 35 + Math.random() * 25,
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

      // 1. Render Twinkling Stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle * 0.35));

        if (star.hue === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        } else if (star.hue === 260) {
          ctx.fillStyle = `rgba(216, 180, 254, ${currentOpacity})`; // soft purple
        } else {
          ctx.fillStyle = `rgba(186, 230, 253, ${currentOpacity})`; // soft cyan
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Spawn and Render Rare Shooting Stars
      spawnShootingStar();

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life += 1;

        const progress = ss.life / ss.maxLife;
        const currentOpacity = Math.sin(progress * Math.PI); // Smooth fade in and out

        const endX = ss.x + Math.cos(ss.angle) * ss.length;
        const endY = ss.y + Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, 0)`);
        grad.addColorStop(0.8, `rgba(167, 139, 250, ${currentOpacity * 0.8})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${currentOpacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Advance shooting star head
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

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
        background: '#040714',
      }}
    >
      {/* ── 1. Deep Space Radial Core Background ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 85% 75% at 50% 45%, #0B112C 0%, #060919 55%, #02040A 100%)',
        }}
      />

      {/* ── 2. Drifting Vivid Nebula Aurora Gradient Blobs ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-25%',
          width: '150%',
          height: '150%',
          x: nebulaX,
          y: nebulaY,
          filter: 'blur(80px)',
          opacity: 0.68,
        }}
      >
        {/* Deep Cosmic Violet Nebula (Top Left) */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '18%',
            width: '45vw',
            height: '45vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.42) 0%, rgba(91, 33, 182, 0.2) 50%, transparent 70%)',
            animation: 'nebulaDrift1 24s ease-in-out infinite alternate',
          }}
        />

        {/* Celestial Cyan / Electric Blue Nebula (Top Right) */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.38) 0%, rgba(3, 105, 161, 0.18) 50%, transparent 70%)',
            animation: 'nebulaDrift2 28s ease-in-out infinite alternate',
          }}
        />

        {/* Cosmic Magenta / Pink Nebula (Bottom Center / Left) */}
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '28%',
            width: '42vw',
            height: '42vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.32) 0%, rgba(190, 24, 93, 0.15) 50%, transparent 70%)',
            animation: 'nebulaDrift3 22s ease-in-out infinite alternate',
          }}
        />

        {/* Warm Amber / Stellar Glow Nebula (Bottom Right) */}
        <div
          style={{
            position: 'absolute',
            bottom: '18%',
            right: '22%',
            width: '36vw',
            height: '36vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 70%)',
            animation: 'nebulaDrift4 26s ease-in-out infinite alternate',
          }}
        />
      </motion.div>

      {/* ── 3. Central Stellar Core Pulse Spotlight ── */}
      <motion.div
        animate={{
          scale: [1, 1.14, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(720px, 60vw)',
          height: 'min(720px, 60vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.28) 0%, rgba(2, 132, 199, 0.14) 45%, transparent 75%)',
          filter: 'blur(45px)',
          zIndex: 1,
        }}
      />

      {/* ── 4. Twinkling Starfield & Shooting Stars Canvas ── */}
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

      {/* ── 5. Space Grid / Subtle Coordinate Mesh Overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.8,
          zIndex: 3,
        }}
      />

      {/* Keyframe animations for gentle nebula movement */}
      <style jsx>{`
        @keyframes nebulaDrift1 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(35px, -30px) scale(1.08); }
          100% { transform: translate(-25px, 20px) scale(0.94); }
        }
        @keyframes nebulaDrift2 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 25px) scale(1.06); }
          100% { transform: translate(30px, -35px) scale(0.95); }
        }
        @keyframes nebulaDrift3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-25px, -35px) scale(1.1); }
          100% { transform: translate(35px, 20px) scale(0.92); }
        }
        @keyframes nebulaDrift4 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, 30px) scale(1.06); }
          100% { transform: translate(-30px, -25px) scale(0.97); }
        }
      `}</style>
    </div>
  );
}
