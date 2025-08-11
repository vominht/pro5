"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

type AnimatedArrowProps = {
  size?: number;
  isHovered?: boolean;
};

export function AnimatedArrow({ size = 16, isHovered = false }: AnimatedArrowProps) {
  return (
    <motion.div
      animate={{ x: isHovered ? 2 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <ArrowRight size={size} />
    </motion.div>
  );
}

type AnimatedMailProps = {
  size?: number;
  isHovered?: boolean;
};

export function AnimatedMail({ size = 16, isHovered = false }: AnimatedMailProps) {
  return (
    <motion.div
      animate={{ y: isHovered ? -2 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Mail size={size} />
    </motion.div>
  );
}

type AnimatedDownloadProps = {
  size?: number;
  isHovered?: boolean;
};

export function AnimatedDownload({ size = 16, isHovered = false }: AnimatedDownloadProps) {
  return (
    <motion.div
      animate={{ y: isHovered ? -2 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Download size={size} />
    </motion.div>
  );
}
