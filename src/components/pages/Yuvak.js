import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
// import Header from "../section/header/Header";
// import Sidebar from "../section/sidebar/Sidebar";
import "../pages-css/Yuvak.css";
import HeaderNew from "../section/header/HeaderNew";
import ModalOpen from "./ModalOpen";

export const Yuvak = () => {
  const [bhulkus, setBhulkus] = useState([]);
  const [isOpen, setIsOpen] = useState({ openConfig: false, objId: null });
  // const [updateYuvak, setUpdatedYuvak] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cookies = new Cookies();
      const accessToken = cookies.get("accessToken");
      const response = await axios.get("http://localhost:3000/bhulku", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setBhulkus(response.data.bhulkudetails);
    }
    fetchData();
  }, []);
  const navigate = useNavigate();

  const reportForm = () => {
    navigate("/yuvak-create-user");
  };
  const editYuvak = require("../images/edit-logo.png");
  const deleteYuvak = require("../images/trash-can.png");

  const handleUpdate = (memberId) => {
    navigate("/update-yuvak-page", { state: memberId });
  };

  const handlePopup = (e) => {
    setIsOpen({ openConfig: true, objId: e.target.value });
  };

  return (
    <div>
      <HeaderNew />
      <button onClick={reportForm} className="report-btn three">
        Create New Yuvak
      </button>
      <table className="yuvak-table" style={{ width: "80%" }}>
        <tr className="yuvak-table-head">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {bhulkus &&
          bhulkus.map((bhulku) => {
            // const memberId = bhulku._id;
            return (
              <tr className="yuvak-table-data" key={bhulku._id}>
                <td className="yuvak-table-data">
                  {bhulku.First_Name.split(" ")[0]}
                </td>
                <td className="yuvak-table-data">
                  {bhulku.First_Name.split(" ")[1]}
                </td>
                <td className="yuvak-table-data">{bhulku.Mobile}</td>
                <td className="yuvak-table-data">{bhulku.Address}</td>
                <td className="yuvak-table-data">
                  {bhulku.Date_Of_Birth.split("T")[0]}
                </td>
                <td className="yuvak-table-data">{bhulku.Gender}</td>
                <td className="yuvak-table-data" value={bhulku.Member_id}>
                  <img
                    className="edit-yuvak"
                    src={editYuvak}
                    alt="edit yuvak logo"
                    onClick={() => {
                      handleUpdate(bhulku._id);
                    }}
                  />
                </td>
                <td className="yuvak-table-data" id="delete-col">
                  <main>
                    {/* <button
                      className="primaryBtn"
                      value={memberId}
                      // onClick={() => setIsOpen(true)}
                      onClick={handlePopup}
                    >
                      <img src={deleteYuvak} alt="" />
                      <td className="yuvak-table-data">{bhulku._id}</td>
                    </button> */}
                    <input
                      type="image"
                      src={deleteYuvak}
                      alt=""
                      className="primaryBtn"
                      value={bhulku._id}
                      // onClick={() => setIsOpen(true)}
                      onClick={handlePopup}
                    />
                    {/* <img src={deleteYuvak} alt="" /> */}
                    {/* <td className="yuvak-table-data">{bhulku._id}</td> */}

                    {isOpen.openConfig && (
                      <ModalOpen
                        setIsOpen={setIsOpen}
                        memberId={isOpen.objId}
                      />
                    )}
                  </main>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
