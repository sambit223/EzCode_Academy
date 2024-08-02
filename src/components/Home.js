import React from "react";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Banner from './Banner'
import Footer from './Footer'
import Courses from "./Courses";
import Form from "./Form";
import Pencil from "./Pencil";
const Home = () => {
  return (
    <div>
      <Header/>
       <Banner/>
      <Aboutus/>
      <Courses/>
      <Form/>
      <Footer />
      <Pencil/>
    </div>
  );
};

export default Home;
