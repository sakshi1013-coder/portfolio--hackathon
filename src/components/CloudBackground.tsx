'use client';

import React, { useEffect, useRef } from 'react';

interface Cloud {
  x: number;
  y: number;
  baseY: number;
  radius: number;
  speed: number;
  opacity: number;
  color: string;
  floatSpeed: number;
  floatOffset: number;
  puffs: { offsetX: number; offsetY: number; r: number; opacity: number }[];
}

export default function CloudBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initClouds();
    };
    window.addEventListener('resize', handleResize);

    // Ethereal palette: celestial blue, soft lavender, pearlescent white, delicate peach
    const cloudColors = [
      'rgba(219, 234, 254, 0.75)', // sky blue
      'rgba(237, 233, 254, 0.70)', // soft lilac / lavender
      'rgba(255, 241, 242, 0.65)', // rose pearl
      'rgba(240, 249, 255, 0.80)', // crisp white cloud
      'rgba(254, 243, 199, 0.45)', // subtle golden hour warmth
      'rgba(243, 232, 255, 0.60)', // violet haze
    ];

    let clouds: Cloud[] = [];

    const initClouds = () => {
      clouds = [];
      const cloudCount = Math.max(10, Math.floor(width / 130));

      for (let i = 0; i < cloudCount; i++) {
        const radius = 140 + Math.random() * 190;
        const color = cloudColors[Math.floor(Math.random() * cloudColors.length)];
        const baseY = Math.random() * height * 0.95;

        // Generate organic overlapping puffs for each cloud cluster
        const puffCount = 5 + Math.floor(Math.random() * 5);
        const puffs = [];
        for (let p = 0; p < puffCount; p++) {
          puffs.push({
            offsetX: (Math.random() - 0.5) * radius * 1.6,
            offsetY: (Math.random() - 0.5) * radius * 0.55,
            r: radius * (0.45 + Math.random() * 0.55),
            opacity: 0.25 + Math.random() * 0.45,
          });
        }

        clouds.push({
          x: Math.random() * (width + radius * 2) - radius,
          y: baseY,
          baseY,
          radius,
          speed: 0.15 + Math.random() * 0.35, // slow drifting
          opacity: 0.4 + Math.random() * 0.45,
          color,
          floatSpeed: 0.0008 + Math.random() * 0.0015,
          floatOffset: Math.random() * Math.PI * 2,
          puffs,
        });
      }
    };

    initClouds();

    let time = 0;
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Render each drifting cloud
      clouds.forEach((cloud) => {
        // Horizontal drift
        cloud.x += cloud.speed;
        if (cloud.x - cloud.radius * 2 > width) {
          cloud.x = -cloud.radius * 2;
          cloud.baseY = Math.random() * height * 0.95;
        }

        // Gentle sinusoidal floating in Y
        cloud.y = cloud.baseY + Math.sin(time * cloud.floatSpeed + cloud.floatOffset) * 18;

        // Draw soft volumetric puffs
        cloud.puffs.forEach((puff) => {
          const px = cloud.x + puff.offsetX;
          const py = cloud.y + puff.offsetY;
          const pr = puff.r;

          const grad = ctx.createRadialGradient(px, py, pr * 0.1, px, py, pr);
          grad.addColorStop(0, cloud.color);
          grad.addColorStop(0.5, cloud.color.replace(/[\d.]+\)$/, `${puff.opacity * 0.6})`));
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, pr, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId);
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
      {/* Base Atmospheric Sky Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 35%, #FDF4FF 70%, #F0FDF4 100%)',
        }}
      />

      {/* Dynamic Animated Clouds Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          filter: 'blur(32px)', // Super soft volumetric cloud effect
          transform: 'scale(1.08)',
        }}
      />

      {/* Layered Floating Cloud Silhouette SVG Waves */}
      <div
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: '-10%',
          right: '-10%',
          height: '45%',
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 60%, transparent 100%)',
          filter: 'blur(20px)',
          animation: 'cloudFloat 22s ease-in-out infinite alternate',
        }}
      />

      {/* Glassmorphism & Soft Lighting Mesh */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.78) 100%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      {/* Subtle Depth Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.65,
        }}
      />

      {/* Keyframe animation for subtle ground wave */}
      <style jsx>{`
        @keyframes cloudFloat {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.03);
          }
          100% {
            transform: translateY(-5px) scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}
