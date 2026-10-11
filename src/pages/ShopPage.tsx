import React, { useState, useMemo } from 'react';
import { Ruler, Sparkles, Filter, ChevronDown, Check, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCategory, Product } from '../types';

interface ShopPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onOpenCostBreakdown: (product: Product) => void;
  onOpenSizeGuide: () => void;
  onNavigateToContact: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onOpenCostBreakdown,
  onOpenSizeGuide,
  onNavigateToContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const categories: ProductCategory[] = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Dresses', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (selectedCategory === 'All') return true;
      return p.category === selectedCategory;
    });

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy]);

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAdd = (product: Product) => {
    const size = selectedSizes[product.id] || product.availableSizes[0] || 'M';
    onAddToCart(product, size);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e3dacd]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c05f3c] block mb-1">
            Complete Catalogue
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1b1714]">
            The Essentials Edit
          </h1>
          <p className="text-sm text-[#6e6259] max-w-xl mt-1 leading-relaxed">
            Ten permanent pieces, crafted with organic cotton and traceable merino in fair-wage mills.
            Finished to last a decade, with free repairs for life.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSizeGuide}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#ded0ba] bg-white text-xs font-semibold text-[#1b1714] hover:border-[#1b1714] transition-colors shadow-xs cursor-pointer"
          >
            <Ruler className="w-3.5 h-3.5 text-[#c05f3c]" />
            <span>Garment Sizing Guide</span>
          </button>
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#f2ece2] p-3 rounded-xl border border-[#e3dacd]">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0" role="tablist">
          {categories.map((cat) => {
            const count = cat === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={isSelected}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1b1714] text-[#faf7f2] font-semibold shadow-xs'
                    : 'bg-white text-[#413831] hover:bg-[#ded0ba]/50 border border-[#e3dacd]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${isSelected ? 'text-[#c05f3c]' : 'text-[#6e6259]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-[#6e6259] flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3" />
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#ded0ba] rounded-lg px-2.5 py-1 text-xs text-[#1b1714] focus:outline-none focus:border-[#c05f3c] cursor-pointer"
          >
            <option value="featured">Featured Essentials</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>
      </div>

      {/* Product Grid: 10 items with authentic photography */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const selectedSize = selectedSizes[product.id] || product.availableSizes[0] || 'M';
          const isAdded = addedItems[product.id];

          return (
            <article
              key={product.id}
              className="bg-white border border-[#e3dacd] rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
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

                {/* Cost-per-wear badge trigger */}
                <button
                  onClick={() => onOpenCostBreakdown(product)}
                  className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-[#e3dacd] px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#413831] hover:text-[#c05f3c] hover:border-[#c05f3c] transition-colors shadow-xs cursor-pointer"
                  title="View transparent price breakdown"
                >
                  ₹{product.costPerWear5Years.toFixed(2)}/wear
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#6e6259]">
                    <span className="uppercase tracking-wider font-semibold">{product.category}</span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#c05f3c]">★</span>
                      <strong className="text-[#1b1714] font-medium">{product.rating}</strong>
                      <span>({product.reviewsCount})</span>
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-base text-[#1b1714] mt-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#6e6259] mt-1 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-semibold text-base tabular-nums text-[#1b1714]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs line-through text-[#6e6259] tabular-nums">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Size Selector and Add to Bag */}
                <div className="space-y-3 pt-3 border-t border-[#f2ece2]">
                  {product.availableSizes.length > 1 && (
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#6e6259] font-medium">Select Size:</span>
                      <div className="flex items-center gap-1">
                        {product.availableSizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSizeChange(product.id, sz)}
                            className={`w-7 h-7 rounded text-[11px] font-medium transition-colors flex items-center justify-center cursor-pointer ${
                              selectedSize === sz
                                ? 'bg-[#1b1714] text-white font-bold'
                                : 'bg-[#f2ece2] text-[#413831] hover:bg-[#ded0ba]'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenCostBreakdown(product)}
                      className="py-2.5 px-3 rounded-full border border-[#ded0ba] text-[#413831] text-[11px] font-semibold hover:border-[#1b1714] transition-colors cursor-pointer"
                    >
                      Cost Breakdown
                    </button>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`py-2.5 px-3 rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                        isAdded
                          ? 'bg-[#6b7f6e] text-white'
                          : 'bg-[#c05f3c] text-white hover:bg-[#a44c2c]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added ✓</span>
                        </>
                      ) : (
                        <span>Add to bag</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Sizing Information Inline Callout */}
      <section className="bg-[#f2ece2] rounded-2xl p-8 border border-[#e3dacd] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
            Zero-Waste Sizing
          </span>
          <h3 className="font-display text-2xl font-semibold text-[#1b1714]">
            Unsure between two sizes?
          </h3>
          <p className="text-xs sm:text-sm text-[#6e6259] max-w-xl leading-relaxed">
            Every measurement in our sizing guide is recorded from the relaxed finished garment laid flat.
            Size down for knits, or visit our Bengaluru and Mumbai studios for complimentary in-person fit trials.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            onClick={onOpenSizeGuide}
            className="px-5 py-2.5 bg-[#1b1714] text-white text-xs font-semibold rounded-full hover:bg-[#413831] transition-colors cursor-pointer"
          >
            Open Sizing Table
          </button>
          <button
            onClick={onNavigateToContact}
            className="px-5 py-2.5 bg-white border border-[#ded0ba] text-[#1b1714] text-xs font-semibold rounded-full hover:border-[#1b1714] transition-colors cursor-pointer"
          >
            Ask Fit Advice
          </button>
        </div>
      </section>
    </div>
  );
};
