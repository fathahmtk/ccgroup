import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const isDefault = variant === 'default';

  // New Palette: Primary #14362A, Gold #C5A059
  const primaryColor = '#14362A';
  const goldColor = '#C5A059';
  const whiteColor = '#FFFFFF';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbol */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer Container Ring */}
          <circle cx="50" cy="50" r="46" fill={isDefault ? primaryColor : whiteColor} stroke={isDefault ? goldColor : 'transparent'} strokeWidth="1.5" />
          
          {/* Abstract Monogram C (Left) - Gold */}
          <path 
            d="M40 32C28 36 26 64 40 68" 
            stroke={isDefault ? goldColor : primaryColor} 
            strokeWidth="5" 
            strokeLinecap="round"
          />
          
          {/* Abstract Monogram C (Right) - Secondary opacity */}
          <path 
            d="M60 68C72 64 74 36 60 32" 
            stroke={isDefault ? goldColor : primaryColor} 
            strokeWidth="5" 
            strokeLinecap="round"
            strokeOpacity={isDefault ? "0.5" : "0.3"}
          />
          
          {/* Central Vertical Axis (Growth/Wheat Stalk) */}
          <path 
            d="M50 22V78" 
            stroke={isDefault ? whiteColor : primaryColor} 
            strokeWidth="1" 
            strokeOpacity="0.2"
          />
          
          {/* Three Seeds representing Group, Quality, Trust */}
          <circle cx="50" cy="35" r="2.5" fill={isDefault ? goldColor : primaryColor} />
          <circle cx="50" cy="50" r="2.5" fill={isDefault ? goldColor : primaryColor} />
          <circle cx="50" cy="65" r="2.5" fill={isDefault ? goldColor : primaryColor} />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-xl md:text-2xl font-bold leading-none tracking-tight ${isDefault ? 'text-cc-primary' : 'text-white'} transition-colors duration-500`}>
          CC FOODSTUFF
        </span>
        <span className={`font-sans text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] ${isDefault ? 'text-cc-gold' : 'text-white/60'} transition-colors duration-500 mt-1.5`}>
          Group of Companies
        </span>
      </div>
    </div>
  );
};