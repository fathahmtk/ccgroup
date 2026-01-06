import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
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
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="font-sans text-gray-900 bg-cc-cream min-h-screen flex flex-col relative transition-colors duration-500">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <CartDrawer />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button - Sleek Design */}
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-6 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#20b85c] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="" fill="white" stroke="white" />
        </a>
      </div>
    </CartProvider>
  );
}

export default App;