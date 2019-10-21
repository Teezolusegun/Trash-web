import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";

class SignIn extends React.Component {
  state = { value: "" };

  onClick(event) {
    const url = "http://localhost:4000/user/Home2";
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
            FULLNAME/COMPANY NAME:
            <input
              type="text"
              class="btn btn-primary btn-lg"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
            <br />
            <br />
            Address:
            <input type="text" />
            <br />
            <br />
            EMAIL:
            <input type="text"  />
            <br />
            <br />
            PHONENUMBER:
            <input type="number"  />
            <br />
            <br />
            PASSWORD:
            <input
              type="password"
              style={{
                padding: "15px",
                backgroundColor: "teal",
                borderRadius: "20px"
              }}
            />
            <br />
            <br />
            <button onHandleSubmit={this.handleSubmit} onClick={this.onClick}>
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
