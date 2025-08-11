"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type HolographicCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HolographicCard({ children, className = "" }: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      {/* Holographic background effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Iridescent shine effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              rgba(139, 92, 246, 0.1) 60deg,
              rgba(34, 211, 238, 0.1) 120deg,
              rgba(139, 92, 246, 0.1) 180deg,
              transparent 240deg,
              transparent 360deg
            )
          `,
        }}
      />
      
      {/* Scan line effect */}
      <div className={`absolute inset-0 rounded-xl overflow-hidden ${isHovered ? 'animate-pulse' : ''}`}>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60 transform -translate-y-full group-hover:translate-y-full transition-transform duration-2000 ease-linear" />
      </div>
      
      {/* Content */}
      <motion.div
        style={{ transform: "translateZ(20px)" }}
        className="relative z-10 glass rounded-xl border border-border/50 backdrop-blur-sm bg-card/90 p-6 h-full hover:border-primary/50 transition-all duration-300"
      >
        {children}
      </motion.div>
      
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-10" />
    </motion.div>
  );
}
