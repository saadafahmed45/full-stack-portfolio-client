import React from "react";
import './Blog.css';
import blImg from "../../Images/bl1.jpg"
const Blog = () => {
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
        
            <div className="blog_box">
            <div className="blog__img">
              <img src={blImg} alt="" />
            </div>
               <div className="blog__content">
                 <h5>April 07,2021 Travel Landing</h5>
                 <h3>Dostie Memorie</h3>
               </div>
            </div>
            
            <div className="blog_box">
            <div className="blog__img">
              <img src={blImg} alt="" />
            </div>
               <div className="blog__content">
                 <h5>April 07,2021 Travel Landing</h5>
                 <h3>Dostie Memorie</h3>
               </div>
            </div>
            
            <div className="blog_box">
            <div className="blog__img">
              <img src={blImg} alt="" />
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
