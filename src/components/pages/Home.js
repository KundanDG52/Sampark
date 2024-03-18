import React from "react";
// import "../pages-css/Home/general.css";
// import "../pages-css/Home/style.css";
// import "../pages-css/Home/queries.css";

export const Home = () => {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Omnifood is an AI-powered food subscription that will make you eat healthy again,
    365 days per year. It's tailored to your personal tastes and nutritional needs."
        />

        {/* <!-- Always include this line of code!!! --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="./img/favicon.png" />
        <link rel="apple-touch-icon" href="./img/favicon.png" />
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule=""
          src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        ></script>

        <script defer src="js/script.js"></script>

        <title>Omnifood &mdash; Never cook again!</title>
      </head>
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
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">H a r i p r a b o d h a m</h1>
            <p className="hero-description">
              <div id="description-heading">Our Jeevan sutra:</div>
              <section class="vc_row pt-60 pb-60">
                <div class="container">
                  <div class="row">
                    <div class="lqd-column col-md-3 col-sm-6">
                      <div
                        class="iconbox iconbox-icon-shadow iconbox-circle iconbox-xl iconbox-heading-sm px-2"
                        id="ld_icon_box_5c496db22efb0"
                        data-animate-icon="true"
                        data-plugin-options='{"resetOnHover":true,"color":"rgb(41, 54, 92)","hoverColor":"rgb(255, 255, 255)"}'
                      >
                        <div class="iconbox-icon-wrap">
                          <span class="iconbox-icon-container bg-white">
                            <span class="iconbox-icon-hover-bg bg-gradient-primary-br"></span>

                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              //   xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 64 64"
                              //   style="enable-background:new 0 0 312.85 312.85;"
                              //   xml:space="preserve"
                              width="64"
                              height="64"
                            >
                              <g>
                                <path
                                  d="M29.912 0.03c-0.678 -0.139 -1.357 0.219 -1.628 0.855l-9.864 23.147c-3.041 6.722 -0.235 14.771 0.964 17.632l-11.837 9.811c-0.302 0.251 -0.49 0.613 -0.522 1.004c-0.031 0.391 0.098 0.779 0.357 1.074l8.735 9.952c0.277 0.315 0.676 0.495 1.093 0.495c0.024 0 0.049 -0.001 0.074 -0.002c0.444 -0.023 0.853 -0.246 1.11 -0.608l12.392 -17.391c0.175 -0.246 0.27 -0.541 0.27 -0.843l0.001 -2.074c0.004 -8.836 0.019 -39.987 0.019 -41.627C31.074 0.763 30.589 0.168 29.912 0.03z"
                                  fill="none"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                                <path
                                  d="M56.975 52.479c-0.031 -0.391 -0.219 -0.754 -0.522 -1.004l-11.837 -9.811c1.199 -2.861 4.006 -10.91 0.964 -17.632L35.717 0.884c-0.271 -0.636 -0.951 -0.994 -1.628 -0.855c-0.677 0.138 -1.163 0.734 -1.163 1.425c0 1.64 0.015 32.791 0.019 41.627l0.001 2.074c0 0.302 0.094 0.597 0.27 0.843l12.392 17.391c0.258 0.362 0.667 0.586 1.11 0.608c0.025 0.001 0.049 0.002 0.074 0.002c0.417 0 0.816 -0.179 1.093 -0.495l8.735 -9.952C56.877 53.258 57.006 52.87 56.975 52.479z"
                                  fill="none"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div className="contents">
                          <h3 class="font-weight-semibold" id="sutra-heading-1">
                            Seva
                          </h3>
                          <p
                            id="sutra-description-1"
                            class="font-size-16 lh-165 text-fade-dark-04"
                          >
                            Aapdi seva nu 100% fad made, e rite seva thaay, enu
                            naam "Samjanpurvak Seva".
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <br />
                    <div class="lqd-column col-md-3 col-sm-6">
                      <div
                        class="iconbox iconbox-icon-shadow iconbox-circle iconbox-xl iconbox-heading-sm px-2"
                        id="ld_icon_box_5c496db22efb1"
                        data-animate-icon="true"
                        data-plugin-options='{"resetOnHover":true,"color":"rgb(41, 54, 92)","hoverColor":"rgb(255, 255, 255)"}'
                      >
                        <div class="iconbox-icon-wrap">
                          <span class="iconbox-icon-container bg-white">
                            <span class="iconbox-icon-hover-bg bg-gradient-primary-br"></span>

                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              //   xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 64 64"
                              //   style="enable-background:new 0 0 312.85 312.85;"
                              //   xml:space="preserve"
                              width="64"
                              height="64"
                            >
                              <g>
                                <path
                                  d="M29.912 0.03c-0.678 -0.139 -1.357 0.219 -1.628 0.855l-9.864 23.147c-3.041 6.722 -0.235 14.771 0.964 17.632l-11.837 9.811c-0.302 0.251 -0.49 0.613 -0.522 1.004c-0.031 0.391 0.098 0.779 0.357 1.074l8.735 9.952c0.277 0.315 0.676 0.495 1.093 0.495c0.024 0 0.049 -0.001 0.074 -0.002c0.444 -0.023 0.853 -0.246 1.11 -0.608l12.392 -17.391c0.175 -0.246 0.27 -0.541 0.27 -0.843l0.001 -2.074c0.004 -8.836 0.019 -39.987 0.019 -41.627C31.074 0.763 30.589 0.168 29.912 0.03z"
                                  fill="none"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                                <path
                                  d="M56.975 52.479c-0.031 -0.391 -0.219 -0.754 -0.522 -1.004l-11.837 -9.811c1.199 -2.861 4.006 -10.91 0.964 -17.632L35.717 0.884c-0.271 -0.636 -0.951 -0.994 -1.628 -0.855c-0.677 0.138 -1.163 0.734 -1.163 1.425c0 1.64 0.015 32.791 0.019 41.627l0.001 2.074c0 0.302 0.094 0.597 0.27 0.843l12.392 17.391c0.258 0.362 0.667 0.586 1.11 0.608c0.025 0.001 0.049 0.002 0.074 0.002c0.417 0 0.816 -0.179 1.093 -0.495l8.735 -9.952C56.877 53.258 57.006 52.87 56.975 52.479z"
                                  fill="none"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div class="contents">
                          <h3 class="font-weight-semibold" id="sutra-heading-2">
                            Smruti
                          </h3>
                          <p
                            className="sutra-description"
                            class="font-size-16 lh-165 text-fade-dark-04"
                          >
                            Swamiji ma nirantar dubine jeevvu, enu naam
                            "Smruti".
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <br />
                    <div class="lqd-column col-md-3 col-sm-6">
                      <div
                        class="iconbox iconbox-icon-shadow iconbox-circle iconbox-xl iconbox-heading-sm px-2"
                        id="ld_icon_box_5c496db22ef2"
                        data-animate-icon="true"
                        data-plugin-options='{"resetOnHover":true,"color":"rgb(41, 54, 92)","hoverColor":"rgb(255, 255, 255)"}'
                      >
                        <div class="iconbox-icon-wrap">
                          <span class="iconbox-icon-container bg-white">
                            <span class="iconbox-icon-hover-bg bg-gradient-primary-br"></span>

                            <svg
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              //   xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 64 64"
                              //   style="enable-background:new 0 0 312.85 312.85;"
                              //   xml:space="preserve"
                              width="64"
                              height="64"
                            >
                              <g>
                                <path
                                  d="M29.912 0.03c-0.678 -0.139 -1.357 0.219 -1.628 0.855l-9.864 23.147c-3.041 6.722 -0.235 14.771 0.964 17.632l-11.837 9.811c-0.302 0.251 -0.49 0.613 -0.522 1.004c-0.031 0.391 0.098 0.779 0.357 1.074l8.735 9.952c0.277 0.315 0.676 0.495 1.093 0.495c0.024 0 0.049 -0.001 0.074 -0.002c0.444 -0.023 0.853 -0.246 1.11 -0.608l12.392 -17.391c0.175 -0.246 0.27 -0.541 0.27 -0.843l0.001 -2.074c0.004 -8.836 0.019 -39.987 0.019 -41.627C31.074 0.763 30.589 0.168 29.912 0.03z"
                                  fill="none"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                                <path
                                  d="M56.975 52.479c-0.031 -0.391 -0.219 -0.754 -0.522 -1.004l-11.837 -9.811c1.199 -2.861 4.006 -10.91 0.964 -17.632L35.717 0.884c-0.271 -0.636 -0.951 -0.994 -1.628 -0.855c-0.677 0.138 -1.163 0.734 -1.163 1.425c0 1.64 0.015 32.791 0.019 41.627l0.001 2.074c0 0.302 0.094 0.597 0.27 0.843l12.392 17.391c0.258 0.362 0.667 0.586 1.11 0.608c0.025 0.001 0.049 0.002 0.074 0.002c0.417 0 0.816 -0.179 1.093 -0.495l8.735 -9.952C56.877 53.258 57.006 52.87 56.975 52.479z"
                                  fill="none"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                />
                              </g>
                            </svg>
                          </span>
                        </div>
                        <div class="contents">
                          <h3 class="font-weight-semibold" id="sutra-heading-3">
                            Suhradhbhav
                          </h3>
                          <p
                            className="sutra-description"
                            class="font-size-16 lh-165 text-fade-dark-04"
                          >
                            Dil thi sambandhno Mahima joi ane rasbas thavu, e
                            "Suhradhbhav".
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <br />
                    <div class="lqd-column col-md-3 col-sm-6">
                      <div
                        class="iconbox iconbox-icon-shadow iconbox-circle iconbox-xl iconbox-heading-sm px-2"
                        id="ld_icon_box_5c496db22ef3"
                        data-animate-icon="true"
                        data-plugin-options='{"resetOnHover":true,"color":"rgb(41, 54, 92)","hoverColor":"rgb(255, 255, 255)"}'
                      >
                        <div class="iconbox-icon-wrap">
                          <span class="iconbox-icon-container bg-white">
                            <span class="iconbox-icon-hover-bg bg-gradient-primary-br"></span>

                            <svg
                              version="1.1"
                              id="Capa_1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 64 64"
                              //   style="enable-background:new 0 0 312.85 312.85;"
                              width="64"
                              height="64"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs></defs>
                              <g
                                // style=""
                                transform="matrix(1, 0, 0, -0.962884, 0, 62.811516)"
                              >
                                <path
                                  d="M29.912 0.03c-0.678 -0.139 -1.357 0.219 -1.628 0.855l-9.864 23.147c-3.041 6.722 -0.235 14.771 0.964 17.632l-11.837 9.811c-0.302 0.251 -0.49 0.613 -0.522 1.004c-0.031 0.391 0.098 0.779 0.357 1.074l8.735 9.952c0.277 0.315 0.676 0.495 1.093 0.495c0.024 0 0.049 -0.001 0.074 -0.002c0.444 -0.023 0.853 -0.246 1.11 -0.608l12.392 -17.391c0.175 -0.246 0.27 -0.541 0.27 -0.843l0.001 -2.074c0.004 -8.836 0.019 -39.987 0.019 -41.627C31.074 0.763 30.589 0.168 29.912 0.03z"
                                  fill="none"
                                  stroke="#000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M56.975 52.479c-0.031 -0.391 -0.219 -0.754 -0.522 -1.004l-11.837 -9.811c1.199 -2.861 4.006 -10.91 0.964 -17.632L35.717 0.884c-0.271 -0.636 -0.951 -0.994 -1.628 -0.855c-0.677 0.138 -1.163 0.734 -1.163 1.425c0 1.64 0.015 32.791 0.019 41.627l0.001 2.074c0 0.302 0.094 0.597 0.27 0.843l12.392 17.391c0.258 0.362 0.667 0.586 1.11 0.608c0.025 0.001 0.049 0.002 0.074 0.002c0.417 0 0.816 -0.179 1.093 -0.495l8.735 -9.952C56.877 53.258 57.006 52.87 56.975 52.479z"
                                  fill="none"
                                  stroke="#000"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>

                        <div class="contents">
                          <h3 class="font-weight-semibold" id="sutra-heading-4">
                            Swadharm
                          </h3>
                          <p
                            className="sutra-description"
                            class="font-size-16 lh-165 text-fade-dark-04"
                          >
                            Vyakti, Padharth ane Prasang ma na bandhavaay, e
                            "Aadhyatmik Swadharm".
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </p>
            <br />
            {/* <a href="#cta" className="btn btn--full margin-right-sm">
              Jai Swaminarayan 🙏
            </a>
            <a href="#how" className="btn btn--outline">
              Dashboard &darr;
            </a> */}
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};
