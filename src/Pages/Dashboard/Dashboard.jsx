import React from "react";
import SideBar from "./Sidebar/SideBar";
import Main from "./Main/Main";
import "./dashboard.css";
import AdminNavbar from "./AdminNavbar/AdminNavbar";

const Dashboard = () => {
  return (
    <div className="admin_dashboard">
      <AdminNavbar />
      <div className="dashboard_container">
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
