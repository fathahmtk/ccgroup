import React, { useState } from 'react';
import { ChefHat, Loader2, Sparkles, Box, TrendingUp, ClipboardList, Lightbulb, Terminal, Share2, Printer, Cpu } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';
import { GeneratedRecipe } from '../types';

export const AiChef: React.FC = () => {
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState<GeneratedRecipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError('');
    setRecipe(null);

    try {
      const result = await generateRecipe(input);
      if (result) {
        setRecipe(result);
      } else {
        setError("System Offline: Unable to connect to R&D Neural Network.");
      }
    } catch (err) {
      setError("Formulation Error: Criteria could not be processed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Lab Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-6">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-cc-primary text-white flex items-center justify-center rounded-sm">
                        <Cpu size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">CC Group Innovation Division</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-cc-primary">Culinary R&D Terminal</h1>
            </div>
            <div className="text-right mt-6 md:mt-0">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">System Status</div>
                <div className="flex items-center justify-end gap-2 text-green-600 font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Online
                </div>
            </div>
        </div>

        {/* Input Console */}
        <div className="bg-white rounded-sm shadow-xl overflow-hidden mb-12">
          <div className="bg-cc-primary px-6 py-4 flex justify-between items-center">
             <div className="flex items-center space-x-2 text-white font-mono font-bold text-xs uppercase tracking-widest">
               <Terminal size={16} className="text-cc-gold" />
               <span>Input_Parameters</span>
             </div>
          </div>
          
          <div className="p-8">
             <p className="text-gray-500 mb-6 font-light">
                 Enter formulation constraints (e.g., Ingredient constraints, Cost targets, Volume requirements). The AI will generate a commercial-grade specification sheet.
             </p>
             <div className="flex flex-col lg:flex-row gap-8">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="// Example: Create a vegan entree using Red Lentils and Jasmine Rice for a staff canteen. Must be under $0.50 food cost per portion."
                    className="flex-1 p-6 bg-gray-50 border border-gray-200 font-mono text-sm text-cc-primary focus:bg-white focus:outline-none focus:border-cc-gold transition-all resize-none h-48 rounded-sm leading-relaxed"
                />
                <div className="lg:w-72 flex flex-col gap-4">
                    <div className="flex-1 bg-gray-50 border border-gray-200 p-6 rounded-sm">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Optimization Mode</div>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" checked readOnly className="accent-cc-gold" /> Commercial Viability
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" checked readOnly className="accent-cc-gold" /> Bulk Commodity Usage
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" checked readOnly className="accent-cc-gold" /> Scalability Check
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={handleGenerate}
                        disabled={loading || !input.trim()}
                        className="h-16 bg-cc-gold text-white font-bold hover:bg-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg uppercase tracking-widest text-xs rounded-sm"
                    >
                        {loading ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Processing...</span>
                        </>
                        ) : (
                        <>
                            <Sparkles size={16} />
                            <span>Execute Generation</span>
                        </>
                        )}
                    </button>
                </div>
             </div>
             {error && (
                 <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 font-mono text-xs">
                     ERROR: {error}
                 </div>
             )}
          </div>
        </div>

        {/* Output Specification Sheet */}
        {recipe && (
          <div className="bg-white shadow-2xl overflow-hidden animate-fade-up border border-gray-200 print:shadow-none">
            {/* Spec Sheet Header */}
            <div className="bg-gray-900 text-white p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10">
                   <ChefHat size={120} />
               </div>
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                 <div>
                    <div className="inline-block px-3 py-1 bg-cc-gold text-white text-[10px] font-bold uppercase tracking-widest mb-4 rounded-sm">
                        Approved Concept
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">{recipe.title}</h2>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-wide">Target: {recipe.targetSegment}</p>
                 </div>
                 <div className="flex gap-4">
                     <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white" title="Print Spec Sheet">
                         <Printer size={20} />
                     </button>
                     <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white" title="Share">
                         <Share2 size={20} />
                     </button>
                 </div>
               </div>
               
               <div className="mt-8 pt-8 border-t border-white/10">
                   <p className="text-xl text-gray-300 font-light leading-relaxed italic">
                    "{recipe.conceptDescription}"
                   </p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Sidebar: Metrics */}
              <div className="lg:col-span-4 bg-gray-50 p-10 border-r border-gray-200">
                 <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4 text-cc-primary font-bold uppercase tracking-widest text-xs">
                        <Box size={16} className="text-cc-gold" /> Bill of Materials
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-sm mb-6 shadow-sm">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Batch Yield</span>
                        <span className="text-2xl font-mono text-cc-primary font-bold">{recipe.servingYield}</span>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-sm mb-6 shadow-sm">
                        <span className="block text-[10px] text-gray-400 uppercase font-bold mb-1">Est. Food Cost</span>
                        <span className={`text-xl font-bold uppercase ${recipe.estimatedCost.toLowerCase().includes('low') ? 'text-green-600' : 'text-yellow-600'}`}>
                            {recipe.estimatedCost}
                        </span>
                    </div>
                 </div>

                 <div>
                    <div className="flex items-center gap-2 mb-4 text-cc-primary font-bold uppercase tracking-widest text-xs">
                        <ClipboardList size={16} className="text-cc-gold" /> Ingredients
                    </div>
                    <ul className="space-y-3 font-mono text-xs text-gray-600">
                        {recipe.ingredients.map((ing, idx) => (
                            <li key={idx} className="flex items-start gap-3 pb-2 border-b border-gray-200 last:border-0">
                                <span className="text-cc-gold font-bold">0{idx+1}</span>
                                <span>{ing}</span>
                            </li>
                        ))}
                    </ul>
                 </div>
              </div>

              {/* Main Content: SOP */}
              <div className="lg:col-span-8 p-10">
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-6 text-cc-primary font-bold uppercase tracking-widest text-xs">
                        <Terminal size={16} className="text-cc-gold" /> Standard Operating Procedure
                    </div>
                    <div className="space-y-6">
                        {recipe.instructions.map((step, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-gray-200 text-gray-400 group-hover:border-cc-primary group-hover:text-cc-primary transition-colors flex items-center justify-center font-bold text-sm font-mono">
                                    {idx + 1}
                                </div>
                                <p className="text-gray-700 leading-relaxed pt-1 font-light text-lg">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-sm">
                   <div className="flex items-center gap-2 mb-4 text-yellow-800 font-bold uppercase tracking-widest text-xs">
                      <Lightbulb size={16} /> Operational Efficiency
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recipe.operationalTips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                           <TrendingUp size={14} className="mt-1 text-yellow-600 flex-shrink-0" />
                           {tip}
                        </div>
                      ))}
                   </div>
                </div>
              </div>

            </div>
            
            <div className="bg-gray-50 border-t border-gray-200 p-4 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-mono">
              <span>CONFIDENTIAL // CC GROUP INTERNAL USE ONLY</span>
              <span>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};