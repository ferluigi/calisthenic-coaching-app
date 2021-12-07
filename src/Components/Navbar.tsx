import React, { useState } from "react";

//redux saga
import { useDispatch } from 'react-redux';
import { openModal } from '../store/action/index';



const Navbar: React.FC = () => {
  const [isActive, setActive] = useState(true);
  const dispatch = useDispatch();

  function dropDownActive(): void {
    setActive((current) => !current);
  }


  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="flex items-center toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img className="w-20" src="/Logo.png" alt="" />
            LANDING
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-black shadow-sm px-4 py-2  text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-400 "
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="false"
                onClick={dropDownActive}
              >
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div
              className={
                isActive
                  ? "hidden"
                  : "" +
                    " origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              }
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#Pricing"
                  className="text-black block px-4 py-2 text-md"
                  role="menuitem"
                  id="menu-item-0"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-md"
                  role="menuitem"
                  id="menu-item-1"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="text-black block px-4 py-2 text-md"
                  role="menuitem"
                  id="menu-item-2"
                >
                  Contact
                </a>

                <button
                  onClick={() => dispatch(openModal(true))}
                  id="navAction"
                  className="flex mx-auto lg:mx-0 bg-white text-gray-900 text-lg font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:bg-green-100 hover:scale-105 duration-300 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          ></button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black   text-xl hover:text-gray-700 "
                href="#pricing"
              >
                Pricing
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline  text-xl hover:text-gray-700 hover:text-underline py-2 px-4"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline  text-xl hover:text-gray-700 hover:text-underline py-2 px-4"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={() => dispatch(openModal(true))}
            id="navAction"
            className="mx-auto lg:mx-0 bg-white text-gray-900 text-lg font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:bg-green-100 hover:scale-105 duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
