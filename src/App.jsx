import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Focus from "./components/Focus";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-bg">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <TechStack />
                <Focus />
                <Features />
                <Dashboard />
                <Pricing />
                <Testimonials />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
