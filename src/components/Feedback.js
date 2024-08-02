import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  const [animatedCards, setAnimatedCards] = useState([]);
  const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200'];

  const feedbackData = [
    { name: 'Siriprreddy Pratyusha', feedback: 'We improved ourselves and had fun learning, all the best to the team' },
    { name: 'Anitha Chakala', feedback: 'Great session, had fun learning' },
    { name: 'Harish S', feedback: 'No suggestions, good experience' },
    { name: 'Murali Manohar', feedback: 'Improved a lot and feeling confident on web development' },
  ];

  const handleMouseEnter = () => {
    setAnimatedCards([]); // Reset animation state

    feedbackData.forEach((_, i) => {
      setTimeout(() => {
        setAnimatedCards(prev => [...prev, i]);
      }, i * 300); // Adjust the delay (300ms) as needed
    });
  };

  return (
    <div className='bg-purple-50 p-4 mt-4'>
      <h1 className='text-3xl text-center font-bold m-4 text-gray-600'>What our Students say about us</h1>
      <div className='h-auto flex justify-start items-center flex-wrap p-4 m-4 gap-8'>
        {feedbackData.map((data, i) => (
          <FeedbackCard
            key={i}
            handleMouseEnter={handleMouseEnter}
            className={`${colors[i % colors.length]} ${animatedCards.includes(i) ? 'animate-pendulum' : ''}`}
            text={data.feedback}
            name={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
