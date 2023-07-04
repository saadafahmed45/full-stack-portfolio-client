import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import air from "../../Images/portfolio/air.jpg";
import ars from "../../Images/portfolio/ars.jpg";
import food from "../../Images/portfolio/food.jpg";
import webaidpro from "../../Images/portfolio/web.jpg";
import burgerKing from "../../Images/portfolio/burger.jpg";
import uptownRiders from "../../Images/portfolio/ridar.jpg";
import { AiFillGithub } from "react-icons/ai";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from 'aos';

const Portfolio = () => {

  useEffect(() => {
    Aos.init({duration:1500})
  },[])


  const portfolio = [
    {
      id: 1,
      name: "ARS Fitness Center",
      img: ars,
      imgFull: ars,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",
      codeLink: "https://github.com/saadafahmed45/ARS_fitness_center",
      liveLink: "https://ars-fitness-center.netlify.app/",
    },
    {
      id: 2,
      name: "AIR Contact",
      img: air,
      imgFull: air,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "https://github.com/saadafahmed45/Flight-Booking",
      liveLink: "https://saadafahmed45.github.io/Flight-Booking/",
    },
    {
      id: 3,
      name: "Food Lover Resturents",
      img: food,
      imgFull: food,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "https://github.com/saadafahmed45/food-Lover",
      liveLink: "https://saadafahmed45.github.io/food-Lover/",
    },
    {
      id: 4,
      name: "Web Aid Pro",
      img: webaidpro,
      imgFull: webaidpro,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "https://github.com/saadafahmed45/web-aid-pro-client",
      liveLink: "https://web-aid-pro.netlify.app/",
    },
    {
      id: 5,
      name: "Burger King",
      img: burgerKing,
      imgFull: burgerKing,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "https://github.com/saadafahmed45/burger-shop-react",
      liveLink: "https://burger-king-shop.netlify.app/",
    },
    {
      id: 5,
      name: "Uptown Riders",
      img: uptownRiders,
      imgFull: uptownRiders,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "https://github.com/saadafahmed45/uptown-riders",
      liveLink: "https://burj-al-arab-saad-b614b.web.app/",
    },
  ];
 const add= (a,b,c=3)=> a+b+c;
 console.log(add(1,2));



  
  return (
    <>
      <section className="portfilo__section" id="portfolio">
        <div className="container">
          <div className="section__header" data-aos="fade-up " data-aos-duration="1000">
            <h5>Portfolio </h5>
            <h1>My Portfolio </h1>
            <p className="sec__para">
            Just some of the projects I worked on.

            </p>
          </div>

          <div className="port">
            <div className="port__container">
           
                 {
                   portfolio.map((port)=> (
                    <div className="prt__main">
                    <div className="port__box " data-aos="fade-up " data-aos-duration="2000">
                <div className="port__content">
                {/* dynamic */}
                <Link to={`/portfolio_details/${port.id}`}>

                    <img src={port.img} alt="" />
                      <h4>{port.name}</h4>
                      <p>
                        {port.dis}
                      </p>
                      </Link>

                      <div className="port__button">
                        <a href={port.codeLink} className="btn btn-outline-info ml-2">
                          <AiFillGithub />
                          <span>Code</span>
                        </a>
                        <a href={port.liveLink} className="btn btn-outline-info ">
                          <IoArrowRedo />
                          <span>Live</span>
                        </a>

                      </div>
                    </div>

                  </div>
              </div>
                   ))
                 }
            
            
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
