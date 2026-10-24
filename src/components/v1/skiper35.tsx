"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, MapPin, ArrowUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  service: string;
  metric: string;
  rating: number;
  quote: string;
  image: string;
}

export const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "elena",
    author: "Elena Jin",
    role: "Founder",
    company: "K-Beauty Global",
    location: "Seoul / London",
    service: "Amazon Brand Registry & A+ Content",
    metric: "+340% Listing Conversion",
    rating: 5,
    quote:
      "X ONE HUB took our skincare brand from day-one Section 3 risk to a verified Amazon Brand Registry powerhouse. Their A+ Content and competitor comparison tables doubled our conversions in the first month.",
    image: "/images/korean-skincare.jpg",
  },
  {
    id: "marcus",
    author: "Marcus Vance",
    role: "Managing Partner",
    company: "Vance Heritage LLC",
    location: "Melbourne, Australia",
    service: "Wyoming LLC & Chase Bank Setup",
    metric: "100% Non-Resident Approval",
    rating: 5,
    quote:
      "As non-US founders, getting verified US banking rails was daunting. X ONE HUB formed our Wyoming LLC, secured our IRS EIN, and opened our Chase Business account in under two weeks.",
    image: "/images/thrift-stores.jpg",
  },
  {
    id: "david",
    author: "David Althaus",
    role: "Head of Growth",
    company: "Althaus Orthopedics",
    location: "Berlin, Germany",
    service: "Amazon PPC & TACoS Suppression",
    metric: "14.2% TACoS / +420% Sales",
    rating: 5,
    quote:
      "Their algorithmic PPC advertising brought our TACoS down to 14.2% while scaling monthly sales to 6 figures. They eliminate wasted keyword spend and dominate the top of search.",
    image: "/images/comfort-shoes.jpg",
  },
  {
    id: "sophia",
    author: "Sophia Zhang",
    role: "Operations Director",
    company: "Aura Living Wholesale",
    location: "Singapore / New York",
    service: "FBA Wholesale & Brand Ungating",
    metric: "$2.8M Annual Amazon GMV",
    rating: 5,
    quote:
      "Direct LOA authorizations and brand ungating from global suppliers. X ONE HUB handles inventory logistics, FBA prep shipments, and daily Buy Box defense seamlessly.",
    image: "/images/agency-studio.jpg",
  },
  {
    id: "julian",
    author: "Julian Rossi",
    role: "Founder",
    company: "Rossi Tactical Goods",
    location: "Milan, Italy",
    service: "Amazon Account Clearance",
    metric: "Zero Section 3 Suspensions",
    rating: 5,
    quote:
      "Pre-submission utility bill audits and video interview clearance. We got our Seller Central account approved on the first attempt with zero compliance delays.",
    image: "/images/hero-1.jpg",
  },
];

export interface Skiper35Props {
  items?: TestimonialItem[];
  className?: string;
  defaultActiveId?: string;
}

/**
 * Skiper35 - Hover Expand Interactive Showcase Gallery (Skiper UI #35)
 * Robust flex-expanding panels on hover (desktop) or tap (mobile).
 */
export const Skiper35: React.FC<Skiper35Props> = ({
  items = DEFAULT_TESTIMONIALS,
  className = "",
  defaultActiveId,
}) => {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId || items[0]?.id || "elena"
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Expandable Gallery Container */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[540px] lg:h-[580px] w-full select-none">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              style={{
                flex: isActive ? 3.8 : 1,
                transition: "flex 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                isActive
                  ? "min-h-[460px] md:min-h-0 md:h-full shadow-[0_25px_60px_rgba(124,58,237,0.22)] ring-2 ring-purple-500/50"
                  : "min-h-[92px] h-[92px] md:h-full bg-slate-900 border border-purple-200/40 shadow-sm opacity-90 hover:opacity-100"
              }`}
            >
              {/* Background Media with Zoom Transition */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover object-center transition-all duration-700 ease-out ${
                    isActive
                      ? "scale-105 filter brightness-[0.88] contrast-[1.04]"
                      : "scale-100 filter brightness-[0.45] grayscale-[30%]"
                  }`}
                  priority={idx < 2}
                />
                {/* Gradient Overlays for Readability */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30"
                      : "bg-slate-950/75"
                  }`}
                />
                <div className="absolute inset-0 bg-purple-950/20 mix-blend-color" />
              </div>

              {/* ── Active Expanded Panel Content ── */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={`active-${item.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative z-10 w-full h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between text-white"
                  >
                    {/* Top Row: Badges & Rating */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-300" />
                          <span>Verified Client</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/40 text-purple-100 text-xs font-medium">
                          <TrendingUp className="w-3.5 h-3.5 text-purple-200" />
                          <span>{item.metric}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Content: Quote & Author Details */}
                    <div className="space-y-4 sm:space-y-5">
                      <div className="relative">
                        <Quote className="w-10 h-10 text-purple-400/30 absolute -top-5 -left-3 pointer-events-none" />
                        <blockquote className="font-display text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed tracking-tight relative z-10 pl-3">
                          &ldquo;{item.quote}&rdquo;
                        </blockquote>
                      </div>

                      <div className="pt-4 border-t border-white/15 flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <div className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                            {item.author}
                          </div>
                          <div className="text-purple-300 font-mono text-xs sm:text-sm font-semibold mt-0.5">
                            {item.role} ·{" "}
                            <span className="text-white">{item.company}</span>
                          </div>
                          <div className="text-xs text-slate-300 font-light mt-1 flex items-center gap-1.5">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            <span>{item.location}</span>
                            <span className="text-white/30">•</span>
                            <span className="text-purple-200 font-medium">
                              {item.service}
                            </span>
                          </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                          <span>Verified Amazon Partner</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-purple-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Inactive Collapsed Panel (Desktop Rotated / Mobile Horizontal) ── */}
              {!isActive && (
                <div className="relative z-10 w-full h-full flex md:flex-col justify-between items-center p-4 md:py-8 md:px-3 text-white transition-opacity duration-300">
                  {/* Top / Index */}
                  <div className="flex md:flex-col items-center gap-2">
                    <span className="font-mono text-xs font-bold text-purple-300 tracking-wider">
                      0{idx + 1}
                    </span>
                    <div className="hidden md:block w-px h-8 bg-white/20 my-2" />
                  </div>

                  {/* Desktop Vertical Rotated Title */}
                  <div className="hidden md:flex flex-col items-center justify-center flex-1 py-4">
                    <span
                      className="font-display font-bold text-base text-slate-200 tracking-wide uppercase whitespace-nowrap"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {item.author} — {item.company}
                    </span>
                  </div>

                  {/* Mobile Preview (Horizontal) */}
                  <div className="md:hidden flex-1 px-3 text-left">
                    <div className="font-display font-bold text-sm text-white">
                      {item.author}
                    </div>
                    <div className="text-xs text-purple-300 font-mono">
                      {item.service}
                    </div>
                  </div>

                  {/* Bottom / Stars */}
                  <div className="flex md:flex-col items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-mono font-semibold text-slate-300">
                      5.0
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
