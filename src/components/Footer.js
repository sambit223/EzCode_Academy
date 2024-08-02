import React from "react";

const Footer = () => {
  
  return (
    <footer className="relative py-10 text-white bg-blue-950">
      <div className="container flex flex-wrap justify-around mx-auto">
        <div className="w-full px-4 mb-6 md:w-1/4">
          <h1 className="text-2xl font-bold text-orange-400">EZ<span className="text-white">CodeAcademy</span></h1>
          <p className="mt-4">
            Integer venenatis consequat elit. Curabitur eget laoreet nibh. Cras euismod,
            tellus vitae luctus ultricies, lacus erat sagittis nulla, id ornare velit ligula
            congue etiam rhoncus urna.
          </p>
          <button className="px-4 py-2 mt-4 font-bold text-white bg-orange-400 rounded">Get Started Now &rarr;</button>
        </div>
        <div className="w-full px-4 mb-6 md:w-1/4">
          <h2 className="text-xl font-bold text-orange-400">Contact Us</h2>
          <p>Rotonda Clodovea, Incrocio Marchetti, 29001.</p>
          <p>+00 12 34 56 78 9</p>
          <p>+000 1234 56789</p>
          <p>contact@example.com</p>
        </div>
        <div className="w-full px-4 mb-6 md:w-1/4">
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
        <div className="w-full px-4 mb-6 md:w-1/4">
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
