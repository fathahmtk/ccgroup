import React from 'react';
import { X, Globe, Package, Calendar, Award, ShieldCheck, Truck, FileText, Container } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
  onInquire: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose, onInquire }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-cc-primary/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-fade-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors"
        >
          <X size={24} className="text-gray-800" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-5/12 bg-gray-100 relative min-h-[300px] md:min-h-full flex flex-col">
           <div className="relative flex-grow">
               <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
        <div className="w-full md:w-7/12 p-8 md:p-12 bg-white">
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
           <div className="flex flex-col md:flex-row gap-3 mt-auto">
               <button 
                  onClick={() => onInquire(product)}
                  className="flex-1 bg-cc-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-cc-secondary transition-colors shadow-lg flex items-center justify-center gap-2"
               >
                   <Truck size={16} /> Add to Quote Request
               </button>
               <button className="flex-1 bg-white border border-gray-200 text-gray-600 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-50 hover:text-cc-primary transition-colors flex items-center justify-center gap-2">
                   <FileText size={16} /> Download Spec Sheet
               </button>
           </div>
        </div>
      </div>
    </div>
  );
};