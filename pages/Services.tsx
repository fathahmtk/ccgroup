import React from 'react';
import { Ship, Truck, PackageCheck, ClipboardCheck, Container, Users, ArrowRight, Anchor, Factory, Plane, MapPin } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO - INFRASTRUCTURE */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-cc-primary overflow-hidden">
          <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cc-primary via-cc-primary/80 to-transparent z-10"></div>
              <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale opacity-50" 
                  alt="Port Logistics"
              />
          </div>
          <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl animate-slide-up">
                  <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] font-mono uppercase tracking-widest text-cc-secondary mb-6 backdrop-blur-md bg-cc-primary/50">
                     End-to-End Supply Chain
                  </span>
                  <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                      Infrastructure <br/> You Can Trust.
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
                      We operate a seamless supply chain network connecting origin farmers to destination distributors. 
                      Integrity, timeliness, and product safety are our operational cornerstones.
                  </p>
                  <button className="bg-white text-cc-primary px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-cc-secondary hover:text-white transition-colors">
                      Download Logistics Profile
                  </button>
              </div>
          </div>
      </section>

      {/* NEW: GLOBAL NETWORK MAP */}
      <section className="bg-cc-primary py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             {/* Abstract Map Dots - simplified visualization */}
             <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping"></div>
             <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-white rounded-full animate-ping delay-700"></div>
             <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-1000"></div>
             <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full">
                 <path d="M 300 200 Q 600 100 900 300" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" className="opacity-20" />
                 <path d="M 400 500 Q 700 300 1000 400" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" className="opacity-20" />
             </svg>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div>
                      <h2 className="font-display text-3xl font-bold text-white mb-2">Global Origin Network</h2>
                      <p className="text-gray-400">Strategic sourcing hubs ensuring year-round availability.</p>
                  </div>
                  <div className="flex gap-4 mt-6 md:mt-0">
                      <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> Processing Hubs
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                          <div className="w-2 h-2 bg-white rounded-full"></div> Export Origins
                      </div>
                  </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                      { region: 'South Asia', products: 'Basmati Rice, Spices', country: 'India/Pakistan' },
                      { region: 'Southeast Asia', products: 'Jasmine Rice, Pepper', country: 'Vietnam/Thailand' },
                      { region: 'South America', products: 'Sugar, Poultry, Maize', country: 'Brazil' },
                      { region: 'Eastern Europe', products: 'Sunflower Oil, Wheat', country: 'Ukraine/Turkey' },
                  ].map((hub, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                          <MapPin className="text-cc-secondary mb-4" size={24} />
                          <h4 className="text-white font-bold text-lg mb-1">{hub.region}</h4>
                          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">{hub.country}</p>
                          <p className="text-sm text-gray-300">{hub.products}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                  <h2 className="font-display text-3xl font-bold text-cc-primary mb-4">Core Operational Capabilities</h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">We handle the complexities of international trade so you can focus on distribution.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-8 group-hover:bg-cc-secondary transition-colors">
                          <Container size={32} className="text-cc-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-cc-primary mb-3">FCL Shipping</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          Full Container Loads (20ft/40ft) directly from origin ports to your warehouse. Optimized stowage plans for maximum volume.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cc-secondary group-hover:translate-x-2 transition-transform">
                          Learn More <ArrowRight size={14} />
                      </a>
                  </div>

                  <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-8 group-hover:bg-cc-secondary transition-colors">
                          <PackageCheck size={32} className="text-cc-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-cc-primary mb-3">Consolidation (LCL)</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          Combine multiple SKUs (Rice, Spices, Pulses) into a single shipment. Ideal for distributors testing new product lines.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cc-secondary group-hover:translate-x-2 transition-transform">
                          Learn More <ArrowRight size={14} />
                      </a>
                  </div>

                  <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-blue-50 rounded-sm flex items-center justify-center mb-8 group-hover:bg-cc-secondary transition-colors">
                          <ClipboardCheck size={32} className="text-cc-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-cc-primary mb-3">Customs Clearance</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6">
                          Complete documentation handling (COO, Phytosanitary, Health Certs) to ensure zero-delay clearance at destination.
                      </p>
                      <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cc-secondary group-hover:translate-x-2 transition-transform">
                          Learn More <ArrowRight size={14} />
                      </a>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. PROCESS FLOW (VISUAL STRIPS) */}
      <section>
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-auto overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1625246333195-581972379a58?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Sourcing" />
                  <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-4xl text-gray-200 font-bold">01</span>
                      <span className="h-px flex-1 bg-gray-200"></span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-cc-primary mb-6">Strategic Procurement</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      Our field agents inspect crops at the source during harvest. We verify moisture content, grain size, and purity before a single purchase order is issued, ensuring you only pay for premium grade.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> Direct Farm Contracts
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> Pre-shipment Lab Testing
                      </li>
                  </ul>
              </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-cc-primary text-white p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-4xl text-white/20 font-bold">02</span>
                      <span className="h-px flex-1 bg-white/20"></span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-6">Processing & Packaging</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      Raw commodities are processed in our ISO 22000 certified facilities. We offer private labeling services, allowing you to launch your own brand with custom packaging from 1kg to 50kg.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-bold text-gray-200">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> OEM / Private Label
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-gray-200">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> Sortex Cleaning & Polishing
                      </li>
                  </ul>
              </div>
              <div className="h-[400px] lg:h-auto overflow-hidden relative group order-1 lg:order-2">
                  <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2709&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Processing" />
              </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-auto overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Logistics" />
              </div>
              <div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-4xl text-gray-200 font-bold">03</span>
                      <span className="h-px flex-1 bg-gray-200"></span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-cc-primary mb-6">Global Freight Management</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      We leverage volume contracts with major shipping lines (Maersk, MSC, CMA CGM) to secure priority booking and competitive rates. Documents are couriered via DHL immediately upon departure.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> CIF / FOB / Ex-Works
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                          <div className="w-2 h-2 bg-cc-secondary rounded-full"></div> Marine Insurance Coverage
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* CTA */}
      <div className="bg-cc-light py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cc-primary mb-6">Ready to secure your supply?</h2>
              <p className="text-gray-500 mb-10 text-lg">
                  Speak to our trade desk about your volume requirements and get a custom logistical proposal within 24 hours.
              </p>
              <button className="bg-cc-secondary text-white px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-blue-600 transition-colors shadow-lg">
                  Contact Trade Desk
              </button>
          </div>
      </div>

    </div>
  );
};