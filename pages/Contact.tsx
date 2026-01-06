import React, { useState } from 'react';
import { Send, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      
      {/* Header - Cinematic */}
      <div className="relative bg-cc-primary text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-[1920px] mx-auto px-6 md:px-16 relative z-10">
            <span className="text-cc-gold font-bold uppercase tracking-widest text-xs mb-6 block">Trade Desk</span>
            <h1 className="font-serif text-6xl md:text-8xl leading-none">
                Initiate <span className="italic text-white/50">Dialogue.</span>
            </h1>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-16 -mt-16 pb-24 relative z-10">
        <div className="bg-white shadow-2xl p-8 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 border border-gray-100">
            
            {/* Contact Info */}
            <div className="space-y-16">
               <div className="space-y-8">
                  <p className="text-gray-600 text-lg font-light leading-relaxed max-w-md">
                      We invite inquiries from industrial buyers and established suppliers. Please provide detailed requirements to expedite our response.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-8 pt-8">
                     <div className="flex items-start gap-6 group cursor-pointer">
                        <div className="p-4 bg-gray-50 group-hover:bg-cc-primary group-hover:text-white transition-colors rounded-sm">
                            <Mail size={24} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email Inquiries</span>
                            <a href="mailto:trade@ccfoodstuff.com" className="font-serif text-2xl text-cc-primary hover:text-cc-gold transition-colors">trade@ccfoodstuff.com</a>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-gray-50 group-hover:bg-cc-primary group-hover:text-white transition-colors rounded-sm">
                            <Phone size={24} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Direct Line</span>
                            <span className="font-serif text-2xl text-cc-primary">+91 496 252 4567</span>
                        </div>
                     </div>

                     <div className="flex items-start gap-6 group">
                        <div className="p-4 bg-gray-50 group-hover:bg-cc-primary group-hover:text-white transition-colors rounded-sm">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Global HQ</span>
                            <address className="not-italic font-serif text-xl text-cc-primary leading-relaxed">
                                CC Food Stuff Trading<br/>
                                Vadakara, Kerala, India
                            </address>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div>
               {formState === 'success' ? (
                  <div className="h-full flex flex-col justify-center items-center text-center py-20 bg-gray-50 border border-gray-100">
                     <div className="w-16 h-16 bg-green-100 text-green-800 rounded-full flex items-center justify-center mb-6">
                        <Send size={24} />
                     </div>
                     <h3 className="font-serif text-3xl text-cc-primary mb-4">Inquiry Received.</h3>
                     <p className="text-gray-500 mb-8 max-w-xs text-sm">Our trade desk will review your submission and respond within 24 hours.</p>
                     <button onClick={() => setFormState('idle')} className="text-xs font-bold uppercase tracking-widest text-cc-primary border-b border-cc-primary pb-1 hover:text-cc-gold hover:border-cc-gold transition-colors">Send Another</button>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                           <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-cc-gold transition-colors">First Name</label>
                           <input required type="text" className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:outline-none focus:border-cc-gold bg-transparent transition-colors text-cc-primary placeholder:text-gray-200" placeholder="John" />
                        </div>
                        <div className="group">
                           <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-cc-gold transition-colors">Last Name</label>
                           <input required type="text" className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:outline-none focus:border-cc-gold bg-transparent transition-colors text-cc-primary placeholder:text-gray-200" placeholder="Doe" />
                        </div>
                     </div>
                     
                     <div className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-cc-gold transition-colors">Company / Organization</label>
                        <input required type="text" className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:outline-none focus:border-cc-gold bg-transparent transition-colors text-cc-primary placeholder:text-gray-200" placeholder="Trading Co. Ltd" />
                     </div>
                     
                     <div className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-cc-gold transition-colors">Email Address</label>
                        <input required type="email" className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:outline-none focus:border-cc-gold bg-transparent transition-colors text-cc-primary placeholder:text-gray-200" placeholder="john@company.com" />
                     </div>
                     
                     <div className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-cc-gold transition-colors">Requirement Details</label>
                        <textarea required rows={4} className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:outline-none focus:border-cc-gold bg-transparent transition-colors text-cc-primary placeholder:text-gray-200 resize-none" placeholder="Please specify commodity, volume (MT), and destination port..."></textarea>
                     </div>

                     <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="w-full bg-cc-primary text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-cc-dark transition-all flex items-center justify-center gap-4 mt-8 group"
                     >
                        {formState === 'submitting' ? 'Processing...' : <>Submit Official Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/></>}
                     </button>
                  </form>
               )}
            </div>
        </div>
      </div>
    </div>
  );
};