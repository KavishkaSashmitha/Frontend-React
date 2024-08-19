import React from 'react';
import Navbar from '../components/Navbar';

import About from '../components/About';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Services from '../components/Services';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="testimonial">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
