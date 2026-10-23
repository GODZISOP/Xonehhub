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
    id: "amazon-account-creation",
    number: "01",
    title: "Amazon Seller Central Account Creation & Verification",
    category: "Guaranteed Non-Resident Identity Verification & Approval",
    tagline: "Avoid instant Section 3 suspensions with complete document pre-vetting",
    description:
      "Avoid instant Section 3 suspensions. Professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.",
    clientUrl: "sellercentral.amazon.com",
    relatedServiceSlug: "amazon-account-creation",
    accentColor: "from-orange-600 to-amber-600",
    badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
    services: [
      "Dedicated Fresh Gmail & Account Security",
      "Official Bank Statement 90-Day Alignment",
      "Government Identity Proof (Passport / ID)",
      "Official Utility Bill & Address Verification",
    ],
    results: [
      { label: "Approval Guarantee", value: "100%" },
      { label: "Supported Countries", value: "10+" },
      { label: "Section 3 Rejection", value: "0%" },
    ],
    image: "/images/amazon-account-creation.jpg",
    caseDetails: {
      challenge:
        "Every document must be perfectly formatted and pre-audited to avoid automatic rejection and instant Day 1 Section 3 suspension by Amazon verification bots.",
      solution:
        "Our legal and account specialists inspect your ID, bank statement, and utility bill to ensure 100% character-by-character matching before submission.",
      outcome:
        "100% active Seller Central account with green health status, completed W-8BEN tax interview, and live video verification coaching.",
    },
  },
  {
    id: "brand-approvals",
    number: "02",
    title: "Amazon Brand Approvals & Ungating Packages",
    category: "Guaranteed Amazon Brand Approvals",
    tagline: "Official approvals to sell big brands on Amazon with real LOA & invoices",
    description:
      "Get official approvals to sell big brands on Amazon. We provide real Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete account setup.",
    clientUrl: "sellercentral.amazon.com/brands",
    relatedServiceSlug: "brand-approvals",
    accentColor: "from-purple-600 to-indigo-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    services: [
      "Letter of Authorization (LOA) Direct From Brand",
      "Proforma & Paid Invoices with Company Name",
      "Brand Registry Permissions Configuration",
      "Full Ungating Setup Inside Seller Central",
    ],
    results: [
      { label: "Profit Margins", value: "20% to 70%" },
      { label: "Processing Speed", value: "3 to 5 Days" },
      { label: "Amazon Approval", value: "100% Safe" },
    ],
    image: "/images/brand-approvals.jpg",
    caseDetails: {
      challenge:
        "Top-selling high-margin brands are gated on Amazon, and sellers get rejected when submitting invalid retail receipts or non-compliant paperwork.",
      solution:
        "We provide direct letters from brands giving official permission, alongside real distributor commercial invoices matching your exact business details.",
      outcome:
        "Fully unlocked selling permissions in Seller Central with safe approvals and 20% to 70% profit margin catalog access.",
    },
  },
  {
    id: "us-llc-formation",
    number: "03",
    title: "US LLC Formation (Wyoming, Florida & Texas)",
    category: "#1 Choice for Non-Resident International Founders",
    tagline: "Turnkey US incorporation with Secretary of State filings & IRS EIN",
    description:
      "Zero hidden charges. Everything required to sell on Amazon US and open US bank accounts: state filing fee included, 1 full year registered agent, commercial address, federal IRS EIN without SSN, and FinCEN BOI filing.",
    clientUrl: "sos.wyo.gov",
    relatedServiceSlug: "wyoming-llc",
    accentColor: "from-blue-600 to-indigo-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    services: [
      "Secretary of State Filing Fee Included",
      "Registered Agent Service (1 Full Year Included)",
      "Official US Commercial Street Address (1 Year)",
      "IRS Federal EIN (Tax ID) Without SSN",
    ],
    results: [
      { label: "State Income Tax", value: "0%" },
      { label: "Formation Speed", value: "2-4 Days" },
      { label: "Package Price", value: "$500 Flat" },
    ],
    image: "/images/wyoming-llc.jpg",
    caseDetails: {
      challenge:
        "International founders without a US visa or SSN face steep legal hurdles, complex state requirements, and bank onboarding rejections.",
      solution:
        "We handle the state filing, official agent appointments, federal tax IDs, and bank onboarding so you don't face any rejections.",
      outcome:
        "100% remote online setup with Articles of Organization, IRS EIN confirmation letter, and instant US bank account eligibility.",
    },
  },
  {
    id: "amazon-wholesale-fba",
    number: "04",
    title: "Complete Amazon Wholesale Account Management",
    category: "Complete Wholesale FBA Operations",
    tagline: "Direct brand purchasing, shipment plans & daily BuyBox repricing",
    description:
      "We handle everything for your Wholesale FBA business: direct brand purchasing, shipment plans with prep centers, and daily BuyBox account management.",
    clientUrl: "sellercentral.amazon.com/fba",
    relatedServiceSlug: "amazon-wholesale-fba",
    accentColor: "from-emerald-600 to-teal-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    services: [
      "Direct Wholesale Accounts with Brands",
      "Send-to-Amazon (STA) Inbound Shipment Plans",
      "Prep Center Barcode & Box Labeling",
      "Daily BuyBox Repricing & Inventory Restock",
    ],
    results: [
      { label: "Months 1 & 2 Fee", value: "$300 / mo" },
      { label: "Month 3 Onwards", value: "Profit %" },
      { label: "Account Health", value: "100% Green" },
    ],
    image: "/images/amazon-wholesale-fba.jpg",
    caseDetails: {
      challenge:
        "Running wholesale FBA requires continuous brand outreach, complex Send-to-Amazon prep plans, and constant price adjustments to win sales.",
      solution:
        "We take care of the heavy lifting from buying products with real commercial invoices to prep labels, inventory tracking, and daily repricing.",
      outcome:
        "Zero monthly retainer from Month 3 onwards! Once your sales are running, we only earn based on a percentage of net profit.",
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
