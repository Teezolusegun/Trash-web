import React, { Component } from "react";
import Header from "./Header";
import pic from "../assets/cleanstreet.jpg";
import pic1 from "../assets/dirtystreet.jpg";
import Footer from "./Footer";

class LoginHome extends Component {
  render() {
    return (
      <div>
        <div>
          <Header title="TRASH IT" />
          <h5>Choose from the options below</h5>
        </div>
        <div>
          <button style={{ backgroundColor: "orange" }}>Domestic Waste</button>
          <button style={{ backgroundColor: "brown" }}>Commercial Waste</button>
          <button style={{ backgroundColor: "yellow" }}>
            Industrial Waste
          </button>
        </div>
        <h1>The best time to dispose that Trash is Now!</h1>
        <p>Cleaniness is next to Godliness</p>
        <img src={pic} />
        <img src={pic1} />
        <Footer />
      </div>
    );
  }
}
export default LoginHome;
