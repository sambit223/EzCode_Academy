import React, { useState } from "react";
import image1 from "../assets/team.svg";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [course, setCourse] = useState(""); // Initialize with an empty string

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Selected Course: ${course}
      Message: ${message}
    `;

    const mailtoLink = `mailto:sambittripathy200@gmail.com?subject=Join Request from EZCodeAcademy&body=${encodeURIComponent(
      emailContent
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-5 bg-blue-50"
      id="contact"
    >
      <div className="w-[30rem] p-6 m-5">
        <img src={image1} alt="Contact" className="h-[20rem] w-full" />
      </div>

      <div className="w-[30rem] p-6 m-5 leading-loose">
        <div>
          <h1 className="text-4xl font-bold text-gray-600">
            Request A{" "}
            <span className="text-4xl text-orange-400">Call Back</span>
          </h1>
        </div>
        <div className="mt-5">
          <p className="font-semibold text-gray-500">
            If you have any questions or need further assistance, please fill
            out the form below, and one of our representatives will reach out to
            you shortly. We are committed to providing you with the best
            possible support.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm focus:border-orange-400"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Id*"
              className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm focus:border-orange-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm focus:border-orange-400"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <select
              className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm focus:border-orange-400 text-gray-500"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Choose a course
              </option>
              <option value="Introduction to Programming">
                Introduction to Programming
              </option>
              <option value="Advanced Data Structures and Algorithms">
                Advanced Data Structures and Algorithms
              </option>
              <option value="Frontend Web Development">
                Frontend Web Development
              </option>
              <option value="Backend Server Development">
                Backend Server Development
              </option>
              <option value="Database Management Systems">
                Database Management Systems
              </option>
              <option value="Full Stack MERN Development">
                Full Stack MERN Development
              </option>
            </select>
          </div>
          <div className="mt-5">
            <textarea
              type="text"
              placeholder="Message"
              className="w-full p-3 outline-none bg-white border rounded-lg shadow-sm focus:border-orange-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="transition-transform duration-700 w-[10rem] ease-in-out hover:scale-110 bg-orange-400 hover:bg-blue-950 border  rounded-full p-3 text-white font-bold"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
