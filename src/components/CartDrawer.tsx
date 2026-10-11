import React, { useState } from 'react';
import { X, Trash2, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { GarmentArt } from './GarmentArt';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToShop,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>('LL-4829');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 1999;
  const isFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingFee = isFreeShipping ? 0 : 120;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LOOM10') {
      setDiscountPercent(10);
      setPromoMessage('10% Welcome Discount applied');
    } else {
      setPromoMessage('Code not recognized. Try "LOOM10" for 10% off.');
    }
  };

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderNumber(`LL-${Math.floor(4000 + Math.random() * 5000)}`);
    setOrderConfirmed(true);
    setIsCheckingOut(false);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-[#1b1714]/60 backdrop-blur-xs transition-opacity"
      aria-labelledby="cart-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf7f2] border-l border-[#e3dacd] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 border-b border-[#e3dacd] flex items-center justify-between bg-[#f2ece2]/60">
            <div className="flex items-center gap-2">
              <h2 id="cart-title" className="font-display font-semibold text-lg text-[#1b1714]">
                Your Shopping Bag
              </h2>
              <span className="text-xs text-[#6e6259]">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#ded0ba]/50 text-[#1b1714] transition-colors cursor-pointer"
              aria-label="Close shopping bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {orderConfirmed ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#6b7f6e]/20 text-[#6b7f6e] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#1b1714]">
                  Thank You for Your Order
                </h3>
                <p className="text-xs text-[#413831] max-w-xs mx-auto leading-relaxed">
                  Order <strong className="font-mono text-[#1b1714]">{orderNumber}</strong> has been logged.
                  Your garments are scheduled for carbon-neutral dispatch in 2–4 business days.
                </p>
                <div className="bg-[#f2ece2] p-4 rounded-xl text-left text-xs space-y-2 border border-[#e3dacd]">
                  <p><strong>Shipping:</strong> Carbon-neutral delivery via FSC recycled packaging</p>
                  <p><strong>Included in parcel:</strong> 30-day prepaid return label &amp; Lifetime repair pass</p>
                  <p className="text-[11px] text-[#6e6259] pt-1">
                    Storefront simulation — no live payment transaction processed.
                  </p>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full py-3 bg-[#1b1714] text-[#faf7f2] font-semibold text-xs rounded-full hover:bg-[#c05f3c] transition-colors cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f2ece2] border border-[#e3dacd] flex items-center justify-center mx-auto text-[#6e6259]">
                  <GarmentArt spriteId="a-tote" className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1b1714]">Your bag is empty</h3>
                <p className="text-xs text-[#6e6259] max-w-xs mx-auto">
                  Invest in garments you keep for a decade. Organic cotton, traceable merino, and free lifetime repairs.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToShop();
                  }}
                  className="px-6 py-2.5 bg-[#c05f3c] text-white text-xs font-semibold rounded-full hover:bg-[#a44c2c] transition-colors cursor-pointer"
                >
                  Explore the Collection
                </button>
              </div>
            ) : (
              <>
                {/* Free Shipping Progress */}
                <div className="bg-[#f2ece2] p-3 rounded-lg border border-[#e3dacd] text-xs">
                  <div className="flex justify-between items-center mb-1.5 font-medium">
                    <span>
                      {isFreeShipping ? (
                        <span className="text-[#6b7f6e] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 inline" /> Complimentary Delivery Unlocked
                        </span>
                      ) : (
                        <span>
                          Add <strong>₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for free shipping
                        </span>
                      )}
                    </span>
                    <span className="text-[#6e6259]">
                      {Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-[#ded0ba] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#c05f3c] transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Line Items with Real Product Photography */}
                <ul className="divide-y divide-[#e3dacd] space-y-3">
                  {items.map((item) => (
                    <li key={`${item.product.id}-${item.size}`} className="pt-3 flex gap-3.5">
                      <div className="w-16 h-20 bg-[#f2ece2] rounded-lg overflow-hidden shrink-0 border border-[#e3dacd] relative">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-display text-sm font-semibold text-[#1b1714]">
                              {item.product.name}
                            </h4>
                            <span className="font-semibold text-xs tabular-nums text-[#1b1714]">
                              ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6e6259]">
                            Size: <span className="font-medium text-[#1b1714]">{item.size}</span> · {item.product.category}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center border border-[#e3dacd] rounded bg-[#ffffff] text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                              className="px-2 py-0.5 hover:bg-[#f2ece2] text-[#413831] font-semibold cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2 py-0.5 tabular-nums font-medium text-[#1b1714]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                              className="px-2 py-0.5 hover:bg-[#f2ece2] text-[#413831] font-semibold cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.size)}
                            className="text-[#6e6259] hover:text-[#c05f3c] p-1 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. LOOM10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 text-xs px-3 py-2 bg-white border border-[#e3dacd] rounded focus:outline-none focus:border-[#c05f3c]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#1b1714] text-white text-xs font-semibold rounded hover:bg-[#413831] transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p
                      className={`text-[11px] mt-1.5 ${
                        discountPercent > 0 ? 'text-[#6b7f6e] font-medium' : 'text-[#c05f3c]'
                      }`}
                    >
                      {promoMessage}
                    </p>
                  )}
                </form>

                {/* Simulated Checkout Form */}
                {isCheckingOut ? (
                  <form
                    onSubmit={handleSimulateCheckout}
                    className="bg-[#f2ece2] p-4 rounded-xl border border-[#e3dacd] space-y-3 animate-in fade-in duration-150"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-display font-semibold text-sm text-[#1b1714]">
                        Delivery Information
                      </h4>
                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(false)}
                        className="text-[11px] text-[#6e6259] hover:underline cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#413831] block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        defaultValue="Pooja Mehta"
                        className="w-full text-xs px-2.5 py-1.5 bg-white border border-[#e3dacd] rounded"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#413831] block mb-1">Shipping Address</label>
                      <input
                        type="text"
                        required
                        defaultValue="18, 12th Main Road, Indiranagar, Bengaluru 560038"
                        className="w-full text-xs px-2.5 py-1.5 bg-white border border-[#e3dacd] rounded"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[11px] font-semibold text-[#413831] block mb-1">Pin Code</label>
                        <input
                          type="text"
                          required
                          defaultValue="560038"
                          className="w-full text-xs px-2.5 py-1.5 bg-white border border-[#e3dacd] rounded"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-[#413831] block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          defaultValue="+91 98450 67890"
                          className="w-full text-xs px-2.5 py-1.5 bg-white border border-[#e3dacd] rounded"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#c05f3c] text-white text-xs font-semibold rounded hover:bg-[#a44c2c] transition-colors cursor-pointer"
                    >
                      Complete Order (₹{finalTotal.toLocaleString('en-IN')})
                    </button>
                    <p className="text-[10px] text-[#6e6259] text-center">
                      Storefront preview · Free returns included in every shipment
                    </p>
                  </form>
                ) : null}
              </>
            )}
          </div>

          {/* Footer Summary */}
          {items.length > 0 && !orderConfirmed && !isCheckingOut && (
            <div className="p-5 border-t border-[#e3dacd] bg-[#f2ece2]/80 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6e6259]">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-[#1b1714]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#6b7f6e] font-medium">
                    <span>Discount (10%)</span>
                    <span className="tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#6e6259]">
                  <span>Carbon-Neutral Delivery</span>
                  <span className="tabular-nums font-medium text-[#1b1714]">
                    {isFreeShipping ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#e3dacd] flex justify-between text-sm font-semibold text-[#1b1714]">
                  <span>Total</span>
                  <span className="tabular-nums text-base">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3 bg-[#c05f3c] text-white text-xs font-semibold rounded-full hover:bg-[#a44c2c] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6e6259]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6b7f6e]" />
                <span>30-Day Hassle-Free Returns · Lifetime Free Repairs</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
