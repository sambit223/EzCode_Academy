import React from "react";
import sambith from "../assets/sambit.jpeg";
import sanjay from "../assets/sanjay.jpeg";
import { FaGraduationCap } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
      <div className="flex justify-center m-8"></div>
      <div className="flex flex-col lg:flex-row gap-5 mt-4 justify-between bg-white p-5">
        {/* About Main Section */}
        <div className="flex flex-col gap-5 w-full lg:w-[35rem] rounded-xl shadow-lg p-4 transition-transform hover:scale-110 duration-1000">
          {/* Teacher div */}
          <div className="text-4xl font-bold text-indigo-700 leading-snug">
            <div className="flex gap-3">
              <p className="text-orange-400 text-xl font-normal leading-10">
                How We Learn ?
              </p>
              <FaGraduationCap className="text-orange-600" />
            </div>
          </div>

          {/* Description Section */}
          <div className="text-black font-semibold">
            Our learning approach is designed to be immersive and practical,
            ensuring that you gain real-world skills and knowledge. Here's how
            we do it:
          </div>

          <ol className="list-disc pl-5 font-normal space-y-2">
            <li>Hands-on project-based approach</li>
            <li>Top content co-developer with industry leaders</li>
            <li>Global mentor network with 700+ domain experts</li>
          </ol>

          {/* Button Section */}
          <div className="flex gap-5 justify-center m-4">
            <button className="transition-transform duration-700 w-full lg:w-[10rem] ease-in-out hover:scale-110 bg-orange-400 hover:bg-white border hover:border-orange-500 rounded-full p-3">
              Learn More
            </button>
            <button className="transition-transform duration-700 w-full lg:w-[10rem] ease-in-out hover:scale-110 bg-orange-400 hover:bg-white border hover:border-orange-500 rounded-full p-3">
              Contact Us
            </button>
          </div>
        </div>

        {/* Pictures of Instructors */}
        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sambith} alt="Sambith Tripathy" className="rounded-2xl" />
          <div className="flex-col text-center m-4">
            <h1 className="font-bold text-xl">Sambit Tripathy </h1>
            <span className="text-sm font-semibold">3.5+ years of Industry experience</span>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sanjay} alt="Sanjay Kandula" className="rounded-2xl" />
          <div className="flex flex-col text-center mt-3">
          <h1 className="font-bold text-xl">Sanjay Kandula</h1>
            <span className="text-sm font-semibold">1.5+ years of Industry experience</span>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
