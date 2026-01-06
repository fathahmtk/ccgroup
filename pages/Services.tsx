import React from 'react';
import { PackageCheck, ClipboardCheck, Container, Network, BadgeDollarSign, Ship, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {

  return (
    <div className="bg-white">
      
      {/* 1. HERO - Cinematic Background */}
      <section className="relative h-[70vh] min-h-[600px] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-[30%]"
                alt="Logistics Warehouse"
             />
             <div className="absolute inset-0 bg-cc-primary/80 mix-blend-multiply"></div>
          </div>

          <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full relative z-10 text-white pt-20">
              <div className="max-w-4xl animate-fade-up">
                  <span className="inline-block px-4 py-2 rounded-full border border-cc-gold/50 text-cc-gold font-bold uppercase tracking-widest text-[10px] mb-6 bg-cc-dark/30 backdrop-blur-sm">
                     End-to-End Solutions
                  </span>
                  <h1 className="font-display text-6xl md:text-8xl mb-8 leading-[0.9]">
                      Infrastructure <br/>
                      <span className="italic text-white/50 font-serif">of Trust.</span>
                  </h1>
                  <p className="text-xl text-gray-200 font-light leading-relaxed max-w-2xl border-l-2 border-cc-gold pl-8">
                      CC Group operates a seamless supply chain network connecting origin farmers to destination distributors. Integrity, timeliness, and product safety are our operational cornerstones.
                  </p>
              </div>
          </div>
      </section>

      {/* 2. PROCESS TIMELINE */}
      <section className="py-32 bg-white border-b border-gray-100">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
              <div className="mb-20 text-center max-w-2xl mx-auto">
                 <h2 className="font-display text-4xl text-cc-primary mb-4">The CC Workflow</h2>
                 <p className="text-gray-500 font-light">From harvest to harbour, every step is monitored.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cc-gold/30 to-transparent -z-10"></div>

                  {[
                      { step: '01', title: 'Procurement', desc: 'Direct sourcing from partner mills during peak harvest season to ensure best pricing.' },
                      { step: '02', title: 'Quality Control', desc: 'Pre-shipment inspections by SGS/Bureau Veritas for weight, quality, and packing.' },
                      { step: '03', title: 'Logistics', desc: 'Volume service contracts with Maersk, MSC, and CMA CGM for priority slot booking.' },
                      { step: '04', title: 'Documentation', desc: 'Swift BL release and document courier to ensure zero demurrage at destination.' }
                  ].map((item, index) => (
                      <div key={item.step} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                          <div className="w-24 h-24 bg-cc-cream rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-cc-primary transition-colors">
                              <span className="text-3xl font-serif text-cc-gold font-bold">{item.step}</span>
                          </div>
                          <h3 className="font-serif text-2xl text-cc-primary mb-4 text-center">{item.title}</h3>
                          <p className="text-gray-500 font-light leading-relaxed text-sm text-center">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. COMMERCIAL FRAMEWORK */}
      <section className="py-32 bg-cc-cream">
         <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1">
                   <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="p-4 bg-blue-50 text-blue-900 rounded-full"><Ship size={24}/></div>
                         <h3 className="font-serif text-3xl text-cc-primary">Incoterms & Payments</h3>
                      </div>
                      
                      <div className="space-y-8">
                          <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Shipping Terms</h4>
                              <div className="flex flex-wrap gap-3">
                                  {['FOB (Free on Board)', 'CIF (Cost, Ins., Freight)', 'CFR (Cost & Freight)'].map(term => (
                                      <span key={term} className="px-4 py-2 bg-gray-50 rounded-full text-sm text-cc-primary font-medium border border-gray-100">{term}</span>
                                  ))}
                              </div>
                          </div>

                          <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Payment Options</h4>
                              <ul className="space-y-4">
                                 <li className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-cc-gold mt-1"/>
                                    <div>
                                        <span className="font-bold text-cc-primary block">Letter of Credit (L/C)</span>
                                        <p className="text-sm text-gray-500">Irrevocable, at sight from top-tier bank.</p>
                                    </div>
                                 </li>
                                 <li className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-cc-gold mt-1"/>
                                    <div>
                                        <span className="font-bold text-cc-primary block">Telegraphic Transfer (TT)</span>
                                        <p className="text-sm text-gray-500">30% Advance, 70% against BL copy.</p>
                                    </div>
                                 </li>
                              </ul>
                          </div>
                      </div>
                   </div>
               </div>

               <div className="order-1 md:order-2">
                   <span className="text-cc-gold font-bold uppercase tracking-widest text-xs mb-4 block">Trading Terms</span>
                   <h2 className="font-display text-5xl md:text-6xl text-cc-primary mb-6">Flexible Frameworks.</h2>
                   <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                       We understand global finance. Our commercial frameworks are designed to mitigate risk for both buyer and seller, ensuring a smooth transaction flow.
                   </p>
                   <button className="text-cc-primary font-bold uppercase tracking-widest text-xs border-b border-cc-primary pb-1 hover:text-cc-gold hover:border-cc-gold transition-colors">
                       Download Compliance Docs
                   </button>
               </div>
            </div>
         </div>
      </section>

      {/* 4. CAPABILITIES */}
      <section className="py-32 bg-cc-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                   <h2 className="font-display text-5xl md:text-6xl">Operational <br/>Capabilities</h2>
                   <p className="text-white/60 max-w-sm text-right mt-6 md:mt-0">Precision logistics for bulk and containerized cargo.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <Container size={40} className="text-cc-gold mb-8" />
                      <h3 className="font-serif text-3xl mb-4">FCL Shipping</h3>
                      <p className="text-white/60 font-light leading-relaxed mb-8">
                          Full Container Loads (20ft/40ft) directly from origin ports. Optimized stowage plans for maximum volume efficiency.
                      </p>
                  </div>

                  <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <PackageCheck size={40} className="text-cc-gold mb-8" />
                      <h3 className="font-serif text-3xl mb-4">Consolidation</h3>
                      <p className="text-white/60 font-light leading-relaxed mb-8">
                          Combine multiple SKUs (Rice, Spices, Pulses) into a single shipment. Ideal for distributors testing new product lines.
                      </p>
                  </div>

                  <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <ClipboardCheck size={40} className="text-cc-gold mb-8" />
                      <h3 className="font-serif text-3xl mb-4">Compliance</h3>
                      <p className="text-white/60 font-light leading-relaxed mb-8">
                          Complete documentation handling (COO, Phytosanitary, Health Certs) to ensure seamless customs clearance.
                      </p>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};