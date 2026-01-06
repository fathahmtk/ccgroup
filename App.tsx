import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { MarketTicker } from './components/MarketTicker';
import { MessageCircle } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'products':
        return <Products />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="font-sans text-gray-900 bg-cc-cream min-h-screen flex flex-col relative transition-colors duration-500 pb-12">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <CartDrawer />
        
        <main className="flex-grow">
          {renderPage()}
        </main>
        
        <Footer />
        
        {/* Fixed Market Ticker at Bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-40">
           <MarketTicker />
        </div>

        {/* Floating WhatsApp Button - Luxury Concierge Style */}
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-16 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:bg-[#20b85c] transition-all duration-300 hover:scale-110 flex items-center justify-center group border-[3px] border-white ring-2 ring-cc-gold/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} fill="white" stroke="white" />
          <span className="absolute right-full mr-4 bg-white text-cc-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
             Trade Concierge
          </span>
        </a>
      </div>
    </CartProvider>
  );
}

export default App;