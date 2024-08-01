import React from "react";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Banner from './Banner'
import Footer from './Footer'
import Courses from "./Courses";

const Home = () => {
  return (
    <div>
      <Header/>
       <Banner/>
      <Aboutus/>
      <Courses/>
      <Footer />
    </div>
  );
};

export default Home;
