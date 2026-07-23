import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/ContactMe';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

/**
 * Home Page Component
 * This is the main entry point for the single-page portfolio.
 * It coordinates all the major sections of the website.
 */
const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 selection:bg-primary/10 selection:text-primary">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer Section */}
      <Footer />
      
      {/* Floating UI Elements */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
