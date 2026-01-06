import React, { useState, useEffect } from 'react';
import { X, Globe, FileText, Container, Calendar, ShieldCheck, Truck, Beaker, Maximize2, ArrowRight, ChevronLeft, ChevronRight, Calculator, Download, Share2, Printer } from 'lucide-react';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Calculator State
  const [volume, setVolume] = useState<number>(25); // Default 1 Container approx
  const [unit, setUnit] = useState('MT');
  
  // Extract numerical price if possible, or use a placeholder base rate for estimation
  const basePrice = 1200; // Placeholder base rate per MT for calculation demo
  const estimatedValue = volume * basePrice;

  // Use product.images if available, otherwise fallback to [product.image]
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  // Reset index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setVolume(25);
  }, [product]);

  // Handle navigation
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const selectImage = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') {
        if (isFullImage) setIsFullImage(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryImages.length, isFullImage, onClose]);

  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-cc-dark/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Full Image Lightbox Overlay */}
      {isFullImage && (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center animate-fade-in" onClick={() => setIsFullImage(false)}>
           <button 
             className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-50"
             onClick={(e) => { e.stopPropagation(); setIsFullImage(false); }}
           >
             <X size={32} />
           </button>
           
           {galleryImages.length > 1 && (
             <>
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-50"
                  onClick={prevImage}
                >
                  <ChevronLeft size={32} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors z-50"
                  onClick={nextImage}
                >
                  <ChevronRight size={32} />
                </button>
             </>
           )}

           <img 
              src={galleryImages[currentImageIndex]} 
              alt={product.name}
              className="max-w-full max-h-full p-4 object-contain select-none transition-opacity duration-300"
           />
        </div>
      )}

      {/* Modal Content - Asset Ticket Style */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-fade-up border border-white/10 font-sans">
        
        {/* Header Bar (Mobile only) */}
        <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-100">
             <span className="text-xs font-bold uppercase tracking-widest text-cc-primary">Asset Details</span>
             <button onClick={onClose}><X size={20} className="text-gray-500"/></button>
        </div>

        <button 
          onClick={onClose}
          className="hidden md:block absolute top-6 right-6 z-20 p-2 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm text-cc-primary"
        >
          <X size={24} />
        </button>

        {/* 1. VISUAL ASSET COLUMN */}
        <div className="w-full md:w-5/12 bg-cc-cream relative flex flex-col group select-none border-r border-gray-100 overflow-y-auto">
           {/* Main Image */}
           <div className="relative aspect-square md:aspect-auto md:h-[60%] cursor-zoom-in overflow-hidden" onClick={() => setIsFullImage(true)}>
               <img 
                  src={galleryImages[currentImageIndex]} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-cc-dark/60 to-transparent pointer-events-none"></div>
               
               <div className="absolute bottom-6 left-6 text-white">
                   <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 border border-white/10 shadow-lg text-cc-primary">
                      <Globe size={12}/> {product.origin}
                   </span>
               </div>

               {galleryImages.length > 1 && (
                 <div className="absolute bottom-6 right-6 flex gap-1 pointer-events-none">
                     {galleryImages.map((_, idx) => (
                         <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === currentImageIndex ? 'bg-cc-gold' : 'bg-white/50'}`}></div>
                     ))}
                 </div>
               )}
           </div>
           
           {/* Thumbnails */}
           {galleryImages.length > 1 && (
             <div className="flex p-4 gap-2 overflow-x-auto bg-white border-b border-gray-100">
               {galleryImages.map((img, idx) => (
                 <button 
                   key={idx}
                   onClick={(e) => selectImage(idx, e)}
                   className={`w-16 h-16 rounded-xl overflow-hidden transition-all flex-shrink-0 border-2 ${currentImageIndex === idx ? 'border-cc-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                 >
                   <img src={img} className="w-full h-full object-cover" alt="thumb" />
                 </button>
               ))}
             </div>
           )}

           {/* Documents Section */}
           <div className="p-8 bg-cc-cream flex-grow">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-cc-gold mb-6 flex items-center gap-2">
                   <FileText size={14}/> Compliance Docs
               </h4>
               <div className="space-y-3">
                   {['Certificate of Origin', 'Phytosanitary Cert', 'SGS Quality Report', 'Bill of Lading Draft'].map((doc, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-white border border-transparent rounded-xl hover:border-cc-gold/30 transition-colors group/doc cursor-pointer shadow-sm">
                           <div className="flex items-center gap-3">
                               <div className="p-1.5 bg-cc-cream rounded-md text-cc-secondary group-hover/doc:text-cc-gold"><FileText size={16}/></div>
                               <span className="text-xs font-bold text-gray-600 font-sans">{doc}</span>
                           </div>
                           <Download size={16} className="text-gray-300 group-hover/doc:text-cc-primary"/>
                       </div>
                   ))}
               </div>
           </div>
        </div>

        {/* 2. TRADING DATA COLUMN */}
        <div className="w-full md:w-7/12 bg-white flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
           <div className="p-10 md:p-12 flex-grow">
              
              {/* Header */}
              <div className="mb-10">
                  <div className="flex justify-between items-start mb-6">
                      <div>
                          <div className="flex items-center gap-2 mb-3">
                             <span className="px-3 py-1 rounded-full bg-cc-primary/5 text-cc-primary text-[10px] font-bold uppercase tracking-wide border border-cc-primary/10">Spot Contract</span>
                             <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wide border border-green-100 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Live</span>
                          </div>
                          <h2 className="font-display text-4xl font-medium text-cc-primary leading-tight">{product.name}</h2>
                      </div>
                      <div className="flex gap-2">
                          <button className="p-2.5 border border-gray-100 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors" title="Share"><Share2 size={18}/></button>
                          <button className="p-2.5 border border-gray-100 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors" title="Print Spec"><Printer size={18}/></button>
                      </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8 border-l-2 border-cc-gold/50 pl-6 font-light">
                      {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                      <div className="p-5 rounded-2xl bg-cc-cream border border-gray-100">
                          <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Market Price (Indicative)</span>
                          <span className="block text-2xl font-display text-cc-primary">{product.price}</span>
                      </div>
                      <div className="p-5 rounded-2xl bg-cc-cream border border-gray-100">
                           <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Incoterms</span>
                           <span className="block text-2xl font-display text-cc-primary">FOB / CIF</span>
                      </div>
                  </div>
              </div>

              {/* Calculator Section */}
              <div className="mb-10 p-8 rounded-2xl border border-cc-primary/10 bg-cc-primary/5">
                   <div className="flex items-center gap-3 mb-6">
                       <Calculator size={18} className="text-cc-gold"/>
                       <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cc-primary">Contract Estimator</h3>
                   </div>
                   
                   <div className="flex flex-col md:flex-row gap-6 items-end">
                       <div className="flex-1 w-full">
                           <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-wider">Volume ({unit})</label>
                           <input 
                              type="number" 
                              value={volume} 
                              onChange={(e) => setVolume(Number(e.target.value))}
                              className="w-full p-3.5 rounded-xl border border-gray-200 text-xl font-bold text-cc-primary focus:outline-none focus:border-cc-gold transition-colors bg-white font-display"
                              min={1}
                           />
                       </div>
                       <div className="flex-1 w-full">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-2 tracking-wider">Est. Value (USD)</label>
                            <div className="w-full p-3.5 rounded-xl bg-cc-primary text-white border border-cc-primary text-xl font-display">
                                ${(estimatedValue).toLocaleString()}
                            </div>
                       </div>
                       <button 
                          onClick={() => onInquire({...product, specs: {...product.specs, 'Estimated Vol': `${volume} ${unit}`}})}
                          className="w-full md:w-auto px-8 py-3.5 bg-cc-dark text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-cc-primary transition-all shadow-lg flex items-center justify-center gap-3 h-[54px] hover:scale-105 active:scale-95"
                       >
                           Add to Manifest <ArrowRight size={16}/>
                       </button>
                   </div>
                   <p className="text-[9px] text-gray-400 mt-3 italic">*Estimates only. Final pricing provided in Proforma Invoice.</p>
              </div>

              {/* Specs Grid */}
              <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cc-primary mb-6 border-b border-gray-100 pb-3">Technical Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                      {product.specs ? Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                              <span className="block text-[9px] text-gray-400 uppercase font-bold mb-1 tracking-wider">{key}</span>
                              <span className="block text-sm font-bold text-gray-800 font-sans">{value}</span>
                          </div>
                      )) : (
                          <div className="col-span-3 text-gray-400 text-sm italic">Standard export grade specifications apply.</div>
                      )}
                      
                      {/* Standard Fields if not in specs */}
                      <div>
                          <span className="block text-[9px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Origin</span>
                          <span className="block text-sm font-bold text-gray-800 font-sans">{product.origin}</span>
                      </div>
                      <div>
                          <span className="block text-[9px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Category</span>
                          <span className="block text-sm font-bold text-gray-800 font-sans">{product.category}</span>
                      </div>
                  </div>
              </div>

              {/* Related */}
              {onSelectProduct && relatedProducts.length > 0 && (
                 <div className="pt-8 border-t border-gray-100">
                     <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Similar Assets</h4>
                     <div className="grid grid-cols-3 gap-4">
                         {relatedProducts.map(rel => (
                             <div 
                                key={rel.id} 
                                onClick={() => onSelectProduct(rel)}
                                className="group cursor-pointer border border-gray-100 rounded-xl p-2.5 hover:border-cc-gold/30 transition-all hover:shadow-lg bg-white"
                             >
                                 <div className="flex items-center gap-3">
                                     <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                         <img src={rel.image} className="w-full h-full object-cover" alt={rel.name}/>
                                     </div>
                                     <div className="overflow-hidden">
                                         <h5 className="text-[10px] font-bold text-cc-primary truncate font-sans">{rel.name}</h5>
                                         <span className="text-[9px] text-gray-400 font-sans">{rel.origin.split('/')[0]}</span>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
              )}

           </div>
           
           {/* Footer Action */}
           <div className="p-6 border-t border-gray-100 bg-white flex justify-between items-center md:hidden">
               <div className="text-xs">
                   <span className="block text-gray-400 font-bold uppercase tracking-wider mb-1">Est. Value</span>
                   <span className="block font-bold text-cc-primary text-xl font-display">${estimatedValue.toLocaleString()}</span>
               </div>
               <button 
                  onClick={() => onInquire(product)}
                  className="px-8 py-3 bg-cc-primary text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-lg"
               >
                  Add to Quote
               </button>
           </div>
        </div>
      </div>
    </div>
  );
};