import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import image1 from '../assets/course.jpg'
const Back = () => {
  return (
    <div className="flex flex-col flex-wrap h-full p-3 backdrop-blur-sm"
    style={{backgroundImage:`url(${image1})`}}
    id="back"
    >
      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-end gap-3 bg-transparent flex-around">
        <h1 className="m-5 font-bold text-white">+44-654-321-9870/ ezecodeacademy@gmail.com</h1>
        <ul className="flex flex-wrap justify-around gap-3 m-3">
          <li>
            <i className="text-3xl text-blue-600 bi bi-facebook hover:text-blue-800"></i>
          </li>
          <li>
            {" "}
            <i className="text-3xl text-pink-600 bi bi-instagram hover:text-pink-800"></i>
          </li>
          <li>
            {" "}
            <i className="text-3xl text-blue-400 bi bi-twitter hover:text-blue-600"></i>
          </li>
          <li>
            <i className="text-3xl text-green-500 bi bi-whatsapp hover:text-green-700"></i>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap items-end justify-end gap-10 text-xl">
        <ul className="flex flex-wrap items-start justify-start gap-8 p-5 m-5 font-bold text-white">
          <li className="text-xl transition-transform cursor-pointer hover:scale-110 ">Rooms</li>
          <li className="text-xl transition-transform cursor-pointer hover:scale-110">Facilities</li>
          <li className="text-xl transition-transform cursor-pointer hover:scale-110">Contact</li>
        </ul>
        {/* <div className="flex justify-end gap-2 p-5 m-5 font-bold text-white">
          <h1>Explore</h1>  
        </div> */}
        <div className="flex-wrap items-end justify-end p-2 m-5 font-bold text-white bg-orange-400 border-2 cursor-pointer rounded-xl hover:bg-white hover:text-black">
          <button className="">BOOK NOW</button>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 mt-5">
        <h1 className="p-5 text-xl font-bold text-white">
        Come and Learn , Go n Server
        </h1>
        <button className="p-3 text-xl text-black text-white bg-transparent border-2 border-orange-400 rounded-md hover:scale-110">View Courses</button>
      </div>
    </div>
  );
};

export default Back;
