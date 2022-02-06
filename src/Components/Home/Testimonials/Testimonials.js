import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import imgMY from "../../Images/dp404.png"
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>
      <section className="testimonials__secction">
        <div className="container">
          <div className="section__header">
            <h5>Testimonials</h5>
            <h1>What's Clients Say.</h1>
            <p className="sec__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              adipisci laboriosam eligendi quis nisi mollitia ab veritatis
            </p>
          </div>

          <div className="testimonials__slider">
            <div className="">
              <div className="slider">
  <Slider {...settings}>
         <div className="div">
         <div className="single__container">
            <div className="slider__img">
                <img src={imgMY} alt="" />
            </div>
            <div className="slider__content">
              
                <h2>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, distinctio!</h2>
            <h3>Saad-Af</h3>
            <h5>web developer</h5>
            </div>
          </div>
         </div>
         <div className="div">
         <div className="single__container">
            <div className="slider__img">
                <img src={imgMY} alt="" />
            </div>
            <div className="slider__content">
              
                <h2>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, distinctio!</h2>
            <h3>Saad-Af</h3>
            <h5>web developer</h5>
            </div>
          </div>
         </div>
         <div className="div">
         <div className="single__container">
            <div className="slider__img">
                <img src={imgMY} alt="" />
            </div>
            <div className="slider__content">
              
                <h2>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, distinctio!</h2>
            <h3>Saad-Af</h3>
            <h5>web developer</h5>
            </div>
          </div>
         </div>
        </Slider>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;
