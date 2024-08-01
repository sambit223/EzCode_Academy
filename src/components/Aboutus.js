import React from "react";
import sambith from "../assets/sambith.jpg";
import sanjay from "../assets/sanjay.png";
import { FaGraduationCap } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 mt-4 justify-between bg-white p-5">
      {/* About Main Section */}
      <div className="flex flex-col gap-5 w-full lg:w-[38rem] rounded-xl shadow-lg p-4 transition-transform hover:scale-110 duration-500">
        {/* Teacher div */}
        <div className="text-4xl font-bold text-indigo-700 leading-snug">
          <div className="flex gap-3">
            <p className="text-orange-400 text-xl font-normal leading-10">
              ABOUT TEACHERS
            </p>
            <FaGraduationCap className="text-orange-600" />
          </div>
          Please welcome your course instructors,{" "}
          <span className="text-orange-400 font-bold">Sambit Tripathy</span>{" "}
          <p className="text-indigo-700 inline">and</p>{" "}
          <span className="text-orange-400 font-bold">Sanjay Kandula</span>.
        </div>

        {/* Description Section */}
        <div className="text-black font-normal">
          Faucibus purus in massa tempor nec feugiat. Ut aliquam purus sit amet
          luctus venenatis lectus magna fringilla. Ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at. Ultrices neque ornare aenean
          euismod elementum nisi quis.
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
      <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-500">
        <img src={sambith} alt="Sambith Tripathy" className="rounded-full" />
        <div className="flex-col text-center mt-3">
          <h1 className="font-bold text-xl">Sambith Tripathy</h1>
          <p className="font-semibold">MERN Stack Developer</p>
        </div>
      </div>

      <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-500">
        <img src={sanjay} alt="Sanjay Kandula" className="rounded-full" />
        <div className="flex flex-col text-center mt-3">
          <h1 className="font-bold text-xl">Sanjay Kandula</h1>
          <p className="font-semibold">MERN Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
