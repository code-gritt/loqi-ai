import React from 'react';
import Button from './Button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-navy text-white pt-24 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-purple-900 to-navy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/20 via-transparent to-blue-500/20"></div>
        
        {/* Animated Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink/25 rounded-full blur-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-pink rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-pink rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-pink/20 border border-pink/30 rounded-full text-pink text-sm font-medium">
              <span className="w-2 h-2 bg-pink rounded-full mr-2 animate-pulse"></span>
              Trusted by 10,000+ developers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora leading-tight">
              Save Hundreds of hours using{' '}
              <span className="text-pink bg-gradient-to-r from-pink to-purple-400 bg-clip-text text-transparent">
                Larafast
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Accelerate your Laravel development with our comprehensive toolkit. 
              Focus on building amazing features instead of repetitive boilerplate code.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink">500+</div>
                <div className="text-sm text-gray-400">Hours Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink">50+</div>
                <div className="text-sm text-gray-400">Pre-built Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink">99%</div>
                <div className="text-sm text-gray-400">Developer Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('pricing')}
                className="text-lg px-8 py-4 bg-gradient-to-r from-pink to-purple-500 hover:from-pink/90 hover:to-purple-500/90"
              >
                Get Larafast
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('features')}
                className="text-lg px-8 py-4 border-pink text-pink hover:bg-pink hover:text-white"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Trusted by developers at:</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-lg font-semibold">Google</div>
                <div className="text-lg font-semibold">Microsoft</div>
                <div className="text-lg font-semibold">Shopify</div>
                <div className="text-lg font-semibold">Stripe</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-in-right">
            {/* Main Dashboard Mockup */}
            <div className="bg-gradient-to-br from-pink/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              {/* Code Editor Mockup */}
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                {/* Editor Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm ml-4">Larafast Dashboard</div>
                </div>
                
                {/* Editor Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink rounded-full animate-pulse"></div>
                    <span className="text-pink text-sm font-mono">Larafast</span>
                  </div>
                  
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-green-400 flex items-center">
                      <span className="mr-2">✓</span> Authentication System
                    </div>
                    <div className="text-green-400 flex items-center">
                      <span className="mr-2">✓</span> Admin Dashboard
                    </div>
                    <div className="text-green-400 flex items-center">
                      <span className="mr-2">✓</span> Payment Integration
                    </div>
                    <div className="text-green-400 flex items-center">
                      <span className="mr-2">✓</span> User Management
                    </div>
                    <div className="text-yellow-400 flex items-center">
                      <span className="mr-2">⚡</span> Ready in minutes, not hours
                    </div>
                  </div>
                  
                  {/* Terminal-like output */}
                  <div className="bg-black/50 rounded p-3 mt-4">
                    <div className="text-green-400 text-xs font-mono">
                      $ php artisan larafast:install
                    </div>
                    <div className="text-white text-xs font-mono mt-1">
                      Larafast installed successfully! 🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-pink rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Fast Setup</div>
                  <div className="text-gray-300 text-xs">5 min install</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔧</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">50+ Components</div>
                  <div className="text-gray-300 text-xs">Ready to use</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Analytics</div>
                  <div className="text-gray-300 text-xs">Built-in</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 -left-8 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
