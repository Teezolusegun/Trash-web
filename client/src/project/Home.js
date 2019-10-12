import React, { Component } from "react";
import Header from "./Header";
import pic from "../assets/cleanstreet.jpg";
import pic1 from "../assets/dirtystreet.jpg";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header title="TRASH IT" />
        </div>

        <h1>The best time to dispose that Trash is Now!</h1>
        <p>Cleaniness is next to Godliness</p>
        <img src={pic} />
        <img src={pic1} />
        <h4>
          Why not register with us today and let us take away your Garbage
        </h4>
        <Footer />
      </div>
    );
  }
}
export default Home;
