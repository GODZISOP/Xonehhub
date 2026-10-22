"use client";

import React from "react";

interface SectionLabelProps {
  number?: string;
  text: string;
  className?: string;
}

export default function SectionLabel({ number, text, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-md text-xs font-medium uppercase tracking-widest text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
      {number && <span className="text-purple-400/80 font-mono font-semibold">[{number}]</span>}
      <span suppressHydrationWarning>{text}</span>
    </div>
  );
}
