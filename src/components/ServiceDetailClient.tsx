"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceDetail, servicesData } from "@/data/servicesData";
import CustomCursor from "@/components/ui/CustomCursor";
import QuoteModal from "@/components/QuoteModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  Users,
  FileCheck2,
  Receipt,
  Unlock,
  Check,
} from "lucide-react";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

const CATEGORY_COLOR: Record<string, string> = {
  "Amazon Growth": "bg-orange-50 text-orange-700 border-orange-200",
  "US Corporate": "bg-blue-50 text-blue-700 border-blue-200",
  "Creative Studio": "bg-purple-50 text-purple-700 border-purple-200",
  "Digital Marketing": "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. DEDICATED LAYOUT: AMAZON ACCOUNT CREATION
  // ─────────────────────────────────────────────────────────────────────────────
  if (service.slug === "amazon-account-creation") {
    return (
      <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
        <CustomCursor />
        <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.07),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-6 z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-purple-700 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-purple-700 font-semibold">Amazon Account Creation</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Guaranteed Non-Resident Identity Verification &amp; Approval</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight leading-tight mb-6">
              Amazon Seller Central <br />
              <span className="text-purple-700">Account Creation &amp; Verification</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Avoid instant Section 3 suspensions. Professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20create%20and%20verify%20my%20Amazon%20Seller%20Central%20account."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-105"
              >
                <span>Start Account Setup</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#required-documents"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm sm:text-base border border-slate-200 transition-colors"
              >
                View Document Checklist
              </a>
            </div>

            {/* Visual Feature Showcase Image */}
            <div className="mt-12 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-purple-200/80 shadow-[0_20px_50px_rgba(124,58,237,0.15)] bg-slate-900/5 p-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                    Official Document Verification
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandatory Checklist: Required Documents For Approval */}
        <section id="required-documents" className="py-20 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 block mb-2">
                Mandatory Checklist
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f0f17] mb-3">
                Required Documents For Approval
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light">
                Every document must be perfectly formatted and pre-audited to avoid automatic rejection by Amazon&apos;s verification bots:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 01 */}
              <div className="bg-[#faf8ff] border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-600">01</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200">
                      Account Security
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0f0f17] mb-2">Dedicated Gmail &amp; Password</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    A completely fresh, clean Google/Gmail address that has never been linked to any existing Amazon buyer or seller account.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-700 font-semibold border-t border-purple-100 pt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified By Xonehub Team</span>
                </div>
              </div>

              {/* Card 02 */}
              <div className="bg-[#faf8ff] border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-600">02</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200">
                      Financial Proof
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0f0f17] mb-2">Bank Account Statement</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    Official bank statement (Digital bank like Wise/Payoneer or local bank) in PDF format, dated within the last 90 days, with exact matching legal name and residential address.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-700 font-semibold border-t border-purple-100 pt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified By Xonehub Team</span>
                </div>
              </div>

              {/* Card 03 */}
              <div className="bg-[#faf8ff] border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-600">03</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200">
                      Identity Verification
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0f0f17] mb-2">Government Identity Proof</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 whitespace-pre-line font-light">
                    • Pakistan: CNIC (Smart ID) or Passport{"\n"}
                    • India: Aadhaar Card or Passport{"\n"}
                    • Other Countries: National Identity Card or Passport{"\n"}
                    (High-resolution color scan with all 4 corners visible and min. 6 months validity).
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-700 font-semibold border-t border-purple-100 pt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified By Xonehub Team</span>
                </div>
              </div>

              {/* Card 04 */}
              <div className="bg-[#faf8ff] border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-600">04</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200">
                      Address Verification
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0f0f17] mb-2">Official Utility Bill</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    Electricity, piped gas, water, or landline internet bill matching your exact legal name and residential address to pass Amazon Section 3 and automated utility bill verification.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-700 font-semibold border-t border-purple-100 pt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified By Xonehub Team</span>
                </div>
              </div>

              {/* Card 05 */}
              <div className="bg-[#faf8ff] border border-purple-100 hover:border-purple-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative shadow-sm group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-purple-600">05</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200">
                      Charge Method
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0f0f17] mb-2">International Credit / Debit Card</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    An active Visa or Mastercard enabled for international online e-commerce transactions for the Amazon monthly seller subscription fee.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-purple-700 font-semibold border-t border-purple-100 pt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified By Xonehub Team</span>
                </div>
              </div>

              {/* Our Guarantee Card */}
              <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-purple-300 block mb-2">
                    Our Guarantee
                  </span>
                  <h3 className="text-xl font-display font-black text-white mb-3">
                    Pre-Submission Audit
                  </h3>
                  <p className="text-purple-100 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    Don&apos;t risk submitting unverified documents. Send them to us first on WhatsApp. We inspect character-by-character formatting, bank watermarks, and resolution before anything touches Amazon.
                  </p>
                </div>
                <a
                  href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20please%20pre-audit%20my%20documents%20for%20Amazon%20Account%20Creation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
                >
                  <span>Free Document Pre-Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Coverage: Supported Countries & Major Marketplaces */}
        <section className="py-20 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 block mb-2">
                Global Coverage
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f0f17] mb-3">
                Supported Countries &amp; Major Marketplaces
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light">
                We register and verify active seller accounts for founders residing across 10+ countries worldwide:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { flag: "🇵🇰", country: "Pakistan", docs: "CNIC / Smart Card & Passport", badge: "High Demand" },
                { flag: "🇮🇳", country: "India", docs: "Aadhaar Card & Passport", badge: "High Demand" },
                { flag: "🌍", country: "Other Countries", docs: "National Identity Card / Passport", badge: "High Demand" },
                { flag: "🇺🇸", country: "United States (USA)", docs: "State ID / Driver's License / Passport", badge: "High Demand" },
                { flag: "🇬🇧", country: "United Kingdom (UK)", docs: "National ID / Passport", badge: "High Demand" },
                { flag: "🇦🇪", country: "Dubai / UAE", docs: "Emirates ID / Passport", badge: "High Demand" },
                { flag: "🇸🇦", country: "Saudi Arabia (KSA)", docs: "Iqama / National ID / Passport", badge: "High Demand" },
                { flag: "🇨🇦", country: "Canada", docs: "Amazon.ca (North America)" },
                { flag: "🇶🇦", country: "Qatar & Oman", docs: "Amazon Gulf Network" },
              ].map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-purple-100 hover:border-purple-300 p-5 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl">{c.flag}</span>
                    <div>
                      <h4 className="font-display font-bold text-[#0f0f17] text-sm sm:text-base">{c.country}</h4>
                      <p className="text-slate-500 text-xs font-mono">{c.docs}</p>
                    </div>
                  </div>
                  {c.badge && (
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-700 border border-purple-200">
                      {c.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approval Process: How We Guarantee Approval */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 block mb-2">
                Approval Process
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-2">
                How We Guarantee Approval
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Our structured methodology minimizes rejection risks to nearly zero.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Document Pre-Audit & Vetting",
                  desc: "Our legal and account specialists inspect your ID (CNIC/Aadhaar/National ID), bank statement, and utility bill to ensure 100% character-by-character address and name matching before submission.",
                },
                {
                  step: "02",
                  title: "Charge & Deposit Method Setup",
                  desc: "We configure your payout receiving account (Wise, Payoneer, or US bank) and verify your international card compatibility for uninterrupted billing.",
                },
                {
                  step: "03",
                  title: "Seller Central Filing & Tax Interview",
                  desc: "We guide your application submission and complete the mandatory US W-8BEN (non-resident) or relevant regional tax interview accurately.",
                },
                {
                  step: "04",
                  title: "Identity Clearance & Active Account Handover",
                  desc: "We assist through automated identity checks and live video verification until your Seller Central account is 100% active with green health status.",
                },
              ].map((s, idx) => (
                <div key={idx} className="bg-[#faf8ff] border border-purple-100 p-6 rounded-2xl relative shadow-sm">
                  <span className="font-mono text-3xl font-black text-purple-600 block mb-3">{s.step}</span>
                  <h4 className="font-display font-bold text-[#0f0f17] text-base mb-2">{s.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Service Package Box */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 border border-purple-300/30 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="inline-block px-3.5 py-1 rounded-full bg-purple-500 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
                Full-Service Package
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-white mb-4">
                Amazon Account Creation &amp; Verification
              </h2>
              <p className="text-purple-100 text-sm sm:text-base max-w-md mx-auto mb-8 font-light">
                Includes comprehensive document pre-screening, Section 3 safeguard, tax interview completion, and live approval support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8 text-left text-xs sm:text-sm text-purple-100">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                  <span>Document Pre-Submission Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                  <span>Bank Statement Alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                  <span>W-8BEN / Regional Tax Interview</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                  <span>Video Verification Coaching</span>
                </div>
              </div>

              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20get%20started%20and%20verify%20my%20Amazon%20Seller%20Central%20account."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-display font-bold text-base transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105"
              >
                <span>Get Started on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Clear answers about creating and passing Amazon verification.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#0f0f17]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-purple-600 shrink-0 transition-transform ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. DEDICATED LAYOUT: BRAND APPROVALS
  // ─────────────────────────────────────────────────────────────────────────────
  if (service.slug === "brand-approvals") {
    return (
      <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
        <CustomCursor />
        <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.07),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-6 z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-purple-700 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-purple-700 font-semibold">Brand Approvals</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Guaranteed Amazon Brand Approvals</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight leading-tight mb-6">
              Amazon Brand Approvals &amp; <br />
              <span className="text-purple-700">Ungating Packages</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Get official approvals to sell big brands on Amazon. We provide real Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete account setup.
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20need%20brand%20approvals%20and%20ungating%20for%20my%20Amazon%20account."
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-105"
              >
                <span>Contact on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Feature Showcase Image */}
            <div className="mt-12 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-purple-200/80 shadow-[0_20px_50px_rgba(124,58,237,0.15)] bg-slate-900/5 p-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                    Direct Brand Approvals &amp; LOA
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Feature Cards */}
        <section className="py-16 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-[#0f0f17] mb-2">Letter of Authorization (LOA)</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Direct letter from the brand giving your company official permission to sell their products on Amazon.
                </p>
              </div>

              <div className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-[#0f0f17] mb-2">Proforma &amp; Paid Invoices</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  100% real distributor invoices with your company name, address, and purchased quantities.
                </p>
              </div>

              <div className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-[#0f0f17] mb-2">Brand Registry Approval</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  We configure your brand permissions so your account is officially recognized and approved.
                </p>
              </div>

              <div className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
                  <Unlock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-[#0f0f17] mb-2">Seller Central Ungating</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  We submit all documents directly inside your Amazon account until selling is fully unlocked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Pricing: Choose Your Package */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 block mb-2">
                Approval Tiers
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-2">
                Choose Your Target Margin
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Pick the profit margin percentage you want for your approved brands.
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tier 1 */}
              <div className="rounded-3xl p-6 flex flex-col justify-between bg-[#faf8ff] border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all relative">
                <div>
                  <span className="text-xs font-mono text-purple-700 bg-purple-100 px-3 py-1 rounded-full font-bold inline-block mb-3">
                    Tier 1
                  </span>
                  <div className="mb-4 pb-4 border-b border-slate-200">
                    <span className="font-display font-black text-2xl sm:text-3xl text-purple-700 block">20% – 30%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-1">Profit Margin Range</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed font-light">
                    Get brand approvals with 20% to 30% profit margin and complete documents to start selling.
                  </p>
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      What is included:
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>20% to 30% Profit Margin Brands</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Letter of Authorization (LOA)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Brand Registry Approval</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Proforma Invoice &amp; Paid Invoices</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Full Ungating Setup in Seller Central</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Safe &amp; Approved by Amazon</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20the%20Tier%201%20(20%25%20to%2030%25%20Profit%20Margin)%20Brand%20Approval%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Tier 2 */}
              <div className="rounded-3xl p-6 flex flex-col justify-between bg-[#faf8ff] border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all relative">
                <div>
                  <span className="text-xs font-mono text-purple-700 bg-purple-100 px-3 py-1 rounded-full font-bold inline-block mb-3">
                    Tier 2
                  </span>
                  <div className="mb-4 pb-4 border-b border-slate-200">
                    <span className="font-display font-black text-2xl sm:text-3xl text-purple-700 block">20% – 45%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-1">Profit Margin Range</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed font-light">
                    Get brand approvals with 20% to 45% profit margin for bigger profits and variety.
                  </p>
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      What is included:
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>20% to 45% Profit Margin Brands</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Letter of Authorization (LOA)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Brand Registry Approval</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Proforma Invoice &amp; Paid Invoices</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Full Ungating Setup in Seller Central</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Fast 3 to 5 Days Processing</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20the%20Tier%202%20(20%25%20to%2045%25%20Profit%20Margin)%20Brand%20Approval%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Package 3 */}
              <div className="rounded-3xl p-6 flex flex-col justify-between bg-[#faf8ff] border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all relative">
                <div>
                  <span className="text-xs font-mono text-purple-700 bg-purple-100 px-3 py-1 rounded-full font-bold inline-block mb-3">
                    Package 3
                  </span>
                  <div className="mb-4 pb-4 border-b border-slate-200">
                    <span className="font-display font-black text-2xl sm:text-3xl text-purple-700 block">20% to 50%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-1">Profit Margin Tier</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed font-light">
                    Get brand approvals with 20% to 50% profit margin to sell popular high-demand items.
                  </p>
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      What is included:
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>20% to 50% Profit Margin Brands</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Letter of Authorization (LOA)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Brand Registry Approval</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Proforma Invoice &amp; Paid Invoices</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Full Ungating Setup in Seller Central</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>High Profit Brand List</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20the%20Package%203%20(20%25%20to%2050%25%20Profit%20Margin)%20Brand%20Approval%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Package 4 */}
              <div className="rounded-3xl p-6 flex flex-col justify-between bg-[#faf8ff] border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all relative">
                <div>
                  <span className="text-xs font-mono text-purple-700 bg-purple-100 px-3 py-1 rounded-full font-bold inline-block mb-3">
                    Package 4
                  </span>
                  <div className="mb-4 pb-4 border-b border-slate-200">
                    <span className="font-display font-black text-2xl sm:text-3xl text-purple-700 block">20% to 70%</span>
                    <span className="text-xs font-bold text-slate-800 block mt-1">Profit Margin Tier</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed font-light">
                    Get brand approvals with 20% to 70% profit margin for maximum selling profits.
                  </p>
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      What is included:
                    </span>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>20% to 70% Profit Margin Brands</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Letter of Authorization (LOA)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Brand Registry Approval</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Proforma Invoice &amp; Paid Invoices</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Full Ungating Setup in Seller Central</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Top Selling Big Brands Included</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Priority Support</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20the%20Package%204%20(20%25%20to%2070%25%20Profit%20Margin)%20Brand%20Approval%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions: Frequently Asked Questions */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600 block mb-1">
                Common Questions
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#0f0f17]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-purple-600 shrink-0 transition-transform ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to get your brand approvals? */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="rounded-3xl bg-[#faf8ff] border border-purple-100 p-8 sm:p-12 shadow-sm">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-3">
                Ready to get your brand approvals?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light max-w-xl mx-auto mb-6">
                Contact us on WhatsApp now. Tell us which brands you want and we will start your paperwork today.
              </p>
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20need%20brand%20approvals%20and%20ungating%20for%20my%20Amazon%20account."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm shadow-[0_8px_25px_rgba(124,58,237,0.35)] transition-all"
              >
                <span>Contact on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. DEDICATED LAYOUT: WYOMING LLC
  // ─────────────────────────────────────────────────────────────────────────────
  if (service.slug === "wyoming-llc") {
    return (
      <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
        <CustomCursor />
        <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.07),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-6 z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-purple-700 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-purple-700 font-semibold">Wyoming LLC</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold mb-6">
              <span>👑 #1 Recommended State for Non-Residents</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight leading-tight mb-6">
              Wyoming LLC Formation
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
              The most popular choice for international founders. Low fees, strong privacy, zero state income tax, and the fastest formation timeline.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20form%20my%20Wyoming%20LLC."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-105"
              >
                <span>Form My Wyoming LLC →</span>
              </a>
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20have%20questions%20about%20Wyoming%20LLC%20formation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm sm:text-base border border-slate-200 transition-colors"
              >
                Ask Questions First
              </a>
            </div>

            {/* Visual Feature Showcase Image */}
            <div className="mt-12 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-purple-200/80 shadow-[0_20px_50px_rgba(124,58,237,0.15)] bg-slate-900/5 p-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                    Official Wyoming SOS Filing
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Wyoming is the #1 Choice for Non-Residents */}
        <section className="py-20 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f0f17] mb-3">
                Why Wyoming is the #1 Choice for Non-Residents
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light">
                Over 70% of our international e-commerce clients choose Wyoming. Here&apos;s why.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Lowest Ongoing Fees",
                  desc: "Low state filing fee and minimal annual report requirements. No franchise tax. No minimum capital requirements.",
                },
                {
                  title: "Strong Privacy",
                  desc: "Wyoming does not require member names to be listed in public Secretary of State filings. Your identity stays completely private.",
                },
                {
                  title: "No State Income Tax",
                  desc: "Wyoming has zero state personal income tax and zero state corporate income tax. Perfect for international e-commerce founders.",
                },
                {
                  title: "Fast Formation",
                  desc: "Wyoming LLC filing approved within 2-4 business days. Official IRS EIN issued in 10-14 business days without an SSN.",
                },
                {
                  title: "Strong Asset Protection",
                  desc: "Wyoming pioneered the LLC and has some of the strongest charging order protection laws in the USA, shielding personal assets.",
                },
                {
                  title: "Non-Resident Friendly",
                  desc: "No requirement to visit the US or have a US SSN/ITIN. 100% remote online setup with complete legal authority.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-display font-bold text-[#0f0f17] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wyoming vs Delaware Comparison */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-2">
                Wyoming vs Delaware — Which is Right for You?
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Both are excellent states, but the right choice depends on your business model.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[#0f0f17]">
                    <th className="p-4 font-bold font-display">Feature</th>
                    <th className="p-4 font-bold font-display text-purple-700 bg-purple-50/60">Wyoming ★ Recommended</th>
                    <th className="p-4 font-bold font-display text-slate-700">Delaware</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">State Filing Fee</td>
                    <td className="p-4 text-purple-900 bg-purple-50/30 font-medium">Included in package</td>
                    <td className="p-4 text-slate-600">State fee + Franchise fee</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Annual Report Fee</td>
                    <td className="p-4 text-purple-900 bg-purple-50/30 font-medium">Lowest in US</td>
                    <td className="p-4 text-slate-600">Annual franchise tax applies</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">State Income Tax</td>
                    <td className="p-4 text-purple-900 bg-purple-50/30 font-medium">0% None</td>
                    <td className="p-4 text-slate-600">8.7% on income earned in DE</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Privacy &amp; Anonymity</td>
                    <td className="p-4 text-purple-900 bg-purple-50/30 font-medium">Strong (Anonymous LLC)</td>
                    <td className="p-4 text-slate-600">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Best For</td>
                    <td className="p-4 text-purple-900 bg-purple-50/30 font-medium">Amazon FBA, E-Commerce, Non-Residents</td>
                    <td className="p-4 text-slate-600">Startups seeking US Venture Capital</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-800">Full All-Inclusive Package</td>
                    <td className="p-4 text-purple-900 bg-purple-50/30 font-bold">Turnkey Setup</td>
                    <td className="p-4 text-slate-600">Standard Filing Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Package Box: What's Included in Your Wyoming Formation */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f0f17] mb-2">
                What&apos;s Included in Your Wyoming Formation
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Zero hidden charges. Everything required to sell on Amazon US and open US bank accounts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 border border-purple-300/30 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="inline-block px-3.5 py-1 rounded-full bg-purple-500 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4">
                All-Inclusive Package
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-1">
                Turnkey Wyoming Formation
              </h3>
              <span className="text-xs font-mono text-purple-300 block mb-3">100% Non-Resident Ready</span>
              <div className="text-2xl sm:text-3xl font-display font-black text-white mb-4">
                Turnkey Package <span className="text-xs font-normal text-purple-200">/ all-inclusive</span>
              </div>
              <p className="text-purple-100 text-xs sm:text-sm max-w-md mx-auto mb-8 font-light">
                We handle state filings, official agent appointments, federal tax IDs, and bank onboarding so you don&apos;t face any rejections.
              </p>

              <div className="space-y-2.5 max-w-lg mx-auto mb-8 text-left text-xs sm:text-sm text-purple-100">
                {[
                  "Wyoming Secretary of State Filing Fee (Included)",
                  "Registered Agent Service (1 Full Year Included)",
                  "Official US Commercial Business Address (1 Year)",
                  "IRS Federal EIN (Tax ID) for Non-Residents without SSN",
                  "Customized Operating Agreement for Bank & Amazon Verification",
                  "FinCEN BOI (Beneficial Ownership Information) Compliance Filing",
                  "US Business Bank Account Setup Support (Mercury / Relay / Wise / Stripe)",
                  "Articles of Organization Certified Digital Copy",
                  "Dedicated Account Manager on WhatsApp",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20start%20my%20Wyoming%20LLC%20formation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-display font-bold text-base transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105"
              >
                <span>Start Wyoming LLC Formation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Everything you need to know about non-resident Wyoming LLCs.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#0f0f17]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-purple-600 shrink-0 transition-transform ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. DEDICATED LAYOUT: FLORIDA LLC
  // ─────────────────────────────────────────────────────────────────────────────
  if (service.slug === "florida-llc") {
    return (
      <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
        <CustomCursor />
        <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative pt-36 pb-16 bg-white border-b border-slate-200 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.07),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-6 z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-purple-700 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-purple-700 font-semibold">Florida LLC</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold mb-6">
              <span>Gateway for E-Commerce &amp; East Coast Amazon FBA</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight leading-tight mb-6">
              Florida LLC <br />
              <span className="text-purple-700">Formation Service</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Launch your commercial presence in the nation’s top trade state with turnkey support. Zero personal state income tax, direct Sunbiz electronic processing, and unmatched logistics access.
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-center mb-10">
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20start%20my%20Florida%20LLC."
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-105"
              >
                <span>Start Florida LLC Formation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Stat Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto text-left mb-6">
              <div className="bg-[#faf8ff] border border-purple-100 p-3.5 rounded-xl">
                <span className="text-[10px] font-mono text-purple-600 uppercase block font-bold">State Fee</span>
                <span className="text-xs font-bold text-[#0f0f17]">State Fee Included</span>
              </div>
              <div className="bg-[#faf8ff] border border-purple-100 p-3.5 rounded-xl">
                <span className="text-[10px] font-mono text-purple-600 uppercase block font-bold">Sunbiz Filing</span>
                <span className="text-xs font-bold text-[#0f0f17]">Official Gateway</span>
              </div>
              <div className="bg-[#faf8ff] border border-purple-100 p-3.5 rounded-xl">
                <span className="text-[10px] font-mono text-purple-600 uppercase block font-bold">Filing Speed</span>
                <span className="text-xs font-bold text-[#0f0f17]">3 – 5 Days</span>
              </div>
              <div className="bg-[#faf8ff] border border-purple-100 p-3.5 rounded-xl">
                <span className="text-[10px] font-mono text-purple-600 uppercase block font-bold">Personal Tax</span>
                <span className="text-xs font-bold text-[#0f0f17]">0% Exempt</span>
              </div>
              <div className="bg-[#faf8ff] border border-purple-100 p-3.5 rounded-xl">
                <span className="text-[10px] font-mono text-purple-600 uppercase block font-bold">Franchise Tax</span>
                <span className="text-xs font-bold text-[#0f0f17]">$0 Tax</span>
              </div>
              <div className="bg-[#faf8ff] border border-purple-100 p-3.5 rounded-xl">
                <span className="text-[10px] font-mono text-purple-600 uppercase block font-bold">Turnkey Price</span>
                <span className="text-xs font-bold text-purple-700">All-Inclusive</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-amber-900 text-xs sm:text-sm font-medium max-w-2xl mx-auto mb-10">
              ⭐ Ideal for international sellers planning direct product container shipments to Florida ports and Amazon East Coast fulfillment centers.
            </div>

            {/* Visual Feature Showcase Image */}
            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-purple-200/80 shadow-[0_20px_50px_rgba(124,58,237,0.15)] bg-slate-900/5 p-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                    Official Florida Sunbiz Filing
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Form in Florida? */}
        <section className="py-20 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f0f17] mb-3">
                Why Form in Florida?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light">
                A strategic, high-growth environment for global e-commerce founders.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  badge: "0% Income Tax",
                  title: "Zero Personal State Income Tax",
                  desc: "Florida's state constitution strictly bans personal state income tax, making it a financial haven for digital and Amazon sellers.",
                },
                {
                  badge: "Amazon FBA Prime",
                  title: "Premier East Coast Logistics Hub",
                  desc: "Home to PortMiami, Port Everglades, and massive Amazon fulfillment centers, streamlining international freight imports.",
                },
                {
                  badge: "Direct Sunbiz",
                  title: "Sunbiz Instant Electronic Filing",
                  desc: "Direct integration with the Florida Division of Corporations (Sunbiz) for reliable, clean document issuance.",
                },
                {
                  badge: "Top Bank Trust",
                  title: "Strong Commercial Banking Prestige",
                  desc: "Florida companies are widely recognized and instantly approved by US physical banks and fintech leaders.",
                },
              ].map((c, idx) => (
                <div key={idx} className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200 inline-block mb-3">
                    {c.badge}
                  </span>
                  <h3 className="text-base font-display font-bold text-[#0f0f17] mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Florida LLC Package Box */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 border border-purple-300/30 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="inline-block px-3.5 py-1 rounded-full bg-purple-500 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
                Full Florida LLC Package
              </div>
              <span className="text-xs font-mono text-purple-200 block mb-2">Includes $125 State Fee</span>
              <div className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
                $500 <span className="text-xs font-normal text-purple-200">/ all-inclusive</span>
              </div>
              <p className="text-purple-100 text-xs sm:text-sm max-w-md mx-auto mb-8 font-light">
                Complete setup with Florida Department of State, IRS tax ID, physical address, and dedicated non-resident bank onboarding.
              </p>

              <div className="space-y-2.5 max-w-lg mx-auto mb-8 text-left text-xs sm:text-sm text-purple-100">
                {[
                  "Florida Division of Corporations Filing Fee ($125 Included)",
                  "Florida Registered Agent Service (1 Full Year)",
                  "Commercial Street Address in Florida with Mail Forwarding",
                  "Federal EIN (Tax ID) from IRS for Non-Residents",
                  "Custom Florida LLC Operating Agreement & Banking Resolutions",
                  "Mandatory FinCEN BOI (Beneficial Ownership) Filing",
                  "US Business Bank Account Setup Guidance (Mercury / Relay / Stripe)",
                  "Florida Resale Certificate / Sales Tax Guidance",
                  "Official Certificate of Status / Charter Document",
                  "1-on-1 Dedicated Support on WhatsApp",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20Pay%20Now%20for%20the%20Florida%20LLC%20package%20(%24500)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-display font-bold text-base transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105"
              >
                <span>Pay Now ($500)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Formation Timeline */}
        <section className="py-20 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-xl mx-auto mb-14">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17] mb-2">
                Formation Timeline
              </h2>
              <p className="text-slate-600 text-sm font-light">
                Clear, transparent step-by-step delivery from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  time: "Day 1 – 2",
                  title: "Name Reservation & Sunbiz Filing",
                  desc: "We verify your company name and file Articles of Organization directly through Florida Sunbiz.",
                },
                {
                  step: "02",
                  time: "Day 3 – 5",
                  title: "Official State Approval",
                  desc: "Receive your stamped certificate and official Charter Document from the State of Florida.",
                },
                {
                  step: "03",
                  time: "Day 6 – 14",
                  title: "IRS EIN & BOI FinCEN Submission",
                  desc: "We assign your Federal Employer Identification Number (EIN) and submit mandatory BOI compliance.",
                },
                {
                  step: "04",
                  time: "Day 15+",
                  title: "Bank & Amazon Store Onboarding",
                  desc: "Open your US business bank account (Mercury / Relay / Wise) and initiate Amazon Seller Central.",
                },
              ].map((s, idx) => (
                <div key={idx} className="bg-white border border-purple-100 p-6 rounded-2xl relative shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-2xl font-black text-purple-600">{s.step}</span>
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {s.time}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-[#0f0f17] text-sm mb-2">{s.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Florida FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17]">
                Florida LLC FAQs
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#0f0f17]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-purple-600 shrink-0 transition-transform ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. DEDICATED LAYOUT: TEXAS LLC
  // ─────────────────────────────────────────────────────────────────────────────
  if (service.slug === "texas-llc") {
    return (
      <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
        <CustomCursor />
        <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative pt-36 pb-20 bg-white border-b border-slate-200 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.07),transparent)]" />
          <div className="relative max-w-4xl mx-auto px-6 z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
              <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-purple-700 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-purple-700 font-semibold">Texas LLC</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold mb-6">
              <span>The #2 Economy in the USA — Commercial Powerhouse</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight leading-tight mb-6">
              Texas LLC Formation
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Establish your business in the industrial and e-commerce capital of the southern US for $550 all-inclusive. Zero personal state tax, top-tier corporate prestige, and premier commercial banking status.
            </p>

            {/* Action Button */}
            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20start%20my%20Texas%20LLC%20(%24550)."
                target="_blank"
                rel="noopener noreferrer"
                className="px-9 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:scale-105"
              >
                <span>Start Texas LLC ($550)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Visual Feature Showcase Image */}
            <div className="mt-12 max-w-3xl mx-auto rounded-3xl overflow-hidden border border-purple-200/80 shadow-[0_20px_50px_rgba(124,58,237,0.15)] bg-slate-900/5 p-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-purple-100">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="bg-purple-600/90 backdrop-blur-md px-3 py-1 rounded-full font-bold">
                    Official Texas SOS Filing
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Texas Advantage */}
        <section className="py-20 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f0f17] mb-3">
                The Texas Advantage
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light">
                Built for serious volume sellers and international brand owners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  badge: "$0 Tax Under $2.47M",
                  title: "$2.47M Franchise Tax Exemption",
                  desc: "In Texas, businesses earning under $2.47M gross annual revenue pay $0 in Texas Franchise Tax (No Tax Due Info Report only).",
                },
                {
                  badge: "Central US Distribution",
                  title: "Amazon FBA Mega Logistics Hub",
                  desc: "Home to 25+ major Amazon Fulfillment Centers (Dallas-Fort Worth, Houston, Austin), maximizing FBA inbound inventory speeds.",
                },
                {
                  badge: "Maximum Bank Approval",
                  title: "Tier-1 Commercial Banking Trust",
                  desc: "Texas entities carry tremendous corporate weight with major US physical banks like Chase, Bank of America, and digital lenders.",
                },
                {
                  badge: "0% Personal State Tax",
                  title: "Zero Personal State Income Tax",
                  desc: "Texas is legally forbidden from levying personal state income tax, allowing foreign founders to maximize net retained earnings.",
                },
              ].map((c, idx) => (
                <div key={idx} className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200 inline-block mb-3">
                    {c.badge}
                  </span>
                  <h3 className="text-base font-display font-bold text-[#0f0f17] mb-2">{c.title}</h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Texas Turnkey Package Box */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 border border-purple-300/30 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
              <span className="text-xs font-mono text-purple-200 block mb-2">Includes $300 SOS State Fee</span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-1">
                Texas Turnkey Package
              </h3>
              <span className="text-xs font-mono text-purple-300 block mb-3">100% Non-Resident Remote Setup</span>
              <div className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
                $550 <span className="text-xs font-normal text-purple-200">/ flat fee</span>
              </div>
              <p className="text-purple-100 text-xs sm:text-sm max-w-md mx-auto mb-8 font-light">
                Includes the entire $300 Texas Secretary of State statutory fee, full year of registered agent, commercial address, federal EIN, and US banking guidance.
              </p>

              <div className="space-y-2.5 max-w-lg mx-auto mb-8 text-left text-xs sm:text-sm text-purple-100">
                {[
                  "Texas Secretary of State Filing Fee ($300 Included)",
                  "Texas Registered Agent Service (1 Full Year)",
                  "Commercial Street Address in Texas with Mail Scanning",
                  "IRS Federal EIN (Employer Identification Number) for Non-Residents",
                  "Custom Texas LLC Operating Agreement & Member Certificates",
                  "Mandatory FinCEN BOI (Beneficial Ownership) Filing Included",
                  "US Business Bank Account Support (Mercury / Relay / Wise / Chase)",
                  "Texas Certificate of Formation & Stamped SOS Filing",
                  "Dedicated Xonehub Account Manager on WhatsApp",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20Pay%20Now%20for%20the%20Texas%20LLC%20package%20(%24550)."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-display font-bold text-base transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105"
              >
                <span>Pay Now ($550)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Texas FAQs */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0f0f17]">
                Texas LLC FAQs
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#0f0f17]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-purple-600 shrink-0 transition-transform ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. STANDARD LAYOUT FOR ALL OTHER SERVICES
  // ─────────────────────────────────────────────────────────────────────────────
  const catColor = CATEGORY_COLOR[service.category] || CATEGORY_COLOR["Creative Studio"];
  const related = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
      <CustomCursor />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(124,58,237,0.07),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-purple-700 transition-colors">All Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-700 font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 flex-wrap mb-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${catColor}`}>
                  <Sparkles className="w-3 h-3" />
                  {service.category}
                </span>
                <span className="text-xs font-mono text-white bg-purple-600 px-3 py-1.5 rounded-full font-bold">
                  {service.priceBadge}
                </span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="mt-4 text-slate-600 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                {service.tagline}
              </p>

              <p className="mt-4 text-slate-500 text-base font-light leading-relaxed max-w-xl">
                {service.summary}
              </p>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-purple-600" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                  <span>80+ Happy Clients</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-sm shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_35px_rgba(124,58,237,0.5)] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-purple-200" />
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/923322568950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 font-semibold text-sm transition-all bg-white"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Framed Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 p-2 shadow-xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-100">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono bg-purple-600 px-3 py-1 rounded-full font-bold">
                      {service.number} / {servicesData.length}
                    </span>
                    <p className="mt-2 text-sm font-semibold">{service.title}</p>
                  </div>
                </div>

                {/* Highlights List inside card */}
                <div className="p-4 space-y-2">
                  <p className="text-xs font-mono uppercase text-slate-400 font-semibold">Key Highlights</p>
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      {service.metrics.length > 0 && (
        <section className="py-12 bg-[#faf8ff] border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.metrics.map((m, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-purple-100 text-center shadow-sm">
                  <div className="font-display font-black text-3xl sm:text-4xl text-purple-700">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500 font-mono">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Do & How It Works */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: What We Do */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">
                Detailed Overview
              </span>
              <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl text-[#0f0f17]">
                {service.whatWeDoTitle}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-base font-light">
              {service.whatWeDo}
            </p>

            {/* What's Included */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-display font-bold text-lg text-[#0f0f17] mb-4">
                What&apos;s Included In This Service
              </h3>
              <div className="space-y-3">
                {service.whatsIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is it for */}
            <div className="pt-6 border-t border-slate-200">
              <h3 className="font-display font-bold text-lg text-[#0f0f17] mb-4">
                Who Is This Service For?
              </h3>
              <div className="space-y-2">
                {service.whoIsItFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Process */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#faf8ff] border border-purple-100">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">
                Step-by-Step
              </span>
              <h3 className="mt-2 font-display font-black text-2xl text-[#0f0f17] mb-6">
                How It Works
              </h3>

              <div className="space-y-6">
                {service.howItWorks.map((step) => (
                  <div key={step.step} className="flex gap-4 p-4 rounded-2xl bg-white border border-purple-100">
                    <div className="font-mono font-bold text-lg text-purple-600 bg-purple-50 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-[#0f0f17]">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Cards */}
              {service.slug === "trademark-brand-registry" ? (
                <div className="mt-8 space-y-4">
                  <div className="p-6 rounded-2xl bg-[#faf8ff] border border-purple-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                        Package 1
                      </span>
                      <span className="text-2xl font-display font-black text-purple-700">$600</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0f0f17] mb-1">Logo Trademark</h4>
                    <p className="text-xs text-slate-600 mb-4 font-light">Official USPTO filing fee included. Serial number in 2–3 days for Amazon Brand Registry.</p>
                    <a
                      href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20Pay%20Now%20for%20the%20Logo%20Trademark%20package%20(%24600)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Pay Now ($600)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#faf8ff] border border-purple-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                        Package 2
                      </span>
                      <span className="text-2xl font-display font-black text-purple-700">$700</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-[#0f0f17] mb-1">Wordmark Trademark</h4>
                    <p className="text-xs text-slate-600 mb-4 font-light">Official USPTO filing fee included. Brand name protection + instant Amazon Brand Registry access.</p>
                    <a
                      href="https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20want%20to%20Pay%20Now%20for%20the%20Wordmark%20Trademark%20package%20(%24700)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Pay Now ($700)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mt-8 p-7 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-900 border border-purple-300/30 text-white shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-bold">Pricing Package</span>
                    <span className="text-xs font-mono bg-purple-500/80 text-white px-2.5 py-0.5 rounded-full font-bold">
                      {service.category}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-white mb-2">
                    {service.priceBadge}
                  </div>
                  <p className="text-xs sm:text-sm font-light text-purple-100 leading-relaxed mb-6">
                    {service.pricingNote}
                  </p>

                  {/* Included features */}
                  <div className="space-y-2 mb-6 border-t border-purple-800/60 pt-4 text-xs text-purple-200">
                    {service.whatsIncluded.slice(0, 4).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    <a
                      href={`https://wa.me/923322568950?text=${encodeURIComponent(`Hi Xonehub, I want to Pay Now and start ${service.title} (${service.priceBadge}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(124,58,237,0.4)] transition-all hover:scale-[1.02]"
                    >
                      <span>Pay Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-purple-200 text-xs font-medium transition-colors"
                    >
                      Request Custom Quote
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-600">
              Have Questions?
            </span>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl text-[#0f0f17]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#0f0f17]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-600 shrink-0 transition-transform ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 pb-5 text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="py-16 bg-[#faf8ff]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-black text-2xl text-[#0f0f17]">
                Related Services
              </h2>
              <Link
                href="/services"
                className="text-sm text-purple-700 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                <span>See all</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-[0_10px_25px_rgba(124,58,237,0.08)] transition-all"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-purple-700 font-bold mb-1">
                    {s.categoryBadge}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 font-light">{s.tagline}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-purple-700">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
