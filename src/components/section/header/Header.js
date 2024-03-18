import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { IconButton } from "rsuite";
// import { Admin, Menu, Search } from "@rsuite/icons";
import { LuLogOut } from "react-icons/lu";

export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  const onDashboard = () => {
    navigate("/dashboard");
  };

  // const ButtonStyle = { margin: "5px" };
  return (
    <section className="main">
      <section className="header-section">
        <h3 className="header">
          {/* <section className="hp-logo" onClick={onDashboard}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="circle-1"></div>
            <div className="semi-circle"></div>
          </section> */}
          <span className="main-header" onClick={onDashboard}>
            Sampark
          </span>
        </h3>
        {/* <h4 className="user-name">
          <IconButton
            className="admin-icon"
            icon={<Admin />}

            // circle
          />
          {"  "}
          Admin Name
        </h4> */}
        <button className="logout-btn" onClick={logout}>
          <LuLogOut className="logout-icon" />
        </button>
      </section>
    </section>
  );
};

export default Header;
