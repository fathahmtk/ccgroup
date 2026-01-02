import React from 'react';
import { X, Globe, Package, Calendar, Award, ShieldCheck, Truck, FileText } from 'lucide-react';
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
        className="absolute inset-0 bg-cc-primary/80 backdrop-blur-sm transition-opacity"
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
        <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] md:min-h-full">
           <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
           />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <span className="inline-block px-3 py-1 bg-cc-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-sm mb-2">
                  CC Group Stock
              </span>
              <div className="flex items-center gap-2 text-white">
                  <ShieldCheck size={16} className="text-green-400" />
                  <span className="text-xs font-bold uppercase tracking-wide">Quality Assured by SGS</span>
              </div>
           </div>
        </div>

        {/* Details Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
           <div className="mb-8">
              <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                 <span>{product.category}</span>
                 <span>•</span>
                 <span className="flex items-center gap-1"><Globe size={12} /> {product.origin}</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-cc-primary mb-4 leading-tight">{product.name}</h2>
              <div className="flex items-end gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="text-4xl font-bold text-cc-secondary font-display">{product.price}</div>
                  <div className="text-gray-400 text-sm mb-2 font-medium">FOB Basis</div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
              </p>
           </div>

           {/* Specifications Grid */}
           <div className="bg-gray-50 rounded-sm p-6 mb-8 border border-gray-100">
              <h3 className="font-bold text-cc-primary text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FileText size={16} className="text-cc-gold" /> Technical Specifications
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {product.specs ? Object.entries(product.specs).map(([key, value]) => (
                      <div key={key}>
                          <span className="block text-[10px] text-gray-400 uppercase font-bold">{key}</span>
                          <span className="block text-sm font-bold text-gray-800">{value}</span>
                      </div>
                  )) : (
                      <p className="text-gray-400 text-sm italic col-span-2">Standard export grade specifications apply.</p>
                  )}
              </div>
           </div>

           {/* Logistics Info */}
           <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm">
                   <Package className="text-gray-400" size={20} />
                   <div>
                       <span className="block text-[10px] text-gray-400 uppercase font-bold">MOQ</span>
                       <span className="text-sm font-bold text-cc-primary">1 FCL (20ft)</span>
                   </div>
               </div>
               <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-sm">
                   <Calendar className="text-gray-400" size={20} />
                   <div>
                       <span className="block text-[10px] text-gray-400 uppercase font-bold">Lead Time</span>
                       <span className="text-sm font-bold text-cc-primary">14-21 Days</span>
                   </div>
               </div>
           </div>

           {/* Actions */}
           <div className="flex flex-col gap-3">
               <button 
                  onClick={() => onInquire(product)}
                  className="w-full bg-cc-primary text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-cc-secondary transition-colors shadow-lg flex items-center justify-center gap-2"
               >
                   Contact Sales Desk <Truck size={18} />
               </button>
               <button className="w-full bg-white border border-gray-300 text-gray-600 py-3 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-colors">
                   Download Spec Sheet (PDF)
               </button>
           </div>
        </div>
      </div>
    </div>
  );
};