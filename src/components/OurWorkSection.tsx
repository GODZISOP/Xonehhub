"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./ui/SectionLabel";
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2, X, ExternalLink, Globe } from "lucide-react";

interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: "all" | "ecommerce" | "branding" | "marketing";
  tagline: string;
  description: string;
  clientUrl: string;
  relatedServiceSlug: string;
  services: string[];
  results?: { label: string; value: string }[];
  image: string;
  caseDetails: {
    challenge: string;
    solution: string;
    outcome: string;
  };
}

const projects: ProjectData[] = [
  {
    id: "korean-skins-care",
    number: "01",
    title: "Korean Skins Care",
    category: "E-Commerce & Brand Architecture",
    filterCategory: "ecommerce",
    tagline: "Global direct-to-consumer authentic skincare storefront",
    description:
      "We engineered an end-to-end e-commerce infrastructure for Korean Skins Care, delivering authentic Korean beauty cosmetics across international markets with sub-second page performance.",
    clientUrl: "koreanskinscare.com",
    relatedServiceSlug: "web-development",
    services: [
      "Logo and Brand System Design",
      "Full UI/UX Digital Architecture",
      "Custom Shopify 2.0 Storefront Build",
      "Social Media Management & Virality",
    ],
    results: [
      { label: "Checkout Conversion Rate", value: "+4.8%" },
      { label: "Global Order Fulfillment", value: "32+ Countries" },
      { label: "Organic Monthly Visitors", value: "45K+" },
    ],
    image: "/images/korean-skincare.jpg",
    caseDetails: {
      challenge:
        "The client had high quality Korean skincare products but suffered from slow page speeds and low mobile conversion rates with off-the-shelf templates.",
      solution:
        "X-One Hub designed a bespoke Shopify 2.0 storefront with instant search, curated skincare quiz funnels, and a rapid checkout drawer.",
      outcome:
        "Conversion surged by +4.8%, with 45K+ organic monthly visitors and seamless distribution across 32 countries.",
    },
  },
  {
    id: "clothing-thrift-stores",
    number: "02",
    title: "Clothing Thrift Stores",
    category: "Brand Identity & Sustainable Packaging",
    filterCategory: "branding",
    tagline: "Contemporary eco-conscious fashion identity system",
    description:
      "A bold, timeless visual identity for Clothing Thrift Stores, pairing sustainable values with editorial typography across physical packaging and digital touchpoints.",
    clientUrl: "clothingthriftstores.co",
    relatedServiceSlug: "graphic-design",
    services: [
      "Corporate Stationery & Dielines",
      "Eco-Friendly Packaging & Unboxing",
      "Custom Apparel Woven Labels & Tags",
      "Digital Editorial Lookbooks",
    ],
    results: [
      { label: "Brand Recall & Sentiment", value: "98.4%" },
      { label: "Packaging Recyclability", value: "100%" },
      { label: "Retail Footfall Surge", value: "+215%" },
    ],
    image: "/images/thrift-stores.jpg",
    caseDetails: {
      challenge:
        "Thrift fashion was perceived as disorganized. The brand needed an elevated editorial look that felt as premium as high-end designer boutiques.",
      solution:
        "Crafted a minimalist visual language with bespoke typography, 100% recyclable cardboard unboxing experiences, and collectible merchandise tags.",
      outcome:
        "A +215% surge in retail footfall and 98.4% brand sentiment across online and in-store customer reviews.",
    },
  },
  {
    id: "comfort-shoes-smm",
    number: "03",
    title: "Comfort Shoes SMM",
    category: "Viral Social Media Marketing",
    filterCategory: "marketing",
    tagline: "Explosive organic outreach & non-follower conversion campaign",
    description:
      "A strategic social media marketing campaign focused on algorithmically driven short-form video hooks, achieving unprecedented virality and customer acquisition.",
    clientUrl: "comfortshoes.com",
    relatedServiceSlug: "digital-marketing",
    services: [
      "Viral Short-Form Video Production",
      "Algorithmic Distribution Architecture",
      "Influencer Seeding & Creative Strategy",
      "Direct-Response Paid Retargeting",
    ],
    results: [
      { label: "Views Increase", value: "+306%" },
      { label: "Organic Reach Growth", value: "+347%" },
      { label: "Views From Non-Followers", value: "91%" },
      { label: "Non-Follower Reach", value: "1.5K+" },
      { label: "User Interactions Increase", value: "+120%" },
    ],
    image: "/images/comfort-shoes.jpg",
    caseDetails: {
      challenge:
        "High ad fatigue and rising customer acquisition costs required an organic virality strategy that didn't depend solely on paid media spend.",
      solution:
        "Developed hook-driven reels and authentic customer comfort tests with kinetic editing that captured high algorithmic watch-time.",
      outcome:
        "Organic reach skyrocketed +347%, with 91% of viewership from brand-new non-followers and a 120% jump in web sales inquiries.",
    },
  },
];

