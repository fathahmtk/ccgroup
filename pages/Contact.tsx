import React, { useState } from 'react';
import { Building, Send, Anchor, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

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
        <div className="lg:col-span-5">
           <span className="font-mono text-xs text-cc-secondary uppercase tracking-[0.3em] mb-4 block">Trade Desk</span>
           <h1 className="font-serif text-6xl md:text-8xl mb-8">Open a Position.</h1>
           <p className="font-sans text-xl font-light text-gray-400 leading-relaxed mb-12">
             We deal strictly in B2B wholesale volumes. Minimum Order Quantity (MOQ) applies to all commodities. Please provide detailed specifications for a Proforma Invoice.
           </p>

           <div className="space-y-12 border-t border-white/10 pt-12">
              <div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Headquarters</h4>
                 <p className="font-serif text-2xl">Dubai, UAE</p>
                 <p className="text-gray-400 mt-2 font-light">Jebel Ali Free Zone (South)<br/>Plot S30201, Logistics City</p>
              </div>
              <div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Direct Line</h4>
                 <p className="font-serif text-2xl">+971 4 123 4567</p>
                 <p className="font-mono text-sm text-cc-secondary mt-2">trade.desk@ccgroup.com</p>
              </div>
           </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-7">
           <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm">
              {formState === 'success' ? (
                 <div className="text-center py-20">
                    <CheckCircle size={64} className="mx-auto text-cc-secondary mb-6" strokeWidth={1} />
                    <h3 className="font-serif text-4xl mb-4">RFQ Received</h3>
                    <p className="text-gray-400 mb-8">Reference ID: #TRD-{Math.floor(Math.random()*10000)}</p>
                    <button onClick={() => setFormState('idle')} className="text-cc-secondary uppercase tracking-widest text-xs border-b border-cc-secondary pb-1">Submit New Request</button>
                 </div>
              ) : (
                 <form onSubmit={handleSubmit} className="space-y-12">
                    
                    {/* Section 1 */}
                    <div>
                       <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-white border-b border-white/10 pb-4 mb-6">
                          <Building size={16} className="text-cc-secondary" /> Corporate Entity
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Company Name</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-cc-secondary outline-none transition-colors text-lg font-serif" placeholder="Registered Legal Name" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Registration Country</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-cc-secondary outline-none transition-colors text-lg font-serif" placeholder="Jurisdiction" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Official Email</label>
                             <input required type="email" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-cc-secondary outline-none transition-colors text-lg font-serif" placeholder="procurement@company.com" />
                          </div>
                       </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                       <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-white border-b border-white/10 pb-4 mb-6">
                          <Anchor size={16} className="text-cc-secondary" /> Shipment Specs
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Commodity</label>
                             <select className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-cc-secondary outline-none transition-colors text-lg font-serif text-white/80 [&>option]:bg-cc-primary">
                                <option>Rice (Basmati/Jasmine)</option>
                                <option>Sugar (IC45/VHP)</option>
                                <option>Edible Oils</option>
                                <option>Pulses & Grains</option>
                             </select>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Volume (MT)</label>
                             <input required type="text" className="w-full bg-transparent border-b border-gray-600 py-2 focus:border-cc-secondary outline-none transition-colors text-lg font-serif" placeholder="e.g. 500 MT" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] uppercase tracking-widest text-gray-500">Incoterms</label>
                             <div className="flex gap-4 pt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                   <input type="radio" name="incoterm" className="accent-cc-secondary" /> <span className="text-sm">CIF</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                   <input type="radio" name="incoterm" className="accent-cc-secondary" /> <span className="text-sm">FOB</span>
                                </label>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="pt-4">
                       <button type="submit" disabled={formState === 'submitting'} className="w-full bg-white text-cc-primary font-bold uppercase tracking-[0.25em] text-xs py-5 hover:bg-cc-secondary transition-colors disabled:opacity-50 flex items-center justify-center gap-4">
                          {formState === 'submitting' ? "Processing Request..." : <>Submit RFQ <Send size={16} /></>}
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