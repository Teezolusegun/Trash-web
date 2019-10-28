import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap";

class Button2 extends Component {
  render() {
    return (
      <div style={{ position: "space-between" }}>
        <Link to="/signIn">
          <Button variant="primary" size="lg" active>
            Sign In
          </Button>
        </Link>

        <Link to="/signUp">
          <Button
            style={{ marginLeft: "5px" }}
            variant="primary"
            size="lg"
            active
          >
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }
}

export default Button2;
