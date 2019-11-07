import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import  {Redirect} from "react-router-dom"
import buttonStyles from "../styles/button.module.css";

class SignIn extends React.Component {
  state = { 
    fullname: "",
    email:"",
    password:""
 };

  handleChange =({target})=>{
      const { name, value } = target;
      this.setState({
        [name]: value
      });
    
  }

  handleSubmit = (e)=>{
    const url = "http://localhost:4000/user/login";
    const {fullname, email, password}= this.state
    const data = {
    Email:email,
    Password: password
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }) .then(res => res.json())
    .then(result => {
    console.log(result)
    this.props.history.push("/User")
    this.setState({
      fullName: "",
      password: "",
      email: ""
    })
  
    })
    .catch(err => console.log(err));
    e.preventDefault()
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
             onChange={this.handleChange}
             value={this.state.fullname}
              />
              <br />
              <br />
              

              <input
                className="input"
                name="email"
                type="text"
                placeholder=" EMAIL"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <br />
              <br />
              

              <input
                type="password"
                placeholder="   PASSWORD"
                name="password"
                className="input"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
<input type="submit"
placeholder="Submit"
name="submit"
className="inputButton"
/>
           
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default SignIn;
