"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { Building2, Palette, ShoppingCart, TrendingUp, ArrowUpRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: Building2,
      serviceCategory: "US Corporate Setup",
      title: "US LLC & Account Setup",
      desc: "We form your US company (Wyoming, Florida, or Texas), obtain your EIN tax documents, and set up your verified Amazon Seller Central account.",
      href: "/services/wyoming-llc",
    },
    {
      num: "02",
      icon: Palette,
      serviceCategory: "Creative Studio",
      title: "Branding & Store Design",
      desc: "We design your custom logo, print-ready product packaging, and build a fast Shopify 2.0 storefront or Amazon A+ Brand Store.",
      href: "/services/graphic-design",
    },
    {
      num: "03",
      icon: ShoppingCart,
      serviceCategory: "Amazon Growth",
      title: "Product Launch & FBA",
      desc: "We find high-demand products, optimize keyword-rich listings, secure brand approvals, and set up hands-free FBA store automation.",
      href: "/services/fba-store-automation",
    },
    {
      num: "04",
      icon: TrendingUp,
      serviceCategory: "Digital Marketing",
      title: "Ads, Marketing & Scale",
      desc: "We launch profitable Amazon PPC campaigns, run viral TikTok & Instagram ads, and scale your daily orders and profits worldwide.",
      href: "/services/digital-marketing",
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#faf8ff] border-t border-purple-100 overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-glow w-[550px] h-[550px] top-1/4 -right-20 bg-purple-200/40 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <SectionLabel number="05" text="How We Work" />
          <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl text-[#0f0f17] tracking-tight">
            Our 4-Step <span className="gradient-text-purple">Growth Process</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base font-light">
            A simple, transparent 4-stage roadmap built around our core services to take you from initial setup to steady global sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative p-8 rounded-3xl border border-purple-100 bg-white hover:border-purple-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
                      STEP {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {step.serviceCategory}
                  </span>

                  <h3 className="font-display font-bold text-xl text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-purple-50 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">PHASE {idx + 1}</span>
                  <Link
                    href={step.href}
                    className="text-purple-600 font-bold hover:text-purple-800 flex items-center gap-1 group/btn"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
