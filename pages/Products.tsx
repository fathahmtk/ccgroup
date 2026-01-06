import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Package, ChevronRight, SlidersHorizontal, Globe, Filter, X, Check, ChevronDown } from 'lucide-react';
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

  const getCertBadges = (product: Product) => {
      const text = (product.description + " " + JSON.stringify(product.specs || {})).toLowerCase();
      const badges = [];
      if (text.includes('halal')) badges.push('Halal');
      if (text.includes('iso')) badges.push('ISO');
      if (text.includes('organic')) badges.push('Organic');
      return badges;
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
    <div className="bg-cc-cream min-h-screen">
      
      {/* Header Section */}
      <div className="relative pt-32 pb-20 bg-cc-primary overflow-hidden">
         <div className="absolute inset-0 overflow-hidden">
             {/* Increased opacity for better visibility */}
             <img src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2000" className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom" />
             {/* Gradient for text readability only */}
             <div className="absolute inset-0 bg-gradient-to-b from-cc-dark/60 via-transparent to-cc-primary"></div>
         </div>
         <div className="max-w-[1800px] mx-auto px-6 md:px-16 relative z-10 text-center">
             <div className="animate-fade-up">
                 <h1 className="font-display text-5xl md:text-7xl text-white mb-6 drop-shadow-xl">
                    Global Trade Catalog
                 </h1>
                 <p className="text-white/80 text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                     Explore our live inventory of certified commodities. Sourced directly from origin for industrial use.
                 </p>
             </div>
         </div>
      </div>

      {/* FILTER BAR - STICKY GLASS */}
      <div className="sticky top-20 z-40 bg-white/70 backdrop-blur-xl border-y border-white/40 shadow-sm" ref={dropdownRef}>
         <div className="max-w-[1800px] mx-auto px-6 md:px-16 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search Input */}
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cc-gold transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search commodities (e.g. Sugar, Rice)..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-2.5 bg-gray-100/50 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-cc-gold focus:bg-white transition-all text-sm font-medium hover:bg-white"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Filters Row */}
                <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 no-scrollbar">
                   
                   {/* Category Dropdown Toggle */}
                   <div className="relative">
                       <button 
                          onClick={() => setActiveDropdown(activeDropdown === 'category' ? null : 'category')}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${selectedCategory !== 'All' ? 'bg-cc-primary text-white border-cc-primary shadow-lg' : 'bg-white/80 text-gray-600 border-gray-200 hover:border-cc-gold backdrop-blur-sm'}`}
                       >
                           <Package size={16} />
                           {selectedCategory === 'All' ? 'Category' : selectedCategory}
                           <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'category' ? 'rotate-180' : ''}`} />
                       </button>

                       {/* Dropdown Menu */}
                       {activeDropdown === 'category' && (
                           <div className="absolute top-full right-0 md:left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-2 grid gap-1 animate-fade-in z-50 max-h-[60vh] overflow-y-auto">
                               <button 
                                  onClick={() => { setSelectedCategory('All'); setActiveDropdown(null); }}
                                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${selectedCategory === 'All' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}
                               >
                                   <div className="w-8 flex justify-center"><Filter size={14}/></div>
                                   All Categories
                               </button>
                               {CATEGORIES.map(cat => (
                                   <button 
                                      key={cat.id}
                                      onClick={() => { setSelectedCategory(cat.name); setActiveDropdown(null); }}
                                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${selectedCategory === cat.name ? 'bg-cc-cream text-cc-primary font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                                   >
                                       <div className="w-8 text-lg text-center">{cat.icon}</div>
                                       {cat.name}
                                   </button>
                               ))}
                           </div>
                       )}
                   </div>

                   {/* Origin Dropdown Toggle */}
                   <div className="relative">
                       <button 
                          onClick={() => setActiveDropdown(activeDropdown === 'origin' ? null : 'origin')}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${selectedOrigin.length > 0 ? 'bg-cc-primary text-white border-cc-primary shadow-lg' : 'bg-white/80 text-gray-600 border-gray-200 hover:border-cc-gold backdrop-blur-sm'}`}
                       >
                           <Globe size={16} />
                           {selectedOrigin.length > 0 ? `Origins (${selectedOrigin.length})` : 'Origin'}
                           <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'origin' ? 'rotate-180' : ''}`} />
                       </button>

                       {/* Dropdown Menu */}
                       {activeDropdown === 'origin' && (
                           <div className="absolute top-full right-0 md:left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-2 animate-fade-in z-50 max-h-[60vh] overflow-y-auto">
                               <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 mb-2">Select Origins</div>
                               {availableOrigins.map(origin => (
                                   <button 
                                      key={origin}
                                      onClick={() => toggleOrigin(origin)}
                                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left hover:bg-gray-50 transition-colors group"
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
                                      className="w-full py-2 text-xs font-bold text-cc-primary uppercase tracking-widest hover:bg-cc-cream rounded-lg"
                                   >
                                       Reset Origins
                                   </button>
                               </div>
                           </div>
                       )}
                   </div>

                   {/* Reset Button */}
                   {(selectedCategory !== 'All' || selectedOrigin.length > 0 || searchQuery) && (
                       <button 
                          onClick={clearFilters}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-red-500 hover:bg-red-50 transition-colors whitespace-nowrap bg-white/50 backdrop-blur-sm"
                       >
                           <X size={14} /> Clear
                       </button>
                   )}

                </div>
            </div>
         </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-16 py-12 relative z-20">
        
        {/* Results Info */}
        <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Showing {filteredProducts.length} Lots
            </span>
        </div>

        {/* Product Grid - Full Width */}
        <div className="min-h-[400px]">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[2rem] border border-dashed border-gray-200">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
                    <Search size={32} />
                </div>
                <h3 className="text-2xl font-display text-gray-800 mb-2">No active lots found.</h3>
                <p className="text-gray-500 mb-8 max-w-xs">Try adjusting your filters or search for a different commodity.</p>
                <button onClick={clearFilters} className="text-cc-primary font-bold uppercase tracking-widest text-xs border-b border-cc-primary hover:text-cc-gold hover:border-cc-gold transition-colors">Clear All Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product, index) => (
                      <div 
                         key={product.id} 
                         className="group flex flex-col bg-white rounded-[2rem] pb-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 cursor-pointer overflow-hidden" 
                         onClick={() => setViewProduct(product)}
                         style={{ animationDelay: `${index * 50}ms` }}
                      >
                          {/* Card Image */}
                          <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-5">
                              {/* Bright Image by default, brighter on hover */}
                              <img 
                                  src={product.image} 
                                  alt={product.name}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110"
                              />
                              {/* Only show slight gradient on hover for button readability, otherwise clear */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              
                              <div className="absolute top-4 left-4">
                                  <span className="bg-white/70 backdrop-blur-md text-cc-primary px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm flex items-center gap-1.5 border border-white/50">
                                      <span className="text-base leading-none">{getCountryFlag(product.origin)}</span>
                                      <span>{product.origin.split('/')[0].split('(')[0].trim()}</span>
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

                          <div className="flex flex-col flex-grow px-5">
                              <div className="flex justify-between items-start mb-2">
                                  <span className="text-[10px] font-bold text-cc-sage uppercase tracking-widest">{product.category}</span>
                                  <div className="flex gap-1">
                                    {getCertBadges(product).map(b => (
                                        <span key={b} className="text-[9px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">{b}</span>
                                    ))}
                                  </div>
                              </div>
                              
                              <h3 className="font-display text-xl text-cc-primary mb-2 leading-tight group-hover:text-cc-earth transition-colors min-h-[3.5rem]">
                                  {product.name}
                              </h3>
                              
                              <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between group/link">
                                  <span className="text-xs font-bold text-gray-400">MOQ: {product.specs?.['MOQ'] || '1 FCL'}</span>
                                  <span className="w-8 h-8 rounded-full bg-cc-cream flex items-center justify-center text-cc-primary group-hover/link:bg-cc-primary group-hover/link:text-white transition-colors">
                                      <ChevronRight size={14} />
                                  </span>
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