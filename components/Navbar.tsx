import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
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

  return (
    <>
      <nav 
        className={`fixed z-50 transition-all duration-500 ease-out flex justify-center ${
            scrolled 
                ? 'top-6 inset-x-0 pointer-events-none' // float the container
                : 'top-0 inset-x-0 py-8 bg-transparent'
        }`}
      >
        <div 
            className={`transition-all duration-500 ease-out flex items-center justify-between pointer-events-auto ${
                scrolled 
                    ? 'w-[90%] md:w-auto md:min-w-[800px] bg-cc-primary/95 backdrop-blur-md shadow-2xl py-3 px-6 md:px-8 rounded-full border border-white/10' 
                    : 'w-full max-w-[1800px] px-6 md:px-12 bg-transparent'
            }`}
        >
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => { onNavigate('home'); setIsOpen(false); }}
          >
             {/* Force white variant when scrolled for better contrast on dark pill, or transparent default */}
             <Logo variant={scrolled ? 'white' : (isTransparent ? 'white' : 'default')} className={scrolled ? "scale-90 origin-left transition-transform" : ""} />
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-1 ${scrolled ? 'mx-8' : 'gap-8'}`}>
             {['home', 'products', 'services', 'contact'].map((item) => (
                <button 
                   key={item}
                   onClick={() => onNavigate(item)}
                   className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group px-4 py-2 rounded-full ${
                       scrolled 
                        ? 'text-white/70 hover:text-white hover:bg-white/10' 
                        : (isTransparent ? 'text-white hover:text-cc-gold' : 'text-cc-primary hover:text-cc-gold')
                   } ${currentPage === item && scrolled ? 'bg-white/10 text-white' : ''}`}
                >
                   {item}
                   {!scrolled && (
                       <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cc-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${currentPage === item ? 'opacity-100' : ''}`}></span>
                   )}
                </button>
             ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2.5 rounded-full transition-colors flex items-center gap-2 group ${
                    scrolled 
                        ? 'text-white hover:bg-white/20' 
                        : (isTransparent ? 'text-white hover:bg-white/10' : 'text-cc-primary hover:bg-gray-100')
                }`}
             >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                     <span className="absolute -top-1 -right-1 bg-cc-gold text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-fade-in shadow-sm border border-cc-primary">
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
      <div className={`fixed inset-0 z-40 bg-cc-dark/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-6">
              {['home', 'products', 'services', 'contact'].map((item) => (
                <button 
                   key={item}
                   onClick={() => { onNavigate(item); setIsOpen(false); }}
                   className="text-5xl font-display text-white hover:text-cc-gold transition-colors capitalize opacity-0 animate-fade-up"
                   style={{ animationDelay: `${['home', 'products', 'services', 'contact'].indexOf(item) * 100}ms`, animationFillMode: 'forwards' }}
                >
                   {item}
                </button>
             ))}
           </div>
      </div>
    </>
  );
};