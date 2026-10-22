"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import {
  ArrowUpRight,
  ShoppingCart,
  FileCheck2,
  Package,
  BarChart3,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  tags: string[];
  capabilities: string[];
  highlight: string;
}

const services: ServiceItem[] = [
  {
    id: "a-plus-content",
    slug: "a-plus-content",
    number: "01",
    category: "Amazon Growth",
    title: "A+ Content & EBC",
    tagline: "Boost customer trust and increase listing conversions up to 20%",
    description:
      "Premium Enhanced Brand Content and visual storytelling designed to highlight your product benefits, answer customer questions, and win the buy box against competitors.",
    image: "/images/service-amazon.jpg",
    icon: FileCheck2,
    highlight: "Conversion Booster",
    tags: ["High-Res Visuals", "Comparison Tables", "Brand Story", "+20% Conversion"],
    capabilities: [
      "Custom A+ Content modules & competitor comparison charts",
      "High-converting product infographics & 3D benefit callouts",
      "Mobile-optimized layout for smartphone shoppers",
      "Interactive Brand Story carousels and storefront integration",
    ],
  },
  {
    id: "account-creation",
    slug: "amazon-account-creation",
    number: "02",
    category: "Amazon Growth",
    title: "Amazon Account Creation",
    tagline: "End-to-end verified Amazon Seller Central registration",
    description:
      "We set up your US Amazon Seller Central account properly from day one with verified business registration, EIN tax details, utility bills, and video verification support.",
    image: "/images/service-amazon.jpg",
    icon: ShoppingCart,
    highlight: "Guaranteed Setup",
    tags: ["Seller Central", "EIN & Tax Help", "Document Verification", "100% Compliant"],
    capabilities: [
      "Complete Seller Central account creation & verification",
      "EIN and US tax document preparation assistance",
      "Utility bill and bank statement review to prevent rejection",
      "Amazon video interview guidance and onboarding support",
    ],
  },
  {
    id: "fba-automation",
    slug: "fba-store-automation",
    number: "03",
    category: "Amazon Growth",
    title: "FBA Store Automation",
    tagline: "100% hands-free Amazon store management from sourcing to sales",
    description:
      "We handle product hunting, supplier negotiation, shipping logistics, inventory replenishment, and daily customer service so you can scale your store hands-free.",
    image: "/images/hero-2.jpg",
    icon: Package,
    highlight: "Turnkey Scaling",
    tags: ["100% Hands-Free", "Inventory Logistics", "Supplier Sourcing", "Daily Operations"],
    capabilities: [
      "Profitable winning product research & supplier sourcing",
      "FBA shipping plans and prep warehouse coordination",
      "Daily inventory tracking and restock forecasting",
      "Full account health and customer feedback management",
    ],
  },
  {
    id: "amazon-ppc",
    slug: "amazon-ppc-management",
    number: "04",
    category: "Amazon Growth",
    title: "Amazon PPC Advertising",
    tagline: "Lower your ad costs (TACoS) and maximize your daily sales",
    description:
      "We structure Sponsored Products, Sponsored Brands, and Sponsored Display ads. We continuously harvest profitable keywords and eliminate wasted ad spend.",
    image: "/images/hero-3.jpg",
    icon: BarChart3,
    highlight: "High ROAS",
    tags: ["Sponsored Products", "Sponsored Brands", "Keyword Harvesting", "Low TACoS"],
    capabilities: [
      "Deep keyword research & competitor ad strategy analysis",
      "Daily bid optimization to eliminate wasted ad spend",
      "Negative keyword harvesting to improve profit margins",
      "Weekly transparent sales, ACOS, and performance reports",
    ],
  },
  {
    id: "wyoming-llc",
    slug: "wyoming-llc",
    number: "05",
    category: "US Corporate",
    title: "Wyoming LLC Formation",
    tagline: "Form your US company with zero state income tax & full privacy",
    description:
      "Everything you need as an international founder: Articles of Organization, 1-year Registered Agent, EIN tax ID, Operating Agreement, and US bank account guidance.",
    image: "/images/service-web.jpg",
    icon: Building2,
    highlight: "$350 All-Inclusive",
    tags: ["0% State Income Tax", "EIN Tax ID", "Registered Agent", "US Bank Guidance"],
    capabilities: [
      "Official Articles of Organization filing with Secretary of State",
      "1 full year of US Registered Agent & physical address service",
      "IRS EIN (Federal Tax ID) registration for non-US residents",
      "Step-by-step guidance for US business bank account opening",
    ],
  },
];

interface SolutionsSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function SolutionsSection({ onSelectService }: SolutionsSectionProps) {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-white overflow-hidden border-t border-purple-100">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] top-1/3 -left-32 bg-purple-200/40" />
      <div className="ambient-glow w-[500px] h-[500px] bottom-10 -right-20 bg-violet-200/40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <SectionLabel number="02" text="Core Solutions" />
            <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight">
              Featured <span className="gradient-text-purple">Services</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base leading-relaxed font-light">
            Our most popular Amazon Growth and US LLC formation packages for international founders and e-commerce sellers.
          </p>
        </motion.div>

        {/* 5 Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative rounded-3xl bg-white border border-purple-100/90 shadow-[0_10px_35px_rgba(124,58,237,0.06)] hover:border-purple-300 hover:shadow-[0_25px_60px_rgba(124,58,237,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Banner Image with Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-purple-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Badges on Top */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      {service.category}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-purple-100 bg-purple-600/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Icon & Title over image */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-purple-700 shadow-md shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-white drop-shadow-sm leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-600 bg-purple-50 border border-purple-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Key capabilities list */}
                    <div className="mt-5 pt-4 border-t border-purple-100 space-y-2">
                      {service.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link row */}
                  <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-purple-700 hover:text-purple-900 group/link"
                      data-cursor="Learn"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="px-3.5 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold text-xs border border-purple-200 transition-colors"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All 15 Services Banner with "See All" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-200 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Catalog — 15 Services Total
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Looking for More Services?
            </h3>
            <p className="text-sm text-purple-100 font-light max-w-xl leading-relaxed">
              Explore all 15 services across Amazon Growth, US LLC Formation (Wyoming, Florida, Texas), Brand Registry, Trademark, and Digital Marketing.
            </p>
          </div>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full bg-white text-purple-800 font-display font-bold text-sm hover:bg-purple-50 transition-all shrink-0 shadow-lg flex items-center gap-2 group"
          >
            <span>See All 15 Services</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
