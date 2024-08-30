import React from "react";
import sambith from "../assets/sambit.jpeg";
import sanjay from "../assets/sanjay.jpeg";
import { FaGraduationCap } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
      <div className="flex justify-center m-8"></div>
      <div className="flex flex-col justify-between gap-5 p-5 mt-4 bg-white lg:flex-row" id="about">
        {/* About Main Section */}
        <div className="flex flex-col gap-5 w-full lg:w-[35rem] rounded-xl shadow-orange-100 shadow-lg p-4 transition-transform hover:scale-110 duration-1000">
          {/* Training Overview */}
          <div className="text-4xl font-bold leading-snug text-indigo-700">
            <div className="flex gap-3 items-center">
              <p className="text-xl font-normal leading-10 text-orange-400">
                Our Training Approach
              </p>
              <FaGraduationCap className="text-orange-600" />
            </div>
          </div>

          {/* Description Section */}
          <div className="font-semibold text-black">
            Our training is designed to be immersive and practical, equipping you with real-world skills and experience. Here’s how we ensure your success:
          </div>

          <ol className="pl-5 space-y-2 font-normal list-disc">
            <li>Hands-on, project-based learning for real-world application.</li>
            <li>Streak-based learning to maintain momentum and consistency.</li>
            <li>Unlimited mock interviews for thorough preparation.</li>
            <li>Professional resume-building assistance to effectively showcase your skills.</li>
            <li>LinkedIn guidance to optimize your professional presence.</li>
          </ol>
        </div>

        {/* Profiles of Instructors */}
        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-orange-100 shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sambith} alt="Sambit Tripathy" className="rounded-2xl" />
          <div className="flex flex-col gap-2 m-4 text-center">
            <h1 className="text-xl font-bold text-gray-600">Sambit Tripathy</h1>
            <span className="text-sm font-semibold text-gray-500">Founder & Lead Instructor</span>
            <p className="font-semibold">Senior Software Engineer with 3+ years of industry experience.</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-orange-100 shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sanjay} alt="Sanjay Kandula" className="rounded-2xl" />
          <div className="flex flex-col gap-2 mt-3 text-center">
            <h1 className="text-xl font-bold text-gray-600">Sanjay Kandula</h1>
            <span className="text-sm font-semibold text-gray-500">Co-founder & Lead Instructor</span>
            <p className="font-semibold">Full Stack Developer with 3+ years of industry experience.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
