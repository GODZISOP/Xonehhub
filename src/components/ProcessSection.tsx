"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { Building2, Palette, ShoppingCart, TrendingUp } from "lucide-react";
import Skiper104, { ProcessCardItem } from "./v1/skiper104";

export default function ProcessSection() {
  const steps: ProcessCardItem[] = [
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

        {/* Skiper UI #104: Scroll Reveal Grid Cards with original layout & theme */}
        <Skiper104 steps={steps} />
      </div>
    </section>
  );
}
