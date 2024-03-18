import React from "react";
import "../pages-css/HomePage.css";
import HeaderNew from "../section/header/HeaderNew";

export const HomePage = () => {
  const homePageImage = require("../images/hero-bg-new.jpg");
  // const svg = require("../images/ssss.png");
  return (
    <>
      <div id="home-container">
        <HeaderNew />
        <img className="home-img" src={homePageImage} alt="Home-Page-Img" />
        <h2 class="ld-fh-txt">
          Our Jeevan sutra:{" "}
          <p class="txt-rotate-keywords">
            <p class="keyword seva">
              Seva
              {/* <img className="img-svg" src={svg} alt="Svg" /> */}
            </p>
            {/* <hr style={{ width: "70%" }} />   */}
            <p class="keyword smruti">
              Smruti
              {/* <img className="img-svg" src={svg} alt="Svg" /> */}
            </p>
            {/* <hr style={{ width: "70%" }} /> */}
            <p class="keyword suhradhbhav">
              Suhradhbhav
              {/* <img className="img-svg" src={svg} alt="Svg" /> */}
            </p>
            {/* <hr style={{ width: "70%" }} /> */}
            <p class="keyword swadharm">
              Swadharm{" "}
              <span class="your-emoji-class">
                {/* <img className="img-svg" src={svg} alt="Svg" /> */}
              </span>
            </p>
          </p>
        </h2>
      </div>
    </>
  );
};
