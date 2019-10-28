import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import headStyles from "../styles/head.module.css";
import logo3 from "../assets/trashlogo.png";
import Button from "./Button";

const Header = props => {
  return (
    <div className={headStyles.headerContainer}>
      <div className={headStyles.headerContainer2}>
        <img src={logo3} alt="greet" />
      </div>
      <h1>{props.title || "header"}</h1>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Header;
