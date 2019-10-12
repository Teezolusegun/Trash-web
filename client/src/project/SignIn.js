import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Thanks for the info:Welcome  " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="signIn">
        <form onSubmit={this.handleSubmit}>
          <label>
            FullName:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Address:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            Email:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Footer />
      </div>
    );
  }
}
export default SignIn;
