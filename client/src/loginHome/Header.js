import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import headStyles from "../styles/head.module.css";
import logo3 from "../assets/trashlogo.png";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Career from "./Career";

const Header = props => {
  return (
    <div className={headStyles.headerContainer}>
      <div className={headStyles.headerContainer2}>
        <img src={logo3} />
      </div>
      <h1>{props.title || "TrashIt"}</h1>
      <div></div>
      {/* <ul>
        <AboutUs />
        <ContactUs />
        <Career />
      </ul> */}
    </div>
  );
};

export default Header;
