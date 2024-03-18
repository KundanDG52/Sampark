// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// export default function Navlist() {
//   const navigate = useNavigate();

//   Navlist.propTypes = {
//     activeNav: PropTypes.string,
//     onNavClick: PropTypes.func.isRequired,
//   };
//   const navItem = [
//     {
//       text: "ATTENDENCE",
//       redirect: () => {
//         navigate("/attendence");
//       },
//     },
//     {
//       text: "DASHBOARD",
//       redirect: () => {
//         navigate("/dashboard");
//       },
//     },
//     {
//       text: "REPORT",
//       redirect: () => {
//         navigate("/report");
//       },
//     },
//     {
//       text: "SABHA",
//       redirect: () => {
//         navigate("/sabha");
//       },
//     },
//     {
//       text: "YUVAK",
//       redirect: () => {
//         navigate("/yuvak");
//       },
//     },
//   ];
//   return (
//     <>
//       {navItem.map((item) => {
//         return (
//           <li onClick={item.redirect} className="navbar-item link-1">
//             {item.text}
//           </li>
//         );
//       })}
//     </>
//   );
// }

import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function Navlist({ activeNav, onNavClick }) {
  const location = useLocation();

  const navItem = [
    {
      text: "Attendence",
      redirect: () => {
        onNavClick("ATTENDENCE");
      },
    },
    {
      text: "Dashboard",
      redirect: () => {
        onNavClick("DASHBOARD");
      },
    },
    {
      text: "Report",
      redirect: () => {
        onNavClick("REPORT");
      },
    },
    {
      text: "Sabha",
      redirect: () => {
        onNavClick("SABHA");
      },
    },
    {
      text: "Yuvak",
      redirect: () => {
        onNavClick("YUVAK");
      },
    },
  ];

  return (
    <>
      {navItem.map((item) => (
        <li
          key={item.text}
          onClick={item.redirect}
          className={`navbar-item link-1 ${
            item.text.toLowerCase() === activeNav ||
            location.pathname.includes(item.text.toLowerCase())
              ? "active"
              : ""
          }`}
        >
          {item.text}
        </li>
      ))}
    </>
  );
}

Navlist.propTypes = {
  activeNav: PropTypes.string,
  onNavClick: PropTypes.func.isRequired,
};
