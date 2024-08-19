import React from 'react';

function Navbar() {
  return (
    <div>
      <header className="bg-black from-blue-500 to-purple-600 p-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a className="text-3xl font-bold text-white" href="/">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
              </svg>
            </span>
            <span>XYGEN.Ai</span>
          </a>
          <input className="hidden peer" type="checkbox" id="navbar-open" />
          <label
            className="cursor-pointer text-white text-2xl sm:hidden"
            htmlFor="navbar-open"
          >
            ☰
          </label>
          <nav className="hidden peer-checked:block w-full mt-4 sm:flex sm:items-center sm:w-auto">
            <ul className="flex flex-col sm:flex-row sm:space-x-6">
              <li>
                <a
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-yellow-300 transition-colors duration-300"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
