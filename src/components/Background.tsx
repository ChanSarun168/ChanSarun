"use client";

import { useEffect, useRef } from 'react';

const Background = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      bgRef.current.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(30, 30, 40, 0.9) 0%,
          rgba(15, 15, 25, 0.95) 30%,
          rgba(5, 5, 15, 1) 70%
        )
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black/90 to-black/100 opacity-60" />
        <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] rounded-full bg-purple-900/30 blur-[100px] animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-[120px] animate-pulse animate-delay-2000" />
      </div>
      <div 
        ref={bgRef}
        className="fixed inset-0 bg-black -z-50 transition-all duration-300 ease-out"
      />
    </>
  );
};

export default Background;