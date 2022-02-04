import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import port1 from "../../Images/portfolio/portfolio1.jpg";
import { AiFillGithub } from "react-icons/ai";
import { IoArrowRedo } from "react-icons/io5";

const Portfolio = () => {
  
  return (
    <>
      <section className="portfilo__section">
        <div className="container">
          <div className="section__header">
            <h5>Portfolio</h5>
            <h1>My Portfolio</h1>
            <p className="sec__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              adipisci laboriosam eligendi quis nisi mollitia ab veritatis
            </p>
          </div>

          <div className="port">
            <div className="port__container">
              <div className="row">
                <div className="col-md-4">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">
                    <div className="port__box">
                      <img src={port1} alt="" />
                      <div className="port__content">
                        <h4>News Portal</h4>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatem, dicta molestias quos quisquam
                          aliquam error?
                        </p>

                        <div className="port__button">
                          <a href="#" className="btn btn-outline-info ml-2">
                            <AiFillGithub />
                            <span>Code</span>
                          </a>
                          <a href="#" className="btn btn-outline-info ">
                            <IoArrowRedo />
                            <span>Live</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-md-4">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">
                    <div className="port__box">
                      <img src={port1} alt="" />
                      <div className="port__content">
                        <h4>News Portal</h4>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatem, dicta molestias quos quisquam
                          aliquam error?
                        </p>

                        <div className="port__button">
                          <a href="#" className="btn btn-outline-info ml-2">
                            <AiFillGithub />
                            <span>Code</span>
                          </a>
                          <a href="#" className="btn btn-outline-info ">
                            <IoArrowRedo />
                            <span>Live</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-md-4">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">
                    <div className="port__box">
                      <img src={port1} alt="" />
                      <div className="port__content">
                        <h4>News Portal</h4>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatem, dicta molestias quos quisquam
                          aliquam error?
                        </p>

                        <div className="port__button">
                          <a href="#" className="btn btn-outline-info ml-2">
                            <AiFillGithub />
                            <span>Code</span>
                          </a>
                          <a href="#" className="btn btn-outline-info ">
                            <IoArrowRedo />
                            <span>Live</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* endpoint */}

            {/* endpoint */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
