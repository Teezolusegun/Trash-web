import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import signinup from "../styles/signinup.module.css";
import button from "../styles/button.module.css";

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
    const namebrk = fullName.split(" ");

    const data = {
      FirstName: namebrk[0],
      LastName: namebrk[1],
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
        <Header title="SignUp/Register with us" />
        <div className={signinup.signContainer}>
          <div className="signUp">
            <div>
              <h2>Sign Up/Create Account</h2>
            </div>
            <div className="input">
              <input
                placeholder="FullName or CompanyName"
                onChange={this.handleChange}
                name="fullName"
                type="text"
              />
              <br />
              <br />
              <input
                placeholder="Address"
                onChange={this.handleChange}
                name="Address"
                type="text"
              />
              <br />
              <br />
              <input
                placeholder="E-mail"
                onChange={this.handleChange}
                name="email"
                type="text"
              />
              <br />
              <br />
              <input
                placeholder="Password"
                onChange={this.handleChange}
                name="password"
                type="password"
              />
              <br />
              <br />
              <input
                placeholder="(+234)Phone number"
                onChange={this.handleChange}
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
                <br />
                <div>OR</div>
                <br />
                <br />
                <div>
                  <button className="btn2">REGISTER WITH FACEBOOK</button>
                </div>
                <div>
                  <p>Already have an account?</p>

                  <p>
                    <a href="#" className="lara">
                      LOGIN
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
