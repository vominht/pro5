"use client";

import Parallax from "@/components/Parallax";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Parallax offset={20}>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 neon-text">{children}</h2>
    </Parallax>
  );
}


