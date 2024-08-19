import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
