"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import { HoverMember, HoverMemberItem } from "./v1/skiper6";
import { Skiper30 } from "./v1/skiper30";
import {
  ArrowUpRight,
  ShoppingCart,
  FileCheck2,
  Package,
  BarChart3,
  Building2,
  Code2,
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
    image: "/images/brand-approvals.jpg",
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
    image: "/images/amazon-account-creation.jpg",
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
    image: "/images/amazon-wholesale-fba.jpg",
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
    image: "/images/service-marketing.jpg",
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
    image: "/images/wyoming-llc.jpg",
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
  {
    id: "web-development",
    slug: "web-development",
    number: "06",
    category: "Digital Growth",
    title: "Shopify & Web Storefronts",
    tagline: "High-speed custom e-commerce storefronts engineered for conversion",
    description:
      "We design bespoke Shopify 2.0 and Next.js digital storefronts with sub-second page loads, conversion-optimized checkout funnels, and mobile-first UX.",
    image: "/images/service-web.jpg",
    icon: Code2,
    highlight: "Sub-Second Speed",
    tags: ["Shopify 2.0", "Next.js Architecture", "Mobile First", "High Conversion"],
    capabilities: [
      "Bespoke Shopify 2.0 custom theme engineering",
      "High-conversion mobile checkout and upsell drawers",
      "Sub-second Core Web Vitals speed optimization",
      "Omnichannel payment gateways & analytics setup",
    ],
  },
];

interface SolutionsSectionProps {
  onSelectService: (serviceName: string) => void;
}

// ── Service Card Presentation Component ──
function ServiceCard({
  service,
  onSelect,
}: {
  service: ServiceItem;
  onSelect: (name: string) => void;
}) {
  const Icon = service.icon;

  return (
    <div className="group relative h-full rounded-3xl bg-white border border-purple-100 shadow-[0_10px_35px_rgba(124,58,237,0.06)] hover:border-purple-300 hover:shadow-[0_22px_50px_rgba(124,58,237,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Top Image Preview Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-purple-50">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="font-mono text-xs font-bold text-white bg-black/75 px-2.5 py-1 rounded-full border border-white/20">
              {service.number}
            </span>
            <span className="text-[11px] font-mono font-bold text-purple-100 bg-purple-600 px-3 py-1 rounded-full border border-purple-400/40 shadow-sm">
              {service.highlight}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-2 pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-200 bg-black/75 px-2.5 py-0.5 rounded-full border border-white/20">
              {service.category}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0f0f17] group-hover:text-purple-700 transition-colors">
              {service.title}
            </h3>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-5 font-light">
            {service.tagline}
          </p>

          {/* Capabilities bullets */}
          <div className="space-y-2 mb-6">
            {service.capabilities.slice(0, 3).map((cap, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-100">
            {service.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 group/link"
        >
          <span>Full Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onSelect(service.title)}
          className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs tracking-wide transition-colors shadow-sm"
        >
          Get Quote
        </motion.button>
      </div>
    </div>
  );
}

export default function SolutionsSection({ onSelectService }: SolutionsSectionProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Format services for Skiper6 HoverMember component with punchy shortName
  const hoverMembersData: HoverMemberItem[] = [
    { ...services[0], name: services[0].title, shortName: "A+ CONTENT" },
    { ...services[1], name: services[1].title, shortName: "ACCOUNT SETUP" },
    { ...services[2], name: services[2].title, shortName: "FBA AUTOMATION" },
    { ...services[3], name: services[3].title, shortName: "AMAZON PPC" },
    { ...services[4], name: services[4].title, shortName: "WYOMING LLC" },
    { ...services[5], name: services[5].title, shortName: "SHOPIFY STORES" },
  ];

  // Only the top 3 featured services are displayed in the main card grid
  const leftCard = services[0];   // 01: A+ Content & EBC
  const centerCard = services[1]; // 02: Amazon Account Creation
  const rightCard = services[2];  // 03: FBA Store Automation

  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden border-t border-purple-100">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] top-1/4 -left-32 bg-purple-200/40 pointer-events-none" />
      <div className="ambient-glow w-[500px] h-[500px] bottom-10 -right-20 bg-violet-200/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div>
            <SectionLabel number="02" text="Core Solutions" />
            <h2 className="mt-4 font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#0f0f17] tracking-tight">
              Featured <span className="gradient-text-purple">Services</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-slate-600 max-w-md text-sm sm:text-base leading-relaxed font-light">
              Watch our featured solutions emerge. Explore full catalog of all 15 enterprise services below.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-4 py-2 rounded-full transition-all shrink-0"
            >
              <span>See All (15)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* ── SKIPER UI #06: HOVER SERVICES COMPONENT ── */}
        <div className="w-full my-6 sm:my-8 mb-12 sm:mb-16">
          <HoverMember
            teamMembers={hoverMembersData}
            defaultName="X-ONE HUB"
            backgroundColor="bg-transparent"
            textColor="text-slate-300"
            hoverTextColor="text-purple-600"
            onSelectMember={(item) => onSelectService(item.name)}
          />
        </div>

        {/* ── SKIPER UI #30: OLIVER PARALLAX SERVICES GALLERY ──
            Stunning multi-column parallax depth effect scrolling at differential speeds!
        */}
        <div className="w-full my-6 sm:my-8 mb-12 sm:mb-16">
          <Skiper30 onSelectService={onSelectService} />
        </div>

        {/* ── PROMINENT "SEE ALL 15 SERVICES" CTA BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-200 font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Catalog — 15 Services Total
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Looking for More Services?
            </h3>
            <p className="text-sm text-purple-100 font-light max-w-xl leading-relaxed">
              Explore all 15 services across Amazon Growth, US LLC Formation (Wyoming, Florida, Texas), Brand Registry, Trademark, and Digital Web Development. Click below to inspect our full catalog.
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
