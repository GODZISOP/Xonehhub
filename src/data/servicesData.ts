export interface ServicePackage {
  name: string;
  price: string;
  margin: string;
  description: string;
  included: string[];
  whatsappText: string;
}

export interface DocumentChecklistItem {
  step: string;
  category: string;
  title: string;
  desc: string;
  badge: string;
}

export interface SupportedCountry {
  flag: string;
  country: string;
  docs: string;
  badge?: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
}

export interface GuaranteeAudit {
  subtitle: string;
  title: string;
  desc: string;
  ctaText: string;
  whatsappText: string;
}

export interface BottomBanner {
  title: string;
  desc: string;
  ctaText: string;
  whatsappText: string;
}

export interface ServiceDetail {
  slug: string;
  aliases: string[];
  number: string;
  category: "Amazon Growth" | "US Corporate" | "Bank Account Creation";
  categoryBadge: string;
  title: string;
  tagline: string;
  summary: string;
  heroImage: string;
  badge: string;
  priceBadge: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  whatWeDoTitle: string;
  whatWeDo: string;
  howItWorks: { step: string; title: string; desc: string }[];
  whatsIncluded: string[];
  whoIsItFor: string[];
  pricingNote: string;
  faqs: { question: string; answer: string }[];
  // Rich extension fields
  documentChecklistTitle?: string;
  documentChecklistSubtitle?: string;
  documentChecklistDesc?: string;
  documentChecklist?: DocumentChecklistItem[];
  guaranteeAudit?: GuaranteeAudit;
  supportedCountriesTitle?: string;
  supportedCountriesSubtitle?: string;
  supportedCountriesDesc?: string;
  supportedCountries?: SupportedCountry[];
  featureCardsTitle?: string;
  featureCards?: FeatureCard[];
  packagesTitle?: string;
  packagesSubtitle?: string;
  packagesDesc?: string;
  packages?: ServicePackage[];
  bottomBanner?: BottomBanner;
  heroCtaText?: string;
  heroWhatsappText?: string;
  heroSecondaryCta?: { label: string; href: string };
  fullServicePackage?: {
    badge: string;
    title: string;
    desc: string;
    features: string[];
    ctaText: string;
    whatsappText: string;
  };
}

