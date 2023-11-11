import React from "react";
import "./aboveNavbar.css";

const AboveNavbar = () => {
  return (
    <>
      <div className="AboveNavbar">
        <div className="AboveNavbarCenter">
          <h2>TURNAROUND TIME 24-48 HOURS!</h2>
          <div className="discount">
            <h3>Affordable Estimate (30% off) </h3>
          </div>
        </div>
        <div className="AboveNavbarRight">
          <div className="contacts">
            <h2>
              <i class="fa-solid fa-phone"></i> &nbsp; +1 917 300 1079
            </h2>
            <h3>
              <i class="fa-solid fa-envelope"></i> &nbsp;
              Dave@procoreestimators.com
            </h3>
          </div>
          <div className="socials">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboveNavbar;
