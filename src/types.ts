export type ProductCategory = 'All' | 'Tops' | 'Bottoms' | 'Outerwear' | 'Dresses' | 'Accessories';

export interface PriceBreakdown {
  materialsAndLabour: number;
  transportAndPackaging: number;
  operationalOverhead: number;
  brandMargin: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'Tops' | 'Bottoms' | 'Outerwear' | 'Dresses' | 'Accessories';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: 'Bestseller' | 'Sale' | 'New';
  spriteId: 'a-tee' | 'a-shirt' | 'a-knit' | 'a-jacket' | 'a-dress' | 'a-trousers' | 'a-tote' | 'a-cap';
  imageUrl: string;
  imageAlt: string;
  tagline: string;
  description: string;
  material: string;
  provenance: string;
  availableSizes: string[];
  costPerWear5Years: number; // in INR per wear
  breakdown: PriceBreakdown;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface TraceabilityStep {
  step: string;
  stage: string;
  location: string;
  facility: string;
  auditBadge: string;
  summary: string;
  details: string[];
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  quote: string;
  purchasedItem: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders & Shipping' | 'Repairs & Lifetime Care' | 'Transparency & Pricing' | 'Wholesale & Collaborations';
}

export interface StpRow {
  dimension: string;
  target: string;
  deliberatelyNotUs: string;
  strategicRationale: string;
}

export interface MarketingMixP {
  p: 'Product' | 'Price' | 'Place' | 'Promotion';
  title: string;
  decision: string;
  why: string;
  mbaRationale: string;
}

export interface FunnelStage {
  stage: 'Awareness' | 'Interest' | 'Desire' | 'Action' | 'Loyalty';
  budgetShare: string;
  goal: string;
  primaryChannels: string[];
  keyTactics: string;
  kpis: string;
}
