import React, { useState } from 'react';
import { Check, ShieldCheck, MapPin, Award, Search, Sparkles, ArrowRight } from 'lucide-react';
import { TRACEABILITY_STEPS, BATCH_LOOKUP_DEMO } from '../data/traceability';
import { ATELIER_STORY_IMAGE } from '../data/products';

interface AboutPageProps {
  onNavigateToShop: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToShop,
  onNavigateToContact,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [batchCodeInput, setBatchCodeInput] = useState('LL-2026-TIR-084');
  const [inspectedBatch, setInspectedBatch] = useState<typeof BATCH_LOOKUP_DEMO | null>(BATCH_LOOKUP_DEMO);

  const handleInspect = (e: React.FormEvent) => {
    e.preventDefault();
    setInspectedBatch(BATCH_LOOKUP_DEMO);
  };

  return (
    <div className="space-y-24 pb-24">
      {/* ===== HERO / ORIGIN STORY ===== */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c05f3c] block">
                Our Story &amp; Philosophy
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1b1714] leading-[1.12]">
                We started with one simple question.
              </h1>
              <p className="text-lg text-[#6e6259] italic font-display border-l-2 border-[#c05f3c] pl-4">
                "Why does a t-shirt cost less than a cup of coffee, and who pays the difference?"
              </p>
              <div className="text-sm text-[#413831] space-y-4 leading-relaxed">
                <p>
                  Loom &amp; Lane began in 2023 with a journey through the textile corridors of Vidarbha and Tiruppur.
                  We encountered master spinners, knitters, and tailors doing generational, skilled work — alongside
                  a fast-fashion machine forcing prices down to unsustainable extremes.
                </p>
                <p>
                  We built Loom &amp; Lane as a thoughtful counter-model: fewer pieces, transparent costs, fair wages,
                  and garments built to last a decade. The most sustainable piece of clothing is always the one you
                  wear hundreds of times and never throw away.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-[#413831]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                  <span>Pre-shrunk &amp; wash-tested 30 times before production</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                  <span>Reinforced stress points &amp; natural corozo nut buttons</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                  <span>Complete price breakdown on every piece</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                  <span>Free lifetime repairs and circular recycling</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#f2ece2] border border-[#e3dacd] shadow-md relative">
                <img
                  src={ATELIER_STORY_IMAGE}
                  alt="Weaving loom and artisan textile atelier"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#e3dacd] text-xs">
                  <div className="flex justify-between font-semibold text-[#1b1714]">
                    <span>Atelier Standards</span>
                    <span className="text-[#6b7f6e]">Fair-Wage Partner</span>
                  </div>
                  <p className="text-[11px] text-[#6e6259] mt-1 m-0">
                    48 skilled craftspeople earning living wages on permanent contracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY APPROACH ===== */}
      <section className="bg-[#f2ece2] py-16 border-y border-[#e3dacd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Sustainability Approach
            </span>
            <h2 className="font-display text-3xl font-semibold text-[#1b1714] mt-1">
              Fewer, better, traceable
            </h2>
            <p className="text-sm text-[#6e6259] mt-2">
              Our guiding principles: environmental care, fair compensation, and enduring circularity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#e3dacd] shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#c05f3c] uppercase tracking-wider">
                01 · Agriculture
              </span>
              <h3 className="font-display text-xl font-semibold text-[#1b1714]">
                Grown without poison
              </h3>
              <p className="text-xs text-[#6e6259] leading-relaxed">
                Conventional cotton relies heavily on chemical pesticides. Every thread of Loom &amp; Lane cotton
                is organic, grown using rain-fed monsoon irrigation across Vidarbha with zero synthetic insecticides.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#1b1714]">
                ✓ GOTS-Certified Organic Cotton
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#e3dacd] shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#c05f3c] uppercase tracking-wider">
                02 · Human Craft
              </span>
              <h3 className="font-display text-xl font-semibold text-[#1b1714]">
                People paid properly
              </h3>
              <p className="text-xs text-[#6e6259] leading-relaxed">
                Cheap garments exist only when human beings are undercompensated. Our partner mills guarantee 1.8×
                the regional statutory minimum wage, verified twice annually by independent audits.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#1b1714]">
                ✓ 1.8× Statutory Minimum Wage
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#e3dacd] shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#c05f3c] uppercase tracking-wider">
                03 · Circular Care
              </span>
              <h3 className="font-display text-xl font-semibold text-[#1b1714]">
                Mended, not binned
              </h3>
              <p className="text-xs text-[#6e6259] leading-relaxed">
                We provide free lifetime mending for all seams, popped stitches, buttons, and tears.
                Return anything genuinely worn out after a decade and we recycle it into new yarn with ₹400 store credit.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#1b1714]">
                ✓ Free repairs for life · ₹400 trade-in credit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5-STEP TRACEABILITY JOURNEY ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
            The Journey of Every Thread
          </span>
          <h2 className="font-display text-3xl font-semibold text-[#1b1714] mt-1">
            Where your garment comes from
          </h2>
          <p className="text-sm text-[#6e6259] mt-2 leading-relaxed">
            Five clear stages from seed to final packaging. We document every partner, farm cooperative, and mill.
          </p>
        </div>

