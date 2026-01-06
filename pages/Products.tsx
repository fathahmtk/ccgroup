import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Package, ChevronRight, Globe, Filter, X, Check, ChevronDown, BarChart2, Info, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductDetailsModal } from '../components/ProductDetailsModal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOrigin, setSelectedOrigin] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  
  // For dropdown management
  const [activeDropdown, setActiveDropdown] = useState<'category' | 'origin' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { addToCart, setIsCartOpen } = useCart();
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const availableOrigins = useMemo(() => {
    const origins = new Set<string>();
    PRODUCTS.forEach(product => {
      const parts = product.origin.split('/').map(p => p.trim());
      parts.forEach(part => {
        const cleanOrigin = part.split('(')[0].trim();
        if (cleanOrigin) origins.add(cleanOrigin);
      });
    });
    return Array.from(origins).sort();
  }, []);

  const toggleOrigin = (origin: string) => {
    setSelectedOrigin(prev => 
      prev.includes(origin) ? prev.filter(o => o !== origin) : [...prev, origin]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedOrigin([]);
    setSearchQuery('');
    setActiveDropdown(null);
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const originMatch = selectedOrigin.length === 0 || selectedOrigin.some(o => p.origin.includes(o));
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && originMatch && searchMatch;
  });

  const handleInquire = (product: Product, e?: React.MouseEvent) => {
      e?.stopPropagation();
      addToCart(product);
      setIsCartOpen(true);
      setViewProduct(null);
  };

  const getCountryFlag = (origin: string) => {
    const lower = origin.toLowerCase();
    if (lower.includes('india')) return '🇮🇳';
    if (lower.includes('usa')) return '🇺🇸';
    if (lower.includes('egypt')) return '🇪🇬';
    if (lower.includes('chile')) return '🇨🇱';
    if (lower.includes('vietnam')) return '🇻🇳';
    if (lower.includes('ukraine')) return '🇺🇦';
    if (lower.includes('saudi')) return '🇸🇦';
    if (lower.includes('myanmar')) return '🇲🇲';
    if (lower.includes('russia')) return '🇷🇺';
    if (lower.includes('tunisia')) return '🇹🇳';
    if (lower.includes('iran')) return '🇮🇷';
    if (lower.includes('south africa')) return '🇿🇦';
    return '🌐';
  };

  return (
    <div className="bg-cc-cream min-h-screen font-sans">
      
      {/* Header Section - Modern Dark Corporate */}
      <div className="relative pt-40 pb-24 bg-cc-dark overflow-hidden">
         <div className="absolute inset-0">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-cc-primary/30 to-transparent"></div>
         </div>
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
             <div className="animate-fade-up">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-[1px] bg-cc-gold"></span>
                    <span className="text-cc-gold text-xs font-bold uppercase tracking-[0.2em] font-sans">Global Inventory</span>
                 </div>
                 <h1 className="font-display text-6xl md:text-8xl text-white mb-8">
                    Commodity <span className="text-white/40 italic font-serif">Exchange.</span>
                 </h1>
                 <p className="text-white/70 text-xl font-light max-w-xl leading-relaxed font-sans border-l border-white/10 pl-6">
                     Real-time access to our verified supply chain. Browse certified lots available for immediate FOB/CIF contract.
                 </p>
             </div>
         </div>
      </div>

      {/* FILTER BAR - Professional Toolbar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm" ref={dropdownRef}>
         <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search Input */}
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cc-primary transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search assets (e.g. Sugar, S-30)..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-100/50 border border-gray-200 rounded-full focus:outline-none focus:bg-white focus:border-cc-primary transition-all text-sm font-medium font-sans placeholder:text-gray-400 text-cc-primary"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cc-primary">
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Filters Row */}
                <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 no-scrollbar items-center">
                   
                   {/* Category */}
                   <div className="relative">
                       <button 
                          onClick={() => setActiveDropdown(activeDropdown === 'category' ? null : 'category')}
                          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold border transition-all whitespace-nowrap font-sans uppercase tracking-wide ${selectedCategory !== 'All' ? 'bg-cc-primary text-white border-cc-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-cc-primary/30 hover:text-cc-primary'}`}
                       >
                           <Package size={14} />
                           {selectedCategory === 'All' ? 'Category' : selectedCategory}
                           <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'category' ? 'rotate-180' : ''}`} />
                       </button>

                       {/* Dropdown Menu */}
                       {activeDropdown === 'category' && (
                           <div className="absolute top-full right-0 md:left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 grid gap-0.5 animate-fade-in z-50 max-h-[60vh] overflow-y-auto">
                               <button 
                                  onClick={() => { setSelectedCategory('All'); setActiveDropdown(null); }}
                                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-colors font-sans ${selectedCategory === 'All' ? 'bg-gray-100 font-bold text-cc-primary' : 'hover:bg-gray-50 text-gray-600'}`}
                               >
                                   All Categories
                               </button>
                               {CATEGORIES.map(cat => (
                                   <button 
                                      key={cat.id}
                                      onClick={() => { setSelectedCategory(cat.name); setActiveDropdown(null); }}
                                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-colors font-sans ${selectedCategory === cat.name ? 'bg-cc-primary/5 text-cc-primary font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                                   >
                                       <span>{cat.icon}</span>
                                       {cat.name}
                                   </button>
                               ))}
                           </div>
                       )}
                   </div>

                   {/* Origin */}
                   <div className="relative">
                       <button 
                          onClick={() => setActiveDropdown(activeDropdown === 'origin' ? null : 'origin')}
                          className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold border transition-all whitespace-nowrap font-sans uppercase tracking-wide ${selectedOrigin.length > 0 ? 'bg-cc-primary text-white border-cc-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-cc-primary/30 hover:text-cc-primary'}`}
                       >
                           <Globe size={14} />
                           {selectedOrigin.length > 0 ? `Origins (${selectedOrigin.length})` : 'Origin'}
                           <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === 'origin' ? 'rotate-180' : ''}`} />
                       </button>

                       {activeDropdown === 'origin' && (
                           <div className="absolute top-full right-0 md:left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 animate-fade-in z-50 max-h-[60vh] overflow-y-auto">
                               {availableOrigins.map(origin => (
                                   <button 
                                      key={origin}
                                      onClick={() => toggleOrigin(origin)}
                                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-left hover:bg-gray-50 transition-colors group font-sans"
                                   >
                                       <span className={`${selectedOrigin.includes(origin) ? 'font-bold text-cc-primary' : 'text-gray-600'}`}>
                                           {getCountryFlag(origin)} <span className="ml-2">{origin}</span>
                                       </span>
                                       {selectedOrigin.includes(origin) && <Check size={14} className="text-cc-gold"/>}
                                   </button>
                               ))}
                               <div className="pt-2 mt-2 border-t border-gray-100">
                                   <button 
                                      onClick={() => { setSelectedOrigin([]); setActiveDropdown(null); }}
                                      className="w-full py-2 text-xs font-bold text-cc-earth uppercase tracking-widest hover:bg-red-50 rounded-lg font-sans transition-colors"
                                   >
                                       Reset Origin
                                   </button>
                               </div>
                           </div>
                       )}
                   </div>

                   {/* Reset */}
                   {(selectedCategory !== 'All' || selectedOrigin.length > 0 || searchQuery) && (
                       <button 
                          onClick={clearFilters}
                          className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold text-gray-400 hover:text-cc-earth hover:bg-red-50 transition-colors whitespace-nowrap font-sans uppercase tracking-wide"
                       >
                           <X size={14} /> Clear
                       </button>
                   )}

                </div>
            </div>
         </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-16 relative z-20">
        
        {/* Results Info */}
        <div className="mb-10 flex items-center justify-between border-b border-gray-200 pb-4">
            <span className="text-[10px] font-bold text-cc-primary/50 uppercase tracking-[0.2em] font-sans">
                Active Listings: {filteredProducts.length}
            </span>
            <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Displaying: Grid</span>
                <span>Sort: Default</span>
            </div>
        </div>

        {/* Product Grid - Asset Style */}
        <div className="min-h-[500px]">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[2rem] border border-dashed border-gray-200">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Search size={32} className="text-gray-300" />
                </div>
                <h3 className="text-2xl font-display text-cc-primary mb-2">No assets found</h3>
                <p className="text-gray-400 text-sm mb-8 font-sans">Try adjusting your market filters.</p>
                <button onClick={clearFilters} className="text-cc-primary font-bold text-xs uppercase tracking-widest border-b border-cc-primary hover:text-cc-gold hover:border-cc-gold transition-colors">Reset All Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, index) => (
                      <div 
                         key={product.id} 
                         className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cc-gold/30 flex flex-col overflow-hidden relative cursor-pointer" 
                         onClick={() => setViewProduct(product)}
                      >
                          {/* Image Header */}
                          <div className="relative h-72 overflow-hidden bg-cc-cream">
                              <img 
                                  src={product.image} 
                                  alt={product.name}
                                  loading="lazy"
                                  onError={(e) => {
                                      e.currentTarget.src = "https://images.unsplash.com/photo-1580250642511-16609b7eb146?q=80&w=800&auto=format&fit=crop"; 
                                  }}
                                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-cc-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              
                              {/* Overlay Badges */}
                              <div className="absolute top-4 left-4 flex gap-2">
                                  <span className="bg-white/95 backdrop-blur-md text-cc-dark px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm flex items-center gap-1.5 font-sans border border-gray-100">
                                      {getCountryFlag(product.origin)} {product.origin.split('/')[0].split('(')[0].trim()}
                                  </span>
                              </div>
                              
                              <div className="absolute bottom-5 right-5 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                  <span className="bg-cc-gold text-cc-primary px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 font-sans border border-white/20">
                                     View Asset <ArrowUpRight size={14}/>
                                  </span>
                              </div>
                          </div>

                          {/* Data Body */}
                          <div className="p-7 flex flex-col flex-grow">
                              <div className="flex justify-between items-start mb-4">
                                  <span className="text-[10px] font-bold text-cc-gold uppercase tracking-[0.2em] font-sans border border-cc-gold/20 px-2 py-1 rounded">{product.category}</span>
                                  {/* Availability Dot */}
                                  <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                                      <span className="text-[9px] font-bold text-green-700 uppercase tracking-wide font-mono">Live</span>
                                  </div>
                              </div>
                              
                              <h3 className="font-display text-2xl text-cc-primary font-medium mb-6 line-clamp-2 leading-tight min-h-[4rem] group-hover:text-cc-secondary transition-colors">
                                  {product.name}
                              </h3>
                              
                              {/* Spec Grid */}
                              <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8 py-5 border-t border-b border-gray-50">
                                  <div>
                                      <span className="block text-[9px] text-gray-400 uppercase font-bold mb-1 tracking-wider">MOQ</span>
                                      <span className="block text-xs font-bold text-cc-primary font-mono">{product.specs?.['MOQ'] || '1 FCL'}</span>
                                  </div>
                                  <div>
                                      <span className="block text-[9px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Price</span>
                                      <span className="block text-xs font-bold text-cc-primary font-mono truncate">{product.price}</span>
                                  </div>
                                  {product.specs && Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                                     <div key={key}>
                                          <span className="block text-[9px] text-gray-400 uppercase font-bold mb-1 tracking-wider">{key}</span>
                                          <span className="block text-xs font-bold text-cc-primary font-mono truncate">{val}</span>
                                     </div>
                                  ))}
                              </div>

                              <div className="mt-auto">
                                  <button 
                                    onClick={(e) => handleInquire(product, e)}
                                    className="w-full py-4 rounded-xl border border-cc-primary text-cc-primary font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-cc-primary hover:text-white transition-all duration-300 font-sans shadow-sm hover:shadow-lg"
                                  >
                                    Add to Quote
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
            )}
        </div>

        {/* Modal */}
        {viewProduct && (
            <ProductDetailsModal 
                product={viewProduct} 
                onClose={() => setViewProduct(null)} 
                onInquire={(p) => handleInquire(p)}
                onSelectProduct={setViewProduct}
            />
        )}
      </div>
    </div>
  );
};