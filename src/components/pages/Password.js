import React, { useState } from "react";
import "../pages-css/index.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

export const Password = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setreEnterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createNewPassword = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://localhost:3000/newuser/signupform",
      {
        username,
        password,
        reEnterPassword,
      }
    );
    if (response.data.accesstoken) {
      const cookies = new Cookies();
      cookies.set("accessToken", response.data.accesstoken, { path: "/" });
      console.log("Register New User");
      setUsername(username);
      setPassword(password);
      setreEnterPassword(reEnterPassword);
      navigate("/");
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  return (
    <section className="login-section" id="cta">
      <div className="login-container">
        <div className="login">
          <div class="login-text-box">
            <div>
              <div
                class="login-img-logo"
                role="img"
                aria-label="Login Page Logo"
              ></div>
              <h2 class="login-heading">SAMPARK</h2>
            </div>
            <p class="login-text r2">Reset New Password</p>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <form
              class="login-form"
              name="sign-up"
              // onSubmit={handleSubmit}
              netlify
            >
              <div>
                <label id="register-label-1" for="full-name">
                  User Id
                </label>
                <input
                  id="register-input-1"
                  // id="full-name"
                  // name="full-name"
                  type="text"
                  placeholder="User Id"
                  name="username"
                  // id="username"
                  // onChange={handleChange}
                  value={username}
                  required
                />
              </div>
              <div>
                {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
                <label id="register-label-2" for="password">
                  Create New Password
                </label>
                <input
                  // id="full-name"
                  // name="full-name"
                  type="password"
                  placeholder="New Password"
                  name="password"
                  // id="username"
                  id="register-input-2"
                  // onChange={handleChange}
                  value={password}
                  required
                />
              </div>
              <div>
                <label id="register-label-3" for="password">
                  Confirm New Password
                </label>
                <input
                  // id="email"
                  // name="email"
                  id="register-input-2"
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
                  // id="password"
                  value={reEnterPassword}
                  required
                />
              </div>
              <button className="btn btn--form b2" onClick={createNewPassword}>
                Submit
              </button>
            </form>
          </div>
          <div
            class="login-img-box"
            role="img"
            aria-label="Login Page Image"
          ></div>
        </div>
      </div>
    </section>
  );
};
