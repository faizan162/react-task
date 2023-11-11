import React from "react";
import "./plumbing.css";
import imageOne from "../Images/Mechanical/Rectangle 220(1).jpg";
import imageTwo from "../Images/Mechanical/Rectangle 220.png";
import imageThree from "../Images/Mechanical/Rectangle 220(2).png";

const Plumbing = () => {
  return (
    <>
      <div className="plumbingText">
        <h1>Plumbing Estimation Data</h1>
      </div>
      <div className="plumbingMechanical">
        <div className="plumbingMechData">
          <div className="plumbingHead">Piping Systems</div>
          <div className="plumbingImg">
            <img src={imageOne} alt="Engineer" />
          </div>
        </div>
        <div className="plumbingMechData">
          <div className="plumbingHead">Fixtures and Sanitaryware</div>
          <div className="plumbingImg">
            <span>
              <img src={imageTwo} alt="Engineer" />
            </span>
          </div>
        </div>
        <div className="plumbingMechData">
          <div className="plumbingHead">Drainage and Water Supply</div>
          <div className="plumbingImg">
            <img src={imageThree} alt="Engineer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Plumbing;
