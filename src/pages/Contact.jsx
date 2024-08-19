import React from 'react';

function Contact() {
  return (
    <div className="bg-[#1D1F24] p-10  shadow-lg w-full h-max flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#676D75] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EAFEF1] focus:outline-none transition duration-300 ease-in-out"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#676D75] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EAFEF1] focus:outline-none transition duration-300 ease-in-out"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-[#676D75] border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EAFEF1] focus:outline-none transition duration-300 ease-in-out"
          ></textarea>
          <button className="w-full px-4 py-3 bg-[#EAFEF1] text-[#1D1F24] font-semibold rounded-md hover:bg-[#c4ecd7] transition duration-300 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
