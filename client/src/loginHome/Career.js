import React, { Component } from "react";



class Career extends Component {
  render() {
    return (
      <div className="career">
      
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
          <br />
          <br />
          <br />
          <input
            placeholder="statement of interest"
            style={{ height: "150px" }}
          />{" "}
          <button>enter</button>
        </div>
      
      </div>
    );
  }
}

export default Career;
