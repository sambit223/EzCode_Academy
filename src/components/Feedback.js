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
    <div className='p-4 mt-4 bg-purple-50' id="testimony">
      <h1 className='m-4 text-3xl font-bold text-center text-gray-600'>What our Students say about us</h1>
      <div className='flex flex-wrap items-center justify-start h-auto gap-8 p-4 m-4'>
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
