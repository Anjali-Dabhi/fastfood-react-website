/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingCart, Plus, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORIES, PRODUCTS } from '../constants';
import { Product } from '../types';

interface MenuSectionProps {
  onAddToCart: (product: Product) => void;
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export default function MenuSection({ onAddToCart, activeCategory, setActiveCategory }: MenuSectionProps) {
  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">Our Tasty Menu</h2>
            <p className="text-gray-500 max-w-sm">From our iconic burgers to our refreshing drinks, we have something for every craving.</p>
          </div>
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all
                  ${activeCategory === cat.id 
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20 active:scale-95' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                `}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={product.id}
              className="group bg-white border border-slate-200 rounded-2xl p-5 transition-all hover:shadow-xl hover:border-brand-yellow/50"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-slate-50">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {product.isPopular && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-brand-yellow text-slate-900 text-[10px] font-black rounded flex items-center gap-1 uppercase italic tracking-tighter">
                    <Star className="w-3 h-3 fill-current" /> Most Desired
                  </div>
                )}
                
                {product.isLimitedTime && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-brand-red text-white text-[10px] font-black rounded flex items-center gap-1 uppercase italic tracking-tighter">
                    <Zap className="w-3 h-3 fill-current" /> Extreme Deal
                  </div>
                )}

                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-3 right-3 w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all active:scale-90"
                  title="Add to cart"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black uppercase italic text-slate-900">{product.name}</h3>
                  <span className="text-brand-red font-black text-2xl italic tracking-tighter">${product.price}</span>
                </div>
                <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-snug font-medium">
                  {product.description}
                </p>
                
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full py-3.5 bg-slate-100 group-hover:bg-brand-yellow group-hover:text-slate-900 text-slate-900 font-black rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase italic tracking-widest shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4" /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
