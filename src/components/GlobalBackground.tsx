"use client";

import AnimatedGrid from "@/components/AnimatedGrid";
import Particles from "@/components/Particles";



export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Gradient overlays - bottom layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/15 to-background/40 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70 -z-10" />
      
      {/* Base grid dots */}
      <div className="absolute inset-0 grid-dots opacity-15 -z-5" />
      
      {/* Animated 3D grid */}
      <AnimatedGrid className="opacity-30 -z-4" />
      
            {/* Floating particles */}
      <Particles count={40} className="opacity-20 -z-3" />


    </div>
  );
}
