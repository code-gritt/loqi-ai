import React from 'react';

const Logo = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} relative`}>
      {/* Speed-themed logo with lightning bolt and motion lines */}
      <svg 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with gradient */}
        <circle 
          cx="16" 
          cy="16" 
          r="15" 
          fill="url(#logoGradient)" 
          stroke="currentColor" 
          strokeWidth="1"
          className="text-pink"
        />
        
        {/* Lightning bolt */}
        <path 
          d="M12 8L20 12L16 16L22 24L14 20L18 16L12 8Z" 
          fill="white"
          className="animate-pulse"
        />
        
        {/* Motion lines */}
        <path 
          d="M6 10L8 8M6 14L8 12M6 18L8 16" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          opacity="0.7"
        />
        <path 
          d="M24 10L26 8M24 14L26 12M24 18L26 16" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F84AA7" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-pink/20 rounded-full blur-sm animate-ping opacity-75"></div>
    </div>
  );
};

export default Logo;
