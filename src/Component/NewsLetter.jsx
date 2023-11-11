import React from "react";
import "./newsletter.css";
import dropBox from "../Images/Mechanical/dropbox.png";
import googleDrive from "../Images/Mechanical/Google_Drive_logo.png";

const NewsLetter = () => {
  return (
    <>
      <div className="newsletter-main">
        <div className="newsletter-left">
          <button>Upload Your Plans</button>
          <div>
            <a href="#dropbox">
              <img src={dropBox} alt="DropBox" width={46} />
            </a>
            <a href="#googledrive">
              <img src={googleDrive} alt="Google Drive" width={37} />
            </a>
          </div>
        </div>
        <div className="newsletter-right">
          <p>
            For a quick quote based on your project scope, call us at +1 917 300
            1079 or email us at Dave@procoreestimators.com{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
