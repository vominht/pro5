"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  offset?: number; // px translateY at max scroll into viewport
  className?: string;
};

export default function Parallax({ children, offset = 40, className = "" }: Props) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}


