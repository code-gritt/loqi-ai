import React from 'react';

const GlobalPatterns = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Continuous Geometric Patterns */}
      
      {/* Top Section Patterns */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-pink/8 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-40 left-20 w-24 h-24 bg-blue-500/8 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-60 right-1/3 w-28 h-28 bg-purple-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Middle Section Patterns */}
      <div className="absolute top-1/3 left-10 w-36 h-36 bg-pink/6 rounded-full blur-3xl animate-bounce" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-500/6 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-2/3 left-1/4 w-30 h-30 bg-purple-500/6 rounded-full blur-2xl animate-bounce" style={{animationDelay: '5s'}}></div>
      
      {/* Bottom Section Patterns */}
      <div className="absolute bottom-40 right-1/4 w-26 h-26 bg-pink/7 rounded-full blur-xl animate-pulse" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-34 h-34 bg-blue-500/7 rounded-full blur-2xl animate-bounce" style={{animationDelay: '7s'}}></div>
      <div className="absolute bottom-60 right-10 w-22 h-22 bg-purple-500/7 rounded-full blur-xl animate-pulse" style={{animationDelay: '8s'}}></div>
      
      {/* Additional Floating Patterns */}
      <div className="absolute top-1/4 right-1/2 w-18 h-18 bg-pink/5 rounded-full blur-lg animate-float" style={{animationDelay: '9s'}}></div>
      <div className="absolute top-3/4 left-1/2 w-24 h-24 bg-blue-500/5 rounded-full blur-lg animate-float" style={{animationDelay: '10s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500/5 rounded-full blur-lg animate-float" style={{animationDelay: '11s'}}></div>
      
      {/* Continuous Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(248, 74, 167, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(248, 74, 167, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Continuous Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink/3 via-transparent to-blue-500/3 opacity-60"></div>
    </div>
  );
};

export default GlobalPatterns;
