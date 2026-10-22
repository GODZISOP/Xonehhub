export interface ServiceDetail {
  slug: string;
  aliases: string[];
  number: string;
  category: "Amazon Growth" | "US Corporate" | "Creative Studio" | "Digital Marketing";
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
}

export const servicesData: ServiceDetail[] = [
  // ─── AMAZON GROWTH ─────────────────────────────────────────────────────────
  {
    slug: "amazon-account-creation",
    aliases: ["account-creation", "amazon-setup"],
    number: "01",
    category: "Amazon Growth",
    categoryBadge: "Guaranteed Setup",
    title: "Amazon Account Creation",
    tagline: "We set up your Amazon seller account the right way from day one.",
    summary:
      "Starting on Amazon can be confusing — verification issues, tax IDs, business documents. We handle everything for you so your account is fully set up, healthy, and ready to sell.",
    heroImage: "/images/service-amazon.jpg",
    badge: "Amazon Growth",
    priceBadge: "Guaranteed Setup",
    highlights: [
      "Full US Amazon Seller Central setup",
      "Tax ID and EIN registration help",
      "Business documents and verification",
      "Account health from day one",
    ],
    metrics: [
      { value: "100%", label: "Verified Accounts" },
      { value: "3–5 Days", label: "Average Setup Time" },
      { value: "0 Errors", label: "Document Rejections" },
      { value: "24/7", label: "Support During Setup" },
    ],
    whatWeDoTitle: "We open your Amazon business — clean, fast, and correct.",
    whatWeDo:
      "Many sellers get suspended or rejected because their account was set up incorrectly. We follow Amazon's exact requirements, register your business properly, and make sure your account is 100% verified before you start selling.",
    howItWorks: [
      { step: "01", title: "You Share Your Info", desc: "Send us your business details, ID, and tax info. We keep everything secure." },
      { step: "02", title: "We Set Up Everything", desc: "We create your Seller Central account, register your business, and add payment info." },
      { step: "03", title: "Verification", desc: "We guide you through Amazon's video or phone call verification step." },
      { step: "04", title: "Ready to Sell", desc: "Your account is live, healthy, and ready. We hand over full access to you." },
    ],
    whatsIncluded: [
      "Amazon Seller Central account creation",
      "US-based business entity guidance",
      "EIN / Tax ID registration assistance",
      "Bank and credit card account connection",
      "Full account health check and optimization",
      "30 days of post-setup support",
    ],
    whoIsItFor: [
      "New sellers who want to start on Amazon",
      "International founders entering the US market",
      "Brands that had previous account issues",
      "Anyone who wants a clean, compliant start",
    ],
    pricingNote: "Fixed one-time setup fee. Contact us for exact pricing.",
    faqs: [
      {
        question: "Do I need a US company to sell on Amazon?",
        answer: "Not always, but it helps a lot. We can guide you on whether you need a US LLC and help you form one if needed.",
      },
      {
        question: "What if Amazon rejects my account?",
        answer: "Our team handles rejections and appeals. We fix the issue and re-submit until your account is fully approved.",
      },
      {
        question: "How long does it take?",
        answer: "Usually 3 to 5 business days from the time you share all documents with us.",
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
    heroImage: "/images/service-amazon.jpg",
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
    categoryBadge: "$300 M1 & M2 · Profit %",
    title: "FBA Store Automation",
    tagline: "We run your Amazon FBA store for you — completely hands-free.",
    summary:
      "You invest, we do the work. We find winning products, source them from suppliers, send them to Amazon, and manage your store every single day. You just watch the profits come in.",
    heroImage: "/images/service-amazon.jpg",
    badge: "Amazon Growth",
    priceBadge: "$300 M1 & M2 · Profit %",
    highlights: [
      "Full store management — you do nothing",
      "Product research, sourcing, and shipping",
      "Daily account health monitoring",
      "$300 for first 2 months, then profit share",
    ],
    metrics: [
      { value: "100%", label: "Hands-Free Operation" },
      { value: "Daily", label: "Store Health Checks" },
      { value: "$300", label: "Month 1 & 2 Fee" },
      { value: "Profit %", label: "After Month 2" },
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
    pricingNote: "$300 per month for the first 2 months. After that, we take a percentage of profits.",
    faqs: [
      {
        question: "Do I need any Amazon knowledge?",
        answer: "No. You don't need to know anything about Amazon. We handle 100% of the operations.",
      },
      {
        question: "How much do I need to invest?",
        answer: "Typically $2,000–$5,000 in starting inventory, plus our $300 fee for the first 2 months. After that, we take a profit percentage.",
      },
      {
        question: "When will I start making money?",
        answer: "Most stores start generating sales within 30 to 60 days of the first shipment arriving at Amazon.",
      },
    ],
  },
  {
    slug: "amazon-product-hunting",
    aliases: ["product-research", "product-hunting"],
    number: "04",
    category: "Amazon Growth",
    categoryBadge: "Winning Products",
    title: "Amazon Product Hunting",
    tagline: "We find products that actually sell and make good money.",
    summary:
      "Choosing the wrong product is the #1 reason sellers fail on Amazon. We use professional tools and years of experience to find products with high demand, low competition, and real profit potential.",
    heroImage: "/images/service-amazon.jpg",
    badge: "Amazon Growth",
    priceBadge: "Winning Products",
    highlights: [
      "Helium 10 and Jungle Scout research",
      "Competitor and supplier analysis",
      "Profit and demand verification",
      "Delivered with full research report",
    ],
    metrics: [
      { value: "50+", label: "Products Analyzed Per Search" },
      { value: "3–5", label: "Final Winning Products Delivered" },
      { value: "30%+", label: "Target Profit Margin" },
      { value: "7 Days", label: "Typical Delivery Time" },
    ],
    whatWeDoTitle: "We find your winning product so you don't waste time or money.",
    whatWeDo:
      "We use Helium 10, Jungle Scout, and manual research to dig through thousands of products. We check monthly search volume, competition levels, estimated profit, and sourcing options. We only bring you products that we believe will actually work.",
    howItWorks: [
      { step: "01", title: "Understanding Your Goals", desc: "We learn your budget, target market, and preferences before we start searching." },
      { step: "02", title: "Deep Research", desc: "We analyze demand, competition, pricing, and supplier availability for hundreds of products." },
      { step: "03", title: "Shortlisting", desc: "We narrow it down to 3 to 5 products that meet all our criteria for a successful launch." },
      { step: "04", title: "Delivery", desc: "We send you a full report with product details, profit estimates, and recommended suppliers." },
    ],
    whatsIncluded: [
      "3 to 5 validated winning products",
      "Monthly search volume and trends",
      "Competition analysis",
      "Estimated profit margin calculation",
      "Supplier sourcing options",
      "Full research report in PDF/Excel",
    ],
    whoIsItFor: [
      "New Amazon sellers who don't know what to sell",
      "Existing sellers looking for their next product",
      "Investors researching before starting an FBA store",
      "Anyone who's been burned by a bad product choice before",
    ],
    pricingNote: "One-time research fee. Contact us for pricing.",
    faqs: [
      {
        question: "What tools do you use?",
        answer: "We use Helium 10 (Cerebro and Magnet), Jungle Scout, and our own manual research methods backed by years of Amazon experience.",
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
    heroImage: "/images/service-design.jpg",
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
    categoryBadge: "20%–70% Margin",
    title: "Brand Approvals",
    tagline: "Get permission to sell big-name brands on Amazon — we handle everything.",
    summary:
      "Many profitable brands on Amazon are 'restricted' — meaning you need approval to sell them. We get you official approval letters, real invoices, and complete the ungating process so you can sell brands with 20% to 70% profit margins.",
    heroImage: "/images/service-amazon.jpg",
    badge: "Amazon Growth",
    priceBadge: "20%–70% Margin · $3K–$10K",
    highlights: [
      "Official Letter of Authorization (LOA)",
      "Real paid and proforma invoices",
      "Full ungating in Seller Central",
      "20% to 70% profit margin brands",
    ],
    metrics: [
      { value: "20–70%", label: "Profit Margin Range" },
      { value: "$3K–$10K", label: "Typical Capital Needed" },
      { value: "LOA", label: "Official Authorization Letter" },
      { value: "Full", label: "Ungating Assistance" },
    ],
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
    pricingNote: "Capital required: $3,000–$10,000 for inventory. Service fee applies. Contact us for details.",
    faqs: [
      {
        question: "Is this legal and legitimate?",
        answer: "Yes, 100%. We work with real distributors and provide genuine documentation. Everything follows Amazon's policies.",
      },
      {
        question: "Which brands can I get approved for?",
        answer: "It depends on what brands are available through our distributor network. We'll show you current options when you contact us.",
      },
      {
        question: "What if Amazon rejects my application?",
        answer: "We review and resubmit. Our approval rates are very high because we only submit complete, correct documentation.",
      },
    ],
  },
  {
    slug: "amazon-wholesale-fba",
    aliases: ["wholesale", "wholesale-fba"],
    number: "07",
    category: "Amazon Growth",
    categoryBadge: "$300 M1 & M2 · Profit %",
    title: "Wholesale Account Management",
    tagline: "We buy directly from brands and sell on Amazon for you.",
    summary:
      "Wholesale is one of the most stable Amazon business models. We buy real products directly from brands, send them to Amazon, and manage the store daily. You invest, we operate.",
    heroImage: "/images/service-amazon.jpg",
    badge: "Amazon Growth",
    priceBadge: "$300 M1 & M2 · Profit %",
    highlights: [
      "Real brand purchases with genuine invoices",
      "Send-to-Amazon shipment management",
      "Daily BuyBox monitoring",
      "$300 for first 2 months, then profit share",
    ],
    metrics: [
      { value: "100%", label: "Real Branded Products" },
      { value: "Daily", label: "BuyBox Management" },
      { value: "$300", label: "Month 1 & 2 Fee" },
      { value: "Profit %", label: "After Month 2" },
    ],
    whatWeDoTitle: "Stable wholesale Amazon business — fully managed for you.",
    whatWeDo:
      "We identify which brands are profitable on Amazon, get approval to sell them, purchase inventory, prepare shipments, and manage your store every day. The wholesale model gives you real, trackable products with predictable margins.",
    howItWorks: [
      { step: "01", title: "Brand Research", desc: "We find profitable brands that are selling well and available for wholesale." },
      { step: "02", title: "Getting Approval", desc: "We apply for brand authorization using our network of distributors." },
      { step: "03", title: "Buying and Shipping", desc: "We purchase inventory and create Send-to-Amazon shipment plans." },
      { step: "04", title: "Daily Operations", desc: "We manage pricing, BuyBox, inventory replenishment, and account health every day." },
    ],
    whatsIncluded: [
      "Brand identification and selection",
      "Brand approvals and real invoices",
      "Send-to-Amazon shipment plans",
      "Prep center coordination",
      "Daily BuyBox management",
      "Inventory replenishment planning",
      "Monthly profit reports",
    ],
    whoIsItFor: [
      "Investors wanting a stable, predictable Amazon business",
      "Sellers who want to scale with real brand products",
      "Anyone who wants hands-free wholesale operations",
      "Those with $5,000+ to invest in inventory",
    ],
    pricingNote: "$300 for the first 2 months. After that, a percentage of profits. Capital for inventory required.",
    faqs: [
      {
        question: "What's the difference between wholesale and private label?",
        answer: "Wholesale means you sell existing brands (like Nike or Colgate) that people already trust. Private label means you create your own brand from scratch.",
      },
      {
        question: "How much inventory budget do I need?",
        answer: "We recommend starting with at least $3,000–$5,000 for inventory to make the numbers work.",
      },
      {
        question: "How long before I see profit?",
        answer: "Usually 45–90 days from first shipment arrival at Amazon, depending on the products.",
      },
    ],
  },
  {
    slug: "amazon-private-label",
    aliases: ["private-label", "pl-amazon"],
    number: "08",
    category: "Amazon Growth",
    categoryBadge: "$500 x 6 Mo · 60/40 Profit",
    title: "Private Label Account Management",
    tagline: "Build your own Amazon brand from zero — we do everything.",
    summary:
      "Private label means you create your own branded product. We handle every step: finding a winning product, sourcing from factories, getting it manufactured, designing your brand, and launching it on Amazon with full marketing.",
    heroImage: "/images/service-amazon.jpg",
    badge: "Amazon Growth",
    priceBadge: "$500 x 6 Mo · 60/40 Profit",
    highlights: [
      "Complete product launch from scratch",
      "Factory sourcing and quality testing",
      "Custom packaging and photography",
      "$500/month for 6 months, then 60/40 profit",
    ],
    metrics: [
      { value: "6 Months", label: "Average Launch Timeline" },
      { value: "60/40", label: "Profit Share After Launch" },
      { value: "Factory", label: "Direct Sourcing" },
      { value: "$500/mo", label: "For First 6 Months" },
    ],
    whatWeDoTitle: "Your own Amazon brand, built and launched by our team.",
    whatWeDo:
      "This is the complete brand-building service. We find a product, source it from a verified factory, test quality samples, design your packaging and brand, take professional photos, write the listing, create A+ content, and launch it with PPC ads. In 6 months you have a real Amazon brand.",
    howItWorks: [
      { step: "01", title: "Product Research", desc: "We find a winning product with good demand, low competition, and strong margin potential." },
      { step: "02", title: "Factory Sourcing", desc: "We find and negotiate with factories, check patents, and order quality samples for testing." },
      { step: "03", title: "Brand Building", desc: "We design your logo, packaging, and brand. We create professional product photos and A+ content." },
      { step: "04", title: "Launch & Grow", desc: "We write and optimize your listing, launch with PPC ads, and manage everything until you're profitable." },
    ],
    whatsIncluded: [
      "Product research and validation",
      "Competitor and patent research",
      "Factory sourcing and negotiation",
      "Sample testing coordination",
      "Custom packaging and logo design",
      "Professional product photography (guidance)",
      "Listing creation with SEO copywriting",
      "A+ Content design",
      "PPC ad campaign setup and management",
      "Launch monitoring and optimization",
    ],
    whoIsItFor: [
      "Anyone who wants their own Amazon brand",
      "Entrepreneurs looking for a scalable e-commerce business",
      "Investors who want real brand equity",
      "Those willing to invest 6 months to build something valuable",
    ],
    pricingNote: "$500 per month for the first 6 months. After that, you keep 60% of profits and we take 40%.",
    faqs: [
      {
        question: "How much total investment do I need?",
        answer: "Besides the $500/month fee (total $3,000 over 6 months), you'll need $3,000–$8,000 for inventory, samples, and manufacturing.",
      },
      {
        question: "Do I own the brand?",
        answer: "Yes. The brand is 100% yours. We manage operations but you own everything including the trademark and inventory.",
      },
      {
        question: "What if the product doesn't sell?",
        answer: "We only launch products that pass our strict research criteria. If sales are slower than expected, we adjust the strategy including pricing, ads, and optimization.",
      },
    ],
  },
  {
    slug: "trademark-brand-registry",
    aliases: ["trademark", "brand-registry"],
    number: "09",
    category: "Amazon Growth",
    categoryBadge: "Logo $600 · Word $700",
    title: "Trademark & Brand Registry",
    tagline: "Protect your brand on Amazon and unlock powerful seller tools.",
    summary:
      "A trademark protects your brand from copycats and unlocks Amazon Brand Registry — which gives you access to A+ Content, video ads, brand stores, and more. We file your USPTO trademark and get you Brand Registry access fast.",
    heroImage: "/images/service-design.jpg",
    badge: "Amazon Growth",
    priceBadge: "Logo $600 · Word $700",
    highlights: [
      "Official USPTO trademark filing",
      "Serial number in 2 to 3 days",
      "Instant Amazon Brand Registry access",
      "Protects you from copycats and hijackers",
    ],
    metrics: [
      { value: "2–3 Days", label: "Serial Number Issued" },
      { value: "$600", label: "Logo Trademark" },
      { value: "$700", label: "Wordmark Trademark" },
      { value: "USPTO", label: "Official US Filing" },
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
      "Filing for Logo ($600) or Wordmark ($700)",
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
    pricingNote: "Logo Trademark: $600 total (includes filing fee). Wordmark Trademark: $700 total.",
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
    categoryBadge: "$350 Complete",
    title: "Wyoming LLC Formation",
    tagline: "The best US LLC for privacy and asset protection — $350 all-in.",
    summary:
      "Wyoming is the gold standard for US LLC formation. No state income tax, you can own it anonymously, and Wyoming has the strongest asset protection laws in the entire country. Perfect for international founders and Amazon sellers.",
    heroImage: "/images/service-web.jpg",
    badge: "US Corporate",
    priceBadge: "$350 Complete",
    highlights: [
      "Zero state income tax in Wyoming",
      "Anonymous ownership available",
      "Strongest asset protection in the US",
      "$350 total including state fee",
    ],
    metrics: [
      { value: "$350", label: "Total Cost (All-In)" },
      { value: "0%", label: "Wyoming State Income Tax" },
      { value: "Anonymous", label: "Ownership Option" },
      { value: "3–5 Days", label: "Formation Time" },
    ],
    whatWeDoTitle: "We form your Wyoming LLC fast — you get a real US company.",
    whatWeDo:
      "We handle the entire LLC formation process: articles of organization, registered agent, operating agreement, and EIN registration. Once complete, you have a legitimate US company you can use to open bank accounts, sell on Amazon, and do business in the United States.",
    howItWorks: [
      { step: "01", title: "You Provide Details", desc: "Share your name, address, and desired company name." },
      { step: "02", title: "We File Everything", desc: "We prepare and submit articles of organization to the Wyoming Secretary of State." },
      { step: "03", title: "EIN Registration", desc: "We get your Employer Identification Number from the IRS for banking and taxes." },
      { step: "04", title: "Documents Delivered", desc: "We send you all official documents — ready to open bank accounts and start business." },
    ],
    whatsIncluded: [
      "Wyoming LLC articles of organization",
      "$100 Wyoming state fee included",
      "Registered agent service (1 year)",
      "Operating agreement",
      "EIN registration with IRS",
      "All official formation documents",
      "Guidance on opening a US bank account",
    ],
    whoIsItFor: [
      "International founders who want a US company",
      "Amazon sellers who need a US business entity",
      "Anyone who values privacy and asset protection",
      "Online business owners who want zero state tax",
    ],
    pricingNote: "$350 total. Includes $100 Wyoming state fee, registered agent, and EIN.",
    faqs: [
      {
        question: "Can I open a US bank account with a Wyoming LLC?",
        answer: "Yes. A Wyoming LLC with an EIN is accepted by most US banks. We guide you on which banks work best for international founders.",
      },
      {
        question: "Do I need to live in Wyoming?",
        answer: "No. You can form a Wyoming LLC from anywhere in the world. You don't need to visit Wyoming or live there.",
      },
      {
        question: "What does 'anonymous ownership' mean?",
        answer: "In Wyoming, your name doesn't have to appear on public state records. This gives you privacy that most other US states don't offer.",
      },
    ],
  },
  {
    slug: "florida-llc",
    aliases: ["florida", "fl-llc"],
    number: "11",
    category: "US Corporate",
    categoryBadge: "$500 Complete",
    title: "Florida LLC Formation",
    tagline: "Form a US company in Florida — the East Coast commerce gateway.",
    summary:
      "Florida is a major hub for US and international business. No personal state income tax, fast electronic processing through Sunbiz, and excellent logistics access. Great for e-commerce, Amazon, and US market entry.",
    heroImage: "/images/service-web.jpg",
    badge: "US Corporate",
    priceBadge: "$500 Complete",
    highlights: [
      "No personal state income tax",
      "Fast Sunbiz electronic processing",
      "Prime East Coast location for logistics",
      "$500 total including state fee",
    ],
    metrics: [
      { value: "$500", label: "Total Cost (All-In)" },
      { value: "0%", label: "Personal State Income Tax" },
      { value: "24–48h", label: "Sunbiz Processing Time" },
      { value: "East Coast", label: "Prime Location" },
    ],
    whatWeDoTitle: "We form your Florida LLC with fast Sunbiz processing.",
    whatWeDo:
      "Florida's Sunbiz system allows fast, electronic LLC formation. We handle all the filings, get your EIN, and deliver your complete business documents. Florida is especially good if you're shipping products or want to be near the US East Coast market.",
    howItWorks: [
      { step: "01", title: "You Provide Details", desc: "Share your name, address, and company name." },
      { step: "02", title: "Sunbiz Filing", desc: "We submit your LLC articles electronically through Florida's Sunbiz portal." },
      { step: "03", title: "EIN from IRS", desc: "We register your EIN with the IRS for business banking and taxes." },
      { step: "04", title: "Documents Ready", desc: "Your Florida LLC documents are delivered — ready to do business." },
    ],
    whatsIncluded: [
      "Florida LLC articles of organization",
      "$125 Florida state fee included",
      "Registered agent service (1 year)",
      "Operating agreement",
      "EIN registration with IRS",
      "All formation documents",
    ],
    whoIsItFor: [
      "E-commerce sellers who need a US business entity",
      "International founders targeting the US East Coast",
      "Amazon sellers wanting a Florida-based business",
      "Businesses needing fast US market entry",
    ],
    pricingNote: "$500 total. Includes $125 Florida state fee, registered agent, and EIN.",
    faqs: [
      {
        question: "Why choose Florida over Wyoming?",
        answer: "Florida is a great choice if you want faster setup times, are targeting East Coast customers, or have partners/suppliers in Florida. Wyoming is better for maximum privacy.",
      },
      {
        question: "How fast is Sunbiz processing?",
        answer: "Florida's Sunbiz electronic system typically processes LLC filings within 24 to 48 hours — one of the fastest in the US.",
      },
      {
        question: "Do I need to visit Florida?",
        answer: "No. Everything is done electronically. You never need to travel to Florida to form or operate your LLC.",
      },
    ],
  },
  {
    slug: "texas-llc",
    aliases: ["texas", "tx-llc"],
    number: "12",
    category: "US Corporate",
    categoryBadge: "$550 Complete",
    title: "Texas LLC Formation",
    tagline: "Form a company in the US's second biggest economy.",
    summary:
      "Texas is the second largest economy in the United States. No personal income tax, access to 25+ Amazon fulfillment centers, and major commercial banking credibility. A powerhouse US business address for serious Amazon sellers.",
    heroImage: "/images/service-web.jpg",
    badge: "US Corporate",
    priceBadge: "$550 Complete",
    highlights: [
      "No personal state income tax",
      "Access to 25+ Amazon fulfillment centers",
      "Strong US commercial banking credibility",
      "$550 total including state fee",
    ],
    metrics: [
      { value: "$550", label: "Total Cost (All-In)" },
      { value: "0%", label: "Personal State Income Tax" },
      { value: "25+", label: "Amazon FCs Accessible" },
      { value: "#2", label: "US State Economy" },
    ],
    whatWeDoTitle: "We form your Texas LLC — serious business credibility.",
    whatWeDo:
      "Texas gives your business serious credibility with US banks and Amazon. We handle the filing with the Texas Secretary of State, get your EIN, and prepare all your documents. Texas's central location means you're near major Amazon fulfillment hubs across the country.",
    howItWorks: [
      { step: "01", title: "Your Details", desc: "Provide your name, address, and chosen company name." },
      { step: "02", title: "Texas SOS Filing", desc: "We file your LLC with the Texas Secretary of State." },
      { step: "03", title: "EIN Registration", desc: "We register your EIN with the IRS." },
      { step: "04", title: "All Done", desc: "Your Texas LLC documents are ready. Start doing business in the US." },
    ],
    whatsIncluded: [
      "Texas LLC certificate of formation",
      "$300 Texas SOS fee included",
      "Registered agent service (1 year)",
      "Operating agreement",
      "EIN registration with IRS",
      "Complete formation documents",
    ],
    whoIsItFor: [
      "Amazon sellers who want access to central US fulfillment",
      "Businesses wanting strong US banking credibility",
      "International founders entering the US market",
      "Anyone who values Texas's commercial ecosystem",
    ],
    pricingNote: "$550 total. Includes $300 Texas SOS fee, registered agent, and EIN.",
    faqs: [
      {
        question: "Why is Texas good for Amazon sellers?",
        answer: "Texas's central location gives you access to Amazon fulfillment centers across the entire country, which can lower your shipping costs and speed up delivery.",
      },
      {
        question: "The state fee is $300 — why is the total $550?",
        answer: "The $550 includes the $300 Texas state filing fee, our service fee, registered agent for one year, and EIN registration.",
      },
      {
        question: "Can I use a Texas LLC for Amazon's US marketplace?",
        answer: "Absolutely. A Texas LLC is a legitimate US business entity that Amazon accepts for Seller Central registration.",
      },
    ],
  },

  // ─── CREATIVE STUDIO ─────────────────────────────────────────────────────
  {
    slug: "digital-marketing",
    aliases: ["marketing", "performance-marketing", "social-media"],
    number: "13",
    category: "Digital Marketing",
    categoryBadge: "+347% Reach",
    title: "Digital Marketing",
    tagline: "We grow your brand online — more customers, more sales.",
    summary:
      "We run targeted paid ads on Meta, Google, and TikTok, and create viral social media content that brings real customers to your business. We handle everything from strategy to daily management.",
    heroImage: "/images/service-marketing.jpg",
    badge: "Digital Marketing",
    priceBadge: "+347% Avg Reach",
    highlights: [
      "Facebook, Instagram and Google ads",
      "TikTok and Reels viral content",
      "Full-funnel strategy — from click to sale",
      "Clear weekly reports",
    ],
    metrics: [
      { value: "+347%", label: "Average Organic Reach" },
      { value: "4.8x", label: "Average ROAS" },
      { value: "91%", label: "New Audience Discovery" },
      { value: "Daily", label: "Campaign Management" },
    ],
    whatWeDoTitle: "We bring real customers to your business through smart marketing.",
    whatWeDo:
      "We create ads that target the right people, at the right time, with the right message. We manage your ad budget carefully, test different creatives, and keep improving results every week. We also create social media content that grows your following organically.",
    howItWorks: [
      { step: "01", title: "Audit & Strategy", desc: "We review your current marketing and build a clear plan for getting more customers." },
      { step: "02", title: "Campaign Launch", desc: "We create ads and content, set up tracking, and launch campaigns." },
      { step: "03", title: "Weekly Optimization", desc: "We test and improve ads weekly — pausing what doesn't work and scaling what does." },
      { step: "04", title: "Monthly Report", desc: "You get a clear, simple report showing exactly what your money achieved." },
    ],
    whatsIncluded: [
      "Meta (Facebook & Instagram) ad management",
      "Google Ads management",
      "TikTok ad campaigns",
      "Ad creative design and copywriting",
      "Audience research and targeting",
      "Conversion tracking setup",
      "Weekly performance reports",
    ],
    whoIsItFor: [
      "Businesses that want more customers online",
      "E-commerce brands ready to scale",
      "Local businesses wanting regional reach",
      "Anyone wasting money on ads with no results",
    ],
    pricingNote: "Monthly management fee starting at $1,850/month. Contact us for a custom quote.",
    faqs: [
      {
        question: "How quickly will I see results?",
        answer: "Most clients see improvement within 2 to 4 weeks. Significant results usually show by month 2.",
      },
      {
        question: "Do you design the ads too?",
        answer: "Yes. We handle everything — strategy, design, copywriting, and daily management.",
      },
      {
        question: "What's the minimum ad budget?",
        answer: "We recommend at least $500/month in ad spend. Our fee is separate from your ad budget.",
      },
    ],
  },
  {
    slug: "graphic-design",
    aliases: ["design", "branding", "logo-design"],
    number: "14",
    category: "Creative Studio",
    categoryBadge: "Brand Identity",
    title: "Graphic Design & Branding",
    tagline: "We design your brand so people remember it.",
    summary:
      "We create logos, packaging, brand colors, and all visual materials that make your business look professional and memorable. From a simple logo to a complete brand identity system.",
    heroImage: "/images/service-design.jpg",
    badge: "Creative Studio",
    priceBadge: "From $1,600",
    highlights: [
      "Logo design and brand identity",
      "Packaging and product labels",
      "3D product renders",
      "Pitch decks and marketing materials",
    ],
    metrics: [
      { value: "98.4%", label: "Client Satisfaction Rate" },
      { value: "14 Days", label: "Average Brand Sprint" },
      { value: "100%", label: "Print-Ready Files" },
      { value: "45+", label: "Design Awards" },
    ],
    whatWeDoTitle: "We make your brand look like a million-dollar company.",
    whatWeDo:
      "Great design makes people trust you before they even read your words. We design logos, color systems, packaging, labels, social media kits, pitch decks, and more. Everything we create is done by experienced designers — not AI or templates.",
    howItWorks: [
      { step: "01", title: "Discovery", desc: "We learn about your business, your target customers, and what you want your brand to feel like." },
      { step: "02", title: "Concepts", desc: "We show you 2 to 3 completely different design directions to choose from." },
      { step: "03", title: "Refinement", desc: "We refine your chosen direction until you love it." },
      { step: "04", title: "Final Files", desc: "You receive all files in every format needed for print and digital use." },
    ],
    whatsIncluded: [
      "Primary and secondary logo designs",
      "Brand color palette and typography",
      "Business card and stationery design",
      "Social media profile kit",
      "Brand guidelines document",
      "All final files (AI, SVG, PNG, PDF)",
    ],
    whoIsItFor: [
      "New businesses needing a professional brand",
      "Existing brands that look outdated",
      "Amazon sellers who need product packaging",
      "Companies preparing for investment or expansion",
    ],
    pricingNote: "Brand Essentials starts at $1,600. Full brand packages from $3,200.",
    faqs: [
      {
        question: "Do I own the designs?",
        answer: "Yes. Once paid, 100% of the copyright and all source files belong to you.",
      },
      {
        question: "How long does it take?",
        answer: "A basic logo takes 5 to 7 days. A full brand package takes 10 to 14 days.",
      },
      {
        question: "Can you design Amazon product packaging?",
        answer: "Yes. We create print-ready packaging files that you can send directly to your manufacturer.",
      },
    ],
  },
  {
    slug: "web-development",
    aliases: ["development", "web", "ecommerce", "shopify"],
    number: "15",
    category: "Creative Studio",
    categoryBadge: "Sub-Second Speed",
    title: "Web Development",
    tagline: "We build fast, beautiful websites that turn visitors into buyers.",
    summary:
      "We create custom websites and Shopify stores that load fast, look great, and are designed to convert visitors into customers. No templates, no shortcuts — everything is built specifically for your business.",
    heroImage: "/images/service-web.jpg",
    badge: "Creative Studio",
    priceBadge: "From $1,950",
    highlights: [
      "Custom Next.js and Shopify builds",
      "Loads in under 400ms",
      "Looks great on mobile and desktop",
      "Built to convert visitors into buyers",
    ],
    metrics: [
      { value: "400ms", label: "Average Load Speed" },
      { value: "+38%", label: "Avg Conversion Lift" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "100%", label: "Mobile Responsive" },
    ],
    whatWeDoTitle: "We build websites that work as hard as you do.",
    whatWeDo:
      "We design and build custom websites using modern technology (Next.js, React, Shopify) that load fast, look beautiful, and are easy for you to manage. We also add smooth animations, proper SEO setup, and payment integrations so your site is ready to make money from day one.",
    howItWorks: [
      { step: "01", title: "Design First", desc: "We design your website in Figma so you can see exactly how it will look before we build." },
      { step: "02", title: "Build", desc: "We code your website clean and fast using the best modern frameworks." },
      { step: "03", title: "Test & Optimize", desc: "We test on all devices and browsers and make sure everything loads fast." },
      { step: "04", title: "Launch", desc: "We go live and handle all technical setup — hosting, domain, and SEO basics." },
    ],
    whatsIncluded: [
      "Custom website or Shopify store design",
      "Mobile-first responsive layout",
      "Core Web Vitals speed optimization",
      "Basic SEO setup",
      "Contact forms and payment integration",
      "30 days of post-launch support",
    ],
    whoIsItFor: [
      "Businesses without a website or with a bad one",
      "Amazon sellers who want their own website",
      "E-commerce brands who want a custom Shopify store",
      "Anyone whose website is slow or doesn't convert",
    ],
    pricingNote: "Landing pages from $1,950. Full e-commerce stores from $3,850.",
    faqs: [
      {
        question: "Can I edit the website myself after it's built?",
        answer: "Yes. We set up a simple content management system so you can update text and images without needing a developer.",
      },
      {
        question: "Will my website rank on Google?",
        answer: "We include basic SEO setup with every website. For ongoing SEO content and rankings, we recommend pairing with our Digital Marketing service.",
      },
      {
        question: "How long does a website take?",
        answer: "A landing page takes 1 to 2 weeks. A full e-commerce store takes 3 to 4 weeks.",
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
