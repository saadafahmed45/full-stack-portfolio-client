import React from "react";
import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="footer__section" id="contact">
        <div className="section__header">
          <h5>Contact</h5>
        </div>
        <div className="footer__container text-white">
          <div className="footer__content">
            <h1>Let's discuss your project</h1>
            <div className="footer__icon">
            <ul>
              <li>
                <i>
                  <FiPhoneCall />
                </i>
                <span>+44 1632 967704</span>
              </li>

              <li>
                <i>
                  <FiMessageSquare />
                </i>
                <span>mohammadhaolader1@gmail.com</span>
              </li>

              <li>
                <i>
                  <FiMapPin />
                </i>
                <span>jatrabari, Dhaka-1362,Bangladesh</span>
              </li>
            </ul>
            </div>
          </div>

          <div className="footer__input">
            <h3>
              I'm always open to discussing product <br/>
              <span>design work or partnerships.</span>
            </h3>
<div className="form__section">
    <form action="">
<input type="text" placeholder="Name*" />
<br/>
<input type="email" name="Email"placeholder="Email" />
<br/>
<input  placeholder="Message" name="" id="" />
<br/>
<div className="input__btn mt-4">
<button className="btn btn-outline-light" type="submit" value="Submit" > Submit</button>

</div>
    </form>
</div>

          </div>
        </div>
      </footer>

      <div className="copyright__section text-light p-1 d-flex justify-content-center">
      <p>Copyright © 2021 Mohammad Haolader</p>
      </div>
    </>
  );
};

export default Footer;
