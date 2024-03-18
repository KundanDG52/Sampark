// import React from "react";
// import "./HeaderNew.css";

// import { useNavigate } from "react-router-dom";
// import { LuLogOut } from "react-icons/lu";
// import Navlist from "../../Navlist";

// export const HeaderNew = () => {
//   const navigate = useNavigate();
//   const logout = () => {
//     navigate("/");
//   };

//   return (
//     <section id="container" tabIndex="0">
//       <section className="section-header">
//         <h3 className="heading">
//           <span className="main-heading">SAMPARK</span>
//         </h3>
//         <ul className="dashboard-list">
//           <Navlist />
//         </ul>
//         <button id="logout-button" onClick={logout}>
//           <LuLogOut id="logout-btn-icon" />
//         </button>
//       </section>
//     </section>
//   );
// };

// export default HeaderNew;
import React, { useState } from "react";
import "./HeaderNew.css";
import { useNavigate } from "react-router-dom";
// import { LuLogOut } from "react-icons/lu";
import Navlist from "../../Navlist";

export const HeaderNew = () => {
  const navigate = useNavigate();
  const logo = require("../../images/image_1.jpg");
  const [activeNav, setActiveNav] = useState(null);

  const logout = () => {
    navigate("/");
  };

  const home = () => {
    navigate("/homepage");
  };

  const handleNavClick = (navName) => {
    setActiveNav(navName === activeNav ? null : navName);
    navigate(`/${navName.toLowerCase()}`); // Automatically navigate to the corresponding route
  };

  return (
    <section id="container" tabIndex="0">
      <section className="section-header">
        <img
          className="logo-img"
          src={logo}
          alt="logo"
          width={"95px"}
          height={"85px"}
          onClick={home}
        />
        <h3 className="heading">
          <span className="main-heading">Sampark</span>
        </h3>
        <ul className="dashboard-list">
          <Navlist activeNav={activeNav} onNavClick={handleNavClick} />
        </ul>
        <button className="login-user">Admin User</button>
        <button id="logout-button" onClick={logout}>
          {/* <LuLogOut id="logout-btn-icon" Logout></LuLogOut> */}
          Logout
        </button>
      </section>
    </section>
  );
};

export default HeaderNew;
