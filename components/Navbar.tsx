import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { name: 'Foodstuff Catalog', value: 'products' },
    { name: 'Global Operations', value: 'services' },
  ];

  // Determine navbar style based on page and scroll state
  const isHome = currentPage === 'home';
  const isTransparent = isHome && !scrolled && !isOpen;

  const navClasses = isTransparent 
    ? 'bg-transparent border-transparent py-6' 
    : 'bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm';

  const textClasses = isTransparent ? 'text-white' : 'text-cc-primary';
  const subTextClasses = isTransparent ? 'text-gray-300' : 'text-gray-400';
  const logoBgClasses = isTransparent ? 'bg-white text-cc-primary' : 'bg-cc-primary text-white';
  const navItemClasses = (active: boolean) => {
      if (active) return 'bg-cc-primary text-white shadow-md';
      return isTransparent 
        ? 'text-white/80 hover:text-white hover:bg-white/10' 
        : 'text-gray-600 hover:text-cc-primary hover:bg-gray-50';
  };
  const iconClasses = isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-50 hover:text-cc-primary';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${navClasses}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 flex justify-between items-center">
            
          {/* Brand */}
          <div className="flex items-center gap-8">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => { onNavigate('home'); setIsOpen(false); }}
              >
                <div className={`w-10 h-10 flex items-center justify-center font-display font-extrabold text-xl rounded-sm shadow-lg transition-colors ${logoBgClasses}`}>
                  CC
                </div>
                <div className="flex flex-col">
                  <span className={`font-display text-lg font-bold tracking-tight leading-none transition-colors ${textClasses}`}>CC FOOD STUFF</span>
                  <span className={`font-mono text-[9px] uppercase tracking-widest mt-1 ${subTextClasses}`}>CC Group of Companies</span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-3">
                {navItems.map((item) => {
                  const isActive = currentPage === item.value;
                  return (
                    <button
                      key={item.name}
                      onClick={() => onNavigate(item.value)}
                      className={`flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${navItemClasses(isActive)}`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
          </div>

          {/* Search Bar (Desktop) - Only show solid background when scrolled or not transparent */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative">
              <input 
                type="text" 
                placeholder="Search foodstuff, origins, or specs..." 
                className={`w-full border rounded-sm py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-cc-primary transition-all ${
                    isTransparent 
                        ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-gray-900' 
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:bg-white'
                }`}
              />
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isTransparent ? 'text-white/60' : 'text-gray-400'}`} size={16} />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 rounded-sm transition-colors ${iconClasses}`}
             >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-cc-gold text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-fade-in shadow-sm">
                    {cartCount}
                  </span>
                )}
             </button>

             <button
                onClick={() => onNavigate('contact')}
                className={`hidden md:flex items-center gap-2 px-5 py-2.5 transition-all rounded-sm font-display text-xs font-bold uppercase tracking-widest ${
                    isTransparent 
                        ? 'bg-white text-cc-primary hover:bg-gray-100' 
                        : 'bg-cc-primary text-white hover:bg-cc-dark hover:shadow-lg'
                }`}
             >
                Request Quote
             </button>

             <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-sm relative z-50 ${iconClasses}`}
             >
                {isOpen ? <X size={24} className="text-cc-primary" /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Content */}
      {isOpen && (
        <>
          {/* Backdrop - dims the content behind */}
          <div 
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Drawer */}
          <div className="fixed inset-x-0 top-0 z-40 bg-white shadow-2xl transition-transform duration-300 ease-out transform pt-28 pb-8 px-6 rounded-b-2xl">
              <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                      <button
                          key={item.name}
                          onClick={() => { onNavigate(item.value); setIsOpen(false); }}
                          className="flex items-center text-left py-4 border-b border-gray-100 font-display text-xl font-bold text-cc-primary hover:text-cc-gold transition-colors"
                      >
                          {item.name}
                      </button>
                  ))}
                   <button
                      onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                      className="mt-6 w-full py-5 bg-cc-primary text-white font-bold uppercase tracking-widest text-sm rounded-sm shadow-xl hover:bg-cc-dark transition-colors"
                  >
                      Request Quote
                  </button>
              </div>
          </div>
        </>
      )}
    </>
  );
};