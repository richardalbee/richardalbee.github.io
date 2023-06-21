import React from "react";

const Footer = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <footer
      id="footer"
      className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2023{" "}
              <a
                href="#home"
                className="fw-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Richard Albee
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <p align="right"> <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frichardalbee%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Profile+Views&edge_flat=false"/> </p>
          {/*<div className="col-lg-6">
            <ul className="nav nav-separator justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms-policy"
                  href="#terms-policy"
                >
                  Terms &amp; Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#disclaimer"
                  href="#disclaimer"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
              </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
