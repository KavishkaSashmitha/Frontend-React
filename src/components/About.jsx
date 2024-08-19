import React from 'react';

const About = () => (
  <section>
    <div className="bg-[#676D75] text-white p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-600">
          About Us
        </h1>
        <p className="text-lg mb-8 text-center hover:text-yellow-300 transition-colors duration-300">
          Our mission is to innovate and lead the AI industry with cutting-edge
          solutions that empower businesses worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-600">
              Our Vision
            </h2>
            <p className="text-gray-300  hover:text-yellow-300 transition-colors duration-300">
              To be a global leader in AI innovation, driving progress and
              transforming industries through advanced technologies.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-600">
              Our History
            </h2>
            <p className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">
              Established in 2020, we have rapidly grown to become a trusted
              partner for AI solutions, working with clients worldwide.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center rounded-sm">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center ">
            <div className="w-64 p-4 m-4 bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-orange-400 transition-colors duration-300 ">
              <img
                src="/1.jpg"
                alt="Team Member"
                className=" w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">
                John Darve
              </h3>
              <p className="text-gray-400">CEO</p>
            </div>
            <div className="w-64 p-4 m-4 bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-orange-400">
              <img
                src="/2.jpg"
                alt="Team Member"
                className=" w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold hover:text-yellow-300 transition-colors duration-300">
                Jane Smith
              </h3>
              <p className="text-gray-400">CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
