import { StpRow, MarketingMixP, FunnelStage } from '../types';

export const STP_DATA: StpRow[] = [
  {
    dimension: 'Demographic',
    target: '25–40 years old, Tier-1 urban metro residents, ₹12L+ annual household income, graduate/postgraduate educated.',
    deliberatelyNotUs: 'Teen fast-fashion consumers, trend-chasing Gen-Z micro-trend buyers, and bargain clearance bulk shoppers.',
    strategicRationale: 'Target possesses the disposable income to absorb higher upfront prices and the intellectual interest to appreciate material provenance.'
  },
  {
    dimension: 'Psychographic',
    target: 'Mindful minimalists; prioritizes fabric longevity, ethical labour, environmental provenance, and subtle classic aesthetics over bold hype branding.',
    deliberatelyNotUs: 'Shoppers who view garments as single-use "content pieces" for social media or status-seeking logomania consumers.',
    strategicRationale: 'Creates strong brand affinity and immunity to competitor discount wars; aligns customer identity with slow-fashion stewardship.'
  },
  {
    dimension: 'Behavioural',
    target: 'High-consideration buyers making 4–6 wardrobe purchases annually; conducts pre-purchase research; checks material tags; values lifetime repairs.',
    deliberatelyNotUs: 'Discount-triggered impulsive shoppers relying on frequent flash sales, weekly hauls, and high return cycles.',
    strategicRationale: 'Enables high repeat purchase loyalty (41%) and a low return rate (5.2%), dramatically lowering customer acquisition and logistics costs.'
  },
  {
    dimension: 'Geographic',
    target: 'Primary: Bengaluru, Mumbai, Delhi NCR, Pune, Hyderabad, Chennai. Supported by 2 tactile studio touchpoints in Indiranagar & Bandra.',
    deliberatelyNotUs: 'Tier-3 and rural fragmented markets until regional reverse-logistics and return infrastructure unit economics become sustainable.',
    strategicRationale: 'Concentrates marketing density in tech and creative corridors where D2C brand discovery and word-of-mouth referability are highest.'
  }
];

export const POSITIONING_STATEMENT = {
  target: 'For urban professionals who are tired of replacing poorly constructed clothes,',
  brand: 'Loom & Lane',
  category: 'is the sustainable everyday essentials label',
  benefit: 'that proves every claim it makes —',
  reasonToBelieve: 'because we publish our mills, our wages, and our exact profit margins, and we mend every garment you purchase for free for life.'
};

