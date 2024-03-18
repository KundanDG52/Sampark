import React, { useEffect, useState } from "react";
// import Header from "../section/header/Header";
// import Sidebar from "../section/sidebar/Sidebar";
import "../pages-css/Sabha.css";
// import IframeCardGrid from "../Iframe-card/IframeCardGrid";
import "../pages-css/IframeStyles.css";
import Cookies from "universal-cookie";
import axios from "axios";
import HeaderNew from "../section/header/HeaderNew";

export const Sabha = () => {
  const [sabha, setSabha] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // try{
      const cookies = new Cookies();
      const accessToken = cookies.get("accessToken");
      const response = await axios.get("http://localhost:3000/sabha", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const sabhas = response.data.sabhadetails;

      sabhas.forEach((sabha) => {
        const response = axios.get(
          `http://localhost:3000/user/${sabha.sabha_leader}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        sabha.sabha_leadername = response?.userdetails?.username || "admin";
      });
      // console.log(sabhas);
      setSabha(sabhas);
    }
    fetchData();
  }, []);
  console.log(sabha);

  const columnName = [
    "Sabha Name",
    "Sabha Type",
    "Sabha Location",
    "Sabha Leader",
  ];

  // const data = [];
  return (
    <div className="sabha">
      <HeaderNew />
      <table className="sabha-table" style={{ width: "80%" }}>
        <thead className="sabha-table-head">
          <tr>
            {columnName.map((cell, colIndex) => (
              <th key={colIndex} style={{ padding: "12px" }}>
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        {sabha &&
          sabha.map((sabha) => {
            return (
              <tr className="sabha-table-data">
                <td className="sabha-table-data">{sabha.sabha_name}</td>
                <td className="sabha-table-data">{sabha.sabha_type}</td>
                <td className="sabha-table-data">{sabha.sabha_location}</td>
                <td className="sabha-table-data">{sabha.sabha_leadername}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
