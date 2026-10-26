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
  filterCategory: "all" | "amazon" | "approvals" | "llc";
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
    id: "amazon-account-creation",
    number: "01",
    title: "Amazon Seller Central Account Creation & Verification",
    category: "Guaranteed Non-Resident Identity Verification & Approval",
    filterCategory: "amazon",
    tagline: "Avoid instant Section 3 suspensions with complete document pre-vetting",
    description:
      "Avoid instant Section 3 suspensions. Professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.",
    clientUrl: "sellercentral.amazon.com",
    relatedServiceSlug: "amazon-account-creation",
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
    image: "/images/service-amazon.jpg",
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
    filterCategory: "approvals",
    tagline: "Official approvals to sell big brands on Amazon with real LOA & invoices",
    description:
      "Get official approvals to sell big brands on Amazon. We provide real Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete account setup.",
    clientUrl: "sellercentral.amazon.com/brands",
    relatedServiceSlug: "brand-approvals",
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
    image: "/images/service-marketing.jpg",
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
    filterCategory: "llc",
    tagline: "Turnkey US incorporation with Secretary of State filings & IRS EIN",
    description:
      "Zero hidden charges. Everything required to sell on Amazon US and open US bank accounts: state filing fee included, 1 full year registered agent, commercial address, federal IRS EIN without SSN, and FinCEN BOI filing.",
    clientUrl: "sos.wyo.gov",
    relatedServiceSlug: "wyoming-llc",
    services: [
      "Secretary of State Filing Fee Included",
      "Registered Agent Service (1 Full Year Included)",
      "Official US Commercial Street Address (1 Year)",
      "IRS Federal EIN (Tax ID) Without SSN",
    ],
    results: [
      { label: "State Income Tax", value: "0%" },
      { label: "Formation Speed", value: "2-4 Days" },
      { label: "Filing Status", value: "Turnkey Complete" },
    ],
    image: "/images/service-web.jpg",
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
    filterCategory: "amazon",
    tagline: "Direct brand purchasing, shipment plans & daily BuyBox repricing",
    description:
      "We handle everything for your Wholesale FBA business: direct brand purchasing, shipment plans with prep centers, and daily BuyBox account management.",
    clientUrl: "sellercentral.amazon.com/fba",
    relatedServiceSlug: "amazon-wholesale-fba",
    services: [
      "Direct Wholesale Accounts with Brands",
      "Send-to-Amazon (STA) Inbound Shipment Plans",
      "Prep Center Barcode & Box Labeling",
      "Daily BuyBox Repricing & Inventory Restock",
    ],
    results: [
      { label: "Dedicated Onboarding", value: "Full Setup" },
      { label: "Ongoing Growth", value: "Profit Share" },
      { label: "Account Health", value: "100% Green" },
    ],
    image: "/images/service-amazon.jpg",
    caseDetails: {
      challenge:
        "Running wholesale FBA requires continuous brand outreach, complex Send-to-Amazon prep plans, and constant price adjustments to win sales.",
      solution:
        "We take care of the heavy lifting from buying products with real commercial invoices to prep labels, inventory tracking, and daily repricing.",
      outcome:
        "Complete hands-free wholesale operations! Once your sales are running, our incentives are aligned on net profit growth.",
    },
  },
];

interface OurWorkSectionProps {
  onOpenQuote: () => void;
}

export default function OurWorkSection({ onOpenQuote }: OurWorkSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "amazon" | "approvals" | "llc">("all");
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
