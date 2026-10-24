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
    company: "Korean Skins Care",
    location: "Seoul / London",
    service: "Shopify Store & Branding",
    metric: "+340% 1st Month GMV",
    rating: 5,
    quote:
      "X ONE HUB took our cosmetics brand from idea to a high-converting international store. Their Shopify design and fast checkout delivered great results within our first month of launch.",
    image: "/images/korean-skincare.jpg",
  },
  {
    id: "marcus",
    author: "Marcus Vance",
    role: "Co-Founder",
    company: "Clothing Thrift Stores",
    location: "Melbourne, Australia",
    service: "Logo & Packaging Design",
    metric: "+185% Footfall & Retail Sales",
    rating: 5,
    quote:
      "The logo and packaging design X ONE HUB created for Clothing Thrift Stores blew us away. They gave our clothing line a modern look that boosted both our footfall and online sales.",
    image: "/images/thrift-stores.jpg",
  },
  {
    id: "david",
    author: "David Althaus",
    role: "Marketing Director",
    company: "Comfort Shoes",
    location: "Berlin, Germany",
    service: "Growth Marketing & Video Ads",
    metric: "3.8M+ Video Impressions",
    rating: 5,
    quote:
      "Their social media video strategy brought a huge increase in reach and thousands of new buyers for Comfort Shoes. They really know how to make videos that convert viewers into sales.",
    image: "/images/comfort-shoes.jpg",
  },
  {
    id: "sophia",
    author: "Sophia Zhang",
    role: "E-Commerce Director",
    company: "Aura Living Global",
    location: "Singapore / New York",
    service: "Amazon FBA Wholesale Scale",
    metric: "$2.8M Annual Amazon GMV",
    rating: 5,
    quote:
      "From brand ungating to A+ Content and automated PPC campaigns, X ONE HUB unlocked high-margin wholesale profitability for our catalog without a single suspension.",
    image: "/images/agency-studio.jpg",
  },
  {
    id: "julian",
    author: "Julian Rossi",
    role: "Managing Partner",
    company: "Velox Dynamics",
    location: "Milan, Italy",
    service: "Corporate Web & US Setup",
    metric: "100% Verified Rails",
    rating: 5,
    quote:
      "Direct access to senior founders and lightning-fast turnaround. They designed our corporate landing pages and set up our global financial rails in record time.",
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
 * Smooth spring-expanded panels on hover (desktop) or tap/click (mobile).
 */
export const Skiper35: React.FC<Skiper35Props> = ({
  items = DEFAULT_TESTIMONIALS,
  className = "",
  defaultActiveId,
}) => {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId || items[0]?.id || ""
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Expandable Gallery Container */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[540px] lg:h-[580px] w-full select-none">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
                mass: 0.8,
              }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
                isActive
                  ? "flex-[3.5] lg:flex-[4] h-[480px] md:h-full shadow-[0_25px_60px_rgba(124,58,237,0.22)] ring-2 ring-purple-500/40"
                  : "flex-1 h-[96px] md:h-full bg-slate-900/90 hover:bg-slate-900 border border-purple-200/40 shadow-sm opacity-90 hover:opacity-100"
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
                      : "bg-slate-950/70"
                  }`}
                />
                <div className="absolute inset-0 bg-purple-950/15 mix-blend-color" />
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
                          <span>Verified Partner</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-600/70 backdrop-blur-md border border-purple-400/40 text-purple-100 text-xs font-medium">
                          <TrendingUp className="w-3.5 h-3.5 text-purple-200" />
                          <span>{item.metric}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Bottom Content: Quote & Author Details */}
                    <div className="space-y-5">
                      <div className="relative">
                        <Quote className="w-10 h-10 text-purple-400/30 absolute -top-5 -left-3 pointer-events-none" />
                        <blockquote className="font-display text-lg sm:text-xl md:text-2xl text-slate-100 font-medium leading-relaxed tracking-tight relative z-10 pl-3">
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
                            <span className="text-purple-200">{item.service}</span>
                          </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium group hover:bg-white/20 transition-colors">
                          <span>Case Study Ready</span>
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
                      {item.company}
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
