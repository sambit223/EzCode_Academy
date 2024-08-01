import React from "react";
import image1 from "../assets/team.svg";
const Form = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-center bg-blue-50">
      <div className="w-[30rem] p-6  m-5">
        <img src={image1} alt="Conatct" className="h-[20rem] w-full" />
      </div>


      <div className="w-[30rem] p-6  m-5 leading-loose">
        <div className="">
          <h1 className="text-4xl text-indigo-700 font-bold">
            Request A{" "}
            <span className="text-4xl text-orange-400">Call Back</span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-gray-500 text-black">
            Et netus et malesuada fames ac turpis. Duis tristique nibh sit amet
            commodo nullam. Curabitur a porta ligula, eget interdum ipsum.
            Mauris blandit urna. Proin consequat rhoncus dui, ut tincidunt
            nulla.
          </p>
        </div>
        <div className="flex gap-5 mt-5">
          <input
            type="text"
            placeholder="Name*"
            className="border  focus:border-orange-400 w-full p-3  bg-white shadow-sm rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Email Id*"
            className="border  focus:border-orange-400 w-full p-3  bg-white shadow-sm rounded-lg"
            required
          />
        </div>
        <div className="mt-5">
        <input
            type="text"
            placeholder="Phone Number*"
            className="border  focus:border-orange-400 w-full p-3  bg-white shadow-sm rounded-lg"
            required
          />
        </div>
        <div className="mt-5">
        <textarea
            type="text"
            placeholder="Message"
            className="border  focus:border-orange-400 w-full p-3  bg-white shadow-sm rounded-lg"
            
          ></textarea>

        </div>
        <div className="mt-5">
        <button className="transition-transform duration-700 w-[10rem] ease-in-out hover:scale-110 bg-orange-400 hover:bg-blue-950 border  rounded-full p-3 text-white font-bold">
         Send Request
        </button>


        </div>
      </div>
    </div>
  );
};

export default Form;
