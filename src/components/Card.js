import React from "react";

const Card = ({ image, date, course, price, duration, max }) => {
  const handleClick = () => {
    if (window.location.hash === '#contact') {
      window.location.hash = '';
      setTimeout(() => {
        window.location.hash = '#contact';
      }, 0);
    } else {
      window.location.hash = '#contact';
    }
  };
  
  return (
    <div className="mb-8 transition-transform hover:scale-110 flex flex-col p-5 gap-5 m-5 w-[16rem] h-[28rem] rounded-xl shadow-lg duration-1000 border shadow-orange-100 leading-loose">
      <div>
        {/* image section */}
        <img
          src={image}
          alt="course"
          className="h-[8rem] w-[16rem] border shadow-md shadow-orange-100"
        />
      </div>
      <div className="flex justify-start">
        <h1 className="text-xs font-semibold text-gray-600">{date}</h1>
        <h1 className="text-xs font-semibold text-gray-600">Duration: {duration}</h1>
      </div>
      <div>
        <h1 className="text-xs font-semibold text-gray-600">{max}</h1>
      </div>
      <div>
        <p className="text-sm font-bold text-gray-600">{course}</p>
      </div>
      <div className="w-full h-1 font-semibold bg-gray-400 shadow-lg"></div>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-base font-bold text-gray-600">
          only at <span className="text-xl font-bold text-blue-800">{price}</span> per month
        </h1>
        <button
          onClick={handleClick}
          className="w-[10rem] text-white ease-in-out hover:scale-110 bg-orange-400 border hover:bg-white hover:border-orange-400 rounded-full hover:text-black py-1"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Card;
