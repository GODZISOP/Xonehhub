"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  FileCheck2,
  ShoppingCart,
  Package,
  BarChart3,
  Building2,
  Code2,
  ShieldCheck,
  TrendingUp,
  Camera,
  Palette,
  Briefcase,
} from "lucide-react";

// Service data structure for Oliver Parallax
export interface ParallaxServiceItem {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: React.ElementType;
  highlight: string;
  tags: string[];
  capabilities: string[];
}

export const defaultParallaxServices: ParallaxServiceItem[] = [
  // ── Column 1: Amazon Scaling ──
  {
    id: "account-creation",
    slug: "amazon-account-creation",
    number: "01",
    category: "Amazon Growth",
    title: "Amazon Account Creation",
    tagline: "End-to-end verified Amazon Seller Central registration",
    description: "Verified business registration, EIN tax details, utility bills, and video verification support.",
    image: "/images/amazon-account-creation.jpg",
    icon: ShoppingCart,
    highlight: "Guaranteed Setup",
    tags: ["Seller Central", "EIN & Tax Help", "100% Compliant"],
    capabilities: ["Full account verification", "Tax document assistance", "Video onboarding call prep"],
  },
  {
    id: "amazon-ppc",
    slug: "amazon-ppc-management",
    number: "02",
    category: "Amazon Growth",
    title: "Amazon PPC Advertising",
    tagline: "Lower your ad costs (TACoS) and maximize daily sales",
    description: "Sponsored Products, Brands, and Display campaigns engineered for low ACOS and maximum ROAS.",
    image: "/images/service-marketing.jpg",
    icon: BarChart3,
    highlight: "3x–8x ROAS",
    tags: ["Sponsored Ads", "Low TACoS", "Keyword Harvesting"],
    capabilities: ["Deep search query harvesting", "Negative keyword protection", "Transparent weekly reporting"],
  },
  {
    id: "fba-automation",
    slug: "fba-store-automation",
    number: "03",
    category: "Amazon Growth",
    title: "FBA Store Automation",
    tagline: "100% hands-free Amazon store management from sourcing to sales",
    description: "Product hunting, supplier negotiation, shipping logistics, and daily inventory operations.",
    image: "/images/amazon-wholesale-fba.jpg",
    icon: Package,
    highlight: "Turnkey Scale",
    tags: ["100% Hands-Free", "Inventory Logistics", "Daily Operations"],
    capabilities: ["Winning supplier sourcing", "FBA prep warehouse plans", "Account health & customer support"],
  },

  // ── Column 2: US Corporate & Expansion ──
  {
    id: "wyoming-llc",
    slug: "wyoming-llc",
    number: "04",
    category: "US Corporate",
    title: "Wyoming LLC Formation",
    tagline: "Form your US company with zero state income tax & full privacy",
    description: "Articles of Organization, 1-year Registered Agent, EIN tax ID, and US bank account guidance.",
    image: "/images/wyoming-llc.jpg",
    icon: Building2,
    highlight: "0% State Tax",
    tags: ["0% Income Tax", "EIN Tax ID", "US Bank Account"],
    capabilities: ["Official Secretary of State filing", "1-Year Registered Agent & Address", "IRS EIN for international founders"],
  },
  {
    id: "florida-llc",
    slug: "florida-llc",
    number: "05",
    category: "US Corporate",
    title: "Florida LLC Formation",
    tagline: "Fast US company formation in America's top business hub",
    description: "Premier corporate structure for e-commerce, international trade, and US merchant accounts.",
    image: "/images/florida-llc.jpg",
    icon: Briefcase,
    highlight: "Top Trade Hub",
    tags: ["Fast Registration", "International Friendly", "EIN Provided"],
    capabilities: ["State registry certification", "Operating Agreement drafting", "US Stripe/Mercury bank prep"],
  },
  {
    id: "brand-registry",
    slug: "amazon-brand-registry",
    number: "06",
    category: "Amazon Growth",
    title: "Amazon Brand Registry",
    tagline: "Protect your IP and unlock exclusive conversion tools",
    description: "Unlock Amazon A+ Content, Brand Story, Sponsored Brands ads, and hijack protection.",
    image: "/images/trademark-brand-registry.jpg",
    icon: ShieldCheck,
    highlight: "Full Protection",
    tags: ["Brand Registry", "A+ Tools Unlocked", "Hijack Shield"],
    capabilities: ["USPTO Serial linkage", "Counterfeit protection", "Storefront builder access"],
  },

  // ── Column 3: Creative Studio & Brand Experience ──
  {
    id: "a-plus-content",
    slug: "a-plus-content",
    number: "07",
    category: "Creative Studio",
    title: "A+ Content & EBC",
    tagline: "Boost customer trust and increase listing conversions up to 20%",
    description: "Premium Enhanced Brand Content and visual storytelling designed to win the buy box.",
    image: "/images/brand-approvals.jpg",
    icon: FileCheck2,
    highlight: "Conversion +20%",
    tags: ["High-Res Visuals", "Comparison Charts", "Brand Story"],
    capabilities: ["Custom comparison modules", "3D benefit infographics", "Mobile-optimized layouts"],
  },
  {
    id: "storefront-design",
    slug: "brand-storefront-design",
    number: "08",
    category: "Creative Studio",
    title: "Brand Storefront Design",
    tagline: "Multi-page curated shopping destination on Amazon",
    description: "Bespoke Amazon Storefronts designed to increase average order value and cross-sell catalogs.",
    image: "/images/amazon-private-label.jpg",
    icon: Palette,
    highlight: "AOV Booster",
    tags: ["Custom Pages", "Cross-Sell Modules", "Brand Identity"],
    capabilities: ["Interactive showcase banners", "Category curation", "Mobile shopper experience"],
  },
  {
    id: "product-photography",
    slug: "product-photography-3d",
    number: "09",
    category: "Creative Studio",
    title: "Product 3D & Photography",
    tagline: "Hyper-realistic 3D product renders and commercial photography",
    description: "Studio-quality product renders, lifestyle staging, and packaging mockups that stop the scroll.",
    image: "/images/hero-showcase.png",
    icon: Camera,
    highlight: "Studio Quality",
    tags: ["3D Renders", "Lifestyle Staging", "Packaging Mockups"],
    capabilities: ["360 product visual angles", "Photorealistic lighting", "High-res commercial assets"],
  },

  {
    id: "web-development",
    slug: "web-development",
    number: "10",
    category: "Digital Growth",
    title: "Shopify & Web Storefronts",
    tagline: "High-speed custom storefronts engineered for conversion",
    description: "Bespoke Shopify 2.0 and Next.js storefronts with sub-second page loads and mobile-first UX.",
    image: "/images/service-web.jpg",
    icon: Code2,
    highlight: "Sub-Second Speed",
    tags: ["Shopify 2.0", "Next.js Architecture", "High Conversion"],
    capabilities: ["Custom theme engineering", "Optimized checkout funnels", "Core Web Vitals speed optimization"],
  },
  {
    id: "trademark-filing",
    slug: "trademark-registration",
    number: "11",
    category: "US Corporate",
    title: "US Trademark Filing",
    tagline: "Protect your brand name, logo, and Amazon rights in the USA",
    description: "Comprehensive USPTO conflict clearance search and attorney-backed trademark application.",
    image: "/images/trademark-brand-registry.jpg",
    icon: ShieldCheck,
    highlight: "USPTO Compliant",
    tags: ["USPTO Filing", "Name & Logo", "IP Rights"],
    capabilities: ["Comprehensive conflict search", "Class selection & filing", "Office action guidance"],
  },
  {
    id: "conversion-audit",
    slug: "listing-conversion-audit",
    number: "12",
    category: "Digital Growth",
    title: "Listing CRO Audit",
    tagline: "Deep audit of images, titles, bullets, and customer funnel",
    description: "Data-driven conversion rate optimization audit pinpointing exactly where you are losing sales.",
    image: "/images/amazon-product-hunting.jpg",
    icon: TrendingUp,
    highlight: "Data-Driven",
    tags: ["CRO Analysis", "Funnel Diagnosis", "Revenue Lift"],
    capabilities: ["Listing teardown report", "Competitor gap analysis", "Immediate action plan"],
  },
];

