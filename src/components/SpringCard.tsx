"use client";

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

type SpringCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SpringCard({ children, className = "" }: SpringCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    x.set(mouseX * 0.05);
    y.set(mouseY * 0.05);
    rotateX.set(-mouseY * 0.02);
    rotateY.set(mouseX * 0.02);
  };

  const handleMouseEnter = () => {
    scale.set(1.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer ${className}`}
      style={{
        transform: 'perspective(1000px)',
        x: springX,
        y: springY,
        scale: springScale,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
    >
      {children}
    </motion.div>
  );
}
