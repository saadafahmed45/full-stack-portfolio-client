import React from 'react';
import './SideBar.css'
import { AiFillSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div>
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <b>My-Dashboard</b>
    </a>
    <div className="nav-btn">
    <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiFillSetting/></button>    

    </div>
  </div>
</nav>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Dashboard</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

<div className="side-btn d-flex flex-column">


    <div className="side__bar__link d-flex flex-column">
    <Link to="addBlog">create Blog</Link>
    <Link to="add_project">Add More Projects</Link>
    <Link to="projrct_menegment">Projrct Menegment</Link>
    <Link to="addBlog">create Blog</Link>

    </div>



</div>
    <p>Try scrolling the rest of the page to see this option in action.</p>
    </div>
    </div>
        </div>
    );
};

export default SideBar;