'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const animationClasses = {
      fadeUp: inView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-12',
      fadeIn: inView
        ? 'opacity-100'
        : 'opacity-0',
      slideLeft: inView
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 translate-x-12',
      slideRight: inView
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 -translate-x-12',
      scaleIn: inView
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-95'
    };

    return `${baseClasses} ${animationClasses[animation]} ${className}`;
  };

  const inlineStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={getAnimationClasses()}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}

// Hook for staggered animations
export function useScrollAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

// Preset animation configurations
export const animationPresets = {
  sectionFadeUp: { animation: 'fadeUp' as const, delay: 0, duration: 700 },
  sectionSlideLeft: { animation: 'slideLeft' as const, delay: 100, duration: 600 },
  sectionSlideRight: { animation: 'slideRight' as const, delay: 200, duration: 600 },
  staggeredFadeUp: (index: number) => ({
    animation: 'fadeUp' as const,
    delay: index * 100,
    duration: 600
  }),
  heroContent: { animation: 'fadeIn' as const, delay: 300, duration: 800 },
  fadeInScale: { animation: 'scaleIn' as const, delay: 0, duration: 500 }
};