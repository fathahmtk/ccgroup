import React from 'react';
import { PackageCheck, ClipboardCheck, Container, Network, BadgeDollarSign, Ship, CheckCircle2, Shield, Anchor, FileCheck, Truck } from 'lucide-react';

export const Services: React.FC = () => {

  return (
    <div className="bg-cc-cream min-h-screen font-sans">
      
      {/* 1. HERO - Infrastructure Focused */}
      <section className="relative h-[60vh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-cc-dark border-b border-white/5">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-20 animate-slow-zoom"
                alt="Logistics Warehouse"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-cc-dark via-cc-dark/90 to-transparent"></div>
          </div>

          <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full relative z-10 text-white pt-20">
              <div className="max-w-4xl animate-fade-up">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-16 h-[1px] bg-cc-gold"></span>
                    <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em]">Supply Chain Infrastructure</span>
                  </div>
                  <h1 className="font-display text-6xl md:text-8xl mb-8 leading-[0.9]">
                      Logistics <span className="text-white/40 italic font-serif">&</span> <br/>
                      Compliance.
                  </h1>
                  <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl font-sans border-l border-cc-gold/30 pl-8">
                      CC Group operates a rigid supply chain network connecting Indian farmers to global distributors. Integrity, timeliness, and product safety are our operational cornerstones.
                  </p>
              </div>
          </div>
      </section>

      {/* 2. OPERATIONAL WORKFLOW - Technical Grid */}
      <section className="py-24 bg-cc-cream border-b border-gray-200">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                 <div>
                    <h2 className="font-display text-4xl text-cc-primary mb-4">Standard Operating Procedure</h2>
                    <p className="text-cc-primary/60 text-base max-w-xl font-light">Our SGS-verified workflow ensures zero variance between contracted specifications and delivered cargo.</p>
                 </div>
                 <div className="hidden md:block mt-6 md:mt-0">
                    <span className="text-xs font-bold text-cc-primary uppercase tracking-widest border border-cc-primary/20 px-4 py-2 rounded-full">ISO 9001:2015 Certified</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                      { step: '01', title: 'Procurement', icon: <Network size={28}/>, desc: 'Direct sourcing from APMCs in Unjha, Guntur, and Nizamabad for best market rates.' },
                      { step: '02', title: 'Quality Audit', icon: <ClipboardCheck size={28}/>, desc: 'Pre-shipment inspections by SGS/Bureau Veritas for weight, quality, and packing.' },
                      { step: '03', title: 'Logistics', icon: <Container size={28}/>, desc: 'Service contracts with Maersk, MSC, and CMA CGM from JNPT, Mundra & Cochin.' },
                      { step: '04', title: 'Documentation', icon: <FileCheck size={28}/>, desc: 'Handling APEDA, Spices Board, and COO certificates for swift customs clearance.' }
                  ].map((item, index) => (
                      <div key={item.step} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-cc-gold/30 group">
                          <div className="flex justify-between items-start mb-8">
                              <span className="text-xs font-bold text-cc-gold uppercase tracking-widest bg-cc-cream px-3 py-1 rounded-md">Step {item.step}</span>
                              <div className="text-cc-primary/30 group-hover:text-cc-primary transition-colors">{item.icon}</div>
                          </div>
                          <h3 className="font-display text-2xl text-cc-primary mb-4 group-hover:text-cc-secondary transition-colors">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed font-sans">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. COMMERCIAL FRAMEWORK - Contract Style */}
      <section className="py-24 bg-white rounded-t-[3rem] -mt-12 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Left: Description */}
               <div className="lg:col-span-4">
                   <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Commercial Terms</span>
                   <h2 className="font-display text-5xl text-cc-primary mb-8 leading-tight">Financial <br/>Frameworks.</h2>
                   <p className="text-cc-primary/70 font-light leading-relaxed mb-10 text-base">
                       We structure transactions to mitigate risk. As a Star Export House, we ensure all RBI and FEMA guidelines are strictly followed for smooth remittance.
                   </p>
                   <div className="bg-cc-cream p-8 rounded-3xl border border-gray-100">
                       <h4 className="font-bold text-xs uppercase tracking-widest text-cc-primary mb-6 flex items-center gap-3">
                           <Shield size={16} className="text-cc-gold"/> Compliance
                       </h4>
                       <ul className="space-y-4 text-sm text-gray-600">
                           <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cc-primary"/> FSSAI & APEDA Registered</li>
                           <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cc-primary"/> UCP 600 Compliant LCs</li>
                           <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-cc-primary"/> GST / LUT Bonded Exports</li>
                       </ul>
                   </div>
               </div>

               {/* Right: Terms Grid */}
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Incoterms Card */}
                   <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:border-cc-primary/20 transition-all">
                      <div className="flex items-center gap-5 mb-8 pb-8 border-b border-gray-100">
                         <div className="p-4 bg-cc-cream text-cc-primary rounded-2xl"><Ship size={28}/></div>
                         <div>
                             <h3 className="font-display text-2xl text-cc-primary">Incoterms 2020</h3>
                             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Shipping & Liability</p>
                         </div>
                      </div>
                      <div className="space-y-5">
                          {[
                              { term: 'FOB', desc: 'Free on Board (Mundra / JNPT / Cochin)' },
                              { term: 'CFR', desc: 'Cost and Freight (Destination Port)' },
                              { term: 'CIF', desc: 'Cost, Insurance & Freight' }
                          ].map(t => (
                              <div key={t.term} className="flex justify-between items-center p-4 bg-cc-cream rounded-xl border border-transparent hover:border-cc-gold/20 transition-colors">
                                  <span className="font-bold text-cc-primary font-display text-lg">{t.term}</span>
                                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">{t.desc}</span>
                              </div>
                          ))}
                      </div>
                   </div>

                   {/* Payment Terms Card */}
                   <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:border-cc-primary/20 transition-all">
                      <div className="flex items-center gap-5 mb-8 pb-8 border-b border-gray-100">
                         <div className="p-4 bg-cc-cream text-cc-primary rounded-2xl"><BadgeDollarSign size={28}/></div>
                         <div>
                             <h3 className="font-display text-2xl text-cc-primary">Payment Terms</h3>
                             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">Settlement Options</p>
                         </div>
                      </div>
                      <div className="space-y-5">
                          <div className="p-4 bg-cc-cream rounded-xl border border-transparent hover:border-cc-gold/20 transition-colors">
                              <span className="block font-bold text-cc-primary text-sm mb-1 uppercase tracking-wide">Letter of Credit (LC)</span>
                              <span className="block text-xs text-gray-500">100% Irrevocable LC at Sight from Prime Bank.</span>
                          </div>
                          <div className="p-4 bg-cc-cream rounded-xl border border-transparent hover:border-cc-gold/20 transition-colors">
                              <span className="block font-bold text-cc-primary text-sm mb-1 uppercase tracking-wide">Telegraphic Transfer (TT)</span>
                              <span className="block text-xs text-gray-500">30% Advance, 70% against Scan BL.</span>
                          </div>
                          <div className="p-4 bg-cc-cream rounded-xl border border-transparent hover:border-cc-gold/20 transition-colors">
                              <span className="block font-bold text-cc-primary text-sm mb-1 uppercase tracking-wide">Domestic Wholesale</span>
                              <span className="block text-xs text-gray-500">RTGS / NEFT against Proforma Invoice.</span>
                          </div>
                      </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. LOGISTICS CAPABILITIES */}
      <section className="py-24 bg-cc-primary text-white overflow-hidden relative border-t border-white/5">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
              <div className="mb-16">
                   <h2 className="font-display text-5xl mb-6">Logistics Matrix</h2>
                   <p className="text-white/60 font-light text-base max-w-2xl leading-relaxed">
                       We leverage multimodal transport systems to optimize transit times and freight costs across India and beyond.
                   </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <Container size={40} className="text-cc-gold mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-2xl mb-4 text-white">FCL Shipping</h3>
                      <ul className="space-y-4 text-sm text-white/70">
                          <li className="flex justify-between border-b border-white/10 pb-2"><span>20ft Heavy Tested</span> <span className="text-white font-bold">Up to 28 MT</span></li>
                          <li className="flex justify-between border-b border-white/10 pb-2"><span>40ft High Cube</span> <span className="text-white font-bold">Volume Cargo</span></li>
                          <li className="flex justify-between pt-1"><span>Flexitanks</span> <span className="text-white font-bold">Edible Oils</span></li>
                      </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <PackageCheck size={40} className="text-cc-gold mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-2xl mb-4 text-white">LCL Consolidation</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                          Hub-and-spoke consolidation at Nhava Sheva (JNPT) and Mundra. Combine Rice, Spices, and Pulses in a single container for trial orders.
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cc-gold border border-cc-gold/30 px-3 py-1.5 rounded-full">Ideal for SMEs</span>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <Truck size={40} className="text-cc-gold mb-8 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-2xl mb-4 text-white">Inland Haulage</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                          Door-to-Port connectivity via Concor Rakes and Trailer fleets. GPS tracking from factory in Punjab/Kerala to the terminal.
                      </p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};