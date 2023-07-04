import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // togole
  // const [clicked, setClick] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="menu ">
      <nav class={navbar ? "navbar navbar-expand-lg  fixed-top  navbar-dark bg-dark" : "navbar navbar-expand-lg fixed-top  navbar-dark bg-transparent"}>
        <div class="container d-flex justify-content-between">
          <div>
            <a class="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
