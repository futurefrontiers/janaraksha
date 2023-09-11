import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <img src={logo} alt="Janaraksha logo" />
        <h3>JANARAKSHA</h3>
      </div>
      <div className="profile"></div>
    </div>
  );
};

export default Navbar;
