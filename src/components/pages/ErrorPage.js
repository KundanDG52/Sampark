import React from "react";
import "../pages-css/404/Error404.css";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <section class="page_404">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>

              <div class="contant_box_404">
                {/* <p id="js">Jai Swaminarayan 🙏</p> */}
                <p id="js">Error</p>
                {/* <h3 class="h2">
                  Look like you're lost, the page you are looking for not
                  available!
                </h3> */}
                <h3 class="h2">Page Not Found</h3>

                <button href="#link" class="link_404" onClick={home}>
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
