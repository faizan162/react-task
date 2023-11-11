import React from "react";
import "./ourTrades.css";
import imageOne from "../Images/Mechanical/Rectangle 186.png";
import imageTwo from "../Images/Mechanical/Rectangle 186(1).png";
import imageThree from "../Images/Mechanical/Rectangle 186(2).png";
import imageFour from "../Images/Mechanical/Rectangle 186(3).png";

const OurTrades = () => {
  return (
    <>
      <div className="trade-main">
        <h2>Take a look at our Trades</h2>
        <div className="trade-category">
          <div className="trade-product">
            <img src={imageOne} alt="Trade" />
            <div className="trade-product-details">
              <p>General Requirement</p>
            </div>
          </div>
          <div className="trade-product">
            <img src={imageTwo} alt="Trade" />
            <div className="trade-product-details">
              <p>Site Works</p>
            </div>
          </div>
          <div className="trade-product">
            <img src={imageThree} alt="Trade" />
            <div className="trade-product-details">
              <p>Concrete</p>
            </div>
          </div>
          <div className="trade-product">
            <img src={imageFour} alt="Trade" />
            <div className="trade-product-details">
              <p>Masonry</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTrades;
