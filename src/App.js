import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Components/Home/HomeMain/HomeMain";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Error from "./Components/Shared/Error/Error";
import Dashboard from "./Components/Admin/Dashboard/Dashboard"
import Blog from "./Components/Home/Blog/Blog";
import AddBlog from "./Components/Admin/AddBlog/AddBlog";
import ScrollToTop from "react-scroll-to-top";
import PortfolioDetails from "./Components/Home/PortfolioDetails/PortfolioDetails";


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<HomeMain />} />
       <Route path="/portfolio_details/:id" element={<PortfolioDetails/>}/>
    
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="/dashboard/addBlog" element={<AddBlog/>} />
        <Route path="*" element={<Error/>} />
      </Routes>

      <ScrollToTop smooth
      width="24"
      height="24"
       />
    </div>
  );
}

export default App;
