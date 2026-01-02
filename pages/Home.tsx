import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, CheckCircle2, TrendingUp, ShieldCheck, MapPin, Package, Clock, Anchor, Lock, Globe, FileCheck, Truck } from 'lucide-react';
import { CATEGORIES, PRODUCTS, BUYING_REQUESTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=2670&auto=format&fit=crop", // Wide angle port
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop", // Logistics
  "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2670&auto=format&fit=crop", // Cargo Ship
  "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2670&auto=format&fit=crop"  // Stacked Containers
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[700px] w-full flex flex-col items-center justify-center bg-cc-primary overflow-hidden">
        {/* Background Slideshow with Ken Burns Effect */}
        <div className="absolute inset-0 z-0">
             {HERO_IMAGES.map((img, index) => (
                <div 
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={img} 
                        className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentHeroIndex ? 'scale-110' : 'scale-100'}`}
                        alt="Global Trade Background"
                    />
                    {/* Dark Overlays */}
                    <div className="absolute inset-0 bg-cc-primary/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cc-primary via-transparent to-cc-primary/30"></div>
                </div>
             ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl px-6 flex flex-col items-center text-center pt-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-md mb-8 shadow-2xl animate-fade-in">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-[10px] md:text-xs font-mono font-bold text-gray-100 uppercase tracking-[0.2em]">Global Trading Desk Active</span>
            </div>
            
            {/* Headlines */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight drop-shadow-2xl animate-fade-up">
                SOURCING THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cc-gold via-yellow-200 to-cc-gold">WORLD'S HARVEST</span>
            </h1>
            
            <p className="font-sans text-lg md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md animate-fade-up delay-100">
                A division of <strong>CC Group</strong>. We bridge the gap between origin farmers and industrial consumers, delivering bulk food commodities with precision logistics.
            </p>
            
            {/* Search Component */}
            <div className="w-full max-w-3xl mx-auto relative group z-30 animate-fade-up delay-200">
                <div className="absolute inset-0 bg-white/10 blur-xl rounded-full transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative flex items-center bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden p-2 transition-transform duration-300 hover:scale-[1.01]">
                    <div className="pl-6 text-gray-400">
                        <Search size={24} />
                    </div>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="What are you looking for? (e.g. Sugar IC45, Rice, Frozen Poultry)..."
                        className="flex-grow px-4 py-4 text-lg text-cc-primary placeholder:text-gray-400 focus:outline-none bg-transparent font-medium"
                    />
                    <button 
                        onClick={() => onNavigate('products')}
                        className="bg-cc-primary hover:bg-cc-dark text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
                    >
                        Search Stock <ArrowRight size={16} />
                    </button>
                </div>
            </div>
            
            {/* Quick Stats / Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 text-white/80 animate-fade-up delay-300">
                <div className="flex flex-col items-center gap-1 group">
                    <Globe size={24} className="text-cc-gold mb-2 group-hover:scale-110 transition-transform"/>
                    <span className="font-display font-bold text-xl text-white">25+</span>
                    <span className="text-[10px] uppercase tracking-widest font-mono">Origin Countries</span>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col items-center gap-1 group">
                    <Truck size={24} className="text-cc-gold mb-2 group-hover:scale-110 transition-transform"/>
                    <span className="font-display font-bold text-xl text-white">50k+ MT</span>
                    <span className="text-[10px] uppercase tracking-widest font-mono">Shipped Annually</span>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                <div className="flex flex-col items-center gap-1 group">
                    <FileCheck size={24} className="text-cc-gold mb-2 group-hover:scale-110 transition-transform"/>
                    <span className="font-display font-bold text-xl text-white">100%</span>
                    <span className="text-[10px] uppercase tracking-widest font-mono">Verified Suppliers</span>
                </div>
            </div>
        </div>
      </section>

      {/* 2. THE CC ADVANTAGE (Value Props) */}
      <section className="py-20 bg-white border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {/* Prop 1 */}
               <div className="flex flex-col items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-14 h-14 bg-cc-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cc-primary/20">
                     <Anchor size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cc-primary mb-3">Direct Origin Access</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                     We bypass intermediaries by maintaining direct contracts with mills and refineries in Brazil, India, Thailand, and Vietnam. This ensures competitive FOB/CIF pricing.
                  </p>
               </div>
               
               {/* Prop 2 */}
               <div className="flex flex-col items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-14 h-14 bg-cc-gold text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cc-gold/20">
                     <ShieldCheck size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cc-primary mb-3">Quality Assurance</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                     Every shipment is inspected by SGS, Bureau Veritas, or Cotecna prior to loading. We guarantee specifications match the contract, protecting your production line.
                  </p>
               </div>

               {/* Prop 3 */}
               <div className="flex flex-col items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-14 h-14 bg-cc-secondary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cc-secondary/20">
                     <Truck size={28} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-cc-primary mb-3">Logistics Mastery</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                     Our in-house logistics team manages multimodal transport—vessel chartering, container booking, and customs clearance—ensuring on-time delivery to your port.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 3. CATEGORY BROWSER - Enhanced */}
      <section className="bg-gray-50 py-24">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h3 className="text-cc-gold font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                     <Package size={16}/> Our Portfolio
                  </h3>
                  <h2 className="font-display text-4xl font-bold text-cc-primary">Product Categories</h2>
               </div>
               <button onClick={() => onNavigate('products')} className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-cc-primary transition-colors">
                  View Full Catalog <ArrowRight size={16} />
               </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {CATEGORIES.map((cat) => (
                    <div 
                        key={cat.id} 
                        onClick={() => onNavigate('products')}
                        className="group cursor-pointer relative flex flex-col items-center"
                    >
                        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 relative shadow-md group-hover:shadow-2xl transition-all duration-500">
                            <img 
                                src={cat.image} 
                                alt={cat.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                        <h3 className="font-display font-bold text-cc-primary text-sm text-center group-hover:text-cc-gold transition-colors">{cat.name}</h3>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 4. PROCUREMENT BOARD (Dark Mode) */}
      <section className="py-24 bg-cc-primary text-white border-y border-white/5 relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div>
                      <div className="flex items-center gap-2 text-cc-secondary font-bold uppercase text-xs tracking-widest mb-3 animate-pulse">
                          <span className="w-2 h-2 rounded-full bg-cc-secondary"></span> Live Tender Board
                      </div>
                      <h2 className="font-display text-4xl font-bold text-white">Active Buying Requirements</h2>
                      <p className="text-gray-400 mt-2 font-light">We are immediate cash buyers for these open contracts.</p>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="mt-6 md:mt-0 bg-cc-gold hover:bg-yellow-500 text-white border-none px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-cc-gold/20">
                      Submit Offer
                  </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                  <div className="hidden md:grid grid-cols-12 gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold px-6 pb-2 border-b border-white/10">
                      <div className="col-span-4">Commodity</div>
                      <div className="col-span-2">Volume</div>
                      <div className="col-span-2">Destination</div>
                      <div className="col-span-2">Posted</div>
                      <div className="col-span-2 text-right">Status</div>
                  </div>

                  {BUYING_REQUESTS.map((req, idx) => (
                      <div key={req.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg p-6 md:p-4 transition-all duration-200 group cursor-default">
                          <div className="col-span-4">
                              <span className="md:hidden text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Commodity</span>
                              <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-xs font-mono text-gray-400">{idx + 1}</span>
                                  <h3 className="font-display font-bold text-lg md:text-base text-white group-hover:text-cc-gold transition-colors">{req.commodity}</h3>
                              </div>
                          </div>
                          <div className="col-span-2">
                              <span className="md:hidden text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Volume</span>
                              <span className="text-sm font-mono text-cc-secondary">{req.volume}</span>
                          </div>
                          <div className="col-span-2">
                              <span className="md:hidden text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Destination</span>
                              <div className="flex items-center gap-2 text-sm text-gray-300">
                                  <MapPin size={14} className="text-gray-500"/> {req.destination}
                              </div>
                          </div>
                          <div className="col-span-2">
                              <span className="md:hidden text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Posted</span>
                              <span className="text-xs text-gray-400 flex items-center gap-2"><Clock size={12}/> {req.postedDate}</span>
                          </div>
                          <div className="col-span-2 flex md:justify-end mt-4 md:mt-0">
                               <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                                req.status === 'Urgent' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 
                                req.status === 'Closing Soon' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 'bg-green-500/20 text-green-400 border-green-500/30'
                              }`}>
                                  {req.status}
                              </span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. SPOT MARKET HIGHLIGHTS */}
      <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <div className="flex items-center gap-2 text-cc-primary font-bold uppercase text-xs tracking-widest mb-3">
                          <Package size={14} className="text-cc-gold" /> Ready Stock
                      </div>
                      <h2 className="font-display text-4xl font-bold text-cc-primary">Spot Market Offers</h2>
                  </div>
                  <button onClick={() => onNavigate('products')} className="text-cc-secondary font-bold text-sm hover:underline flex items-center gap-1">
                      Browse All Inventory <ArrowRight size={16} />
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRODUCTS.slice(0, 4).map((product) => (
                      <div key={product.id} className="group flex flex-col h-full bg-white border border-gray-100 hover:border-cc-gold/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                          <div className="h-64 overflow-hidden relative bg-gray-100">
                              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cc-primary shadow-sm border border-gray-100 rounded-sm flex items-center gap-1">
                                  <Globe size={10} className="text-cc-gold"/> {product.origin}
                              </div>
                              <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                              {/* Overlay */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <button onClick={() => onNavigate('products')} className="bg-white text-cc-primary px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                      View Specs
                                  </button>
                              </div>
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                              <div className="text-[10px] font-bold text-cc-gold uppercase tracking-widest mb-2">{product.category}</div>
                              <h3 className="font-display font-bold text-lg text-cc-primary mb-3 leading-snug">{product.name}</h3>
                              
                              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                  <div>
                                      <span className="block text-[10px] text-gray-400 uppercase font-bold mb-0.5">Min Order</span>
                                      <span className="text-xs font-bold text-gray-700 font-mono">
                                          {product.specs?.['MOQ'] || '1 Container'}
                                      </span>
                                  </div>
                                  <div className="text-right">
                                      <span className="block text-[10px] text-gray-400 uppercase font-bold mb-0.5">Price Term</span>
                                      <span className="text-xs font-bold text-cc-secondary font-mono">FOB/CIF</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
               <h2 className="font-display text-3xl md:text-5xl font-bold text-cc-primary mb-6">Ready to trade?</h2>
               <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
                   Whether you are looking to secure supply for your factory or sell your production volume, CC Group is your strategic partner.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <button onClick={() => onNavigate('contact')} className="px-10 py-5 bg-cc-primary text-white text-sm font-bold uppercase tracking-widest rounded-sm shadow-xl hover:bg-cc-dark hover:-translate-y-1 transition-all">
                       Buyer Registration
                   </button>
                   <button onClick={() => onNavigate('contact')} className="px-10 py-5 bg-white border border-gray-200 text-cc-primary text-sm font-bold uppercase tracking-widest rounded-sm hover:border-cc-gold hover:text-cc-gold transition-all">
                       Supplier Registration
                   </button>
               </div>
          </div>
      </section>

    </div>
  );
};