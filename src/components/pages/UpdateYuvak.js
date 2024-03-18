import React, { useEffect } from "react";
import { useState } from "react";
import "../pages-css/CreateUser.css";
import HeaderNew from "../section/header/HeaderNew";
import axios from "axios";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";

export const UpdateYuvak = () => {
  const [bhulkus, setBhulkus] = useState([]);
  const [firstname, setFirstname] = useState(bhulkus.First_Name);
  const [address, setAddress] = useState(bhulkus.Address);
  const [mobile, setMobile] = useState(bhulkus.Mobile);
  const [dateOfBirth, setDateOfBirth] = useState(bhulkus.Date_Of_Birth);
  const [gender, setGender] = useState(bhulkus.Gender);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const fetchMemberData = async () => {
      const cookies = new Cookies();
      const accessToken = cookies.get("accessToken");
      const response = await axios.get(
        `http://localhost:3000/bhulku/${state}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setBhulkus(response?.data?.bhulkudetails[0]);
      setFirstname(response?.data?.bhulkudetails[0].First_Name);
      setAddress(response?.data?.bhulkudetails[0].Address);
      setDateOfBirth(new Date(response?.data?.bhulkudetails[0].Date_Of_Birth));
      setMobile(response?.data?.bhulkudetails[0].Mobile);
      setGender(response?.data?.bhulkudetails[0].Gender);
    };
    if (state) {
      fetchMemberData();
    }
  }, [state]);

  const update = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    const response = await axios.patch(
      `http://localhost:3000/bhulku/${state}`,
      {
        First_Name: firstname,
        Address: address,
        Mobile: mobile,
        Gender: gender,
        Date_Of_Birth: dateOfBirth,
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (response.data) {
      navigate("/yuvak");
    } else {
      setError("Details do not match!");
    }
  };

  return (
    <div>
      <HeaderNew />
      <div class="wrapper">
        <h2>Update Yuvak</h2>
        <form action="#">
          {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
          <div class="input-box">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter user name"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="input-box">
            <input
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              type="date"
              placeholder="Date Of Birth"
            />
          </div>
          <div>
            <label id="gender-label">Gender:</label>
            <input
              className="radio-option"
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />{" "}
            Male
            <input
              className="radio-option"
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />{" "}
            Female
          </div>
          <div class="input-box button">
            <input onClick={update} type="Submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};
