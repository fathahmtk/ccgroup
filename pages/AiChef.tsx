import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ChefHat, Bot, User, Loader2 } from 'lucide-react';
import { generateCulinaryInsight } from '../services/geminiService';

export const AiChef: React.FC = () => {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;
    
    const currentQuery = query;
    setQuery('');
    setLoading(true);
    
    // Add user message immediately
    setHistory(prev => [...prev, { role: 'user', content: currentQuery }]);

    try {
      const text = await generateCulinaryInsight(currentQuery);
      setHistory(prev => [...prev, { role: 'ai', content: text }]);
    } catch (err) {
      setHistory(prev => [...prev, { role: 'ai', content: "Our intelligence systems are momentarily offline. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, loading]);

  const SUGGESTIONS = [
    "Difference between 1121 Steam and Sella Rice?",
    "Best spices for authentic Massaman Curry?",
    "Storage requirements for ICUMSA 45 Sugar?",
    "How to check quality of Green Cardamom?"
  ];

  return (
    <div className="min-h-screen bg-cc-cream pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto h-[80vh] flex flex-col bg-white/80 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden relative">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

         {/* Header */}
         <div className="bg-cc-primary p-6 text-white flex items-center gap-4 z-10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
               <Sparkles className="text-cc-gold" size={24} />
            </div>
            <div>
               <h1 className="font-display text-2xl">CC Intelligence</h1>
               <p className="text-[10px] uppercase tracking-widest text-white/60">Powered by Gemini AI</p>
            </div>
         </div>

         {/* Chat Area */}
         <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6" ref={scrollRef}>
            {history.length === 0 && (
               <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                  <ChefHat size={48} className="text-cc-primary mb-4" />
                  <h2 className="font-display text-2xl text-cc-primary mb-2">How can I assist your trade?</h2>
                  <p className="text-sm max-w-sm mb-8">Ask about commodity specifications, culinary applications, or global logistics.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg">
                     {SUGGESTIONS.map((s, i) => (
                        <button 
                           key={i} 
                           onClick={() => setQuery(s)}
                           className="text-xs text-left p-3 border border-gray-200 rounded-xl hover:bg-white/50 hover:border-cc-gold transition-colors bg-white/30 backdrop-blur-sm"
                        >
                           {s}
                        </button>
                     ))}
                  </div>
               </div>
            )}

            {history.map((msg, idx) => (
               <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in`}>
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-gray-100' : 'bg-cc-primary text-white'}`}>
                     {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                  </div>
                  <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-white/90 backdrop-blur-sm text-gray-800 rounded-tr-none border border-white/50' : 'bg-cc-cream text-cc-primary border border-cc-primary/10 rounded-tl-none'}`}>
                     {msg.content.split('\n').map((line, i) => <p key={i} className="mb-2 last:mb-0">{line}</p>)}
                  </div>
               </div>
            ))}

            {loading && (
               <div className="flex gap-4 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-cc-primary text-white flex-shrink-0 flex items-center justify-center">
                     <Bot size={20} />
                  </div>
                  <div className="p-4 rounded-2xl bg-cc-cream border border-cc-primary/10 rounded-tl-none flex items-center gap-2">
                     <Loader2 size={16} className="animate-spin text-cc-primary" />
                     <span className="text-xs font-bold uppercase tracking-widest text-cc-primary">Analyzing...</span>
                  </div>
               </div>
            )}
         </div>

         {/* Input Area */}
         <div className="p-4 md:p-6 bg-white/50 backdrop-blur-xl border-t border-white/20 z-10">
            <form onSubmit={handleSearch} className="relative">
               <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about specs, recipes, or logistics..." 
                  className="w-full bg-white/80 border border-gray-200 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:border-cc-gold focus:ring-1 focus:ring-cc-gold transition-all backdrop-blur-sm"
               />
               <button 
                  type="submit" 
                  disabled={loading || !query.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-cc-primary text-white rounded-full flex items-center justify-center hover:bg-cc-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};