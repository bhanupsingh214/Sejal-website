/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CostPerWearModal } from './components/CostPerWearModal';
import { SizeGuideModal } from './components/SizeGuideModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { StrategyPage } from './pages/StrategyPage';
import { ContactPage } from './pages/ContactPage';

import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

const CART_STORAGE_KEY = 'loom_lane_cart_v1';

export default function App() {
  type PageType = 'home' | 'shop' | 'about' | 'strategy' | 'contact';

  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Initialize cart from localStorage if available, or default with 1 staple
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return [
      {
        product: PRODUCTS[0], // Everyday Organic Tee
        quantity: 1,
        size: 'M',
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cpwProduct, setCpwProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  // Sync with browser URL hash for multi-page deep linking and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'shop', 'about', 'strategy', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageType);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }
      return [...prev, { product, quantity: 1, size }];
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#1b1714] font-body selection:bg-[#c05f3c] selection:text-white">
      {/* 3-Zone Sticky Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCostBreakdown={(p) => setCpwProduct(p)}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onOpenCostBreakdown={(p) => setCpwProduct(p)}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateToShop={() => handleNavigate('shop')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'strategy' && <StrategyPage />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Multi-Column Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Slide-over Cart Drawer with persistent bag */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigateToShop={() => handleNavigate('shop')}
      />

      {/* Cost-per-Wear & Price Breakdown Modal */}
      <CostPerWearModal
        product={cpwProduct}
        onClose={() => setCpwProduct(null)}
      />

      {/* Garment Sizing Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        onContactClick={() => {
          setIsSizeGuideOpen(false);
          handleNavigate('contact');
        }}
      />
    </div>
  );
}
