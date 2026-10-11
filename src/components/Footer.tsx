import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'shop' | 'about' | 'strategy' | 'contact') => void;
  onOpenSizeGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  const handleNav = (page: 'home' | 'shop' | 'about' | 'strategy' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f2ece2] border-t border-[#e3dacd] pt-16 pb-10 text-[#1b1714]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#e3dacd]">
          {/* Brand Column */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5 text-[#c05f3c]"
                aria-hidden="true"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
                <path d="M8 3v18M16 3v18" />
              </svg>
              <span className="font-display font-semibold text-lg tracking-tight">
                Loom &amp; Lane
              </span>
            </div>
            <p className="text-xs text-[#6e6259] leading-relaxed">
              Thoughtfully designed everyday clothing, crafted in fair-wage mills with organic cotton and traceable merino. Made to outlast fast-fashion cycles.
            </p>
            <p className="text-[11px] text-[#6e6259]/80 font-medium">
              Bengaluru &amp; Mumbai, India
            </p>
          </div>

          {/* Collection & Fit */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6e6259] mb-3.5">
              Collection &amp; Fit
            </h4>
            <ul className="space-y-2.5 text-xs text-[#413831]">
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  The Essentials Edit (10 Pieces)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  Organic Tops &amp; Knits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  Outerwear &amp; Trousers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleNav('shop');
                    if (onOpenSizeGuide) onOpenSizeGuide();
                  }}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  Garment Sizing Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Brand & Approach (Strategy accessible here as a subtle link) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6e6259] mb-3.5">
              Brand &amp; Philosophy
            </h4>
            <ul className="space-y-2.5 text-xs text-[#413831]">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  Origin Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  5-Step Traceability Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('strategy')}
                  className="hover:text-[#c05f3c] transition-colors text-left font-medium"
                >
                  Brand Strategy &amp; Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#c05f3c] transition-colors text-left"
                >
                  Lifetime Care &amp; Repairs
                </button>
              </li>
            </ul>
          </div>

          {/* Studios & Touchpoints */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6e6259] mb-3.5">
              Tactile Studios
            </h4>
            <ul className="space-y-2.5 text-xs text-[#413831] leading-relaxed">
              <li>
                <strong className="text-[#1b1714]">Bengaluru Atelier:</strong> 14, 7th Cross, Indiranagar 560038
              </li>
              <li>
                <strong className="text-[#1b1714]">Mumbai Atelier:</strong> Unit 3, Pali Naka, Bandra West 400050
              </li>
              <li>
                <span className="text-[#6e6259]">Mon – Sat: 10:00 AM – 7:00 PM IST</span>
              </li>
              <li className="pt-1">
                <a
                  href="mailto:hello@loomandlane.example"
                  className="text-xs font-semibold text-[#c05f3c] hover:underline"
                >
                  hello@loomandlane.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Baseline (Zero academic references, clean commercial footer) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6259]">
          <p>© {new Date().getFullYear()} Loom &amp; Lane. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>GOTS-Certified Organic</span>
            <span aria-hidden="true" className="text-[#ded0ba]">·</span>
            <span>Plastic-Free Packaging</span>
            <span aria-hidden="true" className="text-[#ded0ba]">·</span>
            <span>Carbon-Neutral Delivery</span>
            <span aria-hidden="true" className="text-[#ded0ba]">·</span>
            <button
              onClick={() => handleNav('strategy')}
              className="text-[#6e6259] hover:text-[#1b1714] underline"
            >
              Our Approach
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
