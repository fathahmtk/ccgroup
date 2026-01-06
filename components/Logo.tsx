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
          {/* Outer Container Ring - New Primary #0F392B, New Gold #DCA54C */}
          <circle cx="50" cy="50" r="46" fill={isDefault ? '#0F392B' : '#FFFFFF'} stroke={isDefault ? '#DCA54C' : 'transparent'} strokeWidth="1" />
          
          {/* Abstract Monogram C (Left) - Gold */}
          <path 
            d="M40 32C28 36 26 64 40 68" 
            stroke={isDefault ? '#DCA54C' : '#0F392B'} 
            strokeWidth="5" 
            strokeLinecap="round"
          />
          
          {/* Abstract Monogram C (Right) - Sage/Secondary */}
          <path 
            d="M60 68C72 64 74 36 60 32" 
            stroke={isDefault ? '#A3BFAE' : '#0F392B'} 
            strokeWidth="5" 
            strokeLinecap="round"
            strokeOpacity={isDefault ? "1" : "0.3"}
          />
          
          {/* Central Vertical Axis (Growth) */}
          <path 
            d="M50 22V78" 
            stroke={isDefault ? '#FFFFFF' : '#0F392B'} 
            strokeWidth="1" 
            strokeOpacity="0.15"
          />
          
          {/* Three Seeds representing core values */}
          <circle cx="50" cy="35" r="3" fill={isDefault ? '#DCA54C' : '#0F392B'} />
          <circle cx="50" cy="50" r="3" fill={isDefault ? '#DCA54C' : '#0F392B'} />
          <circle cx="50" cy="65" r="3" fill={isDefault ? '#DCA54C' : '#0F392B'} />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-xl md:text-2xl font-bold leading-none tracking-tight ${isDefault ? 'text-cc-primary' : 'text-white'} transition-colors duration-500`}>
          CC FOODSTUFF
        </span>
        <span className={`font-sans text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] ${isDefault ? 'text-cc-earth' : 'text-white/80'} transition-colors duration-500 mt-1.5`}>
          CC Group of Companies
        </span>
      </div>
    </div>
  );
};