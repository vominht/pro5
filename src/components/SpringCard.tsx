"use client";

import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { useRef } from 'react';

type SpringCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SpringCard({ children, className = "" }: SpringCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    zoom: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const bind = useGesture({
    onMove: ({ xy, hovering }) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = xy[0] - rect.left - rect.width / 2;
      const y = xy[1] - rect.top - rect.height / 2;
      
      api.start({
        x: hovering ? x * 0.05 : 0,
        y: hovering ? y * 0.05 : 0,
        rotateX: hovering ? -(y * 0.05) : 0,
        rotateY: hovering ? x * 0.05 : 0,
        scale: hovering ? 1.02 : 1,
        zoom: hovering ? 0.1 : 0,
      });
    },
    onHover: ({ hovering }) => {
      api.start({
        scale: hovering ? 1.02 : 1,
        zoom: hovering ? 0.1 : 0,
      });
    }
  });

  return (
    <animated.div
      ref={ref}
      {...bind()}
      className={`relative cursor-pointer ${className}`}
      style={{
        transform: 'perspective(600px)',
        x,
        y,
        scale: scale.to(s => s),
        rotateX: rotateX.to(r => `${r}deg`),
        rotateY: rotateY.to(r => `${r}deg`),
        rotateZ: rotateZ.to(r => `${r}deg`),
      }}
    >
      <animated.div
        style={{
          transform: zoom.to(z => `scale(${1 + z})`),
        }}
        className="relative"
      >
        {children}
        
        {/* Spring-powered glow effect */}
        <animated.div
          className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent opacity-0 pointer-events-none"
          style={{
            opacity: zoom.to(z => z * 2),
            filter: zoom.to(z => `blur(${z * 20}px)`),
          }}
        />
      </animated.div>
    </animated.div>
  );
}
