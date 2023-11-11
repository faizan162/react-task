import React, { Component } from "react";
import logo from "../Images/Mechanical/logo .png";
import "./navbar.css";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="navbarMain">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="buttons">
            <ul
              id="navbar"
              className={this.state.clicked ? "navbar active" : "navbar"}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#Service">Service</a>
              </li>
              <li>
                <a href="#AboutUs">About us</a>
              </li>
              <li>
                <a href="#Payment">Payment</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#Samples">Samples</a>
              </li>
              <li>
                <a href="#Estimationfee">Estimation fee</a>
              </li>
              <li>
                <a href="#ContactUs">Contact us</a>
              </li>
              <button className="estimation">
                <a href="GetEstimate">Get Estimate</a>
              </button>
            </ul>
          </div>
          <div className="mobile" onClick={this.handleClick}>
            <i
              id=""
              className={
                this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
