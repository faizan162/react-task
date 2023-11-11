import React from "react";
import "./footer.css";
import logo from "../Images/Mechanical/logo .png";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-main-two">
          <div className="footer-left">
            <img src={logo} alt="Logo" />
            <p>
              <span>PROCORE Estimators</span> are an industry leader in
              providing accurate and reliable construction cost estimation
              services. We specialize in Quantity and Material Takeoff,
              Scheduling, and Planning for your project management needs. Our
              experts use advanced softwares and we pay close attention to
              detail to ensure accurate estimates. We provide you with accurate
              information in a timely manner, enabling you to make informed
              decisions and execute projects efficiently. Rely on PROCORE
              Estimators for precise and prompt cost estimation in construction.
            </p>
          </div>
          <div className="footer-center">
            <ul>
              <li>
                <a href="#navigaton" className="navi">
                  Navigation
                </a>
              </li>
              <li>
                <a href="#Service">Service</a>
              </li>
              <li>
                <a href="Aboutus">About us</a>
              </li>
              <li>
                <a href="#Payment">Payment</a>
              </li>
              <li>
                <a href="#Sample">Sample</a>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h2>Contact</h2>
            <p>
              <i class="fa-solid fa-location-dot "></i> &nbsp; 2505 Bedford Ave,
              Brooklyn, NY 11226, USA
            </p>
            <p>
              <i class="fa-solid fa-phone"></i> &nbsp; +1 917 300 1079
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> &nbsp;
              Dave@procoreestimators.com
            </p>
          </div>
        </div>
        <p>
          Copyright © 2023 Procore Estimators Designed By <span>MF</span> &nbsp;
          <strong>Bzone</strong>
        </p>
      </div>
    </>
  );
};

export default Footer;
