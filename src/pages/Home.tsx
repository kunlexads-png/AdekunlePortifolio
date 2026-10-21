import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/ContactMe';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 selection:bg-primary/10 selection:text-primary">
      <Navbar />

      <main>
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;