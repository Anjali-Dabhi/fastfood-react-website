/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Offers() {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="offers" className="py-20 bg-brand-red relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold mb-6 backdrop-blur-md">
              <Tag className="w-3 h-3 text-brand-yellow" />
              EXCLUSIVE DEALS
            </div>
            <h2 className="text-5xl md:text-7xl text-white mb-6 uppercase italic font-black leading-[0.85] tracking-tighter">
              Get <span className="text-brand-yellow">20% OFF</span> <br />
              Your First Order!
            </h2>
            <p className="text-white/80 text-xl font-medium mb-8 max-w-md">
              Download our app and use code <span className="font-black text-white uppercase tracking-[0.2em] bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">NEW20</span> at checkout.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 flex flex-col items-center">
                <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em] mb-1">Offer Ends In</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-yellow" />
                  <p className="text-3xl font-black italic text-white tracking-tighter">{formatTime(timeLeft)}</p>
                </div>
              </div>
              
              <button className="h-[76px] px-12 bg-brand-yellow text-slate-900 font-black rounded-xl text-xl uppercase italic hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20">
                Claim Now
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Family Meal', price: '$24.99', desc: '4 Burgers, 2 Large Fries, 4 Drinks', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop' },
              { title: 'Night Snack', price: '$12.99', desc: '1 Burger, 6 Nuggets, Med Fries', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop' }
            ].map((deal, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-3xl shadow-2xl"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img src={deal.img} alt={deal.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-bold text-lg mb-1">{deal.title}</h4>
                <p className="text-brand-red font-display font-black text-xl mb-2">{deal.price}</p>
                <p className="text-xs text-gray-500 mb-4">{deal.desc}</p>
                <button className="w-full py-2 bg-gray-100 text-gray-900 rounded-xl text-xs font-bold hover:bg-brand-red hover:text-white transition-colors">Order Deal</button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
