import React, { useState, useEffect } from "react";
import MyExperience from "../../MyExperience/MyExperience";
import Post from "../../Post/Post";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import Blog from "../Blog/Blog";
// import Navbar from '../../Shared/Navbar/Navbar';
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
// import ClockLoader from "react-spinners/FadeLoader";

import loadImg from "../../Images/loader__smile.gif";

import Typical from "react-typical";

const HomeMain = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);
  return (
    <>
      {loading ? (
        <div className="home_spnner text-center">
          {" "}
          {/* <ClockLoader color={"#10e762"} loading={loading} size={100} /> */}
          <img src={loadImg} alt="" />
          <h3>
            {" "}
            <span>
              {" "}
              <Typical
                steps={["Welcome To My World!", 2500, " "]}
                loop={Infinity}
                wrapper="b"
              />{" "}
            </span>
          </h3>
        </div>
      ) : (
        <div>
          <Header></Header>
          <About></About>
          <MyExperience />
          <Portfolio></Portfolio>
          <Testimonials></Testimonials>
          <Blog></Blog>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default HomeMain;
