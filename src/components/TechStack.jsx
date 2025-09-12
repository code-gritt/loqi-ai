import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Vue.js', color: 'text-green-500' },
    { name: 'Inertia.js', color: 'text-purple-500' },
    { name: 'Laravel', color: 'text-red-500' },
    { name: 'Tailwind CSS', color: 'text-cyan-500' },
    { name: 'Alpine.js', color: 'text-blue-500' },
    { name: 'Livewire', color: 'text-orange-500' },
    { name: 'PHP', color: 'text-indigo-500' },
    { name: 'MySQL', color: 'text-blue-600' },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink/15 via-transparent to-blue-500/15"></div>
        
        {/* Animated Geometric Patterns */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-pink/12 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/12 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-500/12 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-8" style={{
          backgroundImage: `
            linear-gradient(rgba(248, 74, 167, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 74, 167, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-sora mb-4">
            Available with VILT & TALL Stacks
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Larafast works seamlessly with the most popular Laravel development stacks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className={`text-3xl font-bold ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {tech.name.charAt(0)}
              </div>
              <div className="text-sm font-medium text-navy text-center">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-700 font-medium">
            Plus support for <span className="font-semibold text-navy">React</span>,{' '}
            <span className="font-semibold text-navy">Next.js</span>, and{' '}
            <span className="font-semibold text-navy">Nuxt.js</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
