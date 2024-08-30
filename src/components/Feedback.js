import React, { useState, useEffect } from 'react';
import FeedbackCard from './FeedbackCard';
import './Feedback.css'; // Assuming you have a CSS file for custom styles

const Feedback = () => {
  const [animatedCards, setAnimatedCards] = useState([]);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [fade, setFade] = useState(true); // For controlling fade-in effect
  const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200'];

  const feedbackData = [
    { name: 'Siriprreddy Pratyusha', feedback: 'We improved ourselves and had fun learning, all the best to the team' },
    { name: 'Anitha Chakala', feedback: 'Great session, had fun learning' },
    { name: 'Harish S', feedback: 'No suggestions, good experience' },
    { name: 'Sushmita Duvvi', feedback: 'Improved a lot and feeling confident on web development' },
    { name: 'Rahul Mallik', feedback: 'Amazing experience, learned a lot!' },
    { name: 'Pooja Shah', feedback: 'Very informative and engaging sessions.' },
    { name: 'Arjun', feedback: 'Loved the hands-on approach to learning.' },
    { name: 'Kavya R', feedback: 'Great mentors and an excellent learning environment.' },
    { name: 'Vikram S', feedback: 'The best training I have ever attended.' },
    { name: 'Nisha P', feedback: 'Interactive and practical, highly recommended.' },
    { name: 'Ravi T', feedback: 'Well-organized and insightful sessions.' },
    { name: 'Monika Wadhwani', feedback: 'Gained a lot of confidence in my skills.' },
    { name: 'Deepak Kumar Rath', feedback: 'Supportive and knowledgeable instructors.' },
    { name: 'Swathi Patra', feedback: 'Comprehensive and easy to understand.' },
    { name: 'Ajay B', feedback: 'Highly effective teaching methods.' },
    { name: 'Priya D', feedback: 'Engaging content and practical applications.' },
    { name: 'Santosh M', feedback: 'A must for anyone looking to improve their skills.' },
    { name: 'Ritika S', feedback: 'Thoroughly enjoyed the learning process.' },
    { name: 'Sandeep Krishna', feedback: 'Excellent pacing and content delivery.' },
    { name: 'Anusha C', feedback: 'Practical projects that mimic real-world scenarios.' },
    { name: 'Kiran Kumar', feedback: 'Great emphasis on practical learning.' },
    { name: 'Lavanya', feedback: 'Supportive learning environment.' },
    { name: 'Rohan Padhi', feedback: 'A very enriching experience.' },
    { name: 'Neha Gupta', feedback: 'Well-structured and comprehensive.' },
    { name: 'Sameer Kumar', feedback: 'Real-world projects that boosted my confidence.' },
    { name: 'Madhuri Panda', feedback: 'Engaging and interactive sessions.' },
    { name: 'Vishal', feedback: 'Gained valuable insights and skills.' },
    { name: 'Tarun G', feedback: 'Well worth the time and effort.' },
    { name: 'Meghana A', feedback: 'Instructors are very approachable and helpful.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentFeedbackIndex(prevIndex => (prevIndex + 4) % feedbackData.length); // Rotate in groups of 4
        setFade(true); // Start fade-in
      }, 900); // Time it takes to fade out (should match CSS transition time)
    }, 7000); // 4 seconds

    return () => clearInterval(interval);
  }, [feedbackData.length]);

  const handleMouseEnter = () => {
    setAnimatedCards([]); // Reset animation state

    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setAnimatedCards(prev => [...prev, (currentFeedbackIndex + i) % feedbackData.length]);
      }, i * 300); // Adjust the delay (300ms) as needed
    }
  };

  return (
    <div className='p-4 mt-4 bg-purple-50' id="testimony">
      <h1 className='m-4 text-3xl font-bold text-center text-gray-600'>What our Students say about us</h1>
      <div className={`flex flex-wrap items-center justify-center h-auto gap-8 p-4 m-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {feedbackData.slice(currentFeedbackIndex, currentFeedbackIndex + 4).map((data, i) => (
          <FeedbackCard
            key={i}
            handleMouseEnter={handleMouseEnter}
            className={`${colors[i % colors.length]} ${animatedCards.includes((currentFeedbackIndex + i) % feedbackData.length) ? 'animate-pendulum' : ''}`}
            text={data.feedback}
            name={data.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
