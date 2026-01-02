import React, { useState, useEffect } from 'react';
import { Menu, X, User, FlaskConical, Search, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Marketplace', value: 'products' },
    { name: 'Logistics', value: 'services' },
    { name: 'R&D Lab', value: 'rd-lab', icon: <FlaskConical size={14} className="mr-1 text-cc-gold" /> },
  ];

  return (
    <>
      <nav className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm' : 'bg-white border-transparent py-4'}`}>
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
                  <span className="font-display text-lg font-bold tracking-tight text-cc-primary leading-none group-hover:text-cc-gold transition-colors">CC GROUP</span>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">Trading Platform</span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => onNavigate(item.value)}
                    className={`flex items-center px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 ${
                      currentPage === item.value 
                        ? 'text-cc-primary bg-gray-100' 
                        : 'text-gray-500 hover:text-cc-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.icon && item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative">
              <input 
                type="text" 
                placeholder="Search products, suppliers, or origins..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-sm py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-cc-primary focus:bg-white transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
             <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-cc-primary px-3 py-2">
                 <User size={16} /> Sign In
             </button>
             <button
                onClick={() => onNavigate('contact')}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-cc-primary text-white hover:bg-cc-dark hover:shadow-lg transition-all rounded-sm font-display text-xs font-bold uppercase tracking-widest"
             >
                <ShoppingCart size={16} /> Post Buying Request
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
                        {item.icon && <span className="mr-3">{item.icon}</span>}
                        {item.name}
                    </button>
                ))}
                 <button
                    onClick={() => { onNavigate('contact'); setIsOpen(false); }}
                    className="mt-6 w-full py-5 bg-cc-primary text-white font-bold uppercase tracking-widest text-sm rounded-sm shadow-xl"
                >
                    Post Buying Request
                </button>
            </div>
        </div>
      )}
    </>
  );
};