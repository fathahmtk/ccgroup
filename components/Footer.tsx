import React from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cc-dark text-white pt-24 pb-16 rounded-t-[3rem] mt-0 border-t border-cc-gold/10 relative z-30 font-sans">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Section */}
            <div className="space-y-8">
               <Logo variant="white" className="mb-6" />
               <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
                  Global wholesale foodstuff trading. Orchestrating the movement of essential commodities with precision and integrity.
               </p>
            </div>
            
            {/* Headquarters */}
            <div>
               <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-cc-gold">Headquarters</h4>
               <p className="text-white/60 font-light text-sm leading-relaxed mb-6 font-sans">
                  CC Food Stuff Trading<br/>
                  Vadakara, Kerala, India
               </p>
               <a href="mailto:trade@ccfoodstuff.com" className="text-white text-sm border-b border-white/20 hover:border-white transition-colors pb-0.5 font-medium">trade@ccfoodstuff.com</a>
            </div>

            {/* Quick Links */}
            <div>
               <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-cc-gold">Network</h4>
               <ul className="space-y-4 text-sm font-light">
                  {['Global Catalog', 'Spot Market', 'Logistics', 'Trade Desk'].map(item => (
                     <li key={item}>
                        <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                           {item} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-cc-gold"/>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Certifications */}
            <div>
               <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-8 text-cc-gold">Compliance</h4>
               <div className="flex flex-wrap gap-3">
                  {['FSSAI', 'APEDA', 'ISO 22000', 'HALAL'].map(cert => (
                      <span key={cert} className="px-3 py-1.5 border border-white/10 rounded-full text-[10px] text-white/70 uppercase font-bold hover:border-white/40 hover:text-white cursor-default transition-colors tracking-wide">
                          {cert}
                      </span>
                  ))}
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] text-white/30 font-bold uppercase tracking-[0.15em]">
            <p>&copy; {new Date().getFullYear()} CC Group. All Rights Reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Trade</a>
            </div>
         </div>
      </div>
    </footer>
  );
};