"use client";

import { motion } from "framer-motion";

type TimelineItemProps = {
  year: string;
  title: string;
  company?: string;
  description: string;
  skills?: string[];
  isLast?: boolean;
};

export default function TimelineItem({ year, title, company, description, skills, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && <div className="absolute left-4 top-8 w-px h-full bg-border" />}
      
      {/* Timeline dot */}
      <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />
      
      <div className="pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="badge badge-primary">{year}</span>
          {company && <span className="text-sm text-muted">@{company}</span>}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted text-sm mb-3">{description}</p>
        {skills && (
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <span key={skill} className="badge bg-card text-muted border-border">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
