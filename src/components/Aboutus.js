import React from "react";
import sambith from "../assets/sambit.jpeg";
import sanjay from "../assets/sanjay.jpeg";
import { FaGraduationCap } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
      <div className="flex justify-center m-8"></div>
      <div className="flex flex-col justify-between gap-5 p-5 mt-4 bg-white lg:flex-row">
        {/* About Main Section */}
        <div className="flex flex-col gap-5 w-full lg:w-[35rem] rounded-xl shadow-lg p-4 transition-transform hover:scale-110 duration-1000">
          {/* Teacher div */}
          <div className="text-4xl font-bold leading-snug text-indigo-700">
            <div className="flex gap-3">
              <p className="text-xl font-normal leading-10 text-orange-400">
                How We Learn ?
              </p>
              <FaGraduationCap className="text-orange-600" />
            </div>
          </div>

          {/* Description Section */}
          <div className="font-semibold text-black">
            Our learning approach is designed to be immersive and practical,
            ensuring that you gain real-world skills and knowledge. Here's how
            we do it:
          </div>

          <ol className="pl-5 space-y-2 font-normal list-disc">
            <li>Hands-on project-based approach</li>
            <li>Top content co-developer with industry leaders</li>
            <li>Global mentor network with 700+ domain experts</li>
          </ol>

          {/* Button Section */}
          <div className="flex justify-center gap-5 m-4">
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
          <div className="flex-col m-4 text-center">
            <h1 className="text-xl font-bold">Sambit Tripathy </h1>
            <span className="text-sm font-semibold">3.5+ years of Industry experience</span>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sanjay} alt="Sanjay Kandula" className="rounded-2xl" />
          <div className="flex flex-col mt-3 text-center">
          <h1 className="text-xl font-bold">Sanjay Kandula</h1>
            <span className="text-sm font-semibold">1.5+ years of Industry experience</span>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