// Single Parallax Card Presentation
function ParallaxCardItem({
  service,
  onSelect,
}: {
  service: ParallaxServiceItem;
  onSelect?: (name: string) => void;
}) {
  const Icon = service.icon;

  return (
    <div className="group relative rounded-3xl bg-white border border-purple-100/90 shadow-[0_12px_35px_rgba(124,58,237,0.07)] hover:border-purple-300 hover:shadow-[0_22px_55px_rgba(124,58,237,0.16)] transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Card Top Image Banner */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-50">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="font-mono text-xs font-bold text-white bg-black/75 px-2.5 py-0.5 rounded-full border border-white/20">
              {service.number}
            </span>
            <span className="text-[11px] font-mono font-bold text-purple-100 bg-purple-600 px-2.5 py-0.5 rounded-full border border-purple-400/40 shadow-sm">
              {service.highlight}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-2 pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-200 bg-black/75 px-2.5 py-0.5 rounded-full border border-white/20">
              {service.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0f0f17] group-hover:text-purple-700 transition-colors leading-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-light">
            {service.tagline}
          </p>

          {/* Capabilities */}
          <div className="space-y-1.5 mb-4">
            {service.capabilities.slice(0, 3).map((cap, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{cap}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 pt-3 border-t border-purple-100">
            {service.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-2">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 group/link"
        >
          <span>Full Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        {onSelect && (
          <button
            onClick={() => onSelect(service.title)}
            className="px-3.5 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs tracking-wide transition-all shadow-sm"
          >
            Get Quote
          </button>
        )}
      </div>
    </div>
  );
}

// Single Parallax Column Component with exact Olivier Larose kinematics
function ParallaxColumn({
  services,
  y,
  topClass,
  onSelect,
}: {
  services: ParallaxServiceItem[];
  y: any;
  topClass: string;
  onSelect?: (name: string) => void;
}) {
  return (
    <motion.div
      className={`relative flex h-full w-full sm:w-1/2 lg:w-1/4 flex-col gap-6 sm:gap-8 ${topClass} will-change-transform transform-gpu`}
      style={{ y }}
    >
      {services.map((service) => (
        <div key={service.id} className="relative w-full">
          <ParallaxCardItem service={service} onSelect={onSelect} />
        </div>
      ))}
    </motion.div>
  );
}

// ── MAIN SKIPER30 / OLIVER PARALLAX COMPONENT ──
export function Skiper30({
  services = defaultParallaxServices,
  onSelectService,
}: {
  services?: ParallaxServiceItem[];
  onSelectService?: (name: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Scroll Progress mapped through container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  // Exact Olivier Larose differential parallax multipliers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.8]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.1]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.8]);

  // Lenis Smooth Scroll Integration
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    } catch (e) {
      // Graceful fallback
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  // Split services into 4 columns (3 cards per column)
  const col1 = services.slice(0, 3);
  const col2 = services.slice(3, 6);
  const col3 = services.slice(6, 9);
  const col4 = services.slice(9, 12);

  return (
    <div className="relative w-full rounded-3xl border border-purple-100/90 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/30 shadow-[0_20px_60px_rgba(124,58,237,0.08)] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-violet-200/30 blur-[130px] pointer-events-none" />

      {/* Floating subtle indicator badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-purple-700 text-xs font-mono font-semibold shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
        <span>SCROLL TO EXPLORE PARALLAX GALLERY</span>
      </div>

      {/* Parallax Container with Olivier Larose kinematics */}
      <div
        ref={containerRef}
        className="relative box-border flex h-[210vh] md:h-[235vh] gap-4 sm:gap-6 md:gap-8 overflow-hidden p-4 sm:p-6 md:p-8 pt-16 sm:pt-20"
      >
        {/* ── 4 PARALLAX COLUMNS WITH CARD CONTENT ── */}
        <ParallaxColumn
          services={col1}
          y={y1}
          topClass="-top-[35%] sm:-top-[42%]"
          onSelect={onSelectService}
        />
        <ParallaxColumn
          services={col2}
          y={y2}
          topClass="-top-[75%] sm:-top-[85%]"
          onSelect={onSelectService}
        />
        <ParallaxColumn
          services={col3}
          y={y3}
          topClass="-top-[30%] sm:-top-[38%]"
          onSelect={onSelectService}
        />
        <ParallaxColumn
          services={col4}
          y={y4}
          topClass="-top-[60%] sm:-top-[70%]"
          onSelect={onSelectService}
        />
      </div>
    </div>
  );
}

export const OliverParallax = Skiper30;
export default Skiper30;
