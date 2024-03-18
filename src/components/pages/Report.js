import React from "react";
import "../pages-css/Report.css";

import HeaderNew from "../section/header/HeaderNew";
// import { useNavigate } from "react-router-dom";

export const Report = () => {
  // const navigate = useNavigate();
  // const reportForm = () => {
  //   navigate("/report-create-user");
  // };
  return (
    <div className="report">
      <HeaderNew />
      {/* <button onClick={reportForm} className="report-btn three">
        Create New User
      </button> */}
    </div>
  );
};