export const MARKETING_MIX_4PS: MarketingMixP[] = [
  {
    p: 'Product',
    title: 'Ten Curated SKUs, Built for a Decade',
    decision: 'Strict 10-SKU permanent collection across 2 annual seasonal palette edits. Constructed with GOTS organic cotton, traceable merino, and plastic-free trims. Backed by free lifetime mending and ₹400 recycling buyback credit.',
    why: 'A narrow, evergreen assortment eliminates seasonal dead stock markdowns and inventory risk. Superior construction and lifetime repairs transform a one-time product transaction into an enduring lifetime relationship.',
    mbaRationale: 'Eliminates typical 30-40% inventory write-offs suffered by fast-fashion retailers while creating high product-level advocacy.'
  },
  {
    p: 'Price',
    title: 'Transparent Mid-Premium, Cost-Per-Wear Superiority',
    decision: 'Mid-premium pricing (₹890–₹5,990). Zero sitewide discount codes or liquidation sales. Transparent pricing breakdowns published on every product card detailing raw materials, labour, logistics, overhead, and margin.',
    why: 'Discounting destroys brand trust and squeezes mill craftspeople wages. Showing the true cost of production demonstrates moral consistency, while our Cost-Per-Wear (₹5/wear over 5 years) proves economic superiority over cheap alternatives.',
    mbaRationale: 'Price-transparency framing reverses consumer price-resistance by turning the purchase into a rational long-term investment.'
  },
  {
    p: 'Place',
    title: 'Direct-to-Consumer (D2C) with Urban Experience Studios',
    decision: '100% digital D2C web store delivering to 19,000 pin codes across India, paired with two curated physical sensory studios in Bengaluru (Indiranagar) and Mumbai (Bandra West). Zero multi-brand marketplace discounting.',
    why: 'Owning the customer transaction preserves the 50% retail margin required to pay 1.8× living wages. The physical studios act as conversion hubs for fit trials, free alterations, walk-in repairs, and garment recycling drop-offs.',
    mbaRationale: 'Maximizes customer lifetime value (LTV) through first-party data capture while physical studios eliminate sizing hesitation and return friction.'
  },
  {
    p: 'Promotion',
    title: 'Evidence-Led Content, SEO & Organic Referral Engine',
    decision: '70% organic content & SEO / 30% targeted email and retargeting. No spray-and-pray performance ad burn. Founder-led supply-chain documentation, mill audit video logs, repair workshops, and a 10% first-order welcome capture.',
    why: 'In ethical fashion, trust cannot be bought with paid banner ads; it must be proven with radical documentation. High-ranking educational search assets generate compounding organic traffic without rising Meta/Google ad auction bids.',
    mbaRationale: 'Lowers Customer Acquisition Cost (CAC) over time and produces a high LTV/CAC ratio of 4.2× driven by repeat loyalty.'
  }
];

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    stage: 'Awareness',
    budgetShare: '35% of Digital Spend',
    goal: 'Build brand awareness & challenge fast-fashion disposability among conscious urban consumers.',
    primaryChannels: ['Organic Search (SEO)', 'Pinterest Curated Boards', 'Founder Instagram Mill Tours', 'PR & Sustainability Op-Eds'],
    keyTactics: 'Long-form editorial investigations: "Why ₹499 T-Shirts Cost the Earth", Tiruppur mill video walkthroughs, and Pinterest capsule wardrobe mood boards.',
    kpis: 'Organic Impressions (+45% YoY), Editorial Backlinks (Domain Rating > 42), Video Completion Rate (>48%).'
  },
  {
    stage: 'Interest',
    budgetShare: '20% of Digital Spend',
    goal: 'Educate prospects on material superiority and price-per-wear economics.',
    primaryChannels: ['Interactive Cost-Per-Wear Calculator', 'Supply Chain Traceability Portal', 'Search Intent Landing Pages'],
    keyTactics: 'High-ranking search guides for "Organic cotton t-shirts India", "GOTS certified slow fashion", and comparative interactive cost-per-wear breakdown sliders.',
    kpis: 'Time on Page (>2m 45s), Cost-Per-Wear Calculator Engagement Rate (>32%), Organic Search Click-Through Rate (>5.4%).'
  },
  {
    stage: 'Desire',
    budgetShare: '15% of Digital Spend',
    goal: 'Eliminate hesitation through transparency, verified customer reviews, and sizing accuracy.',
    primaryChannels: ['Product Detail Pages', 'QR Batch Journey Viewer', 'Studio Appointment Booking', 'Fit & Sizing Consultation'],
    keyTactics: 'Full price breakdown modal on every card, finished garment sizing tables, unfiltered customer reviews, and studio trial invitations.',
    kpis: 'Add-to-Bag Rate (9.2%), Product Detail Page to Cart Conversion (14.8%), Sizing Chart Modal Views (>40% of PDP visits).'
  },
  {
    stage: 'Action',
    budgetShare: '15% of Digital Spend',
    goal: 'Frictionless first-purchase conversion with risk-reversal guarantees.',
    primaryChannels: ['D2C Checkout', 'Welcome 10% First-Order Incentive', 'Prepaid Free Returns', 'Carbon-Neutral Delivery'],
    keyTactics: 'Free carbon-neutral shipping on orders over ₹1,999, 30-day no-questions return label inside the box, and instant SMS tracking.',
    kpis: 'Checkout Completion Rate (68%), First-Time Order Conversion (3.6%), Payment Failure Rate (<2%).'
  },
  {
    stage: 'Loyalty',
    budgetShare: '15% of Digital Spend',
    goal: 'Drive repeat purchases, lifetime mending adoption, and community advocacy.',
    primaryChannels: ['Lifecycle Email Sequences', 'Free Lifetime Repair Service', '₹400 Trade-In Recycling Program', 'Private Studio Evenings'],
    keyTactics: 'Monthly thoughtful newsletter (new drops, restock alerts, repair tutorials), complimentary garment repair drop-offs, and ₹400 voucher per recycled piece.',
    kpis: 'Repeat Purchase Rate (41%), Email Open Rate (38%), Active Mending Claim Rate (8.4%), Customer Net Promoter Score (NPS 74).'
  }
];

