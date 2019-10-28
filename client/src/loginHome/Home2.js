import React, { Component } from "react";
import Header from "./Header";
import pic from "../assets/home.jpg";
import buttonStyles from "../styles/button.module.css";
import Footer from "./Footer";

class LoginHome extends Component {
  render() {
    return (
      <div>
        <div>
          <Header title="TRASH IT" />
          <br />
          <br />
          <h3>Choose from the options below</h3>
        </div>
        <div className={buttonStyles.buttonContainer}>
          <button className={buttonStyles.buttonContainer}>
            Domestic Waste
          </button>
          <button style={{ backgroundColor: "brown" }}>Commercial Waste</button>
          <button style={{ backgroundColor: "yellow" }}>
            Industrial Waste
          </button>
        </div>
        <h1>The best time to dispose that Trash is Now!</h1>
        <h4>Cleaniness is next to Godliness</h4>
        <img src={pic} />
        <p>Imploy us and you will be glad you did</p>
        <Footer />
      </div>
    );
  }
}
export default LoginHome;
