import React from "react";
import "./Header.css";
import Typical from "react-typical";
import Navbar from "../../Shared/Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="header__content mt-5">
                <h2>Hey, I'm Saad-Af</h2>
                <div className="typeing">
                  <span>
                    {" "}
                    <Typical
                      steps={[
                        "Designer",
                        2000,
                        "Developer",
                        1500,
                        "Musical Artist",
                        2000,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                    />{" "}
                  </span>
                </div>
                <h1>Based In California.</h1>
                <p>
                  I'm developer focused on crafting user‑friendly experiences, I
                  am passionate about building excellent software that improves
                  the lives of those around me.
                </p>
              </div>
              <div className="header__button">
                <a href="#" className="btn btn-lg btn-outline-light">
                  See Portfolio
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
