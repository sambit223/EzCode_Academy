import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-800 text-white p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h5 className="text-sm uppercase font-bold mb-3">Contact Us</h5>
          <ul className="text-xs">
            <li>Rotonda Clodovea, Incrocio Marchetti, 29001</li>
            <li>+00 12 34 56 78 9</li>
            <li>contact@example.com</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase font-bold mb-3">Explore Courses</h5>
          <ul className="text-xs">
            <li>Mathematics</li>
            <li>Modern Art</li>
            <li>Management</li>
            <li>Business</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase font-bold mb-3">Use Full Links</h5>
          <ul className="text-xs">
            <li>About Us</li>
            <li>Upcoming Events</li>
            <li>FAQ Questions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm uppercase font-bold mb-3">Social Media</h5>
          <div className="flex space-x-3">
            <a href="https://facebook.com" className="text-white">
              Facebook
            </a>
            <a href="https://twitter.com" className="text-white">
              Twitter
            </a>
            <a href="https://youtube.com" className="text-white">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
