"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./ui/SectionLabel";
import {
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  X,
  Globe,
  Layers,
  ShoppingBag,
  Package,
  Megaphone,
  Palette,
} from "lucide-react";

interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  clientUrl: string;
  relatedServiceSlug: string;
  services: string[];
  results: { label: string; value: string }[];
  image: string;
  accentColor: string;
  badgeBg: string;
  caseDetails: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

const portfolioProjects: ProjectData[] = [
  {
    id: "korean-skins-care",
    number: "01",
    title: "Korean Skins Care",
    category: "E-Commerce & Shopify 2.0 Storefront",
    tagline: "Global direct-to-consumer authentic skincare storefront",
    description:
      "We engineered an end-to-end e-commerce infrastructure delivering authentic Korean beauty products across international markets with sub-second page performance, custom product routines, and high-conversion checkouts.",
    clientUrl: "koreanskinscare.com",
    relatedServiceSlug: "web-development",
    accentColor: "from-purple-600 to-indigo-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    services: [
      "Custom Shopify 2.0 Architecture",
      "Full UI/UX Digital Design System",
      "Speed & Mobile Optimization",
      "Multi-Currency Checkout Drawer",
    ],
    results: [
      { label: "Checkout Conversion", value: "+4.8%" },
      { label: "Global Order Fulfillment", value: "32+ Countries" },
      { label: "Organic Monthly Visitors", value: "45K+" },
    ],
    image: "/images/korean-skincare.jpg",
    caseDetails: {
      challenge:
        "The client had premium beauty inventory but suffered from slow loading speeds and high cart abandonment on generic off-the-shelf templates.",
      solution:
        "X-One Hub built a custom high-speed Shopify 2.0 theme with instant skin-quiz routines, personalized cart upsells, and 1-click international checkout.",
      outcome:
        "Conversion surged by +4.8%, organic visitors grew past 45,000 monthly, and fulfillment expanded seamlessly across 32 countries.",
    },
  },
  {
    id: "clothing-thrift-stores",
    number: "02",
    title: "Clothing Thrift Stores",
    category: "Brand Identity & Sustainable Packaging",
    tagline: "Contemporary eco-conscious fashion identity system",
    description:
      "A bold, timeless visual identity pairing sustainable values with editorial typography across luxury physical unboxing experiences, apparel tags, and omni-channel retail collateral.",
    clientUrl: "clothingthriftstores.co",
    relatedServiceSlug: "graphic-design",
    accentColor: "from-rose-600 to-purple-600",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    services: [
      "Brand Positioning & Logo Identity",
      "100% Recyclable Packaging Dielines",
      "Custom Apparel Woven Labels & Hangtags",
      "Digital Editorial Lookbooks",
    ],
    results: [
      { label: "Brand Sentiment & Recall", value: "98.4%" },
      { label: "Packaging Recyclability", value: "100%" },
      { label: "Retail Footfall Surge", value: "+215%" },
    ],
    image: "/images/thrift-stores.jpg",
    caseDetails: {
      challenge:
        "Thrift fashion was historically perceived as disorganized. The brand needed an elevated editorial presence on par with modern designer fashion houses.",
      solution:
        "Designed a bespoke minimalist identity, custom biodegradable unboxing bags, and textured paper tags that shoppers save as collectibles.",
      outcome:
        "Achieved a +215% surge in footfall, 98.4% brand sentiment across customer reviews, and zero plastic packaging footprint.",
    },
  },
  {
    id: "comfort-shoes-smm",
    number: "03",
    title: "Comfort Shoes SMM",
    category: "Viral Social Media & Paid PPC Growth",
    tagline: "Explosive organic outreach & non-follower acquisition campaign",
    description:
      "An algorithmically driven social media strategy focused on kinetic short-form video hooks, customer comfort tests, and automated retargeting funnels that unlocked massive virality.",
    clientUrl: "comfortshoes.com",
    relatedServiceSlug: "digital-marketing",
    accentColor: "from-amber-600 to-purple-600",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    services: [
      "Viral Short-Form Video Production",
      "Algorithmic Distribution Architecture",
      "Influencer Seeding & Creative Hooks",
      "Direct-Response Paid Retargeting",
    ],
    results: [
      { label: "Video Views Surge", value: "+306%" },
      { label: "Organic Reach Growth", value: "+347%" },
      { label: "Views From Non-Followers", value: "91%" },
      { label: "User Interactions Jump", value: "+120%" },
    ],
    image: "/images/comfort-shoes.jpg",
    caseDetails: {
      challenge:
        "High ad fatigue and skyrocketing customer acquisition costs demanded a viral organic hook engine that didn't burn endless paid ad budget.",
      solution:
        "Produced authentic 3-second hook reels and wear-test challenges that resonated with TikTok and Instagram recommendation algorithms.",
      outcome:
        "Organic reach skyrocketed +347%, with 91% of viewership from brand-new non-followers and a 120% jump in direct purchases.",
    },
  },
  {
    id: "amazon-fba-automation",
    number: "04",
    title: "Apex Horizon FBA",
    category: "Amazon Private Label & Automation",
    tagline: "Turnkey scaling from product hunting to Top 1% Best Seller Rank",
    description:
      "Full hands-free Amazon store launch and automation, including deep niche hunting, supplier negotiations, Brand Registry, A+ content, and aggressive PPC ad optimization.",
    clientUrl: "amazon.com/shops/apex-horizon",
    relatedServiceSlug: "fba-store-automation",
    accentColor: "from-indigo-600 to-purple-700",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    services: [
      "High-Margin Product Hunting & Sourcing",
      "Amazon Brand Registry & Trademarks",
      "A+ Content & High-Converting Images",
      "Algorithmic PPC Ads & Inventory Flow",
    ],
    results: [
      { label: "Annual Store GMV", value: "$1.8M+" },
      { label: "Target ACOS Maintained", value: "16.4%" },
      { label: "Category BSR Rank", value: "Top 1%" },
      { label: "Organic Keyword Ranks", value: "480+" },
    ],
    image: "/images/service-amazon.jpg",
    caseDetails: {
      challenge:
        "A private investor wanted to enter the US Amazon marketplace but lacked the technical knowledge to navigate listing suppressions and PPC bleed.",
      solution:
        "X-One Hub managed the complete lifecycle: vetted manufacturers, filed US trademarks, designed 3D render graphics, and ran automated bid scripts.",
      outcome:
        "Reached $1.8M+ in GMV within the first 14 months while locking in an enviable 16.4% target ACOS and Top 1% BSR.",
    },
  },
];

