import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { useAuthStore } from "../store/store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const scrollToSection = (sectionId) => {
    navigate("/"); // Go to home first if needed
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const getInitials = (username) =>
    username ? username.charAt(0).toUpperCase() : "";

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
          {/* ... Existing mesh gradient code ... */}

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
              {!user ? (
                <>
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
                  {/* ... Existing buttons for Features, Pricing, Testimonials ... */}
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className={`hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Dashboard
                  </button>
                </>
              )}
            </nav>

            {/* Desktop CTA, Theme Toggle, and User Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              {!user ? (
                <Button onClick={() => navigate("/login")}>Get Started</Button>
              ) : (
                <>
                  <div className="w-8 h-8 bg-pink text-white flex items-center justify-center rounded-full font-bold">
                    {getInitials(user.username)}
                  </div>
                  <Button onClick={handleLogout}>Logout</Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            {/* ... Existing code ... */}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              {/* ... Existing mobile menu ... */}
              {/* Add conditional for logged in: Dashboard and Logout */}
              {user && (
                <>
                  <button
                    onClick={() => {
                      navigate("/dashboard");
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 hover:text-pink transition-colors duration-200 font-medium ${
                      isScrolled
                        ? "text-navy dark:text-dark-text"
                        : "text-navy dark:text-white"
                    }`}
                  >
                    Logout
                  </button>
                  <div className="px-3 py-2">
                    <div className="w-8 h-8 bg-pink text-white flex items-center justify-center rounded-full font-bold mx-auto">
                      {getInitials(user.username)}
                    </div>
                  </div>
                </>
              )}
              {/* ... Existing mobile CTA and ThemeToggle ... */}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
