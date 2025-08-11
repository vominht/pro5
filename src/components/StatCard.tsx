"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  className?: string;
};

export default function StatCard({ icon: Icon, value, label, description, className = "" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass rounded-xl p-6 border border-border text-center ${className}`}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        <Icon size={20} />
      </div>
      <div className="text-3xl font-bold text-gradient mb-1">{value}</div>
      <div className="text-sm font-medium text-foreground mb-1">{label}</div>
      {description && <div className="text-xs text-muted">{description}</div>}
    </motion.div>
  );
}
