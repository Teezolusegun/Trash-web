import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";



class Button2 extends Component {
  render() {
    return (
      <div style={{ position: "space-between" }}>
        <Link to="/signIn">
          <button variant="primary" size="lg" active>
            Sign In
          </button>
        </Link>

        <Link to="/signUp">
          <button
            style={{ marginLeft: "5px" }}
            variant="primary"
            size="lg"
            active
          >
            Sign Up
          </button>
        </Link>
      </div>
    );
  }
}

export default Button2;
