import React from "react";
import SideBar from "./Sidebar/SideBar";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard_container">
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
