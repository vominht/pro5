"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [0, 1], [8, -8]);
  const rotateY = useTransform(mx, [0, 1], [-8, 8]);
  const rx = useSpring(rotateX, { stiffness: 200, damping: 15 });
  const ry = useSpring(rotateY, { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
  }

  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" as any }}
      className={`group [perspective:1000px] transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/8 via-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      <div className="absolute inset-0 rounded-xl shadow-lg shadow-primary/0 group-hover:shadow-primary/20 transition-all duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
}


