import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

// togole
const [clicked,setClick] = useState(false)






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
    <div className="menu sticky-top">
      <nav className="navItems ">
        <a className="logo" href="#">
          <img src={logo} alt="" />
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">service</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      
        {/* <div className="menu__icon">
        <i className={clicked ? "<AiOutlineClose/>" : "<AiOutlineAlignLeft/>" }> </i>
   
       <AiOutlineClose/>
        </div> */}

      </nav>
    </div>
  );
};

export default Navbar;
