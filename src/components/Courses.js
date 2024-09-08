import React, { useState } from 'react';
import Card from './Card';
import react from "../assets/react.jpeg";
import fullstack from "../assets/fullstack.jpeg";
import backend from "../assets/node.jpeg";
import basics from "../assets/basics.jpeg";
import datascience from "../assets/datascience.jpg"; // Add Data Science image
import uiux from "../assets/uiux.jpg"; // Add UI/UX image

const Courses = () => {
  const [page, setPage] = useState(0);

  const courses = [
    {
      image: basics,
      duration: "3 Months",
      max: "Limited to 40 Students",
      course: "Fundamentals of Coding with Advanced DSA",
      price: "₹2000",
    },
    {
      image: react,
      duration: "3.5 Months",
      max: "Limited to 40 Students",
      course: "Frontend Mastery with React & Advanced JavaScript",
      price: "₹3000",
    },
    {
      image: fullstack,
      duration: "6 Months",
      max: "Limited to 40 Students",
      course: "Full-Stack Developer Bootcamp (MERN)",
      price: "₹4000",
    },
    {
      image: backend,
      duration: "3 Months",
      max: "Limited to 40 Students",
      course: "Backend Development with Node.js & Databases",
      price: "₹3000",
    },
    {
      image: datascience,
      duration: "3 Months",
      max: "Limited to 40 Students",
      course: "Data Science and Machine Learning Masterclass",
      price: "₹3000",
    },
    {
      image: uiux,
      duration: "2.5 Months",
      max: "Limited to 30 Students",
      course: "UI/UX Design with Prototyping and Research",
      price: "₹2500",
    },
  ];

  const handleNext = () => setPage(page === 0 ? 1 : 0);
  const handlePrev = () => setPage(page === 1 ? 0 : 1);

  const currentCourses = page === 0 ? courses.slice(0, 4) : courses.slice(4);

  return (
    <>
      <div className="flex justify-start gap-2 m-4" id="courses">
        <h1 className="text-4xl font-bold text-gray-600">Our Course</h1>
        <h1 className="text-4xl font-bold text-orange-400"> Categories</h1>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Prev Arrow */}
        {page === 1 && (
          <div
            className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-transparent border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-100"
            onClick={handlePrev}
          >
            <span className="text-4xl text-gray-500">&lt;</span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {currentCourses.map((course, index) => (
            <Card
              key={index}
              image={course.image}
              duration={course.duration}
              max={course.max}
              course={course.course}
              price={course.price}
            />
          ))}
        </div>

        {/* Next Arrow */}
        {page === 0 && (
          <div
            className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-transparent border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-100"
            onClick={handleNext}
          >
            <span className="text-4xl text-gray-500">&gt;</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;
