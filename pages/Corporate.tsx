import React from 'react';
import { Building2, Users, Target, Globe, Award, Leaf, TrendingUp, Anchor, Briefcase, MapPin, Landmark, CheckCircle2, Copy } from 'lucide-react';

export const Corporate: React.FC = () => {
  return (
    <div className="bg-cc-cream min-h-screen font-sans">
      
      {/* 1. HERO - Group Identity */}
      <section className="relative pt-40 pb-32 bg-cc-primary text-white overflow-hidden rounded-b-[4rem]">
         <div className="absolute inset-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-20 grayscale" 
                alt="Corporate HQ"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-cc-primary via-cc-primary/90 to-transparent"></div>
         </div>
         
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
             <div className="max-w-4xl animate-fade-up">
                 <div className="flex items-center gap-3 mb-8">
                    <span className="w-16 h-[1px] bg-cc-gold"></span>
                    <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] font-sans">About The Group</span>
                 </div>
                 <h1 className="font-display text-6xl md:text-8xl mb-8 leading-tight">
                    Foundations of <br/><span className="text-cc-gold italic font-serif">Excellence.</span>
                 </h1>
                 <p className="text-xl text-white/70 font-light leading-relaxed font-sans border-l border-white/20 pl-8 max-w-2xl">
                    Established in 1985, CC Group has evolved from a regional commodity trader into a diversified multinational conglomerate. We are the architects of modern supply chains.
                 </p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/10 pt-12">
                 {[
                     { label: "Group Turnover", val: "$120M+" },
                     { label: "Employees", val: "450+" },
                     { label: "Global Presence", val: "12 Countries" },
                     { label: "Founded", val: "1985" }
                 ].map((stat, i) => (
                     <div key={i}>
                         <div className="text-4xl font-display mb-2">{stat.val}</div>
                         <div className="text-[10px] text-cc-gold uppercase tracking-widest font-bold">{stat.label}</div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* 2. GROUP STRUCTURE - Verticals */}
      <section className="py-24">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12">
             <div className="text-center mb-20">
                 <span className="text-cc-primary/40 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Our Ecosystem</span>
                 <h2 className="font-display text-5xl md:text-6xl text-cc-primary">Group Verticals</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white p-12 rounded-[2.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group">
                     <div className="w-16 h-16 bg-cc-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors">
                         <Wheat size={32}/>
                     </div>
                     <h3 className="text-2xl font-display text-cc-primary mb-4">CC Food Stuff</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8">
                         The flagship entity. Global procurement and export of agricultural commodities including Rice, Sugar, and Spices.
                     </p>
                     <ul className="space-y-3 text-xs font-bold text-gray-400 uppercase tracking-wide">
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cc-gold rounded-full"></div> Global Trading</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cc-gold rounded-full"></div> Processing Units</li>
                     </ul>
                 </div>

                 <div className="bg-white p-12 rounded-[2.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group">
                     <div className="w-16 h-16 bg-cc-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors">
                         <Anchor size={32}/>
                     </div>
                     <h3 className="text-2xl font-display text-cc-primary mb-4">CC Integrated Logistics</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8">
                         Handling the physical movement of goods. Freight forwarding, customs clearance, and last-mile delivery.
                     </p>
                     <ul className="space-y-3 text-xs font-bold text-gray-400 uppercase tracking-wide">
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cc-gold rounded-full"></div> Shipping Lines</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cc-gold rounded-full"></div> Warehousing</li>
                     </ul>
                 </div>

                 <div className="bg-white p-12 rounded-[2.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-500 group">
                     <div className="w-16 h-16 bg-cc-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors">
                         <TrendingUp size={32}/>
                     </div>
                     <h3 className="text-2xl font-display text-cc-primary mb-4">CC Ventures</h3>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8">
                         Strategic investments in Agritech startups and sustainable farming infrastructure across India.
                     </p>
                     <ul className="space-y-3 text-xs font-bold text-gray-400 uppercase tracking-wide">
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cc-gold rounded-full"></div> Private Equity</li>
                         <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cc-gold rounded-full"></div> Innovation Lab</li>
                     </ul>
                 </div>
             </div>
         </div>
      </section>

      {/* 2.5 CORPORATE REGISTRY - New Section */}
      <section className="py-16 bg-white border-t border-gray-100">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                 <div>
                    <h2 className="font-display text-4xl text-cc-primary">Corporate Registry</h2>
                    <p className="text-gray-500 text-sm mt-2 font-sans">Official entity details for due diligence and compliance.</p>
                 </div>
                 <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-green-100 font-sans shadow-sm">
                        <CheckCircle2 size={14}/> Active Status
                    </span>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Address */}
                 <div className="p-8 bg-cc-cream rounded-[2rem] border border-gray-100 hover:border-cc-gold/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                     <div className="flex justify-between items-start mb-4">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">Registered Office</span>
                        <Copy size={12} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-cc-gold"/>
                     </div>
                     <div className="flex items-start gap-4">
                         <div className="p-2.5 bg-white rounded-xl text-cc-gold shadow-sm border border-gray-100"><MapPin size={20}/></div>
                         <address className="text-cc-primary text-sm font-medium leading-relaxed not-italic font-sans">
                            CC Food Stuff Trading<br/>
                            Logistics Park, Vadakara<br/>
                            Kerala, India - 673101
                         </address>
                     </div>
                 </div>

                 {/* Entity Type */}
                 <div className="p-8 bg-cc-cream rounded-[2rem] border border-gray-100 hover:border-cc-gold/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                     <div className="flex justify-between items-start mb-4">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">Legal Entity</span>
                     </div>
                     <div className="flex items-start gap-4">
                         <div className="p-2.5 bg-white rounded-xl text-cc-gold shadow-sm border border-gray-100"><Building2 size={20}/></div>
                         <div>
                            <p className="text-cc-primary text-sm font-bold font-sans">Private Limited</p>
                            <p className="text-[10px] text-gray-500 font-sans mt-1">Companies Act, 2013</p>
                         </div>
                     </div>
                 </div>

                 {/* Tax ID */}
                 <div className="p-8 bg-cc-cream rounded-[2rem] border border-gray-100 hover:border-cc-gold/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                     <div className="flex justify-between items-start mb-4">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">Tax Registration</span>
                        <Copy size={12} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-cc-gold"/>
                     </div>
                     <div className="flex items-start gap-4">
                         <div className="p-2.5 bg-white rounded-xl text-cc-gold shadow-sm border border-gray-100"><Landmark size={20}/></div>
                         <div>
                            <p className="text-cc-primary text-sm font-bold font-mono">GSTIN: 32AABCC1234K1Z5</p>
                            <p className="text-[10px] text-gray-500 font-sans mt-1">Jurisdiction: Kerala</p>
                         </div>
                     </div>
                 </div>

                 {/* IEC */}
                 <div className="p-8 bg-cc-cream rounded-[2rem] border border-gray-100 hover:border-cc-gold/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                     <div className="flex justify-between items-start mb-4">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">Import Export Code</span>
                        <Copy size={12} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-cc-gold"/>
                     </div>
                     <div className="flex items-start gap-4">
                         <div className="p-2.5 bg-white rounded-xl text-cc-gold shadow-sm border border-gray-100"><Globe size={20}/></div>
                         <div>
                            <p className="text-cc-primary text-sm font-bold font-mono">IEC: 0987654321</p>
                            <p className="text-[10px] text-gray-500 font-sans mt-1">Issued by DGFT</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. CHAIRMAN'S MESSAGE */}
      <section className="py-24 bg-cc-dark text-white relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12"></div>
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
             <div className="w-full md:w-1/3">
                 <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Chairman"/>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-8 left-8">
                         <h4 className="font-display text-2xl">Rajiv Menon</h4>
                         <span className="text-cc-gold text-xs font-bold uppercase tracking-widest">Group Chairman</span>
                     </div>
                 </div>
             </div>
             <div className="w-full md:w-2/3">
                 <Quote size={64} className="text-cc-gold mb-8 opacity-30"/>
                 <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
                     "We do not merely trade commodities; we are custodians of trust. Our legacy is built on the promise that what we deliver fuels nations and sustains communities."
                 </h2>
                 <p className="text-white/60 text-lg leading-relaxed max-w-2xl font-light">
                     For nearly four decades, CC Group has navigated market volatilities with a steady hand. Our commitment to ethical sourcing and financial transparency has made us the preferred partner for government tenders and multinational food giants alike.
                 </p>
                 <div className="mt-12">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" className="h-16 invert opacity-50" alt="Signature"/>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. HISTORY TIMELINE */}
      <section className="py-24 bg-cc-cream">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12">
             <div className="mb-16">
                 <h2 className="font-display text-5xl text-cc-primary">Our Journey</h2>
             </div>
             
             <div className="border-t border-cc-primary/10 pt-12 relative">
                 <div className="absolute top-0 left-0 w-full h-px bg-cc-primary/10"></div>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     {[
                         { year: '1985', title: 'Inception', desc: 'Started as a small spice trading house in Kerala.' },
                         { year: '1998', title: 'Expansion', desc: 'Opened first international office in Dubai, UAE.' },
                         { year: '2010', title: 'Star Status', desc: 'Awarded Star Export House status by Govt of India.' },
                         { year: '2023', title: 'Diversification', desc: 'Launched CC Ventures and Integrated Logistics arm.' }
                     ].map((item, i) => (
                         <div key={i} className="relative pt-8 md:pt-0">
                             <div className="hidden md:block absolute -top-[53px] left-0 w-3 h-3 bg-cc-gold rounded-full border-4 border-cc-cream"></div>
                             <div className="text-6xl font-display text-cc-primary/10 font-bold mb-4">{item.year}</div>
                             <h4 className="text-xl font-bold text-cc-primary mb-2">{item.title}</h4>
                             <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
      </section>

      {/* 5. CSR & SUSTAINABILITY */}
      <section className="py-24 bg-white rounded-t-[4rem]">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 text-center">
              <span className="text-green-600 text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2"><Leaf size={14}/> Sustainability</span>
              <h2 className="font-display text-5xl text-cc-primary mb-16">Trade with a Conscience</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center mb-6"><Target size={24}/></div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Net Zero 2030</h3>
                      <p className="text-sm text-green-800/70">Committed to carbon neutral logistics operations by 2030 through EV adoption in last-mile.</p>
                  </div>
                  <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center mb-6"><Users size={24}/></div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Farmer Welfare</h3>
                      <p className="text-sm text-green-800/70">Direct procurement program eliminating middlemen, increasing farmer income by 18%.</p>
                  </div>
                  <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center mb-6"><Award size={24}/></div>
                      <h3 className="text-xl font-bold text-green-900 mb-3">Ethical Sourcing</h3>
                      <p className="text-sm text-green-800/70">Strict adherence to fair trade practices and zero tolerance for child labor in supply chains.</p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

// Icon imports fix
const Wheat = ({size}: {size: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22 22 2"/><path d="M7 6c0-2.2 1.8-4 4-4s4 1.8 4 4c0-2.2 1.8-4 4-4s4 1.8 4 4-3.5 3-5 5L7 6Z"/><path d="M12 12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-2.5-3-4-5Z"/></svg>
);

const Quote = ({size, className}: {size: number, className?: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
);