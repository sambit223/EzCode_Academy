import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-10 text-white bg-blue-950">
      <div className="container flex flex-wrap justify-between mx-auto">
        <div className="w-full px-4 mb-6 md:w-1/4">
          <h1 className="text-2xl font-bold text-orange-400">
            EZ<span className="text-white">CodeAcademy</span>
          </h1>
          <div className="flex flex-col gap-2">
          <p className="mt-4 text-sm">
            Explore our cutting-edge courses to gain skills in the latest tech
            stacks. 
          </p>
          <p className="text-sm">Experience personalized learning and hands-on projects
            designed to boost your career. Start transforming your professional
            journey today.</p>
          </div>
          
        </div>
        <div className="w-full px-4 mb-6 md:w-1/4">
          <h2 className="text-xl font-bold text-orange-400">Contact Us</h2>
          <p className="mt-4 text-sm">ezecodeacademy.pvt.lmt</p>
          <p className="text-sm">ezecodeacademy.support@gmail.com</p>
        </div>
        <div className="w-full px-4 mb-6 md:w-1/4">
          <h2 className="text-xl font-bold text-orange-400">Explore Courses</h2>
          <ul className="mt-4 list-disc list-inside text-sm">
            <li>Basics of Coding (Python / Java)</li>
            <li>Frontend Technologies (HTML & CSS)</li>
            <li>Advanced Javascript</li>
            <li>React JS</li>
            <li>MERN Stack</li>
          </ul>
        </div>
        <div className="w-full px-4 mb-6 md:w-1/4 ">
          <h2 className="text-xl font-bold text-orange-400">Quick Links</h2>
          <ul className="mt-3 text-sm">
            <li className="underline">
              <a href="#about">About Us</a>
            </li>
            <li className="underline">
              <a href="#contact">Contact</a>
            </li>
            <li className="underline">
              <a href="#testimony">Testimonals</a>
            </li>
            <li className="underline">
              <a href="#courses">Courses</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-end gap-5 bg-transparent flex-around">
          <ul className="flex flex-wrap justify-around gap-10 m-3">
            <li>
              <i className="text-3xl text-blue-600 transition-transform duration-1000 cursor-pointer hover:text-blue-800 hover:text-5xl bi bi-facebook"></i>
            </li>

            <li>
              {" "}
              <i className="text-3xl text-pink-600 transition-transform duration-1000 cursor-pointer bi bi-instagram hover:text-pink-800 hover:text-5xl"></i>
            </li>
            <li>
              {" "}
              <i className="text-3xl text-blue-400 transition-transform duration-1000 cursor-pointer bi bi-twitter hover:text-blue-600 hover:text-5xl"></i>
            </li>
            <li>
              <i className="text-3xl text-green-500 transition-transform duration-1000 cursor-pointer bi bi-whatsapp hover:text-green-700 hover:text-5xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
