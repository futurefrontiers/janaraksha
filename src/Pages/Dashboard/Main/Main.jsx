import React from "react";
import "./main.css";

const data = [
  { Name: "Hemakrishna", age: 23, BloodGroup: "B+", city: "Vijayawada" },
  { Name: "Anil", age: 25, BloodGroup: "B-", city: "Vizag" },
];

const Main = () => {
  return (
    <div className="main">
      <div className="search_fields">
        <input type="text" />
      </div>
      <table className="data_table">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>City</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.Name}</td>
            <td>{item.age}</td>
            <td>{item.BloodGroup}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Main;
