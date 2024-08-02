import React from 'react';
import './Animation/Feedback.css'

const FeedbackCard = ({ text = "Feedback", name , className, handleMouseEnter }) => {
  return (
    <div onMouseOut={handleMouseEnter} className={`feedback-card flex relative flex-col justify-center p-4 gap-2 items-center m-4 border border-white shadow-md shadow-orange-200 h-[15rem] w-[15rem] ${className}`}>
      <div className='h-[1rem] w-[1rem] rounded-full bg-purple-800 shadow-md mt-1 absolute top-0 left-1/5 shadow-black'></div>
      <h1 className='text-xl'>{text}</h1>
      <div className='flex justify-end text-xs'>
        ~ {name}
      </div>
    </div>
  );
};

export default FeedbackCard;
