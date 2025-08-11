"use client";

type Props = {
  className?: string;
  density?: number; // grid cell size in px
  tilt?: number; // degrees of rotateX
  speedSec?: number; // animation duration
};

export default function AnimatedGrid({ className = "", density = 48, tilt = 58, speedSec = 18 }: Props) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      <div
        className="animated-grid w-[200%] h-[160%] origin-top-left"
        style={{
          transform: `perspective(1000px) rotateX(${tilt}deg) translateY(-20%)`,
          backgroundSize: `${density}px ${density}px, ${density}px ${density}px`,
          animationDuration: `${speedSec}s`,
        } as React.CSSProperties}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
    </div>
  );
}


