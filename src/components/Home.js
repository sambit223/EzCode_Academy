import React from "react";
import Header from "./Header";
import Aboutus from "./Aboutus";
import Banner from './Banner'
import Footer from './Footer'
import Courses from "./Courses";
import Form from "./Form";
import Feedback from "./Feedback";
import Pencil from "./Pencil";
import Back from "./Back";
import Faq from "./Faq";
import Test from "./Test";
import Quiz from "./Quiz";
const Home = () => {
  return (
    <div>
      {/* <Back/> */}
      <Header/>
      <Banner/>
      <Aboutus/>
      <Courses/>
      <Feedback/>
      <Faq/>
      <Form/>
      {/* <Quiz/> */}
      <Footer />
      <Pencil/>
     
    </div>
  );
};

export default Home;
