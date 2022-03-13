import React,{ useState, useEffect} from "react";
import "./Blog.css";
import blImg from "../../Images/bl1.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <section className="blog__section" id="blog">
        <div className="container">
          <div className="section__header">
            <h5>Our Blogs</h5>
            <h1>Recent News</h1>
            <p className="sec__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              adipisci laboriosam eligendi quis
            </p>
          </div>

          <div className="blog__conteiner">
            <div className="blog_box" data-aos="fade-up " data-aos-duration="1000">
              <div className="blog__img">
                <img src="https://sdtimes.com/wp-content/uploads/2021/12/87406b32e736bd7d1de7b61e8f0efb46.png" alt="" />
              </div>
              <div className="blog__content">
                <h5>April 07,2021 Travel Landing</h5>
                <h3>Dostie Memorie</h3>
              </div>
            </div>

            <div className="blog_box">
              <div className="blog__img"data-aos="fade-up " data-aos-duration="1000">
                <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/03/translation.jpg" alt="" />
              </div>
              <div className="blog__content">
                <h5>April 07,2021 Travel Landing</h5>
                <h3>Dostie Memorie</h3>
              </div>
            </div>

            <div className="blog_box"data-aos="fade-up " data-aos-duration="1000">
              <div className="blog__img">
                <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/09/1-2.jpg" alt="" />
              </div>
              <div className="blog__content">
                <h5>April 07,2021 Travel Landing</h5>
                <h3>Dostie Memorie</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
