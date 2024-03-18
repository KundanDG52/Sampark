import React from "react";

import "../pages-css/Attendence.css";

import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

import Table from "../table/Table";
import HeaderNew from "../section/header/HeaderNew";

export const Attendence = () => {
  const [attendence, setAttendence] = useState([]);

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
      setAttendence(sabhas);
    }
    fetchData();
  }, []);
  return (
    <div className="attendence">
      <HeaderNew id="attendence-header" />
      <Table />
      {/* <section className="section-attendence">
        <h1 className="attendence-heading">A t t e n d e n c e</h1>
        <Table />
      </section> */}
    </div>
  );
};
