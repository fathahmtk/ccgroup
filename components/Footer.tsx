import React from 'react';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cc-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-12">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand Section */}
            <div className="space-y-6">
               <Logo variant="white" className="mb-4" />
               <p className="text-white/60 font-light leading-relaxed pr-4">
                  A division of CC Group of Companies. Orchestrating the global movement of essential food commodities with precision and integrity.
               </p>
            </div>
            
            {/* Headquarters */}
            <div>
               <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-cc-gold">Headquarters</h4>
               <p className="text-white/60 font-light leading-relaxed mb-4">
                  CC Food Stuff Trading<br/>
                  Vadakara, Kerala, India
               </p>
               <a href="mailto:trade@ccfoodstuff.com" className="text-white border-b border-white/20 hover:border-white transition-colors pb-0.5">trade@ccfoodstuff.com</a>
            </div>

            {/* Sitemap */}
            <div>
               <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-cc-gold">Sitemap</h4>
               <ul className="space-y-3">
                  {['Home', 'Products', 'Services', 'Contact'].map(item => (
                     <li key={item}>
                        <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                           {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Sustainability - New Section */}
            <div>
               <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-cc-gold">Sustainability</h4>
               <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">
                  We are committed to ethical sourcing, reducing our carbon footprint, and empowering local farming communities across our global supply chain.
               </p>
               <a href="#" className="inline-flex items-center gap-2 text-white border-b border-white/20 hover:border-cc-gold hover:text-cc-gold transition-colors pb-1 text-sm group">
                  <Leaf size={14} /> 
                  <span>2024 Impact Report</span>
                  <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
               </a>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40 font-mono uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} CC Group. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Terms</a>
            </div>
         </div>
      </div>
    </footer>
  );
};