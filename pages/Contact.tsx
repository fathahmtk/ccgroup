import React, { useState } from 'react';
import { Building, Send, Anchor, CheckCircle, Briefcase, ShoppingCart } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cc-primary text-white pt-32 pb-20">
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-4">
           <span className="font-mono text-xs text-cc-secondary uppercase tracking-[0.3em] mb-4 block">CC Group Trade Desk</span>
           <h1 className="font-display text-5xl md:text-6xl font-bold mb-8">
               {userType === 'buyer' ? 'Buy Direct.' : 'Sell Direct.'}
           </h1>
           <p className="font-sans text-lg font-light text-gray-400 leading-relaxed mb-12">
             {userType === 'buyer' 
                ? "Direct purchase from CC Group inventory. No intermediaries. We are the principal seller and shipper for all our contracts." 
                : "Sell your harvest or production directly to CC Group. We are cash buyers looking for long-term supply partnerships."
             }
           </p>

           <div className="space-y-12 border-t border-white/10 pt-12">
              <div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Headquarters</h4>
                 <p className="font-display text-xl font-bold">Dubai, UAE</p>
                 <p className="text-gray-400 mt-2 font-light text-sm">Jebel Ali Free Zone (South)<br/>Plot S30201, Logistics City</p>
              </div>
              <div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Support</h4>
                 <p className="font-display text-xl font-bold">+971 4 123 4567</p>
                 <p className="font-mono text-sm text-cc-secondary mt-2">trade.desk@ccgroup.com</p>
              </div>
           </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-8">
           {/* Toggle */}
           <div className="flex gap-1 bg-white/10 p-1 rounded-sm max-w-md mb-10 backdrop-blur-md">
               <button 
                  onClick={() => setUserType('buyer')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${userType === 'buyer' ? 'bg-cc-secondary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
               >
                   <ShoppingCart size={14} /> Buy from CC
               </button>
               <button 
                  onClick={() => setUserType('supplier')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${userType === 'supplier' ? 'bg-cc-gold text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
               >
                   <Briefcase size={14} /> Sell to CC
               </button>
           </div>

           <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm shadow-2xl">
              {formState === 'success' ? (
                 <div className="text-center py-20">
                    <CheckCircle size={64} className="mx-auto text-cc-secondary mb-6" strokeWidth={1} />
                    <h3 className="font-display text-3xl font-bold mb-4">Request Logged</h3>
                    <p className="text-gray-400 mb-8">Your {userType} application ID: #TRD-{Math.floor(Math.random()*10000)}</p>
                    <button onClick={() => setFormState('idle')} className="text-cc-secondary uppercase tracking-widest text-xs border-b border-cc-secondary pb-1 font-bold">Submit Another</button>
                 </div>
              ) : (
                 <form onSubmit={handleSubmit} className="space-y-12">
                    
                    {/* Section 1 */}
                    <div>
                       <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-white border-b border-white/10 pb-4 mb-6">
                          <Building size={16} className={userType === 'buyer' ? "text-cc-secondary" : "text-cc-gold"} /> Company Details
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Legal Entity Name</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display" placeholder="Registered Name" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Country of Registration</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display" placeholder="Jurisdiction" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Official Email</label>
                             <input required type="email" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display" placeholder="business@company.com" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Phone / WhatsApp</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display" placeholder="+1 ..." />
                          </div>
                       </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                       <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-white border-b border-white/10 pb-4 mb-6">
                          <Anchor size={16} className={userType === 'buyer' ? "text-cc-secondary" : "text-cc-gold"} /> {userType === 'buyer' ? 'Requirement Specs' : 'Commodity Offer'}
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Commodity Category</label>
                             <select className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display text-white/80 [&>option]:bg-cc-primary">
                                <option>Rice (Basmati/Jasmine)</option>
                                <option>Sugar (IC45/VHP)</option>
                                <option>Edible Oils</option>
                                <option>Meat & Poultry</option>
                                <option>Spices & Pulses</option>
                             </select>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">{userType === 'buyer' ? 'Required Volume (MT)' : 'Supply Capacity (MT/Month)'}</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display" placeholder="e.g. 500 MT" />
                          </div>
                          
                          {userType === 'buyer' && (
                              <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500">Preferred Incoterm</label>
                                <div className="flex gap-4 pt-2">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" name="incoterm" className="accent-cc-secondary" /> <span className="text-sm font-bold group-hover:text-white transition-colors">CIF</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" name="incoterm" className="accent-cc-secondary" /> <span className="text-sm font-bold group-hover:text-white transition-colors">FOB</span>
                                    </label>
                                </div>
                              </div>
                          )}
                          
                          {userType === 'supplier' && (
                              <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500">Certifications Available</label>
                                <input type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-white outline-none transition-colors text-lg font-display" placeholder="ISO, HACCP, Halal..." />
                              </div>
                          )}

                       </div>
                    </div>

                    <div className="pt-4">
                       <button 
                            type="submit" 
                            disabled={formState === 'submitting'} 
                            className={`w-full font-bold uppercase tracking-[0.25em] text-xs py-5 transition-all disabled:opacity-50 flex items-center justify-center gap-4 rounded-sm hover:scale-[1.01] ${userType === 'buyer' ? 'bg-cc-secondary text-white hover:bg-blue-500' : 'bg-cc-gold text-white hover:bg-yellow-600'}`}
                        >
                          {formState === 'submitting' ? "Processing..." : <>{userType === 'buyer' ? 'Request Quote from CC' : 'Send Offer to CC'} <Send size={16} /></>}
                       </button>
                    </div>

                 </form>
              )}
           </div>
        </div>

      </div>
    </div>
  );
};