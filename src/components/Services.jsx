import React from 'react';

const Services = () => (
  <section id="services">
    <div className="bg-[#1d1f24] text-white p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#676D75] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">AI Consulting</h2>
            <p>
              We provide expert AI consulting services to help you understand
              how AI can transform your business and guide you through the
              implementation process.
            </p>
          </div>
          <div className="bg-[#676D75] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Custom AI Solutions</h2>
            <p>
              Our team develops tailored AI solutions that meet your specific
              needs, from machine learning models to natural language processing
              tools.
            </p>
          </div>
          <div className="bg-[#676D75] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">AI Integration</h2>
            <p>
              We specialize in integrating AI technologies into your existing
              systems, ensuring a smooth transition and immediate benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
