"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  Building2,
  Palette,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

export interface ProcessCardItem {
  num: string;
  icon: React.ElementType;
  serviceCategory: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
}

export const DEFAULT_PROCESS_STEPS: ProcessCardItem[] = [
  {
    num: "01",
    icon: Building2,
    serviceCategory: "US Corporate Setup",
    title: "US LLC & Account Setup",
    desc: "We form your US company (Wyoming, Florida, or Texas), obtain your EIN tax documents, and set up your verified Amazon Seller Central account.",
    href: "/services/wyoming-llc",
    badge: "PHASE 1",
  },
  {
    num: "02",
    icon: Palette,
    serviceCategory: "Creative Studio",
    title: "Branding & Store Design",
    desc: "We design your custom logo, print-ready product packaging, and build a fast Shopify 2.0 storefront or Amazon A+ Brand Store.",
    href: "/services/graphic-design",
    badge: "PHASE 2",
  },
  {
    num: "03",
    icon: ShoppingCart,
    serviceCategory: "Amazon Growth",
    title: "Product Launch & FBA",
    desc: "We find high-demand products, optimize keyword-rich listings, secure brand approvals, and set up hands-free FBA store automation.",
    href: "/services/fba-store-automation",
    badge: "PHASE 3",
  },
  {
    num: "04",
    icon: TrendingUp,
    serviceCategory: "Digital Marketing",
    title: "Ads, Marketing & Scale",
    desc: "We launch profitable Amazon PPC campaigns, run viral TikTok & Instagram ads, and scale your daily orders and profits worldwide.",
    href: "/services/digital-marketing",
    badge: "PHASE 4",
  },
];

interface ScrollRevealCardProps {
  step: ProcessCardItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
}

