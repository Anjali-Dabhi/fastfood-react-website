/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center font-display text-brand-yellow text-2xl">
                M
              </div>
              <span className="font-display text-2xl tracking-tight">MaccasFast</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Serving smiles and hot meals since 1995. Quality, speed, and flavor in every bite.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Full Menu</a></li>
              <li><a href="#offers" className="hover:text-brand-yellow transition-colors">Special Offers</a></li>
              <li><a href="#locations" className="hover:text-brand-yellow transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>123 Burger St, Gourmet City, GC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>hello@maccasfast.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} MaccasFast Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
