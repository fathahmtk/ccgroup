import React, { useState } from 'react';
import { Send, ArrowRight, Mail, Phone, MapPin, Globe, Clock, FileText } from 'lucide-react';

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
    <div className="min-h-screen bg-cc-cream font-sans">
      
      {/* Header - Trade Desk */}
      <div className="relative bg-cc-dark text-white pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-end">
            <div>
                <div className="flex items-center gap-3 mb-6">
                   <span className="w-12 h-[1px] bg-cc-gold"></span>
                   <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs">Global Trade Desk</span>
                </div>
                <h1 className="font-display text-6xl md:text-8xl leading-none mb-6">
                    Initiate <br/><span className="italic text-white/40 font-serif">Dialogue.</span>
                </h1>
            </div>
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-3 text-white/60 text-sm mb-2 justify-end">
                    <Clock size={16} className="text-cc-gold"/> <span className="font-mono">Trading Hours: 09:00 - 18:00 IST</span>
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Response Time: &lt; 24 Hours</p>
            </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Details (Sidebar Style) */}
            <div className="lg:col-span-4 space-y-8">
                {/* Main HQ Card */}
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-3">
                        <MapPin size={16} className="text-cc-gold"/> Corporate Headquarters
                    </h3>
                    <address className="not-italic text-cc-primary mb-8">
                        <strong className="block text-2xl font-display mb-3">CC Food Stuff Trading</strong>
                        <span className="text-sm text-gray-600 block leading-relaxed">
                            Logistics Park, Vadakara<br/>
                            Kerala, India - 673101
                        </span>
                    </address>
                    <div className="space-y-4 pt-8 border-t border-gray-100">
                        <a href="mailto:trade@ccfoodstuff.com" className="flex items-center gap-4 text-sm font-bold text-cc-primary hover:text-cc-gold transition-colors">
                            <div className="p-2 bg-cc-cream rounded-full"><Mail size={16}/></div> 
                            trade@ccfoodstuff.com
                        </a>
                        <a href="tel:+914962524567" className="flex items-center gap-4 text-sm font-bold text-cc-primary hover:text-cc-gold transition-colors">
                             <div className="p-2 bg-cc-cream rounded-full"><Phone size={16}/></div>
                            +91 496 252 4567
                        </a>
                    </div>
                </div>

                {/* Regional Offices */}
                <div className="bg-cc-dark text-white p-10 rounded-3xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Globe size={100}/></div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-cc-gold mb-8 flex items-center gap-3 relative z-10">
                        <Globe size={16}/> Regional Desks
                    </h3>
                    <ul className="space-y-6 text-sm relative z-10">
                        <li className="flex justify-between border-b border-white/10 pb-3">
                            <span className="font-bold">Dubai, UAE</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Sales Office</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-3">
                            <span className="font-bold">Ho Chi Minh, Vietnam</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Sourcing</span>
                        </li>
                        <li className="flex justify-between pt-1">
                            <span className="font-bold">Mombasa, Kenya</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-wider">Distribution</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right: RFQ Form (Ticket Style) */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="bg-cc-cream border-b border-gray-100 px-10 py-6 flex justify-between items-center">
                        <h2 className="text-sm font-bold text-cc-primary uppercase tracking-[0.15em] flex items-center gap-3">
                            <FileText size={18} className="text-cc-gold"/> Submit Trade Inquiry (RFQ)
                        </h2>
                        <span className="text-[10px] bg-white border border-gray-200 px-3 py-1.5 rounded-full text-gray-400 font-bold tracking-wide">SECURE FORM</span>
                    </div>

                    <div className="p-10 md:p-14">
                       {formState === 'success' ? (
                          <div className="flex flex-col items-center justify-center text-center py-20">
                             <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 border border-green-100">
                                <Send size={32} />
                             </div>
                             <h3 className="font-display text-3xl text-cc-primary mb-3">Inquiry Registered</h3>
                             <p className="text-gray-500 mb-10 max-w-sm text-sm">Ticket #RFQ-{Math.floor(Math.random() * 10000)}. Our trade desk will respond with a formal PI within 24 hours.</p>
                             <button onClick={() => setFormState('idle')} className="text-xs font-bold uppercase tracking-widest text-cc-primary border-b border-cc-primary pb-1 hover:text-cc-gold hover:border-cc-gold transition-colors">Submit New Request</button>
                          </div>
                       ) : (
                          <form onSubmit={handleSubmit} className="space-y-10">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                                   <input required type="text" className="w-full bg-cc-cream border border-transparent rounded-lg px-5 py-4 text-sm font-medium focus:outline-none focus:bg-white focus:border-cc-gold transition-all text-cc-primary placeholder:text-gray-300" placeholder="Name" />
                                </div>
                                <div className="space-y-2">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Official Email</label>
                                   <input required type="email" className="w-full bg-cc-cream border border-transparent rounded-lg px-5 py-4 text-sm font-medium focus:outline-none focus:bg-white focus:border-cc-gold transition-all text-cc-primary placeholder:text-gray-300" placeholder="name@company.com" />
                                </div>
                             </div>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Company Name</label>
                                   <input required type="text" className="w-full bg-cc-cream border border-transparent rounded-lg px-5 py-4 text-sm font-medium focus:outline-none focus:bg-white focus:border-cc-gold transition-all text-cc-primary placeholder:text-gray-300" placeholder="Trading Co. Ltd" />
                                </div>
                                <div className="space-y-2">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Destination Port</label>
                                   <input required type="text" className="w-full bg-cc-cream border border-transparent rounded-lg px-5 py-4 text-sm font-medium focus:outline-none focus:bg-white focus:border-cc-gold transition-all text-cc-primary placeholder:text-gray-300" placeholder="e.g. Jebel Ali, Dubai" />
                                </div>
                             </div>
                             
                             <div className="space-y-2">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Requirement Specifications</label>
                                <textarea required rows={4} className="w-full bg-cc-cream border border-transparent rounded-lg px-5 py-4 text-sm font-medium focus:outline-none focus:bg-white focus:border-cc-gold transition-all text-cc-primary resize-none placeholder:text-gray-300" placeholder="Please specify Commodity, Grade, Quantity (MT), and Packaging requirements..."></textarea>
                             </div>

                             <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                                 <p className="text-[10px] text-gray-400 italic">
                                     *All data is processed securely under CC Group privacy policy.
                                 </p>
                                 <button 
                                    type="submit" 
                                    disabled={formState === 'submitting'}
                                    className="bg-cc-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:bg-cc-dark transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                                 >
                                    {formState === 'submitting' ? 'Transmitting...' : <>Generate Inquiry <ArrowRight size={16} /></>}
                                 </button>
                             </div>
                          </form>
                       )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};