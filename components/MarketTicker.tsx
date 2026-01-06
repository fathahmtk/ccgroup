import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MARKET_INDICES = [
  { name: 'CC INDEX', price: '1,240.50', change: '+1.8%', up: true }, // Proprietary Index
  { name: 'BASMATI (PUSA)', price: '₹9,850/Qtl', change: '+2.4%', up: true },
  { name: 'SUGAR (M-30)', price: '₹3,750/Qtl', change: '-0.8%', up: false },
  { name: 'JEERA (UNJHA)', price: '₹28,500/Qtl', change: '+1.1%', up: true },
  { name: 'GOLD (MCX)', price: '₹62,400', change: '-0.2%', up: false },
  { name: 'USD/INR', price: '83.15', change: '+0.05%', up: true },
  { name: 'TURMERIC (NIZAM)', price: '₹14,200/Qtl', change: '+4.2%', up: true },
  { name: 'AED/INR', price: '22.64', change: '+0.1%', up: true },
  { name: 'PEPPER (KOCHI)', price: '₹584/Kg', change: '+0.5%', up: true },
];

export const MarketTicker: React.FC = () => {
  return (
    <div className="bg-cc-primary text-white border-b border-white/10 overflow-hidden h-10 flex items-center relative z-50 group cursor-default">
      
      {/* Ticker Animation */}
      <div className="flex animate-marquee whitespace-nowrap group-hover:pause">
        {[...MARKET_INDICES, ...MARKET_INDICES, ...MARKET_INDICES].map((item, i) => (
          <div key={i} className="flex items-center mx-6 text-xs font-mono border-r border-white/10 pr-6">
            <span className={`text-gray-400 mr-2 ${item.name === 'CC INDEX' ? 'text-cc-gold font-bold' : ''}`}>{item.name}</span>
            <span className="font-bold mr-2">{item.price}</span>
            <span className={`flex items-center ${item.up ? 'text-green-400' : 'text-red-400'}`}>
              {item.up ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
              {item.change}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};