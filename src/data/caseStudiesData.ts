export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  filterCategory: "all" | "ecommerce" | "branding" | "marketing";
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
    id: "korean-skins-care",
    slug: "korean-skins-care",
    number: "01",
    title: "Korean Skins Care",
    category: "E-Commerce & Brand Architecture",
    filterCategory: "ecommerce",
    tagline: "Online cosmetics store for authentic Korean skincare products worldwide.",
    description:
      "We developed a complete e-commerce solution for Korean Skins Care, a cosmetics firm committed to providing customers all over the world with authentic Korean skincare items.",
    clientUrl: "koreanskinscare.com",
    relatedServiceSlug: "web-development",
    services: [
      "Logo and Branding Design",
      "Full UI/UX Design",
      "Complete Shopify Store Integration",
      "Social Media Management",
    ],
    results: [
      { label: "Checkout Conversion Rate", value: "+4.8%" },
      { label: "Global Order Fulfillment", value: "32+ Countries" },
      { label: "Organic Monthly Visitors", value: "45K+" },
    ],
    image: "/images/korean-skincare.jpg",
    overview:
      "Korean Skins Care wanted a modern, fast, and simple online store where customers from 30+ countries could easily discover, compare, and order authentic Korean skincare products. We provided complete branding, built their Shopify store, and ran their social media campaigns.",
    caseDetails: {
      challenge:
        "The client had genuine Korean beauty products, but their previous website was slow, hard to navigate on mobile phones, and losing potential buyers during checkout.",
      solution:
        "We built a clean, lightning-fast Shopify 2.0 store with a simple product catalog, instant search, customer reviews, and a 1-click checkout flow.",
      outcome:
        "Checkout conversion increased by +4.8%, organic monthly traffic hit 45,000+ visitors, and international orders expanded to 32+ countries without issues.",
    },
    features: [
      "Custom Shopify 2.0 storefront",
      "Mobile-first responsive design",
      "Fast 1-click checkout drawer",
      "Customer reviews and rating integration",
      "Multilingual and currency switcher",
      "Automated inventory management",
    ],
  },
  {
    id: "clothing-thrift-stores",
    slug: "clothing-thrift-stores",
    number: "02",
    title: "Clothing Thrift Stores",
    category: "Brand Identity & Sustainable Packaging",
    filterCategory: "branding",
    tagline: "Modern eco-friendly clothing identity with sustainable packaging.",
    description:
      "We developed a bold and memorable visual identity for Clothing Thrift Stores, a brand focused on affordable fashion with sustainable values across physical and digital touchpoints.",
    clientUrl: "clothingthriftstores.co",
    relatedServiceSlug: "graphic-design",
    services: [
      "Business Cards & Corporate Stationery",
      "Eco-Friendly Packaging & Boxes",
      "Custom Apparel Labels & Tags",
      "Digital Lookbooks & Catalog Design",
    ],
    results: [
      { label: "Brand Sentiment", value: "98.4%" },
      { label: "Recyclable Packaging", value: "100%" },
      { label: "Footfall & Online Traffic", value: "+215%" },
    ],
    image: "/images/thrift-stores.jpg",
    overview:
      "Clothing Thrift Stores wanted to change the way people see second-hand clothing. They needed a premium, eco-friendly look that made thrift shopping feel stylish, trustworthy, and modern.",
    caseDetails: {
      challenge:
        "Second-hand fashion was seen as cheap and disorganized. The brand needed an elegant visual look comparable to top boutique retail brands.",
      solution:
        "We designed a minimalist visual brand system, 100% recyclable shipping boxes, custom woven garment tags, and a digital product lookbook.",
      outcome:
        "Store footfall and online inquiries jumped by +215%, with 98.4% positive customer feedback on their new sustainable packaging.",
    },
    features: [
      "Minimalist modern logo design",
      "100% recyclable shipping boxes & mailers",
      "High-end woven apparel tags & clothing labels",
      "Complete social media branding templates",
      "Corporate business cards & invoices",
    ],
  },
  {
    id: "comfort-shoes-smm",
    slug: "comfort-shoes-smm",
    number: "03",
    title: "Comfort Shoes SMM",
    category: "Viral Social Media Marketing",
    filterCategory: "marketing",
    tagline: "Short-form video strategy that brought explosive organic reach and sales.",
    description:
      "A strategic social media marketing campaign focused on TikTok and Instagram video hooks, achieving high organic reach and consistent customer sales.",
    clientUrl: "comfortshoes.com",
    relatedServiceSlug: "digital-marketing",
    services: [
      "Viral Short-Form Video Creation",
      "TikTok & Instagram Reel Strategy",
      "Influencer Partnerships & Seeding",
      "Direct-Response Retargeting Ads",
    ],
    results: [
      { label: "Video Views Increase", value: "+306%" },
      { label: "Organic Reach Growth", value: "+347%" },
      { label: "Views from New Users", value: "91%" },
      { label: "User Interaction Jump", value: "+120%" },
    ],
    image: "/images/comfort-shoes.jpg",
    overview:
      "Comfort Shoes needed a way to attract thousands of active buyers without spending tens of thousands of dollars on pay-per-click ads every single month.",
    caseDetails: {
      challenge:
        "Rising advertising costs were eating into profit margins. The brand needed viral, organic social media content to drive free daily traffic.",
      solution:
        "We planned and produced engaging short-form video reels highlighting real-life comfort tests, daily walking challenges, and customer testimonials.",
      outcome:
        "Organic reach skyrocketed +347%, with 91% of total viewers being brand-new customers and a +120% increase in direct website inquiries.",
    },
    features: [
      "Custom weekly short-form video scripts",
      "High-converting video editing & captions",
      "Micro-influencer collaboration pipeline",
      "Hashtag and audio trend research",
      "Lead conversion link-in-bio funnel",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase() === slug.toLowerCase()
  );
}
