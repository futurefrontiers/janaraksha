import React from "react";
import "./main.css";

const data = [
  {
    Name: "Hemakrishna",
    age: 23,
    BloodGroup: "B+",
    city: "Vijayawada",
    Gender: "Male",
  },
  { Name: "Anil", age: 25, BloodGroup: "B-", city: "Vizag", Gender: "Female" },
];

const Main = () => {
  return (
    <div className="main">
      <div className="search_fields">
        <div className="search_field">
          <input type="text" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="table_container">
        <table className="data_table">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>City</th>
            <th>Gender</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.Name}</td>
              <td>{item.age}</td>
              <td>{item.BloodGroup}</td>
              <td>{item.city}</td>
              <td>{item.Gender}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Main;