export const servicesData: ServiceDetail[] = [
  // ─── AMAZON GROWTH ─────────────────────────────────────────────────────────
  {
    slug: "amazon-account-creation",
    aliases: ["account-creation", "amazon-setup"],
    number: "01",
    category: "Amazon Growth",
    categoryBadge: "Guaranteed Non-Resident Identity Verification & Approval",
    title: "Amazon Seller Central Account Creation & Verification",
    tagline: "Avoid instant Section 3 suspensions. Professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.",
    summary:
      "Avoid instant Section 3 suspensions. Professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.",
    heroImage: "/images/amazon-account-creation.jpg",
    badge: "Amazon Growth",
    priceBadge: "Guaranteed Approval",
    heroCtaText: "Start Account Setup",
    heroWhatsappText: "Hi Xonehub, I want to create and verify my Amazon Seller Central account.",
    heroSecondaryCta: {
      label: "View Document Checklist",
      href: "#required-documents",
    },
    highlights: [
      "Character-by-character pre-submission audit",
      "Section 3 suspension safeguard",
      "Utility bill & address alignment",
      "W-8BEN non-resident tax clearance",
    ],
    metrics: [
      { value: "100%", label: "Approval Guarantee" },
      { value: "0", label: "Section 3 Suspensions" },
      { value: "10+", label: "Countries Supported" },
      { value: "24/7", label: "Video Call Guidance" },
    ],
    documentChecklistSubtitle: "Mandatory Checklist",
    documentChecklistTitle: "Required Documents For Approval",
    documentChecklistDesc:
      "Every document must be perfectly formatted and pre-audited to avoid automatic rejection by Amazon's verification bots:",
    documentChecklist: [
      {
        step: "01",
        category: "Account Security",
        title: "Dedicated Gmail & Password",
        desc: "A completely fresh, clean Google/Gmail address that has never been linked to any existing Amazon buyer or seller account.",
        badge: "Verified By Xonehub Team",
      },
      {
        step: "02",
        category: "Financial Proof",
        title: "Bank Account Statement",
        desc: "Official bank statement (Digital bank like Wise/Payoneer or local bank) in PDF format, dated within the last 90 days, with exact matching legal name and residential address.",
        badge: "Verified By Xonehub Team",
      },
      {
        step: "03",
        category: "Identity Verification",
        title: "Government Identity Proof",
        desc: "• Pakistan: CNIC (Smart ID) or Passport\n• India: Aadhaar Card or Passport\n• Other Countries: National Identity Card or Passport\n(High-resolution color scan with all 4 corners visible and min. 6 months validity).",
        badge: "Verified By Xonehub Team",
      },
      {
        step: "04",
        category: "Address Verification",
        title: "Official Utility Bill",
        desc: "Electricity, piped gas, water, or landline internet bill matching your exact legal name and residential address to pass Amazon Section 3 and automated utility bill verification.",
        badge: "Verified By Xonehub Team",
      },
      {
        step: "05",
        category: "Charge Method",
        title: "International Credit / Debit Card",
        desc: "An active Visa or Mastercard enabled for international online e-commerce transactions for the Amazon monthly seller subscription fee.",
        badge: "Verified By Xonehub Team",
      },
    ],
    guaranteeAudit: {
      subtitle: "Our Guarantee",
      title: "Pre-Submission Audit",
      desc: "Don't risk submitting unverified documents. Send them to us first on WhatsApp. We inspect character-by-character formatting, bank watermarks, and resolution before anything touches Amazon.",
      ctaText: "Free Document Pre-Audit",
      whatsappText: "Hi Xonehub, please pre-audit my documents for Amazon Account Creation.",
    },
    supportedCountriesSubtitle: "Global Coverage",
    supportedCountriesTitle: "Supported Countries & Major Marketplaces",
    supportedCountriesDesc:
      "We register and verify active seller accounts for founders residing across 10+ countries worldwide:",
    supportedCountries: [
      { flag: "🇵🇰", country: "Pakistan", docs: "CNIC / Smart Card & Passport", badge: "High Demand" },
      { flag: "🇮🇳", country: "India", docs: "Aadhaar Card & Passport", badge: "High Demand" },
      { flag: "🌍", country: "Other Countries", docs: "National Identity Card / Passport", badge: "High Demand" },
      { flag: "🇺🇸", country: "United States (USA)", docs: "State ID / Driver's License / Passport", badge: "High Demand" },
      { flag: "🇬🇧", country: "United Kingdom (UK)", docs: "National ID / Passport", badge: "High Demand" },
      { flag: "🇦🇪", country: "Dubai / UAE", docs: "Emirates ID / Passport", badge: "High Demand" },
      { flag: "🇸🇦", country: "Saudi Arabia (KSA)", docs: "Iqama / National ID / Passport", badge: "High Demand" },
      { flag: "🇨🇦", country: "Canada", docs: "Amazon.ca (North America)" },
      { flag: "🇶🇦", country: "Qatar & Oman", docs: "Amazon Gulf Network" },
    ],
    whatWeDoTitle: "How We Guarantee Approval",
    whatWeDo:
      "Our structured methodology minimizes rejection risks to nearly zero. Avoid instant Section 3 suspensions with our professional end-to-end setup for non-resident and international founders with complete document pre-vetting, utility bill alignment, and tax interview clearance.",
    howItWorks: [
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
    ],
    fullServicePackage: {
      badge: "Full-Service Package",
      title: "Amazon Account Creation & Verification",
      desc: "Includes comprehensive document pre-screening, Section 3 safeguard, tax interview completion, and live approval support.",
      features: [
        "Document Pre-Submission Audit",
        "Bank Statement Alignment",
        "W-8BEN / Regional Tax Interview",
        "Video Verification Coaching",
      ],
      ctaText: "Get Started on WhatsApp",
      whatsappText: "Hi Xonehub, I want to create and verify my Amazon Seller Central account.",
    },
    whatsIncluded: [
      "Document Pre-Submission Audit",
      "Bank Statement Alignment",
      "W-8BEN / Regional Tax Interview",
      "Video Verification Coaching",
      "Charge & Deposit method setup",
      "Green health account handover",
    ],
    whoIsItFor: [
      "Founders residing in Pakistan, India, UAE, KSA, UK, USA & worldwide",
      "Entrepreneurs wanting to sell on Amazon US, UK & international marketplaces",
      "Sellers worried about Day 1 Section 3 suspensions",
      "Anyone needing clean, 100% compliant account registration",
    ],
    pricingNote: "Comprehensive end-to-end document pre-audit, tax filing, and video verification approval support.",
    faqs: [
      {
        question: "Why do so many Amazon accounts get suspended on Day 1?",
        answer:
          "Amazon uses automated AI algorithms that reject or suspend accounts if there is even a minor discrepancy in character-by-character address spelling, bank statement watermarks, or utility bill formatting. At Xonehub, our team pre-audits and aligns every piece of data before submission to ensure a 100% suspension-free approval.",
      },
      {
        question: "Can I open an Amazon US/UK account from Pakistan, India, or other countries?",
        answer:
          "Yes, absolutely. Amazon officially accepts non-resident international sellers from Pakistan, India, UAE, and over 100 countries. We configure your account using your local Smart CNIC, Aadhaar, or Passport, paired with multi-currency business accounts like Wise or Payoneer.",
      },
      {
        question: "What if the utility bill is not under my name?",
        answer:
          "Amazon strictly requires a utility bill (electricity, gas, water, or landline internet) matching your exact registered name and residential address. If your bill is under a landlord or family member's name, Xonehub helps you arrange compliant acceptable solutions to clear Amazon Section 3 verification.",
      },
      {
        question: "Do I need a US LLC to create an Amazon seller account?",
        answer:
          "No, you can start with an Individual Seller account using your local documents. However, forming a US LLC (like Wyoming or Texas) provides higher buyer trust, commercial banking perks, and corporate liability protection. Xonehub can also form your US LLC and EIN when needed.",
      },
      {
        question: "How long does the verification process take?",
        answer:
          "Once documents are pre-screened and submitted, automated document verification takes 24 to 48 hours. If Amazon requests a video call verification, we provide prior coaching and the account is typically active with full privileges within 3 to 5 business days.",
      },
    ],
  },
  {
    slug: "amazon-ppc-management",
    aliases: ["ppc", "amazon-ads", "sponsored-ads"],
    number: "02",
    category: "Amazon Growth",
    categoryBadge: "3x–8x ROAS",
    title: "Amazon PPC Management",
    tagline: "We run your Amazon ads so you make more money and spend less.",
    summary:
      "Most sellers waste money on Amazon ads because they don't know which keywords work, which bids to set, or how to stop ads from bleeding money. We take over and fix all of that.",
    heroImage: "/images/amazon-product-hunting.jpg",
    badge: "Amazon Growth",
    priceBadge: "3x–8x ROAS",
    highlights: [
      "Sponsored Products, Brands and Display ads",
      "Daily bid and budget changes",
      "Weekly reports you can actually understand",
      "We cut wasted spend fast",
    ],
    metrics: [
      { value: "3x–8x", label: "Average ROAS Achieved" },
      { value: "-35%", label: "Average Wasted Ad Spend" },
      { value: "Weekly", label: "Transparent Reporting" },
      { value: "Daily", label: "Bid Optimization" },
    ],
    whatWeDoTitle: "We make your ads profitable — not just active.",
    whatWeDo:
      "We audit your existing campaigns, cut losing keywords, set smart bids, and build new campaigns targeting buyers who are ready to purchase. We test, adjust, and improve every week so your results keep getting better.",
    howItWorks: [
      { step: "01", title: "Account Audit", desc: "We check your current ads, find where money is being wasted, and make a plan to fix it." },
      { step: "02", title: "Campaign Setup", desc: "We build or rebuild your Sponsored Products, Brands, and Display campaigns the right way." },
      { step: "03", title: "Weekly Optimization", desc: "Every week we adjust bids, remove bad keywords, and add new winning ones." },
      { step: "04", title: "Monthly Review", desc: "We send you a clear report showing what we spent, what we earned, and what's next." },
    ],
    whatsIncluded: [
      "Full PPC account audit",
      "Sponsored Products, Brands and Display setup",
      "Negative keyword management",
      "Competitor targeting campaigns",
      "Daily bid adjustments",
      "Weekly performance report",
      "Direct access to your PPC manager",
    ],
    whoIsItFor: [
      "Sellers spending money on ads but not seeing results",
      "New sellers who want to launch with winning ads from day one",
      "Brands scaling past $10K per month",
      "Anyone whose TACoS (ad spend rate) is too high",
    ],
    pricingNote: "Monthly management fee. Contact us to discuss your ad budget.",
    faqs: [
      {
        question: "What is ROAS?",
        answer: "ROAS means 'Return on Ad Spend.' If you spend $1 on ads and make $5 back, your ROAS is 5x. We aim for 3x to 8x depending on your product.",
      },
      {
        question: "How quickly will I see results?",
        answer: "Most clients see improvement within 2 to 4 weeks. Big results typically show by month 2 once we have enough data.",
      },
      {
        question: "Do I need a big budget to start?",
        answer: "No. We work with budgets as small as $500/month. We'll make sure every dollar counts.",
      },
    ],
  },
  {
    slug: "fba-store-automation",
    aliases: ["fba-automation", "fba-store", "amazon-automation"],
    number: "03",
    category: "Amazon Growth",
    categoryBadge: "Complete Store Automation",
    title: "FBA Store Automation",
    tagline: "We run your Amazon FBA store for you — completely hands-free.",
    summary:
      "You invest, we do the work. We find winning products, source them from suppliers, send them to Amazon, and manage your store every single day. You just watch the profits come in.",
    heroImage: "/images/amazon-wholesale-fba.jpg",
    badge: "Amazon Growth",
    priceBadge: "Store Automation",
    highlights: [
      "Full store management — you do nothing",
      "Product research, sourcing, and shipping",
      "Daily account health monitoring",
      "Dedicated launch onboarding, then profit share",
    ],
    metrics: [
      { value: "100%", label: "Hands-Free Operation" },
      { value: "Daily", label: "Store Health Checks" },
      { value: "Dedicated", label: "Operations Team" },
      { value: "Profit %", label: "Performance Aligned" },
    ],
    whatWeDoTitle: "Your Amazon business, fully managed by our team.",
    whatWeDo:
      "We handle everything — finding products that sell, negotiating with suppliers, creating shipments to Amazon warehouses, managing inventory, and dealing with any issues that come up. You don't need any Amazon experience. We do it all.",
    howItWorks: [
      { step: "01", title: "Product Research", desc: "We find proven, high-demand products with good profit margins and low competition." },
      { step: "02", title: "Sourcing", desc: "We contact and negotiate with suppliers to get you the best price and quality." },
      { step: "03", title: "Shipping to Amazon", desc: "We prepare and ship inventory to Amazon FBA warehouses." },
      { step: "04", title: "Daily Management", desc: "We watch your store every day — fixing issues, managing stock, and growing sales." },
    ],
    whatsIncluded: [
      "Product hunting and competitor research",
      "Supplier sourcing and negotiation",
      "FBA shipment plan creation",
      "Inventory management",
      "Listing creation and optimization",
      "Daily account health monitoring",
      "Monthly performance reports",
    ],
    whoIsItFor: [
      "Investors who want Amazon income without doing the work",
      "Busy professionals who don't have time to run a store",
      "People new to Amazon who want experts to run things",
      "Those wanting a passive online business",
    ],
    pricingNote: "Hands-free store operations, catalog sourcing, and profit-aligned performance partnership.",
    faqs: [
      {
        question: "Do I need any Amazon knowledge?",
        answer: "No. You don't need to know anything about Amazon. We handle 100% of the operations.",
      },
      {
        question: "How much do I need to invest?",
        answer: "Typically $2,000–$5,000 in starting inventory capital. Our compensation aligns directly with your monthly profit percentage.",
      },
      {
        question: "When will I start making money?",
        answer: "Most stores start generating sales within 30 to 60 days of the first shipment arriving at Amazon.",
      },
    ],
  },
  {
    slug: "amazon-product-hunting",
    aliases: ["product-research", "product-hunting", "product-sourcing"],
    number: "04",
    category: "Amazon Growth",
    categoryBadge: "Find Winning Products & Reliable Suppliers",
    title: "Product Hunting & Sourcing",
    tagline: "Product Hunting & Sourcing means finding suitable products to sell and reliable suppliers to buy them from.",
    summary:
      "Product Hunting & Sourcing means finding suitable products to sell and reliable suppliers to buy them from.",
    heroImage: "/images/amazon-product-hunting.jpg",
    badge: "Amazon Growth",
    priceBadge: "Winning Products",
    heroCtaText: "Get Started Now",
    heroWhatsappText: "Hi Xonehub, I want to get started with Product Hunting & Sourcing.",
    highlights: [
      "Guaranteed Approval",
      "Fast Processing",
      "Global Support",
      "Reliable Supplier Sourcing",
    ],
    metrics: [
      { value: "100%", label: "Guaranteed Approval" },
      { value: "Fast", label: "Processing Speed" },
      { value: "Global", label: "Supplier Network" },
      { value: "30%+", label: "Profit Margin Target" },
    ],
    whatWeDoTitle: "What's Included",
    whatWeDo:
      "Clear, simple steps to make your Amazon listings look professional and bring in more sales.",
    howItWorks: [
      { step: "01", title: "Product Research", desc: "Find products with good sales potential." },
      { step: "02", title: "Competition Check", desc: "See how many sellers offer similar products." },
      { step: "03", title: "Profit Calculation", desc: "Estimate profit after product costs and Amazon fees." },
      { step: "04", title: "Supplier Research", desc: "Find reliable brands, wholesalers, or manufacturers." },
      { step: "05", title: "Price Negotiation", desc: "Discuss better prices and buying terms." },
    ],
    whatsIncluded: [
      "Product Research (good sales potential)",
      "Competition Check (seller saturation analysis)",
      "Profit Calculation (after Amazon & FBA fees)",
      "Supplier Research (brands, wholesalers, factories)",
      "Price Negotiation (better prices & buying terms)",
    ],
    whoIsItFor: [
      "New sellers wanting verified winning products",
      "Private label founders seeking direct factory sources",
      "Wholesale sellers looking for brand distributors",
      "Anyone who wants to avoid high-risk low-margin items",
    ],
    pricingNote: "One-time research & supplier sourcing package.",
    faqs: [
      {
        question: "What is Product Hunting & Sourcing?",
        answer: "Product Hunting & Sourcing means finding high-demand, profitable products to sell on Amazon and connecting with reliable suppliers or manufacturers to buy them at wholesale rates.",
      },
      {
        question: "How do you check profitability?",
        answer: "We factor in product manufacturing/purchase cost, shipping, Amazon referral fees, and FBA fulfillment fees to ensure a healthy 30%+ profit margin.",
      },
      {
        question: "What suppliers do you connect with?",
        answer: "We source directly from vetted factories, authorized brand distributors, and verified manufacturers in the US, UK, and Asia.",
      },
      {
        question: "Are the products guaranteed to work?",
        answer: "No product can be 100% guaranteed. But we only bring you products that meet strict criteria for demand, competition, and profit — giving you the best possible chance.",
      },
      {
        question: "How long does it take?",
        answer: "We deliver your product research report within 5 to 7 business days.",
      },
    ],
  },
  {
    slug: "a-plus-content",
    aliases: ["a-plus", "ebc", "enhanced-brand-content", "a-content-ebc"],
    number: "05",
    category: "Amazon Growth",
    categoryBadge: "Conversion Booster",
    title: "A+ Content & EBC",
    tagline: "Make your Amazon listing look amazing and sell more.",
    summary:
      "A+ Content (Enhanced Brand Content) makes your product page look premium with beautiful images, comparison charts, and brand stories. It can boost your conversions by up to 20%.",
    heroImage: "/images/amazon-private-label.jpg",
    badge: "Amazon Growth",
    priceBadge: "Boosts Conversion 20%",
    highlights: [
      "Beautiful visual product storytelling",
      "Competitor comparison tables",
      "Brand story and lifestyle images",
      "Can increase sales by up to 20%",
    ],
    metrics: [
      { value: "+20%", label: "Conversion Boost" },
      { value: "5–7 Days", label: "Delivery Time" },
      { value: "Mobile-First", label: "Design Approach" },
      { value: "100%", label: "Amazon Compliant" },
    ],
    whatWeDoTitle: "We make your listing stand out and convince buyers to purchase.",
    whatWeDo:
      "We design custom A+ Content modules that tell your brand story visually. This includes high-quality images, feature highlight sections, comparison tables against competitors, and a brand story. All designed to look great on both desktop and mobile.",
    howItWorks: [
      { step: "01", title: "Product Brief", desc: "You tell us about your product, its benefits, and your brand style." },
      { step: "02", title: "Design", desc: "Our designers create beautiful A+ Content modules that highlight your product's best features." },
      { step: "03", title: "Review", desc: "You review the designs and we make any changes you want." },
      { step: "04", title: "Upload", desc: "We upload the approved content directly to your Amazon listing." },
    ],
    whatsIncluded: [
      "Up to 7 A+ Content modules",
      "Custom graphic design for each module",
      "Competitor comparison table",
      "Brand story section",
      "Mobile-optimized layouts",
      "Upload to Seller Central",
      "1 round of revisions",
    ],
    whoIsItFor: [
      "Brand registered Amazon sellers",
      "Sellers with low conversion rates",
      "Anyone launching a new product",
      "Brands who want to look more professional than competitors",
    ],
    pricingNote: "One-time design fee. Contact us for current pricing.",
    faqs: [
      {
        question: "Do I need Brand Registry for A+ Content?",
        answer: "Yes, Amazon requires Brand Registry to use A+ Content. We can also help you get Brand Registry if you need it.",
      },
      {
        question: "Will it really increase my sales?",
        answer: "Amazon's own data shows A+ Content boosts conversion by up to 20%. Our clients typically see a 10–20% improvement after going live.",
      },
      {
        question: "Do you need my product images?",
        answer: "Yes, the better your product photos are, the better the result. We can also recommend product photographers if needed.",
      },
    ],
  },
  {
    slug: "brand-approvals",
    aliases: ["brand-approval", "ungating"],
    number: "06",
    category: "Amazon Growth",
    categoryBadge: "Guaranteed Amazon Brand Approvals",
    title: "Amazon Brand Approvals & Ungating Packages",
    tagline: "Get official approvals to sell big brands on Amazon. We provide real Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete account setup.",
    summary:
      "Get official approvals to sell big brands on Amazon. We provide real Letter of Authorization (LOA), Brand Registry approval, Proforma Invoices, Paid Invoices, and complete account setup.",
    heroImage: "/images/brand-approvals.jpg",
    badge: "Amazon Growth",
    priceBadge: "High Margin Brands",
    heroCtaText: "Contact Us",
    heroWhatsappText: "Hi Xonehub, I need brand approvals and ungating for my Amazon account.",
    highlights: [
      "Official Letter of Authorization (LOA)",
      "Proforma & Paid Commercial Invoices",
      "Full Ungating Setup in Seller Central",
      "20% to 70% Profit Margin Brands",
    ],
    metrics: [
      { value: "20–70%", label: "Profit Margin Range" },
      { value: "100%", label: "Legitimate Distributor Invoices" },
      { value: "LOA", label: "Official Authorization Letter" },
      { value: "3–5 Days", label: "Turnaround Time" },
    ],
    featureCardsTitle: "Included In Every Brand Approval",
    featureCards: [
      {
        title: "Letter of Authorization (LOA)",
        desc: "Direct letter from the brand giving your company official permission to sell their products on Amazon.",
      },
      {
        title: "Proforma & Paid Invoices",
        desc: "100% real distributor invoices with your company name, address, and purchased quantities.",
      },
      {
        title: "Brand Registry Approval",
        desc: "We configure your brand permissions so your account is officially recognized and approved.",
      },
      {
        title: "Seller Central Ungating",
        desc: "We submit all documents directly inside your Amazon account until selling is fully unlocked.",
      },
    ],
    packagesSubtitle: "Approval Tiers",
    packagesTitle: "Choose Your Tier",
    packagesDesc: "Pick the profit margin percentage you want for your approved brands.",
    packages: [
      {
        name: "Tier 1",
        price: "Tier 1",
        margin: "20% to 30% Profit Margin",
        description: "Get brand approvals with 20% to 30% profit margin and complete documents to start selling.",
        included: [
          "20% to 30% Profit Margin Brands",
          "Letter of Authorization (LOA)",
          "Brand Registry Approval",
          "Proforma Invoice & Paid Invoices",
          "Full Ungating Setup in Seller Central",
          "Safe & Approved by Amazon",
        ],
        whatsappText: "Hi Xonehub, I want to inquire about the Tier 1 (20% to 30% Profit Margin) Brand Approval tier.",
      },
      {
        name: "Tier 2",
        price: "Tier 2",
        margin: "20% to 45% Profit Margin",
        description: "Get brand approvals with 20% to 45% profit margin for bigger profits and variety.",
        included: [
          "20% to 45% Profit Margin Brands",
          "Letter of Authorization (LOA)",
          "Brand Registry Approval",
          "Proforma Invoice & Paid Invoices",
          "Full Ungating Setup in Seller Central",
          "Fast 3 to 5 Days Processing",
        ],
        whatsappText: "Hi Xonehub, I want to inquire about the Tier 2 (20% to 45% Profit Margin) Brand Approval tier.",
      },
      {
        name: "Tier 3",
        price: "Tier 3",
        margin: "20% to 50% Profit Margin",
        description: "Get brand approvals with 20% to 50% profit margin to sell popular high-demand items.",
        included: [
          "20% to 50% Profit Margin Brands",
          "Letter of Authorization (LOA)",
          "Brand Registry Approval",
          "Proforma Invoice & Paid Invoices",
          "Full Ungating Setup in Seller Central",
          "High Profit Brand List",
        ],
        whatsappText: "Hi Xonehub, I want to inquire about the Tier 3 (20% to 50% Profit Margin) Brand Approval tier.",
      },
      {
        name: "Tier 4",
        price: "Tier 4",
        margin: "20% to 70% Profit Margin",
        description: "Get brand approvals with 20% to 70% profit margin for maximum selling profits.",
        included: [
          "20% to 70% Profit Margin Brands",
          "Letter of Authorization (LOA)",
          "Brand Registry Approval",
          "Proforma Invoice & Paid Invoices",
          "Full Ungating Setup in Seller Central",
          "Top Selling Big Brands Included",
          "Priority Support",
        ],
        whatsappText: "Hi Xonehub, I want to inquire about the Tier 4 (20% to 70% Profit Margin) Brand Approval tier.",
      },
    ],
    bottomBanner: {
      title: "Ready to get your brand approvals?",
      desc: "Contact us on WhatsApp now. Tell us which brands you want and we will start your paperwork today.",
      ctaText: "Contact Us",
      whatsappText: "Hi Xonehub, I need brand approvals and ungating for my Amazon account.",
    },
    whatWeDoTitle: "We unlock restricted brands for you with real documentation.",
    whatWeDo:
      "We connect you with legitimate brand distributors, obtain real Letters of Authorization and invoices, and then walk you through submitting everything to Amazon. Once approved, you can sell that brand's products and enjoy their high margins.",
    howItWorks: [
      { step: "01", title: "Brand Selection", desc: "We help you pick brands that have good margins and are in demand right now." },
      { step: "02", title: "Getting Approval", desc: "We obtain the official LOA and invoices needed to apply for approval on Amazon." },
      { step: "03", title: "Submission", desc: "We prepare and submit all documents to Amazon Seller Central on your behalf." },
      { step: "04", title: "Approval Confirmed", desc: "Once Amazon approves, we set up your listing and you start selling." },
    ],
    whatsIncluded: [
      "Brand selection guidance",
      "Official Letter of Authorization (LOA)",
      "Proforma and paid invoices",
      "Amazon Brand Registry approval assistance",
      "Full ungating submission",
      "Listing setup after approval",
    ],
    whoIsItFor: [
      "Sellers who want to sell branded products",
      "Wholesale sellers looking for high-margin brands",
      "Anyone wanting to compete in gated categories",
      "FBA sellers ready to scale with brand products",
    ],
    pricingNote: "Curated brand approvals customized to your desired profit margin (20% to 70%).",
    faqs: [
      {
        question: "What documents are included in these packages?",
        answer:
          "Each package includes an official Letter of Authorization (LOA) direct from the brand distributor, legitimate proforma and paid commercial invoices reflecting your business name and address, Brand Registry verification setup, and complete ungating inside Seller Central.",
      },
      {
        question: "What profit margin percentages are included in each package?",
        answer:
          "Our packages are tiered by profit margin: Tier 1 offers 20% to 30% margin, Tier 2 offers 20% to 45% margin, Tier 3 offers 20% to 50% margin, and Tier 4 unlocks tier-one big brands with 20% to 70% profit margin.",
      },
      {
        question: "Are these invoices real and safe for Amazon?",
        answer:
          "Yes, 100%. All invoices are issued by authorized, registered brand distributors with verifiable tax IDs, physical addresses, and verifiable tracking. They are 100% compliant, genuine, and safe for Amazon Seller Central ungating.",
      },
      {
        question: "How long does it take to get approved?",
        answer:
          "Distributor paperwork, LOA, and invoices are typically ready in 2 to 3 days. Once submitted to Amazon Seller Central, ungating approval usually takes 3 to 5 business days.",
      },
    ],
  },
  {
    slug: "amazon-wholesale-fba",
    aliases: ["wholesale", "wholesale-fba"],
    number: "07",
    category: "Amazon Growth",
    categoryBadge: "Complete Wholesale FBA Operations",
    title: "Complete Amazon Wholesale Account Management",
    tagline: "We handle everything for your Wholesale FBA business: direct brand purchasing, shipment plans with prep centers, and daily BuyBox account management.",
    summary:
      "We handle everything for your Wholesale FBA business: direct brand purchasing, shipment plans with prep centers, and daily BuyBox account management.",
    heroImage: "/images/amazon-wholesale-fba.jpg",
    badge: "Amazon Growth",
    priceBadge: "Turnkey Wholesale",
    heroCtaText: "Contact Us",
    heroWhatsappText: "Hi Xonehub, I want to start Complete Amazon Wholesale Account Management.",
    highlights: [
      "Brand Purchasing & Direct Invoices",
      "Send-to-Amazon shipment plans & prep",
      "Daily BuyBox repricing & monitoring",
      "Dedicated onboarding phase, then profit share only",
    ],
    metrics: [
      { value: "Dedicated", label: "Operations Team" },
      { value: "Aligned", label: "Profit Share Model" },
      { value: "Daily", label: "BuyBox Repricing" },
      { value: "100%", label: "Real Brand Invoices" },
    ],
    whatWeDoTitle: "How We Run Your Business",
    whatWeDo:
      "We take care of the heavy lifting from buying products to daily sales.",
    howItWorks: [
      {
        step: "01",
        title: "Brand Purchasing & Approvals",
        desc: "We find real US and UK brands, open wholesale accounts, and buy inventory with real commercial invoices so you can sell safely.",
      },
      {
        step: "02",
        title: "Shipment Plans & Prep",
        desc: "We make Send-to-Amazon (STA) shipment plans, send box and barcode labels to prep centers, and track stock until it arrives at Amazon.",
      },
      {
        step: "03",
        title: "A-to-Z Account Management",
        desc: "We handle your Seller Central daily: winning the BuyBox, placing re-orders before stock runs out, and keeping your account 100% healthy.",
      },
    ],
    whatsIncluded: [
      "Direct wholesale accounts with brands",
      "Authorized distributor price lists",
      "Real invoices for Amazon ungating",
      "High sales demand product checking",
      "Inbound shipment plan creation in Seller Central",
      "Prep center barcode and box labeling",
      "Stock tracking until safe Amazon arrival",
      "Daily BuyBox repricing to get constant sales",
      "Inventory restock reminders & re-ordering",
      "Account health monitoring every day",
      "Monthly profit calculation report",
    ],
    whoIsItFor: [
      "Investors wanting a stable, predictable Amazon business",
      "Sellers who want to scale with real brand products",
      "Anyone who wants hands-free wholesale operations",
      "Those with capital to invest in inventory",
    ],
    pricingNote: "Structured onboarding followed by aligned profit percentage performance.",
    faqs: [
      {
        question: "How does the wholesale onboarding and profit share model work?",
        answer: "During the initial onboarding period, our team opens verified wholesale accounts, vets brand catalogs, and coordinates inbound FBA prep. Once steady sales are achieved, we work strictly on profit percentage.",
      },
      {
        question: "What is included in Brand Purchasing?",
        answer: "We open direct wholesale trade accounts with authentic brands and authorized distributors, secure catalog price lists, verify high sales demand, and purchase inventory with real commercial invoices for Amazon ungating.",
      },
      {
        question: "How do shipment plans and prep work?",
        answer: "We create Send-to-Amazon (STA) inbound shipment plans inside Seller Central, coordinate FNSKU barcode and box labeling with US prep centers, and track shipments until safe check-in at Amazon fulfillment centers.",
      },
      {
        question: "How much money do I need for wholesale inventory?",
        answer: "We recommend starting with at least $2,000 to $5,000 in inventory capital to place initial brand purchase orders and maintain steady BuyBox rotation.",
      },
    ],
  },
  {
    slug: "amazon-private-label",
    aliases: ["private-label", "pl-amazon"],
    number: "08",
    category: "Amazon Growth",
    categoryBadge: "Complete Brand Launch From Scratch",
    title: "Amazon Private Label Account Management",
    tagline: "We build and manage your complete Amazon brand from scratch. Product finding, competitor research, factory sourcing, patent check, product testing, custom packaging, photography, A+ content, and PPC ads.",
    summary:
      "We build and manage your complete Amazon brand from scratch. Product finding, competitor research, factory sourcing, patent check, product testing, custom packaging, photography, A+ content, and PPC ads.",
    heroImage: "/images/amazon-private-label.jpg",
    badge: "Amazon Growth",
    priceBadge: "Full Brand Launch",
    heroCtaText: "Contact Us",
    heroWhatsappText: "Hi Xonehub, I want to start Amazon Private Label Account Management.",
    highlights: [
      "9 A-to-Z Launch Tasks Completed",
      "Factory sourcing & price negotiation",
      "Custom packaging, 3D photography & A+ content",
      "PPC ad launch & Page 1 ranking",
    ],
    metrics: [
      { value: "6 Months", label: "Initial Build Timeline" },
      { value: "Full Turnkey", label: "Launch & Management" },
      { value: "60/40", label: "Profit Share Partnership" },
      { value: "100%", label: "Your Brand Ownership" },
    ],
    whatWeDoTitle: "Full Service From Scratch",
    whatWeDo:
      "We handle all 9 tasks so you don't have to worry about anything.",
    howItWorks: [
      { step: "01", title: "Product Finding", desc: "We find high-demand winning products with low competition and more than 30% to 35% profit margin." },
      { step: "02", title: "Competitor Research", desc: "We study competitor top products and customer bad reviews to fix problems and make a better product." },
      { step: "03", title: "Manufacturing & Sourcing", desc: "We talk directly to factories, get good sample pieces, and negotiate the lowest unit price for production." },
      { step: "04", title: "Patent Check & Design", desc: "We check US and international patents to make sure the product design is 100% legal with zero copy issues." },
      { step: "05", title: "Product Testing & Quality Check", desc: "We test product samples and check factory batch quality before products are shipped to Amazon." },
      { step: "06", title: "Product Labeling & Packaging", desc: "Custom box packaging design, logo placement, barcode labels, and Amazon safety stickers." },
      { step: "07", title: "Graphic & Product Photography", desc: "Professional studio photos, 3D pictures, product feature graphics, and lifestyle images." },
      { step: "08", title: "A+ Content & Listing Setup", desc: "Beautiful A+ Content (EBC) with comparison tables and sales copywriting to turn visitors into buyers." },
      { step: "09", title: "PPC Marketing Strategy from Scratch", desc: "We set up Amazon ads from scratch to get fast initial sales and rank your product on Page 1." },
    ],
    whatsIncluded: [
      "Product finding & competitor study",
      "Factory sourcing & price negotiation",
      "Patent check & legal design verification",
      "Product testing & quality checks",
      "Custom box packaging design & barcode labels",
      "Studio product photography & 3D renders",
      "A+ Content (EBC) design & SEO listing",
      "PPC ad launch campaign from scratch",
      "Daily BuyBox repricing & restock re-orders",
    ],
    whoIsItFor: [
      "Anyone who wants to own a valuable Amazon brand",
      "Entrepreneurs wanting a hands-off private label launch",
      "Investors looking for scalable e-commerce equity",
      "Founders ready to partner on a sustainable profit share model",
    ],
    pricingNote: "Full brand development, custom manufacturer sourcing, launch marketing, and ongoing profit share.",
    faqs: [
      {
        question: "How does the private label development and profit share partnership work?",
        answer: "During the initial build phase, we handle the entire launch from manufacturing and packaging to listings and PPC. Once established, we align incentives through a 60/40 profit share partnership.",
      },
      {
        question: "What is included in the service?",
        answer: "All 9 launch tasks: product research, competitor reviews analysis, factory sourcing, patent checking, sample testing, packaging design, photography, A+ content, and PPC ad campaigns.",
      },
      {
        question: "Who owns the Amazon account, brand, and inventory?",
        answer: "You 100% own the Amazon account, the trademark, the brand, and all inventory. We operate and manage everything on your behalf.",
      },
      {
        question: "How much budget is needed for stock and manufacturing?",
        answer: "You will need capital for your initial production batch and shipping depending on the product category and order quantities.",
      },
    ],
  },
  {
    slug: "trademark-brand-registry",
    aliases: ["trademark", "brand-registry"],
    number: "09",
    category: "Amazon Growth",
    categoryBadge: "USPTO Trademark & Brand Registry",
    title: "Trademark & Brand Registry",
    tagline: "Protect your brand on Amazon and unlock powerful seller tools.",
    summary:
      "A trademark protects your brand from copycats and unlocks Amazon Brand Registry — which gives you access to A+ Content, video ads, brand stores, and more. We file your USPTO trademark and get you Brand Registry access fast.",
    heroImage: "/images/trademark-brand-registry.jpg",
    badge: "Amazon Growth",
    priceBadge: "Official USPTO Filing",
    highlights: [
      "Official USPTO trademark filing",
      "Serial number in 2 to 3 days",
      "Instant Amazon Brand Registry access",
      "Protects you from copycats and hijackers",
    ],
    metrics: [
      { value: "2–3 Days", label: "Serial Number Issued" },
      { value: "USPTO", label: "Official Logo Filing" },
      { value: "Full IP", label: "Wordmark Protection" },
      { value: "100%", label: "Brand Registry Eligible" },
    ],
    whatWeDoTitle: "We file your trademark and get you Amazon Brand Registry access quickly.",
    whatWeDo:
      "We prepare and file your trademark application with the USPTO. Within 2 to 3 days you get your serial number, which we use to immediately enroll your brand in Amazon Brand Registry. This unlocks A+ Content, brand stores, video ads, and protects you from anyone copying your listing.",
    howItWorks: [
      { step: "01", title: "Brand Information", desc: "You provide your brand name, logo, and product categories." },
      { step: "02", title: "USPTO Filing", desc: "We prepare and submit your trademark application to the United States Patent and Trademark Office." },
      { step: "03", title: "Serial Number", desc: "In 2 to 3 days, you receive your official trademark serial number." },
      { step: "04", title: "Brand Registry", desc: "We use your serial number to enroll you in Amazon Brand Registry immediately." },
    ],
    whatsIncluded: [
      "USPTO trademark application preparation",
      "Official Logo or Wordmark filing",
      "Government filing fee included",
      "Serial number within 2–3 days",
      "Amazon Brand Registry enrollment",
      "Access to A+ Content, Brand Store and video ads",
    ],
    whoIsItFor: [
      "Amazon sellers who want to protect their brand",
      "Private label sellers ready for Brand Registry",
      "Anyone being copied by hijackers on their listings",
      "Brands wanting to run Sponsored Brand video ads",
    ],
    pricingNote: "Complete USPTO trademark filing including legal preparation, statutory government filing fee, and serial number issuance in 2–3 days.",
    faqs: [
      {
        question: "What's the difference between a logo and wordmark trademark?",
        answer: "A logo trademark protects your visual logo design. A wordmark trademark protects your brand name as text. Many sellers file both for full protection.",
      },
      {
        question: "How long until full trademark approval?",
        answer: "The USPTO takes 8–14 months for full approval. But you get your serial number in 2–3 days, which is all you need for Amazon Brand Registry.",
      },
      {
        question: "Can I use Brand Registry while waiting for full approval?",
        answer: "Yes. Amazon accepts your serial number for Brand Registry enrollment immediately — you don't need to wait for full trademark approval.",
      },
    ],
  },

  // ─── US CORPORATE ─────────────────────────────────────────────────────────
  {
    slug: "wyoming-llc",
    aliases: ["wyoming", "wy-llc"],
    number: "10",
    category: "US Corporate",
    categoryBadge: "👑 #1 Recommended State for Non-Residents",
    title: "Wyoming LLC Formation",
    tagline: "The most popular choice for international founders. Low ongoing fees, strong privacy, zero state income tax, and the fastest formation timeline.",
    summary:
      "The most popular choice for international founders. Low ongoing fees, strong privacy, zero state income tax, and the fastest formation timeline.",
    heroImage: "/images/wyoming-llc.jpg",
    badge: "US Corporate",
    priceBadge: "Turnkey Package",
    heroCtaText: "Form My Wyoming LLC →",
    heroWhatsappText: "Hi Xonehub, I want to form my Wyoming LLC.",
    heroSecondaryCta: {
      label: "Ask Questions First",
      href: "https://wa.me/923322568950?text=Hi%20Xonehub%2C%20I%20have%20questions%20about%20Wyoming%20LLC%20formation.",
    },
    highlights: [
      "Lowest ongoing state fees in the US",
      "Strong anonymous ownership privacy",
      "0% state income tax & zero franchise tax",
      "Fast 2–4 day state approval & IRS EIN",
    ],
    metrics: [
      { value: "Turnkey", label: "Full Formation Package" },
      { value: "Included", label: "State Fee Covered" },
      { value: "Lowest", label: "Annual Report Fee" },
      { value: "0%", label: "State Income Tax" },
    ],
    whatWeDoTitle: "Why Wyoming is the #1 Choice for Non-Residents",
    whatWeDo:
      "Over 70% of our international e-commerce clients choose Wyoming. Here's why.",
    howItWorks: [
      { step: "01", title: "Lowest Ongoing Fees", desc: "Low state filing fee, minimal annual report fee, no franchise tax, and no minimum capital requirements." },
      { step: "02", title: "Strong Privacy", desc: "Wyoming does not require member names to be listed in public Secretary of State filings. Your identity stays completely private." },
      { step: "03", title: "No State Income Tax", desc: "Wyoming has zero state personal income tax and zero state corporate income tax. Perfect for international e-commerce founders." },
      { step: "04", title: "Fast Formation", desc: "Wyoming LLC filing approved within 2-4 business days. Official IRS EIN issued in 10-14 business days without an SSN." },
    ],
    whatsIncluded: [
      "Wyoming Secretary of State Filing Fee (Included)",
      "Registered Agent Service (1 Full Year Included)",
      "Official US Commercial Business Address (1 Year)",
      "IRS Federal EIN (Tax ID) for Non-Residents without SSN",
      "Customized Operating Agreement for Bank & Amazon Verification",
      "FinCEN BOI (Beneficial Ownership Information) Compliance Filing",
      "US Business Bank Account Setup Support (Mercury / Relay / Wise / Stripe)",
      "Articles of Organization Certified Digital Copy",
      "Dedicated Account Manager on WhatsApp",
    ],
    whoIsItFor: [
      "International founders who want a US company",
      "Amazon sellers who need a US business entity",
      "Anyone who values privacy and asset protection",
      "Online business owners who want zero state tax",
    ],
    pricingNote: "All-inclusive turnkey package. Includes state filing fee, registered agent, commercial US address, EIN, and BOI filing.",
    faqs: [
      {
        question: "Do I need a US visa, SSN, or physical address to form a Wyoming LLC?",
        answer: "No. You can form and own a 100% legal Wyoming LLC without ever visiting the United States, without a US visa, and without a US Social Security Number (SSN). We provide the registered agent and commercial US business address.",
      },
      {
        question: "Can I open an Amazon US Seller account and Stripe with this LLC?",
        answer: "Yes. Your Wyoming LLC comes with a certified Articles of Organization, federal IRS EIN, and customized Operating Agreement, making it 100% eligible for Amazon Seller Central, Stripe, and US business bank accounts.",
      },
      {
        question: "How long does the entire Wyoming formation process take?",
        answer: "The Wyoming Secretary of State typically approves the LLC within 2 to 4 business days. IRS federal EIN issuance for international non-residents takes approximately 10 to 14 business days.",
      },
      {
        question: "Are there any hidden fees beyond the formation package?",
        answer: "No. The formation package is completely all-inclusive with zero hidden fees. It includes the mandatory state filing fee, 1 full year of registered agent, commercial US address, IRS EIN, and BOI FinCEN filing.",
      },
    ],
  },
  {
    slug: "florida-llc",
    aliases: ["florida", "fl-llc"],
    number: "11",
    category: "US Corporate",
    categoryBadge: "Gateway for E-Commerce & East Coast Amazon FBA",
    title: "Florida LLC Formation Service",
    tagline: "Launch your commercial presence in the nation’s top trade state with all-inclusive turnkey setup. Zero personal state income tax, direct Sunbiz electronic processing, and unmatched logistics access.",
    summary:
      "Launch your commercial presence in the nation’s top trade state with all-inclusive turnkey setup. Zero personal state income tax, direct Sunbiz electronic processing, and unmatched logistics access.",
    heroImage: "/images/florida-llc.jpg",
    badge: "US Corporate",
    priceBadge: "Turnkey Package",
    heroCtaText: "Start Florida LLC",
    heroWhatsappText: "Hi Xonehub, I want to start my Florida LLC.",
    highlights: [
      "Includes Official Sunbiz State Filing Fee",
      "Sunbiz direct electronic filing (3-5 days)",
      "0% personal state income tax & $0 franchise tax",
      "Premier East Coast Amazon logistics gateway",
    ],
    metrics: [
      { value: "Turnkey", label: "Total Formation Setup" },
      { value: "Included", label: "State Fee Covered" },
      { value: "3–5 Days", label: "State Filing Speed" },
      { value: "0%", label: "Personal Income Tax" },
    ],
    whatWeDoTitle: "Why Form in Florida?",
    whatWeDo:
      "A strategic, high-growth environment for global e-commerce founders.",
    howItWorks: [
      { step: "01", title: "Name Reservation & Sunbiz Filing (Day 1 – 2)", desc: "We verify your company name and file Articles of Organization directly through Florida Sunbiz." },
      { step: "02", title: "Official State Approval (Day 3 – 5)", desc: "Receive your stamped certificate and official Charter Document from the State of Florida." },
      { step: "03", title: "IRS EIN & BOI FinCEN Submission (Day 6 – 14)", desc: "We assign your Federal Employer Identification Number (EIN) and submit mandatory BOI compliance." },
      { step: "04", title: "Bank & Amazon Store Onboarding (Day 15+)", desc: "Open your US business bank account (Mercury / Relay / Wise) and initiate Amazon Seller Central." },
    ],
    whatsIncluded: [
      "Florida Division of Corporations Filing Fee (Included)",
      "Florida Registered Agent Service (1 Full Year)",
      "Commercial Street Address in Florida with Mail Forwarding",
      "Federal EIN (Tax ID) from IRS for Non-Residents",
      "Custom Florida LLC Operating Agreement & Banking Resolutions",
      "Mandatory FinCEN BOI (Beneficial Ownership) Filing",
      "US Business Bank Account Setup Guidance (Mercury / Relay / Stripe)",
      "Florida Resale Certificate / Sales Tax Guidance",
      "Official Certificate of Status / Charter Document",
      "1-on-1 Dedicated Support on WhatsApp",
    ],
    whoIsItFor: [
      "International sellers planning direct container shipments to Florida ports",
      "East Coast Amazon FBA sellers targeting quick fulfillment",
      "Founders wanting fast Sunbiz electronic registration",
      "Global entrepreneurs who need a recognized US commercial identity",
    ],
    pricingNote: "All-inclusive flat package. Includes Florida state filing fee, registered agent, commercial address, and EIN.",
    faqs: [
      {
        question: "Why choose Florida over other states for my Amazon business?",
        answer: "Florida is the premier gateway for East Coast Amazon logistics, container shipping via PortMiami, and enjoys 0% personal state income tax with rapid 3-5 day Sunbiz electronic processing.",
      },
      {
        question: "Is the Florida state filing fee included in this package?",
        answer: "Yes. The statutory Florida Division of Corporations filing fee is 100% included in the flat turnkey package.",
      },
      {
        question: "What are Florida's annual ongoing requirements?",
        answer: "Florida requires an annual report filed between January 1 and May 1 each calendar year starting the year following formation. There is no state personal income tax.",
      },
      {
        question: "Can I form a Florida LLC without visiting the USA?",
        answer: "Yes, the entire formation, EIN tax filing, and US business bank account setup are conducted 100% remotely without traveling to the United States.",
      },
    ],
  },
  {
    slug: "texas-llc",
    aliases: ["texas", "tx-llc"],
    number: "12",
    category: "US Corporate",
    categoryBadge: "The #2 Economy in the USA — Commercial Powerhouse",
    title: "Texas LLC Formation",
    tagline: "Establish your business in the industrial and e-commerce capital of the southern US with all-inclusive turnkey setup. Zero personal state tax, top-tier corporate prestige, and premier commercial banking status.",
    summary:
      "Establish your business in the industrial and e-commerce capital of the southern US with all-inclusive turnkey setup. Zero personal state tax, top-tier corporate prestige, and premier commercial banking status.",
    heroImage: "/images/texas-llc.jpg",
    badge: "US Corporate",
    priceBadge: "Turnkey Package",
    heroCtaText: "Start Texas LLC",
    heroWhatsappText: "Hi Xonehub, I want to start my Texas LLC.",
    highlights: [
      "Includes Texas SOS State Filing Fee",
      "$2.47M Franchise Tax Exemption ($0 tax due)",
      "Central US Amazon FBA Mega Hub (25+ FCs)",
      "Tier-1 Commercial Banking Trust",
    ],
    metrics: [
      { value: "Turnkey", label: "All-Inclusive Setup" },
      { value: "Included", label: "Texas SOS Fee Covered" },
      { value: "$2.47M", label: "Franchise Tax Exemption" },
      { value: "25+", label: "Amazon Fulfillment Centers" },
    ],
    whatWeDoTitle: "The Texas Advantage",
    whatWeDo:
      "Built for serious volume sellers and international brand owners.",
    howItWorks: [
      { step: "01", title: "Name Verification & SOS Filing", desc: "We reserve your name and submit the Certificate of Formation with the Texas Secretary of State." },
      { step: "02", title: "SOS State Approval & Charter", desc: "Receive your official Texas Certificate of Formation and stamped SOS filing." },
      { step: "03", title: "IRS EIN & BOI FinCEN Submission", desc: "We secure your federal Employer Identification Number (EIN) and file BOI compliance." },
      { step: "04", title: "Tier-1 US Banking Onboarding", desc: "We guide your application for Mercury, Relay, Wise, or physical US commercial accounts." },
    ],
    whatsIncluded: [
      "Texas Secretary of State Filing Fee (Included)",
      "Texas Registered Agent Service (1 Full Year)",
      "Commercial Street Address in Texas with Mail Scanning",
      "IRS Federal EIN (Employer Identification Number) for Non-Residents",
      "Custom Texas LLC Operating Agreement & Member Certificates",
      "Mandatory FinCEN BOI (Beneficial Ownership) Filing Included",
      "US Business Bank Account Support (Mercury / Relay / Wise / Chase)",
      "Texas Certificate of Formation & Stamped SOS Filing",
      "Dedicated Xonehub Account Manager on WhatsApp",
    ],
    whoIsItFor: [
      "High-volume Amazon sellers seeking central US logistics",
      "International brand owners demanding tier-1 corporate banking prestige",
      "Founders wanting zero personal income tax and $2.47M franchise tax exemption",
      "Businesses moving containers through Gulf Coast and central freight lines",
    ],
    pricingNote: "All-inclusive flat package. Includes the entire Texas Secretary of State statutory fee, registered agent, commercial address, and EIN.",
    faqs: [
      {
        question: "Is the Texas Secretary of State fee included in the price?",
        answer: "Yes. Texas has a high statutory Secretary of State filing fee, which is fully covered inside our turnkey package.",
      },
      {
        question: "What is the Texas Franchise Tax rule for non-residents?",
        answer: "Texas offers a massive franchise tax exemption threshold: companies with total gross annual revenue under $2.47 million pay $0 in Texas franchise tax.",
      },
      {
        question: "Why is Texas considered the best state for Amazon logistics?",
        answer: "Texas sits centrally in the United States and houses more than 25 major Amazon fulfillment distribution centers, reducing nationwide inbound transit times and shipping costs.",
      },
      {
        question: "Can I form a Texas LLC without an SSN or US residency?",
        answer: "Yes. We complete the entire formation, obtain your federal IRS EIN without an SSN, provide the registered agent, and support opening your US bank account 100% remotely.",
      },
    ],
  },

  // ─── BANK ACCOUNT CREATION ────────────────────────────────────────────────
  {
    slug: "stripe-account-setup",
    aliases: ["stripe", "stripe-setup", "stripe-account"],
    number: "13",
    category: "Bank Account Creation",
    categoryBadge: "Payment Standard",
    title: "Professional Stripe Account Opening",
    tagline: "Take control of your global business with a fully verified Stripe account—effortlessly. We handle compliance, Amazon integration, and address verification.",
    summary:
      "Get your Stripe Account set up correctly and securely to streamline your global payments — all in one platform. Everything you need. Nothing you don't.",
    heroImage: "/images/stripe-account-setup.jpg",
    badge: "Bank Account Creation",
    priceBadge: "$100 One-Time",
    heroCtaText: "Talk to an Expert",
    heroWhatsappText: "Hi Xonehub, I need help with Stripe Setup",
    highlights: [
      "Amazon Seller Ready: Bank details matching Seller Central",
      "Unified Dashboard: View accounts, cards & transactions",
      "Global Processing: Process customer payments worldwide",
      "Automated 2-day payouts to your bank account",
    ],
    metrics: [
      { value: "100%", label: "Verified Setup" },
      { value: "135+", label: "Currencies Accepted" },
      { value: "2-Day", label: "Automated Payouts" },
      { value: "Top-Tier", label: "Fraud Protection" },
    ],
    whatWeDoTitle: "Everything you need. Nothing you don't.",
    whatWeDo:
      "Get your Stripe Account set up correctly and securely to streamline your global payments — all in one platform. We collect your business details and handle the rigorous verification process with Stripe securely. We configure checkout forms and integrate Stripe into your Shopify, WooCommerce, Amazon, or custom site.",
    howItWorks: [
      {
        step: "01",
        title: "Sign Up and Verify Documents",
        desc: "We collect your business details and handle the rigorous verification process with Stripe securely.",
      },
      {
        step: "02",
        title: "Enable Payment Gateways",
        desc: "We configure your checkout forms and integrate Stripe securely into your Shopify, WooCommerce, or custom site.",
      },
      {
        step: "03",
        title: "Start Processing Payments",
        desc: "Monitor real-time payments, prevent chargebacks, and enjoy automated 2-day payouts to your bank.",
      },
    ],
    whatsIncluded: [
      "Accept Global Payments",
      "Advanced Fraud Protection",
      "Seamless E-commerce Integration",
      "Custom Checkout Experiences",
      "Comprehensive Financial Reporting",
      "100% Verified Setup for Amazon Seller Central",
    ],
    whoIsItFor: [
      "Amazon sellers seeking verified payout integration",
      "E-commerce store owners (Shopify, WooCommerce, Custom)",
      "Non-resident founders needing global credit card processing",
    ],
    pricingNote: "Professional Setup: $100 / one-time flat fee.",
    faqs: [
      {
        question: "Can I receive Amazon Seller Central payouts into Stripe?",
        answer: "Yes, we set up bank details that perfectly match your Amazon Seller Central requirements to avoid payment bounces.",
      },
      {
        question: "How long does verification take?",
        answer: "Get everything set up and ready to use in days, not weeks.",
      },
    ],
    packages: [
      {
        name: "Professional Setup",
        price: "$100",
        margin: "One-Time",
        description: "Perfect for sellers that need speed, structure, and a premium setup for success.",
        included: [
          "Accept Global Payments",
          "Advanced Fraud Protection",
          "Seamless E-commerce Integration",
          "Custom Checkout Experiences",
          "Comprehensive Financial Reporting",
          "100% Verified Setup",
        ],
        whatsappText: "Hi Xonehub, I want to Pay Now for Professional Stripe Account Opening ($100).",
      },
    ],
  },
  {
    slug: "wise-account-setup",
    aliases: ["wise", "wise-setup", "wise-account", "transferwise"],
    number: "14",
    category: "Bank Account Creation",
    categoryBadge: "Best for Global Wires",
    title: "Professional Wise Account Opening",
    tagline: "Take control of your global business with a fully verified Wise account—effortlessly. We handle compliance, Amazon integration, and address verification.",
    summary:
      "Get your Wise Account set up correctly and securely to streamline your global payments — all in one platform. Real mid-market exchange rates without standard bank markups.",
    heroImage: "/images/wise-account-setup.jpg",
    badge: "Bank Account Creation",
    priceBadge: "$100 One-Time",
    heroCtaText: "Talk to an Expert",
    heroWhatsappText: "Hi Xonehub, I need help with Wise Setup",
    highlights: [
      "Amazon Seller Ready: Direct deposit method integration",
      "Real Mid-Market Exchange Rate: Stop losing 3-5% on bank fees",
      "Local bank details in 10+ currencies (USD, GBP, EUR)",
      "Fast international transfers and business expense cards",
    ],
    metrics: [
      { value: "10+", label: "Currency Accounts" },
      { value: "Mid-Market", label: "Exchange Rate" },
      { value: "100%", label: "Seller Central Ready" },
      { value: "Instant", label: "Expense Cards" },
    ],
    whatWeDoTitle: "Everything you need. Nothing you don't.",
    whatWeDo:
      "Get your Wise Account set up correctly and securely to streamline your global payments — all in one platform. We collect your business details and handle verification so you receive clean local bank details in USD, GBP, and EUR.",
    howItWorks: [
      {
        step: "01",
        title: "Sign Up and Verify Documents",
        desc: "We collect your business details and handle the rigorous verification process with Wise securely.",
      },
      {
        step: "02",
        title: "Get Multi-Currency Bank Details",
        desc: "Instantly receive USD, GBP, and EUR bank accounts tailored specifically for your business profile.",
      },
      {
        step: "03",
        title: "Sync with Amazon",
        desc: "Connect your new accounts directly to Seller Central and start receiving payouts without hidden fees.",
      },
    ],
    whatsIncluded: [
      "Real Mid-Market Exchange Rate",
      "Local Bank Details in 10+ Currencies",
      "Direct Integration with Amazon Seller Central",
      "Fast International Transfers",
      "Business Expense Cards",
      "100% Verified Account Setup",
    ],
    whoIsItFor: [
      "International Amazon sellers converting EUR, GBP, and USD",
      "Founders paying overseas manufacturers and freight forwarders",
      "Non-resident sellers wanting mid-market foreign exchange rates",
    ],
    pricingNote: "Professional Setup: $100 / one-time flat fee.",
    faqs: [
      {
        question: "Can I connect Wise directly to Amazon Seller Central?",
        answer: "Yes. Wise provides local account routing and account numbers that integrate directly into Amazon Seller Central deposit methods.",
      },
      {
        question: "How long does verification take?",
        answer: "Get everything set up and ready to use in days, not weeks.",
      },
    ],
    packages: [
      {
        name: "Professional Setup",
        price: "$100",
        margin: "One-Time",
        description: "Perfect for sellers that need speed, structure, and a premium setup for success.",
        included: [
          "Real Mid-Market Exchange Rate",
          "Local Bank Details in 10+ Currencies",
          "Direct Integration with Amazon Seller Central",
          "Fast International Transfers",
          "Business Expense Cards",
          "100% Verified Setup",
        ],
        whatsappText: "Hi Xonehub, I want to Pay Now for Professional Wise Account Opening ($100).",
      },
    ],
  },
  {
    slug: "payoneer-account-setup",
    aliases: ["payoneer", "payoneer-setup", "payoneer-account"],
    number: "15",
    category: "Bank Account Creation",
    categoryBadge: "Amazon Official Partner",
    title: "Professional Payoneer Account Opening",
    tagline: "Take control of your global business with a fully verified Payoneer account—effortlessly. We handle compliance, Amazon integration, and address verification.",
    summary:
      "Get your Payoneer Account set up correctly and securely to streamline your global payments — all in one platform. Direct receiving accounts in USD, EUR, GBP, CAD, JPY, and AUD.",
    heroImage: "/images/payoneer-account-setup.jpg",
    badge: "Bank Account Creation",
    priceBadge: "$100 One-Time",
    heroCtaText: "Talk to an Expert",
    heroWhatsappText: "Hi Xonehub, I need help with Payoneer Setup",
    highlights: [
      "Amazon Seller Ready: Official payment service provider",
      "Local receiving accounts in USD, EUR, GBP, CAD, JPY, AUD",
      "Withdraw funds to local banks in 150+ countries",
      "Prepaid Mastercard debit cards for business expenses",
    ],
    metrics: [
      { value: "6+", label: "Receiving Currencies" },
      { value: "150+", label: "Countries Supported" },
      { value: "100%", label: "Amazon Verified" },
      { value: "0%", label: "Receiving Fees" },
    ],
    whatWeDoTitle: "Everything you need. Nothing you don't.",
    whatWeDo:
      "Get your Payoneer Account set up correctly and securely to streamline your global payments — all in one platform. We handle document vetting and compliance so your account is instantly approved and ready for Amazon payouts.",
    howItWorks: [
      {
        step: "01",
        title: "Sign Up and Verify Documents",
        desc: "We collect your business details and manage document pre-vetting for Payoneer approval.",
      },
      {
        step: "02",
        title: "Receiving Account Issuance",
        desc: "Receive local receiving bank accounts in USD, EUR, GBP, CAD, JPY, and AUD.",
      },
      {
        step: "03",
        title: "Connect with Amazon",
        desc: "Link your Payoneer deposit methods directly inside Amazon Seller Central for instant payouts.",
      },
    ],
    whatsIncluded: [
      "Local Receiving Accounts in 6+ Currencies",
      "Zero Fee Receiving from Amazon Seller Central",
      "Direct Local Bank Withdrawals in 150+ Countries",
      "Prepaid Mastercard Debit Card Support",
      "100% Verified Approval Support",
      "Fast 3 to 5 Days Processing",
    ],
    whoIsItFor: [
      "International Amazon sellers in Pakistan, India, UAE, and 150+ countries",
      "Founders needing hassle-free withdrawals to their local bank accounts",
      "Sellers requiring global multi-currency deposit accounts",
    ],
    pricingNote: "Professional Setup: $100 / one-time flat fee.",
    faqs: [
      {
        question: "Can I withdraw money to my local bank?",
        answer: "Yes, Payoneer allows direct withdrawals to local bank accounts in 150+ countries in local currency.",
      },
      {
        question: "How long does verification take?",
        answer: "Get everything set up and ready to use in days, not weeks.",
      },
    ],
    packages: [
      {
        name: "Professional Setup",
        price: "$100",
        margin: "One-Time",
        description: "Perfect for sellers that need speed, structure, and a premium setup for success.",
        included: [
          "Local Receiving Accounts in 6+ Currencies",
          "Zero Fee Receiving from Amazon Seller Central",
          "Direct Local Bank Withdrawals in 150+ Countries",
          "Prepaid Mastercard Debit Card Support",
          "100% Verified Approval Support",
        ],
        whatsappText: "Hi Xonehub, I want to Pay Now for Professional Payoneer Account Opening ($100).",
      },
    ],
  },
  {
    slug: "airwallex-account-setup",
    aliases: ["airwallex", "airwallex-setup", "airwallex-account"],
    number: "16",
    category: "Bank Account Creation",
    categoryBadge: "Multi-Currency Mastery",
    title: "Professional Airwallex Account Setup",
    tagline: "Open a global Airwallex account with ease. Stop struggling with verification rejections and let us fully verify your business account for seamless Amazon payouts.",
    summary:
      "Open local accounts in 11+ currencies instantly. Receive Amazon payouts without forced conversions and pay suppliers in their native currency.",
    heroImage: "/images/airwallex-account-setup.jpg",
    badge: "Bank Account Creation",
    priceBadge: "$100 One-Time",
    heroCtaText: "START YOUR SETUP",
    heroWhatsappText: "Hi Xonehub, I want to set up my Professional Airwallex Account ($100).",
    highlights: [
      "Global accounts in 11+ currencies",
      "Market-leading interbank FX rates",
      "Unlimited borderless virtual Visa cards",
      "100% verified for Amazon payouts",
    ],
    metrics: [
      { value: "11+", label: "Local Currencies" },
      { value: "100%", label: "Verified Guarantee" },
      { value: "0%", label: "Intl Transaction Fees" },
      { value: "Unlimited", label: "Virtual Visa Cards" },
    ],
    whatWeDoTitle: "Multi-Currency Mastery — Global Accounts in Minutes",
    whatWeDo:
      "Open local accounts in 11+ currencies instantly. Receive Amazon payouts without forced conversions and pay suppliers in their native currency. Create unlimited virtual Visa cards to pay for inventory, software, and ads with zero international transaction fees.",
    howItWorks: [
      {
        step: "01",
        title: "Document Submission",
        desc: "Send your company registration and owner identification for compliance verification.",
      },
      {
        step: "02",
        title: "Compliance & Underwriting",
        desc: "Our banking team interfaces directly with Airwallex underwriters to secure swift KYC approval.",
      },
      {
        step: "03",
        title: "Active Account Handover",
        desc: "Receive your fully verified Airwallex dashboard with local USD, GBP, and EUR routing details.",
      },
    ],
    whatsIncluded: [
      "Global Accounts in 11+ Currencies",
      "Zero International Transaction Fees",
      "Virtual Visa Company Cards",
      "Automated Xero/QuickBooks Sync",
      "Optimized for E-commerce Sellers",
      "Full Verification Support",
    ],
    whoIsItFor: [
      "International Amazon sellers receiving multi-currency payouts",
      "Founders needing virtual cards for PPC ad spend & supplier payments",
      "Non-US resident business owners needing swift global banking",
    ],
    pricingNote: "Professional Setup: $100 / one-time flat fee.",
    faqs: [
      {
        question: "Can I receive Amazon Seller Central payouts directly into Airwallex?",
        answer: "Yes! Airwallex provides local USD, GBP, EUR, and 8+ other currency bank accounts that integrate seamlessly into Amazon Seller Central.",
      },
      {
        question: "What is the fee for Airwallex setup?",
        answer: "Our professional setup fee is a flat $100 one-time.",
      },
    ],
    packages: [
      {
        name: "Professional Setup",
        price: "$100",
        margin: "One-Time",
        description: "Perfect for sellers that need speed, structure, and a premium setup for success.",
        included: [
          "Global Accounts in 11+ Currencies",
          "Zero International Transaction Fees",
          "Virtual Visa Company Cards",
          "Automated Xero/QuickBooks Sync",
          "Optimized for E-commerce Sellers",
          "100% Verified Guarantee",
        ],
        whatsappText: "Hi Xonehub, I want to Pay Now for Professional Airwallex Account Setup ($100).",
      },
    ],
  },
  {
    slug: "chase-bank-setup",
    aliases: ["chase-bank", "chase", "chase-account"],
    number: "17",
    category: "Bank Account Creation",
    categoryBadge: "Tier-1 Physical US Banking",
    title: "US Chase Bank Business Account Setup",
    tagline: "The ultimate US banking solution. Open your physical US Chase Bank business account remotely. Essential infrastructure for high-volume Amazon sellers.",
    summary:
      "Our tier-1 physical banking solution offers a seamless and highly secure platform for making vendor payments, managing Amazon payouts, and monitoring all business transactions.",
    heroImage: "/images/chase-bank-setup.jpg",
    badge: "Bank Account Creation",
    priceBadge: "$1,500 One-Time",
    heroCtaText: "Start Setup",
    heroWhatsappText: "Hi Xonehub, I want to set up my physical US Chase Bank Business Account ($1,500).",
    highlights: [
      "Tier-1 physical US banking entity",
      "High-limit Chase Ink Business credit cards",
      "Global wire transfers & zero holding reserves",
      "100% remote — no US visit required",
    ],
    metrics: [
      { value: "5.0 ★", label: "Verified Service" },
      { value: "100+", label: "Active Sellers" },
      { value: "100%", label: "Compliance Guarantee" },
      { value: "$0", label: "Holding Reserves" },
    ],
    whatWeDoTitle: "One account. Total control.",
    whatWeDo:
      "Our tier-1 physical banking solution offers a seamless and highly secure platform for making vendor payments, managing Amazon payouts, and monitoring all business transactions. Connect your physical US Chase Bank account directly to Amazon Seller Central.",
    howItWorks: [
      {
        step: "01",
        title: "Corporate Structuring",
        desc: "We align your US LLC documentation and EIN for physical bank underwriting.",
      },
      {
        step: "02",
        title: "Remote Branch Processing",
        desc: "We manage branch relationships directly with Chase Bank officers — zero travel required.",
      },
      {
        step: "03",
        title: "Card & Dashboard Handover",
        desc: "Receive full online access, routing details, and physical/virtual Chase Ink Business credit cards.",
      },
    ],
    whatsIncluded: [
      "LLC Corporate Structuring Included",
      "100% Remote Verification (No US Visit)",
      "Premium US Banking Entity",
      "High-Limit Business Credit Cards",
      "Dedicated Business Banking Support",
      "Secure Global Wire Transfers",
    ],
    whoIsItFor: [
      "High-volume Amazon sellers wanting tier-1 banking security",
      "Founders who want to avoid fintech wallet freezes and rolling reserves",
      "Businesses needing high-limit US business credit cards",
    ],
    pricingNote: "Premium Elite Package: $1,500 / one-time flat fee.",
    faqs: [
      {
        question: "Do I need to visit the USA to open a Chase account?",
        answer: "No. You do not need to travel to the United States. We manage the branch relationships 100% remotely.",
      },
      {
        question: "Is the LLC structuring included?",
        answer: "Yes, full US corporate structuring to support your physical banking is included in the $1,500 price.",
      },
    ],
    packages: [
      {
        name: "Premium Elite Package",
        price: "$1,500",
        margin: "One-Time",
        description: "The ultimate banking solution for high-tier Amazon sellers and global dropshippers.",
        included: [
          "Premium US Banking Entity",
          "High-Limit Business Credit Cards",
          "Dedicated Business Banking Support",
          "Secure Wire Transfers",
          "LLC Corporate Structuring Included",
          "100% Remote Verification",
        ],
        whatsappText: "Hi Xonehub, I want to Pay Now for Chase Bank Physical Banking Package ($1,500).",
      },
    ],
  },
  {
    slug: "bank-of-america-setup",
    aliases: ["bank-of-america", "boa", "boa-account"],
    number: "18",
    category: "Bank Account Creation",
    categoryBadge: "Tier-1 Physical US Banking",
    title: "US Bank of America Business Account Setup",
    tagline: "The ultimate US banking solution. Open your physical US Bank of America business account remotely. Essential infrastructure for high-volume Amazon sellers.",
    summary:
      "Our tier-1 physical banking solution offers a seamless and highly secure platform for making vendor payments, managing Amazon payouts, and monitoring all business transactions.",
    heroImage: "/images/bank-of-america-setup.jpg",
    badge: "Bank Account Creation",
    priceBadge: "$1,500 One-Time",
    heroCtaText: "Start Setup",
    heroWhatsappText: "Hi Xonehub, I want to set up my physical US Bank of America Business Account ($1,500).",
    highlights: [
      "Top-tier US physical bank advantage",
      "Instant ACH & global wire transfers",
      "Physical & virtual corporate cards",
      "Zero rolling reserves or holding restrictions",
    ],
    metrics: [
      { value: "5.0 ★", label: "Verified Service" },
      { value: "100+", label: "Active Sellers" },
      { value: "100%", label: "Compliance Guarantee" },
      { value: "$0", label: "Rolling Reserves" },
    ],
    whatWeDoTitle: "Instantly receive & manage payouts.",
    whatWeDo:
      "Connect your US Bank of America account directly to Amazon Seller Central. Say goodbye to waiting for third-party payment gateways to process your hard-earned funds. Full physical branch backing with zero limits.",
    howItWorks: [
      {
        step: "01",
        title: "Corporate Alignment",
        desc: "We review and prepare your LLC charter, EIN, and BOI filings for Bank of America underwriting.",
      },
      {
        step: "02",
        title: "Executive Branch Submission",
        desc: "Our banking team executes the account opening remotely with branch officers.",
      },
      {
        step: "03",
        title: "Immediate Account Clearance",
        desc: "Receive official routing numbers, online banking credentials, and corporate debit cards.",
      },
    ],
    whatsIncluded: [
      "LLC Corporate Structuring Included",
      "100% Remote Verification (No US Visit)",
      "Top-Tier US Physical Bank",
      "Business Advantage Banking",
      "Global Wire Transfer Capabilities",
      "Advanced Cash Flow Management",
      "Highly Trusted by Amazon",
    ],
    whoIsItFor: [
      "High-volume Amazon sellers needing direct tier-1 deposits",
      "Businesses requiring fast international supplier wire transfers",
      "Founders seeking maximum banking stability and corporate prestige",
    ],
    pricingNote: "Premium Elite Package: $1,500 / one-time flat fee.",
    faqs: [
      {
        question: "Do I need a US visa or social security number?",
        answer: "No. We open your physical US Bank of America business account remotely without a US SSN or personal visit.",
      },
      {
        question: "What is included in the $1,500 price?",
        answer: "Full physical account opening, US corporate structuring, remote verification, and official online banking credentials.",
      },
    ],
    packages: [
      {
        name: "Premium Elite Package",
        price: "$1,500",
        margin: "One-Time",
        description: "The ultimate banking solution for high-tier Amazon sellers and global dropshippers.",
        included: [
          "Top-Tier US Physical Bank",
          "Business Advantage Banking",
          "Global Wire Transfer Capabilities",
          "Advanced Cash Flow Management",
          "Highly Trusted by Amazon",
          "100% Remote Setup",
        ],
        whatsappText: "Hi Xonehub, I want to Pay Now for Bank of America Physical Banking Package ($1,500).",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const clean = slug.toLowerCase().trim();
  return servicesData.find(
    (s) => s.slug === clean || s.aliases.includes(clean)
  );
}

export function getServicesByCategory(cat: string): ServiceDetail[] {
  return servicesData.filter((s) => s.category === cat);
}
