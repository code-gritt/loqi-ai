import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "pt-6 px-4 sm:px-6 lg:px-8" : "pt-0 px-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative transition-all duration-500 ${
            isScrolled
              ? "bg-white/90 dark:bg-dark-card/90 backdrop-blur-md shadow-lg rounded-2xl px-4 py-2 shadow-2xl dark:shadow-pink/20 overflow-hidden"
              : "bg-transparent px-4 py-4"
          }`}
        >
          {/* Mesh Gradient Background - Only when scrolled */}
          {isScrolled && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-purple/5 to-blue/10 dark:from-pink/20 dark:via-purple/10 dark:to-blue/20 opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/5 via-pink/10 to-purple/5 dark:from-blue/10 dark:via-pink/20 dark:to-purple/10 opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-purple/5 via-blue/5 to-pink/5 dark:from-purple/10 dark:via-blue/10 dark:to-pink/20 opacity-30"></div>
              {/* Pink Glow Effect for Dark Mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink/5 via-transparent to-pink/5 dark:from-pink/10 dark:via-transparent dark:to-pink/10 opacity-50 dark:opacity-100"></div>
            </>
          )}
          <div className="relative flex justify-between items-center h-16 z-10">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Logo className="w-8 h-8" />
              <h1
                className={`text-2xl font-bold font-sora transition-colors duration-500 ${
                  isScrolled
                    ? "text-navy dark:text-dark-text"
                    : "text-navy dark:text-white"
                }`}
              >
                Loqi AI
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-pink transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-navy dark:text-dark-text"
                    : "text-navy dark:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`hover:text-pink transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-navy dark:text-dark-text"
                    : "text-navy dark:text-white"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className={`hover:text-pink transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-navy dark:text-dark-text"
                    : "text-navy dark:text-white"
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`hover:text-pink transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-navy dark:text-dark-text"
                    : "text-navy dark:text-white"
                }`}
              >
                Testimonials
              </button>
            </nav>

            {/* Desktop CTA and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button onClick={() => scrollToSection("pricing")}>
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`hover:text-pink focus:outline-none focus:text-pink transition-colors duration-200 ${
                  isScrolled
                    ? "text-navy dark:text-dark-text"
                    : "text-navy dark:text-white"
                }`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <div
                className={`relative px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t rounded-b-2xl shadow-lg shadow-white/20 dark:shadow-pink/20 shadow-2xl overflow-hidden transition-all duration-500 ${
                  isScrolled
                    ? "bg-white/90 dark:bg-dark-card/90 backdrop-blur-md"
                    : "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md"
                }`}
              >
                {/* Mesh Gradient Background - Only when scrolled */}
                {isScrolled && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-purple/5 to-blue/10 dark:from-pink/20 dark:via-purple/10 dark:to-blue/20 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue/5 via-pink/10 to-purple/5 dark:from-blue/10 dark:via-pink/20 dark:to-purple/10 opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple/5 via-blue/5 to-pink/5 dark:from-purple/10 dark:via-blue/10 dark:to-pink/20 opacity-30"></div>
                    {/* Pink Glow Effect for Dark Mode */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink/5 via-transparent to-pink/5 dark:from-pink/10 dark:via-transparent dark:to-pink/10 opacity-50 dark:opacity-100"></div>
                  </>
                )}
                <div className="relative z-10">
                  <button
                    onClick={() => scrollToSection("home")}
                    className={`block px-3 py-2 hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("features")}
                    className={`block px-3 py-2 hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection("pricing")}
                    className={`block px-3 py-2 hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className={`block px-3 py-2 hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Testimonials
                  </button>
                  <div className="px-3 py-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium dark:text-white">
                        Theme
                      </span>
                      <ThemeToggle />
                    </div>
                    <Button
                      onClick={() => scrollToSection("pricing")}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
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
