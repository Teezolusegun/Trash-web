import React, { Component } from "react";
import Header from "./Header";
import pic from "../assets/home.jpg";
// import buttonStyles from "../styles/home.module.css";
import Footer from "./Footer";
import "../App.css";

class LoginHome extends Component {
  render() {
    return (
      <div>
        <Header title="TRASH IT" />
        <br />
        <br />
        <div className="container">
          <h1>The best time to dispose that Trash is Now!</h1>
          <h3>Choose from the options below</h3>
        </div>
        <br />
        <div className="btncontainer">
          <button className="btnd">Domestic Waste</button>
          <button className="btnc">Commercial Waste</button>
          <button className="btni">Industrial Waste</button>
        </div>
        <div style={{ padding: "3%" }}>
          <img src={pic} width="90%" height="500px" />
          <p>
            ...... Home sweet Home. Made possible by TrashIt; Implore us and you
            will be glad you did
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}
export default LoginHome;
