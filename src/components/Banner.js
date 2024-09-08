import React from "react";
import "./Animation/Animation.css";
import girl from "../assets/girl.png.jpeg";

const Banner = () => {
  const handleClick = () => {
    if (window.location.hash === "#courses") {
      window.location.hash = "";
      setTimeout(() => {
        window.location.hash = "#courses";
      }, 0);
    } else {
      window.location.hash = "#courses";
    }
  };
  return (
    <div className="p-8 flex flex-col md:flex-row items-center justify-between relative bg-gray-50">
      <div className="flex-1 text-center md:text-left md:pr-8">
        <div className="">
          <div className="step-indicator text-sm">
            <div className="step bg-orange-400 text-white shadow-md shadow-orange-100">
              Step 1: Explore Cutting-Edge Technologies and Industry Trends
            </div>
            <div className="step shadow-md shadow-orange-100">
              Step 2: Master In-Demand Skills Through Hands-On Projects
            </div>
            <div className="step bg-orange-400 text-white shadow-md shadow-orange-100">
              Step 3: Ace Mock Interviews and Earn Industry-Recognized
              Certifications
            </div>
            <div className="step shadow-md shadow-orange-100">
              Step 4: Launch Your Career with Top Tech Companies
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-600 mb-4">
          Discover <span className="text-orange-500">Your Ideal Courses</span>
        </h1>
        <p className="text-gray-700 mb-4 font-semibold">
          We offer courses on the latest and most trending tech stacks. Our
          approach to teaching not only imparts knowledge but also equips you
          with the skills needed to excel in your career. Experience
          personalized learning, hands-on projects, and real-world applications
          that make a significant impact on your professional journey.
        </p>
        <p className="text-gray-700 mb-4 font-semibold">
          Start your transformation today and see how our courses can propel
          your career to new heights.
        </p>
        <button
          onClick={handleClick}
          className="bg-orange-500 text-white py-2 px-4 rounded-full w-[13rem] hover:bg-orange-600 transition"
        >
          Know More
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <img className="" src={girl} alt="person" />
      </div>
    </div>
  );
};

export default Banner;
