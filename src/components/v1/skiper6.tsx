"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export interface HoverMemberItem {
  id: string;
  name: string;
  shortName?: string;
  image: string;
  category?: string;
  tagline?: string;
  slug?: string;
  highlight?: string;
  tags?: string[];
}

export interface HoverMemberProps {
  teamMembers: HoverMemberItem[];
  defaultName?: string;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  cursorColor?: string;
  onSelectMember?: (member: HoverMemberItem) => void;
}

export function HoverMember({
  teamMembers,
  defaultName = "X-ONE HUB",
  className = "",
  backgroundColor = "bg-transparent",
  textColor = "text-slate-300",
  hoverTextColor = "text-purple-600",
  cursorColor = "bg-purple-600",
  onSelectMember,
}: HoverMemberProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const mouseX = useSpring(rawMouseX, { damping: 28, stiffness: 350 });
  const mouseY = useSpring(rawMouseY, { damping: 28, stiffness: 350 });

  const activeItem = hoveredIndex !== null ? teamMembers[hoveredIndex] : null;
  const currentTitle = activeItem ? (activeItem.shortName || activeItem.name) : defaultName;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      rawMouseX.set(e.clientX - rect.left);
      rawMouseY.set(e.clientY - rect.top);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [rawMouseX, rawMouseY]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHoveringContainer(true)}
      onMouseLeave={() => {
        setIsHoveringContainer(false);
        setHoveredIndex(null);
      }}
      className={`relative w-full select-none pt-4 pb-2 sm:pt-6 sm:pb-4 flex flex-col items-center justify-center ${backgroundColor} ${className}`}
    >
      {/* Dynamic Cursor Follower */}
      {isHoveringContainer && hoveredIndex !== null && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="pointer-events-none absolute z-50 hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-[11px] font-mono tracking-wider font-bold shadow-xl bg-purple-600 transform-gpu"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-130%",
          }}
        >
          <span>VIEW</span>
          <ArrowUpRight className="w-3 h-3" />
        </motion.div>
      )}

      {/* ── 1. ROW OF THUMBNAILS AT THE TOP ── */}
      <div className="relative z-20 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap max-w-4xl px-4 mb-4">
        {teamMembers.map((member, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && !isHovered;

          return (
            <Link
              key={member.id}
              href={member.slug ? `/services/${member.slug}` : "#"}
              onClick={(e) => {
                if (onSelectMember) {
                  e.preventDefault();
                  onSelectMember(member);
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              className="group relative flex flex-col items-center focus:outline-hidden"
            >
              <motion.div
                animate={{
                  scale: isHovered ? 1.25 : isOtherHovered ? 0.88 : 1,
                  opacity: isOtherHovered ? 0.45 : 1,
                  y: isHovered ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-md ${
                  isHovered
                    ? "border-purple-600 shadow-[0_12px_28px_rgba(124,58,237,0.35)] ring-4 ring-purple-100 z-30"
                    : "border-purple-100 hover:border-purple-300 shadow-purple-500/5 bg-slate-100"
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover transition-transform duration-500 ease-out ${
                    isHovered ? "scale-115" : "scale-100"
                  }`}
                  sizes="80px"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                    isHovered ? "opacity-30" : "opacity-10"
                  }`}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Dynamic Sub-Info Chip between Thumbnails & Title */}
      <div className="h-8 mb-3 flex items-center justify-center z-20">
        <AnimatePresence mode="wait">
          {activeItem ? (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-mono"
            >
              <span className="text-purple-700 bg-purple-50 border border-purple-200 px-3 py-0.5 rounded-full font-bold">
                {activeItem.name}
              </span>
              {activeItem.highlight && (
                <span className="hidden sm:inline-flex items-center gap-1 text-slate-500 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>{activeItem.highlight}</span>
                </span>
              )}
            </motion.div>
          ) : (
            <motion.p
              key="default-chip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-widest uppercase font-semibold"
            >
              Hover any item to reveal
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── 2. FULLY VISIBLE, SCALED TYPOGRAPHY (NO CLIPPING, NO CUTOFF) ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center py-2 min-h-[90px] sm:min-h-[120px] md:min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentTitle}
            initial={{ y: 25, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -25, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={`font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[6.8vw] xl:text-[7.5vw] leading-[1.08] tracking-tighter uppercase text-center transition-colors duration-300 ${
              activeItem
                ? "text-purple-600 drop-shadow-[0_8px_25px_rgba(124,58,237,0.2)]"
                : "text-slate-300"
            }`}
          >
            {currentTitle}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HoverMember;
