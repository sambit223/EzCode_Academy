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
        <h1 className="font-semibold text-xs flex flex-col">{date}</h1>
        <h1 className="font-semibold text-xs flex flex-col">{duration}</h1>
      </div>

      <div>
        <h1 className="font-semibold text-xs flex flex-col">{max}</h1>
      </div>

      <div>
        <p className="font-bold text-xl text-start hover:text-indigo-700">
          {course}
        </p>
      </div>

      <div className="w-full shadow-lg font-semibold h-1 bg-gray-400"></div>

      <div className="flex  justify-between">
        <h1 className="text-orange-400 font-bold text-xl">{price}</h1>
        <button className="w-[10rem] ease-in-out hover:scale-110 bg-orange-400 hover:bg-white border hover:border-orange-500 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Card;
