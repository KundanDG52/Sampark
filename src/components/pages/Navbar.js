import React from "react";

export const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <header class="header">
        <div class="heading-primary" id="nav-heading">
          Sampark
        </div>

        <nav class="main-nav">
          <ul class="main-nav-list">
            <li>
              <a class="main-nav-link" href="#attendance">
                Attendance
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#report">
                Report
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#pricing">
                Sabha
              </a>
            </li>
            <li>
              <a class="main-nav-link" href="#yuvak">
                Yuvak
              </a>
            </li>
            <li>
              <a class="main-nav-link nav-cta" href="#cta">
                L O G O U T
              </a>
            </li>
          </ul>
        </nav>

        <button class="btn-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </div>
  );
};
