/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import CartDrawer from './components/CartDrawer';
import Offers from './components/Offers';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';
import { CartItem, Product } from './types';
import { ShoppingBag, X } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [showExitPopup, setShowExitPopup] = useState(false);

  // Handle Exit Intent (Desktop only, simulated)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exit-popup-shown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('exit-popup-shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <MenuSection 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          onAddToCart={addToCart} 
        />
        <Offers />
        <AppPromo />
        
        {/* Simple Locations Placeholder */}
        <section id="locations" className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl mb-6">Find us near you</h2>
            <div className="max-w-3xl mx-auto h-[300px] bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                [ Google Maps Integration Mock ]
              </div>
              <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl text-left">
                <p className="font-bold text-sm mb-1">MaccasFast Central</p>
                <p className="text-xs text-gray-500 mb-2">Open until 11:00 PM</p>
                <button className="text-xs font-bold text-brand-red">Get Directions</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Floating Order Button (Mobile) */}
      <AnimatePresence>
        {totalItems > 0 && !isCartOpen && (
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 left-6 z-40 bg-brand-red text-white py-4 rounded-2xl shadow-2xl md:hidden font-bold flex items-center justify-center gap-3 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            View Order ({totalItems} items)
          </motion.button>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-black/60 backdrop-blur-md"
              onClick={() => setShowExitPopup(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white p-8 md:p-12 rounded-[40px] shadow-2xl max-w-lg w-full text-center overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-30" />
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-6xl mb-6">📢</div>
              <h2 className="text-3xl md:text-5xl mb-4 leading-tight">WAIT! DON'T GO HUNGRY!</h2>
              <p className="text-gray-500 mb-8 text-lg">Order within the next 10 minutes and get <span className="text-brand-red font-bold">20% OFF</span> your entire order.</p>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setShowExitPopup(false);
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-4 bg-brand-red text-white font-bold rounded-2xl text-xl shadow-lg shadow-brand-red/20 hover:scale-105 active:scale-95 transition-all"
                >
                  GET 20% OFF NOW
                </button>
                <button 
                  onClick={() => setShowExitPopup(false)}
                  className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
                >
                  I'm not hungry (maybe later)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
