import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Career extends Component {
  render() {
    return (
      <div>
        <Header title="TRASH IT" />
        <h5>
          At TrashIt, we like to work with well meaninng Nigerians that shares
          thesame vision with us.
        </h5>
        <p>
          If you think you have what it takes, please drop your CV and statement
          of interest of not more than 200 words in the spaces provided below
        </p>
        <div>
          <input placeholder="attach your CV"></input>
          <button>attach</button>
          <input placeholder="statement of interest" /> <button>enter</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Career;
