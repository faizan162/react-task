import React from "react";
import "./mechanicaldata.css";
import imageOne from "../Images/Mechanical/Rectangle 218.png";
import imageTwo from "../Images/Mechanical/Rectangle 219.jpg";
import imageThree from "../Images/Mechanical/Rectangle 220.jpg";
const MechanicalData = () => {
  return (
    <>
      <div className="text">
        <h1>Mechanical Estimation Data</h1>
      </div>
      <div className="mechanical">
        <div className="mechData">
          <div className="head">HVAC</div>
          <div className="img">
            <img src={imageOne} alt="Engineer" />
          </div>
        </div>
        <div className="mechData">
          <div className="head">Mechanical Equipment Installation</div>
          <div className="img">
            <span>
              <img src={imageTwo} alt="Engineer" />
            </span>
          </div>
        </div>
        <div className="mechData">
          <div className="head">Energy Efficiency Upgrades</div>
          <div className="img">
            <img src={imageThree} alt="Engineer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MechanicalData;
