import React from 'react'
import Card from './Card'
import react from "../assets/react.jpeg"
import fullstack from "../assets/fullstack.jpeg"
import backend from "../assets/node.jpeg"
import basics from "../assets/basics.jpeg"

const Courses = () => {
  return (
    <><div className="flex justify-start gap-2 m-4" id="courses">
    <h1 className="text-4xl font-bold text-gray-600">Our Course </h1>
    <h1 className="text-4xl font-bold text-orange-400"> Categories</h1>
  </div>
    <div className="flex flex-wrap items-center justify-start">
        <Card
          image={basics}
          date="August 1, 2024"
          duration="3 Months"
          max="40-50 Students Max"
          course="Basics of Coding with Advanced DSA"
          price="only at ₹2000 per month"
        />
        <Card
          image={react}
          date="August 5, 2024"
          duration="3.5 Months"
          max="40-50 Students Max"
          course="Basics of Coding with FrontEnd Development"
          price="only at ₹1500 per month"
        />
        <Card
          image={fullstack}
          date="August 5, 2024"
          duration="6 Months"
          max="40-50 Students Max"
          course="Basics of Coding with Full stack Development"
          price="only at ₹2000 per month"
        />
        <Card
          image={backend}
          date="August 5, 2024"
          duration="6 Months"
          max="40-50 Students Max"
          course="Basics of Coding with Backend Development"
          price="only at ₹2000 per month"
        />
      </div>
      </>
  )
}

export default Courses