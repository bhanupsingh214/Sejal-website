import React, { useState } from 'react';
import {
  Target,
  Layers,
  TrendingUp,
  Search,
  Share2,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Compass
} from 'lucide-react';
import {
  STP_DATA,
  POSITIONING_STATEMENT,
  MARKETING_MIX_4PS,
  FUNNEL_STAGES,
  SEO_KEYWORD_STRATEGY,
  SOCIAL_MEDIA_PLAN,
  KPI_METRICS_DASHBOARD
} from '../data/strategy';

type StrategyTab = 'stp' | '4ps' | 'funnel' | 'seo' | 'social' | 'kpis';

export const StrategyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StrategyTab>('stp');

  const tabs = [
    { id: 'stp', label: 'STP Architecture', icon: Target },
    { id: '4ps', label: 'Marketing Mix (4Ps)', icon: Layers },
    { id: 'funnel', label: 'Acquisition Funnel', icon: TrendingUp },
    { id: 'seo', label: 'Search & Content', icon: Search },
    { id: 'social', label: 'Social Architecture', icon: Share2 },
    { id: 'kpis', label: 'Operational KPIs', icon: BarChart3 },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="space-y-4 pb-6 border-b border-[#e3dacd]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2ece2] border border-[#ded0ba] rounded-full text-xs text-[#413831] font-medium">
          <Compass className="w-3.5 h-3.5 text-[#c05f3c]" />
          <span>Brand Blueprint &amp; Go-to-Market Model</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1b1714]">
          Strategic Brand Architecture
        </h1>

        <p className="text-sm sm:text-base text-[#6e6259] max-w-3xl leading-relaxed">
          The operational model of Loom &amp; Lane: disciplined audience targeting, transparent price framing,
          the 4Ps mix, organic acquisition planning, search engine content strategy, and long-term customer retention.
        </p>
      </div>

      {/* Interactive Framework Tab Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e3dacd]" role="tablist">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as StrategyTab)}
              role="tab"
              aria-selected={isActive}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1b1714] text-[#faf7f2] shadow-xs'
                  : 'bg-white text-[#6e6259] hover:bg-[#f2ece2] hover:text-[#1b1714] border border-[#e3dacd]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#c05f3c]' : 'text-[#6e6259]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: STP ANALYSIS */}
      {activeTab === 'stp' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Targeting Discipline
            </span>
            <h2 className="font-display text-2xl font-semibold text-[#1b1714] mt-1">
              Segmentation, Targeting &amp; Positioning (STP)
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] max-w-2xl mt-1 leading-relaxed">
              We do not design for the trend-driven mass consumer. Our core audience prioritizes provenance,
              durability, and honest pricing over ephemeral logos.
            </p>
          </div>

          {/* Positioning Statement Card */}
          <div className="bg-[#f2ece2] p-6 sm:p-8 rounded-2xl border border-[#e3dacd] space-y-3">
            <span className="text-[11px] font-bold text-[#c05f3c] uppercase tracking-wider">
              Brand Positioning Statement
            </span>
            <blockquote className="font-display text-lg sm:text-xl text-[#1b1714] leading-relaxed italic">
              "{POSITIONING_STATEMENT.target} <strong className="text-[#c05f3c] not-italic">{POSITIONING_STATEMENT.brand}</strong> {POSITIONING_STATEMENT.category} {POSITIONING_STATEMENT.benefit} {POSITIONING_STATEMENT.reasonToBelieve}"
            </blockquote>
          </div>

          {/* STP Table */}
          <div className="overflow-x-auto border border-[#e3dacd] rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f2ece2] border-b border-[#e3dacd] text-[#6e6259] uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-semibold w-1/5">Dimension</th>
                  <th className="py-3.5 px-4 font-semibold w-2/5">Target Audience</th>
                  <th className="py-3.5 px-4 font-semibold w-2/5 text-[#a44c2c]">Deliberate Negative Persona</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3dacd]">
                {STP_DATA.map((row) => (
                  <tr key={row.dimension} className="hover:bg-[#faf7f2] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#1b1714] align-top bg-[#f2ece2]/40">
                      {row.dimension}
                      <p className="text-[10px] text-[#6e6259] font-normal mt-1 leading-normal">
                        {row.strategicRationale}
                      </p>
                    </td>
                    <td className="py-4 px-4 text-[#413831] leading-relaxed align-top">
                      {row.target}
                    </td>
                    <td className="py-4 px-4 text-[#6e6259] leading-relaxed align-top bg-red-50/20">
                      {row.deliberatelyNotUs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* TAB 2: MARKETING MIX (4Ps) */}
      {activeTab === '4ps' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Operational Framework
            </span>
            <h2 className="font-display text-2xl font-semibold text-[#1b1714] mt-1">
              The Marketing Mix (4Ps)
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] max-w-2xl mt-1 leading-relaxed">
              Every decision across Product, Price, Place, and Promotion is engineered to eliminate dead stock,
              preserve fair mill wages, and build high customer repeat value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MARKETING_MIX_4PS.map((item) => (
              <div
                key={item.p}
                className="bg-white border border-[#e3dacd] rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#f2ece2]">
                    <span className="font-display font-semibold text-lg text-[#1b1714]">
                      {item.p}: {item.title}
                    </span>
                    <span className="text-xs font-bold text-[#c05f3c] bg-[#c05f3c]/10 px-2.5 py-0.5 rounded-full">
                      Pillar #{item.p === 'Product' ? '1' : item.p === 'Price' ? '2' : item.p === 'Place' ? '3' : '4'}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <strong className="text-[#1b1714] block mb-0.5">Core Principle:</strong>
                      <p className="text-[#413831] leading-relaxed m-0">{item.decision}</p>
                    </div>

                    <div className="pt-2">
                      <strong className="text-[#1b1714] block mb-0.5">Customer &amp; Brand Impact:</strong>
                      <p className="text-[#6e6259] leading-relaxed m-0">{item.why}</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#f2ece2] rounded-xl border border-[#ded0ba] text-[11px] text-[#413831]">
                  <strong className="text-[#1b1714]">Operational Benefit: </strong>
                  {item.mbaRationale}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: ACQUISITION FUNNEL */}
      {activeTab === 'funnel' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Channel Economics
            </span>
            <h2 className="font-display text-2xl font-semibold text-[#1b1714] mt-1">
              Customer Acquisition Funnel (AIDA + Loyalty)
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] max-w-2xl mt-1 leading-relaxed">
              Budget allocation follows the customer journey: <strong>55%</strong> to organic educational content &amp; search,
              <strong>30%</strong> to lifecycle retention and mending, and <strong>15%</strong> to paid retargeting.
            </p>
          </div>

          <div className="space-y-4">
            {FUNNEL_STAGES.map((stage, idx) => (
              <div
                key={stage.stage}
                className="bg-white border border-[#e3dacd] rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              >
                <div className="lg:w-1/4">
                  <span className="text-[10px] font-bold text-[#c05f3c] uppercase tracking-wider">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#1b1714]">
                    {stage.stage}
                  </h3>
                  <span className="text-xs font-semibold text-[#6b7f6e] bg-[#6b7f6e]/10 px-2 py-0.5 rounded-full inline-block mt-1">
                    {stage.budgetShare}
                  </span>
                </div>

                <div className="lg:w-1/2 space-y-2 text-xs">
                  <p className="text-[#1b1714] font-medium leading-relaxed m-0">
                    <strong>Objective:</strong> {stage.goal}
                  </p>
                  <p className="text-[#6e6259] leading-relaxed m-0">
                    <strong>Tactics:</strong> {stage.keyTactics}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {stage.primaryChannels.map((ch) => (
                      <span
                        key={ch}
                        className="bg-[#f2ece2] text-[#413831] px-2 py-0.5 rounded text-[10px] font-medium"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/4 p-3 bg-[#faf7f2] rounded-xl border border-[#ded0ba] text-[11px] text-[#413831] self-stretch flex flex-col justify-center">
                  <strong className="text-[#1b1714] block mb-1">Target Metrics:</strong>
                  <span className="text-[#6e6259]">{stage.kpis}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 4: SEARCH & CONTENT */}
      {activeTab === 'seo' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Organic Inbound
            </span>
            <h2 className="font-display text-2xl font-semibold text-[#1b1714] mt-1">
              Search Engine &amp; Content Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] max-w-2xl mt-1 leading-relaxed">
              Sustainability claims require evidence to rank and convert. High-intent editorial search guides
              drive compounding traffic without relying on continuous advertising spend.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#e3dacd] rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f2ece2] border-b border-[#e3dacd] text-[#6e6259] uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-semibold">Cluster Focus</th>
                  <th className="py-3 px-4 font-semibold">Primary Keyword</th>
                  <th className="py-3 px-4 font-semibold">Search Intent</th>
                  <th className="py-3 px-4 font-semibold">Est. Monthly Volume</th>
                  <th className="py-3 px-4 font-semibold">Content Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3dacd]">
                {SEO_KEYWORD_STRATEGY.map((row) => (
                  <tr key={row.targetKeyword} className="hover:bg-[#faf7f2] transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#1b1714]">{row.cluster}</td>
                    <td className="py-3 px-4 font-mono text-[#c05f3c] font-semibold">
                      "{row.targetKeyword}"
                    </td>
                    <td className="py-3 px-4 text-[#413831]">{row.searchIntent}</td>
                    <td className="py-3 px-4 tabular-nums font-semibold text-[#1b1714]">
                      {row.monthlyVolumeIndia}
                    </td>
                    <td className="py-3 px-4 text-[#6e6259] max-w-xs">{row.contentHook}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="bg-[#f2ece2] p-5 rounded-2xl border border-[#e3dacd] space-y-2 text-xs">
              <strong className="text-sm font-display text-[#1b1714] block">On-Page Schema</strong>
              <p className="text-[#6e6259]">
                Structured JSON-LD schema with materials provenance, product ratings, and price transparency metadata.
              </p>
            </div>
            <div className="bg-[#f2ece2] p-5 rounded-2xl border border-[#e3dacd] space-y-2 text-xs">
              <strong className="text-sm font-display text-[#1b1714] block">Editorial Pillars</strong>
              <p className="text-[#6e6259]">
                Supply-chain audits, cost-per-wear comparisons, and garment mending masterclasses.
              </p>
            </div>
            <div className="bg-[#f2ece2] p-5 rounded-2xl border border-[#e3dacd] space-y-2 text-xs">
              <strong className="text-sm font-display text-[#1b1714] block">Core Web Vitals</strong>
              <p className="text-[#6e6259]">
                Sub-800ms loading speeds, mobile-first responsiveness, and zero unnecessary script bloat.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* TAB 5: SOCIAL ARCHITECTURE */}
      {activeTab === 'social' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Community Engagement
            </span>
            <h2 className="font-display text-2xl font-semibold text-[#1b1714] mt-1">
              Social Media Strategy &amp; Channels
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] max-w-2xl mt-1 leading-relaxed">
              A documentary approach focused on craftsmanship and long-term wardrobe styling rather than flash-sale urgency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOCIAL_MEDIA_PLAN.map((plan) => (
              <div
                key={plan.platform}
                className="bg-white border border-[#e3dacd] rounded-2xl p-6 shadow-xs space-y-3"
              >
                <div className="flex justify-between items-center pb-3 border-b border-[#f2ece2]">
                  <h3 className="font-display font-semibold text-lg text-[#1b1714]">
                    {plan.platform}
                  </h3>
                  <span className="text-xs font-semibold text-[#6e6259] bg-[#f2ece2] px-2.5 py-1 rounded-full">
                    {plan.cadence}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[#6e6259] block font-medium">Audience Focus:</span>
                    <strong className="text-[#1b1714]">{plan.audienceFocus}</strong>
                  </div>

                  <div>
                    <span className="text-[#6e6259] block font-medium">Content Themes:</span>
                    <p className="text-[#413831] m-0 leading-relaxed">{plan.contentPillars}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[#6e6259] block font-medium">Brand Voice:</span>
                    <p className="text-[#c05f3c] font-medium m-0">{plan.tone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 6: OPERATIONAL KPIS */}
      {activeTab === 'kpis' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Business Health
            </span>
            <h2 className="font-display text-2xl font-semibold text-[#1b1714] mt-1">
              Key Performance Indicators
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] max-w-2xl mt-1 leading-relaxed">
              The metrics driving the Loom &amp; Lane model: repeat order velocity, low return rates,
              and sustainable unit economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KPI_METRICS_DASHBOARD.map((kpi) => (
              <div
                key={kpi.label}
                className="bg-white border border-[#e3dacd] rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6e6259]">
                    {kpi.label}
                  </span>
                  <div className="font-display text-3xl font-semibold text-[#1b1714] mt-1 tabular-nums">
                    {kpi.value}
                  </div>
                  <div className="text-[11px] text-[#6b7f6e] font-semibold mt-1">
                    {kpi.benchmark} · {kpi.status}
                  </div>
                </div>

                <p className="text-xs text-[#6e6259] leading-relaxed pt-3 border-t border-[#f2ece2] m-0">
                  {kpi.insight}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#f2ece2] p-6 rounded-2xl border border-[#e3dacd] text-xs text-[#413831] space-y-2">
            <strong className="text-sm font-display text-[#1b1714] block">
              Strategic Summary
            </strong>
            <p className="leading-relaxed m-0">
              By combining high fabric construction standards, living mill wages, transparent pricing,
              and lifetime repair commitments, Loom &amp; Lane creates a resilient direct-to-consumer model.
              The high repeat purchase rate and low return rate sustain fair craft compensation while
              delivering enduring value to wearers.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
