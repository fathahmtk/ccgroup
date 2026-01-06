import React from 'react';
import { X, Minus, Plus, FileText, Trash2, Send, Package, Container, FileCheck, ShieldAlert } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden font-sans">
      <div 
        className="absolute inset-0 bg-cc-dark/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />
      <div className="absolute inset-y-0 right-0 w-full md:max-w-md flex">
        <div className="w-full h-full bg-cc-cream shadow-2xl flex flex-col animate-slide-in-right border-l border-cc-gold/20">
          
          {/* Header - Manifest Style */}
          <div className="px-8 py-6 border-b border-cc-gold/10 flex items-center justify-between bg-cc-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="p-3 bg-white/10 border border-white/10 text-cc-gold rounded-xl backdrop-blur-md">
                 <FileCheck size={20} />
              </div>
              <div>
                 <h2 className="text-lg font-display font-medium text-white tracking-wide">Trade Manifest</h2>
                 <p className="text-[10px] text-white/50 font-mono uppercase tracking-widest mt-1">Ref: EXP-{new Date().getTime().toString().slice(-6)}</p>
              </div>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition text-white/70 hover:text-white relative z-10">
              <X size={24} />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-cc-cream relative">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-cc-primary/30 space-y-6">
                <div className="w-24 h-24 rounded-full bg-white border border-cc-primary/5 flex items-center justify-center">
                    <Container size={40} strokeWidth={1} />
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold text-cc-primary uppercase tracking-[0.2em] mb-2">Manifest Empty</p>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed font-light">Select commodities from the Global Inventory to build your Proforma Invoice request.</p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-8 py-3 border border-cc-primary text-cc-primary bg-transparent rounded-full font-bold text-[10px] hover:bg-cc-primary hover:text-white transition-all uppercase tracking-widest"
                >
                  Browse Assets
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-5 group hover:border-cc-gold/30 transition-all duration-300">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-cc-cream border border-gray-50 relative">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold text-cc-primary line-clamp-1 font-display">{item.name}</h3>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors -mt-1 -mr-1 p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Origin: {item.origin.split('/')[0]}</span>
                          {item.specs?.['HS Code'] && (
                              <span className="text-[9px] text-cc-gold font-mono bg-cc-gold/10 px-1.5 py-0.5 rounded">HS: {item.specs['HS Code']}</span>
                          )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-cc-primary transition text-gray-400"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-10 text-center text-xs font-bold text-cc-primary font-mono">
                             {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white hover:text-cc-primary transition text-gray-400"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      
                      <div className="text-[10px] text-gray-400 font-medium">
                          {item.specs?.['Estimated Vol'] || 'Standard Lot'}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer - Call to Action */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-8 bg-white z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
               <div className="flex justify-between items-center mb-6">
                  <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Lots</span>
                      <span className="block font-display text-2xl text-cc-primary leading-none">{cartItems.reduce((acc, item) => acc + item.quantity, 0)} <span className="text-sm text-gray-300 font-sans font-normal">Units</span></span>
                  </div>
                  <div className="text-right">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Incoterms</span>
                      <span className="block font-bold text-cc-primary text-sm bg-cc-cream px-3 py-1 rounded-md border border-gray-100">FOB / CIF</span>
                  </div>
               </div>
               
              <button
                className="group relative w-full flex items-center justify-center rounded-xl bg-cc-primary px-6 py-4 text-xs font-bold text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative flex items-center gap-3 uppercase tracking-[0.2em]">
                    Request Proforma Invoice <Send size={14} className="text-cc-gold" />
                </span>
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-[9px] text-gray-400">
                 <ShieldAlert size={10} />
                 <span>Official quote provided within 24hrs via Trade Desk.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};