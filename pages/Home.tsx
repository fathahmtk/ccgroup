import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Wheat, ArrowRight, Scale, Sun, Anchor, ShieldCheck, ChevronRight, Globe, TrendingUp, MousePointer2, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductDetailsModal } from '../components/ProductDetailsModal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const HERO_SLIDES = [
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2600&auto=format&fit=crop",
    category: "Ancient Grains & Millets",
    titleLine1: "Cultivating",
    titleHighlight: "Vitality.",
    description: "Reintroducing the power of Millets and Heritage Grains. Sustainable, nutrient-dense superfoods sourced directly from dedicated farming collectives.",
    ctaText: "Explore Grains"
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1528659556828-569d6c4e0f47?q=80&w=2600&auto=format&fit=crop",
    category: "Global Supply Chain",
    titleLine1: "Harvesting",
    titleHighlight: "Excellence.",
    description: "CC Group orchestrates the movement of essential food commodities. Connecting certified origins in India & Vietnam to industrial demand globally.",
    ctaText: "Explore Catalog"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2600&auto=format&fit=crop",
    category: "Premium Spices",
    titleLine1: "Sourcing",
    titleHighlight: "Flavor.",
    description: "From the hills of Idukki to the markets of Dubai. We deliver premium Cardamom, Pepper, and Turmeric with intact aroma and essential oils.",
    ctaText: "View Spices"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1612196603417-22f3e8281313?q=80&w=2600&auto=format&fit=crop",
    category: "Industrial Trade",
    titleLine1: "Refining",
    titleHighlight: "Purity.",
    description: "High-grade ICUMSA 45 Sugar and Edible Oils sourced directly from top-tier mills. Ensuring consistent quality for the beverage and food industry.",
    ctaText: "View Commodities"
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  const handleInquire = (product: Product, e?: React.MouseEvent) => {
      e?.stopPropagation();
      addToCart(product);
      setIsCartOpen(true);
      setViewProduct(null);
  };

  const featuredProducts = PRODUCTS.slice(0, 8); 

  const getCountryFlag = (origin: string) => {
    const lower = origin.toLowerCase();
    if (lower.includes('india')) return '🇮🇳';
    if (lower.includes('usa')) return '🇺🇸';
    if (lower.includes('egypt')) return '🇪🇬';
    if (lower.includes('chile')) return '🇨🇱';
    if (lower.includes('vietnam')) return '🇻🇳';
    if (lower.includes('ukraine')) return '🇺🇦';
    if (lower.includes('saudi')) return '🇸🇦';
    return '🌐';
  };

  return (
    <div className="bg-cc-cream font-sans overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen min-h-[850px] flex flex-col justify-end pb-24 overflow-hidden bg-cc-dark">
         {/* Background Image Carousel */}
         {HERO_SLIDES.map((slide, index) => (
             <div 
                key={slide.id}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
             >
                 <img 
                    src={slide.image}
                    className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear brightness-110 ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                    alt={slide.titleHighlight}
                 />
                 {/* Sophisticated Gradients - Reduced Opacity for Clearer Photos */}
                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
             </div>
         ))}

         <div className="max-w-[1800px] mx-auto px-6 md:px-16 relative z-10 w-full mb-8">
             {/* Key on the wrapper forces re-animation when slide changes */}
             <div key={currentSlide} className="max-w-6xl animate-fade-up">
                 <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cc-gold animate-pulse shadow-[0_0_10px_#C5A065]"></span>
                    <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-black drop-shadow-sm">{HERO_SLIDES[currentSlide].category}</span>
                 </div>
                 
                 <h1 className="font-display text-7xl md:text-9xl text-white leading-[0.85] mb-8 tracking-tight drop-shadow-2xl">
                     {HERO_SLIDES[currentSlide].titleLine1} <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-cc-gold via-yellow-200 to-white italic font-serif pr-4">{HERO_SLIDES[currentSlide].titleHighlight}</span>
                 </h1>
                 
                 <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
                    <p className="text-gray-100 text-lg md:text-xl font-light max-w-lg leading-relaxed border-l border-cc-gold/50 pl-8 drop-shadow-md">
                        {HERO_SLIDES[currentSlide].description}
                    </p>
                    
                    <div className="flex gap-4">
                        <button 
                            onClick={() => onNavigate('products')}
                            className="bg-white/90 backdrop-blur-md text-cc-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-cc-gold hover:text-white transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] group hover:scale-105"
                        >
                            {HERO_SLIDES[currentSlide].ctaText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => onNavigate('contact')}
                            className="px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs text-white border border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md"
                        >
                            Trade Inquiry
                        </button>
                    </div>
                 </div>
             </div>

             {/* Carousel Indicators */}
             <div className="flex gap-3 mt-16">
                 {HERO_SLIDES.map((_, index) => (
                     <button 
                        key={index} 
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 transition-all duration-500 rounded-full backdrop-blur-sm ${index === currentSlide ? 'w-16 bg-cc-gold shadow-[0_0_15px_#C5A065]' : 'w-12 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Go to slide ${index + 1}`}
                     />
                 ))}
             </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce flex flex-col items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest drop-shadow-md">Scroll</span>
            <ChevronDown size={20} className="drop-shadow-md" />
         </div>

         {/* Floating Stats Strip - Glass Effect */}
         <div className="hidden lg:flex absolute bottom-0 right-0 bg-white/5 backdrop-blur-3xl border-t border-l border-white/10 rounded-tl-[3rem] p-12 z-20 gap-16 animate-fade-in pl-16 shadow-[-10px_-10px_30px_rgba(0,0,0,0.2)]">
             <div>
                 <h4 className="text-4xl font-display text-white drop-shadow-md">50k+</h4>
                 <p className="text-[9px] text-white/60 uppercase tracking-[0.2em] mt-2">MT Annually</p>
             </div>
             <div>
                 <h4 className="text-4xl font-display text-white drop-shadow-md">35+</h4>
                 <p className="text-[9px] text-white/60 uppercase tracking-[0.2em] mt-2">Countries</p>
             </div>
         </div>
      </section>

      {/* 2. BENTO GRID CATEGORIES */}
      <section className="py-32 px-6 bg-cc-cream">
         <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <span className="text-cc-earth font-bold uppercase tracking-widest text-xs mb-4 block flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-cc-earth"></span> Our Portfolio
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl text-cc-primary">Core Commodities</h2>
                </div>
                <button onClick={() => onNavigate('products')} className="group flex items-center gap-3 text-cc-primary font-bold uppercase tracking-widest text-xs border border-cc-primary/20 px-6 py-3 rounded-full hover:bg-cc-primary hover:text-white transition-all mt-6 md:mt-0">
                    View All Categories <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                {/* Large Item - Rice */}
                <div 
                    onClick={() => onNavigate('products')}
                    className="md:col-span-2 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                    <img src="https://images.unsplash.com/photo-1536304993881-ffc028db696f?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-105" alt="Rice Fields" />
                    {/* Clear overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                        <ArrowRight className="text-white" size={24} />
                    </div>
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-3 rounded-xl w-fit mb-6 shadow-lg">
                            <Wheat size={24} />
                        </div>
                        <h3 className="text-5xl text-white font-display mb-4 drop-shadow-lg">Rice & Grains</h3>
                        <p className="text-white font-medium max-w-sm text-lg leading-relaxed drop-shadow-md">Premium Basmati, Non-Basmati, and Milling Wheat sourced from the heart of India.</p>
                    </div>
                </div>

                {/* Medium Item - Spices */}
                <div 
                    onClick={() => onNavigate('products')}
                    className="md:col-span-1 md:row-span-2 relative group rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                    <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-105" alt="Spices" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                        <ArrowRight className="text-white" size={20} />
                    </div>
                    <div className="absolute bottom-0 left-0 p-10">
                        <Sun size={24} className="text-cc-gold mb-4 drop-shadow-md" />
                        <h3 className="text-4xl text-white font-display mb-3 drop-shadow-lg">Spices</h3>
                        <p className="text-white text-sm font-medium drop-shadow-md">Cardamom, Pepper, Turmeric.</p>
                    </div>
                </div>

                {/* Small Item - Sugar */}
                <div 
                    onClick={() => onNavigate('products')}
                    className="md:col-span-1 md:row-span-1 relative group rounded-[2.5rem] overflow-hidden cursor-pointer bg-white border border-gray-100 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="flex justify-between items-start">
                        <Scale size={28} className="text-cc-earth" />
                        <span className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-cc-primary group-hover:text-white transition-colors"><ArrowRight size={16}/></span>
                    </div>
                    <div>
                        <h3 className="text-3xl text-cc-primary font-display mb-2">Sugar</h3>
                        <p className="text-gray-500 text-sm">ICUMSA 45 & Raw Brown.</p>
                    </div>
                </div>

                {/* Small Item - Oils */}
                <div 
                    onClick={() => onNavigate('products')}
                    className="md:col-span-1 md:row-span-1 relative group rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#EDF1EF] p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="flex justify-between items-start">
                        <Droplets size={28} className="text-cc-secondary" />
                         <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-cc-primary group-hover:text-white transition-colors"><ArrowRight size={16}/></span>
                    </div>
                    <div>
                        <h3 className="text-3xl text-cc-primary font-display mb-2">Oils & Ghee</h3>
                        <p className="text-gray-500 text-sm">Sunflower, Palm, Pure Ghee.</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. FEATURED INVENTORY - BRIGHT & VISIBLE */}
      <section className="py-32 bg-white relative">
         <div className="absolute top-0 left-0 w-full h-[500px] bg-cc-cream rounded-b-[4rem] -z-10"></div>
         
         <div className="max-w-[1800px] mx-auto px-6">
             <div className="flex flex-col md:flex-row items-end justify-between mb-20 px-4">
                 <div className="max-w-xl">
                     <span className="text-cc-gold font-bold uppercase tracking-widest text-xs mb-4 block flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Market
                     </span>
                     <h2 className="font-display text-5xl md:text-6xl text-cc-primary mb-6">Market Ready Stock</h2>
                     <p className="text-gray-500 font-light leading-relaxed">
                         Premium lots currently in warehouse, ready for immediate container loading and dispatch.
                     </p>
                 </div>
                 <div className="flex gap-3 mt-8 md:mt-0">
                    <button className="w-14 h-14 rounded-full border border-cc-primary/10 flex items-center justify-center hover:bg-cc-primary hover:text-white transition-colors"><ArrowRight size={24} className="rotate-180"/></button>
                    <button className="w-14 h-14 rounded-full border border-cc-primary/10 flex items-center justify-center hover:bg-cc-primary hover:text-white transition-colors"><ArrowRight size={24}/></button>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {featuredProducts.map((product, index) => (
                     <div 
                        key={product.id} 
                        className="group bg-white rounded-[2rem] pb-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
                        onClick={() => setViewProduct(product)}
                        style={{ animationDelay: `${index * 100}ms` }}
                     >
                         <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-5">
                             {/* Brighter Image */}
                             <img 
                                 src={product.image} 
                                 alt={product.name}
                                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
                                 loading="lazy"
                             />
                             {/* Subtle hover gradient, not darkening */}
                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             
                             <div className="absolute top-4 left-4 flex gap-2">
                                 <span className="bg-white/70 backdrop-blur-md text-cc-primary px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1.5 border border-white/50">
                                     <span className="text-base">{getCountryFlag(product.origin)}</span>
                                     {product.origin.split('/')[0].trim()}
                                 </span>
                             </div>

                             <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button 
                                    onClick={(e) => handleInquire(product, e)}
                                    className="w-full bg-white/90 backdrop-blur-md text-cc-primary py-3.5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-cc-gold hover:text-white transition-colors shadow-lg"
                                >
                                    Add to Inquiry
                                </button>
                             </div>
                         </div>

                         <div className="px-5">
                             <div className="flex justify-between items-start mb-2">
                                 <span className="text-[10px] font-bold text-cc-sage uppercase tracking-widest">{product.category}</span>
                             </div>
                             
                             <h3 className="font-display text-xl text-cc-primary mb-2 leading-tight group-hover:text-cc-earth transition-colors line-clamp-2 min-h-[3rem]">
                                 {product.name}
                             </h3>
                             
                             <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                 <span className="text-xs font-bold text-gray-400">MOQ: {product.specs?.['MOQ'] || '1 FCL'}</span>
                                 <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-cc-primary group-hover:bg-cc-primary group-hover:text-white transition-colors">
                                     <ChevronRight size={14} />
                                 </span>
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* 4. WHY CHOOSE US - GLASS & BLUR */}
      <section className="py-32 px-6 bg-cc-primary text-white overflow-hidden">
          <div className="max-w-[1800px] mx-auto relative">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cc-gold/10 rounded-full blur-[120px] -z-10"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div>
                      <span className="text-cc-gold font-bold uppercase tracking-widest text-xs mb-6 block flex items-center gap-3">
                          <ShieldCheck size={16} /> Our Promise
                      </span>
                      <h2 className="font-display text-6xl md:text-7xl mb-10 leading-none">
                          Integrity in <br/> Every Grain.
                      </h2>
                      <p className="text-white/70 text-xl font-light leading-relaxed mb-16 max-w-lg">
                          We don't just trade commodities; we manage the risk, logistics, and quality assurance that keeps your supply chain resilient in a volatile market.
                      </p>
                      
                      <div className="space-y-10">
                          {[
                              { title: 'Source Verification', desc: 'Direct farm/mill visits to ensure ethical sourcing.' },
                              { title: 'Global Compliance', desc: 'SGS, Bureau Veritas, and FDA compliant documentation.' },
                              { title: 'Logistics Precision', desc: 'Real-time tracking of every container.' }
                          ].map((item, i) => (
                              <div key={i} className="flex gap-8 items-start group">
                                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-cc-gold group-hover:bg-cc-gold group-hover:text-cc-primary transition-all duration-300 flex-shrink-0">
                                      <span className="font-display text-xl">{i + 1}</span>
                                  </div>
                                  <div className="pt-2">
                                      <h4 className="text-2xl font-display mb-2 group-hover:text-cc-gold transition-colors">{item.title}</h4>
                                      <p className="text-white/40 font-light text-base leading-relaxed">{item.desc}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  
                  <div className="relative">
                      <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                          <img src="https://images.unsplash.com/photo-1594220029367-a2f1c8496812?q=80&w=1200" alt="Inspection" className="w-full h-full object-cover scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-cc-primary/80 via-transparent to-transparent"></div>
                          
                          <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-xl">
                              <div className="flex items-center gap-6 mb-6">
                                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100" className="w-16 h-16 rounded-full border-2 border-white object-cover" alt="Quality Officer"/>
                                  <div>
                                      <p className="text-lg font-bold font-display">Rajesh Kumar</p>
                                      <p className="text-[10px] uppercase tracking-widest opacity-60">Chief Quality Officer</p>
                                  </div>
                              </div>
                              <p className="italic text-xl text-white/90 font-serif leading-relaxed">"We reject more batches than we ship. If it's not premium, it doesn't carry the CC name."</p>
                          </div>
                      </div>
                  </div>
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
