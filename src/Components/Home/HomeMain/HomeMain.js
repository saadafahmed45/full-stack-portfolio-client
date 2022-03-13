import React from "react";
import MyExperience from "../../MyExperience/MyExperience";
import Post from "../../Post/Post";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Blog from "../Blog/Blog";
// import Navbar from '../../Shared/Navbar/Navbar';
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";

const HomeMain = () => {
  return (
    <main>
      {/* <Post></Post> */}
      {/* <Navbar></Navbar> */}
      <Header></Header>

      <About></About>
      <MyExperience />
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <Footer></Footer>
    </main>
  );
};

export default HomeMain;
