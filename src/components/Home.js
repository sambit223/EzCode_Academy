import React from "react";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Card from "./Card";
import image1 from "../assets/web-design.svg";
import image2 from "../assets/app-development.svg";

import Form from "./Form";
import Banner from './Banner'

import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Header />
       <Banner/>
     <Aboutus/>
      <div className="flex flex-wrap justify-start items-center">
        <Card
          image={image1}
          date="August 1, 2024"
          duration="3 Months"
          max="30 Students Max"
          course="React Basics"
          price="$299"
        />
        <Card
          image={image2}
          date="August 5, 2024"
          duration="6 Months"
          max="20 Students Max"
          course="Advanced JavaScript"
          price="$499"
        />
        <Card
          image={image2}
          date="August 5, 2024"
          duration="6 Months"
          max="20 Students Max"
          course="Advanced JavaScript"
          price="$499"
        />
        <Card
          image={image2}
          date="August 5, 2024"
          duration="6 Months"
          max="20 Students Max"
          course="Advanced JavaScript"
          price="$499"
        />
      </div>
      <Form/>
      <Footer />
    </div>
  );
};

export default Home;
