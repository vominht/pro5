"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Enhanced3DButtonProps = {
  children: React.ReactNode | ((isHovered: boolean) => React.ReactNode);
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disable3D?: boolean;
};

export default function Enhanced3DButton({ 
  children, 
  href, 
  onClick, 
  className = "", 
  variant = 'primary',
  disable3D = false
}: Enhanced3DButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground border-primary/20 shadow-lg shadow-primary/25';
      case 'secondary':
        return 'glass border-border/50 hover:border-primary/50 backdrop-blur-sm bg-card/80';
      case 'outline':
        return 'border-border hover:bg-card/50 hover:border-accent bg-transparent';
      default:
        return 'bg-primary text-primary-foreground border-primary/20 shadow-lg shadow-primary/25';
    }
  };

  const buttonContent = (
    <motion.div
      className={`
        relative inline-flex items-center justify-center gap-2 
        rounded-lg border px-6 py-3 font-medium 
        transition-all duration-300 cursor-pointer
        transform-gpu will-change-transform
        ${getVariantClasses()}
        ${className}
      `}
      initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
      whileHover={{ 
        rotateX: disable3D ? 0 : -2, 
        rotateY: disable3D ? 0 : 2, 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.1 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {typeof children === 'function' ? children(isHovered) : children}
      </span>

      {/* 3D Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.3 }
        }}
        style={{
          background: variant === 'primary' 
            ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(34, 211, 238, 0.2))'
            : variant === 'secondary'
            ? 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(34, 211, 238, 0.1))'
            : 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(139, 92, 246, 0.1))',
          filter: 'blur(8px)',
          transform: 'translateZ(-1px)'
        }}
      />

      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 rounded-lg shadow-inner opacity-20 pointer-events-none" />
      
      {/* Highlight effect */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-white/30 rounded-t-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}
