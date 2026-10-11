import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'shop' | 'about' | 'strategy' | 'contact';
  onNavigate: (page: 'home' | 'shop' | 'about' | 'strategy' | 'contact') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exactly the 4 customer-facing store navigation items (Marketing Strategy moved to subtle footer)
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (pageId: typeof navItems[number]['id'] | 'strategy') => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Subtle, Tasteful Announcement Bar */}
      <div className="bg-[#1b1714] text-[#faf7f2] text-xs sm:text-[13px] tracking-wide text-center py-2 px-4 font-normal">
        <span>Thoughtfully made. Designed to last.</span>
        <span className="hidden sm:inline mx-3 text-[#e3dacd]/40">|</span>
        <span className="hidden sm:inline text-[#e3dacd]/90">
          Complimentary shipping on orders over ₹1,999
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e3dacd] transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left text-inherit cursor-pointer group shrink-0"
            aria-label="Loom & Lane Home"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="w-6 h-6 text-[#c05f3c] transition-transform group-hover:scale-105"
              aria-hidden="true"
            >
              <path d="M3 7h18M3 12h18M3 17h18" />
              <path d="M8 3v18M16 3v18" />
            </svg>
            <span className="font-display font-semibold text-xl tracking-tight text-[#1b1714]">
              Loom &amp; Lane
            </span>
          </button>

          {/* Zone 2: Clean 4 Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[14px] tracking-tight py-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#1b1714] font-semibold'
                      : 'text-[#6e6259] font-medium hover:text-[#1b1714]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c05f3c] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Shopping Bag Icon + Item Count & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#1b1714] text-[#1b1714] text-xs font-semibold hover:bg-[#1b1714] hover:text-[#faf7f2] transition-colors cursor-pointer whitespace-nowrap shrink-0 group"
              aria-label={`Shopping Bag with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-current transition-transform group-hover:scale-110" />
              <span>Bag</span>
              <span className="bg-[#c05f3c] text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1b1714] hover:text-[#c05f3c] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e3dacd] bg-[#faf7f2] px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3.5" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base py-1.5 font-medium transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#c05f3c] font-semibold' : 'text-[#413831] hover:text-[#1b1714]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c05f3c]" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-[#e3dacd] flex items-center justify-between text-xs text-[#6e6259]">
                <span>Sizing questions or repair inquiries?</span>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="font-semibold text-[#c05f3c] hover:underline"
                >
                  Contact Ateliers →
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
