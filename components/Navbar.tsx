import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make navbar transparent on all main pages when at the top
  const isTransparent = !scrolled;

  const MENU_ITEMS = ['home', 'products', 'services', 'contact'];

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
                    ? 'w-[90%] max-w-4xl bg-cc-primary/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] py-3 px-8 rounded-full border border-white/10' 
                    : 'w-full max-w-[1800px] px-6 md:px-12 bg-transparent'
            }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => { onNavigate('home'); setIsOpen(false); }}
          >
             <Logo variant={scrolled ? 'white' : (isTransparent ? 'white' : 'default')} className={scrolled ? "scale-75 origin-left transition-transform" : "scale-90 origin-left md:scale-100"} />
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center ${scrolled ? 'gap-2' : 'gap-4'}`}>
             {MENU_ITEMS.map((item) => (
                <button 
                   key={item}
                   onClick={() => onNavigate(item)}
                   className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group px-4 py-2 rounded-full font-sans ${
                       scrolled 
                        ? 'text-white/70 hover:text-white hover:bg-white/10' 
                        : (isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-cc-primary/70 hover:text-cc-primary hover:bg-cc-primary/5')
                   } ${currentPage === item ? (scrolled ? 'text-white bg-white/10' : 'text-white font-extrabold') : ''}`}
                >
                   {item}
                   {currentPage === item && !scrolled && (
                       <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cc-gold"></span>
                   )}
                </button>
             ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-colors ${
                 scrolled 
                    ? 'border-white/20 text-white hover:bg-white/10' 
                    : (isTransparent ? 'border-white/30 text-white hover:bg-white/10' : 'border-cc-primary/20 text-cc-primary hover:bg-cc-primary/5')
             }`}>
                <Globe size={14} /> <span>EN</span>
             </button>

             <button 
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2.5 rounded-full transition-all duration-300 flex items-center gap-2 group ${
                    scrolled 
                        ? 'text-white hover:bg-cc-gold hover:text-cc-primary' 
                        : (isTransparent ? 'text-white hover:bg-white/10' : 'text-cc-primary hover:bg-cc-primary/5')
                }`}
             >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                     <span className="absolute -top-1 -right-1 bg-cc-gold text-cc-primary text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-fade-in shadow-sm">
                       {cartCount}
                     </span>
                )}
             </button>

             <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 transition-colors ${scrolled || isTransparent ? 'text-white' : 'text-cc-primary'}`}
             >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-cc-primary/95 backdrop-blur-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-6">
              {MENU_ITEMS.map((item) => (
                <button 
                   key={item}
                   onClick={() => { onNavigate(item); setIsOpen(false); }}
                   className="text-5xl font-display text-white hover:text-cc-gold transition-colors capitalize opacity-0 animate-fade-up"
                   style={{ animationDelay: `${MENU_ITEMS.indexOf(item) * 100}ms`, animationFillMode: 'forwards' }}
                >
                   {item}
                </button>
             ))}
           </div>
      </div>
    </>
  );
};