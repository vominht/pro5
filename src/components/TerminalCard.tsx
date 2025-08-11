"use client";

import { memo } from "react";

type TerminalLine = { prompt?: string; command: string; output?: string | string[] };

type TerminalCardProps = {
  className?: string;
  title?: string;
  lines?: TerminalLine[];
};

const defaultLines: TerminalLine[] = [
  { prompt: "tuil4tu@macbook ~ %", command: "whoami", output: "tuil4tu - Full-stack Developer" },
  { prompt: "tuil4tu@macbook ~ %", command: "stack", output: ["TypeScript", "React", "Next.js", "Node.js"] },
  { prompt: "tuil4tu@macbook ~ %", command: "location", output: "Ho Chi Minh City, Vietnam 🇻🇳" },
];

const TerminalCard = memo(function TerminalCard({
  className = "",
  title = "profile — tuil4tu",
  lines = defaultLines,
}: TerminalCardProps) {
  return (
    <div
      className={`glass rounded-2xl border border-border overflow-hidden hover:border-primary/50 
        transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${className}`}
      style={{
        willChange: "transform, box-shadow, backdrop-filter",
        transform: "translateZ(0)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b border-border 
          bg-[color-mix(in_oklab,var(--card)_92%,transparent)]"
        style={{ willChange: "background-color" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-muted">{title}</span>
        <div className="w-8" />
      </div>

      {/* Body */}
      <div className="relative font-mono text-sm leading-relaxed p-4">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap mb-2">
            <div>
              <span className="text-muted">{line.prompt} </span>
              <span className="text-foreground">{line.command}</span>
            </div>
            {line.output && (
              <div className="mt-1 text-accent">
                {Array.isArray(line.output) ? line.output.join(", ") : line.output}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TerminalCard;
