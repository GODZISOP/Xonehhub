"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { LinePath, SKIPER19_FLOWING_PATH } from "./v1/skiper19";
import SectionLabel from "./ui/SectionLabel";
import {
  ShieldCheck,
  Award,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowDown,
  CheckCircle2,
} from "lucide-react";

interface MilestoneItem {
  number: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  positionClass: string;
  accentBg: string;
  badgeText: string;
}

const milestones: MilestoneItem[] = [
  {
    number: "01",
    title: "Safe Account Setup & Approval",
    tagline: "We check all your documents first so your Amazon account opens safely with zero rejection.",
    icon: ShieldCheck,
    positionClass: "top-[12%] left-4 sm:left-10 lg:left-16",
    accentBg: "bg-purple-500/10 border-purple-500/20 text-purple-900",
    badgeText: "100% Safe Setup",
  },
  {
    number: "02",
    title: "Brand Approvals & Invoices",
    tagline: "Get official permission to sell big brands with real invoices and direct approval letters.",
    icon: Award,
    positionClass: "top-[32%] right-4 sm:right-10 lg:right-20",
    accentBg: "bg-indigo-500/10 border-indigo-500/20 text-indigo-950",
    badgeText: "Official Approvals",
  },
  {
    number: "03",
    title: "High-Quality Photos & Graphics",
    tagline: "Clear product images, 3D box renders, and clean designs that turn visitors into buyers.",
    icon: Sparkles,
    positionClass: "top-[52%] left-4 sm:left-12 lg:left-24",
    accentBg: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-950",
    badgeText: "Boosts Conversions",
  },
  {
    number: "04",
    title: "Targeted Ads & Top Rankings",
    tagline: "We run smart ad campaigns that bring real buyers to your products while keeping costs low.",
    icon: TrendingUp,
    positionClass: "top-[72%] right-4 sm:right-12 lg:right-24",
    accentBg: "bg-purple-600/10 border-purple-600/20 text-purple-950",
    badgeText: "Profitable Ads",
  },
  {
    number: "05",
    title: "Steady Growth & Daily Sales",
    tagline: "Smooth inventory management, repeat customers, and consistent profits every month.",
    icon: Zap,
    positionClass: "top-[90%] left-1/2 -translate-x-1/2",
    accentBg: "bg-purple-700/15 border-purple-700/30 text-purple-950",
    badgeText: "Long-Term Growth",
  },
];

// Large architectural background words layered behind the stroke
const backgroundWords = [
  {
    word: "START",
    top: "7%",
    align: "left-4 sm:left-12 lg:left-20",
    rotate: "-rotate-2",
  },
  {
    word: "APPROVE",
    top: "27%",
    align: "right-4 sm:right-12 lg:right-20",
    rotate: "rotate-1",
  },
  {
    word: "DESIGN",
    top: "47%",
    align: "left-6 sm:left-16 lg:left-28",
    rotate: "-rotate-1",
  },
  {
    word: "PROMOTE",
    top: "67%",
    align: "right-6 sm:right-16 lg:right-28",
    rotate: "rotate-2",
  },
  {
    word: "GROWTH",
    top: "87%",
    align: "left-1/2 -translate-x-1/2",
    rotate: "rotate-0",
  },
];

export default function SvgFollowScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fast, synchronous scroll tracking that stays right with the user's viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 55%"],
  });

  // Snappy, fast spring with minimal mass so the stroke tracks scroll instantly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 340,
    damping: 30,
    mass: 0.12,
    restDelta: 0.0005,
  });

  // Faster drawing range: starts early and completes synchronously as user scrolls
  const pathLength = useTransform(smoothProgress, [0.01, 0.82], [0, 1], {
    clamp: true,
  });

  // Calculate live visual progress percentage (0 - 100)
  const percentProgress = useTransform(pathLength, [0, 1], [0, 100]);
  const [displayPercent, setDisplayPercent] = React.useState(0);

  React.useEffect(() => {
    return percentProgress.on("change", (latest) => {
      setDisplayPercent(Math.min(100, Math.max(0, Math.round(latest))));
    });
  }, [percentProgress]);

  return (
    <section
      id="growth-pathway"
      ref={containerRef}
      className="relative w-full min-h-[240vh] lg:min-h-[270vh] bg-white overflow-hidden border-t border-purple-100 selection:bg-purple-600 selection:text-white"
    >
      {/* Background Subtle Modern Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.08) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* ── Giant Architectural Background Words (Watermark Layer) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {backgroundWords.map((item) => (
          <motion.div
            key={item.word}
            initial={{ opacity: 0.25, y: 30 }}
            whileInView={{ opacity: 0.65, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ top: item.top }}
            className={`absolute ${item.align} ${item.rotate} whitespace-nowrap`}
          >
            <span
              className="block font-display font-black text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] xl:text-[15rem] tracking-tighter uppercase leading-none select-none transition-all"
              style={{
                WebkitTextStroke: "2px rgba(147, 51, 234, 0.22)",
                color: "rgba(147, 51, 234, 0.04)",
                textShadow: "0 0 40px rgba(147, 51, 234, 0.08)",
              }}
            >
              {item.word}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Section Header ── */}
      <div className="relative pt-24 sm:pt-32 pb-12 max-w-7xl mx-auto px-6 md:px-10 z-20">
        <SectionLabel number="02.5" text="Our Process" />

        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]">
              The Step-By-Step Path{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600">
                To Build A Top Brand.
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Scroll down to see our simple 5-step process. Every step shows exactly how we take your store from start to steady daily sales.
            </p>
          </div>

          {/* Live Progress Pill & Scroll Hint (Purple Theme) */}
          <div className="inline-flex items-center gap-3 self-start md:self-auto px-5 py-3 rounded-full bg-slate-900 text-white shadow-xl shadow-purple-950/15 border border-purple-900/40">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#9333ea]" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Scroll Progress:{" "}
              <span className="font-bold text-purple-400">{displayPercent}%</span>
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-purple-400 animate-bounce ml-1" />
          </div>
        </div>
      </div>

      {/* ── The Dynamic SVG Follow Scroll Stroke (Purple Color: #9333EA) ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
        <LinePath
          className="w-full h-full object-contain"
          pathData={SKIPER19_FLOWING_PATH}
          pathLength={pathLength}
          strokeColor="#9333EA"
          strokeWidth={20}
          showTrack={true}
          trackColor="rgba(147, 51, 234, 0.12)"
          trackStrokeWidth={16}
          glow={true}
        />
      </div>

      {/* ── Floating Milestone Story Markers Along The Curved Route ── */}
      <div className="relative w-full h-[200vh] lg:h-[220vh] max-w-7xl mx-auto px-6 z-20 pointer-events-none">
        {milestones.map((m) => (
          <motion.div
            key={m.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={`absolute ${m.positionClass} max-w-sm w-full p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border shadow-xl shadow-purple-950/5 pointer-events-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${m.accentBg}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-600/30">
                <m.icon className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-400">
                Phase {m.number}
              </span>
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug">
              {m.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              {m.tagline}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-purple-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              <span>{m.badgeText}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Transition Out to Next Section (WhySection) ── */}
      <div className="relative z-20 pb-20 text-center max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex flex-col items-center gap-3"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Next Up: Why Us
          </span>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600" />
          <h4 className="font-display font-black text-xl sm:text-2xl text-slate-900">
            Why Brands Love Working With X-One Hub
          </h4>
          <ArrowDown className="w-5 h-5 text-purple-600 animate-bounce mt-1" />
        </motion.div>
      </div>
    </section>
  );
}
