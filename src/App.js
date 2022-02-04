import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Components/Home/HomeMain/HomeMain";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeMain />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
