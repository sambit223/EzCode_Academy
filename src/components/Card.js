import React from "react";

const Card = ({ image, date, course, price, duration, max }) => {
  return (
    <div className="mb-8 transition-transform hover:scale-110 flex flex-col  p-5 gap-5 m-5 w-[18rem] h-[27rem] rounded-xl shadow-lg  duration-500 border-2 border-indigo-700 leading-loose">
      <div>
        {/* image section  */}
        <img
          src={image}
          alt="Sanjay Kandula"
          className=" h-[10rem]"
        />
      </div>

      <div className="flex gap-2 leading-loose">
        <h1 className="flex flex-col text-xs font-semibold">{date}</h1>
        <h1 className="flex flex-col text-xs font-semibold">{duration}</h1>
      </div>

      <div>
        <h1 className="flex flex-col text-xs font-semibold">{max}</h1>
      </div>

      <div>
        <p className="text-xl font-bold text-start hover:text-indigo-700">
          {course}
        </p>
      </div>

      <div className="w-full h-1 font-semibold bg-gray-400 shadow-lg"></div>

      <div className="flex justify-between">
        <h1 className="text-xl font-bold text-orange-400">{price}</h1>
        <button className="w-[10rem] ease-in-out hover:scale-110 bg-orange-400 border hover:bg-blue-950 hover:border-blue-950 rounded-full hover:text-white font-bold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Card;
