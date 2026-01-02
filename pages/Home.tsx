import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, CheckCircle2, TrendingUp, ShieldCheck, MapPin, Package, Clock, Anchor, Lock, Globe, FileCheck, Truck, BarChart3, Sprout, Building2 } from 'lucide-react';
import { CATEGORIES, PRODUCTS, BUYING_REQUESTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1577239339305-1129543c8b7f?q=80&w=2574&auto=format&fit=crop", // Cinematic Port/Ship Aerial (Dark & Moody)
  "https://images.unsplash.com/photo-1625246333195-031238803120?q=80&w=2574&auto=format&fit=crop", // Golden Wheat Harvest (Origin/Farming)
  "https://images.unsplash.com/photo-1516937941348-c09645f31e3d?q=80&w=2574&auto=format&fit=crop", // Industrial Shipping (Scale)
  "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2670&auto=format&fit=crop"  // Bow of Ship at Sea (Transit)
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [heroTab, setHeroTab] = useState<'buy' | 'track'>('buy');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000); // Slower, more majestic transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white font-sans">
      
      {/* 1. HERO SECTION - Modern Side Layout */}
      <section className="relative h-screen min-h-[600px] w-full bg-cc-primary overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
             {HERO_IMAGES.map((img, index) => (
                <div 
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img 
                        src={img} 
                        className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-linear ${index === currentHeroIndex ? 'scale-110' : 'scale-100'}`}
                        alt="Global Trade Background"
                    />
                    {/* Sophisticated Gradient Layering for Text Contrast */}
                    <div className="absolute inset-0 bg-cc-primary/20 mix-blend-multiply"></div>
                    {/* Left shadow for text legibility */}
                    <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                    {/* Bottom shadow for low content */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
             ))}
        </div>

        {/* Content Container - Bottom Left Position */}
        <div className="relative z-20 h-full w-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-16 md:pb-24">
            
            <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-24">
                
                {/* Left: Text Content */}
                <div className="flex-1 max-w-3xl animate-fade-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-full bg-black/30 backdrop-blur-md mb-6 shadow-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-widest">Global Trading Desk • Live</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                        SOURCING THE <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cc-gold via-yellow-200 to-cc-gold">WORLD'S HARVEST</span>
                    </h1>
                    
                    <p className="font-sans text-lg text-gray-200 mb-8 max-w-xl font-light leading-relaxed drop-shadow-md">
                        Connecting origin farmers to industrial consumers. B2B foodstuff trading with precision logistics.
                    </p>
                    
                    <div className="flex gap-4">
                        <button 
                            onClick={() => onNavigate('products')}
                            className="bg-white text-cc-primary px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                        >
                            View Catalog
                        </button>
                        <button 
                            onClick={() => onNavigate('contact')}
                            className="border border-white/40 bg-black/20 backdrop-blur-sm text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right: Menu Tab Widget */}
                <div className="w-full max-w-md animate-fade-up delay-100">
                    <div className="bg-white/95 backdrop-blur-sm rounded-sm shadow-2xl overflow-hidden border border-white/20">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-100">
                            <button 
                                onClick={() => setHeroTab('buy')}
                                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest text-center transition-colors ${heroTab === 'buy' ? 'bg-white text-cc-primary border-b-2 border-cc-primary' : 'bg-gray-50/50 text-gray-400 hover:bg-gray-100/50'}`}
                            >
                                Find Stock
                            </button>
                            <button 
                                onClick={() => setHeroTab('track')}
                                className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest text-center transition-colors ${heroTab === 'track' ? 'bg-white text-cc-primary border-b-2 border-cc-primary' : 'bg-gray-50/50 text-gray-400 hover:bg-gray-100/50'}`}
                            >
                                Track Logistics
                            </button>
                        </div>
                        
                        {/* Tab Content */}
                        <div className="p-6">
                            {heroTab === 'buy' ? (
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3.5 text-gray-400" size={16} />
                                        <input 
                                            type="text"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder="Commodity (e.g. Rice, Sugar)..."
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-cc-primary transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                    <button 
                                        onClick={() => onNavigate('products')}
                                        className="w-full bg-cc-primary text-white py-3 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-cc-dark transition-colors flex items-center justify-center gap-2 shadow-md"
                                    >
                                        Search Inventory <ArrowRight size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Package className="absolute left-3 top-3.5 text-gray-400" size={16} />
                                        <input 
                                            type="text"
                                            placeholder="Container / BL Number"
                                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-cc-primary transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                    <button className="w-full bg-cc-gold text-white py-3 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 shadow-md">
                                        Track Shipment <Globe size={14} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 2. CORPORATE INTRO - "GROUP OF COMPANIES" */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                  <div className="flex items-center gap-2 text-cc-gold font-bold uppercase tracking-widest text-xs mb-4">
                      <Building2 size={16} />
                      CC Group of Companies
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-cc-primary mb-6">Feeding the Future.</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                      As a leading global foodstuff conglomerate, CC Group integrates the supply chain from farm to fork. 
                      Our family of companies specializes in agricultural production, wholesale trading, and last-mile logistics.
                  </p>
                  <div className="flex gap-12 border-t border-gray-100 pt-8">
                      <div className="flex flex-col">
                          <span className="font-display text-4xl font-bold text-cc-primary">12+</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Countries</span>
                      </div>
                      <div className="flex flex-col">
                          <span className="font-display text-4xl font-bold text-cc-primary">450k</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Metric Tonnes/Yr</span>
                      </div>
                      <div className="flex flex-col">
                          <span className="font-display text-4xl font-bold text-cc-primary">24/7</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Port Operations</span>
                      </div>
                  </div>
              </div>
              <div className="flex-1 relative w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                       <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Group Headquarters" />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full z-0 opacity-50"></div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-cc-gold hidden md:block z-20">
                      <p className="font-display text-cc-primary font-bold text-lg">"Quality is not an act, it is a habit."</p>
                      <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Chairman's Message</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. OUR DIVISIONS (Replaces old 'Advantage' section) */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                   <h2 className="font-display text-3xl font-bold text-cc-primary mb-4">Our Divisions</h2>
                   <p className="text-gray-500 max-w-2xl mx-auto">The specialized entities powering our global network, delivering excellence at every stage of the supply chain.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1: CC Agri */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer" onClick={() => onNavigate('services')}>
                      <div className="h-56 overflow-hidden relative">
                          <img src="https://images.unsplash.com/photo-1625246333195-031238803120?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Agriculture"/>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest text-green-700 flex items-center gap-1">
                             <Sprout size={12}/> Production
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="font-display text-xl font-bold text-cc-primary mb-2 group-hover:text-cc-gold transition-colors">CC Agriculture</h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">Direct farming operations and contract growing in Brazil and India ensuring origin traceability.</p>
                          <span className="text-cc-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight size={12}/></span>
                      </div>
                  </div>
                   {/* Card 2: CC Trade */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer" onClick={() => onNavigate('products')}>
                      <div className="h-56 overflow-hidden relative">
                          <img src="https://images.unsplash.com/photo-1577239339305-1129543c8b7f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Trading"/>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest text-blue-700 flex items-center gap-1">
                             <Globe size={12}/> Global Trade
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="font-display text-xl font-bold text-cc-primary mb-2 group-hover:text-cc-gold transition-colors">CC Food Stuff</h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">Our flagship bulk commodity trading desk handling Rice, Sugar, and Oilseeds for wholesale markets.</p>
                          <span className="text-cc-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">View Catalog <ArrowRight size={12}/></span>
                      </div>
                  </div>
                   {/* Card 3: CC Logistics */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer" onClick={() => onNavigate('services')}>
                      <div className="h-56 overflow-hidden relative">
                          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Logistics"/>
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest text-orange-700 flex items-center gap-1">
                             <Truck size={12}/> Logistics
                          </div>
                      </div>
                      <div className="p-8">
                          <h3 className="font-display text-xl font-bold text-cc-primary mb-2 group-hover:text-cc-gold transition-colors">CC Logistics</h3>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">Freight forwarding, customs brokerage, and last-mile delivery infrastructure.</p>
                          <span className="text-cc-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight size={12}/></span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. CATEGORY BROWSER */}
      <section className="bg-white py-24">
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

      {/* 5. PROCUREMENT BOARD (Dark Mode) */}
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

      {/* 6. SPOT MARKET HIGHLIGHTS */}
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

      {/* 7. CTA SECTION */}
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