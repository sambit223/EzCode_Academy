import React from "react";
import image1 from "../assets/contact.png";

const Form = () => {
  const Courses = [
    "Coding Basics(Java)",
    "Coding Basics(Python)",
    "DSA Beginner",
    "DSA Intermediate",
    "DSA Advanced",
    "Frontend (React)",
    "Backend (Node + Express)",
    "MERN (Fullstack)",
    "Fullstack(Php + SQL)",
  ];

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-5 bg-blue-50"
      id="contact"
    >
      <div className="w-[30rem] p-6 m-5 leading-loose">
        <div className="">
          <h1 className="text-4xl font-bold text-gray-600">
            Request A{" "}
            <span className="text-4xl text-orange-400">Call Back</span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-black text-gray-500">
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
            className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm focus:border-orange-400"
            required
          />
          <input
            type="text"
            placeholder="Email Id*"
            className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm outline-none focus:border-orange-400"
            required
          />
        </div>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full p-3 bg-white border rounded-lg shadow-sm outline-none focus:border-orange-400"
            required
          />
        </div>
        <div className="mt-5">
          <textarea
            type="text"
            placeholder="Message"
            className="w-full p-3 bg-white border rounded-lg shadow-sm outline-none focus:border-orange-400"
          ></textarea>
        </div>
        <div className="mt-5">
          <select className="w-full h-full p-4 rounded-lg shadow-sm focus:border-orange-400 outline-none bg-white border">
            <option value="" disabled selected style={{ color: 'gray' }}>
              Choose a Course
            </option>
            {Courses.map((elem, index) => (
              <option key={index} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          <button className="transition-transform duration-700 w-[10rem] ease-in-out hover:scale-110 bg-orange-400 hover:bg-blue-950 border rounded-full p-3 text-white font-bold">
            Send Request
          </button>
        </div>
      </div>

      <div>
        <img src="" alt="ddada"/>
      </div>
    </div>
  );
};

export default Form;