interface PortfolioStackSectionProps {
  onOpenQuote: () => void;
}

export default function PortfolioStackSection({ onOpenQuote }: PortfolioStackSectionProps) {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-32 bg-[#faf9fe] overflow-visible border-t border-purple-100"
    >
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[550px] h-[550px] top-1/4 -right-24 bg-purple-200/35 pointer-events-none" />
      <div className="ambient-glow w-[550px] h-[550px] bottom-1/4 -left-24 bg-violet-200/35 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-700">
                <Layers className="w-3.5 h-3.5" />
              </span>
              <SectionLabel number="04" text="Sticky Deck of Works" />
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0f0f17] tracking-tight">
              Selected <span className="gradient-text-purple">Case Studies</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl font-light">
              Scroll down to watch each client transformation slide over like a deck of cards.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_8px_20px_rgba(124,58,237,0.3)] flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-purple-200" />
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* ── STACKING CARDS CONTAINER ──
            Each card wrapper is sticky with an incremental top offset.
            As the user scrolls, each card stays sticky at the top,
            so the next card appears to slide directly over the previous one like a deck of cards!
        */}
        <div className="relative pb-24">
          {portfolioProjects.map((project, index) => {
            // Calculating progressive sticky top offset: each card leaves a 28px deck tab visible
            const stickyTop = `calc(88px + ${index * 28}px)`;

            return (
              <div
                key={project.id}
                className="sticky mb-20 sm:mb-28 last:mb-0 transition-all duration-300"
                style={{
                  top: stickyTop,
                  zIndex: index + 10,
                }}
              >
                {/* Main Card Element with Deck Elevation & Overlap Shadows */}
                <div className="rounded-3xl bg-white border border-purple-200 shadow-[0_-12px_35px_rgba(124,58,237,0.08),0_25px_60px_rgba(124,58,237,0.14)] hover:shadow-[0_-15px_40px_rgba(124,58,237,0.12),0_30px_70px_rgba(124,58,237,0.2)] transition-all duration-500 overflow-hidden group">
                  {/* Top Bar / Chrome Header with Stacking Tab Indicator */}
                  <div className="px-5 sm:px-8 py-3.5 bg-slate-50/90 border-b border-purple-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      {/* Chrome Window Dots */}
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />

                      <div className="hidden sm:flex items-center gap-1.5 ml-3 font-mono text-[11px] text-slate-500">
                        <Globe className="w-3.5 h-3.5 text-purple-600" />
                        <span>https://xonehub.com/case-studies/{project.id}</span>
                      </div>
                    </div>

                    {/* Deck Card Counter Tag */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-slate-500 hidden sm:inline uppercase">
                        Card
                      </span>
                      <span className="font-mono text-xs font-extrabold text-purple-700 bg-purple-100/90 border border-purple-200 px-3 py-0.5 rounded-full">
                        {project.number} / 04
                      </span>
                    </div>
                  </div>

                  {/* Card Content Grid */}
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                      {/* Left: Project Details, Metrics & CTAs */}
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className={`font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold border ${project.badgeBg}`}
                            >
                              {project.category}
                            </span>
                          </div>

                          <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                            {project.title}
                          </h3>

                          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                            {project.description}
                          </p>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="mt-6 pt-5 border-t border-purple-100">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-bold">
                            Engineered Deliverables
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.services.map((svc, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                <span>{svc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Validated Campaign Performance Results */}
                        <div className="mt-6 pt-5 border-t border-purple-100">
                          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-purple-800 font-bold mb-3">
                            <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                            <span>Validated Impact Metrics</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2.5">
                            {project.results.map((res, i) => (
                              <div
                                key={i}
                                className="px-3 py-2 rounded-xl bg-purple-50/70 border border-purple-100 flex flex-col"
                              >
                                <span className="font-display font-black text-sm sm:text-base text-purple-900">
                                  {res.value}
                                </span>
                                <span className="text-[10px] text-slate-500 font-mono mt-0.5 leading-tight">
                                  {res.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => setActiveModalProject(project)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-[0_4px_15px_rgba(124,58,237,0.25)] transition-all group/btn"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                            <span>Read Full Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button>

                          <Link
                            href={`/services/${project.relatedServiceSlug}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors border border-purple-100"
                          >
                            <span>Explore Capability</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Right: High-Res Interactive Visual Snapshot */}
                      <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-purple-200 shadow-md bg-purple-50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17]/75 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Live Badge Overlay on Image */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none text-white">
                          <span className="text-[11px] font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            X-ONE HUB × {project.title}
                          </span>
                          <span className="text-[11px] font-mono bg-purple-600 px-3 py-1 rounded-full font-bold shadow-sm">
                            Verified Result
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          />
          <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-purple-200 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden max-h-[90vh] flex flex-col z-10 animate-fade-in">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-200 uppercase tracking-widest mb-2">
                <span>{activeModalProject.category}</span>
                <span>• Case Study Snapshot</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {activeModalProject.title}
              </h3>
              <p className="mt-1 text-sm text-purple-100 font-light">
                {activeModalProject.tagline}
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 3 Pillars of case study */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <div className="text-xs font-mono font-bold uppercase text-purple-700 mb-1">
                    01. The Challenge
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeModalProject.caseDetails.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <div className="text-xs font-mono font-bold uppercase text-purple-700 mb-1">
                    02. The Solution
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeModalProject.caseDetails.solution}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <div className="text-xs font-mono font-bold uppercase text-purple-700 mb-1">
                    03. The Result
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeModalProject.caseDetails.outcome}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              {activeModalProject.results && (
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-3">
                    Validated Performance Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {activeModalProject.results.map((res, i) => (
                      <div key={i} className="text-center">
                        <div className="font-display font-black text-xl text-purple-700">
                          {res.value}
                        </div>
                        <div className="text-[11px] text-slate-600 font-mono mt-0.5">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-slate-50 border-t border-purple-100 flex items-center justify-between">
              <Link
                href={`/services/${activeModalProject.relatedServiceSlug}`}
                className="text-xs font-semibold text-purple-700 hover:text-purple-900"
              >
                View Detailed Service Offering →
              </Link>
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenQuote();
                }}
                className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-sm"
              >
                Start A Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