export const SEO_KEYWORD_STRATEGY = [
  {
    cluster: 'High-Intent Commercial',
    targetKeyword: 'organic cotton t shirt india',
    searchIntent: 'Commercial / Transactional',
    monthlyVolumeIndia: '18,500/mo',
    targetLandingPage: '/shop (Tops Filter)',
    contentHook: 'Focus on 190 GSM combed cotton, 30x wash durability, and ₹4.96/wear breakdown.'
  },
  {
    cluster: 'Ethical & Slow Fashion',
    targetKeyword: 'sustainable clothing brands india',
    searchIntent: 'Informational / Commercial',
    monthlyVolumeIndia: '14,200/mo',
    targetLandingPage: '/about (Traceability & Mills)',
    contentHook: 'Deep dive into Tiruppur fair-wage mills, SA8000 audit scores, and living wages.'
  },
  {
    cluster: 'Educational & Thought Leadership',
    targetKeyword: 'cost per wear clothes calculator',
    searchIntent: 'Informational',
    monthlyVolumeIndia: '6,400/mo',
    targetLandingPage: '/strategy (Interactive Tool)',
    contentHook: 'Comprehensive guide showing how a ₹1,290 tee beats a ₹499 fast-fashion tee over 3 years.'
  },
  {
    cluster: 'Garment Care & Longevity',
    targetKeyword: 'how to repair organic cotton clothing',
    searchIntent: 'Informational',
    monthlyVolumeIndia: '4,100/mo',
    targetLandingPage: '/contact (Lifetime Repairs)',
    contentHook: 'Step-by-step mending video guides and postal repair request process.'
  }
];

export const SOCIAL_MEDIA_PLAN = [
  {
    platform: 'Instagram (@loomandlane)',
    cadence: '4 posts/week + Daily Stories',
    audienceFocus: 'Urban conscious professionals (25-38)',
    contentPillars: 'Mill walkthroughs with weavers, "Wear It 100 Times" user spotlights, styling capsule wardrobes with 5 pieces.',
    tone: 'Unfiltered, calm, transparent, and artisan-first. No high-energy hype or flash-sale urgency.'
  },
  {
    platform: 'Pinterest',
    cadence: '12-15 pins/week',
    audienceFocus: 'Aesthetic minimalists & capsule wardrobe planners',
    contentPillars: 'Neutral colour palette pairing guides, slow-fashion capsule formulas for Indian weather, sustainable fabric care infographics.',
    tone: 'Visual, timeless, highly searchable, and inspiring.'
  },
  {
    platform: 'LinkedIn & Substack',
    cadence: '2 essays/month',
    audienceFocus: 'Business leaders, retail executives, and circular fashion researchers',
    contentPillars: 'Founder essays on supply chain unit economics: "Why We Pay 1.8x Living Wages and Still Turn a Profit", quarterly mill audit releases.',
    tone: 'Analytical, rigorous, transparent, and research-grounded.'
  },
  {
    platform: 'YouTube (Mini-Documentaries)',
    cadence: '1 video/month (6-8 minutes)',
    audienceFocus: 'Curious consumers seeking supply-chain proof',
    contentPillars: 'Vidarbha cotton harvest journey, closed-loop water treatment in Tiruppur, master machinist profile series.',
    tone: 'Cinematic, documentary-grade, educational.'
  }
];

export const KPI_METRICS_DASHBOARD = [
  {
    label: 'Repeat Purchase Rate',
    value: '41.2%',
    benchmark: 'Industry Avg: 18-22%',
    status: 'Exceeding Target',
    insight: 'Customers order an average of 2.8 times across 18 months, driven by fabric longevity satisfaction.'
  },
  {
    label: 'LTV to CAC Ratio',
    value: '4.2 : 1',
    benchmark: 'Industry Target: 3.0 : 1',
    status: 'Healthy Unit Economics',
    insight: 'High organic discovery (72%) keeps Customer Acquisition Costs low while lifetime mending retains customers.'
  },
  {
    label: 'Garment Return Rate',
    value: '5.2%',
    benchmark: 'Fashion Ecommerce Avg: 22-26%',
    status: 'Low Operational Friction',
    insight: 'Pre-shrunk wash testing and finished garment sizing charts eliminate typical sizing mismatch returns.'
  },
  {
    label: 'Organic Traffic Ratio',
    value: '72.4%',
    benchmark: 'D2C Benchmark: ~40-50%',
    status: 'High Organic Dominance',
    insight: 'Investments in long-form supply chain content and high-intent SEO drive compounding unpaid visits.'
  },
  {
    label: 'Average Order Value (AOV)',
    value: '₹2,840',
    benchmark: 'Target: ₹2,500',
    status: 'High Basket Quality',
    insight: 'Free shipping threshold at ₹1,999 incentivizes bundling an accessory or second staple item.'
  },
  {
    label: 'Mending & Care Utilization',
    value: '8.4%',
    benchmark: 'Fast-Fashion Benchmark: 0%',
    status: 'Active Brand Relationship',
    insight: '840+ garments serviced via postal repairs or Indiranagar & Bandra studio walk-in ateliers.'
  }
];
