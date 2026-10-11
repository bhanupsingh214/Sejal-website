import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Wrench,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { FAQItem } from '../types';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Sizing and fit advice');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; topic: string } | null>(null);

  // FAQ category filter & accordion state
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('All');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-3': true });

  // Newsletter state
  const [nlEmail, setNlEmail] = useState('');
  const [nlSuccess, setNlSuccess] = useState(false);

  const faqCategories = [
    'All',
    'Orders & Shipping',
    'Repairs & Lifetime Care',
    'Transparency & Pricing',
    'Wholesale & Collaborations',
  ];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    if (selectedFaqCategory === 'All') return true;
    return item.category === selectedFaqCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length >= 2 && email.includes('@') && message.length >= 10) {
      setSubmittedData({ name, topic });
      setFormSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setTopic('Sizing and fit advice');
    setMessage('');
    setFormSubmitted(false);
    setSubmittedData(null);
  };

  const handleNlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nlEmail && nlEmail.includes('@')) {
      setNlSuccess(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      {/* Header */}
      <div className="pb-6 border-b border-[#e3dacd]">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c05f3c] block mb-1">
          Customer Care
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1b1714]">
          Talk to a real person
        </h1>
        <p className="text-sm sm:text-base text-[#6e6259] max-w-xl mt-1 leading-relaxed">
          No automated chatbots or ticket queues. Our small team answers every message personally,
          and we aim to reply within one business day.
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white border border-[#e3dacd] rounded-2xl p-6 sm:p-8 shadow-xs">
          <h2 className="font-display text-2xl font-semibold text-[#1b1714] mb-1">
            Send us a message
          </h2>
          <p className="text-xs text-[#6e6259] mb-6">
            For sizing advice, order support, repair requests, or studio appointments.
          </p>

          {formSubmitted && submittedData ? (
            <div className="py-8 text-center space-y-4 bg-[#f2ece2] rounded-xl border border-[#ded0ba] p-6 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-[#6b7f6e]/20 text-[#6b7f6e] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1b1714]">
                Message Received, {submittedData.name}
              </h3>
              <p className="text-xs text-[#413831] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out regarding <strong>"{submittedData.topic}"</strong>.
                Our team responds to inquiries within 24 business hours.
              </p>
              <p className="text-[11px] text-[#6e6259] max-w-xs mx-auto">
                Demonstrational contact form — submission validated locally.
              </p>
              <button
                onClick={handleResetForm}
                className="px-5 py-2 bg-[#1b1714] text-white text-xs font-semibold rounded-full hover:bg-[#c05f3c] transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitContact} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name-input" className="block font-semibold text-[#413831] mb-1">
                    Your Name <span className="text-[#c05f3c]">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    minLength={2}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full px-3.5 py-2.5 bg-[#faf7f2] border border-[#e3dacd] rounded-lg text-xs text-[#1b1714] focus:outline-none focus:border-[#c05f3c]"
                  />
                </div>

                <div>
                  <label htmlFor="email-input" className="block font-semibold text-[#413831] mb-1">
                    Email Address <span className="text-[#c05f3c]">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#faf7f2] border border-[#e3dacd] rounded-lg text-xs text-[#1b1714] focus:outline-none focus:border-[#c05f3c]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="topic-select" className="block font-semibold text-[#413831] mb-1">
                  Topic
                </label>
                <select
                  id="topic-select"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#faf7f2] border border-[#e3dacd] rounded-lg text-xs text-[#1b1714] focus:outline-none focus:border-[#c05f3c] cursor-pointer"
                >
                  <option value="Sizing and fit advice">Sizing and fit advice</option>
                  <option value="Order status & tracking">Order status &amp; tracking</option>
                  <option value="Free lifetime repair request">Free lifetime repair request</option>
                  <option value="Returns & exchanges">Returns &amp; exchanges</option>
                  <option value="Wholesale and stockists">Wholesale and stockist inquiries</option>
                  <option value="Studio appointment">Studio visit &amp; fit consultation</option>
                  <option value="Something else">General inquiry</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="msg-input" className="block font-semibold text-[#413831]">
                    Message <span className="text-[#c05f3c]">*</span>
                  </label>
                  <span className="text-[10px] text-[#6e6259]">
                    {message.length} characters (min 10)
                  </span>
                </div>
                <textarea
                  id="msg-input"
                  required
                  minLength={10}
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you need — the more detail the better."
                  className="w-full px-3.5 py-2.5 bg-[#faf7f2] border border-[#e3dacd] rounded-lg text-xs text-[#1b1714] focus:outline-none focus:border-[#c05f3c]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c05f3c] text-white font-semibold rounded-full hover:bg-[#a44c2c] transition-colors cursor-pointer text-xs"
                >
                  Send Message
                </button>
                <span className="text-[11px] text-[#6e6259]">
                  Inquiries answered Mon–Sat, 10am–7pm IST
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Studio and Direct Info Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct channels */}
          <div className="bg-[#f2ece2] border border-[#e3dacd] rounded-2xl p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-[#1b1714]">
              Reach us directly
            </h3>
            <ul className="space-y-3 text-xs text-[#413831]">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#6e6259] block text-[10px] uppercase font-semibold">
                    Email Inquiries
                  </span>
                  <a href="mailto:hello@loomandlane.example" className="font-semibold hover:text-[#c05f3c]">
                    hello@loomandlane.example
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#6e6259] block text-[10px] uppercase font-semibold">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="font-semibold">+91 80 4000 1234</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c05f3c] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#6e6259] block text-[10px] uppercase font-semibold">
                    Customer Care Hours
                  </span>
                  <span>Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Physical Studios */}
          <div className="bg-white border border-[#e3dacd] rounded-2xl p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-[#1b1714]">
              Visit Our Tactile Studios
            </h3>
            <div className="space-y-3 text-xs text-[#413831]">
              <div className="p-3 bg-[#faf7f2] rounded-xl border border-[#ded0ba]">
                <strong className="block text-[#1b1714] font-semibold">Bengaluru Studio</strong>
                <p className="m-0 text-[#6e6259] mt-0.5">
                  14, 7th Cross, Indiranagar, Bengaluru 560038
                </p>
              </div>

              <div className="p-3 bg-[#faf7f2] rounded-xl border border-[#ded0ba]">
                <strong className="block text-[#1b1714] font-semibold">Mumbai Studio</strong>
                <p className="m-0 text-[#6e6259] mt-0.5">
                  Unit 3, Pali Naka, Bandra West, Mumbai 400050
                </p>
              </div>

              <p className="text-[11px] text-[#6e6259] pt-1 leading-relaxed">
                Try on the entire 10-piece edit, receive complimentary hem tailoring, and bring in worn pieces for free repair.
              </p>
            </div>
          </div>

          {/* Lifetime Repairs & Recycling Card */}
          <div className="bg-[#1b1714] text-[#faf7f2] rounded-2xl p-6 space-y-3 border border-[#38302a]">
            <div className="flex items-center gap-2 text-[#c05f3c]">
              <Wrench className="w-4 h-4" />
              <h3 className="font-display text-base font-semibold text-white">
                Free Repairs for Life
              </h3>
            </div>
            <p className="text-xs text-[#ded0ba]/80 leading-relaxed">
              Post anything you own back to our atelier using the prepaid label from your original box.
              Repairs are free for as long as you own the garment; end-of-life pieces earn ₹400 store credit.
            </p>
          </div>
        </div>
      </div>

      {/* ===== FAQS ACCORDION SECTION ===== */}
      <section className="pt-6 border-t border-[#e3dacd] space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1b1714] mt-1">
              Answered before you ask
            </h2>
            <p className="text-xs sm:text-sm text-[#6e6259] mt-1">
              Information on delivery, lifetime repairs, pricing transparency, and returns.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFaqCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                  selectedFaqCategory === cat
                    ? 'bg-[#1b1714] text-white font-semibold'
                    : 'bg-[#f2ece2] text-[#413831] hover:bg-[#ded0ba]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 max-w-4xl">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#e3dacd] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#1b1714] hover:text-[#c05f3c] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`text-[#c05f3c] font-mono text-base font-bold transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#6e6259] leading-relaxed border-t border-[#f2ece2] pt-3 animate-in fade-in duration-150">
                    <p className="m-0">{faq.answer}</p>
                    <span className="text-[10px] font-semibold text-[#a39789] uppercase tracking-wider block mt-2">
                      Topic: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="bg-[#f2ece2] rounded-3xl p-8 sm:p-12 border border-[#e3dacd] text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#c05f3c]">
          Loom &amp; Lane Dispatch
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1b1714]">
          Monthly slow-fashion insights
        </h2>
        <p className="text-xs sm:text-sm text-[#6e6259] max-w-md mx-auto leading-relaxed">
          One thoughtful letter per month on regenerative agriculture, mill audit releases, and garment repair tutorials.
        </p>

        {nlSuccess ? (
          <div className="bg-white border border-[#6b7f6e] p-4 rounded-xl max-w-md mx-auto text-xs text-[#1b1714]">
            <CheckCircle2 className="w-5 h-5 text-[#6b7f6e] mx-auto mb-1" />
            <strong className="block text-[#1b1714]">Thank you for subscribing</strong>
            Use code <span className="font-mono font-bold text-[#c05f3c]">LOOM10</span> for 10% off your first order.
          </div>
        ) : (
          <form onSubmit={handleNlSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              required
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-4 py-2.5 bg-white border border-[#ded0ba] rounded-full text-xs text-[#1b1714] focus:outline-none focus:border-[#c05f3c]"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1b1714] text-white text-xs font-semibold rounded-full hover:bg-[#c05f3c] transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
