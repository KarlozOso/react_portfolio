import React, { useState } from 'react';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-black/95 lg:rounded-2xl mt-3 mx-9 rounded-2xl drop-shadow-2xl shadow-2xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <TerminalIcon className="text-white" fontSize="large" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 font-extrabold"
          aria-controls="navbar-default"
          aria-expanded={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon />
        </button>
        <div
          className={`${openMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-6 -mb-1 md:flex-row md:space-x-8 md:mt-0 md:border-0 font-bold  bg-gray-800 lg:bg-transparent rounded-2xl">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
                aria-current="page"
              >
                Home
              </a>
              
            </li>
          
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
