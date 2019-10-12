import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer";

class SignUp extends Component {
  render() {
    return (
      <div className="contmain">
       
          <div className="signup"></div>
          <div>
            <div>
              <h3>Create Account</h3>
            </div>
            <div className="inputx">
              <input placeholder="First Name" type="text" />
              <input placeholder="Last Name" type="text" />
              <input placeholder="E-mail" type="text" />
              <input placeholder="Password" type="text/number" />
              <input placeholder="(+234)Phone number" type="number/text" />
              <br />
              <br />
              <br />
              <p>I want to receive TrashIt Newsletters and the best offers</p>
              <br />
              <div className="btns">
                <div>
                  <button className="btn1">CREATE ACCOUNT</button> <br />
                </div>
                <div>OR</div>
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
     
    );
  }
}
export default SignUp;
