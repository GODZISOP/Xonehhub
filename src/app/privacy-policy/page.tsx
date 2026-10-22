"use client";

import React from "react";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import { Shield, ArrowUpRight, Mail } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `X ONE HUB ("we," "us," or "our") operates the website at xonehub.com. This Privacy Policy describes how we collect, use, store, and protect information from users who visit or interact with our website or services. By accessing or using our site, you agree to the practices described here.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following categories of personal data:
    
• Contact Information: Name, email address, phone number, and company name when you submit a project brief, quote request, or contact form.
• Communication Records: Records of emails, WhatsApp conversations, or calls initiated through our site for service inquiries.
• Usage Data: Non-personal data including IP addresses, browser type, pages viewed, time spent on site, and referral sources collected via standard analytics tools (e.g., Google Analytics).
• Cookies: Small data files stored on your device to enhance user experience and analyze traffic patterns.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use collected data exclusively for:

• Responding to and fulfilling service requests and project briefs submitted through our forms or direct communication channels.
• Sending project-related updates, deliverables, and communication specific to an active or prospective engagement.
• Improving site performance, content quality, and user experience through aggregated analytics.
• Complying with applicable legal obligations.

We do NOT sell, rent, trade, or share your personal data with third-party advertisers or data brokers.`,
  },
  {
    title: "4. Data Sharing & Third Parties",
    content: `We may share your data only in the following limited circumstances:

• Service Providers: Trusted platforms and tools we use to deliver services (e.g., email hosting, project management platforms) which are contractually bound to handle data securely.
• Legal Compliance: When required by law, court order, or government regulation.
• Business Transfers: In the event of a merger, acquisition, or asset sale, user data may be transferred as a business asset, subject to this Privacy Policy remaining in effect.`,
  },
  {
    title: "5. Cookies & Tracking Technologies",
    content: `Our website uses session and persistent cookies to:

• Maintain site navigation preferences.
• Analyze visitor traffic and engagement (via Google Analytics).
• Optimize content delivery.

You may disable cookies in your browser settings at any time. Disabling cookies may limit certain website features. We do not use cookies for behavioral advertising targeting.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or to comply with applicable legal obligations. Project-related communication records may be retained for up to 2 years from last contact for quality assurance and dispute resolution purposes.`,
  },
  {
    title: "7. Security",
    content: `We implement industry-standard technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS/TLS), access controls, and routine security reviews.

However, no internet transmission is 100% secure, and we cannot guarantee absolute security of information transmitted to our website.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your country of residence, you may have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you.
• Correction: Request correction of inaccurate or incomplete data.
• Deletion: Request deletion of your personal data, subject to legal retention requirements.
• Portability: Request transfer of your data in a machine-readable format.
• Withdrawal of Consent: Withdraw consent for processing at any time where consent is the legal basis.

To exercise any of these rights, contact us at info@xonehub.com. We will respond within 30 days.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are intended for business owners, founders, and professionals aged 18 and above. We do not knowingly collect personal data from individuals under 18. If you believe we have inadvertently collected data from a minor, contact us immediately at info@xonehub.com.`,
  },
  {
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites (e.g., WhatsApp, social media platforms). We are not responsible for the privacy practices or content of those external sites and encourage you to review their respective privacy policies before sharing any personal information.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We reserve the right to update this Privacy Policy at any time. Material changes will be communicated by updating the "Last Updated" date at the top of this page. Continued use of our website after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "12. Contact",
    content: `For any privacy-related queries, data requests, or concerns, please contact our Data Privacy Officer at:

Email: info@xonehub.com
WhatsApp: +92-332-2568950
Subject Line: "Privacy Policy Inquiry"

We aim to respond to all privacy requests within 5 business days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      {/* Header */}
      <section className="relative pt-36 pb-16 bg-white overflow-hidden border-b border-purple-100">
        <div className="ambient-glow w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 bg-purple-200/40" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-purple-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-700 font-semibold">Privacy Policy</span>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shadow-sm shrink-0">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-display font-black text-4xl sm:text-5xl text-[#0f0f17] tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-2 text-slate-600 text-sm font-light">
                Last updated: <span className="font-semibold text-purple-700">October 22, 2025</span> · Effective immediately upon publication
              </p>
            </div>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-purple-50 border border-purple-200">
            <p className="text-sm text-purple-900 leading-relaxed">
              <strong>Summary:</strong> X ONE HUB respects your privacy. We collect only the minimum information needed to deliver our services. We never sell your data. This policy explains exactly what we collect, why, and how you can control it.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#faf8ff]">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sticky Table of Contents */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 bg-white rounded-2xl border border-purple-100 p-5 shadow-sm">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-700 font-bold mb-4">
                  Contents
                </div>
                <nav className="space-y-2">
                  {sections.map((section, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx}`}
                      className="block text-xs text-slate-600 hover:text-purple-700 transition-colors py-0.5 leading-snug"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Policy Body */}
            <div className="lg:col-span-3 space-y-8">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  id={`section-${idx}`}
                  className="bg-white rounded-3xl border border-purple-100 p-8 shadow-sm"
                >
                  <h2 className="font-display font-bold text-xl text-[#0f0f17] mb-4">
                    {section.title}
                  </h2>
                  <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-light">
                    {section.content}
                  </div>
                </div>
              ))}

              {/* Contact Card */}
              <div className="bg-purple-600 text-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(124,58,237,0.3)]">
                <h3 className="font-display font-bold text-xl mb-3">
                  Privacy Inquiry or Data Request?
                </h3>
                <p className="text-purple-100 text-sm font-light mb-5">
                  Our team handles all privacy inquiries personally. Contact us and we&apos;ll respond within 5 business days.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:info@xonehub.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-purple-800 font-semibold text-xs transition-all hover:bg-purple-50"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    info@xonehub.com
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 hover:border-white text-white font-semibold text-xs transition-all"
                  >
                    <span>Contact Form</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
