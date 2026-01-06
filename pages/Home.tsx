import React, { useState, useEffect } from 'react';
import { Droplets, Wheat, ArrowRight, Scale, Sun, ShieldCheck, Globe, TrendingUp, Truck, Anchor, FileText, Activity, Quote, Briefcase, ChevronRight } from 'lucide-react';
import { PRODUCTS, BUYING_REQUESTS, TESTIMONIALS } from '../constants';
import { ProductDetailsModal } from '../components/ProductDetailsModal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const HERO_SLIDES = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1548695607-9c73430ba065?q=80&w=2600&auto=format&fit=crop",
    category: "Indian Export House",
    titleLine1: "From India",
    titleHighlight: "To The World.",
    description: "Your gateway to premium Indian commodities. Exporting finest Basmati, Spices, and Fresh Produce from Cochin, Mundra, and Nhava Sheva to global destinations.",
    ctaText: "Our Heritage"
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1621272718910-4497dc488c84?q=80&w=2600&auto=format&fit=crop",
    category: "Bulk Procurement",
    titleLine1: "Volume",
    titleHighlight: "Suppliers.",
    description: "Direct mill procurement from Punjab, Andhra, and Gujarat. Securing 100% sortex clean Rice and Sugar for international wholesale.",
    ctaText: "View Catalog"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2600&auto=format&fit=crop",
    category: "Kerala Spices",
    titleLine1: "Origin",
    titleHighlight: "Verified.",
    description: "Sourcing high-Curcumin Turmeric and bold Cardamom directly from the plantations of the Western Ghats.",
    ctaText: "Explore Spices"
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000); 
    return () => clearInterval(timer);
  }, []);

  const handleInquire = (product: Product, e?: React.MouseEvent) => {
      e?.stopPropagation();
      addToCart(product);
      setIsCartOpen(true);
      setViewProduct(null);
  };

  const featuredProducts = PRODUCTS.slice(0, 8); 

  return (
    <div className="bg-cc-cream font-sans overflow-hidden">
      
      {/* 1. HERO SECTION - Cinematic Luxury */}
      <section className="relative h-screen min-h-[900px] flex flex-col justify-end pb-32 overflow-hidden bg-cc-dark">
         {HERO_SLIDES.map((slide, index) => (
             <div 
                key={slide.id}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
             >
                 <div className={`absolute inset-0 transition-transform duration-[20s] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}>
                    <img 
                        src={slide.image}
                        className="w-full h-full object-cover opacity-60"
                        alt={slide.titleHighlight}
                    />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-r from-cc-dark via-cc-dark/40 to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-cc-dark via-transparent to-transparent opacity-90"></div>
             </div>
         ))}

         <div className="max-w-[1800px] mx-auto px-6 md:px-16 relative z-10 w-full mb-12">
             <div key={currentSlide} className="max-w-5xl animate-fade-up">
                 <div className="inline-flex items-center gap-3 mb-8">
                    <span className="w-16 h-[1px] bg-cc-gold"></span>
                    <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.25em] font-sans">{HERO_SLIDES[currentSlide].category}</span>
                 </div>
                 
                 <h1 className="font-display text-8xl md:text-[9rem] text-white leading-[0.85] mb-10 tracking-tight">
                     {HERO_SLIDES[currentSlide].titleLine1} <br/>
                     <span className="text-transparent text-outline italic font-serif">{HERO_SLIDES[currentSlide].titleHighlight}</span>
                 </h1>
                 
                 <div className="flex flex-col md:flex-row gap-16 items-start md:items-end">
                    <p className="text-gray-300 text-lg font-light max-w-lg leading-relaxed border-l border-cc-gold/30 pl-8 font-sans">
                        {HERO_SLIDES[currentSlide].description}
                    </p>
                    
                    <button 
                        onClick={() => onNavigate('products')}
                        className="bg-cc-gold text-cc-primary px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group hover:scale-105 font-sans"
                    >
                        {HERO_SLIDES[currentSlide].ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
             </div>
         </div>

         {/* Hero Footer Strip */}
         <div className="absolute bottom-0 inset-x-0 h-28 border-t border-white/5 bg-cc-dark/80 backdrop-blur-xl flex items-center z-20">
            <div className="max-w-[1800px] mx-auto px-6 md:px-16 w-full flex justify-between items-center">
                <div className="hidden md:flex gap-16 text-white/60 text-[10px] uppercase tracking-widest font-sans font-bold">
                    <div className="flex items-center gap-4 group cursor-default">
                        <div className="p-2 bg-white/5 rounded-full text-cc-gold group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors"><Globe size={18}/></div> 
                        <span>Export from India</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-default">
                        <div className="p-2 bg-white/5 rounded-full text-cc-gold group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors"><ShieldCheck size={18}/></div> 
                        <span>Govt. Recognized Export House</span>
                    </div>
                    <div className="flex items-center gap-4 group cursor-default">
                        <div className="p-2 bg-white/5 rounded-full text-cc-gold group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors"><TrendingUp size={18}/></div> 
                        <span>Live Mandi Rates</span>
                    </div>
                </div>
                <div className="flex gap-4">
                     {HERO_SLIDES.map((_, index) => (
                         <button 
                            key={index} 
                            onClick={() => setCurrentSlide(index)}
                            className={`h-0.5 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-16 bg-cc-gold' : 'w-8 bg-white/20 hover:bg-white/40'}`}
                         />
                     ))}
                </div>
            </div>
         </div>
      </section>

      {/* 2. MARKET DASHBOARD - Trading Tickets */}
      <section className="py-24 bg-cc-cream relative">
          <div className="max-w-[1800px] mx-auto px-6 md:px-16 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                      <h2 className="font-display text-5xl md:text-6xl text-cc-primary mb-4">Indian Commodity Markets</h2>
                      <p className="text-cc-primary/60 font-light max-w-xl text-lg font-sans">Live indices for key traded sectors. We monitor global exchanges to offer competitive FOB pricing.</p>
                  </div>
                  <button onClick={() => onNavigate('products')} className="text-cc-primary font-bold text-xs uppercase tracking-widest border-b border-cc-primary pb-1 hover:text-cc-gold hover:border-cc-gold transition-colors mt-6 md:mt-0 font-sans">
                      View Live Inventory
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                      { name: 'Basmati (Pusa)', index: 'Karnal', val: '₹98,500', change: '+2.4%', icon: <Wheat size={20}/> },
                      { name: 'Sugar (S-30)', index: 'Kolhapur', val: '₹3,720', change: '-0.8%', icon: <Scale size={20}/> },
                      { name: 'Black Pepper', index: 'Kochi', val: '₹58,400', change: '+1.1%', icon: <Droplets size={20}/> },
                      { name: 'Jeera (Cumin)', index: 'Unjha', val: '₹28,400', change: '+0.5%', icon: <Sun size={20}/> },
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-2 group cursor-default relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-cc-cream rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                          
                          <div className="relative z-10">
                              <div className="flex justify-between items-start mb-8">
                                  <div className="p-3.5 bg-cc-primary/5 rounded-2xl text-cc-primary group-hover:bg-cc-primary group-hover:text-cc-gold transition-colors">{item.icon}</div>
                                  <span className={`font-mono text-xs font-bold px-3 py-1.5 rounded-full border ${item.change.startsWith('+') ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                      {item.change}
                                  </span>
                              </div>
                              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3 font-sans">{item.index}</p>
                              <h3 className="text-xl font-bold text-cc-primary mb-2 font-display">{item.name}</h3>
                              <p className="text-3xl font-mono font-medium text-cc-primary group-hover:text-cc-gold transition-colors tracking-tight">{item.val} <span className="text-xs font-sans text-gray-400 font-normal">/ MT</span></p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. CORE SECTORS - Architectural Bento Grid */}
      <section className="py-32 px-6 bg-white rounded-t-[4rem] -mt-12 relative z-20 shadow-[0_-20px_60px_rgba(0,0,0,0.05)] border-t border-white/50">
         <div className="max-w-[1800px] mx-auto pt-8">
            <div className="mb-24 flex flex-col items-center text-center">
                <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 font-sans">Our Portfolio</span>
                <h2 className="font-display text-6xl md:text-7xl text-cc-primary mb-8">Trading Divisions</h2>
                <div className="w-px h-24 bg-cc-primary/10"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Large Card 1 */}
                <div 
                    onClick={() => onNavigate('products')}
                    className="group relative h-[700px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                    <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt="Grains" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cc-dark via-cc-dark/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    <div className="absolute top-10 right-10 z-20">
                         <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-cc-gold group-hover:text-cc-primary group-hover:border-cc-gold transition-all text-white">
                             <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                         </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-12 w-full">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-full bg-white/10 backdrop-blur"><Wheat size={24} className="text-cc-gold"/></div>
                            <span className="text-white/80 text-xs font-bold uppercase tracking-widest font-sans">Major Division</span>
                        </div>
                        <h3 className="text-5xl text-white font-display mb-6">Grains & Pulses</h3>
                        <p className="text-white/70 font-light text-lg max-w-sm mb-10 leading-relaxed font-sans border-l border-white/20 pl-6">Punjab Basmati, MP Wheat, and South Indian Rice varieties. Sourced directly from millers.</p>
                        <span className="inline-block text-white text-xs font-bold uppercase tracking-widest border-b border-cc-gold pb-1 font-sans">Explore Assets</span>
                    </div>
                </div>

                {/* Large Card 2 */}
                <div 
                    onClick={() => onNavigate('products')}
                    className="group relative h-[700px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                    <img src="https://images.unsplash.com/photo-1620888200673-827c191a221f?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt="Oils" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cc-dark via-cc-dark/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                     <div className="absolute top-10 right-10 z-20">
                         <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-cc-gold group-hover:text-cc-primary group-hover:border-cc-gold transition-all text-white">
                             <ArrowRight size={24} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                         <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-full bg-white/10 backdrop-blur"><Droplets size={24} className="text-cc-gold"/></div>
                            <span className="text-white/80 text-xs font-bold uppercase tracking-widest font-sans">Liquid Bulk</span>
                        </div>
                        <h3 className="text-5xl text-white font-display mb-6">Edible Oils</h3>
                        <p className="text-white/70 font-light text-lg max-w-sm mb-10 leading-relaxed font-sans border-l border-white/20 pl-6">Groundnut, Mustard, and Coconut Oil exports. Specialists in Flexi-tank logistics.</p>
                        <span className="inline-block text-white text-xs font-bold uppercase tracking-widest border-b border-cc-gold pb-1 font-sans">Explore Assets</span>
                    </div>
                </div>

                {/* Stacked Cards */}
                <div className="flex flex-col gap-8 h-[700px]">
                    <div onClick={() => onNavigate('products')} className="group relative flex-1 rounded-[3rem] overflow-hidden cursor-pointer bg-[#FFFBF0] border border-cc-gold/10 hover:border-cc-gold/50 transition-colors">
                         <div className="absolute inset-0 p-12 flex flex-col justify-center items-start z-10">
                            <Sun size={36} className="text-cc-primary mb-6"/>
                            <h3 className="text-4xl text-cc-primary font-display mb-4">Spices</h3>
                            <p className="text-cc-primary/60 text-sm mb-8 max-w-[200px] font-sans leading-relaxed">Whole & Ground from the gardens of Kerala.</p>
                            <div className="w-12 h-12 rounded-full bg-cc-primary text-white flex items-center justify-center group-hover:bg-cc-gold group-hover:text-cc-primary transition-colors"><ArrowRight size={18}/></div>
                         </div>
                         <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600" className="absolute -right-16 -bottom-16 w-2/3 h-full object-cover rounded-tl-[60px] shadow-lg opacity-90 group-hover:scale-105 transition-transform duration-700" alt="Spices"/>
                    </div>
                    
                    <div onClick={() => onNavigate('products')} className="group relative flex-1 rounded-[3rem] overflow-hidden cursor-pointer bg-cc-primary">
                         <div className="absolute inset-0 p-12 flex flex-col justify-center items-start z-10">
                            <Scale size={36} className="text-cc-gold mb-6"/>
                            <h3 className="text-4xl text-white font-display mb-4">Sugar & Jaggery</h3>
                            <p className="text-white/50 text-sm mb-8 font-sans">Maharashtra S-30 / Kolhapur Gur.</p>
                            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-cc-primary transition-colors"><ArrowRight size={18}/></div>
                         </div>
                         <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/20 to-transparent"></div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 4. FEATURED ASSETS - Horizontal Scroll */}
      <section className="py-24 bg-cc-cream">
         <div className="max-w-[1800px] mx-auto px-6">
             <div className="flex justify-between items-end mb-12">
                 <div>
                     <h2 className="font-display text-5xl text-cc-primary mb-4">Spot Market</h2>
                     <p className="text-cc-primary/60 text-base font-light font-sans">Immediate availability for FOB/CIF booking.</p>
                 </div>
                 <button onClick={() => onNavigate('products')} className="bg-white border border-cc-primary/10 px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest text-cc-primary hover:bg-cc-primary hover:text-white transition-colors shadow-sm font-sans">View All Lots</button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {featuredProducts.map((product, index) => (
                     <div 
                        key={product.id} 
                        className="bg-white rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group cursor-pointer border border-transparent hover:border-cc-gold/20 flex flex-col"
                        onClick={() => setViewProduct(product)}
                     >
                         <div className="h-72 overflow-hidden relative">
                             <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={product.name}/>
                             <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase text-cc-primary shadow-sm tracking-wide font-sans">
                                 {product.origin.split('/')[0]}
                             </div>
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                         </div>
                         <div className="p-8 flex-grow flex flex-col">
                             <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-bold text-cc-gold uppercase tracking-[0.2em] font-sans">{product.category}</span>
                             </div>
                             <h4 className="font-display text-2xl text-cc-primary mb-6 leading-tight group-hover:text-cc-gold transition-colors">{product.name}</h4>
                             <div className="mt-auto flex justify-between items-center pt-5 border-t border-gray-50">
                                 <span className="text-xs text-gray-400 font-medium font-mono">MOQ: {product.specs?.['MOQ'] || '1 FCL'}</span>
                                 <div className="w-10 h-10 rounded-full bg-cc-cream flex items-center justify-center text-cc-primary group-hover:bg-cc-primary group-hover:text-white transition-colors">
                                     <ArrowRight size={16}/>
                                 </div>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* 4.5 GLOBAL TRADE DESK - Buying Requests (Ticker Style) */}
      <section className="py-24 bg-cc-dark border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="max-w-[1800px] mx-auto px-6 relative z-10">
             <div className="flex items-center gap-3 mb-12">
                <span className="w-12 h-[1px] bg-cc-gold"></span>
                <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] font-sans">Live Global Demand</span>
             </div>
             
             <div className="flex overflow-x-hidden relative group">
                <div className="flex animate-marquee hover:pause gap-8">
                    {[...BUYING_REQUESTS, ...BUYING_REQUESTS].map((req, i) => (
                        <div key={`${req.id}-${i}`} className="flex-shrink-0 w-96 bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <FileText size={24} className="text-cc-gold"/>
                                <span className={`text-[10px] font-bold uppercase px-3 py-1.5 rounded-full font-sans ${req.status === 'Urgent' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{req.status}</span>
                            </div>
                            <h4 className="text-white font-display text-2xl mb-2">{req.commodity}</h4>
                            <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-6 font-mono">{req.volume} • {req.destination}</p>
                            <div className="flex justify-between items-center text-[10px] text-white/30 pt-5 border-t border-white/5 font-sans">
                                <span className="flex items-center gap-2"><Activity size={12}/> Posted {req.postedDate}</span>
                                <span className="text-cc-gold font-bold cursor-pointer hover:underline">Submit Proposal</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cc-dark to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cc-dark to-transparent z-10"></div>
             </div>
         </div>
      </section>

      {/* 5. LOGISTICS MAP - Static Representation */}
      <section className="py-32 bg-cc-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')] opacity-10"></div>
          
          <div className="max-w-[1800px] mx-auto px-6 md:px-16 relative z-10 flex flex-col md:flex-row items-center gap-24">
              <div className="flex-1">
                  <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] mb-8 block font-sans">Port Connectivity</span>
                  <h2 className="font-display text-6xl md:text-7xl mb-8 leading-tight">Logistics from <br/>Coast to Coast.</h2>
                  <p className="text-white/70 text-xl font-light leading-relaxed mb-12 max-w-xl font-sans">
                      We operate out of all major Indian ports including Nhava Sheva (JNPT), Mundra, Chennai, and Cochin (Vallarpadam). Seamless rail connectivity from hinterland mills to dock.
                  </p>
                  <ul className="space-y-6">
                      <li className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="p-4 bg-cc-gold/20 rounded-full text-cc-gold"><Truck size={28}/></div>
                          <div>
                              <strong className="block text-lg font-display mb-1">CONCOR Integration</strong>
                              <span className="text-sm text-white/50 font-light font-sans">Direct rail rakes from Punjab/Haryana to Ports.</span>
                          </div>
                      </li>
                      <li className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="p-4 bg-cc-gold/20 rounded-full text-cc-gold"><Anchor size={28}/></div>
                          <div>
                              <strong className="block text-lg font-display mb-1">CHA Services</strong>
                              <span className="text-sm text-white/50 font-light font-sans">In-house Customs House Agents for swift clearance.</span>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="flex-1 relative">
                  {/* Abstract Map Visual */}
                  <div className="w-full aspect-square bg-white/5 rounded-full border border-white/5 relative flex items-center justify-center backdrop-blur-sm">
                      <div className="w-[80%] h-[80%] border border-dashed border-white/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                      <div className="w-[60%] h-[60%] border border-white/10 rounded-full absolute"></div>
                      <Globe size={180} className="text-white/10"/>
                      
                      {/* Floating Points representing ports */}
                      <div className="absolute top-[35%] left-[25%] group cursor-pointer">
                          <div className="w-4 h-4 bg-cc-gold rounded-full animate-ping absolute"></div>
                          <div className="w-4 h-4 bg-cc-gold rounded-full relative z-10 border-2 border-cc-primary"></div>
                          <span className="absolute -top-10 -left-6 bg-white text-cc-primary px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-sans">Mundra Port</span>
                      </div>
                      
                      <div className="absolute top-[45%] left-[25%] group cursor-pointer delay-200">
                           <div className="w-4 h-4 bg-cc-gold rounded-full animate-ping absolute delay-300"></div>
                           <div className="w-4 h-4 bg-cc-gold rounded-full relative z-10 border-2 border-cc-primary"></div>
                           <span className="absolute -top-10 -left-6 bg-white text-cc-primary px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-sans">JNPT (Mumbai)</span>
                      </div>

                      <div className="absolute top-[65%] left-[30%] group cursor-pointer delay-500">
                           <div className="w-4 h-4 bg-cc-gold rounded-full animate-ping absolute delay-500"></div>
                           <div className="w-4 h-4 bg-cc-gold rounded-full relative z-10 border-2 border-cc-primary"></div>
                           <span className="absolute -top-10 -left-6 bg-white text-cc-primary px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl font-sans">Cochin Port</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. STRATEGIC PARTNERS - Testimonials */}
      <section className="py-24 bg-white rounded-t-[4rem] -mt-12 relative z-20">
          <div className="max-w-[1800px] mx-auto px-6 md:px-16">
               <div className="text-center mb-16">
                  <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-sans">Executive Boardroom</span>
                  <h2 className="font-display text-5xl md:text-6xl text-cc-primary">Strategic Partnerships</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {TESTIMONIALS.map(t => (
                       <div key={t.id} className="bg-cc-cream p-12 rounded-[2.5rem] border border-gray-100 relative group hover:shadow-2xl transition-all hover:-translate-y-1">
                           <Quote size={64} className="text-cc-gold/20 absolute top-10 right-10"/>
                           <p className="font-display italic text-2xl md:text-3xl text-cc-primary leading-relaxed mb-10 relative z-10">"{t.quote}"</p>
                           <div className="flex items-center gap-5">
                               <div className="w-16 h-16 bg-cc-primary text-white rounded-full flex items-center justify-center font-bold font-display text-2xl shadow-lg border-4 border-white">
                                   {t.name.charAt(0)}
                               </div>
                               <div>
                                   <h4 className="font-bold text-cc-primary text-sm uppercase tracking-wider font-sans">{t.name}</h4>
                                   <p className="text-gray-500 text-xs font-light flex items-center gap-2 mt-1 font-sans"><Briefcase size={12}/> {t.role}</p>
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
          </div>
      </section>

      {/* Product Modal */}
      {viewProduct && (
          <ProductDetailsModal 
              product={viewProduct} 
              onClose={() => setViewProduct(null)} 
              onInquire={(p) => handleInquire(p)}
              onSelectProduct={setViewProduct}
          />
      )}

    </div>
  );
};