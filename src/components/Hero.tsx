/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 py-12"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex text-brand-yellow">
                {'★'.repeat(5)}
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">4.9/5 (1.2M+ Meals Served Daily)</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[100px] leading-[0.85] mb-8 font-black uppercase italic text-slate-900 tracking-tighter">
              Hot, Fresh, <br />
              <span className="text-brand-red">Delivered</span> <br />
              in Minutes 🍔
            </h1>
            
            <p className="text-slate-600 text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Flame-grilled beef, crisp lettuce, and our secret golden sauce. 
              The iconic taste you love, delivered at light speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a 
                href="#menu"
                className="bg-brand-yellow text-slate-900 px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl transition-all uppercase italic flex items-center justify-center gap-2 group"
                id="hero-order-now"
              >
                Start Order <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </a>
              <button className="bg-white border-4 border-slate-900 text-slate-900 px-10 py-5 rounded-xl font-black text-xl hover:bg-slate-50 transition-all uppercase italic">
                View Menu
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 uppercase italic leading-none">12 Min</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Avg Delivery</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 uppercase italic leading-none">100%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Beef Quality</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 uppercase italic leading-none">24/7</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Hot Kitchen</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-full min-h-[500px] flex items-center justify-center bg-brand-red rounded-3xl overflow-hidden shadow-2xl "
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="relative w-full h-full flex items-center justify-center p-8">
               <div className="w-[300px] h-[300px] bg-brand-yellow rounded-full absolute blur-[80px] opacity-20"></div>
               <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                alt="Delicious Burger"
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-2xl rotate-3 scale-110"
                referrerPolicy="no-referrer"
               />
            </div>
            
            {/* Floating badge */}
            <motion.div
              animate={{ rotate: [-2, 2, -2], y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 rotate-3 border-2 border-brand-yellow z-20"
            >
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-black text-slate-900">
                -20%
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter leading-none mb-1">App Only</p>
                <p className="text-sm font-black text-slate-900 uppercase italic">First Order Discount</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
