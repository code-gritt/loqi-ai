import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Focus from "./components/Focus";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
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
      </div>
    </ThemeProvider>
  );
}

export default App;
