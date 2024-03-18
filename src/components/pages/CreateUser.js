import React from "react";
import { useState } from "react";
import "../pages-css/CreateUser.css";
import HeaderNew from "../section/header/HeaderNew";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  // const [bhulkus, setBhulkus] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");
    const response = await axios.post(
      "http://localhost:3000/bhulku",
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
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  return (
    <div>
      <HeaderNew />
      <div class="wrapper">
        <h2>Create New Yuvak</h2>
        <form action="#">
          {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
          <div class="input-box">
            <input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter user name"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div class="input-box">
            <input
              type="number"
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="input-box">
            <input
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
            <input onClick={create} type="Submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
};
