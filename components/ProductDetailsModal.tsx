import React, { useState } from 'react';
import { X, Globe, Package, Calendar, Award, ShieldCheck, Truck, FileText, Container, Beaker, Maximize2, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
  onInquire: (product: Product) => void;
  onSelectProduct?: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose, onInquire, onSelectProduct }) => {
  const [isFullImage, setIsFullImage] = useState(false);

  // Filter related products: Same category, exclude current product, limit to 3
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-cc-primary/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Full Image Lightbox Overlay */}
      {isFullImage && (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center animate-fade-in" onClick={() => setIsFullImage(false)}>
           <button 
             className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
             onClick={() => setIsFullImage(false)}
           >
             <X size={32} />
           </button>
           <img 
              src={product.image} 
              alt={product.name}
              className="max-w-full max-h-full p-4 object-contain select-none"
           />
        </div>
      )}

      {/* Modal Content */}
      <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-fade-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors shadow-sm"
        >
          <X size={24} className="text-gray-800" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-5/12 bg-gray-100 relative min-h-[300px] md:min-h-full flex flex-col group">
           <div className="relative flex-grow cursor-zoom-in" onClick={() => setIsFullImage(true)}>
               <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               
               {/* Expand Button Overlay */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                   <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                       <Maximize2 size={16} /> View Full Image
                   </div>
               </div>
           </div>
           
           <div className="p-8 bg-cc-primary text-white">
              <span className="inline-block px-3 py-1 bg-cc-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-sm mb-4">
                  Ready for Export
              </span>
              <div className="space-y-3">
                  <div className="flex items-center gap-3">
                      <ShieldCheck size={18} className="text-green-400" />
                      <span className="text-xs font-bold uppercase tracking-wide">SGS / Bureau Veritas Insp.</span>
                  </div>
                  <div className="flex items-center gap-3">
                      <Globe size={18} className="text-blue-400" />
                      <span className="text-xs font-bold uppercase tracking-wide">Direct from Origin</span>
                  </div>
              </div>
           </div>
        </div>

        {/* Details Side */}
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white flex flex-col">
           <div className="mb-8">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                 <span>{product.category}</span>
                 <span className="text-gray-300">/</span>
                 <span className="flex items-center gap-1 text-cc-secondary"><Globe size={12} /> Origin: {product.origin}</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-cc-primary mb-4 leading-tight">{product.name}</h2>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-sm">
                      <span className="block text-[10px] text-gray-400 uppercase font-bold">Indicative Pricing</span>
                      <span className="text-lg font-bold text-cc-primary font-display">Spot Market Rate</span>
                  </div>
                  <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-sm">
                       <span className="block text-[10px] text-gray-400 uppercase font-bold">Incoterms</span>
                       <span className="text-lg font-bold text-cc-primary font-display">FOB / CIF</span>
                  </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {product.description}
              </p>
           </div>

           {/* Specifications Grid */}
           <div className="bg-gray-50 rounded-sm p-6 mb-8 border border-gray-100">
              <h3 className="font-bold text-cc-primary text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FileText size={14} className="text-cc-gold" /> Technical & Logistics Data
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {product.specs ? Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex flex-col border-l-2 border-gray-200 pl-3">
                          <span className="block text-[9px] text-gray-400 uppercase font-bold mb-0.5">{key}</span>
                          <span className="block text-sm font-bold text-gray-800">{value}</span>
                      </div>
                  )) : (
                      <p className="text-gray-400 text-sm italic col-span-2">Standard export grade specifications apply.</p>
                  )}
              </div>
           </div>

           {/* Logistics Highlights */}
           <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="flex items-start gap-3">
                   <Container className="text-cc-secondary mt-0.5" size={18} />
                   <div>
                       <span className="block text-[10px] text-gray-400 uppercase font-bold">Minimum Order Qty</span>
                       <span className="text-sm font-bold text-cc-primary">{product.specs?.['MOQ'] || '1 Full Container Load'}</span>
                   </div>
               </div>
               <div className="flex items-start gap-3">
                   <Calendar className="text-cc-secondary mt-0.5" size={18} />
                   <div>
                       <span className="block text-[10px] text-gray-400 uppercase font-bold">Est. Lead Time</span>
                       <span className="text-sm font-bold text-cc-primary">14-21 Days ex-Port</span>
                   </div>
               </div>
           </div>

           {/* Actions */}
           <div className="flex flex-col md:flex-row gap-3 mb-8">
               <button 
                  onClick={() => onInquire(product)}
                  className="flex-1 bg-cc-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-cc-secondary transition-colors shadow-lg flex items-center justify-center gap-2"
               >
                   <Truck size={16} /> Add to Quote Request
               </button>
               <button className="flex-1 bg-white border border-gray-200 text-gray-600 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-50 hover:text-cc-primary transition-colors flex items-center justify-center gap-2">
                   <Beaker size={16} /> Request Sample
               </button>
           </div>
           
           {/* Related Products Section */}
           {onSelectProduct && relatedProducts.length > 0 && (
             <div className="mt-auto border-t border-gray-100 pt-8">
               <div className="flex justify-between items-center mb-4">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Related Commodities</h4>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-cc-gold cursor-default">View Details</span>
               </div>
               <div className="grid grid-cols-3 gap-4">
                 {relatedProducts.map(relProduct => (
                   <div 
                      key={relProduct.id} 
                      onClick={() => onSelectProduct(relProduct)}
                      className="group cursor-pointer"
                   >
                      <div className="aspect-square rounded-sm overflow-hidden mb-2 bg-gray-50 border border-gray-100 relative">
                        <img 
                          src={relProduct.image} 
                          alt={relProduct.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                           <div className="bg-white text-cc-primary rounded-full p-1.5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                             <ArrowRight size={12} />
                           </div>
                        </div>
                      </div>
                      <h5 className="text-[11px] font-bold text-cc-primary leading-tight line-clamp-2 group-hover:text-cc-earth transition-colors">
                        {relProduct.name}
                      </h5>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wide">{relProduct.origin.split('/')[0]}</span>
                   </div>
                 ))}
               </div>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};