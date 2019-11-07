import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Redirect, Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    fullName: "",
    address: "",
    companyName: "",
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
    const url = "http://localhost:4000/user/signup";
    const { fullName, password, phoneNumber, email, companyName, address } = this.state;
    

    const data = {
      FullName: fullName,
      Address: address,
      CompanyName: companyName ,
      PhoneNumber: phoneNumber,
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
      .then(result => {
      console.log(result)
      this.setState({
        fullName: "",
        address: "",
        companyName: "",
        password: "",
        phoneNumber: "",
        email: ""
      })
      })
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
                placeholder="FullName"
                onChange={this.handleChange}
                className="signUp"
                name="fullName"
                type="text"
                value={this.state.fullName}
              />
              <br />
              <br />
              <input
                placeholder="Address"
                onChange={this.handleChange}
                className="signUp"
                name="address"
                type="text"
                value={this.state.address}
              />
              <br />
              <br />
              <input
                placeholder="companyName"
                onChange={this.handleChange}
                className="signUp"
                name="companyName"
                type="text"
                value={this.state.companyName}
              />
              <br />
              <br />
              <input
                placeholder="E-mail"
                onChange={this.handleChange}
                className="signUp"
                name="email"
                type="text"
                value={this.state.email}
              />
              <br />
              <br />
              <input
                placeholder="Password"
                onChange={this.handleChange}
                className="signUp"
                name="password"
                type="password"
                value={this.state.password}
              />
              <br />
              <br />
              <input
                placeholder="(+234)Phone number"
                onChange={this.handleChange}
                className="signUp"
                name="phoneNumber"
                type="number/text"
                value={this.state.phoneNumber}
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
