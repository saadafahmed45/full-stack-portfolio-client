import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <SideBar></SideBar>
        <div className="dashboard">
          <h1>this is dashboard</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga


          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
