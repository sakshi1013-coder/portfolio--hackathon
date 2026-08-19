'use client';

import dynamic from 'next/dynamic';

const OrbitHub = dynamic(() => import('@/components/OrbitHub'), { ssr: false });

export default function ExperiencePage() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <OrbitHub initialSectionId="experience" />
    </>
  );
}
