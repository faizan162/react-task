import React from "react";
import "./services.css";
import image from "../Images/Mechanical/Rectangle 247.png";

const Services = () => {
  return (
    <>
      <div className="main-div">
        <div className="benefits-img">
          <img src={image} alt="Benefits" />
        </div>
        <div className="benefits">
          <div className="benefits-of-mech">
            <h2>Benefits of Mechanical Estimating</h2>
            <ul>
              <li>Getting access to the industry standards insights.</li>
              <li> Understanding the internal project cost.</li>
              <li>Getting the most reliable mechanical estimates. </li>
              <li>Increasing the probability of high profit.</li>
              <li>Boosting their win-bid ratio. </li>
              <li>
                Streamlining their project activities with more confidence.
              </li>
              <li>
                Identifying the errors and flaws in their mechanical project.
              </li>
              <li>
                Mitigating the potential risk while saving their time and money.
              </li>
            </ul>
          </div>
          <div className="plumbing-fee">
            <h2>Our Plumbing Estimating Services</h2>
            <div className="plumbing-lists">
              <ul>
                <li>Cold Water Pipes</li>
                <li>Hot Water Pipes</li>
                <li>Vent Pipes</li>
                <li>Gas Pipes</li>
                <li>Sanitary Pipes</li>
                <li>Underground Pipes</li>
                <li>Pipe Fittings</li>
              </ul>
              <ul>
                <li>Pipe Concealment </li>
                <li>Insulations</li>
                <li>Valves</li>
                <li>Hangers</li>
                <li>Struts</li>
                <li>Supports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
