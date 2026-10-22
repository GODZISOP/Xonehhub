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
} from "lucide-react";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Related services (same category, excluding current)
  const related = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const CATEGORY_COLOR: Record<string, string> = {
    "Amazon Growth": "bg-orange-50 border-orange-200 text-orange-700",
    "US Corporate": "bg-blue-50 border-blue-200 text-blue-700",
    "Creative Studio": "bg-purple-50 border-purple-200 text-purple-700",
    "Digital Marketing": "bg-green-50 border-green-200 text-green-700",
  };

  const catColor = CATEGORY_COLOR[service.category] || CATEGORY_COLOR["Creative Studio"];

  return (
    <div className="relative min-h-screen bg-white text-[#0f0f17] selection:bg-purple-600 selection:text-white">
      <CustomCursor />
      <Navbar onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* ── Hero Section ── */}
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
                      {service.number} / 15
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

      {/* ── Key Metrics ── */}
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

      {/* ── What We Do & How It Works ── */}
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

              {/* Pricing Box */}
              <div className="mt-8 p-6 rounded-2xl bg-purple-600 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-200">Pricing</span>
                  <span className="text-xs font-mono bg-white/20 px-2.5 py-0.5 rounded-md font-bold">
                    {service.priceBadge}
                  </span>
                </div>
                <p className="text-sm font-light text-purple-100 leading-relaxed">
                  {service.pricingNote}
                </p>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="mt-4 w-full py-3 rounded-full bg-white text-purple-700 font-display font-bold text-xs uppercase tracking-wider hover:bg-purple-50 transition-colors shadow-sm"
                >
                  Request Exact Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
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

      {/* ── Related Services ── */}
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
