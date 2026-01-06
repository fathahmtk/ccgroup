import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Globe, ChevronDown, ArrowRightLeft } from 'lucide-react';
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar is transparent at top, then becomes a floating glass pill
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
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${
            scrolled 
                ? 'top-6 inset-x-0 pointer-events-none' 
                : 'top-0 inset-x-0 py-8 bg-transparent'
        }`}
      >
        <div 
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between pointer-events-auto ${
                scrolled 
                    ? 'w-[95%] lg:w-[90%] max-w-6xl bg-cc-dark/90 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] py-4 px-8 rounded-full border border-white/10' 
                    : 'w-full max-w-[1800px] px-6 md:px-12 bg-transparent'
            }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
             <Logo variant={scrolled ? 'white' : (isTransparent ? 'white' : 'default')} className={scrolled ? "scale-90 origin-left transition-transform" : "scale-100 origin-left"} />
             {/* Mode Badge */}
             <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ml-2 hidden md:block transition-colors ${
                 scrolled || isTransparent 
                    ? 'border-white/20 text-white/60' 
                    : 'border-cc-primary/20 text-cc-primary/60'
             }`}>
                {tradeMode} Mode
             </span>
          </div>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex items-center ${scrolled ? 'gap-1' : 'gap-6'}`}>
             {MENU_ITEMS.map((item) => (
                <button 
                   key={item}
                   onClick={() => handleNavClick(item)}
                   className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group px-4 py-2.5 rounded-full font-sans ${
                       scrolled 
                        ? 'text-white/60 hover:text-white hover:bg-white/10' 
                        : (isTransparent ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-cc-primary/70 hover:text-cc-primary hover:bg-cc-primary/5')
                   } ${currentPage === item ? (scrolled ? 'text-white bg-white/10' : 'text-white font-extrabold bg-white/10 backdrop-blur-md') : ''}`}
                >
                   {getMenuLabel(item)}
                </button>
             ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             {/* Trade Mode Toggle */}
             <div className={`hidden md:flex items-center rounded-full p-1 border transition-colors ${
                 scrolled || isTransparent ? 'bg-white/5 border-white/10' : 'bg-cc-primary/5 border-cc-primary/10'
             }`}>
                 <button 
                    onClick={() => onToggleTradeMode('export')}
                    className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all ${
                        tradeMode === 'export' 
                            ? (scrolled || isTransparent ? 'bg-white text-cc-primary shadow-sm' : 'bg-cc-primary text-white shadow-sm') 
                            : (scrolled || isTransparent ? 'text-white/50 hover:text-white' : 'text-cc-primary/50 hover:text-cc-primary')
                    }`}
                 >
                    Export
                 </button>
                 <button 
                    onClick={() => onToggleTradeMode('import')}
                    className={`px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all ${
                        tradeMode === 'import' 
                            ? (scrolled || isTransparent ? 'bg-white text-cc-primary shadow-sm' : 'bg-cc-primary text-white shadow-sm') 
                            : (scrolled || isTransparent ? 'text-white/50 hover:text-white' : 'text-cc-primary/50 hover:text-cc-primary')
                    }`}
                 >
                    Import
                 </button>
             </div>

             <button className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-colors font-sans ${
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
                        ? 'text-white hover:bg-cc-gold hover:text-cc-primary' 
                        : (isTransparent ? 'text-white hover:bg-white/10' : 'text-cc-primary hover:bg-cc-primary/5')
                }`}
             >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                     <span className="absolute -top-0.5 -right-0.5 bg-cc-gold text-cc-primary text-[10px] font-bold font-mono w-5 h-5 flex items-center justify-center rounded-full animate-fade-in shadow-sm ring-2 ring-cc-dark">
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
      <div className={`fixed inset-0 z-40 bg-cc-dark/95 backdrop-blur-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-6">
              {/* Mobile Toggle */}
              <div className="flex items-center bg-white/5 p-1 rounded-full mb-8">
                  <button 
                    onClick={() => onToggleTradeMode('export')}
                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        tradeMode === 'export' ? 'bg-cc-gold text-cc-primary' : 'text-white/50'
                    }`}
                  >
                    Export
                  </button>
                  <button 
                    onClick={() => onToggleTradeMode('import')}
                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                        tradeMode === 'import' ? 'bg-cc-gold text-cc-primary' : 'text-white/50'
                    }`}
                  >
                    Import
                  </button>
              </div>

              {MENU_ITEMS.map((item) => (
                <button 
                   key={item}
                   onClick={() => handleNavClick(item)}
                   className="text-4xl font-display text-white hover:text-cc-gold transition-colors capitalize opacity-0 animate-fade-up"
                   style={{ animationDelay: `${MENU_ITEMS.indexOf(item) * 100}ms`, animationFillMode: 'forwards' }}
                >
                   {getMenuLabel(item)}
                </button>
             ))}
           </div>
      </div>
    </>
  );
};