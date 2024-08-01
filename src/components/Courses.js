import React from 'react'
import Card from './Card'
import image1 from "../assets/web-design.svg";
import image2 from "../assets/app-development.svg";

const Courses = () => {
  return (
    <><div className="flex justify-start m-4 gap-2">
    <h1 className="text-4xl font-bold text-indigo-700">Our Course </h1>
    <h1 className="text-4xl font-bold text-orange-400"> Categories</h1>
  </div>
    <div className="flex flex-wrap justify-start items-center">
        <Card
          image={image1}
          date="August 1, 2024"
          duration="3 Months"
          max="40-50 Students Max"
          course="Basics of Coding"
          price="$299"
        />
        <Card
          image={image2}
          date="August 5, 2024"
          duration="6 Months"
          max="40-50 Students Max"
          course="HTML/CSS"
          price="$499"
        />
        <Card
          image={image2}
          date="August 5, 2024"
          duration="6 Months"
          max="40-50 Students Max"
          course="Advanced JavaScript"
          price="$499"
        />
        <Card
          image={image2}
          date="August 5, 2024"
          duration="6 Months"
          max="40-50 Students Max"
          course="React Js"
          price="$499"
        />
      </div>
      </>
  )
}

export default Courses