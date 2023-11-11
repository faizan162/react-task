import React from "react";
import "./startWithUs.css";

const StartWithUs = () => {
  return (
    <>
      <div className="main">
        <div className="main-h2">
          <h2>Are You Ready To Get Started With Us!</h2>
        </div>
        <div className="main-body">
          <p className="main-head">1- Upload your Plans</p>
          <p className="main-description">
            <a href="#ClickHere">Click Here</a> &nbsp;to upload your plans. we
            accept PDF format and your plans can be Bid set, Schematic, Design
            Development, Construction document, or conceptual drawings.
          </p>
          <p className="main-head">2- Get a Quote</p>
          <p className="main-description">
            Quotes will be based on invoice, delivery date, and turnaround time.
          </p>
          <p className="main-head">3- Receive Estimate</p>
          <p className="main-description">
            Estimates will be delivered to you in EXCEL sheets comprising all
            the material and labor pricing with cut reports either in
            MasterFormat or your customized format.
          </p>
        </div>
      </div>
    </>
  );
};

export default StartWithUs;
