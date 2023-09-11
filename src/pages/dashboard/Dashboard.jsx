import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Main from "./Main";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

export default Dashboard;
