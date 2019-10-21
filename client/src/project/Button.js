import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";

class Button2 extends Component {
  render() {
    return (
      <div style={{ position: "space-inbetween" }}>
        <Link to="/signIn">
          {/* <button style={{ padding: "15px", borderRadius: "25px" }}>
            Sign In
          </button> */}
          <Button variant="primary" size="lg" active>
            Sign In
          </Button>
        </Link>

        <Link to="/signUp">
          {/* <button style={{ padding: "15px", borderRadius: "25px" }}>
            Sign Up
          </button> */}
          <Button variant="primary" size="lg" active>
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }
}

export default Button2;
