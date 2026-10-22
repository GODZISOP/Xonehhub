"use client";

import React, { useState } from "react";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "info@xonehub.com",
    href: "mailto:info@xonehub.com",
    badge: "Replies within 4h",
    color: "purple",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92-332-2568950",
    href: "https://wa.me/923322568950",
    badge: "Usually instant",
    color: "emerald",
  },
  {
    icon: Phone,
    label: "Direct Call",
    value: "+92-332-2568950",
    href: "tel:+923322568950",
    badge: "9am–9pm PKT",
    color: "indigo",
  },
  {
    icon: MapPin,
    label: "Studio Location",
    value: "Global Reach / Studio Hub",
    href: "#",
    badge: "Karachi, PK · Remote",
    color: "violet",
  },
];

const services = [
  "Digital Marketing",
  "Amazon Store Management",
  "Graphic Design & Branding",
  "Web Development",
  "Complete Brand Architecture",
  "Other / Custom",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      {/* Header */}
      <section className="relative pt-36 pb-16 bg-white overflow-hidden border-b border-purple-100">
        <div className="ambient-glow w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 bg-purple-200/50" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-700 font-semibold">Contact Us</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-mono text-xs font-bold uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Studio Access
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#0f0f17] tracking-tight">
            Let&apos;s Build Something <span className="gradient-text-purple">Iconic</span>
          </h1>
          <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            No account manager delays. Direct access to our senior architects.
            Tell us about your project and we&apos;ll craft a tailored strategy.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#faf8ff]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Contact Methods */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h2 className="font-display font-black text-2xl text-[#0f0f17]">
                  Get In Touch
                </h2>
                <p className="mt-2 text-sm text-slate-600 font-light">
                  Pick your preferred channel. We&apos;re responsive across all of them.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={idx}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block p-5 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-[0_10px_25px_rgba(124,58,237,0.08)] transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                            {method.label}
                          </div>
                          <div className="font-display font-bold text-sm text-[#0f0f17] truncate">
                            {method.value}
                          </div>
                        </div>
                        <span className="shrink-0 text-[10px] font-mono text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">
                          {method.badge}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* 24/7 Support */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-[0_10px_30px_rgba(124,58,237,0.3)]">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-purple-200" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-200">
                    Support Availability
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-100 text-sm">Client Support</span>
                    <span className="font-display font-black text-xl text-white">24/7 Available</span>
                  </div>
                  <p className="text-xs text-purple-100 font-light leading-relaxed">
                    Our team is available 24 hours a day, 7 days a week on WhatsApp and email to answer your inquiries, provide quotes, and assist your store anytime.
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>Online 24/7 — Ready to assist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl border border-purple-100 shadow-[0_15px_40px_rgba(124,58,237,0.06)] overflow-hidden">
                {/* Form Header */}
                <div className="px-8 pt-8 pb-6 border-b border-purple-100">
                  <h2 className="font-display font-black text-2xl text-[#0f0f17]">
                    Send Us a Brief
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 font-light">
                    The more context you give, the faster we can craft your custom proposal.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-display font-black text-2xl text-[#0f0f17]">
                      Brief Received!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 font-light max-w-sm mx-auto">
                      Our senior architects will review your requirements and reach out within 4 business hours with a tailored proposal.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
                      }}
                      className="mt-6 px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold text-xs hover:bg-purple-700 transition-colors"
                    >
                      Send Another Brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Brand Ltd."
                          className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Monthly Budget (USD)
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select a budget range…</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 – $3,000</option>
                        <option value="3k-6k">$3,000 – $6,000</option>
                        <option value="6k-15k">$6,000 – $15,000</option>
                        <option value="15k+">$15,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Project Brief *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, goals, timeline, and any specific requirements…"
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 bg-[#faf8ff] text-sm text-[#0f0f17] placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-display font-bold text-sm tracking-wide shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:shadow-[0_12px_35px_rgba(124,58,237,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Brief…</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Brief</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400 font-mono">
                      No spam, no commitment. We review every brief personally within 4 business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