        {/* Stage Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {TRACEABILITY_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#c05f3c] shadow-xs ring-1 ring-[#c05f3c]/20'
                      : 'bg-[#f2ece2] border-[#e3dacd] hover:bg-white text-[#413831]'
                  }`}
                >
                  <span
                    className={`font-display font-semibold text-lg ${
                      isSelected ? 'text-[#c05f3c]' : 'text-[#6e6259]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-sm text-[#1b1714]">
                        {step.stage}
                      </h3>
                      <span className="text-[10px] font-semibold text-[#6e6259] uppercase tracking-wider">
                        {step.location.split(',')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-[#6e6259] mt-0.5 line-clamp-1">{step.facility}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Card */}
          <div className="lg:col-span-7 bg-white border border-[#e3dacd] rounded-2xl p-7 shadow-xs space-y-6">
            {(() => {
              const active = TRACEABILITY_STEPS[activeStepIndex];
              return (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#e3dacd]">
                    <div>
                      <span className="text-[11px] font-bold text-[#c05f3c] uppercase tracking-wider">
                        Step {active.step} · {active.stage}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-[#1b1714] mt-0.5">
                        {active.facility}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold bg-[#6b7f6e]/15 text-[#6b7f6e] px-3 py-1 rounded-full">
                      {active.auditBadge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#6e6259]">
                    <MapPin className="w-3.5 h-3.5 text-[#c05f3c]" />
                    <span>Facility Location: <strong>{active.location}</strong></span>
                  </div>

                  <p className="text-sm text-[#413831] leading-relaxed">{active.summary}</p>

                  <div className="bg-[#f2ece2] p-4 rounded-xl border border-[#e3dacd] space-y-2">
                    <strong className="text-xs text-[#1b1714] block font-semibold">
                      Production &amp; Environmental Standards:
                    </strong>
                    <ul className="space-y-1.5 text-xs text-[#413831]">
                      {active.details.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c05f3c] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-[#faf7f2] border border-[#ded0ba] rounded-lg text-xs text-[#6e6259]">
                    <span className="text-[#1b1714] font-semibold">Standard: </span>
                    {active.highlight}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ===== BATCH LOOKUP SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#f2ece2] rounded-3xl p-8 sm:p-12 border border-[#e3dacd]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
                Product Traceability
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1b1714]">
                Trace Your Garment's Origin Batch
              </h2>
              <p className="text-xs sm:text-sm text-[#6e6259] leading-relaxed">
                Every Loom &amp; Lane garment has a woven batch code on its interior care label.
                Enter a sample code below to inspect the harvest cooperative, audit date, and water conservation details.
              </p>

              <form onSubmit={handleInspect} className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  value={batchCodeInput}
                  onChange={(e) => setBatchCodeInput(e.target.value)}
                  placeholder="e.g. LL-2026-TIR-084"
                  className="flex-1 text-xs px-3.5 py-2.5 bg-white border border-[#ded0ba] rounded-lg font-mono focus:outline-none focus:border-[#c05f3c]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#1b1714] text-white text-xs font-semibold rounded-lg hover:bg-[#c05f3c] transition-colors cursor-pointer"
                >
                  Inspect
                </button>
              </form>
            </div>

            <div className="lg:col-span-6">
              {inspectedBatch && (
                <div className="bg-white border border-[#e3dacd] rounded-2xl p-6 shadow-xs space-y-4">
                  <div className="flex justify-between items-start border-b border-[#f2ece2] pb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#c05f3c] uppercase">
                        BATCH #{inspectedBatch.batchCode}
                      </span>
                      <h4 className="font-display font-semibold text-base text-[#1b1714]">
                        {inspectedBatch.productName}
                      </h4>
                    </div>
                    <span className="text-[11px] bg-[#6b7f6e]/15 text-[#6b7f6e] px-2.5 py-1 rounded font-semibold">
                      Verified Batch
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#6e6259] block text-[11px]">Organic Co-op:</span>
                      <strong className="text-[#1b1714] font-mono">{inspectedBatch.coopId}</strong>
                    </div>
                    <div>
                      <span className="text-[#6e6259] block text-[11px]">Harvest Period:</span>
                      <strong className="text-[#1b1714]">{inspectedBatch.harvestDate}</strong>
                    </div>
                    <div>
                      <span className="text-[#6e6259] block text-[11px]">Audit Date:</span>
                      <strong className="text-[#1b1714]">{inspectedBatch.millAuditDate}</strong>
                    </div>
                    <div>
                      <span className="text-[#6e6259] block text-[11px]">Water Saved vs Conventional:</span>
                      <strong className="text-[#6b7f6e] font-semibold">{inspectedBatch.waterSavedVsConventional}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Action Footer Callout */}
      <section className="text-center max-w-xl mx-auto px-4 space-y-4">
        <h3 className="font-display text-2xl font-semibold text-[#1b1714]">
          Wear clothes you can believe in.
        </h3>
        <p className="text-xs text-[#6e6259]">
          Browse our ten timeless pieces or visit our Indiranagar and Bandra studios for a complimentary fit trial.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={onNavigateToShop}
            className="px-6 py-2.5 bg-[#c05f3c] text-white text-xs font-semibold rounded-full hover:bg-[#a44c2c] transition-colors cursor-pointer"
          >
            Explore the Collection
          </button>
          <button
            onClick={onNavigateToContact}
            className="px-6 py-2.5 bg-white border border-[#1b1714] text-[#1b1714] text-xs font-semibold rounded-full hover:bg-[#1b1714] hover:text-white transition-colors cursor-pointer"
          >
            Studio Locations
          </button>
        </div>
      </section>
    </div>
  );
};
