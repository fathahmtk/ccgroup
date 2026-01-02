import React, { useState } from 'react';
import { ArrowRight, Search, Container, Ship, Globe, CheckCircle2, ShoppingCart, TrendingUp, ShieldCheck, MapPin, Package, Star, Clock, Anchor } from 'lucide-react';
import { CATEGORIES, PRODUCTS, BUYING_REQUESTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white">
      
      {/* 1. HERO - SEARCH CENTRIC (MARKETPLACE STYLE) */}
      <section className="relative h-[650px] w-full flex flex-col items-center justify-center bg-cc-primary overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2670&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-30"
                alt="Food Logistics"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-cc-primary via-cc-primary/80 to-transparent"></div>
        </div>

        <div className="relative z-20 w-full max-w-5xl px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full bg-white/10 backdrop-blur-md mb-8">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Global Trading Floor: Open</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The Global B2B <br/> Food Marketplace
            </h1>
            <p className="font-sans text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                Directly connect with verified suppliers for bulk Commodities, Meat, Seafood, and Ingredients.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={24} />
                </div>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search 5,000+ products (e.g. Frozen Chicken, Basmati Rice, Sugar IC45)..."
                    className="block w-full pl-16 pr-32 py-6 rounded-sm text-lg text-gray-900 bg-white shadow-2xl focus:ring-4 focus:ring-cc-gold/50 focus:outline-none transition-all"
                />
                <button 
                    onClick={() => onNavigate('products')}
                    className="absolute right-2 top-2 bottom-2 bg-cc-primary hover:bg-cc-secondary text-white font-bold uppercase tracking-widest text-xs px-8 rounded-sm transition-colors"
                >
                    Search
                </button>
            </div>
            
            <div className="flex justify-center gap-8 mt-8 text-gray-400 text-xs font-mono uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cc-gold"/> Verified Suppliers</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cc-gold"/> Trade Finance</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cc-gold"/> Inspection Services</span>
            </div>
        </div>
      </section>

      {/* 2. CATEGORY BROWSER */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <h3 className="text-cc-primary font-bold text-lg mb-8 flex items-center gap-2">
                <Package className="text-cc-gold" size={20}/> Browse Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {CATEGORIES.map((cat) => (
                    <div 
                        key={cat.id} 
                        onClick={() => onNavigate('products')}
                        className="bg-white border border-gray-200 p-6 rounded-sm hover:shadow-lg hover:border-cc-gold cursor-pointer transition-all flex flex-col items-center justify-center text-center group"
                    >
                        <span className="text-4xl mb-4 group-hover:scale-110 transition-transform block filter grayscale group-hover:grayscale-0">{cat.icon}</span>
                        <span className="text-xs font-bold text-gray-600 group-hover:text-cc-primary uppercase tracking-wide leading-tight">{cat.name}</span>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 2.5 LIVE TRADE OPPORTUNITIES (BUYING REQUESTS) */}
      <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                  <div>
                      <div className="flex items-center gap-2 text-cc-secondary font-bold uppercase text-xs tracking-widest mb-2">
                          <Globe size={14} /> Global Sourcing
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-cc-primary">Latest Buying Requests</h2>
                      <p className="text-gray-500 mt-2">Verified buyers looking for suppliers. Quote now.</p>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="bg-cc-secondary text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-cc-dark transition-colors">
                      Post Your Requirement
                  </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {BUYING_REQUESTS.map((req) => (
                      <div key={req.id} className="border border-gray-200 p-6 rounded-sm hover:border-cc-secondary hover:shadow-md transition-all group bg-gray-50/50">
                          <div className="flex justify-between items-start mb-4">
                              <div>
                                  <h3 className="font-display font-bold text-lg text-cc-primary group-hover:text-cc-secondary transition-colors">
                                    WANTED: {req.commodity}
                                  </h3>
                                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-1 font-mono">
                                      <span className="flex items-center gap-1"><Clock size={12}/> {req.postedDate}</span>
                                      <span className="flex items-center gap-1"><MapPin size={12}/> {req.destination}</span>
                                  </div>
                              </div>
                              <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                                req.status === 'Urgent' ? 'bg-red-100 text-red-600' : 
                                req.status === 'Closing Soon' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                              }`}>
                                  {req.status}
                              </span>
                          </div>
                          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <div className="flex items-center gap-2">
                                    <Anchor size={16} className="text-gray-400" />
                                    <span className="text-sm font-bold text-gray-700">Volume: {req.volume}</span>
                                </div>
                                <button onClick={() => onNavigate('contact')} className="text-cc-secondary font-bold text-xs uppercase tracking-widest hover:underline">
                                    Submit Quote
                                </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. SPOT MARKET / FEATURED DEALS */}
      <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <div className="flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest mb-2 animate-pulse">
                          <TrendingUp size={14} /> Spot Market Live
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-cc-primary">Featured Wholesale Deals</h2>
                  </div>
                  <button onClick={() => onNavigate('products')} className="text-cc-secondary font-bold text-sm hover:underline flex items-center gap-1">
                      View All Offers <ArrowRight size={16} />
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRODUCTS.slice(0, 4).map((product) => (
                      <div key={product.id} className="border border-gray-100 rounded-sm hover:shadow-2xl transition-all duration-300 group bg-white relative">
                          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-cc-primary shadow-sm border border-gray-100 rounded-sm">
                              Origin: {product.origin}
                          </div>
                          <div className="h-64 overflow-hidden relative bg-gray-100">
                              <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} />
                          </div>
                          <div className="p-6">
                              <div className="text-[10px] font-bold text-cc-gold uppercase tracking-widest mb-2">{product.category}</div>
                              <h3 className="font-display font-bold text-lg text-cc-primary mb-3 leading-snug h-12 overflow-hidden">{product.name}</h3>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
                                  <div>
                                      <span className="block text-[10px] text-gray-400 uppercase font-bold">Indicative Price</span>
                                      <span className="text-lg font-bold text-cc-primary">{product.price}</span>
                                  </div>
                                  <button onClick={() => onNavigate('products')} className="bg-gray-100 hover:bg-cc-primary hover:text-white p-3 rounded-full transition-colors">
                                      <ArrowRight size={18} />
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 4. GLOBAL SOURCING MAP / VALUE PROP */}
      <section className="py-24 bg-cc-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                  <h2 className="font-display text-4xl font-bold mb-8">We Connect You to the Source.</h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-12">
                      CC Group operates as a digital vessel, bridging the gap between Origin Farmers and Global Distributors. We handle the logistics, quality control, and trade finance so you can trade with confidence.
                  </p>
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center flex-shrink-0">
                              <Globe className="text-cc-gold" size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg mb-1">Global Reach</h4>
                              <p className="text-sm text-gray-400">Sourcing offices in Brazil, India, Vietnam, and Ukraine.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center flex-shrink-0">
                              <ShieldCheck className="text-cc-gold" size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg mb-1">Quality Guaranteed</h4>
                              <p className="text-sm text-gray-400">SGS Inspection included with every FCL shipment.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center flex-shrink-0">
                              <Ship className="text-cc-gold" size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-lg mb-1">Efficient Logistics</h4>
                              <p className="text-sm text-gray-400">Priority booking with Maersk, MSC, and CMA CGM.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="relative">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-md">
                      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                          <span className="font-mono text-xs text-cc-gold uppercase tracking-widest">Active Trade Routes</span>
                          <div className="flex gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500"></div>
                             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                      </div>
                      <div className="space-y-4">
                          {[
                              { from: 'Santos, Brazil', to: 'Jebel Ali, UAE', cargo: 'Sugar IC45', status: 'Loading' },
                              { from: 'Mumbai, India', to: 'Felixstowe, UK', cargo: 'Basmati Rice', status: 'In Transit' },
                              { from: 'Ho Chi Minh, VN', to: 'Dammam, KSA', cargo: 'White Rice', status: 'Customs' },
                              { from: 'Odessa, UA', to: 'Mersin, TR', cargo: 'Sunflower Oil', status: 'Arrived' },
                          ].map((route, i) => (
                              <div key={i} className="flex items-center justify-between text-sm p-4 bg-black/20 rounded-sm">
                                  <div>
                                      <div className="flex items-center gap-2 text-white font-bold mb-1">
                                          <MapPin size={12} className="text-gray-400"/> {route.from} <ArrowRight size={12} className="text-gray-600"/> {route.to}
                                      </div>
                                      <div className="text-xs text-gray-400">{route.cargo}</div>
                                  </div>
                                  <span className="px-3 py-1 bg-white/10 text-xs font-mono rounded-full">{route.status}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 5. REQUEST FOR QUOTE CTA */}
      <section className="py-20 bg-cc-light border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="font-display text-3xl font-bold text-cc-primary mb-6">Can't find what you're looking for?</h2>
              <p className="text-gray-500 mb-10 text-lg">
                  Post a buying requirement and let our network of certified producers quote you directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-cc-secondary text-white px-10 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                      <ShoppingCart size={18} /> Post Buying Request
                  </button>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="bg-white border border-gray-300 text-gray-700 px-10 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors"
                  >
                      Become a Supplier
                  </button>
              </div>
          </div>
      </section>

    </div>
  );
};