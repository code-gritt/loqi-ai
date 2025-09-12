import React, { useState } from 'react';
import Button from './Button';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink/20 via-purple/10 to-blue/20 rounded-2xl blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue/15 via-pink/10 to-purple/15 rounded-2xl blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-purple/20 via-blue/10 to-pink/15 rounded-2xl blur-sm"></div>
        
        <div className="relative bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl px-4 py-2 shadow-2xl border border-white/20">
          <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Logo className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-navy font-sora">
              Larafast
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-navy hover:text-pink transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-navy hover:text-pink transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-navy hover:text-pink transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-navy hover:text-pink transition-colors duration-200 font-medium"
            >
              Testimonials
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('pricing')}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-navy hover:text-pink focus:outline-none focus:text-pink"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 relative">
            {/* Mobile Menu Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink/20 via-purple/10 to-blue/20 rounded-b-2xl blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue/15 via-pink/10 to-purple/15 rounded-b-2xl blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-purple/20 via-blue/10 to-pink/15 rounded-b-2xl blur-sm"></div>
            
            <div className="relative px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t rounded-b-2xl shadow-lg shadow-white/20 shadow-2xl border border-white/20">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-navy hover:text-pink transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-navy hover:text-pink transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-navy hover:text-pink transition-colors duration-200 font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-navy hover:text-pink transition-colors duration-200 font-medium"
              >
                Testimonials
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('pricing')} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;
