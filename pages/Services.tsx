import React, { useState } from 'react';
import { Ship, Truck, PackageCheck, ClipboardCheck, Container, Users, ArrowRight, Anchor, MapPin, Calculator, RefreshCw } from 'lucide-react';

export const Services: React.FC = () => {
  const [route, setRoute] = useState({ from: '', to: '' });
  const [estimate, setEstimate] = useState<null | number>(null);

  const calculateFreight = (e: React.FormEvent) => {
      e.preventDefault();
      // Mock calculation
      setEstimate(Math.floor(Math.random() * (4500 - 1500 + 1)) + 1500);
  };

  return (
    <div className="bg-white">
      
      {/* 1. HERO - INFRASTRUCTURE */}
      <section className="relative h-[50vh] min-h-[500px] flex items-center bg-cc-primary overflow-hidden">
          <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cc-primary via-cc-primary/80 to-transparent z-10"></div>
              <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale opacity-40" 
                  alt="Port Logistics"
              />
          </div>
          <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-12 w-full pt-20">
              <div className="max-w-2xl animate-fade-up">
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
              </div>
          </div>
      </section>

      {/* 2. FREIGHT CALCULATOR (NEW) */}
      <section className="relative -mt-24 z-30 mb-24 px-6 md:px-12">
         <div className="max-w-[1600px] mx-auto">
             <div className="bg-white rounded-sm shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                 <div className="lg:w-1/3">
                     <div className="flex items-center gap-2 text-cc-gold font-bold uppercase text-xs tracking-widest mb-3">
                         <Calculator size={16} /> Instant Estimator
                     </div>
                     <h2 className="font-display text-3xl font-bold text-cc-primary mb-4">Freight Calculator</h2>
                     <p className="text-gray-500 text-sm leading-relaxed">
                         Get an indicative spot rate for FCL shipments between major trade lanes. Rates are subject to seasonal bunker adjustment factors (BAF).
                     </p>
                 </div>
                 <div className="lg:w-2/3">
                     <form onSubmit={calculateFreight} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                         <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Port of Loading</label>
                             <select 
                                required
                                onChange={(e) => setRoute({...route, from: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 p-4 text-cc-primary font-bold focus:border-cc-gold focus:outline-none transition-colors rounded-sm"
                             >
                                 <option value="">Select Origin</option>
                                 <option>Santos, Brazil (BRSSZ)</option>
                                 <option>Mumbai, India (INBOM)</option>
                                 <option>Ho Chi Minh, Vietnam (VNSGN)</option>
                                 <option>Odessa, Ukraine (UAODS)</option>
                             </select>
                         </div>
                         <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Port of Discharge</label>
                             <select 
                                required
                                onChange={(e) => setRoute({...route, to: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-200 p-4 text-cc-primary font-bold focus:border-cc-gold focus:outline-none transition-colors rounded-sm"
                             >
                                 <option value="">Select Destination</option>
                                 <option>Jebel Ali, UAE (AEJEA)</option>
                                 <option>Rotterdam, Netherlands (NLRTM)</option>
                                 <option>Dammam, KSA (SADMM)</option>
                                 <option>Singapore (SGSIN)</option>
                             </select>
                         </div>
                         <button type="submit" className="h-[58px] bg-cc-primary text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-cc-secondary transition-colors flex items-center justify-center gap-2">
                             {estimate ? <><RefreshCw size={16}/> Recalculate</> : 'Get Estimate'}
                         </button>
                     </form>
                     
                     {estimate && (
                         <div className="mt-8 bg-blue-50 border border-blue-100 p-6 flex justify-between items-center rounded-sm animate-fade-in">
                             <div>
                                 <span className="text-xs text-blue-800 font-bold uppercase tracking-widest block mb-1">Estimated Ocean Freight (20ft FCL)</span>
                                 <div className="flex items-center gap-2 text-sm text-blue-600">
                                     <span>{route.from}</span> <ArrowRight size={12}/> <span>{route.to}</span>
                                 </div>
                             </div>
                             <div className="text-right">
                                 <span className="text-3xl font-display font-bold text-cc-primary">${estimate.toLocaleString()}</span>
                                 <span className="text-xs text-gray-500 block">USD / Container</span>
                             </div>
                         </div>
                     )}
                 </div>
             </div>
         </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
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

      {/* 4. NETWORK MAP */}
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
                      <div key={i} className="bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/10 transition-colors rounded-sm">
                          <MapPin className="text-cc-secondary mb-4" size={24} />
                          <h4 className="text-white font-bold text-lg mb-1">{hub.region}</h4>
                          <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">{hub.country}</p>
                          <p className="text-sm text-gray-300">{hub.products}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
};