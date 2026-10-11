import React, { useState } from 'react';
import { X, Ruler, HelpCircle } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [fitPreference, setFitPreference] = useState<'fitted' | 'standard' | 'relaxed'>('standard');

  if (!isOpen) return null;

  const sizeChartInches = [
    { size: 'XS', chest: 36, waist: 29, shoulder: 16.5, length: 26 },
    { size: 'S', chest: 38, waist: 31, shoulder: 17.2, length: 27 },
    { size: 'M', chest: 40, waist: 33, shoulder: 18.0, length: 28 },
    { size: 'L', chest: 43, waist: 36, shoulder: 18.8, length: 29 },
    { size: 'XL', chest: 46, waist: 39, shoulder: 19.6, length: 30 },
    { size: 'XXL', chest: 49, waist: 42, shoulder: 20.4, length: 30.5 },
  ];

  const formatVal = (num: number) => {
    if (unit === 'in') return `${num}"`;
    return `${Math.round(num * 2.54)} cm`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1714]/65 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-title"
    >
      <div className="bg-[#faf7f2] border border-[#e3dacd] rounded-2xl max-w-2xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#e3dacd]">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#c05f3c]" />
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-[#c05f3c] uppercase">
                Garment Dimensions
              </span>
              <h3 id="size-title" className="font-display text-xl font-semibold text-[#1b1714]">
                Buy Once, Fit Right
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#ded0ba]/50 text-[#1b1714] transition-colors"
            aria-label="Close size guide modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-6">
          <p className="text-xs text-[#6e6259] leading-relaxed">
            Every measurement is recorded from the <em>finished, relaxed garment laid flat</em>, not an idealized body mannequin. Comparing these exact dimensions against your favorite-fitting shirt at home guarantees an accurate fit.
          </p>

          {/* Unit Toggle & Fit Preference */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#f2ece2] p-3 rounded-lg border border-[#e3dacd] text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1b1714]">Measurement Unit:</span>
              <div className="inline-flex rounded-md border border-[#ded0ba] bg-white p-0.5">
                <button
                  onClick={() => setUnit('in')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                    unit === 'in' ? 'bg-[#1b1714] text-white' : 'text-[#6e6259]'
                  }`}
                >
                  Inches
                </button>
                <button
                  onClick={() => setUnit('cm')}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                    unit === 'cm' ? 'bg-[#1b1714] text-white' : 'text-[#6e6259]'
                  }`}
                >
                  Centimetres
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#6e6259]">Fit Profile:</span>
              <div className="inline-flex gap-1">
                {(['fitted', 'standard', 'relaxed'] as const).map((profile) => (
                  <button
                    key={profile}
                    onClick={() => setFitPreference(profile)}
                    className={`px-2.5 py-1 rounded text-[11px] capitalize font-medium transition-colors ${
                      fitPreference === profile
                        ? 'bg-[#c05f3c] text-white font-semibold'
                        : 'bg-white text-[#413831] border border-[#ded0ba]'
                    }`}
                  >
                    {profile}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sizing Table */}
          <div className="overflow-x-auto border border-[#e3dacd] rounded-xl bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f2ece2] border-b border-[#e3dacd] text-[#6e6259] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-semibold">Size</th>
                  <th className="py-3 px-4 font-semibold">Chest</th>
                  <th className="py-3 px-4 font-semibold">Waist</th>
                  <th className="py-3 px-4 font-semibold">Shoulder</th>
                  <th className="py-3 px-4 font-semibold">Length</th>
                  <th className="py-3 px-4 font-semibold">Best Fit Advice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3dacd] tabular-nums">
                {sizeChartInches.map((row) => (
                  <tr key={row.size} className="hover:bg-[#faf7f2] transition-colors">
                    <td className="py-2.5 px-4 font-bold text-[#1b1714]">{row.size}</td>
                    <td className="py-2.5 px-4 font-medium">{formatVal(row.chest)}</td>
                    <td className="py-2.5 px-4">{formatVal(row.waist)}</td>
                    <td className="py-2.5 px-4">{formatVal(row.shoulder)}</td>
                    <td className="py-2.5 px-4">{formatVal(row.length)}</td>
                    <td className="py-2.5 px-4 text-[#6e6259] text-[11px] non-tabular">
                      {row.size === 'S' || row.size === 'M'
                        ? 'Most common true-to-size fit'
                        : row.size === 'XS'
                        ? 'Slim athletic silhouette'
                        : 'Roomy chest with drape'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sizing Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#413831]">
            <div className="p-3 bg-[#f2ece2] rounded-lg border border-[#e3dacd]">
              <strong className="block text-[#1b1714] font-semibold mb-1">Between sizes?</strong>
              <p className="m-0 text-[#6e6259]">
                Size down for fine knitwear (merino relaxes slightly with warmth), or size up for outerwear and canvas jackets if you intend to layer thick sweaters.
              </p>
            </div>
            <div className="p-3 bg-[#f2ece2] rounded-lg border border-[#e3dacd]">
              <strong className="block text-[#1b1714] font-semibold mb-1">Free Alterations in Studio</strong>
              <p className="m-0 text-[#6e6259]">
                Drop by our Indiranagar or Bandra studios anytime with your order for complimentary hem and sleeve tailoring while you wait.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#e3dacd] flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="text-xs text-[#c05f3c] font-semibold hover:underline flex items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Still unsure? Ask our fitting team
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#1b1714] text-white text-xs font-semibold rounded-full hover:bg-[#413831] transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
