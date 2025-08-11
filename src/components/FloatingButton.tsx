"use client";

import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { useState } from 'react';

type FloatingButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
};

export default function FloatingButton({ 
  children, 
  href, 
  onClick, 
  className = "", 
  variant = 'primary' 
}: FloatingButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  
  const [springs, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    shadow: 0,
    glow: 0,
    config: { 
      tension: 300, 
      friction: 10,
      mass: 0.5
    }
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => {
      api.start({
        scale: hovering ? 1.05 : 1,
        y: hovering ? -2 : 0,
        shadow: hovering ? 1 : 0,
        glow: hovering ? 1 : 0,
      });
    },
    onDrag: ({ down, movement: [mx, my] }) => {
      api.start({
        scale: down ? 0.95 : 1.05,
        rotateX: down ? my * 0.1 : 0,
        rotateY: down ? mx * 0.1 : 0,
      });
      setIsPressed(down);
    },
    onPointerDown: () => {
      api.start({
        scale: 0.95,
      });
    },
    onPointerUp: () => {
      api.start({
        scale: 1.05,
      });
    }
  });

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground border-primary/20';
      case 'secondary':
        return 'glass border-border/50 hover:border-primary/50';
      case 'outline':
        return 'border-border hover:bg-card/50 hover:border-accent';
      default:
        return 'bg-primary text-primary-foreground border-primary/20';
    }
  };

  const Component = href ? animated.a : animated.button;

  return (
    <Component
      {...bind()}
      {...(href ? { href } : {})}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center gap-2 
        rounded-lg border px-6 py-3 font-medium 
        transition-all duration-200 cursor-pointer
        ${getVariantClasses()}
        ${className}
      `}
      style={{
        transform: springs.scale.to(s => `scale(${s}) perspective(600px)`),
        y: springs.y,
        rotateX: springs.rotateX.to(r => `${r}deg`),
        rotateY: springs.rotateY.to(r => `${r}deg`),
        boxShadow: springs.shadow.to(s => 
          `0 ${4 + s * 8}px ${8 + s * 16}px rgba(0,0,0,${0.1 + s * 0.15}), 
           0 ${2 + s * 4}px ${4 + s * 8}px rgba(139, 92, 246, ${s * 0.2})`
        ),
      }}
    >
      {/* Content */}
      <span className="relative z-10">
        {children}
      </span>

      {/* Animated glow */}
      <animated.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 pointer-events-none"
        style={{
          opacity: springs.glow,
          filter: springs.glow.to(g => `blur(${g * 8}px)`),
        }}
      />

      {/* Ripple effect */}
      {isPressed && (
        <animated.div
          className="absolute inset-0 rounded-lg bg-white/20 pointer-events-none"
          style={{
            transform: springs.scale.to(s => `scale(${2 - s})`),
            opacity: springs.scale.to(s => (1 - s) * 2),
          }}
        />
      )}
    </Component>
  );
}
