"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "@/components/SiteLayout";
import {
  Award,
  Globe2,
  Lightbulb,
  Rocket,
  Users,
  Target,
  Flame,
  Eye,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const team = [
  {
    name: "Creative Direction Lead",
    role: "Brand Architecture & Visual Identity",
    bio: "10+ years crafting editorial brand systems for consumer-facing firms across US, UK, and UAE markets.",
    initials: "CD",
    color: "purple",
  },
  {
    name: "Performance Marketing Lead",
    role: "Paid Acquisition & Viral Media",
    bio: "Managed $14M+ in ad spend across Meta, Google, and TikTok with an average blended 4.8x ROAS.",
    initials: "PM",
    color: "indigo",
  },
  {
    name: "Engineering Architect",
    role: "Next.js & Shopify Platform Engineering",
    bio: "Delivers sub-400ms storefronts with measurable Core Web Vitals improvements and zero downtime launches.",
    initials: "EA",
    color: "violet",
  },
  {
    name: "Amazon Operations Head",
    role: "FBA Strategy & PPC Management",
    bio: "Scaled 30+ brand storefronts from zero to category Top-10 BSR positions on Amazon US and Europe.",
    initials: "AO",
    color: "purple",
  },
];

const values = [
  {
    icon: Flame,
    title: "Form Meets Firepower",
    desc: "We refuse to choose between beauty and performance. Every deliverable we ship is engineered to be visually arresting AND commercially relentless.",
  },
  {
    icon: Eye,
    title: "Obsessive Art Direction",
    desc: "Every pixel, every kerning gap, every micro-interaction is a conscious decision. We treat design as an exact science mapped to human attention.",
  },
  {
    icon: Target,
    title: "Quantifiable Outcomes",
    desc: "Our KPIs aren't impressions. They're ROAS, TACoS, checkout conversion rates, BSR rankings, and organic keyword positions.",
  },
  {
    icon: Globe2,
    title: "Global Studio Agility",
    desc: "Direct access to our lead architects. Zero account-manager telephone games. Daily progress updates, rapid iterations, and radically transparent execution.",
  },
];

const milestones = [
  { year: "2019", event: "Founded in Karachi — first brand identity commission." },
  { year: "2020", event: "Launched Amazon PPC practice, scaled first client to $500K GMV." },
  { year: "2021", event: "Web development practice launched — first Next.js storefront shipped in 22 days." },
  { year: "2022", event: "Crossed 50 active global clients across US, UK, UAE, and Australia." },
  { year: "2023", event: "Achieved $14M+ in verified client revenue generated across all practices." },
  { year: "2024", event: "Opened digital marketing arm — first campaign yielded +347% organic reach in 30 days." },
  { year: "2025", event: "Crossed 120+ projects, 80+ worldwide clients, 100% satisfaction record maintained." },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-white overflow-hidden border-b border-purple-100">
        <div className="ambient-glow w-[600px] h-[600px] -top-20 -left-32 bg-purple-200/50" />
        <div className="ambient-glow w-[500px] h-[500px] top-1/2 -right-20 bg-violet-200/40" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-700 font-semibold">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-mono text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
                <Award className="w-3.5 h-3.5" />
                Award-Winning Creative Studio
              </div>
              <h1 className="font-display font-black text-4xl sm:text-6xl text-[#0f0f17] tracking-tight leading-tight">
                We Build Brands That <span className="gradient-text-purple">Demand Attention.</span>
              </h1>
              <p className="mt-6 text-slate-600 text-lg font-light leading-relaxed max-w-xl">
                X-One Hub is an elite creative agency and digital growth studio. We bridge the chasm between raw artistic vision and ruthless commercial conversion — built for founders who refuse to be forgotten.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
                <div>
                  <div className="font-display font-black text-3xl text-purple-700">120<span className="text-purple-400">+</span></div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Projects</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl text-purple-700">80<span className="text-purple-400">+</span></div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Clients</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl text-purple-700">100<span className="text-purple-400">%</span></div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-purple-200 shadow-[0_20px_50px_rgba(124,58,237,0.12)] bg-purple-50">
              <Image
                src="/images/agency-studio.jpg"
                alt="X ONE HUB Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-xs font-mono text-purple-200 font-bold uppercase tracking-wider">Studio HQ</div>
                <div className="font-display font-bold text-lg">X ONE HUB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="py-20 bg-[#faf8ff] border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-100 px-3.5 py-1.5 rounded-full">
              OUR MANIFESTO
            </span>
            <blockquote className="mt-8 font-display font-black text-3xl sm:text-5xl text-[#0f0f17] leading-tight tracking-tight">
              &ldquo;What we do isn&apos;t ordinary —<br />
              <span className="gradient-text-purple">it&apos;s layered, intentional,<br />and built to perform.&rdquo;</span>
            </blockquote>
            <p className="mt-6 text-slate-600 text-base font-light max-w-2xl mx-auto leading-relaxed">
              We believe the modern digital landscape is saturated with template mediocrity. Millions of brands spend fortunes on traffic that lands on generic storefronts with zero emotional resonance. We exist to solve that.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-100 px-3.5 py-1.5 rounded-full">
              WHAT WE STAND FOR
            </span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-[#0f0f17]">
              Core Studio Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border border-purple-100 bg-[#faf8ff] hover:bg-white hover:border-purple-300 hover:shadow-[0_15px_40px_rgba(124,58,237,0.08)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-all mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Timeline */}
      <section className="py-24 bg-[#faf8ff] border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-100 px-3.5 py-1.5 rounded-full">
              STUDIO HISTORY
            </span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-[#0f0f17]">
              Our Journey
            </h2>
          </div>

          <div className="relative space-y-0">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-purple-200 hidden sm:block" />

            {milestones.map((m, idx) => (
              <div key={idx} className="relative flex items-start gap-6 pb-8">
                <div className="shrink-0 w-11 h-11 rounded-full bg-purple-600 text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.3)] z-10">
                  {m.year.slice(2)}
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white border border-purple-100 shadow-sm hover:border-purple-300 transition-all mt-0.5">
                  <div className="font-mono text-xs font-bold text-purple-700 mb-1">{m.year}</div>
                  <p className="text-sm text-slate-700 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold bg-purple-100 px-3.5 py-1.5 rounded-full">
              CREATIVE LEADERSHIP
            </span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-[#0f0f17]">
              Meet the Studio Leads
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-light max-w-md mx-auto">
              Senior architects with direct accountability on every project — no juniors left unsupervised.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-purple-100 bg-[#faf8ff] hover:bg-white hover:border-purple-300 hover:shadow-[0_15px_35px_rgba(124,58,237,0.08)] transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white font-display font-black text-xl flex items-center justify-center mx-auto mb-4 shadow-[0_5px_20px_rgba(124,58,237,0.35)] group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-base text-[#0f0f17] group-hover:text-purple-700 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-mono text-purple-700 font-semibold">
                  {member.role}
                </p>
                <p className="mt-3 text-xs text-slate-600 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-800 to-indigo-900 text-white text-center relative overflow-hidden">
        <div className="ambient-glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10" />
        <div className="relative max-w-2xl mx-auto px-6 z-10">
          <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-4" />
          <h2 className="font-display font-black text-3xl sm:text-4xl">
            Ready to Work With X-One Hub?
          </h2>
          <p className="mt-3 text-purple-200 text-sm font-light">
            Let&apos;s build something iconic together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-full bg-white text-purple-800 font-display font-bold text-sm tracking-wide shadow-lg hover:bg-purple-50 transition-all flex items-center gap-2"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full border border-white/30 hover:border-white text-white font-semibold text-sm transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
