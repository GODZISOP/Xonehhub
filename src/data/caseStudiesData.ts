export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  filterCategory: "all" | "wholesale" | "corporate" | "banking" | "fba";
  tagline: string;
  description: string;
  clientUrl: string;
  relatedServiceSlug: string;
  services: string[];
  results: { label: string; value: string }[];
  image: string;
  overview: string;
  caseDetails: {
    challenge: string;
    solution: string;
    outcome: string;
  };
  features: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "premier-brands-fba",
    slug: "premier-brands-fba",
    number: "01",
    title: "Premier Brands FBA",
    category: "Wholesale FBA & Brand Ungating",
    filterCategory: "wholesale",
    tagline: "Direct brand wholesale purchasing, LOA ungating & automated BuyBox scaling.",
    description:
      "We opened direct wholesale trade accounts with authorized US distributors, obtained verified Letters of Authorization (LOA), created Send-to-Amazon shipment plans, and automated daily BuyBox algorithmic repricing.",
    clientUrl: "amazon.com/shops/premierbrands",
    relatedServiceSlug: "amazon-wholesale-fba",
    services: [
      "Direct Wholesale Brand Accounts",
      "Letter of Authorization (LOA) Ungating",
      "Send-to-Amazon (STA) Inbound Plans",
      "Daily BuyBox Algorithmic Repricing",
    ],
    results: [
      { label: "BuyBox Share", value: "84.6%" },
      { label: "Distributor Margin", value: "28-35%" },
      { label: "Monthly Revenue", value: "$145K+" },
    ],
    image: "/images/amazon-wholesale-fba.jpg",
    overview:
      "A fast-growing e-commerce merchant needed direct access to gated top-tier brands and an automated operations flow to win the Amazon BuyBox continuously without manual price adjustments.",
    caseDetails: {
      challenge:
        "The seller struggled with gated brand restrictions, unauthorized invoices, and losing the BuyBox to aggressive competitors with price wars.",
      solution:
        "X-One Hub secured official brand LOAs, opened verified wholesale distributor accounts, and deployed 24/7 automated repricing.",
      outcome:
        "Achieved 84.6% average BuyBox ownership, unlocked 30%+ profit margins, and scaled recurring monthly sales past $145,000.",
    },
    features: [
      "Official Letter of Authorization (LOA) direct from brand",
      "Proforma & paid commercial invoices for ungating",
      "Send-to-Amazon (STA) shipment preparation & barcode labels",
      "Daily automated BuyBox repricing algorithm",
      "Automated stock restock reminders & re-orders",
    ],
  },
  {
    id: "vanguard-global-llc",
    slug: "vanguard-global-llc",
    number: "02",
    title: "Vanguard Global LLC",
    category: "US Corporate Structuring & Compliance",
    filterCategory: "corporate",
    tagline: "Zero state income tax corporate setup for international e-commerce founders.",
    description:
      "Full turnkey remote formation for an overseas founder: Wyoming Secretary of State filing, 1-year registered agent, federal IRS EIN without an SSN, FinCEN BOI compliance, and verified US business bank onboarding.",
    clientUrl: "wyomingllc.sos.wyo.gov",
    relatedServiceSlug: "wyoming-llc",
    services: [
      "Wyoming SOS Articles of Organization",
      "IRS Federal EIN (Issued Without SSN)",
      "FinCEN BOI Federal Compliance Filing",
      "US Business Bank Account Opening",
    ],
    results: [
      { label: "State Income Tax", value: "0%" },
      { label: "Formation Speed", value: "48 Hours" },
      { label: "Bank Approval Rate", value: "100%" },
    ],
    image: "/images/wyoming-llc.jpg",
    overview:
      "An overseas e-commerce founder residing outside the US required legal entity incorporation, tax identification, and verified banking infrastructure to sell directly on Amazon US.",
    caseDetails: {
      challenge:
        "The founder had no US SSN or physical address and faced constant account suspensions when attempting to sell globally.",
      solution:
        "X-One Hub filed expedited Wyoming Articles of Organization, obtained federal IRS EIN documentation, and provided a compliant US commercial address.",
      outcome:
        "Secured 100% remote formation in 48 hours, passed US banking underwriting, and launched an unrestricted Amazon US Seller Central account.",
    },
    features: [
      "Wyoming Secretary of State expedited filing",
      "1 full year registered agent & commercial street address",
      "Official IRS EIN issued for non-residents without SSN",
      "Mandatory FinCEN BOI reporting compliance",
      "US business banking onboarding (Mercury / Relay / Wise)",
    ],
  },
  {
    id: "global-pay-banking",
    slug: "global-pay-banking",
    number: "03",
    title: "Global Pay & Banking",
    category: "Multi-Currency Banking & Gateways",
    filterCategory: "banking",
    tagline: "Multi-currency US accounts & Stripe gateway integration with zero forced FX conversions.",
    description:
      "We established dedicated multi-currency accounts in 11+ currencies and approved Stripe/Airwallex business infrastructure, eliminating Amazon payout bounces, hidden FX spreads, and payment freezes.",
    clientUrl: "airwallex.com/seller-network",
    relatedServiceSlug: "airwallex-account-setup",
    services: [
      "Local Bank Details in 11+ Currencies",
      "Stripe & Airwallex Compliance Verification",
      "Amazon Seller Central Deposit Sync",
      "Unlimited Borderless Virtual Cards",
    ],
    results: [
      { label: "FX Exchange Savings", value: "3.2%" },
      { label: "Currencies Supported", value: "11+" },
      { label: "Payout Success Rate", value: "100%" },
    ],
    image: "/images/airwallex-account-setup.jpg",
    overview:
      "An international marketplace merchant needed compliant business banking to receive USD and EUR payouts directly without suffering high bank exchange rate deductions.",
    caseDetails: {
      challenge:
        "The client was losing 3-5% on every international disbursement from Amazon marketplaces and faced unexpected fintech wallet rolling reserves.",
      solution:
        "X-One Hub set up fully verified Airwallex and Stripe US business accounts with local USD, GBP, and EUR details and corporate expense cards.",
      outcome:
        "Saved over 3.2% on international foreign exchange fees, eliminated payment bounces, and secured seamless 2-day payouts.",
    },
    features: [
      "Local account routing in USD, GBP, EUR, and 8+ currencies",
      "Zero international transaction fees on supplier wires",
      "Virtual Visa business expense cards with customizable limits",
      "Seamless deposit method connection inside Amazon Seller Central",
      "100% verified status with compliance pre-clearance",
    ],
  },
  {
    id: "amazon-fba-automation",
    slug: "amazon-fba-automation",
    number: "04",
    title: "Apex Horizon FBA",
    category: "Amazon Private Label & Automation",
    filterCategory: "fba",
    tagline: "Turnkey scaling from product hunting to Top 1% Best Seller Rank.",
    description:
      "Full hands-free Amazon store launch and automation, including deep niche hunting, supplier negotiations, Brand Registry, A+ content, and aggressive PPC ad optimization.",
    clientUrl: "amazon.com/shops/apex-horizon",
    relatedServiceSlug: "amazon-private-label",
    services: [
      "High-Margin Product Hunting & Sourcing",
      "Amazon Brand Registry & Trademarks",
      "A+ Content & High-Converting Images",
      "Algorithmic PPC Ads & Inventory Flow",
    ],
    results: [
      { label: "Annual Store GMV", value: "$1.8M+" },
      { label: "Target ACOS Maintained", value: "16.4%" },
      { label: "Category BSR Rank", value: "Top 1%" },
    ],
    image: "/images/amazon-private-label.jpg",
    overview:
      "A private investor wanted to build a hands-off Amazon Private Label brand with healthy profit margins, verified patent protection, and disciplined advertising.",
    caseDetails: {
      challenge:
        "A private investor wanted to enter the US Amazon marketplace but lacked the technical knowledge to navigate listing suppressions and PPC bleed.",
      solution:
        "X-One Hub managed the complete lifecycle: vetted manufacturers, filed US trademarks, designed 3D render graphics, and ran automated bid scripts.",
      outcome:
        "Reached $1.8M+ in GMV within the first 14 months while locking in an enviable 16.4% target ACOS and Top 1% BSR.",
    },
    features: [
      "Deep product research with 30%+ net margins",
      "Direct factory sourcing & unit price negotiation",
      "USPTO trademark registration & Amazon Brand Registry",
      "Conversion-engineered A+ Content and lifestyle renders",
      "Algorithmic PPC advertising & automated daily bids",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase() === slug.toLowerCase()
  );
}
