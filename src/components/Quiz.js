import React from "react";
import check from "../assets/check.png";
const Quiz = () => {
  return (
    <div className="flex flex-col items-center w-full h-full gap-10 p-5 text-black border-2 border-red-100 shadow-xl bg-blue-50">
      <div>
        <h1 className="text-3xl font-semibold">ADVANCED</h1>
      </div>
      <div>
        <h1 className="text-6xl font-bold">QUIZZES</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl ">
          With Advanced Quizzes, you can create interesting quizzes for
          interactive student learning.
        </p>
        <p className="text-xl ">
          Support their learning and create different question types for them.
        </p>
      </div>
      <div className="flex flex-col gap-10 p-2 text-xl shadow-lg border-5">

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex">
            <img src={check} className="h-[2rem] w-[2rem]" />
            <h1 className="text-lg">Create categories with Question Bank</h1>
          </div>

          <div className="flex">
            <img src={check} className="h-[2rem] w-[2rem]" />
            <h1 className="text-lg">Create categories with Question Bank</h1>
          </div>

          <div className="flex">
            <img src={check} className="h-[2rem] w-[2rem]" />
            <h1 className="text-lg">Create categories with Question Bank</h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="flex">
            <img src={check} className="h-[2rem] w-[2rem]" />
            <h1 className="text-lg">Create categories with Question Bank</h1>
          </div>

          <div className="flex">
            <img src={check} className="h-[2rem] w-[2rem]" />
            <h1 className="text-lg">Create categories with Question Bank</h1>
          </div>

          <div className="flex">
            <img src={check} className="h-[2rem] w-[2rem]" />
            <h1 className="text-lg">Create categories with Question Bank</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
