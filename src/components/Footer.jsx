import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="footer-left">
          <h3 className="text-2xl font-semibold text-white mb-2">
            Company Name
          </h3>
          <p>© 2024 Company Name. All rights reserved.</p>
        </div>
        <div className="footer-center flex-grow text-center">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right text-right">
          <p>Follow us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-green-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-200">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
