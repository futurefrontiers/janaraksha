import React from "react";
import "./sidebar.css";

import { useState } from "react";

const options = [
  "Volunteers",
  "Blood Donors",
  "Organ Donor",
  "Blood Bank",
  "Notifications",
];

const SideBar = () => {
  const [selected, setSelected] = useState("Volunteers");

  const clickHandler = (e) => {
    setSelected(e);
  };
  return (
    <div id="sidebar">
      <div className="menu-options">
        {options.map((item, i) => (
          <button
            className={`menu-option ${selected === item ? "active" : ""}`}
            key={i}
            onClick={() => clickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
