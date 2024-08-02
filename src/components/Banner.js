import React from "react";
import "./Animation/Animation.css";
import girl from '../assets/girl.png.jpeg' ;

const Banner = () => {
  return (
    <div className="p-8 flex flex-col md:flex-row items-center justify-between relative bg-gray-50">
      <div className="flex-1 text-center md:text-left md:pr-8">
        <div className="mb-4">
          <div className="step-indicator">
            <div className="step bg-orange-400 text-white">
              Step 1: Discover
            </div>
            <div className="step">Step 2: Learn</div>
            <div className="step">Step 3: Certified</div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-600 mb-4">
          Discover <span className="text-orange-500">Your Ideal Courses</span>
        </h1>
        <p className="text-gray-700 mb-4">
          Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Mus mauris
          vitae ultricies leo integer malesuada nunc vel risus. Tellus id
          interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas
          ultricies mi eget mauris pharetra.
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full w-[13rem] hover:bg-orange-600 transition">
          Know More
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <img className="" src={girl} alt="person"/>
      </div>
    </div>
  );
};

export default Banner;
