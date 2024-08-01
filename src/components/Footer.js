import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/4 px-4 mb-6">
          <h1 className="text-2xl font-bold text-orange-400">EZ<span className="text-white">CodeAcademy</span></h1>
          <p className="mt-4">
            Integer venenatis consequat elit. Curabitur eget laoreet nibh. Cras euismod,
            tellus vitae luctus ultricies, lacus erat sagittis nulla, id ornare velit ligula
            congue etiam rhoncus urna.
          </p>
          <button className="mt-4 bg-orange-400 text-white font-bold px-4 py-2 rounded">Get Started Now &rarr;</button>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-6">
          <h2 className="text-xl font-bold text-orange-400">Contact Us</h2>
          <p>Rotonda Clodovea, Incrocio Marchetti, 29001.</p>
          <p>+00 12 34 56 78 9</p>
          <p>+000 1234 56789</p>
          <p>contact@example.com</p>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-6">
          <h2 className="text-xl font-bold text-orange-400">Explore Courses</h2>
          <ul>
            <li>Mathematics</li>
            <li>Modern Art</li>
            <li>Management</li>
            <li>Business</li>
            <li>Art & Science</li>
            <li>Games & Events</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-6">
          <h2 className="text-xl font-bold text-orange-400">Use Full Links</h2>
          <ul>
            <li>About Us</li>
            <li>Upcoming Events</li>
            <li>Faq Questions</li>
            <li>Privacy Policy</li>
            <li>Gallery</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
