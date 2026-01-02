import React from 'react';
import { X, Minus, Plus, FileText, Trash2, Send, Package, Container } from 'lucide-react';
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
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cc-primary/80 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsCartOpen(false)} 
      />
      <div className="absolute inset-y-0 right-0 w-full md:max-w-md flex">
        <div className="w-full h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-gray-100 flex items-center justify-between bg-cc-primary text-white">
            <div className="flex items-center space-x-3">
              <Container size={24} className="text-cc-secondary" />
              <div>
                 <h2 className="text-lg font-bold font-serif leading-none">Trade Inquiry List</h2>
                 <p className="text-[10px] uppercase tracking-widest opacity-70 mt-1">Request for Quotation (RFQ)</p>
              </div>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <FileText size={64} className="opacity-20" />
                <p className="text-lg font-medium text-gray-600">No items selected</p>
                <p className="text-sm text-center max-w-xs leading-relaxed">Add commodities from our catalog to build your export inquiry list.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-8 py-3 bg-cc-primary text-white rounded-sm font-bold text-xs hover:bg-cc-secondary transition uppercase tracking-widest shadow-lg"
                >
                  View Commodities
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex space-x-4 border-b border-gray-100 pb-4 last:border-0">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm border border-gray-200">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-sm font-bold text-cc-primary">
                        <h3 className="line-clamp-2 pr-2">{item.name}</h3>
                      </div>
                      <p className="mt-1 text-xs text-gray-500 font-medium">Origin: {item.origin}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm mt-3">
                      <div className="flex items-center border border-gray-300 rounded-sm">
                         {/* Simple Quantity Concept for Inquiry */}
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-100 transition"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 font-mono font-medium text-xs text-cc-primary">
                             {item.quantity} Unit(s)
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-100 transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="font-medium text-gray-400 hover:text-red-600 flex items-center space-x-1 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50">
               <div className="bg-blue-50 border border-blue-100 p-4 mb-6 rounded-sm">
                  <p className="text-xs text-blue-900 leading-relaxed">
                     <strong>Next Step:</strong> Submit this list to receive a formal Proforma Invoice (PI) including CIF/FOB pricing and shipping schedules to your destination port.
                  </p>
               </div>
              <button
                className="w-full flex items-center justify-center rounded-sm border border-transparent bg-cc-primary px-6 py-4 text-sm font-bold text-white shadow-lg hover:bg-cc-secondary transition uppercase tracking-widest"
              >
                <span>Proceed to Enquiry</span>
                <Send size={16} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};