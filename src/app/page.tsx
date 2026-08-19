'use client';

import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues with browser APIs
const OrbitHub = dynamic(() => import('@/components/OrbitHub'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Noise overlay for premium depth */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Interactive orbit hub — full screen, no scroll */}
      <OrbitHub />
    </>
  );
}
