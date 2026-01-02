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

  const navItems = [
    { name: 'Foodstuff Catalog', value: 'products' },
    { name: 'Global Operations', value: 'services' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm' : 'bg-white border-transparent py-4'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 flex justify-between items-center">
            
          {/* Brand */}
          <div className="flex items-center gap-8">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => onNavigate('home')}
              >
                <div className="w-10 h-10 bg-cc-primary text-white flex items-center justify-center font-display font-extrabold text-xl rounded-sm shadow-lg group-hover:bg-cc-gold transition-colors">
                  CC
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold tracking-tight text-cc-primary leading-none group-hover:text-cc-gold transition-colors">CC FOOD STUFF</span>
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">CC Group of Companies</span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-3">
                {navItems.map((item) => {
                  const isActive = currentPage === item.value;
                  const isPrimary = item.value === 'products';

                  return (
                    <button
                      key={item.name}
                      onClick={() => onNavigate(item.value)}
                      className={`flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${
                        isActive
                          ? 'bg-cc-primary text-white shadow-md'
                          : isPrimary
                            ? 'text-cc-primary bg-white border border-gray-200 shadow-sm hover:border-cc-gold hover:text-cc-gold'
                            : 'text-gray-500 hover:text-cc-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative">
              <input 
                type="text" 
                placeholder="Search foodstuff, origins, or specs..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-sm py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-cc-primary focus:bg-white transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-cc-primary hover:bg-gray-50 rounded-sm transition-colors"
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
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-cc-primary text-white hover:bg-cc-dark hover:shadow-lg transition-all rounded-sm font-display text-xs font-bold uppercase tracking-widest"
             >
                Request Quote
             </button>

             <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-cc-primary hover:bg-gray-100 rounded-sm"
             >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-6">
            <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => { onNavigate(item.value); setIsOpen(false); }}
                        className="flex items-center text-left py-4 border-b border-gray-100 font-display text-xl font-bold text-cc-primary"
                    >
                        {item.name}
                    </button>
                ))}
                 <button
                    onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                    className="mt-6 w-full py-5 bg-cc-primary text-white font-bold uppercase tracking-widest text-sm rounded-sm shadow-xl"
                >
                    Request Quote
                </button>
            </div>
        </div>
      )}
    </>
  );
};