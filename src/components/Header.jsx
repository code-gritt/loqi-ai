import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setIsMenuOpen(false);
  };

  const getInitials = (username) => username?.charAt(0).toUpperCase() || "";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 transition-colors duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-dark-card/90 backdrop-blur-md rounded-2xl"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="w-8 h-8" />
          <h1
            className={`text-2xl font-bold font-sora transition-colors duration-300 ${
              isScrolled
                ? "text-navy dark:text-dark-text"
                : "text-navy dark:text-white"
            }`}
          >
            Loqi AI
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {!user ? (
            <Button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-navy dark:text-dark-text"
                  : "text-navy dark:text-white"
              }`}
            >
              Home
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/dashboard")}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-navy dark:text-dark-text"
                  : "text-navy dark:text-white"
              }`}
            >
              Dashboard
            </Button>
          )}
          {user ? (
            <>
              <Button onClick={handleLogout}>Logout</Button>
              <div className="w-8 h-8 bg-pink text-white flex items-center justify-center rounded-full font-bold">
                {getInitials(user.username)}
              </div>
            </>
          ) : (
            <Button onClick={() => navigate("/login")}>Get Started</Button>
          )}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-3 p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? (
              <span className="text-2xl font-bold">&times;</span>
            ) : (
              <span className="text-2xl font-bold">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card/95 backdrop-blur-md shadow-lg rounded-b-2xl py-4 px-6 space-y-3 transition-all duration-300">
          {!user ? (
            <Button
              onClick={() => scrollToSection("home")}
              className="w-full text-left"
            >
              Home
            </Button>
          ) : (
            <>
              <Button
                onClick={() => {
                  navigate("/dashboard");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left"
              >
                Dashboard
              </Button>
              <Button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left"
              >
                Logout
              </Button>
              <div className="w-10 h-10 bg-pink text-white flex items-center justify-center rounded-full font-bold mx-auto">
                {getInitials(user.username)}
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
