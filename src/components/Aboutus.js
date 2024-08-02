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
        <div className="flex flex-col gap-5 w-full lg:w-[35rem] rounded-xl shadow-orange-100 shadow-lg p-4 transition-transform hover:scale-110 duration-1000">
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
            <li>Streak-based learning to keep you motivated and on track</li>
            <li>Unlimited mock interviews to prepare you thoroughly</li>
            <li>Resume-building help to showcase your skills effectively</li>
            <li>LinkedIn guidance to enhance your professional profile</li>
          </ol>

          {/* Button Section */}
          <div className="flex justify-center gap-5 m-4">
            
            
          </div>
        </div>

        {/* Pictures of Instructors */}
        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-orange-100 shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sambith} alt="Sambith Tripathy" className="rounded-2xl" />
          <div className="flex flex-col gap-2 m-4 text-center">
            <h1 className="text-xl font-bold text-gray-600">Sambit Tripathy </h1>
            <span className="text-sm font-semibold">3.5+ years of Industry experience</span>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] shadow-orange-100 rounded-xl shadow-lg transition-transform hover:scale-110 duration-1000">
          <img src={sanjay} alt="Sanjay Kandula" className="rounded-2xl" />
          <div className="flex flex-col gap-2 mt-3 text-center">
          <h1 className="text-xl font-bold text-gray-600">Sanjay Kandula</h1>
            <span className="text-sm font-semibold">3+ years of Industry experience</span>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
