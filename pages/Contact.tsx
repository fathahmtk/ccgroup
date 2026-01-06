import React, { useState } from 'react';
import { Send, ArrowRight, Mail, Phone, MapPin, Globe, Clock, FileText, Building2, MessageSquare, Shield } from 'lucide-react';

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
      <div className="relative bg-cc-dark text-white pt-40 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-end">
            <div>
                <div className="flex items-center gap-3 mb-8">
                   <span className="w-16 h-[1px] bg-cc-gold"></span>
                   <span className="text-cc-gold font-bold uppercase tracking-[0.2em] text-xs font-sans">Global Trade Desk</span>
                </div>
                <h1 className="font-display text-7xl md:text-9xl leading-[0.85] mb-6">
                    Initiate <br/><span className="italic text-white/40 font-serif">Dialogue.</span>
                </h1>
            </div>
            <div className="hidden md:block text-right">
                <div className="flex items-center gap-3 text-white/60 text-sm mb-3 justify-end font-sans">
                    <Clock size={16} className="text-cc-gold"/> <span className="font-mono">Trading Hours: 09:00 - 18:00 IST</span>
                </div>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-sans">Response Time: &lt; 24 Hours</p>
            </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Details (Sidebar Style) */}
            <div className="lg:col-span-4 space-y-8">
                {/* Main HQ Card */}
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
                        <Building2 size={120} className="text-cc-primary"/>
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 flex items-center gap-3 font-sans">
                        <MapPin size={16} className="text-cc-gold"/> Corporate Headquarters
                    </h3>
                    <address className="not-italic text-cc-primary mb-10">
                        <strong className="block text-3xl font-display mb-4">CC Food Stuff Trading</strong>
                        <span className="text-sm text-gray-600 block leading-relaxed font-sans">
                            Logistics Park, Vadakara<br/>
                            Kerala, India - 673101
                        </span>
                    </address>
                    <div className="space-y-4 pt-8 border-t border-gray-100">
                        <a href="mailto:trade@ccfoodstuff.com" className="flex items-center gap-4 text-sm font-bold text-cc-primary hover:text-cc-gold transition-colors font-sans group/link">
                            <div className="p-3 bg-cc-cream rounded-full group-hover/link:bg-cc-primary group-hover/link:text-white transition-colors"><Mail size={16}/></div> 
                            trade@ccfoodstuff.com
                        </a>
                        <a href="tel:+914962524567" className="flex items-center gap-4 text-sm font-bold text-cc-primary hover:text-cc-gold transition-colors font-sans group/link">
                             <div className="p-3 bg-cc-cream rounded-full group-hover/link:bg-cc-primary group-hover/link:text-white transition-colors"><Phone size={16}/></div>
                            +91 496 252 4567
                        </a>
                    </div>
                </div>

                {/* Regional Offices */}
                <div className="bg-cc-primary text-white p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Globe size={140}/></div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-cc-gold mb-10 flex items-center gap-3 relative z-10 font-sans">
                        <Globe size={16}/> Regional Desks
                    </h3>
                    <ul className="space-y-8 text-sm relative z-10 font-sans">
                        <li className="flex justify-between border-b border-white/10 pb-4">
                            <span className="font-bold text-lg">Dubai, UAE</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-wider mt-1">Sales Office</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-4">
                            <span className="font-bold text-lg">Ho Chi Minh</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-wider mt-1">Sourcing</span>
                        </li>
                        <li className="flex justify-between pt-1">
                            <span className="font-bold text-lg">Mombasa</span>
                            <span className="text-white/40 text-[10px] uppercase tracking-wider mt-1">Distribution</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Right: RFQ Form (Ticket Style) */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl overflow-hidden h-full flex flex-col">
                    <div className="bg-gray-50 border-b border-gray-200 px-12 py-8 flex justify-between items-center">
                        <h2 className="text-sm font-bold text-cc-primary uppercase tracking-[0.15em] flex items-center gap-3 font-sans">
                            <FileText size={18} className="text-cc-gold"/> Submit Trade Inquiry (RFQ)
                        </h2>
                        <span className="text-[10px] bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-400 font-bold tracking-wide font-sans shadow-sm">SECURE FORM</span>
                    </div>

                    <div className="p-12 md:p-16 flex-grow">
                       {formState === 'success' ? (
                          <div className="flex flex-col items-center justify-center text-center py-24 h-full animate-fade-in">
                             <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 border border-green-100 shadow-lg">
                                <Send size={36} />
                             </div>
                             <h3 className="font-display text-4xl text-cc-primary mb-4">Inquiry Registered</h3>
                             <p className="text-gray-500 mb-12 max-w-sm text-sm font-sans leading-relaxed">Ticket #RFQ-{Math.floor(Math.random() * 10000)} generated. Our trade desk will review your specifications and issue a formal PI within 24 hours.</p>
                             <button onClick={() => setFormState('idle')} className="text-xs font-bold uppercase tracking-widest text-cc-primary border-b-2 border-cc-primary pb-1 hover:text-cc-gold hover:border-cc-gold transition-colors font-sans">Submit New Request</button>
                          </div>
                       ) : (
                          <form onSubmit={handleSubmit} className="space-y-12">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3 group">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-cc-gold transition-colors font-sans">Full Name</label>
                                   <input required type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg font-medium focus:outline-none focus:border-cc-primary transition-all text-cc-primary placeholder:text-gray-300 font-display" placeholder="Enter name" />
                                </div>
                                <div className="space-y-3 group">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-cc-gold transition-colors font-sans">Official Email</label>
                                   <input required type="email" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg font-medium focus:outline-none focus:border-cc-primary transition-all text-cc-primary placeholder:text-gray-300 font-display" placeholder="name@company.com" />
                                </div>
                             </div>
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3 group">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-cc-gold transition-colors font-sans">Company Name</label>
                                   <input required type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg font-medium focus:outline-none focus:border-cc-primary transition-all text-cc-primary placeholder:text-gray-300 font-display" placeholder="Trading Co. Ltd" />
                                </div>
                                <div className="space-y-3 group">
                                   <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-cc-gold transition-colors font-sans">Destination Port</label>
                                   <input required type="text" className="w-full bg-transparent border-b border-gray-200 py-3 text-lg font-medium focus:outline-none focus:border-cc-primary transition-all text-cc-primary placeholder:text-gray-300 font-display" placeholder="e.g. Jebel Ali, Dubai" />
                                </div>
                             </div>
                             
                             <div className="space-y-3 group">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-cc-gold transition-colors font-sans">Requirement Specifications</label>
                                <textarea required rows={4} className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-5 text-sm font-medium focus:outline-none focus:bg-white focus:border-cc-gold transition-all text-cc-primary resize-none placeholder:text-gray-300 font-sans" placeholder="Please specify Commodity, Grade, Quantity (MT), and Packaging requirements..."></textarea>
                             </div>

                             <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                                 <p className="text-[10px] text-gray-400 italic font-sans flex items-center gap-2">
                                     <Shield size={12}/> All data is processed securely under CC Group privacy policy.
                                 </p>
                                 <button 
                                    type="submit" 
                                    disabled={formState === 'submitting'}
                                    className="w-full md:w-auto bg-cc-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:bg-cc-dark transition-all flex items-center justify-center gap-4 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 font-sans"
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