import React from "react";
import sambith from "../assets/sambith.jpg";
import sanjay from "../assets/sanjay.png";
import { FaGraduationCap } from "react-icons/fa";

const Aboutus = () => {
  return (
    <>
    <div className="flex justify-center m-8 " id="about">
      
    </div>
    <div className="flex flex-col justify-between gap-5 p-5 mt-4 bg-white lg:flex-row" id="about">
      {/* About Main Section */}
      <div className="flex flex-col gap-5 w-full lg:w-[35rem] rounded-xl shadow-lg p-4 transition-transform hover:scale-110 duration-500">
        {/* Teacher div */}
        <div className="text-4xl font-bold leading-snug text-indigo-700">
          <div className="flex gap-3">
            <p className="text-xl font-normal leading-10 text-orange-400">
              ABOUT TEACHERS
            </p>
            <FaGraduationCap className="text-orange-600" />
          </div>
          Please welcome your course instructors,{" "}
          <span className="font-bold text-orange-400">Sambit Tripathy</span>{" "}
          <p className="inline text-indigo-700">and</p>{" "}
          <span className="font-bold text-orange-400">Sanjay Kandula</span>.
        </div>

        {/* Description Section */}
        <div className="font-normal text-black">
          Faucibus purus in massa tempor nec feugiat. Ut aliquam purus sit amet
          luctus venenatis lectus magna fringilla. Ullamcorper dignissim cras
          tincidunt lobortis feugiat vivamus at. Ultrices neque ornare aenean
          euismod elementum nisi quis.
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
      <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-500">
        <img src={sambith} alt="Sambith Tripathy" className="rounded-full" />
        <div className="flex-col mt-3 text-center">
          <h1 className="text-xl font-bold">Sambith Tripathy</h1>
          <p className="font-semibold">MERN Stack Developer</p>
        </div>
      </div>

      <div className="flex flex-col items-center p-2 w-full lg:w-[20rem] rounded-xl shadow-lg transition-transform hover:scale-110 duration-500">
        <img src={sanjay} alt="Sanjay Kandula" className="rounded-full" />
        <div className="flex flex-col mt-3 text-center">
          <h1 className="text-xl font-bold">Sanjay Kandula</h1>
          <p className="font-semibold">MERN Stack Developer</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Aboutus;
