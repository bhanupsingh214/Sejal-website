import { TraceabilityStep } from '../types';

export const TRACEABILITY_STEPS: TraceabilityStep[] = [
  {
    step: '01',
    stage: 'Raw Cotton Cultivation',
    location: 'Vidarbha, Maharashtra',
    facility: 'Vidarbha Organic Farmers Cooperative (340 smallholder growers)',
    auditBadge: 'GOTS Certified & Fair Trade India',
    summary: 'A 340-farmer organic co-operative utilizing rain-fed irrigation, heirloom non-GMO seeds, and zero synthetic pesticides.',
    details: [
      'Guaranteed floor price paid directly to farmers: 32% above market auction averages.',
      '100% rain-fed monsoon irrigation cuts agricultural groundwater depletion by 91%.',
      'Crop rotation with pulses and marigolds preserves micro-biome soil biodiversity.',
      'Complete seed-to-bale batch tracking code assigned on harvest.'
    ],
    highlight: '340 cooperative farming families empowered with pre-monsoon guaranteed forward contracts.'
  },
  {
    step: '02',
    stage: 'Spinning & Knitting',
    location: 'Tiruppur, Tamil Nadu',
    facility: 'Shanthi Mills (Unit 4 - Eco Yarns)',
    auditBadge: 'SA8000 Certified & Solar Powered',
    summary: 'Spun on energy-efficient ring frames and knitted on ultra-fine gauge German machinery powered by rooftop and captive wind solar.',
    details: [
      '100% captive rooftop solar & wind energy footprint for all spinning and knitting lines.',
      'Dust-free pneumatic extraction ensuring clean air standards for mill craftspeople.',
      'Quarterly third-party SA8000 audit published transparently on our portal.',
      'Zero liquid waste generated in mechanical spinning and knitting stages.'
    ],
    highlight: 'Zero reliance on coal grid power; audited SA8000 score of 98.4/100 in Q2 2026.'
  },
  {
    step: '03',
    stage: 'Low-Impact Dyeing & Washing',
    location: 'Perundurai, Tamil Nadu',
    facility: 'Kaveri Closed-Loop Processing Park',
    auditBadge: 'Zero Liquid Discharge (ZLD) Verified',
    summary: 'Low-impact OEKO-TEX and GOTS approved dyestuffs with closed-loop multiple effect evaporators that recover 94% of process water.',
    details: [
      'Zero toxic heavy metals, formaldehydes, or azo dyes used across any batch.',
      '94% water recovery rate via reverse osmosis and thermal evaporation systems.',
      'Remaining 6% solid mineral salts safely segregated for industrial cement reclamation.',
      'Natural enzyme biowashing replaces stone/pumice washing, eliminating silica exposure.'
    ],
    highlight: '94% closed-loop water recovery protects the Noyyal and Bhavani river basins.'
  },
  {
    step: '04',
    stage: 'Pattern Cutting, Sewing & Finishing',
    location: 'Avinashi Road, Tiruppur, Tamil Nadu',
    facility: 'Loom & Lane Dedicated Atelier (48 craftspeople)',
    auditBadge: '1.8× Minimum Living Wage Verified',
    summary: 'Machinists paid 1.8× the regional statutory minimum wage on permanent employment contracts with full family healthcare and paid parental leave.',
    details: [
      'Fair living wage guaranteed: 1.8× statutory minimum wage, verified twice annually.',
      'Every garment wash-tested 30 consecutive cycles before pattern approval.',
      'Reinforced seams, bound pocket bags, and spare button envelopes sewn into every piece.',
      'Ergonomic workstations with daylight integration and daily artisan breaks.'
    ],
    highlight: '48 master craftspeople with an average team tenure of 4.2 years and zero contract labour.'
  },
  {
    step: '05',
    stage: 'Carbon-Neutral Delivery & Circular Care',
    location: 'Bengaluru Fulfillment Center to All-India',
    facility: '19,000 Pin Codes via Green Logistics Network',
    auditBadge: '100% Plastic-Free & Carbon Offset',
    summary: 'Delivered in FSC-certified unbleached recycled card boxes, sealed with water-activated paper tape, accompanied by prepaid returns and lifetime repair pass.',
    details: [
      '100% plastic-free packaging: cornstarch biodegradable garment wraps and cotton ribbon.',
      'Verified Gold Standard carbon offsets for all ground and air shipping ton-kilometres.',
      'Prepaid reverse shipping label included in every box for 30-day effortless returns.',
      'Lifetime repair pass & ₹400 trade-in credit for end-of-life yarn recycling.'
    ],
    highlight: 'Over 12,400 orders delivered across India with net-zero logistics emissions.'
  }
];

export const BATCH_LOOKUP_DEMO = {
  batchCode: 'LL-2026-TIR-084',
  productName: 'Everyday Organic Tee (Autumn Batch)',
  harvestDate: 'March 2026',
  millAuditDate: 'May 14, 2026',
  coopId: 'VOFC-MAH-340',
  waterSavedVsConventional: '2,420 Litres',
  pesticideFreeDays: '730 Days Continuous'
};
