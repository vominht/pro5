"use client";

import { useEffect, useRef } from "react";

type Props = {
  strength?: number; // radius in px
  className?: string;
};

export default function InteractiveSpotlight({ strength = 220, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 [--mx:50%] [--my:30%] transition-opacity duration-300 ${className}`}
      style={{
        background: `radial-gradient(circle ${strength}px at var(--mx) var(--my),
          hsla(190, 70%, 70%, 0.12) 0%,
          hsla(190, 70%, 70%, 0.09) 20%,
          hsla(190, 60%, 70%, 0.06) 40%,
          hsla(190, 60%, 70%, 0.03) 60%,
          hsla(255, 255%, 100%, 0.015) 80%,
          transparent 100%)`,
        filter: 'blur(1.5px)',
      }}
    />
  );
}
