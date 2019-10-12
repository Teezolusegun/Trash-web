import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import headStyles from "../styles/head.module.css";
import logo3 from "../assets/trashlogo.png";

const Header = props => {
  return (
    <div className={headStyles.headerContainer}>
      <img src={logo3} width="15px" height="11vh" />
      <h2>{props.title || "header"}</h2>
      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      <ul>
        <li>
          <NavLink exact activeClassName="am-active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="am-active" to="/AboutUs">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="am-active" to="/ContactUs">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="am-active" to="/Career">
            Career
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
