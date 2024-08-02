import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-5 bg-white shadow-lg" id="header">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold  text-gray-600">
            EzCode<span className="text-orange-400">Academy</span>
          </h1>
          <div className="flex justify-end">
          <h2 className="hidden mt-1 text-xs font-semibold md:block">
            Simplifying code, Amplifying success
          </h2>
          </div>
          
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`md:flex gap-5 items-center font-semibold hidden`}>
          <li className="transition-transform duration-300 cursor-pointer hover:scale-110 hover:text-orange-500 hover:text-2xl">
            <a href="#banner">Home</a>
          </li>
          <li className="transition-transform duration-300 cursor-pointer hover:scale-110 hover:text-orange-500 hover:text-2xl">
            <a href="#courses">Courses</a>
          </li>
          <li className="transition-transform duration-300 cursor-pointer hover:scale-110 hover:text-orange-500 hover:text-2xl">
           <a href="#about"> About Us</a>
          </li>
          <li className="transition-transform duration-300 cursor-pointer hover:scale-110 hover:text-orange-500 hover:text-2xl">
            Gallery
          </li>
          <li className="transition-transform duration-300 cursor-pointer hover:scale-110 hover:text-orange-500 hover:text-2xl">
            <a href="#contact">Contact us</a>
          </li>
        </ul>

        {/* <div className="flex items-center hidden gap-5 md:flex">
          <p className="text-xl cursor-pointer">Login</p>
          <button className="p-3 transition-transform duration-300 ease-in-out bg-orange-400 border rounded-lg hover:scale-110 hover:bg-white hover:border-orange-500">
            Register Now
          </button>
        </div> */}
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white p-5 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 md:hidden`}
      >
        <ul className="flex flex-col items-start gap-5 font-semibold">
          <li
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            Home
          </li>
          <li
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            Courses
          </li>
          <li
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            Pages
          </li>
          <li
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            Gallery
          </li>
          <li
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-orange-500"
          >
            Contact us
          </li>
          {/* <div className="flex flex-col gap-3 mt-5">
            <p onClick={toggleMenu} className="text-xl cursor-pointer">
              Login
            </p>
            <button
              onClick={toggleMenu}
              className="p-3 transition-transform duration-300 ease-in-out bg-orange-400 border rounded-lg hover:scale-110 hover:bg-white hover:border-orange-500"
            >
              Register Now
            </button>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
