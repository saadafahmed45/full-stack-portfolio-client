import React from "react";
import "./Header.css";
import Typical from "react-typical";
import Navbar from "../../Shared/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor";

const Header = () => {
  return (
    <>
      <header>
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="3, 252, 44"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={2}
        /> */}
        <Navbar></Navbar>

        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="header__content mt-5">
                <h2>Hey, I'm <br />Mohammad Haolader </h2>
                <div className="typeing">
                  <span>
                    {" "}
                    <Typical
                      steps={[
                        "Designer",
                        2000,
                        "Developer",
                        1500,
                        "Jr.Programmer",
                        2000,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                    />{" "}
                  </span>
                </div>
                <h1>Based In Bangladesh.</h1>
                <p>
                  I'm developer focused on crafting user‑friendly experiences, I
                  am passionate about building excellent software that improves
                  the lives of those around me.
                </p>
              </div>
              <div className="header__button">
                <a href="https://drive.google.com/file/d/1YsfbAEZM9rvkf51D_xl_XE4kXtLYNQPG/view" className="btn btn-lg btn-outline-light">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
