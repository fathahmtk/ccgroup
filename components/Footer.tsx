import React from 'react';
import { Mail, MapPin, Phone, Linkedin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cc-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           
           <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-6">CC FOOD STUFF</h3>
              <p className="text-gray-400 max-w-md leading-relaxed mb-8 font-light text-sm">
                 A division of <strong>CC Group of Companies</strong>. 
                 We are a premier global foodstuff trading and logistics house. Sourcing directly from origins and delivering to industrial partners worldwide.
              </p>
              <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-cc-primary transition-colors">
                      <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-cc-primary transition-colors">
                      <MessageCircle size={18} />
                  </a>
              </div>
           </div>

           <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-500">Global HQ</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                 <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-cc-secondary flex-shrink-0 mt-0.5" />
                    <span>Jebel Ali Free Zone (South),<br/>Dubai, United Arab Emirates</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Phone size={18} className="text-cc-secondary flex-shrink-0" />
                    <span>+971 4 123 4567</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Mail size={18} className="text-cc-secondary flex-shrink-0" />
                    <span>trade@ccfoodstuff.com</span>
                 </li>
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-500">Corporate</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">About CC Group</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
           </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
           <p>© {new Date().getFullYear()} CC Group of Companies. All Rights Reserved.</p>
           <p className="mt-2 md:mt-0">Trade License: 12345678 • VAT: 100200300</p>
        </div>
      </div>
    </footer>
  );
};