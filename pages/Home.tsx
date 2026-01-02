import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Globe, CheckCircle2, ShoppingCart, TrendingUp, ShieldCheck, MapPin, Package, Clock, Anchor, BarChart3, Lock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CATEGORIES, PRODUCTS, BUYING_REQUESTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const CHART_DATA = [
  { month: 'Jan', Rice: 420, Sugar: 580, Oil: 900 },
  { month: 'Feb', Rice: 435, Sugar: 560, Oil: 920 },
  { month: 'Mar', Rice: 450, Sugar: 590, Oil: 910 },
  { month: 'Apr', Rice: 445, Sugar: 610, Oil: 940 },
  { month: 'May', Rice: 460, Sugar: 630, Oil: 930 },
  { month: 'Jun', Rice: 480, Sugar: 620, Oil: 960 },
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop", // Vibrant Spices & Grains
  "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2670&auto=format&fit=crop", // Bulk Sacks Warehouse
  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2670&auto=format&fit=crop", // Market Display
  "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2670&auto=format&fit=crop"  // Rice Texture
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeChart, setActiveChart] = useState<'Rice' | 'Sugar' | 'Oil'>('Rice');
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      
      {/* 1. HERO - SEARCH CENTRIC */}
      <section className="relative h-[700px] w-full flex flex-col items-center justify-center bg-cc-primary overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
             {HERO_IMAGES.map((img, index) => (
                <img 
                    key={img}
                    src={img} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-50' : 'opacity-0'}`}
                    alt="Food Commodity Background"
                />
             ))}
             {/* Gradient Overlays for Readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-cc-primary via-cc-primary/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-cc-primary/50 to-transparent"></div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>

        <div className="relative z-20 w-full max-w-5xl px-6 text-center pt-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-8 shadow-xl animate-fade-in">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-xs font-mono font-bold text-gray-100 uppercase tracking-widest text-shadow-sm">Global Trading Floor: Live</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
                The Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-cc-gold to-yellow-200">Commodity</span> <br/> 
                Marketplace
            </h1>
            <p className="font-sans text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
                Connect with verified suppliers for bulk Grains, Meat, and Ingredients. 
                Secured by Escrow & Inspection Services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto relative group z-30 animate-fade-up">
                <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={24} />
                </div>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search 5,000+ products (e.g. 'Brazilian Sugar IC45', 'Basmati Rice 1121')..."
                    className="block w-full pl-20 pr-40 py-7 rounded-sm text-lg text-cc-primary bg-white shadow-[0_10px_50px_rgba(0,0,0,0.5)] focus:ring-4 focus:ring-cc-gold/30 focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                />
                <button 
                    onClick={() => onNavigate('products')}
                    className="absolute right-3 top-3 bottom-3 bg-cc-primary hover:bg-cc-secondary text-white font-bold uppercase tracking-widest text-sm px-10 rounded-sm transition-all duration-300 shadow-lg"
                >
                    Search Market
                </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 text-gray-300 text-xs font-mono uppercase tracking-widest">
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default drop-shadow-sm"><CheckCircle2 size={16} className="text-cc-gold"/> Verified Suppliers</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default drop-shadow-sm"><Lock size={16} className="text-cc-gold"/> Secure Payments</span>
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default drop-shadow-sm"><ShieldCheck size={16} className="text-cc-gold"/> SGS Inspection</span>
            </div>
        </div>
      </section>

      {/* 2. CATEGORY BROWSER */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <h3 className="text-cc-primary font-bold text-sm uppercase tracking-widest mb-10 flex items-center gap-2">
                <Package className="text-cc-gold" size={18}/> Browse Categories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {CATEGORIES.map((cat) => (
                    <div 
                        key={cat.id} 
                        onClick={() => onNavigate('products')}
                        className="bg-white border border-gray-200 p-8 rounded-sm hover:shadow-xl hover:border-cc-gold/50 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="text-4xl mb-6 group-hover:scale-110 transition-transform block filter grayscale group-hover:grayscale-0 relative z-10">{cat.icon}</span>
                        <span className="text-xs font-bold text-gray-600 group-hover:text-cc-primary uppercase tracking-wide leading-tight relative z-10">{cat.name}</span>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 3. MARKET INTELLIGENCE (NEW) */}
      <section className="py-24 bg-white border-b border-gray-100">
         <div className="max-w-[1600px] mx-auto px-6 md:px-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                 {/* Text Content */}
                 <div className="lg:col-span-4">
                     <div className="flex items-center gap-2 text-cc-secondary font-bold uppercase text-xs tracking-widest mb-4">
                          <BarChart3 size={16} /> Market Intelligence
                     </div>
                     <h2 className="font-display text-4xl font-bold text-cc-primary mb-6 leading-tight">
                         Track Global <br/> Commodity Trends.
                     </h2>
                     <p className="text-gray-500 mb-8 leading-relaxed">
                         Make data-driven procurement decisions. Our platform aggregates pricing data from major exchanges (CBOT, MDEX) and FOB port indices to give you real-time visibility.
                     </p>
                     
                     <div className="space-y-2">
                         {['Rice', 'Sugar', 'Oil'].map((commodity) => (
                             <button 
                                key={commodity}
                                onClick={() => setActiveChart(commodity as any)}
                                className={`w-full flex items-center justify-between p-4 rounded-sm border transition-all ${
                                    activeChart === commodity 
                                    ? 'bg-cc-primary text-white border-cc-primary shadow-lg' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                }`}
                             >
                                 <span className="font-bold font-display text-sm">{commodity} Index</span>
                                 <ArrowRight size={16} className={activeChart === commodity ? 'opacity-100' : 'opacity-0'} />
                             </button>
                         ))}
                     </div>
                 </div>

                 {/* Chart */}
                 <div className="lg:col-span-8 bg-gray-50 rounded-sm p-8 border border-gray-200 shadow-inner relative">
                     <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono text-gray-400">
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> Live Data
                     </div>
                     <h3 className="text-lg font-bold text-cc-primary mb-2 font-display">{activeChart} Price Trend (USD/MT)</h3>
                     <p className="text-xs text-gray-500 mb-8 font-mono">6-Month FOB Average • Source: CC Group Analytics</p>
                     
                     {/* Added min-w-0 to prevent flex/grid overflow issues that cause Recharts 0 width error */}
                     <div className="h-[350px] w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={CHART_DATA}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d97706" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '4px', color: '#fff'}}
                                    itemStyle={{color: '#d97706', fontWeight: 'bold', fontFamily: 'monospace'}}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey={activeChart} 
                                    stroke="#d97706" 
                                    strokeWidth={3}
                                    fillOpacity={1} 
                                    fill="url(#colorValue)" 
                                    animationDuration={1500}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. LIVE TRADE OPPORTUNITIES */}
      <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div>
                      <div className="flex items-center gap-2 text-cc-secondary font-bold uppercase text-xs tracking-widest mb-3">
                          <Globe size={14} /> Global Sourcing
                      </div>
                      <h2 className="font-display text-4xl font-bold text-cc-primary">Latest Buying Requests</h2>
                      <p className="text-gray-500 mt-2 font-light text-lg">Verified buyers looking for suppliers. Quote now.</p>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="bg-white border border-cc-border text-cc-primary px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-cc-primary hover:text-white transition-all shadow-sm">
                      Post Your Requirement
                  </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {BUYING_REQUESTS.map((req) => (
                      <div key={req.id} className="border border-gray-200 p-8 rounded-sm hover:border-cc-secondary hover:shadow-lg transition-all group bg-white">
                          <div className="flex justify-between items-start mb-6">
                              <div>
                                  <h3 className="font-display font-bold text-xl text-cc-primary group-hover:text-cc-secondary transition-colors mb-2">
                                    WANTED: {req.commodity}
                                  </h3>
                                  <div className="flex items-center gap-6 text-xs text-gray-500 font-mono">
                                      <span className="flex items-center gap-2"><Clock size={14} className="text-cc-gold"/> {req.postedDate}</span>
                                      <span className="flex items-center gap-2"><MapPin size={14} className="text-cc-gold"/> {req.destination}</span>
                                  </div>
                              </div>
                              <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border ${
                                req.status === 'Urgent' ? 'bg-red-50 text-red-600 border-red-100' : 
                                req.status === 'Closing Soon' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-green-50 text-green-600 border-green-100'
                              }`}>
                                  {req.status}
                              </span>
                          </div>
                          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                <div className="flex items-center gap-3">
                                    <Anchor size={18} className="text-gray-300" />
                                    <span className="text-sm font-bold text-gray-700">Volume: <span className="text-cc-primary">{req.volume}</span></span>
                                </div>
                                <button onClick={() => onNavigate('contact')} className="text-cc-secondary font-bold text-xs uppercase tracking-widest hover:text-cc-dark flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Submit Quote <ArrowRight size={14}/>
                                </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. SPOT MARKET */}
      <section className="py-24 bg-gray-50">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <div className="flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest mb-3 animate-pulse">
                          <TrendingUp size={14} /> Spot Market Live
                      </div>
                      <h2 className="font-display text-4xl font-bold text-cc-primary">Featured Wholesale Deals</h2>
                  </div>
                  <button onClick={() => onNavigate('products')} className="text-cc-secondary font-bold text-sm hover:underline flex items-center gap-1">
                      View All Offers <ArrowRight size={16} />
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {PRODUCTS.slice(0, 4).map((product) => (
                      <div key={product.id} className="border border-gray-200 rounded-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group bg-white relative">
                          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cc-primary shadow-sm border border-gray-100 rounded-sm">
                              Origin: {product.origin}
                          </div>
                          <div className="h-64 overflow-hidden relative bg-gray-100">
                              <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                          </div>
                          <div className="p-8">
                              <div className="text-[10px] font-bold text-cc-gold uppercase tracking-widest mb-2">{product.category}</div>
                              <h3 className="font-display font-bold text-lg text-cc-primary mb-4 leading-snug h-12 overflow-hidden line-clamp-2">{product.name}</h3>
                              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                  <div>
                                      <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Indicative Price</span>
                                      <span className="text-xl font-bold text-cc-primary font-display">{product.price}</span>
                                  </div>
                                  <button onClick={() => onNavigate('products')} className="bg-gray-100 text-gray-400 hover:bg-cc-primary hover:text-white p-3 rounded-full transition-colors">
                                      <ArrowRight size={18} />
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. SUPPLIER CTA (DUAL SIDE) */}
      <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-cc-primary text-white py-24 px-12 md:px-24 flex flex-col justify-center border-r border-white/10">
              <h3 className="font-display text-3xl font-bold mb-4">For Suppliers</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Expand your export reach. List your commodities on CC Group and access 5,000+ verified buyers globally.
              </p>
              <button onClick={() => onNavigate('contact')} className="self-start px-8 py-4 border border-white/20 hover:bg-white hover:text-cc-primary transition-colors font-bold uppercase tracking-widest text-sm rounded-sm">
                  Register as Seller
              </button>
          </div>
          <div className="bg-cc-dark text-white py-24 px-12 md:px-24 flex flex-col justify-center">
              <h3 className="font-display text-3xl font-bold mb-4">For Buyers</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  Source with confidence. Post your buying requirements and get competitive quotes with trade finance support.
              </p>
              <button onClick={() => onNavigate('contact')} className="self-start px-8 py-4 bg-cc-gold text-white hover:bg-white hover:text-cc-primary transition-colors font-bold uppercase tracking-widest text-sm rounded-sm">
                  Post Buying Request
              </button>
          </div>
      </section>

    </div>
  );
};