import React from 'react';
import VueIcon from '../assets/Vue.js Icon.svg';
import LaravelIcon from '../assets/Laravel Icon.svg';
import TailwindIcon from '../assets/Tailwind CSS Icon.svg';
import AlpineIcon from '../assets/Alpine.js Icon.svg';
import PHPIcon from '../assets/PHP Icon.svg';
import MySQLIcon from '../assets/MySQL Icon.svg';
import IonicIcon from '../assets/Ionic Icon.svg';

const TechStack = () => {
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
          {/* Vue.js */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={VueIcon} alt="Vue.js" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-green-600 transition-colors">
              Vue.js
            </div>
          </div>

          {/* Ionic */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={IonicIcon} alt="Ionic" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-purple-600 transition-colors">
              Ionic
            </div>
          </div>

          {/* Laravel */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={LaravelIcon} alt="Laravel" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-red-600 transition-colors">
              Laravel
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={TailwindIcon} alt="Tailwind CSS" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-cyan-600 transition-colors">
              Tailwind CSS
            </div>
          </div>

          {/* Alpine.js */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={AlpineIcon} alt="Alpine.js" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-blue-600 transition-colors">
              Alpine.js
            </div>
          </div>

          {/* Livewire */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4E56A6"/>
              </svg>
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-orange-600 transition-colors">
              Livewire
            </div>
          </div>

          {/* PHP */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={PHPIcon} alt="PHP" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-indigo-600 transition-colors">
              PHP
            </div>
          </div>

          {/* MySQL */}
          <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 group-hover:animate-bounce transition-all duration-300">
              <img src={MySQLIcon} alt="MySQL" className="w-10 h-10" />
            </div>
            <div className="text-sm font-medium text-navy text-center group-hover:text-blue-600 transition-colors">
              MySQL
            </div>
          </div>
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
