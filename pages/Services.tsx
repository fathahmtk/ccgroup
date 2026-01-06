import React from 'react';
import { PackageCheck, ClipboardCheck, Container, Network, BadgeDollarSign, Ship, CheckCircle2, Shield, Anchor, FileCheck, Truck, Scale, Plane } from 'lucide-react';

export const Services: React.FC = () => {

  return (
    <div className="bg-cc-cream min-h-screen font-sans">
      
      {/* 1. HERO - Infrastructure Focused */}
      <section className="relative h-[70vh] min-h-[700px] flex flex-col justify-end pb-24 overflow-hidden bg-cc-dark border-b border-white/5">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-30 animate-slow-zoom"
                alt="Logistics Warehouse"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-cc-dark via-cc-dark/50 to-transparent"></div>
          </div>

          <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full relative z-10 text-white">
              <div className="max-w-4xl animate-fade-up">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-16 h-[1px] bg-cc-gold"></span>
                    <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] font-sans">Supply Chain Infrastructure</span>
                  </div>
                  <h1 className="font-display text-7xl md:text-9xl mb-8 leading-[0.85] tracking-tight">
                      Logistics <span className="text-white/40 italic font-serif">&</span> <br/>
                      Compliance.
                  </h1>
                  <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl font-sans border-l border-cc-gold/30 pl-8">
                      CC Group operates a rigid supply chain network connecting Indian farmers to global distributors. Integrity, timeliness, and product safety are our operational cornerstones.
                  </p>
              </div>
          </div>
      </section>

      {/* 2. OPERATIONAL WORKFLOW - Technical Schematics */}
      <section className="py-32 bg-cc-cream border-b border-gray-200">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                 <div>
                    <h2 className="font-display text-5xl md:text-6xl text-cc-primary mb-6">Standard Operating Procedure</h2>
                    <p className="text-cc-primary/60 text-lg max-w-xl font-light font-sans">Our SGS-verified workflow ensures zero variance between contracted specifications and delivered cargo.</p>
                 </div>
                 <div className="hidden md:block mt-6 md:mt-0">
                    <span className="text-xs font-bold text-cc-primary uppercase tracking-widest border border-cc-primary/20 px-6 py-3 rounded-full hover:bg-cc-primary hover:text-white transition-colors cursor-default font-sans">ISO 9001:2015 Certified</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-gray-200">
                  {[
                      { step: '01', title: 'Procurement', icon: <Network size={32}/>, desc: 'Direct sourcing from APMCs in Unjha, Guntur, and Nizamabad.' },
                      { step: '02', title: 'Quality Audit', icon: <ClipboardCheck size={32}/>, desc: 'Pre-shipment inspections by SGS/Bureau Veritas for weight & quality.' },
                      { step: '03', title: 'Logistics', icon: <Container size={32}/>, desc: 'Service contracts with Maersk, MSC, and CMA CGM from JNPT & Mundra.' },
                      { step: '04', title: 'Documentation', icon: <FileCheck size={32}/>, desc: 'Handling APEDA, Spices Board, and COO certificates.' }
                  ].map((item, index) => (
                      <div key={item.step} className="bg-white p-12 border-r border-b border-gray-200 hover:bg-cc-primary/5 transition-colors group relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-display font-bold text-gray-300 group-hover:text-cc-gold transition-colors select-none -mr-4 -mt-4">
                              {item.step}
                          </div>
                          <div className="relative z-10">
                              <div className="text-cc-primary mb-8 group-hover:text-cc-gold transition-colors">{item.icon}</div>
                              <h3 className="font-display text-3xl text-cc-primary mb-4">{item.title}</h3>
                              <p className="text-gray-500 text-sm leading-relaxed font-sans pr-4">{item.desc}</p>
                              
                              <div className="w-8 h-[1px] bg-cc-gold mt-8 group-hover:w-16 transition-all duration-500"></div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. COMMERCIAL FRAMEWORK - Contract Style */}
      <section className="py-32 bg-white rounded-t-[4rem] -mt-12 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
               
               {/* Left: Description */}
               <div className="lg:col-span-4 flex flex-col justify-between">
                   <div>
                       <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs mb-6 block font-sans">Commercial Terms</span>
                       <h2 className="font-display text-6xl text-cc-primary mb-8 leading-tight">Financial <br/>Frameworks.</h2>
                       <p className="text-cc-primary/70 font-light leading-relaxed mb-10 text-lg font-sans">
                           We structure transactions to mitigate risk. As a Star Export House, we ensure all RBI and FEMA guidelines are strictly followed for smooth remittance.
                       </p>
                   </div>
                   
                   <div className="bg-cc-cream p-10 rounded-[2rem] border border-gray-100">
                       <h4 className="font-bold text-xs uppercase tracking-widest text-cc-primary mb-6 flex items-center gap-3 font-sans">
                           <Shield size={16} className="text-cc-gold"/> Compliance Matrix
                       </h4>
                       <ul className="space-y-5 text-sm text-gray-600 font-sans">
                           <li className="flex items-center gap-4"><CheckCircle2 size={18} className="text-cc-secondary"/> FSSAI & APEDA Registered</li>
                           <li className="flex items-center gap-4"><CheckCircle2 size={18} className="text-cc-secondary"/> UCP 600 Compliant LCs</li>
                           <li className="flex items-center gap-4"><CheckCircle2 size={18} className="text-cc-secondary"/> GST / LUT Bonded Exports</li>
                       </ul>
                   </div>
               </div>

               {/* Right: Terms Grid */}
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                   {/* Incoterms Card */}
                   <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-cc-primary/20 transition-all group">
                      <div className="flex items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                         <div className="p-5 bg-cc-primary text-white rounded-2xl group-hover:scale-110 transition-transform"><Ship size={32}/></div>
                         <div>
                             <h3 className="font-display text-3xl text-cc-primary">Incoterms 2020</h3>
                             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2 font-sans">Shipping & Liability</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                          {[
                              { term: 'FOB', desc: 'Free on Board (Mundra / JNPT)' },
                              { term: 'CFR', desc: 'Cost and Freight (Dest. Port)' },
                              { term: 'CIF', desc: 'Cost, Insurance & Freight' }
                          ].map(t => (
                              <div key={t.term} className="flex justify-between items-center p-5 bg-gray-50 rounded-2xl border border-transparent hover:bg-cc-cream hover:border-cc-gold/20 transition-all cursor-default">
                                  <span className="font-bold text-cc-primary font-display text-xl">{t.term}</span>
                                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest font-sans">{t.desc}</span>
                              </div>
                          ))}
                      </div>
                   </div>

                   {/* Payment Terms Card */}
                   <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-cc-primary/20 transition-all group">
                      <div className="flex items-center gap-6 mb-10 pb-8 border-b border-gray-100">
                         <div className="p-5 bg-cc-primary text-white rounded-2xl group-hover:scale-110 transition-transform"><BadgeDollarSign size={32}/></div>
                         <div>
                             <h3 className="font-display text-3xl text-cc-primary">Payment Terms</h3>
                             <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-2 font-sans">Settlement Options</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                          <div className="p-5 bg-gray-50 rounded-2xl border border-transparent hover:bg-cc-cream hover:border-cc-gold/20 transition-all cursor-default">
                              <span className="block font-bold text-cc-primary text-sm mb-1 uppercase tracking-wide font-sans">Letter of Credit (LC)</span>
                              <span className="block text-xs text-gray-500 font-sans">100% Irrevocable LC at Sight from Prime Bank.</span>
                          </div>
                          <div className="p-5 bg-gray-50 rounded-2xl border border-transparent hover:bg-cc-cream hover:border-cc-gold/20 transition-all cursor-default">
                              <span className="block font-bold text-cc-primary text-sm mb-1 uppercase tracking-wide font-sans">Telegraphic Transfer (TT)</span>
                              <span className="block text-xs text-gray-500 font-sans">30% Advance, 70% against Scan BL.</span>
                          </div>
                          <div className="p-5 bg-gray-50 rounded-2xl border border-transparent hover:bg-cc-cream hover:border-cc-gold/20 transition-all cursor-default">
                              <span className="block font-bold text-cc-primary text-sm mb-1 uppercase tracking-wide font-sans">Domestic Wholesale</span>
                              <span className="block text-xs text-gray-500 font-sans">RTGS / NEFT against Proforma Invoice.</span>
                          </div>
                      </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. LOGISTICS CAPABILITIES */}
      <section className="py-32 bg-cc-primary text-white overflow-hidden relative border-t border-white/5">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
              <div className="mb-20">
                   <h2 className="font-display text-6xl mb-6">Logistics Matrix</h2>
                   <p className="text-white/60 font-light text-lg max-w-2xl leading-relaxed font-sans">
                       We leverage multimodal transport systems to optimize transit times and freight costs across India and beyond.
                   </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <Container size={48} className="text-cc-gold mb-10 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-3xl mb-6 text-white">FCL Shipping</h3>
                      <ul className="space-y-6 text-sm text-white/70 font-sans">
                          <li className="flex justify-between border-b border-white/10 pb-3"><span>20ft Heavy Tested</span> <span className="text-white font-bold">Up to 28 MT</span></li>
                          <li className="flex justify-between border-b border-white/10 pb-3"><span>40ft High Cube</span> <span className="text-white font-bold">Volume Cargo</span></li>
                          <li className="flex justify-between pt-1"><span>Flexitanks</span> <span className="text-white font-bold">Edible Oils</span></li>
                      </ul>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <PackageCheck size={48} className="text-cc-gold mb-10 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-3xl mb-6 text-white">LCL Consolidation</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-8 font-sans">
                          Hub-and-spoke consolidation at Nhava Sheva (JNPT) and Mundra. Combine Rice, Spices, and Pulses in a single container for trial orders.
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cc-gold border border-cc-gold/30 px-4 py-2 rounded-full font-sans">Ideal for SMEs</span>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <Truck size={48} className="text-cc-gold mb-10 group-hover:scale-110 transition-transform" />
                      <h3 className="font-display text-3xl mb-6 text-white">Inland Haulage</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-8 font-sans">
                          Door-to-Port connectivity via Concor Rakes and Trailer fleets. GPS tracking from factory in Punjab/Kerala to the terminal.
                      </p>
                      <div className="flex gap-4">
                         <div className="p-3 bg-white/10 rounded-full"><Plane size={20}/></div>
                         <div className="p-3 bg-white/10 rounded-full"><Scale size={20}/></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};