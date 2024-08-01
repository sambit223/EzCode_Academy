import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-lg p-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold  text-indigo-700">
            EzCode<span className="text-orange-400">Academy</span>
          </h1>
          <h2 className="text-xs font-semibold mt-1 hidden md:block">
            Simplifying code, Amplifying success
          </h2>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`md:flex gap-5 items-center font-semibold hidden`}>
          <li className="cursor-pointer hover:scale-110 hover:text-orange-500 transition-transform duration-300 hover:text-2xl">
            Home
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-orange-500 transition-transform duration-300 hover:text-2xl">
            Courses
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-orange-500 transition-transform duration-300 hover:text-2xl">
            Pages
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-orange-500 transition-transform duration-300 hover:text-2xl">
            Gallery
          </li>
          <li className="cursor-pointer hover:scale-110 hover:text-orange-500 transition-transform duration-300 hover:text-2xl">
            Contact us
          </li>
        </ul>

        <div className="flex items-center gap-5 hidden md:flex">
          <p className="text-xl cursor-pointer">Login</p>
          <button className="transition-transform duration-300 ease-in-out hover:scale-110 bg-orange-400 hover:bg-white border hover:border-orange-500 rounded-lg p-3">
            Register Now
          </button>
        </div>
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
            className="cursor-pointer text-2xl hover:text-orange-500"
          >
            Home
          </li>
          <li
            onClick={toggleMenu}
            className="cursor-pointer text-2xl hover:text-orange-500"
          >
            Courses
          </li>
          <li
            onClick={toggleMenu}
            className="cursor-pointer text-2xl hover:text-orange-500"
          >
            Pages
          </li>
          <li
            onClick={toggleMenu}
            className="cursor-pointer text-2xl hover:text-orange-500"
          >
            Gallery
          </li>
          <li
            onClick={toggleMenu}
            className="cursor-pointer text-2xl hover:text-orange-500"
          >
            Contact us
          </li>
          <div className="flex flex-col gap-3 mt-5">
            <p onClick={toggleMenu} className="text-xl cursor-pointer">
              Login
            </p>
            <button
              onClick={toggleMenu}
              className="transition-transform duration-300 ease-in-out hover:scale-110 bg-orange-400 hover:bg-white border hover:border-orange-500 rounded-lg p-3"
            >
              Register Now
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
