import React from 'react';

const Focus = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-85"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/18 via-transparent to-blue-500/18"></div>
        
        {/* Animated Geometric Patterns */}
        <div className="absolute top-20 left-20 w-28 h-28 bg-pink/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-blue-500/15 rounded-full blur-lg animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-purple-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(248, 74, 167, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 74, 167, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora">
              Focus on the{' '}
              <span className="text-pink">IDEA</span>
            </h2>
            
            <h3 className="text-xl text-gray-700 font-semibold">
              Not the implementation
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Stop spending weeks on authentication, admin panels, and boilerplate code. 
              Larafast gives you a solid foundation so you can focus on what makes your 
              application unique.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Pre-built authentication system</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Complete admin dashboard</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Payment integration ready</span>
              </div>
            </div>
          </div>

          {/* Right Column - Code Visual */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
              {/* Code Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">YourApp.php</span>
              </div>
              
              {/* Code Content */}
              <div className="space-y-3 text-sm font-mono">
                <div className="text-blue-400">
                  <span className="text-gray-500">//</span> Focus on your business logic
                </div>
                <div className="text-gray-300">
                  <span className="text-purple-400">class</span> <span className="text-yellow-400">YourApp</span> <span className="text-gray-500">{'{'}</span>
                </div>
                <div className="text-gray-300 ml-4">
                  <span className="text-purple-400">public function</span> <span className="text-yellow-400">buildAmazingFeature</span><span className="text-gray-500">()</span>
                </div>
                <div className="text-gray-300 ml-8 text-gray-500">{'{'}</div>
                <div className="text-gray-300 ml-12">
                  <span className="text-green-400">//</span> Your unique code here
                </div>
                <div className="text-gray-300 ml-12">
                  <span className="text-blue-400">return</span> <span className="text-yellow-400">$this</span><span className="text-gray-500">-&gt;</span><span className="text-yellow-400">createSomethingAwesome</span><span className="text-gray-500">();</span>
                </div>
                <div className="text-gray-300 ml-8 text-gray-500">{'}'}</div>
                <div className="text-gray-300 text-gray-500">{'}'}</div>
              </div>
              
              {/* Success message */}
              <div className="mt-4 p-3 bg-green-900/30 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-xs font-mono">
                    Larafast handles the rest! 🚀
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-pink/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-blue-500/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
