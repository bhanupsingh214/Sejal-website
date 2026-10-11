import React, { useState } from 'react';
import { ArrowRight, Check, Star, ShieldCheck } from 'lucide-react';
import { PRODUCTS, HERO_EDITORIAL_IMAGE } from '../data/products';
import { TESTIMONIALS_DATA } from '../data/faqs';
import { Product } from '../types';

interface HomePageProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'strategy' | 'contact') => void;
  onAddToCart: (product: Product, size: string) => void;
  onOpenCostBreakdown: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onOpenCostBreakdown,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  // 4 curated iconic essentials for the home showcase
  const featuredProducts = PRODUCTS.filter((p) =>
    ['everyday-organic-tee', 'merino-crew-knit', 'field-jacket', 'canvas-day-tote'].includes(p.id)
  );

  const heroMerino = PRODUCTS.find((p) => p.id === 'merino-crew-knit') || PRODUCTS[2];

  const handleQuickAdd = (product: Product) => {
    const defaultSize = product.availableSizes[1] || product.availableSizes[0] || 'M';
    onAddToCart(product, defaultSize);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <div className="space-y-24 pb-24">
      {/* ===== HERO SECTION — Premium Editorial Fashion Showcase ===== */}
      <section className="pt-6 sm:pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Refined Typography & Intentional CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c05f3c] block">
                Autumn / Winter Collection
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-medium text-[#1b1714] leading-[1.1] text-balance">
                Everyday essentials. Considered differently.
              </h1>

              <p className="text-base sm:text-lg text-[#6e6259] leading-relaxed max-w-lg font-normal">
                Thoughtfully designed everyday clothing, with timeless style and a lighter approach to fashion.
                Made in fair-wage mills with GOTS-certified organic cotton and traceable merino.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-7 py-3.5 rounded-full bg-[#1b1714] text-[#faf7f2] text-xs font-semibold hover:bg-[#c05f3c] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Shop the Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-7 py-3.5 rounded-full border border-[#1b1714] text-[#1b1714] text-xs font-semibold hover:bg-[#1b1714] hover:text-[#faf7f2] transition-colors cursor-pointer"
                >
                  Discover Our Approach
                </button>
              </div>

              {/* Clean Brand Markers (No fake scorecards or mechanical badges) */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#e3dacd] max-w-md text-xs">
                <div>
                  <div className="font-display text-2xl font-semibold text-[#1b1714]">
                    100%
                  </div>
                  <div className="text-[11px] text-[#6e6259] uppercase tracking-wider mt-0.5">
                    Organic cotton
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-[#1b1714]">
                    1.8×
                  </div>
                  <div className="text-[11px] text-[#6e6259] uppercase tracking-wider mt-0.5">
                    Living wages
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-semibold text-[#1b1714]">
                    Lifetime
                  </div>
                  <div className="text-[11px] text-[#6e6259] uppercase tracking-wider mt-0.5">
                    Free repairs
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Fashion Photography */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#f2ece2] border border-[#e3dacd] shadow-md group">
                <img
                  src={HERO_EDITORIAL_IMAGE}
                  alt="Loom & Lane model wearing natural organic knitwear and linen trousers"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Quiet Product Spotlight */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md border border-[#e3dacd] rounded-xl p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#c05f3c]">
                      Featured Piece
                    </span>
                    <h3 className="font-display font-semibold text-sm text-[#1b1714]">
                      {heroMerino.name}
                    </h3>
                    <p className="text-[11px] text-[#6e6259]">Traceable extra-fine wool · 12-gauge</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display font-semibold text-sm text-[#1b1714] block">
                      ₹{heroMerino.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => handleQuickAdd(heroMerino)}
                      className="text-[11px] text-[#c05f3c] font-semibold hover:underline cursor-pointer"
                    >
                      {addedIds[heroMerino.id] ? 'Added ✓' : '+ Quick Add'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST MARQUEE ===== */}
      <section className="border-y border-[#e3dacd] bg-white py-3.5 overflow-hidden" aria-hidden="true">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[1, 2].map((iter) => (
            <React.Fragment key={iter}>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6259] flex items-center gap-3">
                <span className="text-[#c05f3c]">✦</span> GOTS-Certified Organic Cotton
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6259] flex items-center gap-3">
                <span className="text-[#c05f3c]">✦</span> Fair-Wage Mills
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6259] flex items-center gap-3">
                <span className="text-[#c05f3c]">✦</span> Carbon-Neutral Delivery
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6259] flex items-center gap-3">
                <span className="text-[#c05f3c]">✦</span> 30-Day Hassle-Free Returns
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6259] flex items-center gap-3">
                <span className="text-[#c05f3c]">✦</span> 100% Plastic-Free Packaging
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6259] flex items-center gap-3">
                <span className="text-[#c05f3c]">✦</span> Free Repairs for Life
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ===== FEATURED COLLECTION WITH AUTHENTIC PHOTOGRAPHY ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c05f3c] block mb-1">
              The Permanent Assortment
            </span>
            <h2 className="font-display text-3xl font-semibold text-[#1b1714]">
              Featured Essentials
            </h2>
            <p className="text-sm text-[#6e6259] max-w-xl mt-1 leading-relaxed">
              Ten permanent pieces, crafted without seasonal trends. Wash-tested 30 times and cut to wear for a decade.
            </p>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#c05f3c] hover:text-[#a44c2c] flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <span>View all 10 pieces</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-[#e3dacd] rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              {/* Product Photo Container */}
              <div className="relative aspect-[4/5] bg-[#f2ece2] overflow-hidden border-b border-[#e3dacd]">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      product.badge === 'Sale'
                        ? 'bg-[#c05f3c] text-white'
                        : 'bg-[#1b1714] text-[#faf7f2]'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6259]">
                    {product.category}
                  </span>
                  <h3 className="font-display font-semibold text-sm text-[#1b1714] mt-0.5">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-semibold text-xs tabular-nums text-[#1b1714]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[11px] line-through text-[#6e6259] tabular-nums">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#f2ece2] space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#6e6259]">Est. Cost per wear:</span>
                    <button
                      onClick={() => onOpenCostBreakdown(product)}
                      className="text-[#c05f3c] font-semibold hover:underline cursor-pointer"
                    >
                      ₹{product.costPerWear5Years.toFixed(2)} / wear
                    </button>
                  </div>
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="w-full py-2 rounded-full border border-[#1b1714] text-[#1b1714] text-xs font-semibold hover:bg-[#1b1714] hover:text-white transition-colors cursor-pointer"
                  >
                    {addedIds[product.id] ? 'Added to Bag ✓' : 'Add to bag'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== BRAND PHILOSOPHY — THREE PILLARS ===== */}
      <section className="bg-[#f2ece2] py-16 border-y border-[#e3dacd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Brand Philosophy
            </span>
            <h2 className="font-display text-3xl font-semibold text-[#1b1714] mt-1">
              Fewer, better, traceable
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] mt-2 leading-relaxed">
              Three commitments guiding our pattern cutting, wage structure, and supply chain standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#e3dacd] shadow-xs space-y-2.5">
              <span className="text-[11px] font-bold text-[#c05f3c] uppercase tracking-wider">
                01 · Agriculture
              </span>
              <h3 className="font-display text-lg font-semibold text-[#1b1714]">
                Grown without poison
              </h3>
              <p className="text-xs text-[#6e6259] leading-relaxed">
                Every thread is GOTS-certified organic cotton from a 340-farmer co-operative in Vidarbha.
                Rain-fed monsoon irrigation, zero synthetic pesticides, and healthy living soil.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#e3dacd] shadow-xs space-y-2.5">
              <span className="text-[11px] font-bold text-[#c05f3c] uppercase tracking-wider">
                02 · Human Craft
              </span>
              <h3 className="font-display text-lg font-semibold text-[#1b1714]">
                People paid properly
              </h3>
              <p className="text-xs text-[#6e6259] leading-relaxed">
                We publish the name and audit score of every mill we partner with. Our craftspeople are paid 1.8×
                the regional statutory minimum wage on permanent employment contracts.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#e3dacd] shadow-xs space-y-2.5">
              <span className="text-[11px] font-bold text-[#c05f3c] uppercase tracking-wider">
                03 · Garment Care
              </span>
              <h3 className="font-display text-lg font-semibold text-[#1b1714]">
                Mended, not binned
              </h3>
              <p className="text-xs text-[#6e6259] leading-relaxed">
                Free repairs for as long as you own the garment. Send back anything truly worn out after a decade,
                and we recycle the fibers into new yarn — with ₹400 store credit for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL ORIGIN SPOTLIGHT ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Brand Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1b1714] leading-tight">
              We started with one simple question.
            </h2>
            <p className="text-base text-[#6e6259] font-medium italic font-display border-l-2 border-[#c05f3c] pl-3">
              "Why does a t-shirt cost less than a cup of coffee, and who pays the difference?"
            </p>
            <p className="text-xs sm:text-sm text-[#413831] leading-relaxed">
              Loom &amp; Lane began in 2023 inside the cotton supply chains of Tiruppur and Vidarbha.
              We found generational weavers and skilled machinists doing careful work — and fast-fashion
              brands squeezing them for another four rupees a piece.
            </p>
            <p className="text-xs sm:text-sm text-[#413831] leading-relaxed">
              Our answer is a permanent 10-piece edit, radical price transparency, and clothes engineered to last a decade.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-semibold text-[#c05f3c] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read our full origin story &amp; 5-step traceability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#f2ece2] border border-[#e3dacd] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="Weaving atelier in Tiruppur crafting sustainable textiles"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER REVIEWS (AUTHENTIC BRAND PRESENTATION) ===== */}
      <section className="bg-[#f2ece2] py-16 border-y border-[#e3dacd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Community Voices
            </span>
            <h2 className="font-display text-3xl font-semibold text-[#1b1714] mt-1">
              Words from our wearers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e3dacd] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[#c05f3c] text-xs tracking-widest">
                    {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                  </div>
                  <blockquote className="font-display text-sm text-[#1b1714] leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f2ece2] mt-4">
                  <div className="w-7 h-7 rounded-full bg-[#ded0ba] text-[#1b1714] text-xs font-semibold flex items-center justify-center">
                    {item.initials}
                  </div>
                  <div className="text-xs">
                    <strong className="text-[#1b1714] font-medium block">{item.name}</strong>
                    <span className="text-[#6e6259]">{item.location} · {item.purchasedItem}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER INVITATION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1b1714] text-[#faf7f2] rounded-3xl p-8 sm:p-14 text-center border border-[#38302a] shadow-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c05f3c] block mb-2">
            The Circular Dispatch
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-medium mb-3 text-balance">
            Thoughtful clothing in your inbox
          </h2>
          <p className="text-xs sm:text-sm text-[#ded0ba]/80 max-w-md mx-auto leading-relaxed">
            One monthly letter: new drops, restock alerts, and garment repair tutorials. Never spam, unsubscribe anytime.
          </p>

          {newsletterSubmitted ? (
            <div className="mt-6 bg-[#2a241f] border border-[#c05f3c] text-[#faf7f2] p-4 rounded-xl max-w-md mx-auto text-xs">
              <strong className="text-[#c05f3c] block mb-1 font-semibold">
                Welcome to the Loom &amp; Lane Circle
              </strong>
              Your first-order code is <span className="font-mono bg-[#1b1714] px-1.5 py-0.5 rounded text-white">LOOM10</span>.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-[#2a241f] border border-[#3e342b] rounded-full text-xs text-white placeholder-[#ded0ba]/50 focus:outline-none focus:border-[#c05f3c]"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#c05f3c] text-white text-xs font-semibold rounded-full hover:bg-[#a44c2c] transition-colors whitespace-nowrap cursor-pointer"
              >
                Join the Circle
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#ded0ba]/60 mt-4">
            We respect your privacy. No marketing noise.
          </p>
        </div>
      </section>
    </div>
  );
};
