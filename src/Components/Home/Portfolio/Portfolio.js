import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import air from "../../Images/portfolio/air.jpg";
import ars from "../../Images/portfolio/ars.jpg";
import food from "../../Images/portfolio/food.jpg";
import webaidpro from "../../Images/portfolio/web.jpg";
import burgerKing from "../../Images/portfolio/burger.jpg";
import urbanRiders from "../../Images/portfolio/ridar.jpg";
import { AiFillGithub } from "react-icons/ai";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      name: "ARS Fitness Center",
      img: ars,
      imgFull: ars,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",
      codeLink: "code",
      liveLink: "live",
    },
    {
      id: 2,
      name: "AIR Con",
      img: air,
      imgFull: air,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "code",
      liveLink: "live",
    },
    {
      id: 3,
      name: "Food Lover Resturents",
      img: food,
      imgFull: food,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "code",
      liveLink: "live",
    },
    {
      id: 4,
      name: "Web Aid Pro",
      img: webaidpro,
      imgFull: webaidpro,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "code",
      liveLink: "live",
    },
    {
      id: 5,
      name: "Burger King",
      img: burgerKing,
      imgFull: webaidpro,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "code",
      liveLink: "live",
    },
    {
      id: 5,
      name: "Burger King",
      img: urbanRiders,
      imgFull: webaidpro,
      dis: "A full stack ecommerce website with custom API,built with, Technology: Reactjs,Node.js,Express.js ,MongoDB",

      codeLink: "code",
      liveLink: "live",
    },
  ];

  return (
    <>
      <section className="portfilo__section" id="portfolio">
        <div className="container">
          <div className="section__header">
            <h5>Portfolio </h5>
            <h1>My Portfolio {portfolio.length}</h1>
            <p className="sec__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              adipisci laboriosam eligendi quis nisi mollitia ab veritatis
            </p>
          </div>

          <div className="port">
            <div className="port__container">
           
                 {
                   portfolio.map((port)=> (
                    <div className="prt__main">
                    <div className="port__box">
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
                        <a href="https://ars-fitness-center.netlify.app/" className="btn btn-outline-info ">
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
