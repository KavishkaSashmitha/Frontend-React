import React from 'react';
import Navbar from '../components/Navbar';

import About from '../components/About';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
