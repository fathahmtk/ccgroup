import React, { useState } from 'react';
import { Download, Search, Filter, ArrowUpRight, Check, Package, Scale, Globe, Tag, Eye, Container } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductDetailsModal } from '../components/ProductDetailsModal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedOrigin, setSelectedOrigin] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  
  const { addToCart, setIsCartOpen } = useCart();
  
  const toggleOrigin = (origin: string) => {
    setSelectedOrigin(prev => 
      prev.includes(origin) ? prev.filter(o => o !== origin) : [...prev, origin]
    );
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
    const originMatch = selectedOrigin.length === 0 || selectedOrigin.includes(p.origin);
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && originMatch && searchMatch;
  });

  const handleInquire = (product: Product) => {
      addToCart(product);
      setIsCartOpen(true);
      setViewProduct(null);
  };

  // Logic for Dynamic Header Image
  const activeCategoryData = CATEGORIES.find(c => c.name === selectedCategory);
  // Default image updated to a rich display of foodstuff/spices/grains instead of a port scene
  const heroImage = activeCategoryData 
    ? activeCategoryData.image 
    : "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop"; 

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Dynamic Header Banner */}
      <div className="relative h-[400px] w-full overflow-hidden bg-cc-primary pt-20">
         <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt={selectedCategory} 
              className="w-full h-full object-cover opacity-60 transition-all duration-700"
            />
            {/* Gradient Overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-8 h-full flex flex-col justify-end pb-12">
             <span className="text-cc-gold font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2 animate-fade-up">
                <Package size={14}/> {selectedCategory === 'All' ? 'Global Catalog' : 'Product Category'}
             </span>
             <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
                {selectedCategory === 'All' ? 'Commodity Inventory' : selectedCategory}
             </h1>
             <p className="text-gray-300 text-lg max-w-xl font-light leading-relaxed animate-fade-up">
                 {selectedCategory === 'All' 
                    ? `Access our real-time spot market inventory. Showing ${filteredProducts.length} wholesale lots available for immediate export.`
                    : `Premium ${activeCategoryData?.name.toLowerCase()} sourced directly from origin. Verified quality for industrial processing.`
                 }
             </p>
         </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-8 py-12">
        
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-8">
            <p className="text-gray-500 text-sm font-medium">Found <span className="text-cc-primary font-bold">{filteredProducts.length}</span> results</p>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-wide rounded-sm hover:bg-gray-50 transition-colors shadow-sm">
                 <Download size={16} /> Export Catalog
             </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* SIDEBAR FILTERS */}
            <div className="w-full lg:w-72 flex-shrink-0 space-y-8">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search HS Code or Commodity..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-white rounded-sm focus:outline-none focus:border-cc-primary text-sm shadow-sm"
                    />
                </div>

                {/* Categories with Images */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-cc-primary mb-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                        <Filter size={14} /> Trade Sector
                    </h3>
                    <div className="space-y-3">
                        <label className={`flex items-center gap-3 cursor-pointer group p-2 rounded-md transition-all border ${selectedCategory === 'All' ? 'bg-gray-50 border-gray-200' : 'border-transparent hover:bg-gray-50'}`}>
                            <input 
                                type="radio" 
                                name="category" 
                                checked={selectedCategory === 'All'}
                                onChange={() => setSelectedCategory('All')}
                                className="hidden"
                            />
                            <div className={`w-10 h-10 rounded-md flex items-center justify-center border border-gray-100 ${selectedCategory === 'All' ? 'bg-cc-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                <Globe size={20} />
                            </div>
                            <span className={`text-sm ${selectedCategory === 'All' ? 'text-cc-primary font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>All Sectors</span>
                        </label>
                        
                        {CATEGORIES.map(cat => (
                            <label key={cat.id} className={`flex items-center gap-3 cursor-pointer group p-2 rounded-md transition-all border ${selectedCategory === cat.name ? 'bg-gray-50 border-gray-200' : 'border-transparent hover:bg-gray-50'}`}>
                                <input 
                                    type="radio" 
                                    name="category"
                                    checked={selectedCategory === cat.name}
                                    onChange={() => setSelectedCategory(cat.name)}
                                    className="hidden"
                                />
                                <img 
                                    src={cat.image} 
                                    alt={cat.name} 
                                    className={`w-10 h-10 rounded-md object-cover transition-opacity border border-gray-100 ${selectedCategory === cat.name ? 'opacity-100 shadow-sm' : 'opacity-70 group-hover:opacity-100'}`} 
                                />
                                <span className={`text-sm ${selectedCategory === cat.name ? 'text-cc-primary font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {cat.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Origin Filter */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-cc-primary mb-4 text-sm uppercase tracking-widest">
                        Country of Origin
                    </h3>
                    <div className="space-y-2">
                        {['Brazil', 'India', 'Thailand', 'Vietnam', 'Ukraine', 'New Zealand', 'Spain'].map(origin => (
                            <label key={origin} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-1 rounded-sm -mx-1 transition-colors">
                                <input 
                                    type="checkbox" 
                                    className="accent-cc-secondary rounded-sm" 
                                    checked={selectedOrigin.includes(origin)}
                                    onChange={() => toggleOrigin(origin)}
                                />
                                <span className="text-sm text-gray-600">{origin}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-sm hover:shadow-xl transition-all duration-300 group flex flex-col relative">
                            {/* Card Image */}
                            <div className="relative h-64 overflow-hidden bg-gray-100 border-b border-gray-100 cursor-pointer" onClick={() => setViewProduct(product)}>
                                <div className="absolute top-3 left-3 z-10">
                                     <span className="bg-white/95 backdrop-blur text-cc-primary px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-200 rounded-sm flex items-center gap-1">
                                         <Globe size={10} className="text-cc-gold"/> {product.origin}
                                     </span>
                                </div>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Action */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-white text-cc-primary px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-cc-secondary hover:text-white transition-colors flex items-center gap-2 border border-white">
                                        <Eye size={16} /> Inspect Lot
                                    </button>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                                    <span className="text-[9px] px-2 py-1 bg-green-50 text-green-800 rounded-sm border border-green-100 font-mono font-bold uppercase tracking-wide">Available</span>
                                </div>
                                
                                <h3 
                                    onClick={() => setViewProduct(product)}
                                    className="font-display text-lg font-bold text-cc-primary mb-3 line-clamp-2 leading-snug group-hover:text-cc-secondary transition-colors cursor-pointer"
                                >
                                    {product.name}
                                </h3>
                                
                                <p className="text-xs text-gray-500 line-clamp-2 mb-5 h-8 font-light">{product.description}</p>

                                {/* Specs Mini Grid - Bulk Focused */}
                                <div className="grid grid-cols-2 gap-2 mb-6 bg-gray-50/50 p-2 border border-gray-100 rounded-sm">
                                    <div className="flex flex-col p-1">
                                        <span className="text-[9px] text-gray-400 uppercase font-bold mb-1 flex items-center gap-1"><Package size={10}/> Packaging</span>
                                        <span className="text-[10px] font-bold text-gray-700 truncate" title={product.specs?.['Packaging']}>{product.specs?.['Packaging'] || 'Bulk'}</span>
                                    </div>
                                    <div className="flex flex-col p-1 border-l border-gray-200 pl-3">
                                        <span className="text-[9px] text-gray-400 uppercase font-bold mb-1 flex items-center gap-1"><Container size={10}/> MOQ</span>
                                        <span className="text-[10px] font-bold text-cc-primary">{product.specs?.['MOQ'] || '1 FCL'}</span>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-gray-400 uppercase font-bold">Incoterms</span>
                                        <span className="text-xs font-bold text-gray-800">FOB / CIF</span>
                                    </div>
                                    <button 
                                        onClick={() => handleInquire(product)}
                                        className="bg-cc-primary text-white px-5 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-cc-secondary transition-colors shadow-sm"
                                    >
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Modal */}
        {viewProduct && (
            <ProductDetailsModal 
                product={viewProduct} 
                onClose={() => setViewProduct(null)} 
                onInquire={handleInquire}
            />
        )}
      </div>
    </div>
  );
};