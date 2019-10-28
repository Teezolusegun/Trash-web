import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Redirect, Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    fullName: "",
    password: "",
    phoneNumber: "",
    email: ""
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const url = "http://localhost:4000/user/signIn";
    const { fullName, password, phoneNumber, email } = this.state;
    const namebrk = fullName.push(" ");

    const data = {
      fullName: namebrk,
      Email: email,
      Password: password
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header title="SignUp/Register" />
        <br />
        <br />
        <div className="signUpContainer">
          <div>
            <h1 style={{ marginLeft: "10px" }}>Sign Up/Create Account</h1>
            <br />
            <div>
              <input
                placeholder="FullName or CompanyName"
                onChange={this.handleChange}
                className="signUp"
                name="fullName"
                type="text"
              />
              <br />
              <br />
              <input
                placeholder="Address"
                onChange={this.handleChange}
                className="signUp"
                name="Address"
                type="text"
              />
              <br />
              <br />
              <input
                placeholder="E-mail"
                onChange={this.handleChange}
                className="signUp"
                name="email"
                type="text"
              />
              <br />
              <br />
              <input
                placeholder="Password"
                onChange={this.handleChange}
                className="signUp"
                name="password"
                type="password"
              />
              <br />
              <br />
              <input
                placeholder="(+234)Phone number"
                onChange={this.handleChange}
                className="signUp"
                name="phoneNumber"
                type="number/text"
              />
              <br />
              <br />
              <p>I want to receive TrashIt Newsletters and the best offers</p>
              <br />
              <div className="btns">
                <div>
                  <button onClick={this.handleSubmit} className="btn1">
                    CREATE ACCOUNT
                  </button>
                  <br />
                </div>
                <br />

                <h3>OR</h3>

                <br />

                <Link to="www.facebook.com">
                  <button className="btn2">REGISTER WITH FACEBOOK</button>
                </Link>
                <br />
                <br />
                <div>
                  <h5>Already have an account?</h5>
                  <br />
                  <h4>
                    <a href="/SignIn" className="btn2">
                      LOGIN
                    </a>
                  </h4>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignUp;
