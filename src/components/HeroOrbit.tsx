'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { orbitNodes } from '@/data/skills';

interface OrbitNode {
  id: string;
  label: string;
  color: string;
  skills: string[];
  angle: number;
  x: number;
  y: number;
}

export default function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<OrbitNode[]>([]);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const radius = 160;
    const baseAngles = [0, 90, 180, 270];
    const initialNodes = orbitNodes.map((n, i) => ({
      ...n,
      angle: baseAngles[i],
      x: Math.cos((baseAngles[i] * Math.PI) / 180) * radius,
      y: Math.sin((baseAngles[i] * Math.PI) / 180) * radius,
    }));
    setNodes(initialNodes);

    const animate = () => {
      angleRef.current += 0.15;
      const radius = 160;
      setNodes((prev) =>
        prev.map((node, i) => {
          const baseAngle = [0, 90, 180, 270][i];
          const a = ((baseAngle + angleRef.current) * Math.PI) / 180;
          return {
            ...node,
            x: Math.cos(a) * radius,
            y: Math.sin(a) * radius,
            angle: baseAngle + angleRef.current,
          };
        })
      );
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMouse({
        x: (e.clientX - cx) / 20,
        y: (e.clientY - cy) / 20,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const size = 340;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* SVG: orbit ring + connecting lines */}
      <svg
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      >
        {/* Orbit ring */}
        <circle
          cx={cx}
          cy={cy}
          r={160}
          fill="none"
          stroke="#E5E5E5"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* Connecting lines from center to nodes */}
        {nodes.map((node) => (
          <line
            key={node.id}
            x1={cx + mouse.x * 0.3}
            y1={cy + mouse.y * 0.3}
            x2={cx + node.x + mouse.x}
            y2={cy + node.y + mouse.y}
            stroke={node.color}
            strokeWidth="1"
            strokeOpacity={activeNode === node.id ? 0.6 : 0.2}
            style={{ transition: 'stroke-opacity 0.3s' }}
          />
        ))}
      </svg>

      {/* Center: SAKSHI identity */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${mouse.x * 0.5}px), calc(-50% + ${mouse.y * 0.5}px))`,
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6257E8, #9b8cf7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(98,87,232,0.25)',
          zIndex: 2,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          S
        </span>
      </div>

      {/* Orbit nodes */}
      {nodes.map((node) => (
        <div key={node.id}>
          {/* Node dot */}
          <motion.button
            onHoverStart={() => setActiveNode(node.id)}
            onHoverEnd={() => setActiveNode(null)}
            style={{
              position: 'absolute',
              top: cy + node.y + mouse.y - 22,
              left: cx + node.x + mouse.x - 22,
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: activeNode === node.id ? node.color : '#fff',
              border: `1.5px solid ${node.color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
              zIndex: 3,
              boxShadow: activeNode === node.id ? `0 4px 20px ${node.color}40` : 'none',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            whileHover={{ scale: 1.15 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                fontSize: '0.55rem',
                letterSpacing: '0.04em',
                color: activeNode === node.id ? '#fff' : node.color,
                textAlign: 'center',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                userSelect: 'none',
              }}
            >
              {node.label}
            </span>
          </motion.button>

          {/* Expanded info card */}
          <AnimatePresence>
            {activeNode === node.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: cy + node.y + mouse.y - 90,
                  left: cx + node.x + mouse.x + (node.x > 0 ? 30 : -140),
                  background: '#fff',
                  border: `1px solid ${node.color}30`,
                  borderRadius: 12,
                  padding: '10px 14px',
                  minWidth: 120,
                  boxShadow: `0 8px 24px ${node.color}20`,
                  zIndex: 10,
                  pointerEvents: 'none',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    color: node.color,
                    marginBottom: 6,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {node.label}
                </p>
                {node.skills.map((skill) => (
                  <p
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.72rem',
                      color: '#666',
                      lineHeight: 1.6,
                    }}
                  >
                    {skill}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
