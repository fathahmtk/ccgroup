import React from 'react';
import { ArrowRight, Anchor, Globe, TrendingUp, Ship, ArrowDownLeft, ArrowUpRight, Scale, Wheat, Sun } from 'lucide-react';

export const Trade: React.FC = () => {
  return (
    <div className="bg-cc-cream min-h-screen font-sans">
      
      {/* 1. HERO - Split Flow */}
      <section className="relative pt-40 pb-24 bg-cc-dark overflow-hidden border-b border-white/5">
         <div className="absolute inset-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             {/* Map Background */}
             <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
                   <path d="M200,100 Q300,50 400,100 T600,100 T800,100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5"/>
                   <path d="M100,200 Q300,250 500,200 T900,200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5"/>
                </svg>
             </div>
         </div>
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
             <div className="animate-fade-up">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-[1px] bg-cc-gold"></span>
                    <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] font-sans">Bilateral Trade</span>
                 </div>
                 <h1 className="font-display text-6xl md:text-8xl text-white mb-8">
                    Import <span className="text-white/40 italic font-serif">&</span> Export.
                 </h1>
                 <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed font-sans border-l border-white/10 pl-6">
                     Bridging the gap between Indian agriculture and global markets. We facilitate the two-way flow of essential commodities with precision logistics.
                 </p>
             </div>
         </div>
      </section>

      {/* 2. EXPORT DIVISION - India to World */}
      <section className="py-0 md:py-12">
         <div className="max-w-[1800px] mx-auto px-0 md:px-12">
             <div className="bg-white rounded-none md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative shadow-2xl">
                 {/* Visual Side */}
                 <div className="w-full md:w-1/2 min-h-[500px] relative group">
                     <img 
                        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        alt="Export Spices"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-cc-dark/60 to-transparent"></div>
                     <div className="absolute bottom-12 left-12">
                         <div className="bg-cc-gold text-cc-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-4">
                            <ArrowUpRight size={14}/> Outbound Flow
                         </div>
                         <h2 className="text-4xl md:text-5xl font-display text-white">Export Division</h2>
                     </div>
                 </div>
                 
                 {/* Content Side */}
                 <div className="w-full md:w-1/2 p-12 md:p-24 bg-white flex flex-col justify-center">
                     <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block font-sans">Origin: India</span>
                     <h3 className="text-3xl font-display text-cc-primary mb-6">Supplying the World's Kitchen</h3>
                     <p className="text-gray-600 leading-relaxed mb-10 font-sans">
                         We aggregate premium agricultural produce from the fertile belts of Punjab, Andhra Pradesh, and Kerala. Our export network spans the Middle East, Africa, and Southeast Asia.
                     </p>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-cc-cream rounded-full text-cc-primary"><Wheat size={20}/></div>
                             <div>
                                 <h4 className="font-bold text-cc-primary text-sm uppercase tracking-wide">Cereals</h4>
                                 <p className="text-xs text-gray-500 mt-1">Basmati Rice, Non-Basmati, Maize, Wheat.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-cc-cream rounded-full text-cc-primary"><Sun size={20}/></div>
                             <div>
                                 <h4 className="font-bold text-cc-primary text-sm uppercase tracking-wide">Spices</h4>
                                 <p className="text-xs text-gray-500 mt-1">Red Chilli, Turmeric, Cumin, Cardamom.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="p-3 bg-cc-cream rounded-full text-cc-primary"><Scale size={20}/></div>
                             <div>
                                 <h4 className="font-bold text-cc-primary text-sm uppercase tracking-wide">Commodities</h4>
                                 <p className="text-xs text-gray-500 mt-1">Sugar (S30/M30), Jaggery, Fresh Onion.</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. IMPORT DIVISION - World to India */}
      <section className="py-0 md:py-12 pb-24">
         <div className="max-w-[1800px] mx-auto px-0 md:px-12">
             <div className="bg-cc-dark text-white rounded-none md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row-reverse relative shadow-2xl">
                 {/* Visual Side */}
                 <div className="w-full md:w-1/2 min-h-[500px] relative group">
                     <img 
                        src="https://images.unsplash.com/photo-1548695607-9c73430ba065?q=80&w=1200" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        alt="Import Container"
                     />
                     <div className="absolute inset-0 bg-gradient-to-l from-cc-dark/80 to-transparent"></div>
                     <div className="absolute bottom-12 right-12 text-right">
                         <div className="bg-white text-cc-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-4">
                             Inbound Flow <ArrowDownLeft size={14}/>
                         </div>
                         <h2 className="text-4xl md:text-5xl font-display text-white">Import Division</h2>
                     </div>
                 </div>
                 
                 {/* Content Side */}
                 <div className="w-full md:w-1/2 p-12 md:p-24 bg-cc-dark flex flex-col justify-center">
                     <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block font-sans">Destinations: JNPT / Mundra / Chennai</span>
                     <h3 className="text-3xl font-display text-white mb-6">Global Sourcing Capabilities</h3>
                     <p className="text-white/60 leading-relaxed mb-10 font-sans">
                         Sourcing essential raw materials and finished goods to fuel India's domestic consumption and manufacturing sectors. We handle High Sea Sales and Bonded Warehousing.
                     </p>
                     
                     <div className="space-y-8">
                         <div className="flex items-center justify-between border-b border-white/10 pb-4">
                             <div className="flex items-center gap-4">
                                 <Globe size={24} className="text-cc-gold"/>
                                 <div>
                                     <strong className="block text-lg font-display">Dry Fruits & Nuts</strong>
                                     <span className="text-xs text-white/50 uppercase tracking-wider">Dates (Middle East), Cashew (Africa), Almonds (USA)</span>
                                 </div>
                             </div>
                             <ArrowRight size={20} className="text-white/20"/>
                         </div>
                         
                         <div className="flex items-center justify-between border-b border-white/10 pb-4">
                             <div className="flex items-center gap-4">
                                 <Ship size={24} className="text-cc-gold"/>
                                 <div>
                                     <strong className="block text-lg font-display">Edible Oils</strong>
                                     <span className="text-xs text-white/50 uppercase tracking-wider">Sunflower (Ukraine), Palm (Malaysia)</span>
                                 </div>
                             </div>
                             <ArrowRight size={20} className="text-white/20"/>
                         </div>

                         <div className="flex items-center justify-between border-b border-white/10 pb-4">
                             <div className="flex items-center gap-4">
                                 <TrendingUp size={24} className="text-cc-gold"/>
                                 <div>
                                     <strong className="block text-lg font-display">Pulses</strong>
                                     <span className="text-xs text-white/50 uppercase tracking-wider">Toor (Myanmar), Chickpeas (Russia)</span>
                                 </div>
                             </div>
                             <ArrowRight size={20} className="text-white/20"/>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. TRADE MAP INDICATORS */}
      <section className="py-24 bg-cc-cream border-t border-gray-200">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                  <h2 className="font-display text-4xl text-cc-primary mb-4">Strategic Trade Lanes</h2>
                  <p className="text-gray-500 font-sans max-w-2xl mx-auto">Operating primarily on the Asia-Pacific and Indo-Arab corridors.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {[
                      { region: 'GCC Region', role: 'Major Export Market', items: 'Rice, Spices, F&V', flag: '🇦🇪 🇸🇦 🇴🇲' },
                      { region: 'Southeast Asia', role: 'Import/Export Hub', items: 'Sugar, Palm Oil, Spices', flag: '🇻🇳 🇮🇩 🇲🇾' },
                      { region: 'Africa', role: 'Raw Cashew Sourcing', items: 'Raw Nuts, Pulses', flag: '🇹🇿 🇧🇯 🇬🇭' },
                      { region: 'USA / Europe', role: 'Premium Markets', items: 'Organic Spices, Extracts', flag: '🇺🇸 🇪🇺 🇬🇧' },
                  ].map((lane, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-cc-gold/30 transition-colors">
                          <div className="text-3xl mb-4">{lane.flag}</div>
                          <h4 className="font-bold text-cc-primary uppercase tracking-wider text-sm mb-2">{lane.region}</h4>
                          <span className="inline-block bg-cc-cream px-3 py-1 rounded-full text-[10px] font-bold text-cc-secondary mb-4">{lane.role}</span>
                          <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">{lane.items}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
};