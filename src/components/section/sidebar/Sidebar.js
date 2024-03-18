import React from "react";
import "./Sidebar.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  // const [isActive, setIsActive] = useState(true);

  const navigate = useNavigate();

  const onDashboard = () => {
    navigate("/dashboard");
  };

  const onYuvak = () => {
    navigate("/yuvak");
  };
  const onSabha = () => {
    navigate("/sabha");
  };
  const onAttendence = () => {
    navigate("/attendence");
  };
  const onReport = () => {
    navigate("/report");
  };

  return (
    <section className="sidebar">
      <ul className="sidebar-section">
        <a href="#Dashbord" className="link">
          {" "}
          <li
            className="section-item"
            onClick={onDashboard}
            // style={{   }}
          >
            Dashboard
          </li>
        </a>
        <li className="section-item" onClick={onYuvak}>
          Yuvak
        </li>
        <a href="#Sabha" className="link">
          <li
            className="section-item"
            onClick={onSabha}
            // style={}
          >
            Sabha
          </li>
        </a>
        <a href="#Attendence" className="link">
          <li
            className="section-item"
            onClick={onAttendence}
            // style={}
          >
            Attendence
          </li>
        </a>
        <a href="#Report" className="link">
          <li
            className="section-item"
            onClick={onReport}
            // style= {}
          >
            Report
          </li>
        </a>
      </ul>
      <header class="header">
        <a href="#f">
          <img class="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
        </a>

        <nav class="main-nav">
          <ul class="main-nav-list">
            <li>
              <a class="main-nav-link" href="#how">
                How it works
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#meals">
                Meals
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a class="main-nav-link nav-cta" href="#cta">
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        <button class="btn-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </section>
  );
};

export default Sidebar;
