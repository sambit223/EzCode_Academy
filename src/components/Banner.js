import React from "react";
import "./Animation/Animation.css";
import personcoding from "../assets/personcoding.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-purple-50 to-purple-100 fade-in">
      <div className="md:w-1/2">
        {/* Step Indicator */}
        <div className="flex flex-col items-start mb-8">
            <div className="flex gap-1 mb-6 mt-2 ">
                <div className="flex items-center gap-1 text-center ">
                    <div className="transition-transform duration-500 hover:scale-125 bg-orange-400 text-white font-semibold rounded-full p-2">Step-1 : Discover</div>
                    <div className="h-[3px] w-[4rem] bg-orange-400"></div>
                </div>
                <div className="flex items-center gap-1 text-center">
                    <div className="transition-transform duration-500 hover:scale-125 bg-gray-400 text-white font-semibold rounded-full p-2">Step-2 : learn</div>
                    <div className="h-[3px] w-[4rem] bg-gray-400"></div>
                </div>
                <div className="flex items-center gap-1 text-center">
                    <div className="transition-transform duration-500 hover:scale-125 bg-gray-400 text-white font-semibold rounded-full p-2">Step-3 : mock-Interviews</div>
                    <div className="h-[3px] w-[4rem] bg-gray-400"></div>
                </div>
                <div className="flex items-center gap-1 text-center">
                    <div className="transition-transform duration-500 hover:scale-125 bg-gray-400 text-white font-semibold rounded-full p-2">Step-4 : Get certified</div>
                </div>
            </div>
          <h1 className="text-5xl font-bold text-purple-800 mb-4">
            Discover <span className="text-orange-400">Your Ideal Path</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Mus mauris
            vitae ultricies leo integer malesuada nunc vel risus. Tellus id
            interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas
            ultricies mi eget mauris pharetra.
          </p>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-full">
            Know More
          </button>
        </div>
      </div>
      <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="animation-wrapper">
          <div className="animated-div">
            <img
              src={personcoding}
              className="rounded-full w-full h-auto max-w-md"
              alt="Person studying"
            />
          </div>
          <div className="animated-div" style={{ marginTop: '-100px' }}>
            {/* Optional: You can add additional content or styles here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
