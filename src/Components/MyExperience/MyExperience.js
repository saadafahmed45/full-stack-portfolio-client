import React from "react";
import "./MyExperience.css";
import js from "../Images/icons/js.svg";
import nodeJs from "../Images/icons/node-js.svg";
import es6 from "../Images/icons/es6.svg";
import express from "../Images/icons/node.svg";
import react from "../Images/icons/react.svg";
import mongoDb from "../Images/icons/mongodb.svg";
import css from "../Images/icons/css.svg";
import html from "../Images/icons/html.svg";
import bootstrap from "../Images/icons/boootstrap.svg";
import metarial from "../Images/icons/meterial ui.svg";
import photoahop from "../Images/icons/photoshop.svg";
// import html from "../Images/icons/html.svg";
const MyExperience = () => {
  return (
    <>
      <section className="experience__section">
        <div className="container">
          <div className="experience__header">
            <h1>My Experience</h1>
            <p>
              Web Developer with skills to build and maintain Front-end systems.
              Proficient in HTML, CSS, JavaScript, Reactjs, Nodejs, Expressjs
              and MongoDB. Passionate about new technologies and problem solving
            </p>
            <button className="btn btn-lg  btn-success mt-3">
              {" "}
              Education & Skills
            </button>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-6">
              <div className="exp1">
                <span class="badge bg-secondary">Education</span>
                <div className="education mt-3">
                  <h5>2020-2021</h5>
                  <h4>J.S.C Exam <span>-Shodesh Adorsho <br />School and Collage, Dhaka, 1362</span> </h4>
                    <hr />
                </div>
                <div className="education">
                  <h5>2020-2021</h5>
                  <h4>S.S.C Commerce <span>-  A.K  <br />University, Dhaka, 1263</span> </h4>
                    <hr />
                </div>
                <div className="education">
                  <h5>2021-2022</h5>
                  <h4>Ph.D in Horriblensess <span>- Mohammadbag Adarsho <br /> collage & University, Dhaka, Bangladesh</span> </h4>
               
                </div>
              </div>
            </div>
            <div className="col-md-6  col-sm-6">
              <div className="exp1">
                <span class="badge bg-secondary">My Skills</span>

                <div className="skill">
                  <div className="skill_container">
                    <div className="icon">
                      <img src={js} alt="" />
                      <h4>Javascript</h4>
                    </div>
                    <div className="icon">
                      <img src={es6} alt="" />
                      <h4>ES6</h4>
                    </div>
                    <div className="icon">
                      <img src={react} alt="" />
                      <h4>React</h4>
                    </div>

                    <div className="icon">
                      <img src={nodeJs} alt="" />
                      <h4>Node.js</h4>
                    </div>
                    <div className="icon">
                      <img src={html} alt="" />
                      <h4>HTML5</h4>
                    </div>
                    <div className="icon">
                      <img src={css} alt="" />
                      <h4>CSS3</h4>
                    </div>

                    <div className="icon">
                      <img src={express} alt="" />
                      <h4>Express.js</h4>
                    </div>
                    <div className="icon">
                      <img src={mongoDb} alt="" />
                      <h4>MongoDB</h4>
                    </div>

                    <div className="icon">
                      <img src={bootstrap} alt="" />
                      <h4>bootstrap</h4>
                    </div>

                    <div className="icon">
                      <img src={metarial} alt="" />
                      <h4>Metarieal Ui</h4>
                    </div>

                    <div className="icon">
                      <img src={photoahop} alt="" />
                      <h4>photoshop</h4>
                    </div>

                    <div className="icon">
                      <img src={metarial} alt="" />
                      <h4>Metarieal Ui</h4>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>

            {/* <div className="col-12">
              <div className="exp1">
                <span class="badge bg-secondary">Awards</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyExperience;
