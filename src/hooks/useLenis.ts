'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

export function useLenis() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis!.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return lenis;
}
