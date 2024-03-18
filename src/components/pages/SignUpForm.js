import React, { useState } from "react";
// import "../pages-css/SignUpForm.css";
import "../pages-css/index.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://localhost:3000/createuser/signupform",
      {
        username,
        email,
        password,
      }
    );
    if (response.data.accesstoken) {
      const cookies = new Cookies();
      cookies.set("accessToken", response.data.accesstoken, { path: "/" });
      console.log("Register New User");
      setUsername(username);
      setEmail(email);
      setPassword(password);
      navigate("/");
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., send data to the server
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="login-section" id="login">
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
            <p class="login-text r2">Register New User</p>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <form
              class="login-form"
              name="sign-up"
              onSubmit={handleSubmit}
              netlify
            >
              <div>
                {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
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
                  onChange={handleChange}
                  value={username}
                  required
                />
              </div>
              <div>
                {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
                <label id="register-label-2" for="email">
                  Email Id
                </label>
                <input
                  // id="full-name"
                  // name="full-name"
                  type="email"
                  placeholder="Email Id"
                  name="email"
                  // id="username"
                  id="register-input-2"
                  onChange={handleChange}
                  value={email}
                  required
                />
              </div>
              <div>
                <label id="register-label-3" for="password">
                  Password
                </label>
                <input
                  // id="email"
                  // name="email"
                  id="register-input-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  // id="password"
                  value={password}
                  required
                />
              </div>
              <button class="btn btn--form b2" onClick={createUser}>
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

export default SignUpForm;
