"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "@/components/SiteLayout";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import {
  ArrowUpRight,
  ShoppingCart,
  BarChart3,
  Briefcase,
  Building2,
  Package,
  Tag,
  FileCheck2,
  Globe2,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Landmark,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  "amazon-account-creation": ShoppingCart,
  "amazon-ppc-management": BarChart3,
  "fba-store-automation": Package,
  "amazon-product-hunting": Briefcase,
  "a-plus-content": FileCheck2,
  "brand-approvals": Tag,
  "amazon-wholesale-fba": ShoppingCart,
  "amazon-private-label": Package,
  "trademark-brand-registry": FileCheck2,
  "wyoming-llc": Building2,
  "florida-llc": Building2,
  "texas-llc": Building2,
  "airwallex-account-setup": CreditCard,
  "stripe-account-setup": CreditCard,
  "wise-account-setup": CreditCard,
  "payoneer-account-setup": CreditCard,
  "chase-bank-setup": Landmark,
  "bank-of-america-setup": Landmark,
};

const CATEGORY_COLORS: Record<string, { bg: string; badge: string; dot: string }> = {
  "Amazon Growth": { bg: "bg-orange-50 border-orange-200", badge: "bg-orange-100 text-orange-700 border border-orange-200", dot: "bg-orange-500" },
  "US Corporate": { bg: "bg-blue-50 border-blue-200", badge: "bg-blue-100 text-blue-700 border border-blue-200", dot: "bg-blue-500" },
  "Bank Account Creation": { bg: "bg-emerald-50 border-emerald-200", badge: "bg-emerald-100 text-emerald-700 border border-emerald-200", dot: "bg-emerald-500" },
};

const FILTERS = [
  { id: "all", label: "All Services" },
  { id: "Amazon Growth", label: "Amazon Growth" },
  { id: "US Corporate", label: "US LLC Formation" },
  { id: "Bank Account Creation", label: "Bank Account Creation" },
];

export default function AllServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible =
    activeFilter === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  return (
    <SiteLayout>
      {/* ── Hero Header ── */}
      <section className="relative pt-36 pb-20 bg-white overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-30%,rgba(124,58,237,0.08),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-purple-700 font-semibold">All Services</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {servicesData.length} Services Available
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-[#0f0f17] tracking-tight">
            Everything We <span className="gradient-text-purple">Do For You</span>
          </h1>

          <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From Amazon store setup and brand approvals to US LLC formation and tier-1 US business bank accounts. Click any service to see exactly what&apos;s included.
          </p>

          {/* Stats Strip */}
          <div className="mt-10 inline-grid grid-cols-3 gap-8 sm:gap-14 bg-white border border-purple-100 rounded-2xl px-10 py-5 shadow-sm">
            <div>
              <div className="font-display font-black text-2xl text-purple-700">120+</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Projects Done</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl text-purple-700">80+</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Happy Clients</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl text-purple-700">100%</div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="sticky top-[70px] z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center gap-2">
          {FILTERS.map((tab) => {
            const count =
              tab.id === "all"
                ? servicesData.length
                : servicesData.filter((s) => s.category === tab.id).length;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeFilter === tab.id
                    ? "bg-purple-600 text-white shadow-sm shadow-purple-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-purple-300 hover:text-purple-700"
                }`}
              >
                {tab.label}
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    activeFilter === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
          <div className="ml-auto text-xs text-slate-400 font-mono hidden sm:block">
            Showing {visible.length} of {servicesData.length} services
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((service) => {
              const Icon = ICON_MAP[service.slug] || Sparkles;
              const colors = CATEGORY_COLORS[service.category] || CATEGORY_COLORS["Creative Studio"];

              return (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  Icon={Icon}
                  colors={colors}
                />
              );
            })}
          </div>

          {/* Custom Package Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-purple-700 via-indigo-800 to-purple-900 text-white p-10 sm:p-14 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(124,58,237,0.25)]">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent)]" />
            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Not Sure What You Need?
              </span>
              <h3 className="mt-4 font-display font-black text-3xl sm:text-4xl">
                Talk to Us — It&apos;s Free
              </h3>
              <p className="mt-3 text-purple-200 max-w-xl mx-auto text-sm font-light leading-relaxed">
                Tell us about your business and goals. Our team will recommend the right services for you — with no pressure and no sales pitch.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/923322568950"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-800 font-display font-bold text-sm shadow-lg hover:bg-purple-50 transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 hover:border-white text-white font-semibold text-sm transition-all"
                >
                  Send a Brief
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ServiceCard({
  service,
  Icon,
  colors,
}: {
  service: ServiceDetail;
  Icon: React.ElementType;
  colors: { bg: string; badge: string; dot: string };
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)] transition-all duration-300 overflow-hidden"
    >
      {/* Themed Hero Image Banner */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-900/10">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 flex items-center justify-center text-purple-700 shadow-sm shrink-0">
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full backdrop-blur-md bg-white/95 shadow-sm ${colors.badge}`}>
            {service.categoryBadge}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
          <span className="bg-purple-600/90 backdrop-blur-md px-2.5 py-0.5 rounded-full font-bold">
            {service.number}
          </span>
          <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full">
            {service.category}
          </span>
        </div>
      </div>

      {/* Top Band */}
      <div className="px-7 pt-5 pb-4 border-b border-slate-100">
        <div>
          <h2 className="font-display font-black text-lg text-[#0f0f17] group-hover:text-purple-700 transition-colors leading-tight">
            {service.title}
          </h2>
          <p className="mt-1.5 text-xs text-slate-600 font-light leading-relaxed line-clamp-2">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-7 py-5 flex-1 flex flex-col justify-between">
        <ul className="space-y-2">
          {service.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 mt-0.5 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            <span className="font-bold text-purple-700">{service.priceBadge}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 group-hover:gap-2.5 transition-all">
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
