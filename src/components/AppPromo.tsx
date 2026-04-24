/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Smartphone, Apple, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function AppPromo() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-brand-yellow/10 rounded-[40px] p-8 md:p-16 relative flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl mb-6">Hungry? Our app <br />is even <span className="text-brand-red underline decoration-brand-yellow">faster</span>.</h2>
            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              Get exclusive rewards, faster checkout, and live order tracking. Plus, get free fries on your first app purchase!
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-3 bg-brand-black text-white px-6 py-4 rounded-2xl hover:scale-105 transition-transform">
                <Apple className="w-8 h-8 fill-current" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Download on</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-brand-black text-white px-6 py-4 rounded-2xl hover:scale-105 transition-transform">
                <Play className="w-8 h-8 fill-current" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-1">Get it on</p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </button>
            </div>
            
            <div className="mt-12 p-4 bg-white/50 backdrop-blur rounded-2xl border border-white inline-flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Try the new UI</p>
                <p className="text-xs text-gray-500">Scan to download instantly</p>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded-lg ml-4 flex items-center justify-center font-mono text-[10px] text-gray-400">
                QR
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
                alt="App on Phone"
                className="w-full max-w-[400px] mx-auto rounded-[40px] shadow-2xl border-8 border-brand-black"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-yellow rounded-full blur-[120px] opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
