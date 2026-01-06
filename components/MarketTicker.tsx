import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MARKET_INDICES = [
  { name: 'CC INDEX', price: '1,240.50', change: '+1.8%', up: true }, // Proprietary Index
  { name: 'RICE (TH 100% B)', price: '580.00', change: '+2.4%', up: true },
  { name: 'SUGAR (London No.5)', price: '720.50', change: '-0.8%', up: false },
  { name: 'WHEAT (CBOT)', price: '592.25', change: '+1.1%', up: true },
  { name: 'PALM OIL (MDEX)', price: '3,850', change: '-1.5%', up: false },
  { name: 'BRENT CRUDE', price: '82.40', change: '+0.5%', up: true },
  { name: 'FREIGHT (BALTIC)', price: '1,540', change: '+4.2%', up: true },
  { name: 'USD/INR', price: '83.12', change: '+0.1%', up: true },
  { name: 'CORN (CBOT)', price: '450.00', change: '-0.2%', up: false },
];

export const MarketTicker: React.FC = () => {
  return (
    <div className="bg-cc-primary text-white border-b border-white/10 overflow-hidden h-10 flex items-center relative z-50">
      
      {/* Ticker Animation */}
      <div className="flex animate-marquee whitespace-nowrap">
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