import React, { useState } from 'react';
import { X, Sparkles, PieChart, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface CostPerWearModalProps {
  product: Product | null;
  onClose: () => void;
}

export const CostPerWearModal: React.FC<CostPerWearModalProps> = ({ product, onClose }) => {
  const [wearsPerYear, setWearsPerYear] = useState<number>(50);
  const [yearsKept, setYearsKept] = useState<number>(5);

  if (!product) return null;

  const totalWears = Math.max(1, wearsPerYear * yearsKept);
  const calculatedCpw = (product.price / totalWears).toFixed(2);
  const fastFashionCpw = ((599 * 5) / (12 * 5)).toFixed(2); // Buying 5 disposable shirts over 5 years

  const { breakdown } = product;
  const totalCost = breakdown.materialsAndLabour + breakdown.transportAndPackaging + breakdown.operationalOverhead + breakdown.brandMargin;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1714]/65 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cpw-title"
    >
      <div className="bg-[#faf7f2] border border-[#e3dacd] rounded-2xl max-w-xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#e3dacd]">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-[#c05f3c] uppercase">
              Radical Transparency
            </span>
            <h3 id="cpw-title" className="font-display text-xl font-semibold text-[#1b1714]">
              {product.name} — Cost Breakdown
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#ded0ba]/50 text-[#1b1714] transition-colors"
            aria-label="Close cost per wear modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-6">
          {/* Cost-Per-Wear Calculator */}
          <div className="bg-[#f2ece2] p-5 rounded-xl border border-[#e3dacd]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display text-sm font-semibold text-[#1b1714]">
                Interactive Cost-Per-Wear (CPW)
              </h4>
              <span className="text-xs bg-[#c05f3c] text-white px-2 py-0.5 rounded-full font-semibold">
                ₹{calculatedCpw} / wear
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#6e6259] font-medium mb-1">
                  Wears per Year: <span className="text-[#1b1714] font-bold">{wearsPerYear} days</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="120"
                  step="5"
                  value={wearsPerYear}
                  onChange={(e) => setWearsPerYear(Number(e.target.value))}
                  className="w-full accent-[#c05f3c]"
                />
                <span className="text-[10px] text-[#6e6259]">Approx. once a week = 50 wears</span>
              </div>

              <div>
                <label className="block text-[#6e6259] font-medium mb-1">
                  Years Kept &amp; Repaired: <span className="text-[#1b1714] font-bold">{yearsKept} years</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={yearsKept}
                  onChange={(e) => setYearsKept(Number(e.target.value))}
                  className="w-full accent-[#c05f3c]"
                />
                <span className="text-[10px] text-[#6e6259]">Backed by free lifetime repairs</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#ded0ba] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
              <div className="text-[#413831]">
                Total Estimated Lifetime Wears: <strong className="text-[#1b1714]">{totalWears} times</strong>
              </div>
              <div className="text-[11px] text-[#6e6259]">
                vs Fast-Fashion equivalent: <span className="line-through">₹{fastFashionCpw}/wear</span>
              </div>
            </div>
          </div>

          {/* Transparent Itemized Price Breakdown */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PieChart className="w-4 h-4 text-[#c05f3c]" />
              <h4 className="font-display text-sm font-semibold text-[#1b1714]">
                Where Every Rupee Goes (Retail: ₹{product.price.toLocaleString('en-IN')})
              </h4>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between text-[#413831] mb-1">
                  <span>Organic Materials &amp; Fair Machinist Wages (1.8× min)</span>
                  <span className="font-semibold tabular-nums">
                    ₹{breakdown.materialsAndLabour} ({Math.round((breakdown.materialsAndLabour / totalCost) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-[#ded0ba]/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6b7f6e]"
                    style={{ width: `${(breakdown.materialsAndLabour / totalCost) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#413831] mb-1">
                  <span>Carbon-Neutral Transport &amp; Plastic-Free Packaging</span>
                  <span className="font-semibold tabular-nums">
                    ₹{breakdown.transportAndPackaging} ({Math.round((breakdown.transportAndPackaging / totalCost) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-[#ded0ba]/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c05f3c]"
                    style={{ width: `${(breakdown.transportAndPackaging / totalCost) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#413831] mb-1">
                  <span>Sensory Studios, SA8000 Audits &amp; R&amp;D</span>
                  <span className="font-semibold tabular-nums">
                    ₹{breakdown.operationalOverhead} ({Math.round((breakdown.operationalOverhead / totalCost) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-[#ded0ba]/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#a44c2c]"
                    style={{ width: `${(breakdown.operationalOverhead / totalCost) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#413831] mb-1">
                  <span>Loom &amp; Lane Operating Margin (Funds Lifetime Mending)</span>
                  <span className="font-semibold tabular-nums">
                    ₹{breakdown.brandMargin} ({Math.round((breakdown.brandMargin / totalCost) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-[#ded0ba]/60 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1b1714]"
                    style={{ width: `${(breakdown.brandMargin / totalCost) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-[#ffffff] p-3.5 rounded-lg border border-[#e3dacd] flex items-center gap-3 text-xs text-[#6e6259]">
            <ShieldCheck className="w-5 h-5 text-[#6b7f6e] shrink-0" />
            <p className="m-0 leading-tight">
              We publish our margins publicly because true sustainability begins with honesty. No hidden markups, no artificial sales inflated to look discounted.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e3dacd] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1b1714] text-white text-xs font-semibold rounded-full hover:bg-[#413831] transition-colors"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};
