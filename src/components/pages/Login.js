import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages-css/index.css";
import Cookies from "universal-cookie";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const loginHome = () => {
  //   navigate("/home");
  // };

  // const nav = () => {
  //   navigate("/navbar");
  // };

  const error404 = () => {
    navigate("/error404");
  };

  // const register = () => {
  //   navigate("/signupform");
  // };

  const newPassword = () => {
    navigate("/password");
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/user/login", {
      username,
      password,
    });
    if (response.data.accesstoken) {
      const cookies = new Cookies();
      cookies.set("accessToken", response.data.accesstoken, { path: "/" });
      console.log("Logged In");
      setUsername(username);
      navigate("/homepage");
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
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
            <p className="login-text">Login</p>

            <form class="login-form" name="sign-up" netlify>
              <div>
                {error !== "" ? <div className="error">{error}</div> : ""}
                <label for="full-name">User Id</label>
                <input
                  // id="full-name"
                  // name="full-name"
                  type="text"
                  placeholder="User Id"
                  name="username"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required
                />
              </div>
              <div>
                <label for="email">Password</label>
                <input
                  // id="email"
                  // name="email"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <button className="btn btn--form" id="login-btn" onClick={login}>
                Login
              </button>

              <div className="forgot-pass" onClick={newPassword}>
                Forgot your password?
              </div>
              <div onClick={error404}>
                No account?
                <span className="forgot-pass" onClick={error404}>
                  Register
                </span>
              </div>
            </form>
          </div>
          <div class="login-img-box" role="img" aria-label="Login Image"></div>
        </div>
      </div>
    </section>
  );
};
