"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { Globe2, Trophy, HeartHandshake } from "lucide-react";

interface StatItem {
  icon: typeof Trophy;
  target: number;
  suffix: string;
  label: string;
  description: string[];
}

const stats: StatItem[] = [
  {
    icon: Trophy,
    target: 120,
    suffix: "+",
    label: "Projects Completed",
    description: [
      "Successfully launched across e-commerce, Amazon FBA, branding, and web development.",
      "Every project delivered on time with high standards and clean execution.",
      "From new startups to established brands expanding globally.",
    ],
  },
  {
    icon: Globe2,
    target: 80,
    suffix: "+",
    label: "Global Clients",
    description: [
      "We work with founders and businesses across the US, UK, UAE, Europe, and Asia.",
      "Expertise in international Amazon marketplaces and US company formation.",
      "Clear English communication, fast response times, and daily updates.",
    ],
  },
  {
    icon: HeartHandshake,
    target: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: [
      "We focus on real results: more store traffic, lower advertising costs, and more sales.",
      "We listen carefully, make revisions promptly, and never leave questions unanswered.",
      "Most of our clients stay with us for ongoing monthly management and marketing.",
    ],
  },
];

export default function StatisticsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            const duration = 2000;
            const startTime = performance.now();

            const step = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentVal = Math.floor(eased * stat.target);

              setCounts((prev) => {
                const next = [...prev];
                next[index] = currentVal;
                return next;
              });

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-white border-t border-purple-100 overflow-hidden"
    >
      <div className="ambient-glow w-[500px] h-[500px] top-1/2 left-1/4 bg-purple-200/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <SectionLabel number="04" text="Track Record" />
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl text-[#0f0f17] tracking-tight">
            Results That <span className="gradient-text-purple">Speak For Themselves</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base font-light">
            Real performance, verified store metrics, and steady growth delivered for brands worldwide.
          </p>
        </motion.div>

        {/* 3 Large Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative p-8 sm:p-10 rounded-3xl border border-purple-100 bg-[#faf8ff] hover:bg-white hover:border-purple-300 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
                data-cursor="Metrics"
              >
                {/* Horizontal glowing indicator line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-purple-500 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-purple-200 flex items-center justify-center text-purple-700 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-purple-700 bg-purple-100/70 px-2.5 py-1 rounded-md uppercase tracking-wider font-semibold">
                      0{idx + 1} // Track Record
                    </span>
                  </div>

                  {/* Oversized Number with Count-Up */}
                  <div className="font-display font-black text-6xl sm:text-7xl xl:text-8xl text-[#0f0f17] tracking-tight leading-none group-hover:scale-105 transition-transform duration-500 origin-left">
                    <span className="gradient-text-purple">{counts[idx]}</span>
                    <span className="text-purple-600">{stat.suffix}</span>
                  </div>

                  <h3 className="mt-4 font-display font-bold text-xl sm:text-2xl text-[#0f0f17]">
                    {stat.label}
                  </h3>
                </div>

                {/* Descriptive Lines */}
                <div className="mt-8 pt-6 border-t border-purple-100 space-y-2">
                  {stat.description.map((line, lineIdx) => (
                    <p
                      key={lineIdx}
                      className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
