import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from './Contact';
import Footer from '../components/Footer';
import ChatIcon from '../components/ChatIcon';

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
      <ChatIcon /> {/* Add the ChatIcon component here */}
    </div>
  );
}

export default Home;
