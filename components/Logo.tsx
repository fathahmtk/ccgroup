import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const isDefault = variant === 'default';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbol */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Background Shape: Organic Leaf-like Square */}
          <path 
            d="M20 5C11.7157 5 5 11.7157 5 20V50C5 74.8528 25.1472 95 50 95C74.8528 95 95 74.8528 95 50V20C95 11.7157 88.2843 5 80 5H20Z" 
            fill={isDefault ? '#133E28' : '#ffffff'} 
            className="transition-colors duration-500"
          />
          
          {/* Abstract Monogram / Grain Icon */}
          <path 
            d="M50 25C40 25 35 35 35 50C35 65 45 75 50 75" 
            stroke={isDefault ? '#D4B886' : '#133E28'} 
            strokeWidth="4" 
            strokeLinecap="round"
          />
          <path 
             d="M50 25C60 25 65 35 65 50C65 65 55 75 50 75"
             stroke={isDefault ? '#D4B886' : '#133E28'}
             strokeWidth="4" 
             strokeLinecap="round" 
             strokeOpacity="0.5"
          />
          
          {/* Central Stem */}
          <path 
            d="M50 20L50 80" 
            stroke={isDefault ? '#D4B886' : '#133E28'} 
            strokeWidth="3" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-xl md:text-2xl font-bold leading-none tracking-tight ${isDefault ? 'text-cc-primary' : 'text-white'} transition-colors duration-500`}>
          CC FOODSTUFF
        </span>
        <span className={`font-sans text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.2em] ${isDefault ? 'text-cc-earth' : 'text-white/80'} transition-colors duration-500 mt-1.5`}>
          CC Group of Companies
        </span>
      </div>
    </div>
  );
};