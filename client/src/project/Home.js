import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import headStyles from "../styles/home.module.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Lets Trash It" />

        <div className={headStyles.homeContainer}>
          <h1 style={{ color: "blue" }}>
            The best time to dispose that Trash is Now!!
          </h1>
          <br />
          <br />
          <h2 style={{ color: "orange" }}>
            Always remember,Cleaniness is next to Godliness
          </h2>
          <h4>
            Lets take the first step in making heaven by keeping our environment
            clean so sign up with us today!
          </h4>
          <div>
            <h3 className="writ">would you rather have this</h3>
            <img className="street" />
          </div>

          <br />
          <h4>
            Why not register with us today and let us take away your Garbage
          </h4>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Home;
