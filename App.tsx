import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MarketTicker } from './components/MarketTicker';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { AiChef } from './pages/AiChef';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
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
      case 'rd-lab':
        return <AiChef />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col relative transition-colors duration-500">
        <MarketTicker />
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <CartDrawer />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/971501234567" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-6 md:right-8 z-40 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-[#20b85c] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="md:w-8 md:h-8" fill="white" stroke="white" />
          <span className="hidden md:block absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-sm shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            WhatsApp Trade Desk
          </span>
        </a>
      </div>
    </CartProvider>
  );
}

export default App;