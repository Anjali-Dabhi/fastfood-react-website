/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
              <div className="w-6 h-4 border-t-4 border-x-4 border-brand-yellow rounded-t-full"></div>
            </div>
            <span className="font-black text-2xl tracking-tighter text-brand-red hidden sm:block uppercase">BURGER<span className="text-brand-yellow">DASH</span></span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wider text-slate-600">
            <a href="/" className="text-brand-red">Home</a>
            <a href="#menu" className="hover:text-brand-red transition-colors">Menu</a>
            <a href="#offers" className="hover:text-brand-red transition-colors">Deals</a>
            <a href="#locations" className="hover:text-brand-red transition-colors relative flex items-center gap-1">
              Locations
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase">
            <MapPin className="w-3.5 h-3.5 text-brand-red" />
            Near Central Park, NY
          </div>

          <button 
            onClick={onOpenCart}
            className="relative p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            id="nav-cart-button"
          >
            <ShoppingBag className="w-5 h-5 text-slate-700" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          
          <button className="bg-brand-red text-white px-6 py-2.5 rounded-full font-black hover:bg-red-700 transition-all uppercase text-xs tracking-widest shadow-lg shadow-red-200 hidden sm:block">
            Order Now
          </button>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
