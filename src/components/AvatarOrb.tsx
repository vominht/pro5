"use client";

import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  size?: number;
};

export default function AvatarOrb({ src = "/avatar.png", alt = "Avatar", size = 140 }: Props) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl" />
      <div className="relative rounded-full overflow-hidden ring-1 ring-border">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
      </div>
    </div>
  );
}


