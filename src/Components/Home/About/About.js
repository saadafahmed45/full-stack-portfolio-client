import React, { useState, useEffect } from "react";

import "./About.css";
import about from "../../Images/aboutPic.jpg";
import "aos/dist/aos.css";
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <section className="about__section" id="about">
        <div className="container">
          <div className="section__header" data-aos="fade-up " data-aos-duration="1000">
            <h5>About Me</h5>
            {/* <h1>About Me</h1> */}
            {/* <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              adipisci laboriosam eligendi quis nisi mollitia ab veritatis
            </p> */}
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="about__img" data-aos="fade-up " data-aos-duration="1000">
                <img src={about} alt="" />
              </div>
            </div>
            <div className="col-md-6 mt-5" data-aos="fade-up " data-aos-duration="1000">
              <div className="about__discription">
                <h2>I'm <br /> Mohammad Haolader</h2>
                <h3>
                  A Lead Visual Artist based in <span>Bangladesh</span>
                </h3>
                <p>
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences
                  through meaningful interactions. Check out my Portfolio
                </p>
              </div>
              <hr />
              <div className="about__details">
                <h3>PERSONAL INFO</h3>
                <div className="about__table">
                  <div>
                    <h4>
                      Name: <span>Mohammad Haolader</span>
                    </h4>
                    <h4>
                      Age: <span>21+</span>
                    </h4>
                    <h4>
                      Nationality: <span>Bangladeshi</span>
                    </h4>
                    <h4>
                      Freelance: <span>Available</span>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      Address: <span>Bangladeshi</span>
                    </h4>
                    <h4>
                      Phone: <span>+8801870941293</span>
                    </h4>
                    <h4>
                      Email: <span>mohammadhaolader1@gmail.com</span>
                    </h4>
                    <h4>
                      Languages: <span>Bangla/English/Arabic</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
