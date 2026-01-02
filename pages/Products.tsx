import React, { useState } from 'react';
import { Download, Search, Filter, ArrowUpRight, Check, Package, Scale, Globe, Tag, Eye } from 'lucide-react';
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

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 pb-8 border-b border-gray-200">
            <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-cc-primary mb-2">CC Group Owned Inventory</h1>
                <p className="text-gray-500 text-sm">Showing {filteredProducts.length} lots available for immediate export.</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
                 <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-bold text-xs uppercase tracking-wide rounded-sm hover:bg-gray-50 transition-colors">
                     <Download size={16} /> Export Price List
                 </button>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* SIDEBAR FILTERS */}
            <div className="w-full lg:w-72 flex-shrink-0 space-y-8">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search Keyword..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-white rounded-sm focus:outline-none focus:border-cc-primary text-sm shadow-sm"
                    />
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-cc-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                        <Filter size={14} /> Categories
                    </h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-1 rounded-sm -mx-1 transition-colors">
                            <input 
                                type="radio" 
                                name="category" 
                                checked={selectedCategory === 'All'}
                                onChange={() => setSelectedCategory('All')}
                                className="accent-cc-secondary"
                            />
                            <span className={`text-sm ${selectedCategory === 'All' ? 'text-cc-secondary font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>All Products</span>
                        </label>
                        {CATEGORIES.map(cat => (
                            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group hover:bg-gray-50 p-1 rounded-sm -mx-1 transition-colors">
                                <input 
                                    type="radio" 
                                    name="category"
                                    checked={selectedCategory === cat.name}
                                    onChange={() => setSelectedCategory(cat.name)}
                                    className="accent-cc-secondary"
                                />
                                <span className={`text-sm ${selectedCategory === cat.name ? 'text-cc-secondary font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {cat.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Origin Filter */}
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-cc-primary mb-4 text-sm uppercase tracking-widest">
                        Origin
                    </h3>
                    <div className="space-y-2">
                        {['Brazil', 'India', 'Thailand', 'Vietnam', 'Ukraine', 'USA'].map(origin => (
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
                                     <span className="bg-white/90 backdrop-blur text-cc-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm border border-gray-200 rounded-sm flex items-center gap-1">
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
                                    <button className="bg-white text-cc-primary px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cc-secondary hover:text-white transition-colors flex items-center gap-2">
                                        <Eye size={16} /> Quick View
                                    </button>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                                    <span className="text-[10px] px-2 py-0.5 bg-green-50 text-green-700 rounded-full font-bold uppercase tracking-wide">In Stock</span>
                                </div>
                                
                                <h3 
                                    onClick={() => setViewProduct(product)}
                                    className="font-display text-lg font-bold text-cc-primary mb-2 line-clamp-2 leading-snug group-hover:text-cc-secondary transition-colors cursor-pointer"
                                >
                                    {product.name}
                                </h3>
                                
                                <p className="text-xs text-gray-500 line-clamp-2 mb-4 h-8">{product.description}</p>

                                {/* Specs Mini Grid */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    <div className="bg-gray-50 p-2 rounded-sm border border-gray-100 flex items-center gap-2">
                                        <Package size={14} className="text-gray-400" />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-gray-400 uppercase font-bold">Pack</span>
                                            <span className="text-[10px] font-bold text-gray-700">{product.specs?.['Packaging'] || 'Bulk'}</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 p-2 rounded-sm border border-gray-100 flex items-center gap-2">
                                        <Scale size={14} className="text-gray-400" />
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-gray-400 uppercase font-bold">MOQ</span>
                                            <span className="text-[10px] font-bold text-gray-700">1 FCL</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <span className="block text-[10px] text-gray-400 uppercase font-bold">FOB Price</span>
                                        <span className="text-lg font-bold text-cc-primary">{product.price}</span>
                                    </div>
                                    <button 
                                        onClick={() => handleInquire(product)}
                                        className="bg-cc-primary text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wide hover:bg-cc-secondary transition-colors"
                                    >
                                        Add to Quote
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