interface OurWorkSectionProps {
  onOpenQuote: () => void;
}

export default function OurWorkSection({ onOpenQuote }: OurWorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "ecommerce" | "branding" | "marketing">("all");
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const filteredProjects = projects.filter((p) =>
    activeFilter === "all" ? true : p.filterCategory === activeFilter
  );

  return (
    <section id="portfolio" className="relative py-28 md:py-36 bg-[#faf8ff] overflow-hidden border-t border-purple-100">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[550px] h-[550px] top-1/4 -right-24 bg-purple-200/40" />
      <div className="ambient-glow w-[550px] h-[550px] bottom-1/4 -left-24 bg-violet-200/40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel number="05" text="Portfolio & Case Studies" />
            <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight">
              Selected <span className="gradient-text-purple">Works</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-purple-100 shadow-sm">
              {[
                { id: "all", label: "All (3)" },
                { id: "ecommerce", label: "E-Commerce" },
                { id: "branding", label: "Branding" },
                { id: "marketing", label: "Marketing" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeFilter === tab.id
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-full border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm flex items-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Award-Winning Snapshot Showcase Boxes */}
        <div className="space-y-12 md:space-y-16">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-purple-100/90 shadow-[0_20px_50px_rgba(124,58,237,0.06)] hover:border-purple-300 hover:shadow-[0_25px_65px_rgba(124,58,237,0.12)] transition-all duration-500 overflow-hidden group"
              >
                {/* Browser-style Top Chrome Header */}
                <div className="px-6 py-3.5 bg-slate-50 border-b border-purple-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    <span className="ml-3 font-mono text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-purple-600" />
                      https://xonehub.com/work/{project.id}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-purple-700 bg-purple-100/70 px-2.5 py-0.5 rounded-md">
                      {project.number} / 03
                    </span>
                  </div>
                </div>

                {/* Inner Content Grid */}
                <div className="p-6 sm:p-10 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left: Project Details & Numbers */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-mono text-xs uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full font-semibold">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="font-display font-black text-3xl sm:text-4xl text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                          {project.description}
                        </p>
                      </div>

                      {/* Services Delivered */}
                      <div className="mt-6 pt-6 border-t border-purple-100">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                          Services Provided
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

                      {/* Verified Campaign Results Grid */}
                      {project.results && (
                        <div className="mt-6 pt-6 border-t border-purple-100">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-800 font-semibold mb-3">
                            <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                            <span>Campaign Performance Results</span>
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {project.results.map((res, i) => (
                              <div
                                key={i}
                                className="px-3.5 py-2 rounded-xl bg-purple-50 border border-purple-100 flex flex-col"
                              >
                                <span className="font-display font-extrabold text-base sm:text-lg text-purple-800">
                                  {res.value}
                                </span>
                                <span className="text-[10px] text-slate-600 font-mono">
                                  {res.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-[0_5px_20px_rgba(124,58,237,0.25)] transition-all group/btn"
                        >
                          <Sparkles className="w-4 h-4 text-purple-200" />
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>

                        <Link
                          href={`/services/${project.relatedServiceSlug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                          <span>Explore Capability</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Beautifully Contained & Framed Image Snapshot */}
                    <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-purple-200 shadow-md bg-purple-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17]/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-white">
                        <span className="text-xs font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          X ONE HUB × {project.title}
                        </span>
                        <span className="text-xs font-mono bg-purple-600 px-3 py-1 rounded-full font-bold">
                          {project.category.split("&")[0].trim()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          />
          <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-purple-200 shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden max-h-[90vh] flex flex-col z-10 animate-fade-in">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-700 to-indigo-800 text-white relative">
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
              {/* Image banner */}
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
            <div className="p-6 bg-slate-50 border-t border-purple-100 flex items-center justify-between">
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
                className="px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-sm"
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
