import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';

export type TradeMode = 'export' | 'import';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  tradeMode: TradeMode;
  onToggleTradeMode: (mode: TradeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, tradeMode, onToggleTradeMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar starts transparent, becomes a floating luxury dock
  const isTransparent = !scrolled;

  const MENU_ITEMS = ['home', 'corporate', 'trade', 'products', 'services', 'contact'];

  const getMenuLabel = (item: string) => {
    const isExport = tradeMode === 'export';
    switch(item) {
        case 'trade': return isExport ? 'Export / Import' : 'Sourcing';
        case 'corporate': return 'The Group';
        case 'products': return isExport ? 'Catalog' : 'Requirements';
        case 'services': return isExport ? 'Logistics' : 'Clearance';
        default: return item;
    }
  };

  const handleNavClick = (item: string) => {
    if (currentPage === item) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
       onNavigate(item);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex justify-center ${
            scrolled 
                ? 'top-4 inset-x-0 pointer-events-none' 
                : 'top-0 inset-x-0 py-6 bg-transparent'
        }`}
      >
        <div 
            className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center justify-between pointer-events-auto ${
                scrolled 
                    ? 'w-[95%] lg:w-[85%] max-w-7xl bg-cc-dark/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-3 px-6 rounded-2xl border border-white/10' 
                    : 'w-full max-w-[1920px] px-6 md:px-12 bg-transparent'
            }`}
        >
          {/* Logo & Mode Switcher */}
          <div className="flex items-center gap-6">
            <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => handleNavClick('home')}
            >
                <Logo variant={scrolled ? 'white' : (isTransparent ? 'white' : 'default')} className={scrolled ? "scale-90 origin-left transition-transform" : "scale-100 origin-left"} />
            </div>

            {/* Desktop Mode Toggle */}
            <div className={`hidden md:flex items-center rounded-lg p-1 border transition-all duration-500 ${
                 scrolled || isTransparent ? 'bg-white/5 border-white/10' : 'bg-cc-primary/5 border-cc-primary/10'
             }`}>
                 <button 
                    onClick={() => onToggleTradeMode('export')}
                    className={`px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        tradeMode === 'export' 
                            ? (scrolled || isTransparent ? 'bg-white text-cc-primary shadow-sm' : 'bg-cc-primary text-white shadow-sm') 
                            : (scrolled || isTransparent ? 'text-white/40 hover:text-white' : 'text-cc-primary/40 hover:text-cc-primary')
                    }`}
                 >
                    Export
                 </button>
                 <button 
                    onClick={() => onToggleTradeMode('import')}
                    className={`px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
                        tradeMode === 'import' 
                            ? (scrolled || isTransparent ? 'bg-white text-cc-primary shadow-sm' : 'bg-cc-primary text-white shadow-sm') 
                            : (scrolled || isTransparent ? 'text-white/40 hover:text-white' : 'text-cc-primary/40 hover:text-cc-primary')
                    }`}
                 >
                    Import
                 </button>
             </div>
          </div>

          {/* Desktop Nav Links */}
          <div className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 ${scrolled ? 'gap-1' : 'gap-2'}`}>
             {MENU_ITEMS.map((item) => {
                const isActive = currentPage === item;
                return (
                    <button 
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-5 py-2 rounded-full transition-all duration-500 group overflow-hidden ${
                        isActive 
                            ? (scrolled || isTransparent ? 'text-white' : 'text-cc-primary') 
                            : (scrolled || isTransparent ? 'text-white/60 hover:text-white' : 'text-cc-primary/60 hover:text-cc-primary')
                    }`}
                    >
                    <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
                        {getMenuLabel(item)}
                    </span>
                    {isActive && (
                        <span className={`absolute inset-0 rounded-full opacity-20 transition-all duration-500 ${scrolled || isTransparent ? 'bg-white' : 'bg-cc-primary'}`}></span>
                    )}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${isActive ? 'opacity-100 mb-1.5' : 'opacity-0 mb-0'} ${scrolled || isTransparent ? 'bg-cc-gold' : 'bg-cc-primary'}`}></span>
                    </button>
                );
             })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
             <button className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-colors font-sans ${
                 scrolled 
                    ? 'border-white/10 text-white hover:bg-white/10' 
                    : (isTransparent ? 'border-white/20 text-white hover:bg-white/10' : 'border-cc-primary/20 text-cc-primary hover:bg-cc-primary/5')
             }`}>
                <Globe size={14} /> <span>EN</span>
             </button>

             <button 
                onClick={() => setIsCartOpen(true)}
                className={`relative p-3 rounded-full transition-all duration-300 flex items-center gap-2 group ${
                    scrolled 
                        ? 'text-white hover:bg-white/10' 
                        : (isTransparent ? 'text-white hover:bg-white/10' : 'text-cc-primary hover:bg-cc-primary/5')
                }`}
             >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                     <span className="absolute top-0 right-0 bg-cc-gold text-cc-primary text-[9px] font-bold font-mono w-4 h-4 flex items-center justify-center rounded-full animate-fade-in shadow-sm ring-2 ring-cc-dark">
                       {cartCount}
                     </span>
                )}
             </button>

             <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 transition-colors ${scrolled || isTransparent ? 'text-white' : 'text-cc-primary'}`}
             >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-cc-dark/98 backdrop-blur-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-6 text-center p-6 relative">
              
              <div className="absolute top-6 right-6">
                 <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white p-2">
                    <X size={32} />
                 </button>
              </div>

              {MENU_ITEMS.map((item, idx) => (
                <button 
                   key={item}
                   onClick={() => handleNavClick(item)}
                   className="text-5xl font-display text-white hover:text-cc-gold transition-colors capitalize opacity-0 animate-fade-up"
                   style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                   {getMenuLabel(item)}
                </button>
             ))}

             <div className="flex items-center gap-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                 <button 
                    onClick={() => onToggleTradeMode('export')}
                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                        tradeMode === 'export' ? 'bg-cc-gold border-cc-gold text-cc-primary' : 'border-white/20 text-white'
                    }`}
                  >
                    Export Mode
                  </button>
                  <button 
                    onClick={() => onToggleTradeMode('import')}
                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                        tradeMode === 'import' ? 'bg-cc-gold border-cc-gold text-cc-primary' : 'border-white/20 text-white'
                    }`}
                  >
                    Import Mode
                  </button>
             </div>
           </div>
      </div>
    </>
  );
};