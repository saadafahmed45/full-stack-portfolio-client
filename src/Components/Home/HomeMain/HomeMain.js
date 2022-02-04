import React from 'react';
import MyExperience from '../../MyExperience/MyExperience';
import Post from '../../Post/Post';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
// import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';

const HomeMain = () => {
    return (
        <main>
        <Post></Post>
            {/* <Navbar></Navbar> */}
           {/* <Header></Header> */}

           {/* <About></About>
           <MyExperience/>
           <Portfolio></Portfolio>
           <Footer></Footer> */}
        </main>
    );
};

export default HomeMain;