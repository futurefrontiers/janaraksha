import React from "react";
import "./navbar.css";
import logo from "../../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div id="nav">
      <div id="logo">
        <img src={logo} alt="Janaraksha logo" />
        <h3>JANARAKSHA</h3>
      </div>
      <div className="profile">
        <i className="fa-solid fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
