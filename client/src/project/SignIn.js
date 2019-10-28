import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import buttonStyles from "../styles/button.module.css";

class SignIn extends React.Component {
  state = { value: "" };

  onClick(event) {
    const url = "http://localhost:4000/user/Home2";
    const { fullName, password, phoneNumber, email } = this.state;
    const namebrk = fullName.split(" ");
    if (this.state == event.target.value) {
    }
  }

  handleSubmit(event) {
    alert("Welcome");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header title="SignIn/Login" />

        <div className="signIn">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <input
                type="text"
                placeholder="FULLNAME/COMPANYNAME"
                name="fullname"
                className="input"
                // value={this.state.value}
                // onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                className="input"
                placeholder=" ADDRESS"
                name="address"
                type="text"
              />
              <br />
              <br />

              <input
                className="input"
                name="email"
                type="text"
                placeholder=" EMAIL"
              />
              <br />
              <br />
              <input
                type="number"
                placeholder="  PHONENUMBER"
                name="phoneNumber"
                className="input"
              />
              <br />
              <br />

              <input
                type="password"
                placeholder="   PASSWORD"
                name="password"
                className="input"
              />
            </div>

            <button
              onHandleSubmit={this.handleSubmit}
              onClick={this.onClick}
              // class="btn btn-primary btn-lg"
              className="inputButton"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignIn;