export const ScrollRevealCard: React.FC<ScrollRevealCardProps> = ({
  step,
  index,
  total,
  progress,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const isHovered = hoveredIndex === index;
  const Icon = step.icon;

  // Staggered trigger thresholds
  const start = index === 0 ? 0 : (index / (total - 1)) * 0.75;
  const end = Math.min(1, start + 0.35);

  // 3D Scroll Reveal transforms
  const scrollScale = useTransform(progress, [start, end], [0.93, 1]);
  const scrollOpacity = useTransform(progress, [start, end], [0.35, 1]);
  const scrollY = useTransform(progress, [start, end], [45, 0]);
  const scrollRotateX = useTransform(progress, [start, end], [10, 0]);

  // Active state based on scroll progress
  const [isReached, setIsReached] = useState(index === 0);
  React.useEffect(() => {
    return progress.on("change", (val: number) => {
      setIsReached(val >= start || index === 0);
    });
  }, [progress, start, index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative group">
      {/* ── EXTERNAL AMBIENT NEON GLOW BLOOM (Activates on hover) ── */}
      <div
        className={`absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-500 blur-xl transition-all duration-500 pointer-events-none -z-10 ${
          isHovered
            ? "opacity-65 scale-100"
            : isReached
            ? "opacity-15 scale-95"
            : "opacity-0 scale-90"
        }`}
      />

      {/* ── CARD CONTAINER ── */}
      <motion.div
        ref={cardRef}
        style={{
          scale: scrollScale,
          opacity: scrollOpacity,
          y: scrollY,
          rotateX: isHovered ? tilt.x : scrollRotateX,
          rotateY: isHovered ? tilt.y : 0,
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={handleMouseLeave}
        animate={{
          y: isHovered ? -10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 24,
        }}
        className={`relative p-8 rounded-3xl border bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
          isHovered
            ? "border-purple-400 shadow-[0_25px_60px_rgba(124,58,237,0.22)] ring-2 ring-purple-400/30"
            : isReached
            ? "border-purple-200 shadow-[0_15px_35px_rgba(124,58,237,0.08)]"
            : "border-purple-100 hover:border-purple-300 shadow-sm"
        }`}
      >
        {/* Dual Layer Cursor Spotlight Glow */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.14), transparent 75%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-200 z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(140px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 132, 252, 0.22), transparent 70%)`,
          }}
        />

        {/* Shimmering Top Accent Edge on Hover */}
        <div
          className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative z-10">
          {/* Step Header: Step Number badge and icon circle */}
          <div className="flex items-center justify-between mb-6">
            <span
              className={`font-mono text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                isHovered
                  ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_18px_rgba(124,58,237,0.55)] scale-105"
                  : isReached
                  ? "text-white bg-purple-600 shadow-[0_4px_12px_rgba(124,58,237,0.3)]"
                  : "text-purple-700 bg-purple-50 border border-purple-200"
              }`}
            >
              STEP {step.num}
            </span>

            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isHovered
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-[0_8px_25px_rgba(124,58,237,0.45)] scale-110 rotate-3"
                  : isReached
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-purple-50 border border-purple-100 text-purple-700"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
          </div>

          {/* Category */}
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-1.5 transition-colors duration-300 ${
              isHovered ? "text-purple-600" : "text-slate-400"
            }`}
          >
            {step.serviceCategory}
          </span>

          {/* Title */}
          <h3
            className={`font-display font-bold text-xl transition-colors duration-300 ${
              isHovered
                ? "text-purple-700"
                : "text-[#0f0f17] group-hover:text-purple-700"
            }`}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-slate-600 text-sm leading-relaxed font-light">
            {step.desc}
          </p>
        </div>

        {/* Footer: Phase badge & explore button */}
        <div className="relative z-10 mt-8 pt-4 border-t border-purple-50 flex items-center justify-between text-xs font-mono">
          <span
            className={`font-semibold transition-colors duration-300 ${
              isHovered ? "text-purple-700" : "text-slate-400"
            }`}
          >
            {step.badge || `PHASE ${index + 1}`}
          </span>
          <Link
            href={step.href}
            className={`font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
              isHovered
                ? "text-white bg-purple-600 shadow-[0_4px_14px_rgba(124,58,237,0.4)] translate-x-0.5"
                : "text-purple-600 hover:text-purple-800"
            }`}
          >
            <span>Explore</span>
            <ArrowUpRight
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
              }`}
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export interface Skiper104Props {
  steps?: ProcessCardItem[];
  className?: string;
}

/**
 * Skiper104 - Scroll Reveal Grid Cards (Skiper UI #104)
 * Features a connected horizontal timeline above the cards with numbered badges [ 1 ] -> [ 2 ] -> [ 3 ] -> [ 4 ]
 * that fill and illuminate sequentially as you scroll, with interactive box glowing & 3D tilt.
 */
export const Skiper104: React.FC<Skiper104Props> = ({
  steps = DEFAULT_PROCESS_STEPS,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll progression tracker
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 30,
    mass: 0.2,
  });

  // Dynamic width of the active purple line filling from left to right
  const progressLineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={`w-full relative ${className}`}>
      {/* ── 1. CONNECTED HORIZONTAL TIMELINE: LINE KE UPAR 1 -> 2 -> 3 -> 4 ── */}
      <div className="relative mb-10 px-4 sm:px-8">
        {/* Continuous Horizontal Base Track */}
        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[3px] bg-purple-100 rounded-full z-0 overflow-hidden">
          {/* Animated Purple Fill Line */}
          <motion.div
            style={{ width: progressLineWidth }}
            className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 shadow-[0_0_12px_rgba(124,58,237,0.7)]"
          />
        </div>

        {/* 4 Numbered Square Badges Resting Directly on the Line */}
        <div className="grid grid-cols-4 relative z-10">
          {steps.map((_, idx) => {
            const stepThreshold = idx === 0 ? 0 : (idx / (steps.length - 1)) * 0.75;
            return (
              <TimelineBadge
                key={idx}
                index={idx}
                progress={smoothProgress}
                threshold={stepThreshold}
                isHovered={hoveredIndex === idx}
                onClick={() => setHoveredIndex(idx)}
              />
            );
          })}
        </div>
      </div>

      {/* ── 2. PROCESS CARDS GRID ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        style={{ perspective: "1100px" }}
      >
        {steps.map((step, idx) => (
          <ScrollRevealCard
            key={step.num}
            step={step}
            index={idx}
            total={steps.length}
            progress={smoothProgress}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};

interface TimelineBadgeProps {
  index: number;
  progress: MotionValue<number>;
  threshold: number;
  isHovered: boolean;
  onClick: () => void;
}

function TimelineBadge({
  index,
  progress,
  threshold,
  isHovered,
  onClick,
}: TimelineBadgeProps) {
  const [active, setActive] = useState(index === 0);

  React.useEffect(() => {
    return progress.on("change", (val: number) => {
      setActive(val >= threshold || index === 0);
    });
  }, [progress, threshold, index]);

  const isCurrentOrHovered = active || isHovered;

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.button
        type="button"
        onClick={onClick}
        animate={{
          scale: isHovered ? 1.25 : isCurrentOrHovered ? 1.1 : 0.95,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-mono font-bold text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-md ${
          isHovered
            ? "bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-600 text-white shadow-[0_0_22px_rgba(124,58,237,0.85)] ring-4 ring-purple-300"
            : isCurrentOrHovered
            ? "bg-purple-600 text-white shadow-[0_0_16px_rgba(124,58,237,0.6)] ring-2 ring-purple-200"
            : "bg-white text-purple-600/60 border-2 border-purple-200 hover:border-purple-400"
        }`}
      >
        {index + 1}
      </motion.button>

      {/* Downward Connector Guide Stem */}
      <motion.div
        animate={{
          height: isHovered ? 16 : isCurrentOrHovered ? 12 : 8,
          opacity: isCurrentOrHovered ? 1 : 0.3,
          backgroundColor: isCurrentOrHovered ? "#9333ea" : "#e9d5ff",
        }}
        className="w-[2px] mt-1.5 rounded-full transition-all duration-300"
      />
    </div>
  );
}

export default Skiper104;
